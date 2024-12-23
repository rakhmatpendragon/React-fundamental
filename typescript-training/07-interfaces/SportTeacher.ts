import { Teacher } from "./Teacher";

export class SportTeacher implements Teacher {
  getDailyActivity(): string {
    return "Learning all rules about basket ball.";
  }
}
