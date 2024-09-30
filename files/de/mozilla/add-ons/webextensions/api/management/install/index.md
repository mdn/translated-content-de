---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

Installiert und aktiviert eine Design-Erweiterung von der angegebenen URL.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und funktioniert nur mit signierten Designs.

Dies ist eine asynchrone Funktion, die ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.management.install(options)
```

### Parameter

- options
  - : Ein Objekt, das die URL der XPI-Datei des Designs bei [addons.mozilla.org](https://addons.mozilla.org) und optional einen Hash der XPI-Datei, unter Verwendung von sha256 oder stärker, enthält.

### Rückgabewert

Ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, welches die in manifest.json für das Design definierte `ExtensionID` enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Durchlaufen Sie eine Liste von Designs:

```js
"use strict";

const themes = [
  "https://addons.mozilla.org/en-US/firefox/downloads/file/1063216/insightscare-1.0-fx.xpi",
  "https://addons.mozilla.org/en-US/firefox/downloads/file/1063419/orange_roses-1.0-fx.xpi",
  "https://addons.mozilla.org/en-US/firefox/downloads/file/1062647/sticktoyourguns-2.0-fx.xpi",
  "https://addons.mozilla.org/en-US/firefox/downloads/file/0/bad_url.xpi",
];

let current;

async function install(url) {
  try {
    current = url;
    const { id } = await browser.management.install({ url });
    console.log(`Theme installed: ${id}`);
  } catch (e) {
    console.error(`Installation failed: ${e}`);
  }
}

browser.browserAction.onClicked.addListener(() => {
  const id = themes.indexOf(current);
  install(themes[(id + 1) % themes.length]);
});

for (const url of themes) {
  browser.menus.create({
    title: url,
    onclick: () => install(url),
    contexts: ["browser_action"],
  });
}
```

{{WebExtExamples}}
