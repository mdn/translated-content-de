---
title: "Observable: Methode drop()"
short-title: drop()
slug: Web/API/Observable/drop
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`drop()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das die angegebene Anzahl von Werten am Anfang des Quell-Observables überspringt.

## Syntax

```js-nolint
drop(amount)
```

### Parameter

- `amount`
  - : Die Anzahl der Werte, die am Anfang des Quell-Observables übersprungen werden sollen. Der Wert sollte eine vorzeichenlose Ganzzahl sein.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wird es abonniert, überspringt es die ersten `amount` Werte, die das Quell-Observable ausgibt, und gibt anschließend die übrigen Werte aus. Wenn das Quell-Observable abgeschlossen wird, bevor es `amount` Werte ausgegeben hat, wird das zurückgegebene Observable abgeschlossen, ohne Werte auszugeben.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, wird auch diese Methode verzögert ausgeführt: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Wenn `amount` den Wert `0` hat, werden alle Werte des Quell-Observables weitergegeben. Fehler des Quell-Observables werden auch dann weitergegeben, wenn Werte übersprungen werden.

## Beispiele

### drop() verwenden

Dieses Beispiel ignoriert die ersten drei Klicks auf eine Schaltfläche und zeigt anschließend die Anzahl der weiteren Klicks an.

```html hidden live-sample___basic-drop
<button>Click me</button>
<p>Click count: 0</p>
```

```js live-sample___basic-drop
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn.when("click").drop(3).subscribe(increment);
```

{{EmbedLiveSample("basic-drop", "", 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.take()`](/de/docs/Web/API/Observable/take)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
