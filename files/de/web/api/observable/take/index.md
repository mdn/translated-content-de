---
title: "Observable: take()-Methode"
short-title: take()
slug: Web/API/Observable/take
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`take()`**-Methode der [`Observable`](/de/docs/Web/API/Observable)-Schnittstelle gibt ein neues Observable zurück, das die angegebene Anzahl von Werten vom Anfang des Quell-Observables ausgibt und danach abgeschlossen wird.

## Syntax

```js-nolint
take(amount)
```

### Parameter

- `amount`
  - : Die Anzahl der Werte, die vom Anfang des Quell-Observables übernommen werden sollen. Sie sollte eine vorzeichenlose Ganzzahl sein.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, gibt es Werte aus dem Quell-Observable aus, bis `amount` Werte ausgegeben wurden oder das Quell-Observable abgeschlossen wird – je nachdem, was zuerst eintritt. Sobald die Grenze erreicht ist, wird das zurückgegebene Observable abgeschlossen und meldet sich vom Quell-Observable ab.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Wenn `amount` den Wert `0` hat, wird das zurückgegebene Observable beim Abonnieren sofort abgeschlossen, ohne das Quell-Observable zu abonnieren. Fehler des Quell-Observables werden weitergeleitet, bis das zurückgegebene Observable abgeschlossen ist.

## Beispiele

### take() verwenden

Dieses Beispiel zählt die ersten fünf Klicks auf eine Schaltfläche. Beim fünften Klick wird der Zähler durch eine Abschlussmeldung ersetzt; weitere Klicks werden ignoriert. Klicken Sie nach dem Ende des Streams auf „Neustart“, um es erneut zu versuchen.

```html hidden live-sample___basic-take
<button>Click me</button>
<p>Click count: 0</p>
<button id="restart" disabled>Restart</button>
```

```js live-sample___basic-take
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  countValue = 0;
  para.textContent = "Click count: 0";
  btn
    .when("click")
    .take(5)
    .subscribe({
      next: increment,
      complete() {
        restart.disabled = false;
        para.textContent = `Count finished!`;
      },
    });
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-take", "", 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.drop()`](/de/docs/Web/API/Observable/drop)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
