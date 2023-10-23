import Link from "next/link";
import AbilityGame from "../components/ability/Game";

export default function Classic() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-bg.jpg')",
        }}
        className="bg-cover h-full w-full fixed z-[-10]"
      ></div>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full py-2">
        <div className="bg-gradient-to-b from-btn-border-light to-btn-border-dark p-2 font-medium fixed top-1 left-1">
          <Link className="text-input-text" href="/">
            Back
          </Link>
        </div>
        <AbilityGame />
      </div>
    </>
  );
}
