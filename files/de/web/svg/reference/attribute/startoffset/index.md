---
title: startOffset
slug: Web/SVG/Reference/Attribute/startOffset
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das Attribut **`startOffset`** definiert einen Versatz vom Start des Pfades für die anfängliche aktuelle Textposition entlang des Pfades, nachdem der Pfad in das Koordinatensystem des {{SVGElement("textPath")}}-Elements umgewandelt wurde.

Dieses Attribut kann mit folgenden SVG-Elementen verwendet werden:

- {{SVGElement("textPath")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <path
    id="path1"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <path
    id="path2"
    fill="none"
    stroke="red"
    d="M130,90 Q210,90 210,45 Q210,10 170,10 Q130,10 130,40 Q130,70 165,70 Q190,70 195,50" />

  <text>
    <textPath href="#path1" startOffset="0">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>

  <text>
    <textPath href="#path2" startOffset="40">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

{{EmbedLiveSample("Example", 400, 200)}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`

  - : Eine Länge, die eine Entfernung entlang des Pfades im aktuellen Benutzerkoordinatensystem für das {{SVGElement("textPath")}}-Element darstellt.

    Wird ein Prozentsatz angegeben, stellt der Startversatz eine prozentuale Entfernung entlang des gesamten Pfades dar. `0%` gibt somit den Startpunkt des Pfades und `100%` den Endpunkt des Pfades an.

- `<number>`
  - : Dieser Wert gibt eine Entfernung entlang des Pfades im aktuellen Benutzerkoordinatensystem für das `<textPath>`-Element an.

> [!NOTE]
> Negative Werte und Werte, die größer als die Pfadlänge sind (z. B. `150%`), sind erlaubt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
