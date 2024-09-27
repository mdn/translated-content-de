---
title: systemLanguage
slug: Web/SVG/Attribute/systemLanguage
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`systemLanguage`**-Attribut repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache abgeglichen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("cursor")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>&#x3C;language-tags></code></td>
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

- `<language-tags>`
  - : Der Wert ist eine Menge von kommagetrennten Tokens, von denen jedes ein Sprach-Tag sein muss, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert.

`systemLanguage` wird oft in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, stellt es einen einfachen Schalter auf dem gegebenen Element dar, ob das Element gerendert werden soll oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann dies zu Situationen führen, in denen kein Inhalt angezeigt wird. Es wird daher empfohlen, am Ende eines solchen `<switch>` eine "Abfangoption" zu haben, die in allen Fällen akzeptabel ist.

Das Attribut wertet zu "wahr" aus, wenn eines der durch die Benutzereinstellungen angegebenen Sprach-Tags eine nicht fallunterscheidende Übereinstimmung oder ein Präfix (gefolgt von einem "-") eines der in diesem Parameterwert angegebenen Sprach-Tags ist. Andernfalls wertet es zu "falsch" aus.

> [!NOTE]
> Die Präfix-Übereinstimmungsregel impliziert nicht, dass ein Benutzer, der eine Sprache mit einem bestimmten Tag versteht, auch alle Sprachen mit diesem Tag als Präfix verstehen wird.

Ist das Attribut nicht vorhanden, wertet es implizit zu "wahr" aus. Wird ein Null-String oder ein leerer String-Wert angegeben, wertet das Attribut zu "falsch" aus.

Die Präfixregel erlaubt die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Beispiel: Inhalte, die gleichzeitig in der ursprünglichen Maori-Version und in Englisch präsentiert werden, würden verlangen:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Nur weil jedoch mehrere Sprachen in dem Objekt vorhanden sind, auf dem sich das `systemLanguage`-Testattribut befindet, bedeutet dies nicht, dass es für mehrere sprachliche Zielgruppen bestimmt ist. Ein Beispiel wäre ein Sprachprimer für Anfänger, wie "Eine erste Lektion in Latein", der eindeutig für eine englischsprachige Zielgruppe bestimmt ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
