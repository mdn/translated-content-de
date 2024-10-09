---
title: "FontFaceSet: loading-Ereignis"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loading`-Ereignis tritt auf, wenn das Dokument beginnt, Schriftarten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loading", (event) => {});

onloading = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird, wenn die Schriftart `Ephesis` zu laden beginnt, "Font is loading…" in die Konsole ausgegeben.

```js
document.fonts.onloading = () => {
  console.log("Font is loading");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
