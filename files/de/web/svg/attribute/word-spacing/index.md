---
title: word-spacing
slug: Web/SVG/Attribute/word-spacing
l10n:
  sourceCommit: 6c3fa1be644bab0b94ce933ae4331e4fd49a9db1
---

{{SVGRef}}

Das **`word-spacing`** Attribut spezifiziert das Abstandsverhalten zwischen Wörtern.

Wenn eine {{cssxref("length")}} ohne eine Einheitskennung angegeben wird (z.B. eine unqualifizierte Zahl wie 128), verarbeitet der Browser das \<length> als Breitenwert im aktuellen Benutzerkoordinatensystem.

Wenn eine \<length> mit einer der Einheitskennungen angegeben wird (z.B. .25em oder 1%), konvertiert der Browser die \<length> in einen entsprechenden Wert im aktuellen Benutzerkoordinatensystem.

> [!NOTE]
> Als Präsentationsattribut kann `word-spacing` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-Eigenschaft {{cssxref("word-spacing")}}.

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

Für eine Beschreibung der Werte beachten Sie bitte die [CSS `letter-spacing`](/de/docs/Web/CSS/letter-spacing#values) Eigenschaft.

## Beispiele

Dieses Beispiel enthält zwei {{SVGElement("text")}}-Elemente mit unterschiedlichen `word-spacing` Werten.

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
