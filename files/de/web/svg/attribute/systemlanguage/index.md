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

## Anwendungshinweise

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
  - : Der Wert ist ein Satz von durch Kommas getrennten Tokens, von denen jedes ein Sprach-Tag sein muss, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert.

`systemLanguage` wird häufig in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, stellt es einen einfachen Schalter am gegebenen Element dar, ob das Element gerendert wird oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann dies zu Situationen führen, in denen kein Inhalt angezeigt wird. Es wird daher empfohlen, am Ende eines solchen `<switch>` eine "Catch-all"-Option einzufügen, die in allen Fällen akzeptabel ist.

Das Attribut wird als "true" bewertet, wenn eines der durch die Benutzereinstellungen angegebenen Sprach-Tags eine nicht fallunterscheidende Übereinstimmung oder ein Präfix (gefolgt von einem "-") mit einem der im Wert dieses Parameters angegebenen Sprach-Tags ist. Andernfalls wird es als "false" bewertet.

> [!NOTE]
> Die Präfix-Matching-Regel impliziert nicht, dass wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit als "true" bewertet. Wenn ein Null- oder Leerstring-Wert angegeben wird, wird das Attribut als "false" bewertet.

Die Präfix-Regel erlaubt die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Zum Beispiel, Inhalte, die gleichzeitig in der originalen Maori- und der englischen Version präsentiert werden, würde folgendes erfordern:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Allerdings bedeutet dies nicht, dass, nur weil innerhalb des Objekts, auf dem sich das `systemLanguage`-Testattribut befindet, mehrere Sprachen vorhanden sind, dieses auch für mehrere Sprachzielgruppen bestimmt ist. Ein Beispiel wäre ein Sprachlehrbuch für Anfänger, wie "Eine erste Lektion in Latein", das eindeutig für ein englischsprachiges Publikum gedacht ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
