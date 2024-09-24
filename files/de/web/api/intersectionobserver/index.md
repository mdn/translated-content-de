---
title: IntersectionObserver
slug: Web/API/IntersectionObserver
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Intersection Observer API")}}

Die **`IntersectionObserver`**-Schnittstelle der [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) bietet eine Möglichkeit, Änderungen in der Überschneidung eines Ziel-Elements mit einem Vorfahren-Element oder dem {{Glossary('viewport')}} eines Top-Level-Dokuments asynchron zu beobachten. Das Vorfahren-Element oder das Viewport wird als Wurzel bezeichnet.

Wenn ein `IntersectionObserver` erstellt wird, ist er so konfiguriert, dass er bestimmte Sichtbarkeitsgrade innerhalb der Wurzel überwacht. Die Konfiguration kann nicht geändert werden, nachdem der `IntersectionObserver` erstellt wurde, sodass ein Beobachterobjekt nur nützlich ist, um spezifische Änderungen im Grad der Sichtbarkeit zu beobachten; Allerdings können Sie mehrere Ziel-Elemente mit demselben Beobachter überwachen.

## Konstruktor

- {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}
  - : Erstellt ein neues `IntersectionObserver`-Objekt, das eine angegebene Callback-Funktion ausführt, wenn es feststellt, dass die Sichtbarkeit eines Ziel-Elements eine oder mehrere Schwellenwerte überschritten hat.

## Instanz-Eigenschaften

- {{domxref("IntersectionObserver.root")}} {{ReadOnlyInline}}
  - : Das {{domxref("Element")}} oder {{domxref("Document")}}, dessen Grenzen als Begrenzungsrahmen beim Testen auf Überschneidung verwendet werden. Wenn kein `root`-Wert an den Konstruktor übergeben wurde oder sein Wert `null` ist, wird das Viewport des Top-Level-Dokuments verwendet.
- {{domxref("IntersectionObserver.rootMargin")}} {{ReadOnlyInline}}
  - : Ein Versatz-Rechteck, das auf den Begrenzungsrahmen der Wurzel angewendet wird, wenn Überschneidungen berechnet werden, und welches die Wurzel effektiv für Berechnungszwecke verkleinert oder vergrößert. Der von dieser Eigenschaft zurückgegebene Wert stimmt möglicherweise nicht mit dem überein, der beim Aufruf des Konstruktors angegeben wurde, da er zur Erfüllung interner Anforderungen geändert werden kann. Jeder Versatz kann in Pixeln (`px`) oder als Prozentsatz (`%`) ausgedrückt werden. Der Standardwert ist "0px 0px 0px 0px".
- {{domxref("IntersectionObserver.thresholds")}} {{ReadOnlyInline}}
  - : Eine Liste von Schwellenwerten, in aufsteigender Reihenfolge sortiert, wobei jeder Schwellenwert ein Verhältnis der Überschneidungsfläche zur Begrenzungsrahmenfläche eines beobachteten Ziels ist. Benachrichtigungen für ein Ziel werden generiert, wenn einer der Schwellenwerte für dieses Ziel überschritten wird. Wenn dem Konstruktor kein Wert übergeben wurde, wird 0 verwendet.

## Instanz-Methoden

- {{domxref("IntersectionObserver.disconnect()")}}
  - : Stoppt das `IntersectionObserver`-Objekt, ein beliebiges Ziel zu beobachten.
- {{domxref("IntersectionObserver.observe()")}}
  - : Gibt dem `IntersectionObserver` an, ein Ziel-Element zu beobachten.
- {{domxref("IntersectionObserver.takeRecords()")}}
  - : Gibt ein Array von {{domxref("IntersectionObserverEntry")}}-Objekten für alle beobachteten Ziele zurück.
- {{domxref("IntersectionObserver.unobserve()")}}
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

- {{domxref('MutationObserver')}}
- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
