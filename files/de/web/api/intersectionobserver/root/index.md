---
title: "IntersectionObserver: `root`-Eigenschaft"
short-title: root
slug: Web/API/IntersectionObserver/root
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`root`**-schreibgeschützte Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle identifiziert das [`Element`](/de/docs/Web/API/Element) oder das [`Document`](/de/docs/Web/API/Document), dessen Grenzen als das {{Glossary("bounding_box", "Begrenzungsrechteck")}} des {{Glossary("viewport", "Ansichtsfensters")}} für das Element behandelt werden, das Ziel des Beobachters ist.

Wenn `root` `null` ist, werden die Grenzen des tatsächlichen Dokument-Ansichtsfensters verwendet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document)-Objekt, dessen Begrenzungsrechteck als Begrenzung des Ansichtsfensters verwendet wird, um zu bestimmen, wie viel vom Zielelement sichtbar ist.
Der Schnittpunkt dieses Begrenzungsrechtecks, versetzt um alle in den Optionen angegebenen Ränder, die an den [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)-Konstruktor übergeben werden, die Begrenzungen des Zielelements, abzüglich der Begrenzungen jedes Elements oder anderen Objekts, das das Zielelement überlappt, wird als sichtbarer Bereich des Zielelements betrachtet.

Wenn `root` `null` ist, wird das eigentliche Dokument als Root verwendet, und die Grenzen seines Ansichtsfensters (das heißt, der sichtbare Bereich des Dokuments) werden als Root-Grenzen verwendet.

## Beispiele

Dieses Beispiel setzt die {{cssxref("border")}} des Wurzelelements des `IntersectionObserver` auf eine 2-Pixel mittlere grüne Linie.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitplanung der Sichtbarkeit von Elementen mit der Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
