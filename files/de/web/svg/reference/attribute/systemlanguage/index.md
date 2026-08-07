---
title: systemLanguage
slug: Web/SVG/Reference/Attribute/systemLanguage
l10n:
  sourceCommit: 9ac8d4f4ed0eb2f329e605329afeb51754c7fa79
---

Das Attribut **`systemLanguage`** repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache abgeglichen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Der Wert ist eine Menge von durch Kommas getrennten Token, von denen jedes ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein muss.

`systemLanguage` wird oft in Verbindung mit dem {{SVGElement("switch")}}-Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, dann stellt es einen einfachen Schalter am gegebenen Element dar, ob das Element gerendert werden soll oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann dies zu Situationen führen, in denen kein Inhalt angezeigt wird. Daher wird empfohlen, am Ende eines solchen `<switch>` eine "Catch-All"-Option einzufügen, die in allen Fällen akzeptabel ist.

Das Attribut wird als "true" ausgewertet, wenn eines der Benutzervoreinstellungen angegebenen Sprach-Tags eine Groß-/Kleinschreibung-unabhängige Übereinstimmung oder ein Präfix (gefolgt von einem "-") eines der in diesem Parameterwert angegebenen Sprach-Tags ist. Andernfalls wird es als "false" ausgewertet.

> [!NOTE]
> Die Präfixregel bedeutet nicht, dass, wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix verstehen wird.

Ist das Attribut nicht vorhanden, wird es implizit als "true" ausgewertet. Wird ein Null-String oder ein leerer String-Wert angegeben, wird das Attribut als "false" ausgewertet.

Die Präfixregel ermöglicht die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Es können mehrere Sprachen aufgeführt werden, wenn Inhalte für mehrere Zielgruppen bestimmt sind. Wenn beispielsweise Inhalte gleichzeitig in der ursprünglichen Maori- und der englischen Version präsentiert werden, wäre dies folgendermaßen aufzuführen:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Nur weil mehrere Sprachen innerhalb des Objekts vorhanden sind, auf dem das `systemLanguage`-Testattribut platziert ist, bedeutet dies nicht, dass es für mehrere sprachliche Zielgruppen bestimmt ist. Ein Beispiel wäre ein Anfänger-Sprachkurs wie "A First Lesson in Latin", der eindeutig für ein englischsprachiges Publikum gedacht ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("requiredExtensions")}}
