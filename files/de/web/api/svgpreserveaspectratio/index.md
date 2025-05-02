---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGPreserveAspectRatio`**-Schnittstelle entspricht dem {{SVGAttr("preserveAspectRatio")}}-Attribut.

Ein `SVGPreserveAspectRatio`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanz-Eigenschaften

- [`align`](/de/docs/Web/API/SVGPreserveAspectRatio/align)
  - : Der Typ des Ausrichtungswertes, wie er durch eine der auf dieser Schnittstelle definierten `SVG_PRESERVEASPECTRATIO_*` Konstanten angegeben ist.
- [`meetOrSlice`](/de/docs/Web/API/SVGPreserveAspectRatio/meetOrSlice)
  - : Der Typ des Meet-or-Slice-Wertes, wie er durch eine der auf dieser Schnittstelle definierten `SVG_MEETORSLICE_*` Konstanten angegeben ist.

## Instanz-Methoden

_Die `SVGPreserveAspectRatio`-Schnittstelle stellt keine spezifischen Methoden zur Verfügung._

## Statische Eigenschaften

- `SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
  - : Die Enumeration wurde auf einen Wert gesetzt, der nicht zu einem der vordefinierten Typen gehört. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzuschalten.
- `SVG_PRESERVEASPECTRATIO_NONE` (1)
  - : Entspricht dem Wert `none` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
  - : Entspricht dem Wert `xMinYMin` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
  - : Entspricht dem Wert `xMidYMin` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
  - : Entspricht dem Wert `xMaxYMin` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
  - : Entspricht dem Wert `xMinYMid` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
  - : Entspricht dem Wert `xMidYMid` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
  - : Entspricht dem Wert `xMaxYMid` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
  - : Entspricht dem Wert `xMinYMax` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
  - : Entspricht dem Wert `xMidYMax` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)
  - : Entspricht dem Wert `xMaxYMax` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_UNKNOWN` (0)
  - : Die Enumeration wurde auf einen Wert gesetzt, der nicht zu einem der vordefinierten Typen gehört. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzuschalten.
- `SVG_MEETORSLICE_MEET` (1)
  - : Entspricht dem Wert `meet` für das Attribut {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_SLICE` (2)
  - : Entspricht dem Wert `slice` für das Attribut {{SVGAttr("preserveAspectRatio")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
