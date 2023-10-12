import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <>
        <div
          style={{
            backgroundImage:
              "url('https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/magic-bg.jpg')",
          }}
          className="bg-cover h-full w-full fixed z-[-10]"
        ></div>
        <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
          <div className="bg-gradient-to-b from-btn-border-light to-btn-border-dark p-2 font-medium">
            <Link className="text-input-text" href="/classic">
              Loldle Unlimited
            </Link>
          </div>
        </div>
      </>
    </main>
  );
}
