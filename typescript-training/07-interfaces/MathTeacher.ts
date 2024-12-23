import { Teacher } from "./Teacher";

export class MathTeacher implements Teacher {
  getDailyActivity(): string {
    return "Learning aljabar.";
  }
}
