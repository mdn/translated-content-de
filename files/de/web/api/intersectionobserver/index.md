---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserver`** Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, Änderungen in der Überschneidung eines Zielelements mit einem Vorfahrenelement oder mit dem Ansichtsbereich (viewport) eines obersten Dokuments asynchron zu beobachten. Das Vorfahrenelement oder der Ansichtsbereich wird als Wurzel (root) bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, wird er so konfiguriert, dass er für bestimmte Verhältniswerte der Sichtbarkeit innerhalb der Wurzel beobachtet. Die Konfiguration kann nach der Erstellung des `IntersectionObserver` nicht geändert werden, daher ist ein Beobachterobjekt nur nützlich, um spezifische Änderungen des Sichtbarkeitsgrades zu überwachen; Sie können jedoch mehrere Zielelemente mit dem gleichen Beobachter beobachten.

## Konstruktor

- [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)
  - : Erstellt ein neues `IntersectionObserver` Objekt, das eine angegebene Callback-Funktion ausführt, wenn es erkennt, dass die Sichtbarkeit eines Zielelements einen oder mehrere Schwellenwerte überschritten hat.

## Instanz-Eigenschaften

- [`IntersectionObserver.root`](/de/docs/Web/API/IntersectionObserver/root) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document), dessen Grenzen als Umgrenzungsrahmen beim Testen der Überschneidung verwendet werden. Wenn kein `root`-Wert an den Konstruktor übergeben wurde oder dessen Wert `null` ist, wird der Ansichtsbereich des obersten Dokuments verwendet.
- [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) {{ReadOnlyInline}}
  - : Ein Offset-Rechteck, das auf den Umgrenzungsrahmen der Wurzel angewendet wird, wenn Überschneidungen berechnet werden, wodurch die Wurzel effektiv verkleinert oder vergrößert wird. Der von dieser Eigenschaft zurückgegebene Wert kann nicht derselbe sein, der beim Aufruf des Konstruktors angegeben wurde, da er möglicherweise an interne Anforderungen angepasst wird. Jedes Offset kann in Pixeln (`px`) oder als Prozentsatz (`%`) ausgedrückt werden. Der Standardwert ist "0px 0px 0px 0px".
- [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, sortiert in aufsteigender numerischer Reihenfolge, wobei jeder Schwellenwert ein Verhältnis der Überschneidungsfläche zur Umgrenzungsrahmenfläche eines beobachteten Ziels ist. Benachrichtigungen für ein Ziel werden generiert, wenn einer der Schwellenwerte für dieses Ziel überschritten wird. Wenn kein Wert an den Konstruktor übergeben wurde, wird 0 verwendet.

## Instanz-Methoden

- [`IntersectionObserver.disconnect()`](/de/docs/Web/API/IntersectionObserver/disconnect)
  - : Stoppt das `IntersectionObserver` Objekt von der Beobachtung eines Ziels.
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)
  - : Teilt dem `IntersectionObserver` mit, ein Zielelement zu beobachten.
- [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords)
  - : Gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten für alle beobachteten Ziele zurück.
- [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve)
  - : Teilt dem `IntersectionObserver` mit, die Beobachtung eines bestimmten Zielelements zu stoppen.

## Beispiele

```js
const intersectionObserver = new IntersectionObserver((entries) => {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  if (entries[0].intersectionRatio <= 0) return;

  loadItems(10);
  console.log("Loaded new items");
});
// start observing
intersectionObserver.observe(document.querySelector(".scrollerFooter"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
