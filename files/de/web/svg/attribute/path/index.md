---
title: path
slug: Web/SVG/Attribute/path
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

Das **`path`**-Attribut hat zwei unterschiedliche Bedeutungen: Entweder definiert es einen Textpfad, entlang dem die Zeichen eines Textes gerendert werden, oder einen Bewegungspfad, entlang dem ein referenziertes Element animiert wird.

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

{{EmbedLiveSample("Beispiel", "420", "220")}}

## animateMotion

Für {{SVGElement("animateMotion")}} definiert `path` den Bewegungspfad, ausgedrückt im gleichen Format und auf die gleiche Weise interpretiert wie die geometrische Eigenschaft {{SVGAttr("d")}} für das {{SVGElement("path")}} Element. Die Wirkung einer Bewegungspfad-Animation ist eine Translation entlang der x- und y-Achsen des aktuellen Benutzerkoordinatensystems durch die x- und y-Werte, die im Laufe der Zeit berechnet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : Dieser Wert definiert den Bewegungspfad, entlang dem das referenzierte Element animiert wird. Für detaillierte Informationen über die verwendbaren Befehle siehe die [Erklärung für das `d`-Attribut](/de/docs/Web/SVG/Attribute/d#path_commands).

## textPath

Für {{SVGElement("textPath")}} definiert `path` den Pfad, auf dem die [Glyphen](/de/docs/Glossary/glyph) eines {{SVGElement("text")}} Elements gerendert werden. Ein leerer String zeigt an, dass keine Pfaddaten für das Element vorhanden sind. Das bedeutet, dass der Text innerhalb des `<textPath>`-Elements nicht gerendert wird oder zum Begrenzungsrahmen des `<text>`-Elements beiträgt. Wenn das Attribut nicht angegeben wird, wird stattdessen der im {{SVGAttr("href")}} spezifizierte Pfad verwendet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Der im {{SVGAttr("href")}} angegebene Pfad</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : Dieser Wert definiert den Textpfad, entlang dem die Glyphen des `<text>` Elements ausgerichtet werden. Für detaillierte Informationen über die verwendbaren Befehle siehe die [Erklärung für das `d`-Attribut](/de/docs/Web/SVG/Attribute/d#path_commands).

## Spezifikationen

{{Specifications}}
