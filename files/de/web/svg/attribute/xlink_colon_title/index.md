---
title: xlink:title
slug: Web/SVG/Attribute/xlink:title
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}{{Deprecated_Header}}

Das Attribut **`xlink:title`** wird verwendet, um die Bedeutung eines Links oder einer Ressource in einer für Menschen lesbaren Weise zu beschreiben.

Die Verwendung dieser Informationen hängt stark von der Art der Verarbeitung ab. Sie können beispielsweise verwendet werden, um Titel für Anwendungen verfügbar zu machen, die von sehbehinderten Nutzern genutzt werden, oder um eine Linktabelle zu erstellen, oder um Hilfetexte anzuzeigen, die erscheinen, wenn ein Benutzer den Mauszeiger über eine Startressource bewegt.

> [!NOTE]
> Für neue Inhalte sollte ein {{SVGElement("title")}} Kind-Element anstelle eines `xlink:title` Attributs verwendet werden.

## Elemente

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

## Nutzungshinweise

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
  - : Dieser Wert gibt den Titel an, der verwendet wird, um die Bedeutung des Links oder der Ressource zu beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
