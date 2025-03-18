---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`xlink:title`** Attribut wird verwendet, um die Bedeutung eines Links oder einer Ressource in einer für Menschen lesbaren Weise zu beschreiben.

Die Nutzung dieser Information hängt stark von der Art der Verarbeitung ab. Sie kann beispielsweise verwendet werden, um Titel in Anwendungen für sehbehinderte Benutzer verfügbar zu machen, um eine Tabelle mit Links zu erstellen, oder um Hilfetext anzuzeigen, der erscheint, wenn ein Benutzer den Mauszeiger über eine Startressource hält.

> [!NOTE]
> Neue Inhalte sollten ein {{SVGElement("title")}} Kind-Element anstelle eines `xlink:title` Attributs verwenden.

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

## Verwendungshinweise

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
      <td><em>None</em></td>
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
