---
title: string
slug: Web/SVG/Attribute/string
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`string`**-Attribut ist ein Hinweis für das Benutzerprogramm und gibt eine Liste von Formaten an, die die vom übergeordneten {{SVGElement("font-face-uri")}}-Element referenzierte Schriftart unterstützt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("font-face-format")}}

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

  - : Dieser Wert gibt eine Liste von Formaten an, die von der durch das übergeordnete {{SVGElement("font-face-uri")}}-Element referenzierten Schriftart unterstützt werden.

    Die verfügbaren Typen sind: `"woff"`, `"woff2"`, `"truetype"`, `"opentype"`, `"embedded-opentype"` und `"svg"`. Weitere Informationen finden Sie im {{cssxref("@font-face/src", "src")}}-Deskriptor der {{cssxref("@font-face")}}-At-Regel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
