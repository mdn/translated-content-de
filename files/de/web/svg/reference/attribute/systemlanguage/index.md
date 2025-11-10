---
title: systemLanguage
slug: Web/SVG/Reference/Attribute/systemLanguage
l10n:
  sourceCommit: 1db55979ae2b6ed7abb484b74e70809d66fa7637
---

Das **`systemLanguage`**-Attribut repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache abgeglichen.

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

## Verwendungshinweise

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
  - : Der Wert ist eine Menge von Komma-getrennten Tokens, von denen jedes ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}} sein muss.

`systemLanguage` wird oft in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, stellt es einen einfachen Schalter am gegebenen Element dar, ob das Element gerendert wird oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` enthalten sind und keines davon übereinstimmt, kann dies dazu führen, dass kein Inhalt angezeigt wird. Es wird daher empfohlen, eine "Fang-alles"-Option am Ende eines solchen `<switch>` einzuschließen, die in allen Fällen akzeptabel ist.

Das Attribut wird als "true" ausgewertet, wenn eines der durch die Benutzereinstellungen angegebenen Sprach-Tags eine groß-/kleinschreibung-unabhängige Übereinstimmung oder ein Präfix (gefolgt von einem "-") eines der im Wert dieses Parameters angegebenen Sprach-Tags ist. Andernfalls wird es als "false" ausgewertet.

> [!NOTE]
> Die Präfix-Matching-Regel impliziert nicht, dass wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit als "true" ausgewertet. Wenn ein Null-String oder ein leerer String-Wert angegeben wird, wird das Attribut als "false" ausgewertet.

Die Präfixregel erlaubt die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Es können mehrere Sprachen für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Zum Beispiel würden Inhalte, die gleichzeitig in der ursprünglichen Maori- und in der englischen Version präsentiert werden, Folgendes erfordern:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Jedoch bedeutet das Vorhandensein mehrerer Sprachen innerhalb des Objekts, auf dem das `systemLanguage`-Testattribut platziert ist, nicht, dass es für mehrere sprachliche Zielgruppen gedacht ist. Ein Beispiel wäre eine Einführung in eine Sprache, wie "Eine erste Lektion in Latein", das offensichtlich für ein englischsprechendes Publikum gedacht ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("requiredExtensions")}}
