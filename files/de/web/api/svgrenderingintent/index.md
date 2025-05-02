---
title: SVGRenderingIntent
slug: Web/API/SVGRenderingIntent
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}{{deprecated_header}}

Das Interface **`SVGRenderingIntent`** definiert die aufgezählte Liste möglicher Werte für {{SVGAttr("rendering-intent")}} Attribute oder Deskriptoren.

{{InheritanceDiagram}}

> [!WARNING]
> Dieses Interface wurde in der SVG 2 Spezifikation entfernt.

## Instanz-Eigenschaften

_Dieses Interface implementiert keine spezifischen Eigenschaften._

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden._

## Statische Eigenschaften

- `RENDERING_INTENT_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
- `RENDERING_INTENT_AUTO` (1)
  - : Entspricht dem Wert `auto`.
- `RENDERING_INTENT_PERCEPTUAL` (2)
  - : Entspricht dem Wert `perceptual`.
- `RENDERING_INTENT_RELATIVE_COLORIMETRIC` (3)
  - : Entspricht dem Wert `relative-colorimetric`.
- `RENDERING_INTENT_SATURATION` (4)
  - : Entspricht dem Wert `saturation`.
- `RENDERING_INTENT_ABSOLUTE_COLORIMETRIC` (5)
  - : Entspricht dem Wert `absolute-colorimetric`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("rendering-intent")}}
