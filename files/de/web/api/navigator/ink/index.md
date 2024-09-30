---
title: "Navigator: ink-Eigenschaft"
short-title: ink
slug: Web/API/Navigator/ink
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{SeeCompatTable}}{{APIRef("Ink API")}}

Die **`ink`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück und bietet Zugriff auf die Funktionalität der [Ink API](/de/docs/Web/API/Ink_API).

## Wert

Ein [`Ink`](/de/docs/Web/API/Ink)-Objekt.

## Beispiel

```js
async function inkInit() {
  const ink = navigator.ink;
  let presenter = await ink.requestPresenter({ presentationArea: canvas });

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Tinte auf dem Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
