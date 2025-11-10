---
title: xlink:arcrole
slug: Web/SVG/Reference/Attribute/xlink:arcrole
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

Das Attribut **`xlink:arcrole`** gibt eine kontextbezogene Rolle für das Element an und entspricht dem Begriff einer Eigenschaft im [RDF Primer](https://www.w3.org/TR/rdf-primer/).

Diese kontextbezogene Rolle kann sich von der Bedeutung der Ressource unterscheiden, wenn sie außerhalb des Kontexts dieses bestimmten Bogens betrachtet wird. Beispielsweise könnte eine Ressource allgemein eine "Person" darstellen, aber im Kontext eines bestimmten Bogens die Rolle einer "Mutter" und im Kontext eines anderen Bogens die Rolle einer "Tochter" haben.

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
  - : Dieser Wert gibt eine [IRI](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz an, die eine Ressource identifiziert, die die beabsichtigte Eigenschaft beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:arcrole`-Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#link-semantics)
