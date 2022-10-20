import { RESTDataSource } from "apollo-datasource-rest";

class CanvasAPI extends RESTDataSource {
    willSendRequest(request: any) {
        request.headers.set(
            "Authorization",
            `Bearer ${this.context.Authorization}`
        );
    }

    willSendResponse(response: any) {
        // console.log(response.headers)
    }

    constructor() {
        super();
        this.baseURL = "https://fhict.instructure.com/api/v1";
    }

    async getCourseData() {
        return this.get("courses");
    }

    async getAssignmentData(courseId: number) {
        return this.get(`courses/${courseId}/assignments`);
    }

    async getSubmissionData(courseId: number, assignmentId: number) {
        return this.get(
            `courses/${courseId}/assignments/${assignmentId}/submissions`
        );
    }
}

export default CanvasAPI;
