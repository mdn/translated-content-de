---
title: "FontFaceSet: loadingerror Ereignis"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loadingerror`-Ereignis wird ausgelöst, wenn Schriften das Laden abgeschlossen haben, aber einige oder alle Schriften nicht geladen werden konnten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("loadingerror", (event) => {});

onloadingerror = (event) => {};
```

## Beispiel

Im folgenden Beispiel wird, wenn die Schrift `Ephesis` nicht geladen werden kann, "Font loading error" in die Konsole gedruckt.

```js
document.fonts.onloadingerror = () => {
  console.log("Font loading error");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
