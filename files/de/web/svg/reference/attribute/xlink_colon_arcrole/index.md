---
title: xlink:arcrole
slug: Web/SVG/Reference/Attribute/xlink:arcrole
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`xlink:arcrole`**-Attribut legt eine kontextuelle Rolle für das Element fest und entspricht dem Begriff der Eigenschaft im [RDF Primer](https://www.w3.org/TR/rdf-primer/).

Diese kontextuelle Rolle kann sich von der Bedeutung der Ressource unterscheiden, wenn sie außerhalb des Kontextes dieses besonderen Bogens betrachtet wird. Ein Beispiel: Eine Ressource könnte allgemein eine "Person" repräsentieren, aber im Kontext eines bestimmten Bogens könnte sie die Rolle "Mutter" haben und im Kontext eines anderen Bogens die Rolle "Tochter".

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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
  - : Dieser Wert spezifiziert eine [IRI](/de/docs/Web/SVG/Guides/Content_type#iri)-Referenz, die eine Ressource identifiziert, welche die beabsichtigte Eigenschaft beschreibt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Definition des `xlink:arcrole`-Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#link-semantics)
