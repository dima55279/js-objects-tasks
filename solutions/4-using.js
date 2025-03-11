// BEGIN
const getDomainInfo = (site) => {
    const infoAboutSite = {
        scheme: "http",
        name: "",
    };
    if (site.startsWith('https')) {
        infoAboutSite.scheme = 'https';
    }
    infoAboutSite.name = site.replace(infoAboutSite.scheme + "://", "");
    return infoAboutSite;
}
export default getDomainInfo;
// END