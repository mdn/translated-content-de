---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
l10n:
  sourceCommit: a631fd40bdc682a82be57be9932c9853a86ac1b5
---

{{APIRef("Geometry Interfaces")}}

Das **`DOMRectReadOnly`** Interface spezifiziert die Standard-Eigenschaften (auch verwendet von [`DOMRect`](/de/docs/Web/API/DOMRect)), um ein Rechteck zu definieren, dessen Eigenschaften unveränderlich sind.

## Konstruktor

- [`DOMRectReadOnly()`](/de/docs/Web/API/DOMRectReadOnly/DOMRectReadOnly)
  - : Definiert zur Erstellung eines neuen `DOMRectReadOnly`-Objekts.

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
  - : Gibt den oberen Koordinatenwert von `DOMRectReadOnly` zurück (meistens derselbe wie `y`).
- [`DOMRectReadOnly.right`](/de/docs/Web/API/DOMRectReadOnly/right) {{ReadOnlyInline}}
  - : Gibt den rechten Koordinatenwert von `DOMRectReadOnly` zurück (meistens derselbe wie `x + width`).
- [`DOMRectReadOnly.bottom`](/de/docs/Web/API/DOMRectReadOnly/bottom) {{ReadOnlyInline}}
  - : Gibt den unteren Koordinatenwert von `DOMRectReadOnly` zurück (meistens derselbe wie `y + height`).
- [`DOMRectReadOnly.left`](/de/docs/Web/API/DOMRectReadOnly/left) {{ReadOnlyInline}}
  - : Gibt den linken Koordinatenwert von `DOMRectReadOnly` zurück (meistens derselbe wie `x`).

## Statische Methoden

- [`DOMRectReadOnly.fromRect()`](/de/docs/Web/API/DOMRectReadOnly/fromRect_static)
  - : Erstellt ein neues `DOMRectReadOnly`-Objekt mit einer gegebenen Position und Dimensionen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
