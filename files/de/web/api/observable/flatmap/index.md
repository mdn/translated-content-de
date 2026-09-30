---
title: "Observable: flatMap()-Methode"
short-title: flatMap()
slug: Web/API/Observable/flatMap
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`flatMap()`**-Methode des [`Observable`](/de/docs/Web/API/Observable)-Interfaces ordnet jeden Wert des Quell-Observables einem inneren Observable zu und gibt die Werte der inneren Observables nacheinander aus. Sie gibt ein neues Observable zurück.

## Syntax

```js-nolint
flatMap(mapper)
```

### Parameter

- `mapper`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie muss einen Wert zurückgeben, der von [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umgewandelt werden kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, ruft es `mapper` für jeden Wert des Quell-Observables auf, wandelt den Rückgabewert in ein Observable um und gibt dessen Werte aus. Es wartet, bis das aktuelle innere Observable abgeschlossen ist, bevor es `mapper` für den nächsten Wert des Quell-Observables aufruft. Das zurückgegebene Observable wird abgeschlossen, nachdem das Quell-Observable und alle inneren Observables abgeschlossen sind.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Der Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Werte des Quell-Observables, die eintreffen, während ein inneres Observable aktiv ist, werden in eine Warteschlange eingereiht. Wenn dieses innere Observable nie abgeschlossen wird, bleiben spätere Werte in der Warteschlange und die zugehörigen Aufrufe von `mapper` werden nicht ausgeführt. Wenn Sie das aktuelle innere Observable abbestellen möchten, sobald ein neuer Wert des Quell-Observables eintrifft, verwenden Sie stattdessen [`switchMap()`](/de/docs/Web/API/Observable/switchMap).

Wenn `mapper` eine Ausnahme auslöst oder sein Rückgabewert nicht in ein Observable umgewandelt werden kann, meldet das zurückgegebene Observable einen Fehler. Fehler des Quell-Observables oder eines inneren Observables werden ebenfalls weitergeleitet. In jedem dieser Fälle meldet das zurückgegebene Observable das Quell-Observable und jedes aktive innere Observable ab.

## Beispiele

### flatMap() verwenden

Dieses Beispiel zeigt Mauskoordinaten an, während die Maus von einem `<div>`-Element aus gezogen wird. Jeder Mausklick startet einen inneren Stream von Mausbewegungen, der endet, wenn die Maustaste losgelassen wird. `flatMap()` leitet diese Bewegungen weiter und wartet, bis der aktuelle innere Stream abgeschlossen ist, bevor ein weiterer Mausklick verarbeitet wird.

```html hidden live-sample___basic-flatMap
<div>Press here and drag.</div>
<p>Waiting for a drag</p>
```

```css hidden live-sample___basic-flatMap
div {
  height: 120px;
  background-color: lavender;
  user-select: none;
}
```

```js live-sample___basic-flatMap
const target = document.querySelector("div");
const output = document.querySelector("p");

target
  .when("mousedown")
  .flatMap(() => document.when("mousemove").takeUntil(document.when("mouseup")))
  .subscribe((event) => {
    output.textContent = `${event.clientX},${event.clientY}`;
  });
```

{{EmbedLiveSample("basic-flatMap", "", 200)}}

Ein ausführlicheres Beispiel finden Sie unter [Zeichnen auf einem Canvas](/de/docs/Web/API/Observable_API/Using_observables#example_canvas_drawing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
