---
title: "HTMLTableElement: frame-Eigenschaft"
short-title: frame
slug: Web/API/HTMLTableElement/frame
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`frame`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces ist ein String, der angibt, welche der äußeren Rahmen der Tabelle gezeichnet werden sollen.

## Wert

Einer der folgenden:

- `void`
  - : Keine Seiten. Dies ist der Standard.
- `"above"`
  - : Oberseite
- `"below"`
  - : Unterseite
- `"hsides"`
  - : Nur oben und unten
- `"vsides"`
  - : Nur rechte und linke Seiten
- `"lhs"`
  - : Nur linke Seite
- `"rhs"`
  - : Nur rechte Seite
- `"box"`
  - : Alle vier Seiten
- `"border"`
  - : Alle vier Seiten

## Beispiele

```js
// Set the frame of TableA to 'border'
const t = document.getElementById("TableA");
t.frame = "border";
t.border = "2px";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
