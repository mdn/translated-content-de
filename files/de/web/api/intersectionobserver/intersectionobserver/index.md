---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 3f28b1c89f45ef4faac97b673a6d83c324738612
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`**-Konstruktor erstellt und gibt ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt zurück.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Bereichs des Ziel-Elements eine Schwelle überschreitet.
    Der Callback erhält zwei Parameter als Eingabe:
    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils eine Schwelle repräsentieren, die überschritten wurde, entweder mit mehr oder weniger Sichtbarkeit als der Prozentsatz, der durch diese Schwelle angegeben wird.
        Sie sollten nicht von der Anzahl der Einträge ausgehen, da mehrere Schwellenereignisse in einem einzelnen Callback-Aufruf gemeldet werden können.
        Die Einträge werden über eine Warteschlange verteilt, sodass sie in der Reihenfolge ihrer Erstellung angeordnet sein sollten, aber vorzugsweise sollten Sie [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Callback aufgerufen wird.

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das den Beobachter anpasst.

    Sie können jede Kombination (oder keine) der folgenden Optionen bereitstellen:
    - `delay`
      - : Eine Zahl, die die minimale erlaubte Verzögerung zwischen Benachrichtigungen des Beobachters in Millisekunden angibt.

        Die Verzögerung wird verwendet, um die Rate zu begrenzen, mit der Benachrichtigungen bereitgestellt werden, wenn die Sichtbarkeit verfolgt wird, da dies eine rechenintensive Operation ist.
        Die Empfehlung beim Verfolgen der Sichtbarkeit ist, dass Sie die Verzögerung auf den größtmöglichen erträglichen Wert einstellen.

        Wenn [`trackVisibility`](#trackvisibility) `true` ist, beträgt der Mindestwert 100.
        Der Browser setzt den Wert auf 100, wenn ein kleinerer Wert verwendet wird oder wenn der Wert nicht angegeben wird.
        Der Standardwert ist 0.

    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element)- oder [`Document`](/de/docs/Web/API/Document)-Objekt, das ein Vorfahre des beabsichtigten Ziels ist und dessen Begrenzungsrechteck als Sichtbereich betrachtet wird.
        Jeder Teil des Ziels, der in dem sichtbaren Bereich der `root` nicht sichtbar ist, wird nicht als sichtbar betrachtet.
        Wenn nicht angegeben, verwendet der Beobachter das Dokument
        Viewport als die Wurzel, ohne Rand und mit einem Schwellenwert von 0% (was bedeutet, dass selbst eine ein-Pixel-Änderung ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Reihe von Offsets angibt, die zu dem {{Glossary("bounding_box", "bounding_box")}} der Wurzel hinzugefügt werden, wenn Schnittmengen berechnet werden, wodurch die Wurzel effektiv für Berechnungszwecke verkleinert
        oder vergrößert wird. Jeder Offset kann nur in Pixeln (`px`) oder Prozent (`%`) ausgedrückt werden.
        Die Syntax ist ungefähr die gleiche wie bei der CSS-{{cssxref("margin")}}-Eigenschaft;
        siehe [Der Schnittwurzel und Wurzelrand](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für mehr Informationen darüber, wie der Rand funktioniert und die Syntax.
        Der Standard ist "0px 0px 0px 0px".
    - `scrollMargin`
      - : Ein String, der die Offsets angibt, die zu jedem {{Glossary("scroll_container", "scroll container")}} auf dem Weg zum Ziel hinzugefügt werden, wenn Schnittmengen berechnet werden, wodurch die Clip-Rechtecke, die zur Berechnung von Schnittmengen verwendet werden, effektiv verkleinert oder vergrößert werden.
        Dies ermöglicht beispielsweise eine bessere Beobachtung von Zielen in verschachtelten Scroll-Containern, die derzeit von den Scroll-Containern abgeschnitten werden.
        Die Syntax ist die gleiche wie bei `rootMargin`.
        Der Standard ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0,0 und 1,0, die das Verhältnis der Schnittmenge zur Gesamtfläche des Begrenzungsrechtecks für das beobachtete Ziel angeben.
        Ein Wert von 0,0 bedeutet, dass selbst ein einzelnes sichtbares Pixel zählt, um das Ziel als sichtbar zu betrachten.
        1,0 bedeutet, dass das gesamte Zielelement sichtbar ist.
        Siehe [Schwellenwerte](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine detailliertere Beschreibung, wie Schwellenwerte verwendet werden.
        Der Standard ist ein Schwellenwert von "0".
    - `trackVisibility`
      - : Ein Boolean, der angibt, ob der Beobachter die Sichtbarkeit verfolgen soll.

        Wenn `true`, überprüft der Browser, dass das Ziel keine beeinträchtigte Sichtbarkeit hat, wenn Schnittmengen berechnet werden;
        beispielsweise, dass es nicht von anderen Elementen abgedeckt wurde oder potenziell durch einen Filter, reduzierte Transparenz oder einige Transformationen verzerrt oder versteckt wurde.

        Das Verfolgen der Sichtbarkeit ist eine teure Operation und sollte nur bei Bedarf durchgeführt werden.
        Es sollte auch eine [`delay`](#delay) festgelegt werden, wenn dieser Wert `true` ist.
        Der Standard ist `false`.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um die Sichtbarkeit eines Zielelements innerhalb der spezifizierten `root` zu beobachten, die irgendeine der spezifizierten Sichtbarkeitsschwellen (`threshold`) überschreitet.

Rufen Sie seine [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Beobachtung von Sichtbarkeitsänderungen bei einem bestimmten Ziel zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der spezifizierte `rootMargin` oder `scrollMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere der Werte in `threshold` liegen außerhalb des Bereichs von 0,0 bis 1,0.

## Beispiele

Dieses Beispiel erstellt einen neuen Intersection Observer, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn sich der sichtbare Bereich des beobachteten Elements um mindestens 10% ändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
