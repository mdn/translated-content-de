---
title: xlink:show
slug: Web/SVG/Reference/Attribute/xlink:show
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`xlink:show`** Attribut gibt an, wie eine verlinkte Ressource geöffnet werden soll und ist für {{Glossary("XLink", "XLink")}}-fähige Prozessoren gedacht. Im Falle eines Konflikts hat das {{SVGAttr("target")}} Attribut Vorrang, da es eine breitere Palette von Werten ausdrücken kann.

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
  - : Dieser Wert gibt an, dass die referenzierte Ressource in einem neuen Fenster oder Tab geöffnet wird. Dies ist ähnlich dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Element/a#target) auf `_blank` erreicht wird.
- `replace`
  - : Dieser Wert gibt an, dass die referenzierte Ressource im selben Fenster oder Tab geöffnet wird. Dies ist ähnlich dem Effekt, der durch ein HTML {{HTMLElement("a")}} Element mit [target](/de/docs/Web/HTML/Element/a#target) auf `_self` erreicht wird.
- `embed`
  - : Dieser Wert gibt an, dass anstatt zur Ressource zu verlinken, sie innerhalb des Dokuments geladen und angezeigt wird. Dies ist ähnlich dem Effekt, der durch ein HTML {{HTMLElement("img")}} Element erreicht wird.
- `other`
  - : Dieser Wert gibt an, dass anderes Markup im Link, d.h. das {{SVGAttr("target")}} Attribut, das Verhalten bestimmt.
- `none`
  - : Dieser Wert spezifiziert, dass es keine Angabe gibt, wie auf die verlinkte Ressource verwiesen werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:show` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#show-att)
