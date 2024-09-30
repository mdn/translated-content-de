---
title: "FontFaceSet: loading-Event"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Das `loading`-Event wird ausgelöst, wenn das Dokument beginnt, Schriften zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("loading", (event) => {});

onloading = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird "Font is loading…" in die Konsole ausgegeben, wenn die Schrift `Ephesis` zu laden beginnt.

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
