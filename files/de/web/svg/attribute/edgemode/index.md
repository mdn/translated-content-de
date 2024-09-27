---
title: edgeMode
slug: Web/SVG/Attribute/edgeMode
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{SVGRef}}

Das **`edgeMode`** Attribut bestimmt, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel an oder nahe dem Rand des Eingabebildes positioniert ist.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feGaussianBlur")}}

## feConvolveMatrix

Für {{SVGElement("feConvolveMatrix")}} bestimmt `edgeMode`, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel an oder nahe dem Rand des Eingabebildes positioniert ist.

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
  - : Dieser Wert gibt an, dass das Eingabebild entlang jeder seiner Grenzen nach Bedarf durch Duplizieren der Farbwerte am gegebenen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert gibt an, dass das Eingabebild erweitert wird, indem die Farbwerte vom gegenüberliegenden Rand des Bildes übernommen werden.
- `none`
  - : Dieser Wert gibt an, dass das Eingabebild mit Pixelwerten von Null für R, G, B und A erweitert wird.

## feGaussianBlur

Für {{SVGElement("feGaussianBlur")}} bestimmt `edgeMode`, wie das Eingabebild bei Bedarf mit Farbwerten erweitert wird, damit die Matrixoperationen angewendet werden können, wenn der Kernel an oder nahe dem Rand des Eingabebildes positioniert ist.

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
  - : Dieser Wert gibt an, dass das Eingabebild entlang jeder seiner Grenzen nach Bedarf durch Duplizieren der Farbwerte am gegebenen Rand des Eingabebildes erweitert wird.
- `wrap`
  - : Dieser Wert gibt an, dass das Eingabebild erweitert wird, indem die Farbwerte vom gegenüberliegenden Rand des Bildes übernommen werden.
- `none`
  - : Dieser Wert gibt an, dass das Eingabebild mit Pixelwerten von Null für R, G, B und A erweitert wird.

## Spezifikationen

{{Specifications}}
