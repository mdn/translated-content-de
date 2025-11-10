---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um einen String zu erhalten, der die URL für die "neuer Tab"-Seite darstellt: also die Seite, die geladen wird, wenn der Benutzer einen neuen leeren Tab öffnet.

Beachten Sie, dass dies eine schreibgeschützte Einstellung ist.

## Beispiele

Den aktuellen Wert der neuen Tab-URL abrufen:

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
