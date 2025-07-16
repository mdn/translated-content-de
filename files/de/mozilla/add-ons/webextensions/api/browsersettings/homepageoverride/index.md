---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um eine Zeichenkette abzurufen, die die aktuell als Startseite des Browsers festgelegte URL darstellt.

Beachten Sie, dass dies eine schreibgeschützte Einstellung ist. Um die Startseite zu ändern, siehe [chrome_settings_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides).

## Beispiele

Abrufen des aktuellen Werts der Startseiten-URL:

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
