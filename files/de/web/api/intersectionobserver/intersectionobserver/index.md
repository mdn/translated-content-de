---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`** Konstruktor erstellt und gibt ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt zurück.

Wenn `rootMargin` angegeben wird, wird geprüft, ob es syntaktisch korrekt ist.
Wenn nicht angegeben oder ein leerer String, ist der Standardwert `0px 0px 0px 0px`.

Die `threshold`s, falls angegeben, werden überprüft, um sicherzustellen, dass sie alle im Bereich von 0,0 bis 1,0 (einschließlich) liegen, und die Threshold-Liste wird in aufsteigender numerischer Reihenfolge sortiert.
Wenn die Threshold-Liste leer ist, wird sie auf das Array `[0.0]` gesetzt.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Bereichs des Zielelements eine Schwelle überschreitet.
    Der Callback erhält zwei Parameter als Eingabe:
    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils eine Schwelle darstellen, die überschritten wurde, entweder indem sie mehr oder weniger sichtbar wurde als der durch diese Schwelle angegebene Prozentsatz. Sie sollten nicht von der Anzahl der Einträge ausgehen, da mehrere Schwellenüberquerungsereignisse in einem einzelnen Callback-Aufruf gemeldet werden können. Die Einträge werden über eine Warteschlange verteilt, sodass sie nach der Zeit, in der sie generiert wurden, geordnet sein sollten, jedoch sollten Sie vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Callback aufgerufen wird.

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das den Beobachter anpasst. Alle Eigenschaften sind optional.
    Sie können eine beliebige Kombination der folgenden Optionen angeben:
    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element)- oder [`Document`](/de/docs/Web/API/Document)-Objekt, das ein Vorfahre des beabsichtigten Ziels ist und dessen Begrenzungsrechteck als Viewport betrachtet wird.
        Jeder Teil des Ziels, der im sichtbaren Bereich des `root`s nicht sichtbar ist, wird als unsichtbar betrachtet. Wenn nicht angegeben, verwendet der Beobachter den Viewport des Dokuments als den `root`, ohne Rand und mit einer Schwelle von 0% (was bedeutet, dass selbst eine Pixeländerung ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Reihe von Offsets angibt, die zum {{Glossary("bounding_box", "bounding_box")}} des `root`s hinzugefügt werden, wenn Schnitte berechnet werden, wodurch das `root` für Berechnungszwecke effektiv verkleinert oder vergrößert wird.
        Die Syntax ist ungefähr die gleiche wie bei der CSS {{cssxref("margin")}}-Eigenschaft;
        sehen Sie sich [Das Schnitt-Root und den Root-Rand](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für weitere Informationen zur Funktionsweise des Randes und der Syntax an.
        Der Standardwert ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0,0 und 1,0, das ein Verhältnis des Schnittbereichs zur Gesamtrechteckfläche für das beobachtete Ziel angibt.
        Ein Wert von 0,0 bedeutet, dass sogar ein einziges sichtbares Pixel zählt, dass das Ziel sichtbar ist.
        1,0 bedeutet, dass das gesamte Zielelement sichtbar ist.
        Siehe [Schwellenwerte](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine ausführlichere Beschreibung, wie Schwellenwerte verwendet werden.
        Der Standardwert ist eine Schwelle von 0,0.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um auf die Sichtbarkeit eines Zielelements innerhalb des angegebenen `root`s zu achten, während es durch eine der angegebenen Sichtbarkeits-`threshold`s geht.
Rufen Sie seine [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Beobachtung von Sichtbarkeitsänderungen eines bestimmten Ziels zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das angegebene `rootMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere der Werte in `threshold` liegen außerhalb des Bereichs von 0,0 bis 1,0.

## Beispiele

Dieses Beispiel erstellt einen neuen Intersection Observer, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn der sichtbare Bereich des zu beobachtenden Elements um mindestens 10% ändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
