---
title: "Navigator: ink-Eigenschaft"
short-title: ink
slug: Web/API/Navigator/ink
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

Die schreibgeschützte **`ink`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalitäten der [Ink API](/de/docs/Web/API/Ink_API).

## Wert

Ein [`Ink`](/de/docs/Web/API/Ink)-Objekt.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
