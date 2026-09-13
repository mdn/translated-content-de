---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: 153625a091c46a21882a44740d26699c16565a24
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt das Bild an, das im {{HTMLElement("img")}}-Element angezeigt werden soll. Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Inhaltsattribut des `<img>`-Elements wider.

Das Setzen der `src`-Eigenschaft löst die Planung einer Aufgabe zum Abrufen der angegebenen Ressource aus; das Element muss nicht zuerst in das aktive Dokument eingefügt werden.
Sofern das Laden nicht auf `lazy` gesetzt ist, wird das Bild fast sofort abgerufen (wenn Lazy Loading angegeben ist, wird die Anforderung zurückgestellt, bis sich das Element in der Nähe des Viewports befindet: was erst passieren kann, wenn das Element eingefügt ist).

## Wert

Ein String. Weitere Informationen zur Syntax des `src`-Attributs finden Sie im HTML-Referenzdokument für [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#src).

## Beispiele

### Setzen des src-Attributs

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
