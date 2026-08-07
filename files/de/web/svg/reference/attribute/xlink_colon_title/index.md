---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
l10n:
  sourceCommit: 9ac8d4f4ed0eb2f329e605329afeb51754c7fa79
---

{{Deprecated_Header}}

Das **`xlink:title`**-Attribut wird verwendet, um die Bedeutung eines Links oder einer Ressource in verständlicher Form zu beschreiben.

Die Nutzung dieser Information hängt stark von der Art der Verarbeitung ab. Es kann beispielsweise verwendet werden, um Titel für Anwendungen, die von sehbehinderten Nutzern verwendet werden, bereitzustellen, um eine Tabelle von Links zu erstellen oder um Hilfetext anzuzeigen, der erscheint, wenn ein Nutzer den Mauszeiger über eine Anfangsressource schweben lässt.

> [!NOTE]
> Neue Inhalte sollten ein {{SVGElement("title")}}-Kind-Element anstelle eines `xlink:title`-Attributs verwenden.

## Elemente

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#anything"
            >&#x3C;anything></a
          ></code
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

- `<anything>`
  - : Dieser Wert gibt den Titel an, der verwendet wird, um die Bedeutung des Links oder der Ressource zu beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
