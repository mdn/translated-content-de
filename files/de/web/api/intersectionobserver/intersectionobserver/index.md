---
title: "IntersectionObserver: IntersectionObserver()-Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`**-Konstruktor erstellt und gibt ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt zurück.

Das `rootMargin`, falls angegeben, wird überprüft, um sicherzustellen, dass es syntaktisch korrekt ist. Falls nicht angegeben oder eine leere Zeichenkette, ist der Standardwert `0px 0px 0px 0px`.

Die `threshold`s, falls angegeben, werden überprüft, um sicherzustellen, dass sie alle im Bereich von 0.0 bis 1.0 inklusiv liegen und die Schwellenwertliste in aufsteigender numerischer Reihenfolge sortiert ist. Wenn die Schwellenwertliste leer ist, wird sie auf das Array `[0.0]` gesetzt.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des Sichtbaren des Zielelements einen Schwellenwert überschreitet. Der Rückruf erhält zwei Parameter als Eingabe:

    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils einen überschrittenen Schwellenwert darstellen, der entweder sichtbarer oder weniger sichtbar ist als der durch diesen Schwellenwert angegebene Prozentsatz. Sie sollten die Anzahl der Einträge nicht annehmen, da mehrere Ereignisse, die den Schwellenwert überschreiten, in einem einzigen Rückruf gemeldet werden können. Die Einträge werden über eine Warteschlange verteilt, sodass sie in der Reihenfolge angeordnet sein sollten, in der sie erzeugt wurden. Sie sollten jedoch vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Rückruf aufgerufen wird.

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das den Beobachter anpasst. Alle Eigenschaften sind optional. Sie können jede Kombination der folgenden Optionen bereitstellen:

    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element)- oder [`Document`](/de/docs/Web/API/Document)-Objekt, das ein Vorfahre des beabsichtigten Ziels ist, dessen Begrenzungsrechteck als Ansichtsbereich betrachtet wird. Jeder Teil des Ziels, der im sichtbaren Bereich der `root` nicht sichtbar ist, wird nicht als sichtbar betrachtet. Falls nicht angegeben, verwendet der Beobachter den Ansichtsbereich des Dokuments als Root, ohne Rand und einem Schwellenwert von 0% (was bedeutet, dass selbst eine Änderung um einen einzigen Pixel ausreicht, um einen Rückruf auszulösen).
    - `rootMargin`
      - : Eine Zeichenkette, die eine Reihe von Offsets angibt, die zur Berechnung von Schnittpunkten zum {{Glossary("bounding_box", "bounding_box")}} der Root hinzugefügt werden, wodurch die Root für Berechnungszwecke effektiv verkleinert oder vergrößert wird. Die Syntax ist ungefähr die gleiche wie für die CSS-{{cssxref("margin")}}-Eigenschaft; siehe [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für weitere Informationen über die Funktionsweise und Syntax des Randes. Der Standardwert ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0.0 und 1.0, die ein Verhältnis des Schnittflächenbereichs zur Gesamtfläche des Begrenzungsrechtecks für das beobachtete Ziel angeben. Ein Wert von 0.0 bedeutet, dass selbst ein einziges sichtbares Pixel zählt, als ob das Ziel sichtbar wäre. 1.0 bedeutet, dass das gesamte Zielelement sichtbar ist. Siehe [Thresholds](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine ausführlichere Beschreibung der Verwendung von Schwellenwerten. Der Standardwert ist ein Schwellenwert von 0.0.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um die Sichtbarkeit eines Zielelements innerhalb der angegebenen `root` zu überwachen, die durch einen der angegebenen Sichtbarkeits-`threshold`s überschritten wird. Rufen Sie seine [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Überwachung der Sichtbarkeitsänderungen eines bestimmten Ziels zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das angegebene `rootMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere der Werte in `threshold` liegen außerhalb des Bereichs von 0.0 bis 1.0.

## Beispiele

Dieses Beispiel erstellt einen neuen Intersection Observer, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn sich der sichtbare Bereich des beobachteten Elements um mindestens 10% ändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
