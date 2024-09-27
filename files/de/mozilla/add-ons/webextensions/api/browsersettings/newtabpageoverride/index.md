---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um eine Zeichenkette zu erhalten, die die URL für die "neuer Tab"-Seite darstellt: das ist die Seite, die geladen wird, wenn der Nutzer einen neuen leeren Tab öffnet.

Beachten Sie, dass dies eine schreibgeschützte Einstellung ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Den aktuellen Wert der neuen Tab-URL abfragen:

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
