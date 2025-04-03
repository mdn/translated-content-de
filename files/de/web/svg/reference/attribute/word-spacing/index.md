---
title: word-spacing
slug: Web/SVG/Reference/Attribute/word-spacing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`word-spacing`** Attribut spezifiziert das Abstandsverhalten zwischen Wörtern.

Wenn eine {{cssxref("length")}} ohne eine Einheitenkennung angegeben wird (z.B. eine unqualifizierte Zahl wie 128), verarbeitet der Browser die \<length> als einen Breitenwert im aktuellen Benutzerkoordinatensystem.

Wird eine \<length> mit einer der Einheitenkennungen angegeben (z.B. .25em oder 1%), dann wandelt der Browser die \<length> in einen entsprechenden Wert im aktuellen Benutzerkoordinatensystem um.

> [!NOTE]
> Als Präsentationsattribut hat `word-spacing` auch ein CSS-Property-Gegenstück: {{cssxref("word-spacing")}}. Wenn beide spezifiziert sind, hat die CSS-Property Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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

Für eine Beschreibung der Werte beachten Sie bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Beispiele

Dieses Beispiel enthält zwei {{SVGElement("text")}} Elemente mit unterschiedlichen `word-spacing` Werten.

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

- CSS {{cssxref("word-spacing")}} Eigenschaft
