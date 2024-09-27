---
title: xlink:title
slug: Web/SVG/Attribute/xlink:title
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das **`xlink:title`**-Attribut wird verwendet, um die Bedeutung eines Links oder einer Ressource in einer für Menschen lesbaren Weise zu beschreiben.

Die Verwendung dieser Information hängt stark von der Art der Verarbeitung ab, die durchgeführt wird. Es kann beispielsweise verwendet werden, um Titel für Anwendungen bereitzustellen, die von sehbehinderten Nutzern verwendet werden, um eine Tabelle von Links zu erstellen oder um Hilfetext darzustellen, der erscheint, wenn ein Nutzer den Mauszeiger über eine startende Ressource bewegt.

> [!NOTE]
> Neue Inhalte sollten ein {{SVGElement("title")}}-Kind-Element anstelle eines `xlink:title`-Attributs verwenden.

## Elemente

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

## Anwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#anything"
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
  - : Dieser Wert spezifiziert den Titel, der verwendet wird, um die Bedeutung des Links oder der Ressource zu beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
