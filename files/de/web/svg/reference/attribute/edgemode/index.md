---
title: edgeMode
slug: Web/SVG/Reference/Attribute/edgeMode
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`edgeMode`**-Attribut bestimmt, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel am oder in der Nähe des Randes des Eingabebildes positioniert ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feGaussianBlur")}}

## feConvolveMatrix

Für {{SVGElement("feConvolveMatrix")}} bestimmt `edgeMode`, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel am oder in der Nähe des Randes des Eingabebildes positioniert ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>duplicate</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : Dieser Wert gibt an, dass das Eingabebild entlang jeder seiner Grenzen durch Duplizieren der Farbwerte am jeweiligen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert gibt an, dass das Eingabebild durch Übernahme der Farbwerte vom gegenüberliegenden Rand des Bildes erweitert wird.
- `none`
  - : Dieser Wert gibt an, dass das Eingabebild mit Pixelwerten von null für R, G, B und A erweitert wird.

## feGaussianBlur

Für {{SVGElement("feGaussianBlur")}} bestimmt `edgeMode`, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel am oder in der Nähe des Randes des Eingabebildes positioniert ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>duplicate</code> | <code>wrap</code> | <code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `duplicate`
  - : Dieser Wert gibt an, dass das Eingabebild entlang jeder seiner Grenzen durch Duplizieren der Farbwerte am jeweiligen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert gibt an, dass das Eingabebild durch Übernahme der Farbwerte vom gegenüberliegenden Rand des Bildes erweitert wird.
- `none`
  - : Dieser Wert gibt an, dass das Eingabebild mit Pixelwerten von null für R, G, B und A erweitert wird.

## Spezifikationen

{{Specifications}}
