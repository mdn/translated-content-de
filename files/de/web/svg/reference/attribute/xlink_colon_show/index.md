---
title: xlink:show
slug: Web/SVG/Reference/Attribute/xlink:show
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{Deprecated_Header}}

Das **`xlink:show`** Attribut gibt an, wie eine verknüpfte Ressource geöffnet werden soll und ist für {{Glossary("XLink", "XLink")}}-fähige Prozessoren gedacht. Bei einem Konflikt hat das {{SVGAttr("target")}} Attribut Vorrang, da es eine breitere Palette von Werten ausdrücken kann.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Nutzungshinweise

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
  - : Dieser Wert gibt an, dass die referenzierte Ressource in einem neuen Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Element/a#target), das auf `_blank` gesetzt ist, erreicht wird.
- `replace`
  - : Dieser Wert gibt an, dass die referenzierte Ressource im selben Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Element/a#target), das auf `_self` gesetzt ist, erreicht wird.
- `embed`
  - : Dieser Wert gibt an, dass anstelle eines Links zur Ressource diese innerhalb des Dokuments geladen und angezeigt wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("img")}} Element erreicht wird.
- `other`
  - : Dieser Wert zeigt an, dass anderes im Link vorhandenes Markup, d.h. das {{SVGAttr("target")}} Attribut, sein Verhalten bestimmt.
- `none`
  - : Dieser Wert gibt an, dass keine Angabe dafür existiert, wie auf die verknüpfte Ressource verwiesen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:show` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#show-att)
