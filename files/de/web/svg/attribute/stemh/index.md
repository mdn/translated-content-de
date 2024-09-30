---
title: stemh
slug: Web/SVG/Attribute/stemh
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

--- 
title: "stemh" 
slug: Web/SVG/Attribute/stemh 
page-type: svg-attribute 
status: 
  - deprecated 
browser-compat: svg.elements.font-face.stemh 
---

{{SVGRef}}{{Deprecated_Header}}

Das **`stemh`**-Attribut gibt die horizontale Stammstärke der Schriftart an.

Die Stammstärke bezieht sich auf den dominanten Stamm der Schriftart. Es kann mehrere vorgesehene Breiten geben. Zum Beispiel unterscheiden sich die Hauptvertikalstämme von römischen Zeichen von den dünnen Stämmen auf seriell gestalteten "M" und "N". Außerdem kann es unterschiedliche Breiten für Groß- und Kleinbuchstaben in derselben Schriftart geben. Auch können, entweder durch Design oder Fehler, alle Stämme leicht unterschiedliche Breiten aufweisen.

Wenn dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Hinweise zur Verwendung

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
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : Dieser Wert gibt die horizontale Stammstärke der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemv")}}
