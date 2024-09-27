---
title: stemh
slug: Web/SVG/Attribute/stemh
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemh`**-Attribut gibt die horizontale Stängelbreite der Schriftart an.

Die Stängelbreite bezieht sich auf den dominanten Stängel der Schriftart. Es können zwei oder mehr entworfene Breiten vorhanden sein. Zum Beispiel unterscheiden sich die Hauptvertikalstängel von römischen Zeichen von den dünnen Stängeln auf dem serifierten "M" und "N". Zusätzlich kann es unterschiedliche Breiten für Groß- und Kleinbuchstaben in derselben Schriftart geben. Auch können durch Design oder Fehler alle Stängel geringfügig unterschiedliche Breiten haben.

Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Anwendungshinweise

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
  - : Dieser Wert gibt die horizontale Stängelbreite der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemv")}}
