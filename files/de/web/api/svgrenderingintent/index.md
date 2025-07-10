---
title: SVGRenderingIntent
slug: Web/API/SVGRenderingIntent
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{APIRef("SVG")}}{{deprecated_header}}

Die **`SVGRenderingIntent`**-Schnittstelle definiert die aufgezählte Liste möglicher Werte für `rendering-intent`-Attribute oder -Deskriptoren.

{{InheritanceDiagram}}

> [!WARNING]
> Diese Schnittstelle wurde in der SVG 2-Spezifikation entfernt.

## Instanz-Eigenschaften

_Diese Schnittstelle implementiert keine spezifischen Eigenschaften._

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden._

## Statische Eigenschaften

- `RENDERING_INTENT_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu ändern.
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
