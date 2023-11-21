import { Schema, model } from "mongoose";
import {
  IManagementDepartment,
  ManagementDepartmentModel,
} from "./managementDepartment.interface";

const managementDepartmentSchema = new Schema<
  IManagementDepartment,
  ManagementDepartmentModel
>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const ManagementDepartment = model<
  IManagementDepartment,
  ManagementDepartmentModel
>("ManagementDepartment", managementDepartmentSchema);

export default ManagementDepartment;
