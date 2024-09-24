---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 5c77b329912bd8a428f59111ef546e7e0309dcb4
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`** Konstruktor erstellt und gibt ein neues {{domxref("IntersectionObserver")}} Objekt zurück.

Das `rootMargin`, falls angegeben, wird überprüft, um sicherzustellen, dass es syntaktisch korrekt ist.
Falls nicht angegeben oder ein leerer String, ist der Standardwert `0px 0px 0px 0px`.

Die `threshold`s, falls angegeben, werden überprüft, um sicherzustellen, dass sie alle im Bereich von 0,0 bis einschließlich 1,0 liegen, und die Threshold-Liste wird in aufsteigender numerischer Reihenfolge sortiert.
Wenn die Threshold-Liste leer ist, wird sie auf das Array `[0.0]` gesetzt.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`

  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Ziel-Elements einen Schwellenwert überschreitet.
    Der Callback erhält zwei Parameter als Eingabe:

    - `entries`
      - : Ein Array von {{domxref("IntersectionObserverEntry")}} Objekten, von denen jedes einen Schwellenwert darstellt, der überschritten wurde, entweder mehr oder weniger sichtbar als der Prozentsatz, der von diesem Schwellenwert angegeben wird. Sie sollten nicht von der Anzahl der Einträge ausgehen, da mehrere Schwellenwertereignisse in einem einzelnen Callback-Aufruf gemeldet werden können. Die Einträge werden unter Verwendung einer Warteschlange versendet, sodass sie nach der Zeit geordnet sein sollten, zu der sie generiert wurden, aber Sie sollten vorzugsweise {{domxref("IntersectionObserverEntry.time")}} verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der {{domxref("IntersectionObserver")}}, für den der Callback aufgerufen wird.

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das den Beobachter anpasst. Alle Eigenschaften sind optional.
    Sie können jede Kombination der folgenden Optionen angeben:

    - `root`
      - : Ein {{domxref("Element")}} oder {{domxref("Document")}} Objekt, das ein Vorfahre des beabsichtigten Ziels ist, dessen Begrenzungsrechteck als Viewport betrachtet wird.
        Jeder Teil des Ziels, der im sichtbaren Bereich des `root` nicht sichtbar ist, wird als unsichtbar betrachtet. Falls nicht angegeben, verwendet der Beobachter den Viewport des Dokuments als Wurzel ohne Rand und einen Schwellenwert von 0% (was bedeutet, dass selbst eine ein-Pixel-Veränderung ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Reihe von Versätzen angibt, die zum {{Glossary('bounding_box')}} der Wurzel hinzugefügt werden, um Überschneidungen zu berechnen, effektiv verkleinert oder vergrößert man die Wurzel für Berechnungszwecke.
        Die Syntax ist ungefähr die gleiche wie für die CSS {{cssxref("margin")}} Eigenschaft; siehe [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für weitere Informationen darüber, wie der Rand funktioniert und die Syntax. Der Standard ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0,0 und 1,0, das ein Verhältnis der Schnittfläche zur gesamten Begrenzungsrechteckfläche für das beobachtete Ziel angibt.
        Ein Wert von 0,0 bedeutet, dass sogar ein einzelnes sichtbares Pixel als sichtbares Ziel gilt. 1,0 bedeutet, dass das gesamte Ziel-Element sichtbar ist. Siehe [Thresholds](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine ausführlichere Beschreibung, wie Schwellenwerte verwendet werden. Der Standard ist ein Schwellenwert von 0,0.

### Rückgabewert

Ein neues {{domxref("IntersectionObserver")}}, das verwendet werden kann, um die Sichtbarkeit eines Ziel-Elements innerhalb des angegebenen `root` zu beobachten, das durch einen der angegebenen Sichtbarkeits-`threshold`s geht. Rufen Sie seine {{domxref("IntersectionObserver.observe", "observe()")}} Methode auf, um mit der Beobachtung der Sichtbarkeitsänderungen eines gegebenen Ziels zu beginnen.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Das angegebene `rootMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere der Werte in `threshold` liegen außerhalb des Bereichs 0,0 bis 1,0.

## Beispiele

Dieses Beispiel erstellt einen neuen Intersection Observer, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn sich der sichtbare Bereich des beobachteten Elements um mindestens 10% ändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
