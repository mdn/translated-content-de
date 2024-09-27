---
title: letter-spacing
slug: Web/SVG/Attribute/letter-spacing
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`letter-spacing`** Attribut steuert den Abstand zwischen Textzeichen.

Wenn der Attributwert eine einheitenlose Zahl ist (wie `128`), verarbeitet der Browser diese als {{cssxref("length")}} im aktuellen Benutzerskoordinatensystem.

Wenn der Attributwert einen Einheitenbezeichner hat, wie `.25em` oder `1%`, wandelt der Browser die \<length> in ihren entsprechenden Wert im aktuellen Benutzerskoordinatensystem um.

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
  <text y="20" letter-spacing="2">Bigger letter-spacing</text>
  <text x="200" y="20" letter-spacing="-0.5">Smaller letter-spacing</text>
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

Für eine Beschreibung der Werte sehen Sie bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft ein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("letter-spacing")}}
