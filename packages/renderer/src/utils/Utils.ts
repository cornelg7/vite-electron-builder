export default class Utils {
  static instance: Utils;
  downloadBase64File: (contentBase64: string, fileName: string) => void;

  private constructor() {
    this.downloadBase64File = (contentBase64: string, fileName: string) => {
      const linkSource = `${contentBase64}`;
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);

      downloadLink.href = linkSource;
      downloadLink.target = '_self';
      downloadLink.download = fileName;
      downloadLink.click();
    };
  }

  static getInstance(): Utils {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }
}
