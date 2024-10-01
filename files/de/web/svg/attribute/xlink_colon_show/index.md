---
title: xlink:show
slug: Web/SVG/Attribute/xlink:show
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{SVGRef}}{{Deprecated_Header}}

Das **`xlink:show`**-Attribut gibt an, wie eine verlinkte Ressource geöffnet werden soll und ist für {{Glossary("XLink", "XLink")}}-fähige Prozessoren gedacht. Im Falle eines Konflikts hat das {{SVGAttr("target")}}-Attribut Vorrang, da es eine größere Bandbreite an Werten ausdrücken kann.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>new</code> | <code>replace</code> | <code>embed</code> |
        <code>other</code> | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `new`
  - : Dieser Wert gibt an, dass die referenzierte Ressource in einem neuen Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}}-Element mit [target](/de/docs/Web/HTML/Element/a#target), das auf `_blank` gesetzt ist, erreicht wird.
- `replace`
  - : Dieser Wert gibt an, dass die referenzierte Ressource im selben Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}}-Element mit [target](/de/docs/Web/HTML/Element/a#target), das auf `_self` gesetzt ist, erreicht wird.
- `embed`
  - : Dieser Wert gibt an, dass die Ressource nicht verlinkt wird, sondern innerhalb des Dokuments geladen und angezeigt wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("img")}}-Element erreicht wird.
- `other`
  - : Dieser Wert gibt an, dass der andere im Link vorhandene Markup, d.h. das {{SVGAttr("target")}}-Attribut, das Verhalten bestimmt.
- `none`
  - : Dieser Wert gibt an, dass es keine Vorgabe gibt, wie auf die verlinkte Ressource zu verweisen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:show`-Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#show-att)
