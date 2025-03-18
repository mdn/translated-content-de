---
title: path
slug: Web/SVG/Reference/Attribute/path
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`path`**-Attribut hat zwei unterschiedliche Bedeutungen: Es kann entweder einen Textpfad definieren, entlang dessen die Zeichen eines Textes gerendert werden, oder einen Bewegungspfad, entlang dessen ein referenziertes Element animiert wird.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animateMotion")}}
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

## animateMotion

Für {{SVGElement("animateMotion")}} definiert `path` den Bewegungspfad, ausgedrückt im gleichen Format und interpretiert auf die gleiche Weise wie die geometrische Eigenschaft {{SVGAttr("d")}} für das {{SVGElement("path")}}-Element. Der Effekt einer Bewegungspfad-Animation ist eine Translation entlang der x- und y-Achsen des aktuellen Benutzerskoordinatensystems durch die im Laufe der Zeit berechneten x- und y-Werte.

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
  - : Dieser Wert definiert den Bewegungspfad, entlang dessen das referenzierte Element animiert wird. Für detaillierte Informationen über die verwendbaren Befehle lesen Sie die [Erklärung zum `d`-Attribut](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).

## textPath

Für {{SVGElement("textPath")}} definiert `path` den Pfad, auf den die {{Glossary("glyph", "Glyphen")}} eines {{SVGElement("text")}}-Elements gerendert werden. Ein leerer String zeigt an, dass keine Pfaddaten für das Element vorhanden sind. Das bedeutet, dass der Text innerhalb des `<textPath>`-Elements nicht gerendert wird oder zur Begrenzungsbox des `<text>`-Elements beiträgt. Wenn das Attribut nicht angegeben ist, wird stattdessen der Pfad aus {{SVGAttr("href")}} verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Pfad, der in {{SVGAttr("href")}} angegeben ist</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : Dieser Wert definiert den Textpfad, entlang dessen die Glyphen des `<text>`-Elements ausgerichtet werden. Für detaillierte Informationen über die verwendbaren Befehle lesen Sie die [Erklärung zum `d`-Attribut](/de/docs/Web/SVG/Reference/Attribute/d#path_commands).

## Spezifikationen

{{Specifications}}
