---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut **`letter-spacing`** steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine zahl ohne Einheit ist (wie `128`), verarbeitet der Browser sie als {{cssxref("length")}} im aktuellen Koordinatensystem des Benutzers.

Wenn der Attributwert einen Einheitenindikator hat, wie `.25em` oder `1%`, konvertiert der Browser das \<length> in seinen entsprechenden Wert im aktuellen Koordinatensystem des Benutzers.

> [!NOTE]
> Als Präsentationsattribut kann `letter-spacing` als CSS-Eigenschaft verwendet werden. Siehe die CSS-Eigenschaft {{cssxref("letter-spacing")}} für weitere Informationen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>normal</code> | {{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte verweisen wir auf die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
