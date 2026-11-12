---
title: path
slug: Web/SVG/Reference/Attribute/path
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`path`** hat zwei unterschiedliche Bedeutungen: Es definiert entweder einen Textpfad, entlang dessen die Zeichen eines Textes gerendert werden, oder einen Bewegungspfad, entlang dessen ein referenziertes Element animiert wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animateMotion")}}
- {{SVGElement("textPath")}}

## animateMotion

Bei {{SVGElement("animateMotion")}} definiert `path` den Bewegungspfad. Er wird im selben Format angegeben und auf dieselbe Weise interpretiert wie die geometrische Eigenschaft {{SVGAttr("d")}} des Elements {{SVGElement("path")}}. Eine Animation entlang eines Bewegungspfads bewirkt eine Verschiebung entlang der x- und y-Achse des aktuellen Benutzerkoordinatensystems um die im Zeitverlauf berechneten x- und y-Werte.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : Dieser Wert definiert den Bewegungspfad, entlang dessen das referenzierte Element animiert wird. Ausführliche Informationen zu den verwendbaren Befehlen finden Sie in der [Erläuterung zum Attribut `d`](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).

## textPath

Bei {{SVGElement("textPath")}} definiert `path` den Pfad, auf dem die {{Glossary("glyph", "Glyphen")}} eines {{SVGElement("text")}}-Elements gerendert werden. Eine leere Zeichenfolge zeigt an, dass für das Element keine Pfaddaten vorhanden sind. Das bedeutet, dass der Text innerhalb des `<textPath>`-Elements weder gerendert wird noch zum Begrenzungsrahmen des `<text>`-Elements beiträgt. Wenn das Attribut nicht angegeben ist, wird stattdessen der in {{SVGAttr("href")}} angegebene Pfad verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>In {{SVGAttr("href")}} angegebener Pfad</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : Dieser Wert definiert den Textpfad, entlang dessen die Glyphen des `<text>`-Elements ausgerichtet werden. Ausführliche Informationen zu den verwendbaren Befehlen finden Sie in der [Erläuterung zum Attribut `d`](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    id="MyPath"
    fill="none"
    stroke="silver"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

  <text>
    <textPath
      path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## Spezifikationen

{{Specifications}}
