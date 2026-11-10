---
title: "Observable: Methode takeUntil()"
short-title: takeUntil()
slug: Web/API/Observable/takeUntil
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`takeUntil()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das Werte des Quell-Observables ausgibt, bis ein anderes Observable einen Wert ausgibt oder einen Fehler meldet.

## Syntax

```js-nolint
takeUntil(value)
```

### Parameter

- `value`
  - : Ein Wert, der durch [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umgewandelt werden kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Das umgewandelte Observable dient als Signalgeber, der bestimmt, wann die Ausgabe der Quellwerte endet.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Bei einer Subscription gibt es Werte des Quell-Observables aus, bis der Signalgeber einen Wert ausgibt oder einen Fehler meldet. Danach wird es abgeschlossen und die Subscriptions beider Observables werden beendet. Wird das Quell-Observable zuerst abgeschlossen oder meldet es zuerst einen Fehler, wird diese Benachrichtigung weitergegeben und die Subscription des Signalgebers beendet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` nicht in ein Observable umgewandelt werden kann.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne eine Subscription des Quell-Observables einzurichten. Die Verarbeitung beginnt, sobald eine Subscription des zurückgegebenen Observables eingerichtet wird.

Die Subscription des Signalgebers wird vor der des Quell-Observables eingerichtet. Gibt er synchron einen Wert aus oder meldet er synchron einen Fehler, wird das zurückgegebene Observable abgeschlossen, ohne eine Subscription des Quell-Observables einzurichten. Wird der Signalgeber abgeschlossen, ohne einen Wert ausgegeben zu haben, läuft das Quell-Observable unbeeinträchtigt weiter.

Ein Fehler des Signalgebers schließt das zurückgegebene Observable erfolgreich ab; er wird nicht als Fehler weitergegeben.

Technisch gesehen können Sie ein synchron iterierbares Objekt als `value` übergeben. Ist es leer, gibt das umgewandelte Observable jedoch nie einen Wert aus (und `takeUntil()` beendet die Subscription nie). Ist es nicht leer, gibt es sofort einen Wert aus (und `takeUntil()` beendet die Subscription sofort).

## Beispiele

### takeUntil() verwenden

Dieses Beispiel zeigt die Mauskoordinaten an, wenn sich der Mauszeiger über einem von zwei `<div>`-Elementen bewegt. Ein Klick an eine beliebige Stelle im Beispiel schließt das Observable ab und beendet die Ausgabe der Koordinaten. Klicken Sie nach dem Ende des Streams auf „Restart“, um es erneut zu versuchen.

```html hidden live-sample___basic-takeuntil
<div></div>
<div></div>
<p></p>
<button id="restart" disabled>Restart</button>
```

```css hidden live-sample___basic-takeuntil
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-takeuntil
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
