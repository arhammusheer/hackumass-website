import Image from "next/image.js";

export default function Sponsors() {
  return (
    <div className="Sponsors" id="sponsors">
      <div className="LandingAboutHeader">
        <h1 className="heading">Our Sponsors</h1>
      </div>
      <div className="SponsorImages">
        <div className="SponsorImagesUpper">
          <Image
            src="/SponsorCOE.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="College of Engineering"
          />
          <Image
            src="/SponsorCICS.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="College of Information and Computer Sciences"
          />
          <Image
            src="/SponsorBE.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="Berthiaume Center for Entrepreneurship"
          />
        </div>
        <div className="SponsorImagesUpper">
          <Image
            src="/SponsorKPMG.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="KPMG"
          />
          <Image
            src="/SponsorMitre.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="MITRE"
          />
          <Image
            src="/SponsorStandOutSticker.png"
            sizes={"2000"}
            width={0}
            height={0}
            priority={true}
            alt="StandOut Stickers"
          />
        </div>
      </div>
      <div className="WhySponsor">
        <div className="WhySponsorLeft">
          <h1 className="h1">Why should you sponsor us?</h1>
          <p className="p">
            HackUMass is one of the largest tech events at UMass Amherst,
            providing sponsors with exclusive access to hundreds of participant
            resumes and direct opportunities to engage with students during the
            event, along with other valuable benefits. Our team collaborates
            with sponsors to customize packets tailored to the company’s needs,
            ensuring maximum exposure that benefits both students and the
            company.
          </p>

          <button
            className="WhySponsorButton"
            onClick={() => window.open("mailto:team@hackumass.com", "_blank")}
          >
            <p style={{ margin: "auto" }}>Sponsor HackUMass</p>
          </button>
        </div>
        <div className="WhySponsorRight">
          <Image
            src="/SponsorUsRight.png"
            width={0}
            height={0}
            sizes="2000"
            priority={true}
            alt="Sponsor Us"
          />
        </div>
      </div>
      {/* <div className="LandingAboutHeader2">
        <h1 className="heading">Our Partners</h1>
      </div>
      <div className="PartnerImages">
        <Image
          src="/Partners.png"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
      </div> */}
    </div>
  );
}
