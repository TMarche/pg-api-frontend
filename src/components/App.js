import React from "react";
import { connect } from "react-redux";
import { getData, getUsers } from "../actions";
import Button from "@mui/material/Button";
import { OrderedMap } from "immutable";
import { getGetUsersStatus, getStatus } from "../selectors";
import "../global.scss";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Button
                        variant="contained"
                        color={this.getColor(this.props.getGetUsersStatus)}
                        onClick={this.props.getUsers}
                    >
                        {this.getStatusMessage(this.props.getGetUsersStatus)}
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        color={this.getColor(this.props.status)}
                        onClick={this.props.getData}
                    >
                        {this.getStatusMessage(this.props.status)}
                    </Button>
                </div>
            </div>
        );
    }

    getStatusMessage(status) {
        const statusMessages = OrderedMap({
            NONE: "Get Users",
            REQUESTING: "Requesting...",
            RECEIVED_SUCCESS: "Successful",
            RECEIVED_FAILURE: "Failure",
        });
        return statusMessages.get(status);
    }

    getColor(status) {
        const statusColors = OrderedMap({
            NONE: "primary",
            REQUESTING: "primary",
            RECEIVED_SUCCESS: "success",
            RECEIVED_FAILURE: "error",
        });
        return statusColors.get(status);
    }
}

const mapDispatchToProps = {
    getData,
    getUsers,
};

const mapStateToProps = (state) => {
    return {
        status: getStatus(state),
        getGetUsersStatus: getGetUsersStatus(state),
        users: getUsers(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
