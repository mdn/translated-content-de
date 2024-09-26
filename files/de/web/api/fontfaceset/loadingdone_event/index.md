---
title: "FontFaceSet: loadingdone Ereignis"
short-title: loadingdone
slug: Web/API/FontFaceSet/loadingdone_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Das `loadingdone` Ereignis wird ausgelöst, wenn das Dokument alle Schriftarten geladen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadingdone", (event) => {});

onloadingdone = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird "Font loading complete" in die Konsole ausgegeben, wenn das Laden der Schriftart `Ephesis` abgeschlossen ist.

```js
document.fonts.onloadingdone = () => {
  console.log("Font loading complete");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}