const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-sm">© 2024 Emoji World. All rights reserved.</p>
        <div className="flex mt-2 sm:mt-0">
          <a
            href="https://github.com/hussain-ahmed2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:hussainahemd.vu@gmail.com"
            className="text-white mx-2 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
