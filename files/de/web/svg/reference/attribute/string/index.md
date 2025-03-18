---
title: string
slug: Web/SVG/Reference/Attribute/string
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`string`**-Attribut ist ein Hinweis an den Benutzeragenten und legt eine Liste von Formaten fest, die die vom übergeordneten {{SVGElement("font-face-uri")}}-Element referenzierte Schriftart unterstützt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face-format")}}

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
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<anything>`

  - : Dieser Wert gibt eine Liste von Formaten an, die von der vom übergeordneten {{SVGElement("font-face-uri")}}-Element referenzierten Schriftart unterstützt werden.

    Die verfügbaren Typen sind: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"` und `"svg"`. Weitere Informationen finden Sie im {{cssxref("@font-face/src", "src")}}-Deskriptor der {{cssxref("@font-face")}}-Regel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
