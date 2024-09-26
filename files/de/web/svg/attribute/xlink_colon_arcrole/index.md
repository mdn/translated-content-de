---
title: xlink:arcrole
slug: Web/SVG/Attribute/xlink:arcrole
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{SVGRef}}{{Deprecated_Header}}

Das **`xlink:arcrole`** Attribut gibt eine kontextuelle Rolle für das Element an und entspricht dem Begriff einer Eigenschaft im [RDF Primer](https://www.w3.org/TR/rdf-primer/).

Diese kontextuelle Rolle kann sich von der Bedeutung der Ressource unterscheiden, wenn sie außerhalb des Kontexts dieses bestimmten Bogens betrachtet wird. Zum Beispiel könnte eine Ressource allgemein eine "Person" darstellen, aber im Kontext eines bestimmten Bogens die Rolle der "Mutter" und im Kontext eines anderen Bogens die Rolle der "Tochter" haben.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Hinweise zur Nutzung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#iri">&#x3C;iri></a></code
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
  - : Dieser Wert gibt eine [IRI](/de/docs/Web/SVG/Content_type#iri)-Referenz an, die eine Ressource identifiziert, welche das beabsichtigte Attribut beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Definition des `xlink:arcrole` Attributs in der XLink-Spezifikation](https://www.w3.org/TR/xlink/#link-semantics)