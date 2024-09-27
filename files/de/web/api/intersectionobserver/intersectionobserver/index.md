---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`** Konstruktor erstellt und gibt ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt zurück.

Die `rootMargin`, falls angegeben, wird darauf überprüft, ob sie syntaktisch korrekt ist. Wenn nicht angegeben oder ein leerer String, ist der Standardwert `0px 0px 0px 0px`.

Die `threshold`s, falls angegeben, werden überprüft, um sicherzustellen, dass sie sich alle im Bereich von 0.0 bis 1.0 befinden, und die Schwellenwertliste wird in aufsteigender numerischer Reihenfolge sortiert. Wenn die Schwellenwertliste leer ist, wird sie auf das Array `[0.0]` gesetzt.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Bereichs des Zielelements einen Schwellenwert überschreitet. Der Callback erhält zwei Parameter als Eingabe:

    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils einen Schwellenwert darstellen, der überschritten wurde, entweder mehr oder weniger sichtbar als der Prozentsatz, der durch diesen Schwellenwert angegeben ist. Sie sollten nicht die Anzahl der Einträge annehmen, da mehrere Ereignisse des Schwellenwertüberschreitens in einem einzigen Callback-Aufruf gemeldet werden können. Die Einträge werden mithilfe einer Warteschlange versendet, sodass sie nach der Zeit ihrer Erzeugung geordnet sein sollten, aber Sie sollten vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Callback aufgerufen wird.

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das den Beobachter anpasst. Alle Eigenschaften sind optional. Sie können jede Kombination der folgenden Optionen bereitstellen:

    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document)-Objekt, das ein Vorfahre des beabsichtigten Ziels ist, dessen Begrenzungsrechteck als Viewport betrachtet wird. Jeder Teil des Ziels, der nicht im sichtbaren Bereich der `root` sichtbar ist, wird nicht als sichtbar betrachtet. Wenn nicht angegeben, verwendet der Beobachter den Viewport des Dokuments als Root, ohne Rand und einen 0%-Schwellenwert (was bedeutet, dass bereits eine einpixelige Änderung ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Reihe von Offsets angibt, die zur [bounding_box](/de/docs/Glossary/bounding_box) des Root hinzugefügt werden sollen, um beim Berechnen von Schnitten effektiv den Root zu verkleinern oder zu vergrößern. Die Syntax ist ungefähr dieselbe wie bei der CSS-{{cssxref("margin")}}-Eigenschaft; sehen Sie sich [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) an, um weitere Informationen zur Funktionsweise des Margin und zur Syntax zu erhalten. Der Standardwert ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0.0 und 1.0, die ein Verhältnis von Schnittfläche zur Gesamtfläche der Bounding-Box für das beobachtete Ziel festlegen. Ein Wert von 0.0 bedeutet, dass bereits ein einzelnes sichtbares Pixel als Ziel sichtbar zählt. Ein Wert von 1.0 bedeutet, dass das gesamte Zielelement sichtbar ist. Siehe [Thresholds](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine detailliertere Beschreibung der Verwendung von Schwellenwerten. Der Standardwert ist ein Schwellenwert von 0.0.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um auf die Sichtbarkeit eines Zielelements innerhalb des angegebenen `root` bei Überschreiten eines der angegebenen Sichtbarkeits-`threshold`s zu achten. Rufen Sie seine [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Beobachtung der Sichtbarkeitsänderungen eines bestimmten Ziels zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die angegebene `rootMargin` ist ungültig.
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
