---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das dazu verwendet werden kann, eine Zeichenkette zu erhalten, die die URL für die "neuer Tab"-Seite darstellt: das heißt, die Seite, die geladen wird, wenn der Benutzer einen neuen leeren Tab öffnet.

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
