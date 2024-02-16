export const StrongPasswordRegx: RegExp =
  /^(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
export const StrongPasswordWidthOutSymRegx: RegExp =
  /^(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d).{8,}$/;
export const StrongPasswordWidthOutNumbRegx: RegExp =
  /^(?=[^a-zA-Z]*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
export const StrongPasswordWidthOutCharRegx: RegExp =
  /^(?=\D*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
