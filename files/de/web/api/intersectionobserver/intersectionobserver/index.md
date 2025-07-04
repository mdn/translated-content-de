---
title: "IntersectionObserver: IntersectionObserver() Konstruktor"
short-title: IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
l10n:
  sourceCommit: 809a1f18b067a6f768ccde5b9672733014179ede
---

{{APIRef("Intersection Observer API")}}

Der **`IntersectionObserver()`** Konstruktor erstellt und gibt ein neues [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Objekt zurück.

## Syntax

```js-nolint
new IntersectionObserver(callback)
new IntersectionObserver(callback, options)
```

### Parameter

- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der Prozentsatz des sichtbaren Bereichs des Ziel-Elements einen Schwellenwert überschreitet.
    Der Callback erhält zwei Eingabeparameter:
    - `entries`
      - : Ein Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten, die jeweils einen Schwellenwert repräsentieren, der überschritten wurde, indem der sichtbare Anteil entweder größer oder kleiner als der durch den Schwellenwert angegebene Prozentsatz wird.
        Sie sollten nicht von der Anzahl der Einträge ausgehen, denn mehrere Schwellenwert-Überschreitungen können in einem einzigen Callback-Aufruf gemeldet werden.
        Die Einträge werden über eine Warteschlange verteilt, daher sollten sie nach der Zeit geordnet sein, zu der sie erstellt wurden. Es ist jedoch empfehlenswert, [`IntersectionObserverEntry.time`](/de/docs/Web/API/IntersectionObserverEntry/time) zu verwenden, um sie korrekt zu ordnen.
    - `observer`
      - : Der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), für den der Callback aufgerufen wird.

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das den Beobachter anpasst.

    Sie können jede Kombination (oder keine) der folgenden Optionen bereitstellen:
    - `delay`
      - : Eine Zahl, die die minimale erlaubte Verzögerung zwischen Benachrichtigungen des Beobachters in Millisekunden angibt.

        Die Verzögerung wird verwendet, um die Häufigkeit der Benachrichtigungen zu begrenzen, wenn die Sichtbarkeit verfolgt wird, da dies eine rechnerintensive Operation ist.
        Die Empfehlung beim Verfolgen der Sichtbarkeit ist, die Verzögerung auf den größtmöglichen akzeptablen Wert einzustellen.

        Wenn [`trackVisibility`](#trackvisibility) `true` ist, beträgt der Mindestwert 100.
        Der Browser setzt den Wert auf 100, wenn ein kleinerer Wert verwendet wird oder der Wert nicht angegeben ist.
        Der Standardwert ist 0.

    - `root`
      - : Ein [`Element`](/de/docs/Web/API/Element)- oder [`Document`](/de/docs/Web/API/Document)-Objekt, das ein Vorfahre des vorgesehenen Ziels ist und dessen Begrenzungsrechteck als Ansichtfenster betrachtet wird.
        Jede nicht im sichtbaren Bereich des `root` sichtbare Teile des Ziels werden als nicht sichtbar betrachtet.
        Falls nicht angegeben, verwendet der Beobachter das Ansichtsfenster des Dokuments als root, ohne Rand, und einen Schwellenwert von 0 % (was bedeutet, dass sogar eine Änderung um einen Pixel ausreicht, um einen Callback auszulösen).
    - `rootMargin`
      - : Ein String, der eine Anzahl von Offsets angibt, die zur Berechnung der Schnittstellen dem {{Glossary("bounding_box", "Begrenzungsrahmen")}} des root hinzugefügt werden, wodurch der root für Berechnungszwecke effektiv verkleinert oder vergrößert wird.
        Die Syntax ist in etwa die gleiche wie die für die CSS {{cssxref("margin")}}-Eigenschaft;
        siehe [The intersection root and root margin](/de/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) für weitere Informationen darüber, wie der Rand funktioniert und die Syntax.
        Der Standard ist "0px 0px 0px 0px".
    - `scrollMargin`
      - : Ein String, der die Offsets angibt, die jedem {{Glossary("scroll_container", "rollenden Container")}} auf dem Weg zum Ziel hinzugefügt werden, um die Schnittstellen zu berechnen, wodurch die Clip-Rechtecke effektiv verkleinert oder vergrößert werden, die zur Berechnung der Schnittstellen verwendet werden.
        Dies ermöglicht zum Beispiel eine bessere Beobachtung von Zielen innerhalb verschachtelter, derzeit von den rollenden Containern abgeschnittener Scroll-Container.
        Die Syntax ist in etwa die gleiche wie die für die CSS {{cssxref("margin")}}-Eigenschaft.
        Der Standard ist "0px 0px 0px 0px".
    - `threshold`
      - : Entweder eine einzelne Zahl oder ein Array von Zahlen zwischen 0,0 und 1,0, die ein Verhältnis des Schnittflächenbereichs zum gesamten Begrenzungsrahmenbereich für das beobachtete Ziel angeben.
        Ein Wert von 0,0 bedeutet, dass selbst ein einzelnes sichtbares Pixel als sichtbar für das Ziel angesehen wird.
        1,0 bedeutet, dass das gesamte Ziel-Element sichtbar ist.
        Siehe [Thresholds](/de/docs/Web/API/Intersection_Observer_API#thresholds) für eine detailliertere Beschreibung, wie Schwellenwerte verwendet werden.
        Der Standard ist ein Schwellenwert von "0".
    - `trackVisibility`
      - : Ein Boolean, das anzeigt, ob der Beobachter die Sichtbarkeit verfolgen soll.

        Wenn `true`, überprüft der Browser, dass das Ziel keine beeinträchtigte Sichtbarkeit aufweist, wenn Schnittstellen berechnet werden;
        zum Beispiel, dass es nicht von anderen Elementen bedeckt wurde oder möglicherweise durch einen Filter, verringerte Deckkraft oder eine Transformation verzerrt oder verdeckt wurde.

        Die Verfolgung der Sichtbarkeit ist eine ressourcenintensive Operation und sollte nur bei Bedarf durchgeführt werden.
        Ein [`delay`](#delay) sollte ebenfalls gesetzt werden, wenn dieser Wert `true` ist.
        Der Standardwert ist `false`.

### Rückgabewert

Ein neuer [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), der verwendet werden kann, um die Sichtbarkeit eines Ziel-Elements innerhalb des angegebenen `root` beim Überschreiten der spezifizierten Sichtbarkeits-`threshold`s zu beobachten.

Rufen Sie dessen [`observe()`](/de/docs/Web/API/IntersectionObserver/observe)-Methode auf, um mit der Beobachtung von Sichtbarkeitsänderungen für ein gegebenes Ziel zu beginnen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `rootMargin` oder `scrollMargin` ist ungültig.
- {{jsxref("RangeError")}}
  - : Einer oder mehrere der Werte in `threshold` liegen außerhalb des Bereichs 0,0 bis 1,0.

## Beispiele

Dieses Beispiel erstellt einen neuen Schnittstellenbeobachter, der die Funktion `myObserverCallback` jedes Mal aufruft, wenn der sichtbare Bereich des beobachteten Elements sich um mindestens 10 % verändert.

```js
let observer = new IntersectionObserver(myObserverCallback, { threshold: 0.1 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
