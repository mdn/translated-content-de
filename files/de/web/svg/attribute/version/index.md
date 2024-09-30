---
title: version
slug: Web/SVG/Attribute/version
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}{{Deprecated_Header}}

Das **`version`**-Attribut wird verwendet, um anzugeben, welcher Spezifikation ein SVG-Dokument entspricht. Es ist nur im Wurzel-{{SVGElement("svg")}}-Element erlaubt. Es ist rein beratend und hat keinen Einfluss auf das Rendering oder die Verarbeitung.

Während es spezifiziert ist, jede beliebige Zahl zu akzeptieren, sind die einzigen derzeit gültigen Optionen `1.0` und `1.1`.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("svg")}}

```html
<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="80" height="80" />
</svg>
```

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
