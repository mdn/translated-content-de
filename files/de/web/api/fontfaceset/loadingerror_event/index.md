---
title: "FontFaceSet: loadingerror-Ereignis"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loadingerror`-Ereignis wird ausgelöst, wenn Schriftarten fertig geladen, aber einige oder alle Schriftarten nicht geladen werden konnten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("loadingerror", (event) => { })

onloadingerror = (event) => { }
```

## Beispiel

Im folgenden Beispiel, wenn die Schriftart `Ephesis` nicht geladen werden kann, wird "Font loading error" in der Konsole ausgegeben.

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
