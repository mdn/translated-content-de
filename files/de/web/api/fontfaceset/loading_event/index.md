---
title: "FontFaceSet: loading-Ereignis"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loading`-Ereignis wird ausgelöst, wenn das Dokument beginnt, Schriften zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("loading", (event) => { })

onloading = (event) => { }
```

## Beispiel

Im folgenden Beispiel wird "Font is loading…" in die Konsole ausgegeben, wenn die Schriftart `Ephesis` zu laden beginnt.

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
