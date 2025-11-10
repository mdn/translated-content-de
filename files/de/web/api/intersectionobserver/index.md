---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

Das **`IntersectionObserver`**-Interface der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, Änderungen in der Überschneidung eines Ziel-Elements mit einem übergeordneten Element oder mit einem Dokument auf oberster Ebene zu beobachten. Das übergeordnete Element oder der Viewport wird als Wurzel bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, wird er so konfiguriert, dass er auf bestimmte Sichtbarkeitsverhältnisse innerhalb der Wurzel achtet. Die Konfiguration kann nicht geändert werden, nachdem der `IntersectionObserver` erstellt wurde, sodass ein konkretes Beobachterobjekt nur nützlich ist, um spezifische Änderungen im Sichtbarkeitsgrad zu beobachten; Sie können jedoch mehrere Ziel-Elemente mit demselben Beobachter beobachten.

## Konstruktor

- [`IntersectionObserver()`](/de/docs/Web/API/IntersectionObserver/IntersectionObserver)
  - : Erstellt ein neues `IntersectionObserver`-Objekt, das eine angegebene Callback-Funktion ausführt, wenn es erkennt, dass die Sichtbarkeit eines Ziel-Elements einen oder mehrere Schwellenwerte überschritten hat.

## Instanz-Eigenschaften

- [`IntersectionObserver.delay`](/de/docs/Web/API/IntersectionObserver/delay) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine ganze Zahl, die die minimale Verzögerung zwischen Benachrichtigungen dieses Beobachters angibt.
- [`IntersectionObserver.root`](/de/docs/Web/API/IntersectionObserver/root) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document), dessen Begrenzungen als Begrenzungsrahmen bei der Überprüfung von Überschneidungen verwendet werden. Wenn dem Konstruktor kein `root`-Wert übergeben wurde oder sein Wert `null` ist, wird der Viewport des Dokuments auf oberster Ebene verwendet.
- [`IntersectionObserver.rootMargin`](/de/docs/Web/API/IntersectionObserver/rootMargin) {{ReadOnlyInline}}
  - : Ein Versatzrechteck, das auf den Begrenzungsrahmen der Wurzel angewendet wird, wenn Überschneidungen berechnet werden, um ihn effektiv zu verkleinern oder zu vergrößern. Der von dieser Eigenschaft zurückgegebene Wert kann von dem bei der Konstruktoraufruf angegebenen Wert abweichen, da er an interne Anforderungen angepasst werden kann. Jeder Versatz kann in Pixeln (`px`) oder Prozent (`%`) angegeben werden. Der Standardwert ist "0px 0px 0px 0px".
- [`IntersectionObserver.scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) {{ReadOnlyInline}}
  - : Ein Versatzrechteck, das auf jeden {{Glossary("scroll_container", "Scrollcontainer")}} auf dem Pfad von der Überschneidungswurzel zum Ziel angewendet wird, um die bei der Berechnung von Überschneidungen verwendeten Clipping-Rechtecke effektiv zu verkleinern oder zu vergrößern. Der von dieser Eigenschaft zurückgegebene Wert kann von dem bei der Konstruktoraufruf angegebenen Wert abweichen.
- [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, sortiert in aufsteigender numerischer Reihenfolge, wobei jeder Schwellenwert das Verhältnis der Überschneidungsfläche zur Begrenzungsrahmenfläche eines beobachteten Ziels darstellt. Benachrichtigungen für ein Ziel werden generiert, wenn einer dieser Schwellenwerte für dieses Ziel überschritten wird. Wenn dem Konstruktor kein Wert übergeben wurde, wird 0 verwendet.
- [`IntersectionObserver.trackVisibility`](/de/docs/Web/API/IntersectionObserver/trackVisibility) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob dieser `IntersectionObserver` überprüft, dass das Ziel keine beeinträchtigte Sichtbarkeit hat.

## Instanz-Methoden

- [`IntersectionObserver.disconnect()`](/de/docs/Web/API/IntersectionObserver/disconnect)
  - : Stoppt das `IntersectionObserver`-Objekt darin, irgendein Ziel zu beobachten.
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)
  - : Gibt dem `IntersectionObserver` ein Ziel-Element an, das beobachtet werden soll.
- [`IntersectionObserver.takeRecords()`](/de/docs/Web/API/IntersectionObserver/takeRecords)
  - : Gibt ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten für alle beobachteten Ziele zurück.
- [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve)
  - : Gibt dem `IntersectionObserver` an, die Beobachtung eines bestimmten Ziel-Elements zu stoppen.

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
