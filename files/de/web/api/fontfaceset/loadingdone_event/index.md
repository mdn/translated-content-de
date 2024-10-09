---
title: "FontFaceSet: loadingdone-Ereignis"
short-title: loadingdone
slug: Web/API/FontFaceSet/loadingdone_event
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loadingdone`-Ereignis wird ausgelöst, wenn das Dokument alle Schriftarten geladen hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("loadingdone", (event) => {});

onloadingdone = (event) => {};
```

## Beispiel

Im folgenden Beispiel, wenn die Schriftart `Ephesis` fertig geladen ist, wird "Font loading complete" in der Konsole ausgegeben.

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
