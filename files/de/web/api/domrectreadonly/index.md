---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Schnittstelle **`DOMRectReadOnly`** legt die Standardeigenschaften fest (die auch von [`DOMRect`](/de/docs/Web/API/DOMRect) verwendet werden), um ein Rechteck mit unveränderlichen Eigenschaften zu definieren.

## Konstruktor

- [`DOMRectReadOnly()`](/de/docs/Web/API/DOMRectReadOnly/DOMRectReadOnly)
  - : Erstellt ein neues `DOMRectReadOnly`-Objekt.

## Instanzeigenschaften

- [`DOMRectReadOnly.x`](/de/docs/Web/API/DOMRectReadOnly/x) {{ReadOnlyInline}}
  - : Gibt die x-Koordinate des Ursprungs von `DOMRectReadOnly` zurück.
- [`DOMRectReadOnly.y`](/de/docs/Web/API/DOMRectReadOnly/y) {{ReadOnlyInline}}
  - : Gibt die y-Koordinate des Ursprungs von `DOMRectReadOnly` zurück.
- [`DOMRectReadOnly.width`](/de/docs/Web/API/DOMRectReadOnly/width) {{ReadOnlyInline}}
  - : Gibt die Breite von `DOMRectReadOnly` zurück.
- [`DOMRectReadOnly.height`](/de/docs/Web/API/DOMRectReadOnly/height) {{ReadOnlyInline}}
  - : Gibt die Höhe von `DOMRectReadOnly` zurück.
- [`DOMRectReadOnly.top`](/de/docs/Web/API/DOMRectReadOnly/top) {{ReadOnlyInline}}
  - : Gibt den oberen Koordinatenwert von `DOMRectReadOnly` zurück (in der Regel identisch mit `y`).
- [`DOMRectReadOnly.right`](/de/docs/Web/API/DOMRectReadOnly/right) {{ReadOnlyInline}}
  - : Gibt den rechten Koordinatenwert von `DOMRectReadOnly` zurück (in der Regel identisch mit `x + width`).
- [`DOMRectReadOnly.bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom) {{ReadOnlyInline}}
  - : Gibt den unteren Koordinatenwert von `DOMRectReadOnly` zurück (in der Regel identisch mit `y + height`).
- [`DOMRectReadOnly.left`](/de/docs/Web/API/DOMRectReadOnly/left) {{ReadOnlyInline}}
  - : Gibt den linken Koordinatenwert von `DOMRectReadOnly` zurück (in der Regel identisch mit `x`).

## Statische Methoden

- [`DOMRectReadOnly.fromRect()`](/de/docs/Web/API/DOMRectReadOnly/fromRect_static)
  - : Erstellt ein neues `DOMRectReadOnly`-Objekt mit einer angegebenen Position und angegebenen Abmessungen.

## Instanzmethoden

- [`DOMRectReadOnly.toJSON()`](/de/docs/Web/API/DOMRectReadOnly/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `DOMRectReadOnly`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
