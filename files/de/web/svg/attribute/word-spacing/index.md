---
title: word-spacing
slug: Web/SVG/Attribute/word-spacing
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`word-spacing`**-Attribut gibt das Verhalten des Abstands zwischen Wörtern an.

Wenn eine {{cssxref("length")}} ohne Einheitenbezeichner angegeben wird (z. B. eine unqualifizierte Zahl wie 128), verarbeitet der Browser die \<length> als einen Breitenwert im aktuellen Benutzerkoordinatensystem.

Wenn eine \<length> mit einem der Einheitenbezeichner angegeben wird (z. B. .25em oder 1%), konvertiert der Browser die \<length> in einen entsprechenden Wert im aktuellen Benutzerkoordinatensystem.

> [!NOTE]
> Als Präsentationsattribut hat `word-spacing` auch ein entsprechendes CSS-Attribut: {{cssxref("word-spacing")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Elemente

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Nutzungshinweise

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

Für eine Beschreibung der Werte siehe die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values)-Eigenschaft.

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

- CSS {{cssxref("word-spacing")}}-Eigenschaft
