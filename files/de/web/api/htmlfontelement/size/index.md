---
title: "HTMLFontElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

Die veraltete **`HTMLFontElement.size`**-Eigenschaft ist ein String, der das [`size`](/de/docs/Web/HTML/Reference/Elements/font#size)-HTML-Attribut widerspiegelt. Es kann entweder eine Schriftgröße von 1 bis 7 oder eine Zahl relativ zum Standardwert 3 enthalten, zum Beispiel -2 oder +1.

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
      <td>Gültiger Größenanzahl-String</td>
      <td><em>Ganzzahl im Bereich von 1-7</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>Relativer Größenstring</td>
      <td>
        <em>+x oder -x, wobei x eine Zahl ist, die sich relativ zu 3 verhält (das Ergebnis sollte im Bereich von 1-7 liegen)</em>
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
