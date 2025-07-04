---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserver`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, asynchron Änderungen des Schnittpunkts eines Zielelements mit einem Vorfahrenelement oder mit dem {{Glossary("viewport", "Viewport")}} eines obersten Dokuments zu beobachten. Das Vorfahrenelement oder der Viewport wird als Wurzel bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, ist er so konfiguriert, dass er auf bestimmte Sichtbarkeitsverhältnisse innerhalb der Wurzel achtet. Die Konfiguration kann nicht geändert werden, nachdem der `IntersectionObserver` erstellt wurde, sodass ein bestimmtes Beobachterobjekt nur nützlich ist, um spezifische Änderungen im Sichtbarkeitsgrad zu beobachten; es können jedoch mehrere Zielelemente mit demselben Beobachter beobachtet werden.

## Konstruktor

- [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)
  - : Erstellt ein neues `IntersectionObserver`-Objekt, das eine angegebene Rückruffunktion ausführt, wenn es feststellt, dass die Sichtbarkeit eines Zielelements einen oder mehrere Schwellenwerte überschritten hat.

## Instanz-Eigenschaften

- [`IntersectionObserver.delay`](/de/docs/Web/API/IntersectionObserver/delay) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die die minimale Verzögerung zwischen den Benachrichtigungen von diesem Beobachter angibt.
- [`IntersectionObserver.root`](/de/docs/Web/API/IntersectionObserver/root) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element) oder das [`Document`](/de/docs/Web/API/Document), dessen Grenzen als Rahmen bei der Überprüfung von Überschneidungen verwendet werden. Wenn dem Konstruktor kein `root`-Wert übergeben wurde oder dessen Wert `null` ist, wird der Viewport des obersten Dokuments verwendet.
- [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) {{ReadOnlyInline}}
  - : Ein Versatz-Rechteck, das auf den {{Glossary("bounding_box", "Umgrenzungsrahmen")}} der Wurzel angewendet wird, wenn Überschneidungen berechnet werden, wodurch die Wurzel für Berechnungszwecke effektiv verkleinert oder vergrößert wird. Der durch diese Eigenschaft zurückgegebene Wert muss nicht identisch mit dem beim Aufrufen des Konstruktors angegebenen Wert sein, da er möglicherweise an interne Anforderungen angepasst wird. Jeder Versatz kann in Pixeln (`px`) oder als Prozentsatz (`%`) ausgedrückt werden. Der Standardwert ist "0px 0px 0px 0px".
- [`IntersectionObserver.scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) {{ReadOnlyInline}}
  - : Ein Versatz-Rechteck, das auf jeden {{Glossary("scroll_container", "Scrollcontainer")}} auf dem Pfad von der Schnittwurzel zum Ziel angewendet wird, wodurch die Clip-Rechtecke, die zur Berechnung der Überschneidungen verwendet werden, effektiv verkleinert oder vergrößert werden.
    Der durch diese Eigenschaft zurückgegebene Wert kann vom beim Aufrufen des Konstruktors angegebenen Wert abweichen.
- [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, die in aufsteigender numerischer Reihenfolge sortiert sind, wobei jeder Schwellenwert ein Verhältnis der Schnittfläche zur Umgrenzungsrahmenfläche eines beobachteten Ziels ist. Benachrichtigungen für ein Ziel werden generiert, wenn einer der Schwellenwerte für dieses Ziel überschritten wird. Wenn dem Konstruktor kein Wert übergeben wurde, wird 0 verwendet.
- [`IntersectionObserver.trackVisibility`](/de/docs/Web/API/IntersectionObserver/trackVisibility) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` überprüft, ob das Ziel über eine einwandfreie Sichtbarkeit verfügt.

## Instanz-Methoden

- [`IntersectionObserver.disconnect()`](/de/docs/Web/API/IntersectionObserver/disconnect)
  - : Stoppt das `IntersectionObserver`-Objekt beim Beobachten sämtlicher Ziele.
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)
  - : Teilt dem `IntersectionObserver` ein Zielelement mit, das beobachtet werden soll.
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
