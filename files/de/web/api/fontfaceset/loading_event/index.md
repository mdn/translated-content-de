---
title: "FontFaceSet: loading-Ereignis"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das `loading`-Ereignis wird ausgelöst, wenn das Dokument beginnt, Schriftarten zu laden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("loading", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onloading = (event) => { }
```

## Beispiel

Im folgenden Beispiel wird „Font is loading…“ in der Konsole ausgegeben, sobald die Schriftart `Ephesis` zu laden beginnt.

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
