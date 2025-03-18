---
title: stemh
slug: Web/SVG/Reference/Attribute/stemh
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das **`stemh`**-Attribut gibt die horizontale Stammweite der Schriftart an.

Die Stammweite bezieht sich auf den dominanten Stamm der Schriftart. Es können zwei oder mehr gestaltete Weiten vorhanden sein. Zum Beispiel unterscheiden sich die Hauptvertikalstämme der römischen Zeichen von den dünnen Stämmen auf serifierten "M" und "N". Außerdem kann es unterschiedliche Weiten für Groß- und Kleinbuchstaben in derselben Schriftart geben. Auch aus gestalterischen Gründen oder durch Fehler können alle Stämme leicht unterschiedliche Weiten aufweisen.

Falls dieses Attribut verwendet wird, muss auch das {{SVGAttr("units-per-em")}} verwendet werden.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("font-face")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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
  - : Dieser Wert gibt die horizontale Stammweite der Schriftart an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("stemv")}}
