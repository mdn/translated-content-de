---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserver`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, Änderungen im Schnittbereich eines Zielelements mit einem Vorfahrenelement oder mit dem [Viewport](/de/docs/Glossary/viewport) eines obersten Dokuments asynchron zu beobachten. Das Vorfahrenelement oder der Viewport wird als Wurzel bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, ist er so konfiguriert, dass er bestimmte Sichtbarkeitsverhältnisse innerhalb der Wurzel beobachtet. Die Konfiguration kann nicht geändert werden, sobald der `IntersectionObserver` erstellt wurde, sodass ein bestimmtes Beobachterobjekt nur nützlich ist, um bestimmte Sichtbarkeitsänderungen zu überwachen. Sie können jedoch mit demselben Beobachter mehrere Zielelemente beobachten.

## Konstruktor

- [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)
  - : Erstellt ein neues `IntersectionObserver`-Objekt, das eine angegebene Rückruffunktion ausführt, wenn es erkennt, dass die Sichtbarkeit eines Zielelements einen oder mehrere Schwellenwerte überschritten hat.

## Instanzeigenschaften

- [`IntersectionObserver.root`](/de/docs/Web/API/IntersectionObserver/root) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element) oder Dokument ([`Document`](/de/docs/Web/API/Document)), dessen Grenzen als Begrenzungsrahmen verwendet werden, wenn auf Schnittpunkte getestet wird. Wenn kein `root`-Wert an den Konstruktor übergeben wurde oder sein Wert `null` ist, wird der Viewport des obersten Dokuments verwendet.
- [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) {{ReadOnlyInline}}
  - : Ein Offset-Rechteck, das auf den Begrenzungsrahmen der Wurzel angewendet wird, wenn Schnittpunkte berechnet werden, wodurch die Wurzel für Berechnungszwecke effektiv verkleinert oder vergrößert wird. Der von dieser Eigenschaft zurückgegebene Wert ist möglicherweise nicht derselbe wie der, der beim Aufruf des Konstruktors angegeben wurde, da er möglicherweise an interne Anforderungen angepasst wird. Jedes Offset kann in Pixeln (`px`) oder als Prozentsatz (`%`) ausgedrückt werden. Der Standardwert ist "0px 0px 0px 0px".
- [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, sortiert in aufsteigender numerischer Reihenfolge, wobei jeder Schwellenwert ein Verhältnis von Schnittfläche zur Begrenzungsrahmenfläche eines beobachteten Ziels darstellt. Benachrichtigungen für ein Ziel werden generiert, wenn einer der Schwellenwerte für dieses Ziel überschritten wird. Wenn dem Konstruktor kein Wert übergeben wurde, wird 0 verwendet.

## Instanzmethoden

- [`IntersectionObserver.disconnect()`](/de/docs/Web/API/IntersectionObserver/disconnect)
  - : Hält das `IntersectionObserver`-Objekt davon ab, ein Ziel zu beobachten.
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)
  - : Instruiert den `IntersectionObserver`, ein Zielelement zu beobachten.
- [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords)
  - : Gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten für alle beobachteten Ziele zurück.
- [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve)
  - : Instruiert den `IntersectionObserver`, die Beobachtung eines bestimmten Zielelements zu stoppen.

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
