---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um eine Zeichenkette abzurufen, die die derzeit als Startseite des Browsers festgelegte URL darstellt.

Beachten Sie, dass dies eine schreibgeschützte Einstellung ist. Um die Startseite zu ändern, siehe [chrome_settings_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides).

## Beispiele

Holen Sie sich den aktuellen Wert der Startseiten-URL:

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
