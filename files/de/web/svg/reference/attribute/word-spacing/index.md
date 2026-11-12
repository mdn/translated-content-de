---
title: word-spacing
slug: Web/SVG/Reference/Attribute/word-spacing
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`word-spacing`** legt den Abstand zwischen Wörtern fest.

Wenn ein {{cssxref("length")}}-Wert ohne Einheitenbezeichner angegeben wird (z. B. eine Zahl ohne Einheit wie 128), verarbeitet der Browser \<length> als Breitenwert im aktuellen Benutzerkoordinatensystem.

Wenn ein \<length>-Wert mit einem Einheitenbezeichner angegeben wird (z. B. .25em oder 1%), wandelt der Browser \<length> in einen entsprechenden Wert im aktuellen Benutzerkoordinatensystem um.

> [!NOTE]
> Als Präsentationsattribut hat `word-spacing` auch eine entsprechende CSS-Eigenschaft: {{cssxref("word-spacing")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiele

Dieses Beispiel enthält zwei {{SVGElement("text")}}-Elemente mit unterschiedlichen `word-spacing`-Werten.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" word-spacing="4">Bigger spacing between words</text>
  <text x="0" y="40" word-spacing="-0.5">Smaller spacing between words</text>
</svg>
```

{{EmbedLiveSample("Examples", "250", "100")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
  </tbody>
</table>

Eine Beschreibung der Werte finden Sie bei der [CSS-Eigenschaft `letter-spacing`](/de/docs/Web/CSS/Reference/Properties/letter-spacing#values).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("word-spacing")}}
