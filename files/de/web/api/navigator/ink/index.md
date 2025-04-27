---
title: "Navigator: ink-Eigenschaft"
short-title: ink
slug: Web/API/Navigator/ink
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

Die **`ink`**-Schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück, das Zugriff auf die Funktionalität der [Ink API](/de/docs/Web/API/Ink_API) bietet.

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

## Siehe auch

- [Verbesserung des Inking im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
