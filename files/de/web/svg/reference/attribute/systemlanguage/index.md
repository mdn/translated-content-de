---
title: systemLanguage
slug: Web/SVG/Reference/Attribute/systemLanguage
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`systemLanguage`** Attribut repräsentiert eine Liste unterstützter Sprach-Tags. Diese Liste wird mit der im Benutzerprofil definierten Sprache abgeglichen.

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

## Verwendungshinweise

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
  - : Der Wert ist eine Menge von durch Kommas getrennten Token, von denen jedes ein Sprach-Tag sein muss, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert.

`systemLanguage` wird oft in Verbindung mit dem {{SVGElement("switch")}} Element verwendet. Wenn das Attribut in anderen Situationen verwendet wird, repräsentiert es einen einfachen Schalter am gegebenen Element, ob das Element gerendert werden soll oder nicht.

> [!NOTE]
> Wenn mehrere alternative Sprachobjekte in einem `<switch>` eingeschlossen sind und keines davon übereinstimmt, kann dies zu Situationen führen, in denen kein Inhalt angezeigt wird. Es wird daher empfohlen, am Ende eines solchen `<switch>` eine "Catch-All"-Wahl einzuschließen, die in allen Fällen akzeptabel ist.

Das Attribut wird als "true" ausgewertet, wenn eines der durch die Benutzerpräferenzen angegebenen Sprach-Tags eine nicht fallunterscheidende Übereinstimmung oder ein Präfix (gefolgt von einem "-") eines der in diesem Parameterwert angegebenen Sprach-Tags ist. Andernfalls wird es als "false" ausgewertet.

> [!NOTE]
> Die Präfixabgleichsregel impliziert nicht, dass, wenn ein Benutzer eine Sprache mit einem bestimmten Tag versteht, der Benutzer auch alle Sprachen mit dem Tag als Präfix versteht.

Wenn das Attribut nicht vorhanden ist, wird es implizit als "true" ausgewertet. Wenn ein Null- oder Leerzeichenstring-Wert angegeben ist, wird das Attribut als "false" ausgewertet.

Die Präfixregel erlaubt die Verwendung von Präfixtags, wenn dies der Fall ist.

Mehrere Sprachen können für Inhalte aufgelistet werden, die für mehrere Zielgruppen bestimmt sind. Zum Beispiel würde Inhalt, der gleichzeitig in der ursprünglichen Maori- und in der englischen Version präsentiert wird, folgendes erfordern:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

Jedoch bedeutet das Vorhandensein mehrerer Sprachen innerhalb des Objekts, auf dem das `systemLanguage` Testattribut platziert ist, nicht, dass es für mehrere sprachliche Zielgruppen bestimmt ist. Ein Beispiel wäre ein Anfängersprachenkurs, wie "Eine erste Lektion in Latein", der eindeutig für eine englischsprachige Zielgruppe gedacht ist. In diesem Fall sollte das Attribut nur `en` enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
