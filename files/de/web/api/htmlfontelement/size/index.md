---
title: "HTMLFontElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

Die veraltete
**`HTMLFontElement.size`**-Eigenschaft ist ein
String, der das [`size`](/de/docs/Web/HTML/Element/font#size)-HTML-Attribut widerspiegelt. Es enthält entweder eine Schriftgröße im Bereich von 1 bis 7 oder eine
Zahl relativ zum Standardwert 3, zum Beispiel -2 oder +1.

Das Format des Strings muss einem der folgenden HTML-Mikrosyntaxen entsprechen:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Mikrosyntax</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiele</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gültige Größen-Zahlenfolge</td>
      <td><em>Ganzzahl im Bereich von 1-7</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>Relative Größenfolge</td>
      <td>
        <em>+x oder -x, wobei x eine Zahl relativ zu 3 ist (das Ergebnis sollte im Bereich von 1-7 liegen)</em>
      </td>
      <td>
        <code>+2<br />-1</code>
      </td>
    </tr>
  </tbody>
</table>

## Wert

Ein String.

## Beispiele

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.size = "6";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Schnittstelle, zu der es gehört.
