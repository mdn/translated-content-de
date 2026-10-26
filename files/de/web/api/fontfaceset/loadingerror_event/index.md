---
title: "FontFaceSet: loadingerror-Ereignis"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das Ereignis `loadingerror` wird ausgelöst, wenn das Laden der Schriftarten abgeschlossen ist, aber einige oder alle Schriftarten nicht geladen werden konnten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("loadingerror", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onloadingerror = (event) => { }
```

## Beispiel

Im folgenden Beispiel wird „Font loading error“ in der Konsole ausgegeben, wenn die Schriftart `Ephesis` nicht geladen werden kann.

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
