---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 1b61fe3aa68b972468514d5ab13ed93497b13a96
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`** Konstruktor erstellt und liefert ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Bereichs des Ziel-Elements einen Schwellenwert überschreitet.
    Der Callback erhält zwei Parameter als Eingabe:
    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils einen Schwellenwert repräsentieren, der überschritten wurde, sei es, dass der sichtbare Prozentsatz kleiner oder größer wird als der durch diesen Schwellenwert spezifizierte.
        Sie sollten die Anzahl der Einträge nicht annehmen, da mehrere Ereignisse des Überschreitens eines Schwellenwerts in einem einzelnen Callback-Aufruf gemeldet werden können.
        Die Einträge werden mithilfe einer Warteschlange verteilt, daher sollten sie nach der Zeit geordnet sein, zu der sie generiert wurden. Sie sollten jedoch vorzugsweise [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Callback aufgerufen wird.

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das den Beobachter anpasst.

    Sie können jede Kombination (oder keine) der folgenden Optionen angeben:
    - `delay`
      - : Eine Zahl, die die minimale erlaubte Verzögerung zwischen Benachrichtigungen vom Beobachter in Millisekunden angibt.

        Die Verzögerung wird verwendet, um die Häufigkeit der Benachrichtigungen zu begrenzen, wenn die Sichtbarkeit verfolgt wird, da dies eine rechenintensive Operation ist.
        Die Empfehlung beim Verfolgen der Sichtbarkeit ist, die Verzögerung auf den größtmöglichen tolerierbaren Wert zu setzen.

        Wenn [`trackVisibility`](#trackvisibility) `true` ist, beträgt der Mindestwert 100.
        Der Browser setzt den Wert auf 100, wenn ein kleinerer Wert verwendet wird oder wenn der Wert nicht spezifiziert ist.
        Der Standardwert ist 0.

    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element) oder [`Document`](/de/docs/Web/API/Document)-Objekt, welches ein Vorfahre des beabsichtigten Ziels ist, dessen Begrenzungsrechteck als Viewport betrachtet wird.
        Jeder Teil des Ziels, der im sichtbaren Bereich des `root` nicht sichtbar ist, wird nicht als sichtbar betrachtet.
        Wenn nicht angegeben, verwendet der Beobachter den Viewport des Dokuments
        als Root, ohne Rand, und einen Schwellenwert von 0% (dies bedeutet, dass bereits eine Änderung um einen Pixel ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Reihe von Offsets angibt, die dem {{Glossary("bounding_box", "bounding_box")}} des Root hinzugefügt werden, um Schnittpunkte zu berechnen, was effektiv den Root zum Zweck der Berechnung schrumpfen oder erweitern kann. Jeder Offset-Wert kann nur in Pixeln (`px`) oder Prozent (`%`) ausgedrückt werden.
        Die Syntax ist ungefähr dieselbe wie die der CSS {{cssxref("margin")}}-Eigenschaft;
        siehe [Der Schnittpunkt-Root und root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für weitere Informationen darüber, wie der Rand funktioniert und die Syntax.
        Der Standardwert ist "0px 0px 0px 0px".
    - `scrollMargin`
      - : Ein String, der die Offsets angibt, die jedem {{Glossary("scroll_container", "scroll container")}} auf dem Pfad zum Ziel hinzugefügt werden, um Schnittpunkte zu berechnen, was effektiv die Clip-Rechtecke schrumpfen oder erweitern kann, die zum Berechnen der Schnittpunkte verwendet werden.
        Dies ermöglicht beispielsweise eine bessere Beobachtung von Zielen innerhalb geschachtelter Scroll-Container, die derzeit von den Scroll-Containern abgeschnitten sind.
        Die Syntax ist dieselbe wie `rootMargin`.
        Der Standardwert ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0,0 und 1,0, die das Verhältnis der Schnittfläche zur Gesamtfläche der Bounding-Box des beobachteten Ziels angibt.
        Ein Wert von 0,0 bedeutet, dass bereits ein einzelner sichtbarer Pixel als "sichtbar" des Ziels zählt.
        1,0 bedeutet, dass das gesamte Ziel-Element sichtbar ist.
        Siehe [Schwellenwerte](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine ausführlichere Beschreibung der Verwendung von Schwellenwerten.
        Der Standardwert ist ein Schwellenwert von "0".
    - `trackVisibility`
      - : Ein Boolean, der angibt, ob der Beobachter die Sichtbarkeit verfolgen soll.

        Wenn `true`, überprüft der Browser, dass das Ziel keine eingeschränkte Sichtbarkeit aufweist, wenn Schnittpunkte berechnet werden;
        beispielsweise, dass es nicht von anderen Elementen bedeckt ist oder möglicherweise durch einen Filter, verminderte Deckkraft oder eine Transformation verzerrt oder versteckt wurde.

        Das Verfolgen der Sichtbarkeit ist eine teure Operation und sollte nur durchgeführt werden, wenn notwendig.
        Ein [`delay`](#delay) sollte auch gesetzt werden, wenn dieser Wert `true` ist.
        Der Standardwert ist `false`.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um die Sichtbarkeit eines Ziel-Elements innerhalb des spezifizierten `root` zu beobachten, das durch einen der spezifizierten Sichtbarkeits-`thresholds` geht.

Rufen Sie die [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Beobachtung der Sichtbarkeitsänderungen eines bestimmten Ziels zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `rootMargin` oder `scrollMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere Werte in `threshold` sind außerhalb des Bereichs von 0,0 bis 1,0.

## Beispiele

Dieses Beispiel erstellt einen neuen IntersectionObserver, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn sich der sichtbare Bereich des beobachteten Elements um mindestens 10% ändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
