---
title: xlink:show
slug: Web/SVG/Reference/Attribute/xlink:show
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{Deprecated_Header}}

Das **`xlink:show`** Attribut gibt an, wie eine verlinkte Ressource geöffnet werden soll und ist für {{Glossary("XLink", "XLink")}}-fähige Prozessoren gedacht. Bei einem Konflikt hat das {{SVGAttr("target")}} Attribut Vorrang, da es eine größere Bandbreite an Werten ausdrücken kann.

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
  - : Dieser Wert gibt an, dass die referenzierte Ressource in einem neuen Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Reference/Elements/a#target) auf `_blank` gesetzt, erreicht wird.
- `replace`
  - : Dieser Wert gibt an, dass die referenzierte Ressource im gleichen Fenster oder Tab geöffnet wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Reference/Elements/a#target) auf `_self` gesetzt, erreicht wird.
- `embed`
  - : Dieser Wert gibt an, dass anstatt zur Ressource zu verlinken, diese geladen und im Dokument angezeigt wird. Dies ähnelt dem Effekt, der durch ein HTML {{HTMLElement("img")}} Element erreicht wird.
- `other`
  - : Dieser Wert zeigt an, dass anderes im Link vorhandenes Markup, d.h. das {{SVGAttr("target")}} Attribut, sein Verhalten bestimmt.
- `none`
  - : Dieser Wert gibt an, dass es keine Angabe gibt, wie auf die verlinkte Ressource verwiesen werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:show` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#show-att)
