---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das Attribut **`xlink:title`** wird verwendet, um die Bedeutung eines Links oder einer Ressource in einer für Menschen lesbaren Weise zu beschreiben.

Die Verwendung dieser Information hängt stark von der Art der Verarbeitung ab. Es kann beispielsweise verwendet werden, um Titel für Anwendungen verfügbar zu machen, die von sehbehinderten Nutzern genutzt werden, oder um eine Tabelle mit Links zu erstellen oder um Hilfetext anzuzeigen, der erscheint, wenn ein Nutzer den Mauszeiger über eine startende Ressource bewegt.

> [!NOTE]
> Neue Inhalte sollten ein {{SVGElement("title")}} Kindelement anstelle eines `xlink:title` Attributs verwenden.

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

## Hinweise zur Verwendung

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
  - : Dieser Wert spezifiziert den Titel, der verwendet wird, um die Bedeutung des Links oder der Ressource zu beschreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
