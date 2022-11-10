export default interface Convert {
  execute(htmlContent: string): Promise<string>;
}
