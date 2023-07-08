import React from "react";
import Btn from "../../components/buttons/Btn";

export default function WelcomePage() {
  return (
    <div>
      <div>WelcomePage</div>
      <Btn
        icon={"VscGitPullRequestGoToChanges"}
        text={"Tombol"}
        class={"bg-blue-500 hover:bg-blue-600"}
      />
    </div>
  );
}
