---
title: stemh
slug: Web/SVG/Attribute/stemh
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemh`** Attribut gibt die horizontale Stärkenbreite der Schriftart an.

Die Stärkenbreite bezieht sich auf die dominierende Stange der Schriftart. Es kann zwei oder mehr gestaltete Breiten geben. Zum Beispiel unterscheiden sich die Hauptvertikalen Stangen von römischen Zeichen von den dünnen Stangen bei serifierten "M" und "N", außerdem kann es unterschiedliche Breiten für Groß- und Kleinbuchstaben in derselben Schriftart geben. Sowohl durch Design als auch durch Fehler können alle Stangen leicht unterschiedliche Breiten aufweisen.

Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Nutzungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
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

- `<number>`
  - : Dieser Wert gibt die horizontale Stärkenbreite der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemv")}}
