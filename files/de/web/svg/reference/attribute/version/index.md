---
title: version
slug: Web/SVG/Reference/Attribute/version
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Das **`version`**-Attribut wird verwendet, um anzugeben, welcher Spezifikation ein SVG-Dokument entspricht. Es ist nur auf dem root {{SVGElement("svg")}}-Element erlaubt. Es ist rein informativ und hat keinen Einfluss auf die Darstellung oder Verarbeitung.

Obwohl es so spezifiziert ist, dass jede Zahl akzeptiert wird, sind derzeit nur `1.0` und `1.1` gültige Optionen.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("svg")}}

```html
<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

## Hinweise zur Verwendung

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
