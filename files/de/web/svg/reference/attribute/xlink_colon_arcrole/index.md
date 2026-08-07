---
title: xlink:arcrole
slug: Web/SVG/Reference/Attribute/xlink:arcrole
l10n:
  sourceCommit: 9ac8d4f4ed0eb2f329e605329afeb51754c7fa79
---

{{Deprecated_Header}}

Das **`xlink:arcrole`**-Attribut spezifiziert eine kontextuelle Rolle für das Element und entspricht der [RDF-Primer](https://www.w3.org/TR/rdf-primer/)-Vorstellung einer Eigenschaft.

Diese kontextuelle Rolle kann sich von der Bedeutung der Ressource unterscheiden, wenn sie außerhalb des Kontextes dieses speziellen Bogens betrachtet wird. Zum Beispiel könnte eine Ressource allgemein eine "Person" darstellen, aber im Kontext eines bestimmten Bogens die Rolle einer "Mutter" und im Kontext eines anderen Bogens die Rolle einer "Tochter" haben.

Dieses Attribut können Sie mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("use")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#iri">&#x3C;iri></a></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<iri>`
  - : Dieser Wert spezifiziert eine [IRI](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz, die eine Ressource identifiziert, die die vorgesehene Eigenschaft beschreibt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Definition des `xlink:arcrole`-Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#link-semantics)
