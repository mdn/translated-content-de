---
title: "FontFaceSet: Ladeereignis"
short-title: Laden
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Das `loading`-Ereignis tritt ein, wenn das Dokument beginnt, Schriftarten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loading", (event) => {});

onloading = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird beim Start des Ladens der Schriftart `Ephesis` "Font is loading…" in die Konsole ausgegeben.

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
