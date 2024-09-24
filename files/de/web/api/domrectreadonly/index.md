---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

Die **`DOMRectReadOnly`**-Schnittstelle definiert die Standard-Eigenschaften (auch verwendet von {{domxref("DOMRect")}}), um ein Rechteck zu definieren, dessen Eigenschaften unveränderlich sind.

## Konstruktor

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : Definiert, um ein neues `DOMRectReadOnly` Objekt zu erstellen.

## Instanz-Eigenschaften

- {{domxref("DOMRectReadOnly.x")}} {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des Ursprungs des `DOMRectReadOnly` zurück.
- {{domxref("DOMRectReadOnly.y")}} {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des Ursprungs des `DOMRectReadOnly` zurück.
- {{domxref("DOMRectReadOnly.width")}} {{ReadOnlyInline}}
  - : Gibt die Breite des `DOMRectReadOnly` zurück.
- {{domxref("DOMRectReadOnly.height")}} {{ReadOnlyInline}}
  - : Gibt die Höhe des `DOMRectReadOnly` zurück.
- {{domxref("DOMRectReadOnly.top")}} {{ReadOnlyInline}}
  - : Gibt den oberen Koordinatenwert des `DOMRectReadOnly` zurück (normalerweise identisch mit `y`).
- {{domxref("DOMRectReadOnly.right")}} {{ReadOnlyInline}}
  - : Gibt den rechten Koordinatenwert des `DOMRectReadOnly` zurück (normalerweise identisch mit `x + width`).
- {{domxref("DOMRectReadOnly.bottom")}} {{ReadOnlyInline}}
  - : Gibt den unteren Koordinatenwert des `DOMRectReadOnly` zurück (normalerweise identisch mit `y + height`).
- {{domxref("DOMRectReadOnly.left")}} {{ReadOnlyInline}}
  - : Gibt den linken Koordinatenwert des `DOMRectReadOnly` zurück (normalerweise identisch mit `x`).

## Statische Methoden

- {{domxref("DOMRectReadOnly/fromRect_static", "DOMRectReadOnly.fromRect()")}}
  - : Erstellt ein neues `DOMRectReadOnly` Objekt mit einem gegebenen Standort und Abmessungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMPoint")}}
