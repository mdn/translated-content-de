---
title: "HTMLTableElement: frame-Eigenschaft"
short-title: frame
slug: Web/API/HTMLTableElement/frame
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

Die **`frame`**-Eigenschaft des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces
ist ein String, der angibt, welche der äußeren Ränder der Tabelle gezeichnet werden sollen.

## Wert

Einer der folgenden:

- `void`
  - : Keine Seiten. Dies ist der Standardwert.
- `"above"`
  - : Obere Seite
- `"below"`
  - : Untere Seite
- `"hsides"`
  - : Nur oben und unten
- `"vsides"`
  - : Nur rechte und linke Seite
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
