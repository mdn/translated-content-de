---
title: "FontFaceSet: loadingdone-Ereignis"
short-title: loadingdone
slug: Web/API/FontFaceSet/loadingdone_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das Ereignis `loadingdone` wird ausgelöst, wenn das Dokument alle Schriftarten geladen hat.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("loadingdone", (event) => { })
```

Alternativ können Sie einen Wert der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onloadingdone = (event) => { }
```

## Beispiel

Im folgenden Beispiel wird „Font loading complete“ in der Konsole ausgegeben, sobald die Schriftart `Ephesis` vollständig geladen wurde.

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
