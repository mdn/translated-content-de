---
title: Zeichenabstand
slug: Web/SVG/Attribute/letter-spacing
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das Attribut **`letter-spacing`** steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine zahl ohne Einheit (wie `128`) ist, verarbeitet der Browser es als {{cssxref("length")}} im aktuellen Koordinatensystem des Benutzers.

Hat der Attributwert eine Einheitenangabe, wie `.25em` oder `1%`, konvertiert der Browser die \<length> in den entsprechenden Wert im aktuellen Koordinatensystem des Benutzers.

> [!NOTE]
> Als Präsentationsattribut kann `letter-spacing` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("letter-spacing")}}.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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
  <text y="20" letter-spacing="2">Größerer Zeichenabstand</text>
  <text x="200" y="20" letter-spacing="-0.5">Kleinerer Zeichenabstand</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "30")}}

## Verwendungshinweise

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

Für eine Beschreibung der Werte, siehe die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
