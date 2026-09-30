---
title: "Observable: Methode filter()"
short-title: filter()
slug: Web/API/Observable/filter
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`filter()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das nur die Werte des Quell-Observables ausgibt, für die die bereitgestellte Callback-Funktion einen Truthy-Wert zurückgibt.

## Syntax

```js-nolint
filter(predicate)
```

### Parameter

- `predicate`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "Truthy-Wert")}} zurückgeben, damit das zurückgegebene Observable den Wert ausgibt, andernfalls einen {{Glossary("Falsy", "Falsy-Wert")}}. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, ruft es `predicate` für jeden vom Quell-Observable ausgegebenen Wert auf und gibt den Wert nur dann aus, wenn `predicate` einen Truthy-Wert zurückgibt. Wenn das Quell-Observable abgeschlossen ist, wird auch das zurückgegebene Observable abgeschlossen.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Beim Aufruf wird ein neues Observable erstellt, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Wenn `predicate` eine Ausnahme auslöst, meldet das zurückgegebene Observable einen Fehler und beendet das Abonnement des Quell-Observables. Fehler des Quell-Observables werden ebenfalls weitergeleitet.

Der `index` zählt alle Werte des Quell-Observables, auch diejenigen, die herausgefiltert werden. Der Rückgabewert von `predicate` wird in einen booleschen Wert umgewandelt, ohne auf ihn zu warten. Eine asynchrone Funktion gibt daher unabhängig von ihrem späteren Ergebnis ein Truthy-Promise-Objekt zurück.

## Beispiele

### filter() verwenden

Dieses Beispiel zeigt die Mauskoordinaten nur dann an, wenn sich der Mauszeiger über einem von zwei `<div>`-Elementen bewegt. Der Filter schließt Ereignisse aus, deren Ziel ein anderes Element ist.

```html hidden live-sample___basic-filter
<div></div>
<div></div>
<p></p>
```

```css hidden live-sample___basic-filter
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-filter
const outputElem = document.querySelector("p");

document.body
  .when("mousemove")
  .filter((e) => e.target.matches("div"))
  .map((e) => ({ x: e.clientX, y: e.clientY }))
  .subscribe({ next: reportCoords });

function reportCoords(e) {
  outputElem.textContent = `${e.x},${e.y}`;
}
```

{{EmbedLiveSample("basic-filter", "", 360)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.forEach()`](/de/docs/Web/API/Observable/forEach)
- [`Observable.every()`](/de/docs/Web/API/Observable/every)
- [`Observable.map()`](/de/docs/Web/API/Observable/map)
- [`Observable.some()`](/de/docs/Web/API/Observable/some)
- [`Observable.reduce()`](/de/docs/Web/API/Observable/reduce)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
