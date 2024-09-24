---
title: "FontFaceSet: ready Eigenschaft"
short-title: ready
slug: Web/API/FontFaceSet/ready
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die schreibgeschützte Eigenschaft `ready` des {{domxref("FontFaceSet")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf das gegebene {{domxref("FontFaceSet")}} aufgelöst wird.

Das Versprechen wird erst aufgelöst, wenn das Dokument das Laden der Schriftarten abgeschlossen hat, Layout-Operationen abgeschlossen sind und keine weiteren Schriften mehr geladen werden müssen.

## Wert

Ein {{jsxref("Promise")}}, das auf das gegebene {{domxref("FontFaceSet")}} aufgelöst wird.

## Beispiele

Im folgenden Beispiel wird der Wert von `ready` in die Konsole ausgegeben, sobald das Versprechen aufgelöst wurde.

```js
async function isReady() {
  let ready = await document.fonts.ready;
  console.log(ready);
}

isReady();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
