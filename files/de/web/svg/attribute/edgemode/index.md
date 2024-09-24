---
title: edgeMode
slug: Web/SVG/Attribute/edgeMode
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`edgeMode`**-Attribut bestimmt, wie das Eingabebild erforderlichenfalls mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn sich der Kernel am oder nahe dem Rand des Eingabebildes befindet.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feGaussianBlur")}}

## feConvolveMatrix

Für {{SVGElement("feConvolveMatrix")}} bestimmt `edgeMode`, wie das Eingabebild erforderlichenfalls mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn sich der Kernel am oder nahe dem Rand des Eingabebildes befindet.

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
  - : Dieser Wert zeigt an, dass das Eingabebild entlang jeder seiner Kanten durch Duplizieren der Farbwerte am angegebenen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert zeigt an, dass das Eingabebild durch Übernehmen der Farbwerte von der gegenüberliegenden Kante des Bildes erweitert wird.
- `none`
  - : Dieser Wert zeigt an, dass das Eingabebild mit Pixelwerten von Null für R, G, B und A erweitert wird.

## feGaussianBlur

Für {{SVGElement("feGaussianBlur")}} bestimmt `edgeMode`, wie das Eingabebild erforderlichenfalls mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn sich der Kernel am oder nahe dem Rand des Eingabebildes befindet.

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
  - : Dieser Wert zeigt an, dass das Eingabebild entlang jeder seiner Kanten durch Duplizieren der Farbwerte am angegebenen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert zeigt an, dass das Eingabebild durch Übernehmen der Farbwerte von der gegenüberliegenden Kante des Bildes erweitert wird.
- `none`
  - : Dieser Wert zeigt an, dass das Eingabebild mit Pixelwerten von Null für R, G, B und A erweitert wird.

## Spezifikationen

{{Specifications}}
