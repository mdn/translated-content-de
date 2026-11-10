---
title: "Observable: flatMap()-Methode"
short-title: flatMap()
slug: Web/API/Observable/flatMap
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`flatMap()`**-Methode der [`Observable`](/de/docs/Web/API/Observable)-Schnittstelle gibt ein neues Observable zurück. Sie ordnet jeden Wert des Quell-Observables einem inneren Observable zu und gibt die Werte der inneren Observables nacheinander aus.

## Syntax

```js-nolint
flatMap(mapper)
```

### Parameter

- `mapper`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie muss einen Wert zurückgeben, der durch [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umgewandelt werden kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, ruft es `mapper` für jeden Wert des Quell-Observables auf, wandelt den Rückgabewert in ein Observable um und gibt die Werte dieses inneren Observables aus. Es wartet, bis das aktuelle innere Observable abgeschlossen ist, bevor es `mapper` für den nächsten Wert des Quell-Observables aufruft. Das zurückgegebene Observable ist abgeschlossen, nachdem das Quell-Observable und alle inneren Observables abgeschlossen sind.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ein Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Werte des Quell-Observables, die eintreffen, während ein inneres Observable aktiv ist, werden in eine Warteschlange gestellt. Wenn dieses innere Observable nie abgeschlossen wird, bleiben spätere Werte des Quell-Observables in der Warteschlange und die zugehörigen Aufrufe von `mapper` werden nicht ausgeführt. Wenn stattdessen das aktuelle innere Observable beim Eintreffen eines neuen Werts des Quell-Observables abbestellt werden soll, verwenden Sie [`switchMap()`](/de/docs/Web/API/Observable/switchMap).

Wenn `mapper` eine Ausnahme auslöst oder sich sein Rückgabewert nicht in ein Observable umwandeln lässt, meldet das zurückgegebene Observable einen Fehler. Fehler des Quell-Observables oder eines inneren Observables werden ebenfalls weitergegeben. In jedem dieser Fälle beendet das zurückgegebene Observable das Abonnement des Quell-Observables und jedes aktiven inneren Observables.

## Beispiele

### flatMap() verwenden

Dieses Beispiel zeigt die Mauskoordinaten an, während die Maus von einem `<div>`-Element aus gezogen wird. Jeder Mausklick startet einen inneren Stream von Mausbewegungen, der mit dem Loslassen der Maustaste endet. `flatMap()` gibt diese Bewegungen weiter und wartet, bis der aktuelle innere Stream abgeschlossen ist, bevor ein weiterer Mausklick verarbeitet wird.

```html hidden live-sample___basic-flatmap
<div>Press here and drag.</div>
<p>Waiting for a drag</p>
```

```css hidden live-sample___basic-flatmap
div {
  height: 120px;
  background-color: lavender;
  user-select: none;
}
```

```js live-sample___basic-flatmap
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
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
