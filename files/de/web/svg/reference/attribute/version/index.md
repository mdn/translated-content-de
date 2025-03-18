---
title: version
slug: Web/SVG/Reference/Attribute/version
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

Das Attribut **`version`** wird verwendet, um anzugeben, welcher Spezifikation ein SVG-Dokument entspricht. Es ist nur auf dem Wurzelelement {{SVGElement("svg")}} erlaubt. Es ist rein informativer Natur und hat keinen Einfluss auf das Rendering oder die Verarbeitung.

Obwohl es angegeben ist, dass es jede Zahl akzeptieren kann, sind derzeit nur die zwei Werte `1.0` und `1.1` gültig.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("svg")}}

```html
<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## Verwendungsnotizen

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
