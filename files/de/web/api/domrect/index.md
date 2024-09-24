---
title: DOMRect
slug: Web/API/DOMRect
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef("Geometry Interfaces")}}

Ein **`DOMRect`** beschreibt die Größe und Position eines Rechtecks.

Die Art des vom `DOMRect` dargestellten Kastens wird durch die Methode oder Eigenschaft bestimmt, die ihn zurückgegeben hat. Zum Beispiel spezifiziert {{domxref("Range.getBoundingClientRect()")}} das Rechteck, das den Inhalt des Bereichs mit solchen Objekten umgibt.

Es erbt von seinem Elternteil, {{domxref("DOMRectReadOnly")}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DOMRect.DOMRect", "DOMRect()")}}
  - : Erstellt ein neues `DOMRect`-Objekt.

## Instanz-Eigenschaften

_`DOMRect` erbt Eigenschaften von seinem Elternteil, {{domxref("DOMRectReadOnly")}}. Der Unterschied ist, dass sie nicht mehr schreibgeschützt sind._

- {{domxref("DOMRectReadOnly.x")}}
  - : Die x-Koordinate des Ursprungs des `DOMRect` (typischerweise die obere linke Ecke des Rechtecks).
- {{domxref("DOMRectReadOnly.y")}}
  - : Die y-Koordinate des Ursprungs des `DOMRect` (typischerweise die obere linke Ecke des Rechtecks).
- {{domxref("DOMRectReadOnly.width")}}
  - : Die Breite des `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}}
  - : Die Höhe des `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}}
  - : Gibt den oberen Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y` oder `y + height`, wenn `height` negativ ist).
- {{domxref("DOMRectReadOnly.right")}}
  - : Gibt den rechten Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x + width`, oder `x`, wenn `width` negativ ist).
- {{domxref("DOMRectReadOnly.bottom")}}
  - : Gibt den unteren Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `y + height`, oder `y`, wenn `height` negativ ist).
- {{domxref("DOMRectReadOnly.left")}}
  - : Gibt den linken Koordinatenwert des `DOMRect` zurück (hat denselben Wert wie `x`, oder `x + width`, wenn `width` negativ ist).

## Statische Methoden

_`DOMRect` kann auch statische Methoden von seinem Elternteil, {{domxref("DOMRectReadOnly")}}, erben._

- {{domxref("DOMRect/fromRect_static", "DOMRect.fromRect()")}}
  - : Erstellt ein neues `DOMRect`-Objekt mit einer gegebenen Position und Abmessungen.

## Instanz-Methoden

_`DOMRect` kann Methoden von seinem Elternteil, {{domxref("DOMRectReadOnly")}}, erben._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMPoint")}}
