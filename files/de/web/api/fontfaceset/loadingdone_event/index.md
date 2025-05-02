---
title: "FontFaceSet: loadingdone-Ereignis"
short-title: loadingdone
slug: Web/API/FontFaceSet/loadingdone_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loadingdone`-Ereignis wird ausgelöst, wenn das Dokument alle Schriften geladen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("loadingdone", (event) => { })

onloadingdone = (event) => { }
```

## Beispiel

Im folgenden Beispiel wird "Font loading complete" in die Konsole ausgegeben, wenn die Schriftart `Ephesis` fertig geladen ist.

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
