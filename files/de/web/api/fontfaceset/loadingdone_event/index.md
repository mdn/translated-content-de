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

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadingdone", (event) => {});

onloadingdone = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird, wenn die Schriftart `Ephesis` das Laden abgeschlossen hat, "Font loading complete" in die Konsole ausgegeben.

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
