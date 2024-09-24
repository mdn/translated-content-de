---
title: SVGRenderingIntent
slug: Web/API/SVGRenderingIntent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}{{deprecated_header}}

Die **`SVGRenderingIntent`** Schnittstelle definiert die aufgezählte Liste der möglichen Werte für {{SVGAttr("rendering-intent")}} Attribute oder Deskriptoren.

{{InheritanceDiagram}}

> [!WARNING]
> Diese Schnittstelle wurde in der SVG 2-Spezifikation entfernt.

## Konstanten

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig,
        zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert in diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_AUTO</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>auto</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_PERCEPTUAL</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>perceptual</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_RELATIVE_COLORIMETRIC</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>relative-colorimetric</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_SATURATION</code></td>
      <td>4</td>
      <td>Entspricht dem Wert <code>saturation</code>.</td>
    </tr>
    <tr>
      <td><code>RENDERING_INTENT_ABSOLUTE_COLORIMETRIC</code></td>
      <td>5</td>
      <td>Entspricht dem Wert <code>absolute-colorimetric</code>.</td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Diese Schnittstelle implementiert keine spezifischen Eigenschaften._

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("rendering-intent")}}
