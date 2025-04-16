---
title: word-spacing
slug: Web/SVG/Reference/Attribute/word-spacing
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`word-spacing`**-Attribut spezifiziert das Verhalten des Abstands zwischen Wörtern.

Wenn eine {{cssxref("length")}} ohne Einheit angegeben wird (z. B. eine nicht qualifizierte Zahl wie 128), verarbeitet der Browser die \<length> als einen Breitenwert im aktuellen Benutzerkoordinatensystem.

Wenn eine \<length> mit einer der Einheitsspezifizierer (z. B. .25em oder 1%) angegeben wird, konvertiert der Browser die \<length> in einen entsprechenden Wert im aktuellen Benutzerkoordinatensystem.

> [!NOTE]
> Als Präsentationsattribut hat `word-spacing` auch ein entsprechendes CSS-Property: {{cssxref("word-spacing")}}. Wenn beide angegeben sind, hat das CSS-Property Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

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
      <th scope="row">Standardwerte</th>
      <td><code>normal</code></td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte siehe bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Property.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("word-spacing")}}-Property
