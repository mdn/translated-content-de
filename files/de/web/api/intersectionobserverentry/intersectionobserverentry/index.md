---
title: "IntersectionObserverEntry: IntersectionObserverEntry() Konstruktor"
short-title: IntersectionObserverEntry()
slug: Web/API/IntersectionObserverEntry/IntersectionObserverEntry
l10n:
  sourceCommit: 05ed02a77bcfe1f7f22a74ece5757b44f21fdbc1
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

Der **`IntersectionObserverEntry()`** Konstruktor erstellt und gibt ein neues [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt zurück.

> [!NOTE]
> Im typischen Gebrauch müssen Sie diesen Konstruktor nicht selbst aufrufen. `IntersectionObserverEntry`-Objekte werden automatisch vom Browser erstellt und an den [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callback übergeben, wenn eine Überschneidung beobachtet wird, oder von [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords) zurückgegeben.

## Syntax

```js-nolint
new IntersectionObserverEntry(intersectionObserverEntryInit)
```

### Parameter

- `intersectionObserverEntryInit`
  - : Ein Objekt mit den folgenden Eigenschaften, die alle erforderlich sind:
    - `boundingClientRect`
      - : Ein Objekt, das die Position und Abmessungen des Begrenzungsrechtecks des Ziel-Elements mit den Eigenschaften `x`, `y`, `width` und `height` angibt. Dies entspricht dem Rechteck, das von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) zurückgegeben wird.
    - `intersectionRatio`
      - : Eine Zahl, die das Verhältnis des `intersectionRect`-Bereichs zum `boundingClientRect`-Bereich darstellt. Wenn der `boundingClientRect`-Bereich null ist, beträgt dieses Verhältnis 1, wenn `isIntersecting` `true` ist, und 0, wenn nicht.
    - `intersectionRect`
      - : Ein Objekt, das die Position und Abmessungen des sichtbaren Bereichs des Ziels innerhalb des Schnittrechtecks des Wurzels mit den Eigenschaften `x`, `y`, `width` und `height` spezifiziert.
    - `isIntersecting`
      - : Ein boolescher Wert, der `true` ist, wenn das Ziel-Element mit dem Wurzel des Intersection Observer Überschneidungen hat, oder `false` ansonsten.
    - `isVisible`
      - : Ein boolescher Wert, der `true` ist, wenn das Ziel-Element als vollständig sichtbar und nicht verdeckt bestimmt wurde, ohne visuelle Effekte, die seine Anzeige auf dem Bildschirm verändern würden. Ein Wert von `false` bedeutet entweder, dass die Sichtbarkeit des Ziels beeinträchtigt ist, oder dass diese Bestimmung nicht getroffen werden konnte.
    - `rootBounds`
      - : Ein Objekt, das die Position und Abmessungen des Schnittrechtecks des Wurzels mit den Eigenschaften `x`, `y`, `width` und `height` angibt, oder `null`.
    - `target`
      - : Das [`Element`](/de/docs/Web/API/Element), dessen Schnittmenge mit dem Wurzel verändert wurde.
    - `time`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der die Überschneidung aufgezeichnet wurde, relativ zum [time origin](/de/docs/Web/API/Performance/timeOrigin) des `IntersectionObserver`.

### Rückgabewert

Ein neues [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekt, dessen Eigenschaften auf die in `intersectionObserverEntryInit` angegebenen Werte initialisiert sind.

## Beispiele

### Erstellen eines IntersectionObserverEntry

Dieses Beispiel erstellt ein grundlegendes `IntersectionObserverEntry`, das ein vollständig sichtbares Element beschreibt. Während Sie einen Eintrag manuell auf diese Weise erstellen können, werden diese Objekte in der Praxis automatisch vom Browser erstellt und an Ihren [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Callback übergeben.

```js
const entry = new IntersectionObserverEntry({
  time: performance.now(),
  rootBounds: { x: 0, y: 0, width: 1024, height: 768 },
  boundingClientRect: { x: 10, y: 20, width: 200, height: 100 },
  intersectionRect: { x: 10, y: 20, width: 200, height: 100 },
  isIntersecting: true,
  isVisible: false,
  intersectionRatio: 1.0,
  target: document.body,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
