---
title: "FontFaceSet: loadingerror-Ereignis"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Das `loadingerror`-Ereignis wird ausgelöst, wenn Schriften fertig geladen wurden, aber einige oder alle Schriften nicht geladen werden konnten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("loadingerror", (event) => {});

onloadingerror = (event) => {};
```

## Beispiel

Im folgenden Beispiel, falls die Schriftart `Ephesis` nicht geladen werden kann, wird "Font loading error" in die Konsole ausgegeben.

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
