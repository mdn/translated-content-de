---
title: "Subscriber: Methode error()"
short-title: error()
slug: Web/API/Subscriber/error
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`error()`** des [`Subscriber`](/de/docs/Web/API/Subscriber)-Interfaces beendet die Subscription und benachrichtigt die Observer über einen Fehler.

## Syntax

```js-nolint
error(error)
```

### Parameter

- `error`
  - : Ein Wert, der den Fehler repräsentiert. Dies kann ein beliebiger JavaScript-Wert sein, ist aber normalerweise ein {{jsxref("Error")}}-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Beim Aufruf dieser Methode wird [`active`](/de/docs/Web/API/Subscriber/active) auf `false` gesetzt, [`signal`](/de/docs/Web/API/Subscriber/signal) abgebrochen und die registrierten [Teardown-Callbacks](/de/docs/Web/API/Subscriber/addTeardown) werden ausgeführt. Anschließend ruft die Methode synchron den `error`-Callback jedes Observers auf, der im `observer`-Objekt beim Aufruf von [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben wurde. Dabei wird der Fehlerwert übergeben. Die `complete`-Callbacks der Observer werden nicht aufgerufen.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Subscriptions kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217) würde bewirken, dass jede Subscription eine separate Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

Wenn ein Observer keinen `error`-Callback hat, wird der Fehler an das globale Objekt gemeldet. Wird `error()` für einen bereits inaktiven Subscriber aufgerufen, wird der Fehler ebenfalls an das globale Objekt gemeldet. Der Aufruf dieser Methode gibt den Fehler nicht als Ausnahme an den Aufrufer zurück und stoppt die Ausführung des Producer-Codes nicht.

## Beispiele

### Ein Observable zur Überprüfung von Werten

Dieses Beispiel verwendet ein benutzerdefiniertes Observable, um zu prüfen, ob jede Zeichenfolge in einem Array nicht leer ist und ausschließlich ASCII-Ziffern (`0`–`9`) enthält.

Zunächst definieren wir mit dem [`Observable()`](/de/docs/Web/API/Observable/Observable)-Konstruktor ein benutzerdefiniertes Observable. Darin wird ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Regular_expressions) definiert, der nur auf Zeichenfolgen aus ASCII-Ziffern passt. Anschließend verarbeitet eine {{jsxref("Statements/for...of", "for...of")}}-Schleife jeden Wert im Array `values`. Jeder Wert wird anhand des regulären Ausdrucks geprüft:

- Ist der Wert nicht leer und enthält er ausschließlich ASCII-Ziffern, wird er an einen Aufruf von [`Subscriber.next()`](/de/docs/Web/API/Subscriber/next) übergeben.
- Ist der Wert leer oder enthält er Zeichen, die keine Ziffern sind, wird er in eine Fehlermeldung eingefügt und an einen Aufruf von `error()` übergeben. Anschließend kehren wir aus dem Producer-Callback zurück, damit keine weiteren Werte verarbeitet werden.

Nachdem alle Werte verarbeitet wurden, wird [`Subscriber.complete()`](/de/docs/Web/API/Subscriber/complete) aufgerufen, um den Wertestrom abzuschließen.

```js
const observable = new Observable((subscriber) => {
  const regex = /^\d+$/;
  for (const value of values) {
    if (!subscriber.active) {
      return;
    }
    if (regex.test(value)) {
      subscriber.next(value);
    } else {
      subscriber.error(`Error: "${value}" must contain ASCII digits only`);
      return;
    }
  }

  subscriber.complete();
});
```

Als Nächstes definieren wir ein Array `values`, das der Producer-Callback liest, wenn das Observable abonniert wird. In diesem Fall enthält das Array nur Zeichenfolgen aus ASCII-Ziffern, die alle die Prüfung mit dem regulären Ausdruck bestehen:

```js
const values = ["1234", "354567", "87654", "007", "98765", "999"];
```

Schließlich abonnieren wir das Observable mit einem Aufruf von [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe). Darin definieren wir `next()`-, `error()`- und `complete()`-Callbacks, die jeweils einen passenden Wert in der Konsole protokollieren:

```js
observable.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log("Checking complete. No errors found.");
  },
});
```

Wenn der obige Code ausgeführt wird, bestehen alle Werte die Prüfung mit dem regulären Ausdruck. Daher werden sie alle gemäß dem `next()`-Callback in der Konsole protokolliert. Nachdem alle Werte geprüft wurden, wird der `complete()`-Callback des Observers ausgeführt, der `"Checking complete. No errors found."` in der Konsole protokolliert.

#### Ergebnis im Erfolgsfall

Die endgültige Konsolenausgabe sieht ungefähr so aus:

```plain
1234
354567
87654
007
98765
999
Checking complete. No errors found.
```

#### Ein Fehlerfall

Was geschieht, wenn eine der Zeichenfolgen im Array Zeichen enthält, die keine Ziffern sind? In diesem Fall beendet `subscriber.error()` die Subscription und ruft den `error()`-Callback des Observers auf. Das anschließende `return` beendet die Schleife, sodass die übrigen Werte nicht verarbeitet werden und `subscriber.complete()` nicht aufgerufen wird. Die Prüfung von `active` verhindert die weitere Verarbeitung auch dann, wenn der Observer während der Verarbeitung eines Werts die Subscription beendet.

Wenn das Array `values` beispielsweise wie folgt definiert ist:

```js
const values = ["1234", "354567", "87654", "gg567", "007", "98765"];
```

Sieht die endgültige Konsolenausgabe ungefähr so aus:

```plain
1234
354567
87654
Error: "gg567" must contain ASCII digits only
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
