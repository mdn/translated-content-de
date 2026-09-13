---
title: "HTMLFontElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("HTML DOM") }}

Die veraltete **`HTMLFontElement.size`**-Eigenschaft ist ein String, der das [`size`](/de/docs/Web/HTML/Reference/Elements/font#size) HTML-Attribut widerspiegelt. Sie enthält entweder eine Schriftgröße im Bereich von 1 bis 7 oder eine Zahl relativ zu dem Standardwert 3, zum Beispiel -2 oder +1.

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
      <td>Gültige Größen-Nummer als String</td>
      <td><em>Ganzzahl im Bereich von 1-7</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>Relative Größen-String</td>
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

- Das [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement)-Interface, zu dem es gehört.
