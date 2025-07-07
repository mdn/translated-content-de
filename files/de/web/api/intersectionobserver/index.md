---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserver`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, asynchron Änderungen in der Schnittmenge eines Zielelements mit einem Vorfahren-Element oder mit einem top-level Dokument- {{Glossary("viewport", "viewport")}} zu beobachten. Das Vorfahren-Element oder Viewport wird als Wurzel bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, wird er so konfiguriert, dass er auf bestimmte Sichtbarkeitsverhältnisse innerhalb der Wurzel achtet. Die Konfiguration kann nicht geändert werden, nachdem der `IntersectionObserver` erstellt wurde, daher ist ein gegebenes Beobachterobjekt nur nützlich, um für spezifische Änderungen im Grad der Sichtbarkeit zu beobachten; jedoch können Sie mehrere Zielelemente mit dem gleichen Beobachter beobachten.

## Konstruktor

- [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)
  - : Erstellt ein neues `IntersectionObserver`-Objekt, das eine angegebene Callback-Funktion ausführt, wenn festgestellt wird, dass die Sichtbarkeit eines Zielelements ein oder mehrere Schwellenwerte überschritten hat.

## Instanz-Eigenschaften

- [`IntersectionObserver.delay`](/de/docs/Web/API/IntersectionObserver/delay) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein ganzzahliger Wert, der die minimale Verzögerung zwischen den Benachrichtigungen von diesem Beobachter angibt.
- [`IntersectionObserver.root`](/de/docs/Web/API/IntersectionObserver/root) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document), dessen Grenzen als Rahmen für das Testen der Schnittmenge verwendet werden. Wenn kein `root`-Wert an den Konstruktor übergeben wurde oder dessen Wert `null` ist, wird das top-level Dokument-Viewport verwendet.
- [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) {{ReadOnlyInline}}
  - : Ein Versatzrechteck, das auf den Rahmen der Wurzel angewendet wird, wenn Schnittmengen berechnet werden, wodurch die Wurzel für Berechnungszwecke effektiv verkleinert oder vergrößert wird. Der von dieser Eigenschaft zurückgegebene Wert stimmt möglicherweise nicht mit dem beim Aufruf des Konstruktors angegebenen Wert überein, da er möglicherweise geändert wird, um den internen Anforderungen zu entsprechen. Jeder Versatz kann in Pixeln (`px`) oder als Prozent (`%`) ausgedrückt werden. Die Standardeinstellung ist "0px 0px 0px 0px".
- [`IntersectionObserver.scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) {{ReadOnlyInline}}
  - : Ein Versatzrechteck, das auf jeden {{Glossary("scroll_container", "scroll container")}} auf dem Pfad von der Wurzel bis zum Ziel angewendet wird, wodurch die verwendeten Clip-Rechtecke zur Berechnung von Schnittmengen effektiv verkleinert oder vergrößert werden. Der von dieser Eigenschaft zurückgegebene Wert stimmt möglicherweise nicht mit dem beim Aufruf des Konstruktors angegebenen Wert überein.
- [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, sortiert in aufsteigender numerischer Reihenfolge, wobei jeder Schwellenwert ein Verhältnis von Schnittmenge zu Rahmenfläche eines beobachteten Ziels darstellt. Benachrichtigungen für ein Ziel werden erzeugt, wenn einer der Schwellenwerte für dieses Ziel überschritten wird. Wenn kein Wert an den Konstruktor übergeben wurde, wird 0 verwendet.
- [`IntersectionObserver.trackVisibility`](/de/docs/Web/API/IntersectionObserver/trackVisibility) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` überprüft, dass die Sichtbarkeit des Ziels nicht beeinträchtigt ist.

## Instanz-Methoden

- [`IntersectionObserver.disconnect()`](/de/docs/Web/API/IntersectionObserver/disconnect)
  - : Stoppt das `IntersectionObserver`-Objekt, indem es keine Ziele mehr beobachtet.
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)
  - : Teilt dem `IntersectionObserver` mit, ein Zielelement zu beobachten.
- [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords)
  - : Gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten für alle beobachteten Ziele zurück.
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
