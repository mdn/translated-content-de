---
title: systemLanguage
slug: Web/SVG/Attribute/systemLanguage
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`systemLanguage`** Attribut repräsentiert eine Liste von unterstützten Sprach-Tags. Diese Liste wird mit der in den Benutzereinstellungen definierten Sprache verglichen.

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
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<language-tags>`
  - : Der Wert ist eine Menge von durch Kommas getrennten Tokens, von denen jedes ein Sprach-Tag sein muss, wie definiert in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.

`systemLanguage` wird häufig in Verbindung mit dem {{SVGElement("switch")}} Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, stellt es einen einfachen Schalter dar, ob das gegebene Element gerendert wird oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann dies dazu führen, dass kein Inhalt angezeigt wird. Es wird daher empfohlen, am Ende eines solchen `<switch>` eine "Catch-all"-Option einzufügen, die in allen Fällen akzeptabel ist.

Das Attribut wird als "true" ausgewertet, wenn eines der durch Benutzereinstellungen angegebenen Sprach-Tags ein Groß-/Kleinschreibungs-ignorierendes Übereinstimmung oder Präfix (gefolgt von einem "-") eines der Sprach-Tags im Wert dieses Parameters ist. Andernfalls wird es als "false" ausgewertet.

> [!NOTE]
> Die Präfix-Matching-Regel impliziert nicht, dass, wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit als "true" ausgewertet. Wenn ein Null-String oder ein leerer String-Wert angegeben ist, wird das Attribut als "false" ausgewertet.

Die Präfix-Regel erlaubt die Verwendung von Präfix-Tags, falls dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Zum Beispiel, Inhalte, die gleichzeitig in der ursprünglichen Maori- und der englischen Version präsentiert werden, würden wie folgt gekennzeichnet:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Allerdings bedeutet die bloße Präsenz mehrerer Sprachen innerhalb des Objekts, auf dem das `systemLanguage` Testattribut platziert ist, nicht, dass es für mehrere sprachliche Zielgruppen gedacht ist. Ein Beispiel wäre ein Anfängerkurs für eine Sprache, wie "A First Lesson in Latin," der eindeutig für ein englischsprachiges Publikum bestimmt ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
