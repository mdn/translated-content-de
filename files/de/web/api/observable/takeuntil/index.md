---
title: "Observable: Methode takeUntil()"
short-title: takeUntil()
slug: Web/API/Observable/takeUntil
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`takeUntil()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das Werte aus dem Quell-Observable ausgibt, bis ein anderes Observable einen Wert ausgibt oder einen Fehler meldet.

## Syntax

```js-nolint
takeUntil(value)
```

### Parameter

- `value`
  - : Ein Wert, der durch [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umgewandelt werden kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Das umgewandelte Observable dient als Signalgeber, der bestimmt, wann die Ausgabe von Quellwerten beendet wird.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wird es abonniert, gibt es Werte aus dem Quell-Observable aus, bis der Signalgeber einen Wert ausgibt oder einen Fehler meldet. Anschließend wird es abgeschlossen, und beide Observables werden abbestellt. Wird das Quell-Observable zuerst abgeschlossen oder meldet es zuerst einen Fehler, wird diese Benachrichtigung weitergeleitet und der Signalgeber abbestellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` nicht in ein Observable umgewandelt werden kann.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Der Signalgeber wird vor dem Quell-Observable abonniert. Gibt er synchron einen Wert aus oder meldet er synchron einen Fehler, wird das zurückgegebene Observable abgeschlossen, ohne das Quell-Observable zu abonnieren. Wird der Signalgeber abgeschlossen, ohne einen Wert auszugeben, läuft das Quell-Observable ununterbrochen weiter.

Ein Fehler des Signalgebers führt zum erfolgreichen Abschluss des zurückgegebenen Observables; er wird nicht als Fehler weitergeleitet.

Technisch gesehen können Sie für `value` ein synchron iterierbares Objekt übergeben. Das umgewandelte Observable gibt jedoch entweder nie einen Wert aus, wenn das iterierbare Objekt leer ist (und `takeUntil()` das Abonnement nie beendet), oder es gibt sofort einen Wert aus, wenn das iterierbare Objekt nicht leer ist (und `takeUntil()` das Abonnement sofort beendet).

## Beispiele

### takeUntil() verwenden

Dieses Beispiel zeigt die Mauskoordinaten an, wenn sich der Mauszeiger über einem der beiden `<div>`-Elemente bewegt. Ein Klick an beliebiger Stelle im Beispiel schließt das Observable ab und beendet die Ausgabe der Koordinaten. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-takeUntil
<div></div>
<div></div>
<p></p>
<button id="restart" disabled>Restart</button>
```

```css hidden live-sample___basic-takeUntil
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-takeUntil
const outputElem = document.querySelector("p");

const restart = document.querySelector("#restart");

function start() {
  restart.disabled = true;
  outputElem.textContent = "Move the mouse";
  document.body
    .when("mousemove")
    .filter((e) => e.target.matches("div"))
    .map((e) => ({ x: e.clientX, y: e.clientY }))
    .takeUntil(
      document.body.when("click").filter((event) => event.target !== restart),
    )
    .subscribe({
      next: reportCoords,
      complete() {
        restart.disabled = false;
      },
    });

  function reportCoords(e) {
    outputElem.textContent = `${e.x},${e.y}`;
  }
}

restart.when("click").subscribe(start);
start();
```

{{EmbedLiveSample("basic-takeUntil", "", 430)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
