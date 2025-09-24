---
title: systemLanguage
slug: Web/SVG/Reference/Attribute/systemLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`systemLanguage`** Attribut repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache abgeglichen.

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
  - : Der Wert ist eine Reihe von durch Kommas getrennten Tokens, von denen jedes ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} sein muss.

`systemLanguage` wird häufig in Verbindung mit dem {{SVGElement("switch")}} Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, stellt es einen einfachen Schalter dar, ob das gegebene Element gerendert werden soll oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon passt, kann dies zu Situationen führen, in denen kein Inhalt angezeigt wird. Es wird daher empfohlen, eine "Catch-All"-Option am Ende eines solchen `<switch>` einzuschließen, die in allen Fällen akzeptabel ist.

Das Attribut ergibt "wahr", wenn eines der von den Benutzereinstellungen angegebenen Sprach-Tags ein Groß-/Kleinschreibung-unabhängiges Übereinstimmungskriterium oder Präfix (gefolgt von einem "-") eines der in diesem Parameterwert angegebenen Sprach-Tags ist. Andernfalls ergibt es "falsch".

> [!NOTE]
> Die Präfix-Zuordnungsregel impliziert nicht, dass ein Benutzer, der eine Sprache mit einem bestimmten Tag versteht, auch alle Sprachen mit diesem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit als "wahr" bewertet. Wenn ein null oder leerer Zeichenfolgewert angegeben ist, wird das Attribut als "falsch" bewertet.

Die Präfixregel ermöglicht die Verwendung von Präfix-Tags, wenn dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgeführt werden, die für mehrere Zielgruppen bestimmt sind. Zum Beispiel würde Inhalt, der gleichzeitig in den Originalversionen in Maori und Englisch präsentiert wird, erfordern:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Allerdings bedeutet das Vorhandensein mehrerer Sprachen innerhalb des Objekts, auf dem das `systemLanguage` Testattribut platziert ist, nicht, dass es für mehrere sprachliche Zielgruppen bestimmt ist. Ein Beispiel wäre ein Sprachanfänger-Lehrbuch, wie "A First Lesson in Latin", das eindeutig für ein englischsprachiges Publikum bestimmt ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
