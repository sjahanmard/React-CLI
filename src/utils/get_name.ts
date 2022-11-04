export function getName() {
  if (process.argv.length < 3) {
    console.error("Expected the name of the argument!");
    process.exit(1);
  }
  return process.argv[2];
}
