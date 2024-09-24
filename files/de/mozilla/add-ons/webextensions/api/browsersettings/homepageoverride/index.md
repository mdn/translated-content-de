---
title: browserSettings.homepageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um eine Zeichenkette zu erhalten, die die derzeit als Startseite des Browsers festgelegte URL darstellt.

Beachten Sie, dass dies eine schreibgeschützte Einstellung ist. Um die Startseite zu ändern, siehe [chrome_settings_overrides](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Den aktuellen Wert der Startseiten-URL abrufen:

```js
browser.browserSettings.homepageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
