const versionsAppLawyerSyestem = {
  latest: {
    name: "برنامج ادارة مكاتب المحاماة",
    versions: "v1.2.0",
    size: "94 m",
    linkdownload: "https://github.com/mostafaaamen/law/releases/download/v1.2.0/Setup.1.2.0.exe"
  },
  others: [
    {
    name: "برنامج ادارة مكاتب المحاماة",
    versions: "v1.1.3",
    size: "92 m",
    linkdownload: "https://github.com/mostafaaamen/law/releases/download/v1.1.3/lawyer-setup-1.1.3.exe"
  },
    {
    name: "برنامج ادارة مكاتب المحاماة",
    versions: "v1.1.2",
    size: "92 m",
    linkdownload: "https://github.com/mostafaaamen/law/releases/download/v1.1.2/lawyer-setup-1.1.2.exe"
  },
  {
    name: "برنامج ادارة مكاتب المحاماة",
    versions: "v1.1.1",
    size: "91 m",
    linkdownload: "https://github.com/mostafaaamen/law/releases/download/v1.1.1/Setup.1.1.1.exe"
  },
  ]
};

const appImage = "../images/lawyer-system.svg";

function createDownloadButton(version) {
  if (!version.linkdownload) {
    const unavailable = document.createElement("span");
    unavailable.className = "download-button is-disabled";
    unavailable.textContent = "رابط التحميل غير متاح";
    return unavailable;
  }

  const link = document.createElement("a");
  link.className = "download-button";
  link.href = version.linkdownload;
  link.setAttribute("download", "");
  link.setAttribute("aria-label", `تحميل ${version.name || "نظام إدارة المحاماة"} - الإصدار ${version.versions || "غير محدد"}`);
  link.innerHTML = '<span aria-hidden="true">↓</span> تحميل الآن';
  return link;
}

function createVersionCard(version, isLatest) {
  const card = document.createElement("article");
  card.className = `version-card${isLatest ? " latest-card" : " older-card"}`;

  if (isLatest) {
    const image = document.createElement("img");
    image.className = "app-image";
    image.src = appImage;
    image.alt = "أيقونة نظام إدارة المحاماة";
    card.append(image);
  }

  const info = document.createElement("div");
  info.className = "version-info";

  const title = document.createElement("h3");
  title.textContent = version.name || "نظام إدارة المحاماة";

  const description = document.createElement("p");
  description.textContent = isLatest ? "أحدث نسخة متاحة من البرنامج" : "إصدار سابق من البرنامج";

  const metadata = document.createElement("div");
  metadata.className = "version-meta";

  const versionLabel = document.createElement("span");
  versionLabel.textContent = `الإصدار: ${version.versions || "غير محدد"}`;
  const sizeLabel = document.createElement("span");
  sizeLabel.textContent = `الحجم: ${version.size || "غير محدد"}`;
  metadata.append(versionLabel, sizeLabel);
  info.append(title, description, metadata);

  card.append(info, createDownloadButton(version));
  return card;
}

const latestVersion = document.getElementById("latest-version");
latestVersion.append(createVersionCard(versionsAppLawyerSyestem.latest, true));

const olderVersions = document.getElementById("older-versions");
if (versionsAppLawyerSyestem.others.length === 0) {
  const emptyState = document.createElement("p");
  emptyState.className = "empty-state";
  emptyState.textContent = "لا توجد إصدارات سابقة متاحة حاليًا.";
  olderVersions.append(emptyState);
} else {
  versionsAppLawyerSyestem.others.forEach((version) => {
    olderVersions.append(createVersionCard(version, false));
  });
}

document.getElementById("current-year").textContent = new Date().getFullYear();
