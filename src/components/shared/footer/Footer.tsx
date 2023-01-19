import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-primary-100 py-16 mt-6 md:mt-24">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
              Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
              purus et arcu massa dictum condimentum. Augue scelerisque iaculis
              orci ut habitant laoreet. Iaculis tristique.
            </p>
            <p>© Yafit All Rights Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Social Media</h4>
            <p className="my-5">Instagram</p>
            <p className="my-5">FaceBook</p>
            <p>Email</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
            <p>+972 (123)425-9269</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer