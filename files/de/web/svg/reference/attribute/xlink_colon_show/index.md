---
title: xlink:show
slug: Web/SVG/Reference/Attribute/xlink:show
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`xlink:show`** Attribut gibt an, wie eine verlinkte Ressource geöffnet werden soll, und ist für {{Glossary("XLink", "XLink")}}-fähige Prozessoren gedacht. Bei einem Konflikt hat das {{SVGAttr("target")}} Attribut Vorrang, da es einen größeren Wertebereich ausdrücken kann.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass die referenzierte Ressource in einem neuen Fenster oder Tab geöffnet wird. Dies ist ähnlich wie der Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit gesetztem [target](/de/docs/Web/HTML/Reference/Elements/a#target) auf `_blank` erreicht wird.
- `replace`
  - : Dieser Wert gibt an, dass die referenzierte Ressource im selben Fenster oder Tab geöffnet wird. Dies ist ähnlich wie der Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit gesetztem [target](/de/docs/Web/HTML/Reference/Elements/a#target) auf `_self` erreicht wird.
- `embed`
  - : Dieser Wert gibt an, dass anstatt zur Ressource zu verlinken, sie geladen und innerhalb des Dokuments angezeigt wird. Dies ist ähnlich wie der Effekt, der durch ein HTML {{HTMLElement("img")}} Element erreicht wird.
- `other`
  - : Dieser Wert zeigt an, dass anderes im Link vorhandenes Markup, d.h. das {{SVGAttr("target")}} Attribut, sein Verhalten bestimmt.
- `none`
  - : Dieser Wert gibt an, dass keine Angabe vorgenommen wird, wie auf die verlinkte Ressource verwiesen werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:show` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#show-att)
