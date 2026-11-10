---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGPreserveAspectRatio`** entspricht dem Attribut {{SVGAttr("preserveAspectRatio")}}.

Ein `SVGPreserveAspectRatio`-Objekt kann als schreibgeschützt festgelegt werden. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

## Statische Eigenschaften

- `SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
  - : Der Aufzählungswert wurde auf einen Wert gesetzt, der keinem der vordefinierten Typen entspricht. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_PRESERVEASPECTRATIO_NONE` (1)
  - : Entspricht dem Wert `none` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
  - : Entspricht dem Wert `xMinYMin` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
  - : Entspricht dem Wert `xMidYMin` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
  - : Entspricht dem Wert `xMaxYMin` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
  - : Entspricht dem Wert `xMinYMid` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
  - : Entspricht dem Wert `xMidYMid` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
  - : Entspricht dem Wert `xMaxYMid` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
  - : Entspricht dem Wert `xMinYMax` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
  - : Entspricht dem Wert `xMidYMax` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)
  - : Entspricht dem Wert `xMaxYMax` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_UNKNOWN` (0)
  - : Der Aufzählungswert wurde auf einen Wert gesetzt, der keinem der vordefinierten Typen entspricht. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_MEETORSLICE_MEET` (1)
  - : Entspricht dem Wert `meet` des Attributs {{SVGAttr("preserveAspectRatio")}}.
- `SVG_MEETORSLICE_SLICE` (2)
  - : Entspricht dem Wert `slice` des Attributs {{SVGAttr("preserveAspectRatio")}}.

## Instanzeigenschaften

- [`align`](/de/docs/Web/API/SVGPreserveAspectRatio/align)
  - : Der Typ des Ausrichtungswerts, angegeben durch eine der auf dieser Schnittstelle definierten Konstanten `SVG_PRESERVEASPECTRATIO_*`.
- [`meetOrSlice`](/de/docs/Web/API/SVGPreserveAspectRatio/meetOrSlice)
  - : Der Typ des Meet-or-Slice-Werts, angegeben durch eine der auf dieser Schnittstelle definierten Konstanten `SVG_MEETORSLICE_*`.

## Instanzmethoden

_Die Schnittstelle `SVGPreserveAspectRatio` stellt keine eigenen Methoden bereit._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
