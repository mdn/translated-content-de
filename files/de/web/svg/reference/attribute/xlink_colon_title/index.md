---
title: xlink:title
slug: Web/SVG/Reference/Attribute/xlink:title
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{Deprecated_Header}}

Das **`xlink:title`** Attribut wird verwendet, um die Bedeutung eines Links oder einer Ressource auf eine für Menschen lesbare Weise zu beschreiben.

Die Nutzung dieser Information hängt stark von der durchgeführten Verarbeitung ab. Sie kann zum Beispiel verwendet werden, um Titel für Anwendungen zur Verfügung zu stellen, die von sehbehinderten Nutzern genutzt werden, um eine Tabelle von Links zu erstellen oder um Hilfetexte anzuzeigen, die erscheinen, wenn ein Benutzer den Mauszeiger über eine startende Ressource schweben lässt.

> [!NOTE]
> Neue Inhalte sollten ein {{SVGElement("title")}} Kind-Element anstelle eines `xlink:title` Attributs verwenden.

## Elemente

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
