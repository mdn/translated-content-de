---
title: systemLanguage
slug: Web/SVG/Reference/Attribute/systemLanguage
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das Attribut **`systemLanguage`** repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache abgeglichen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
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

`systemLanguage` wird häufig in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, bedeutet es einen einfachen Schalter am angegebenen Element, ob das Element gerendert wird oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann es dazu führen, dass kein Inhalt angezeigt wird. Es wird daher empfohlen, am Ende eines solchen `<switch>` eine "Catch-All"-Option einzuschließen, die in allen Fällen akzeptabel ist.

Das Attribut wird auf "true" ausgewertet, wenn eines der durch die Benutzereinstellungen angegebenen Sprach-Tags eine Groß-/Kleinschreibung-unabhängige Übereinstimmung oder ein Präfix (gefolgt von einem "-") eines der in diesem Parameterwert angegebenen Sprach-Tags ist. Andernfalls wird es auf "false" ausgewertet.

> [!NOTE]
> Die Präfix-Abgleichsregel impliziert nicht, dass wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit auf "true" ausgewertet. Wenn ein Null-String oder ein leerer String-Wert angegeben wird, wird das Attribut als "false" ausgewertet.

Die Präfix-Regel erlaubt die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Beispielsweise würde Inhalt, der gleichzeitig in der Originalversion auf Maori und Englisch präsentiert wird, Folgendes erfordern:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Allerdings bedeutet die bloße Anwesenheit mehrerer Sprachen innerhalb des Objekts, auf dem das `systemLanguage`-Testattribut platziert ist, nicht, dass es für mehrere sprachliche Zielgruppen bestimmt ist. Ein Beispiel wäre ein Einführungskurs in eine Sprache, wie "A First Lesson in Latin", der eindeutig für ein Englisch sprachverständiges Publikum bestimmt ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
