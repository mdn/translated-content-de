---
title: xlink:arcrole
slug: Web/SVG/Reference/Attribute/xlink:arcrole
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`xlink:arcrole`** Attribut spezifiziert eine kontextuelle Rolle für das Element und entspricht dem Begriff einer Eigenschaft im [RDF Primer](https://www.w3.org/TR/rdf-primer/).

Diese kontextuelle Rolle kann sich von der Bedeutung der Ressource unterscheiden, wenn sie außerhalb des Kontextes dieses bestimmten Bogens genommen wird. Zum Beispiel könnte eine Ressource allgemein eine "Person" darstellen, aber im Kontext eines bestimmten Bogens könnte sie die Rolle "Mutter" haben und im Kontext eines anderen Bogens die Rolle "Tochter".

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("cursor")}}
- {{SVGElement("feImage")}}
- {{SVGElement("filter")}}
- {{SVGElement("font-face-uri")}}
- {{SVGElement("glyphRef")}}
- {{SVGElement("image")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("mpath")}}
- {{SVGElement("pattern")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("script")}}
- {{SVGElement("set")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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
  - : Dieser Wert spezifiziert eine [IRI](/de/docs/Web/SVG/Guides/Content_type#iri) Referenz, die eine Ressource identifiziert, die die beabsichtigte Eigenschaft beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:arcrole` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#link-semantics)
