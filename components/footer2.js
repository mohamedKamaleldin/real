
const Footer2 = () => {
  return (
    <div
      className="self-stretch flex flex-row p-[50px] items-start justify-start  md:w-auto md:flex-row sm:flex-col"
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] ">
        <div className="w-[312px]  flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img 
            className=" w-11 h-11" 
            alt="" src="houseline.svg" />

            <div className="flex flex-col items-start justify-start">
              <div className=" leading-[24px] font-semibold">REIS</div>
              <div className=" text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className=" text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className=" leading-[24px]">Call : +90 541 961 68 35</div>
            <div className=" leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className=" leading-[24px] text-gray-700">
              Email: mkee@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <a href="https://www.instagram.com/m.ke.e/" className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-[21.67px]"
                alt=""
                src="/social-media-logo.svg"
              />
            </a>
            <a href="https://www.instagram.com/m.ke.e/"  className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo1.svg"
              />
            </a>
            <a href="https://www.instagram.com/m.ke.e/"  className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo2.svg"
              />
            </a>
            <a href="https://www.instagram.com/m.ke.e/"  className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo3.svg"
              />
            </a>
            <a href="https://www.instagram.com/m.ke.e/"  className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
              <img
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo4.svg"
              />
            </a>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a href="./" className=" text-gray-500  leading-[24px]">Home</a>
            <a href="./" className=" text-gray-500 leading-[24px]">Become a Host</a>
            <div className=" leading-[24px]">Pricing</div>
            <div className=" leading-[24px]">Blog</div>
            <div className=" leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className=" leading-[24px]">About Us</div>
            <div className=" leading-[24px]">Press</div>
            <div className=" leading-[24px]">Contact</div>
            <div className=" leading-[24px]">Careers</div>
            <div className=" leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className=" leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className=" leading-[24px]">Terms of servies</div>
            <div className=" leading-[24px]">Privacy Policy</div>
            <div className=" leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
