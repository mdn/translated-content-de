---
title: "Observable: catch()-Methode"
short-title: catch()
slug: Web/API/Observable/catch
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`catch()`**-Methode der [`Observable`](/de/docs/Web/API/Observable)-Schnittstelle gibt ein neues Observable zurück, das einen Fehler des Quell-Observables durch Werte aus einem anderen Observable ersetzt.

## Syntax

```js-nolint
catch(callback)
```

### Parameter

- `callback`
  - : Eine Funktion, die ausgeführt wird, wenn beim Quell-Observable ein Fehler auftritt. Sie muss einen Wert zurückgeben, der mit [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umgewandelt werden kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Die Funktion wird mit dem folgenden Argument aufgerufen:
    - `error`
      - : Der Fehler des Quell-Observables.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Bei einer Subscription gibt es die Werte des Quell-Observables aus, bis dort ein Fehler auftritt. Dann ruft es `callback` auf und gibt Werte aus dem Observable aus, in das dessen Rückgabewert umgewandelt wurde. Es wird abgeschlossen, wenn das Quell-Observable ohne Fehler abgeschlossen wird oder wenn das Ersatz-Observable abgeschlossen wird.

## Beschreibung

Wie andere Operatoren, die Observables zurückgeben, arbeitet diese Methode verzögert: Der Aufruf erstellt ein neues Observable, ohne eine Subscription beim Quell-Observable einzurichten. Die Verarbeitung beginnt, wenn eine Subscription beim zurückgegebenen Observable eingerichtet wird.

Wenn `callback` eine Ausnahme auslöst oder sein Rückgabewert nicht in ein Observable umgewandelt werden kann, tritt beim zurückgegebenen Observable ein Fehler auf. Fehler des Ersatz-Observables werden ebenfalls weitergegeben; sie rufen `callback` nicht erneut auf.

`catch()` setzt die Subscription beim Quell-Observable nicht fort und versucht sie auch nicht automatisch erneut. Die Subscription beim Quell-Observable ist bereits beendet, wenn `callback` ausgeführt wird. Um einen Fehler eines inneren Observables zu behandeln und weiterhin Werte des Quell-Observables zu empfangen, platzieren Sie `catch()` innerhalb der Mapper-Funktion, die an [`flatMap()`](/de/docs/Web/API/Observable/flatMap) oder [`switchMap()`](/de/docs/Web/API/Observable/switchMap) übergeben wird.

## Beispiele

### Fehler in einem inneren Observable behandeln

Dieses Beispiel meldet die zurückgelegte Distanz beim Ziehen, bis sie 100 Pixel überschreitet. Der Fehler-Handler beendet den Stream des aktuellen Ziehvorgangs, lässt aber weitere Ziehvorgänge zu.

```html hidden live-sample___catch-drag
<div>Press here and move the mouse.</div>
<p>Waiting for a drag</p>
```

```css hidden live-sample___catch-drag
div {
  padding: 20px;
  border: 1px solid;
  user-select: none;
}
```

```js live-sample___catch-drag
const target = document.querySelector("div");
const output = document.querySelector("p");

target
  .when("mousedown")
  .switchMap((start) =>
    document
      .when("mousemove")
      .takeUntil(document.when("mouseup"))
      .map((move) => {
        const distance = Math.hypot(
          move.clientX - start.clientX,
          move.clientY - start.clientY,
        );
        if (distance > 100) {
          throw new Error("Too far! Start a new drag.");
        }
        return distance;
      })
      .catch((error) => {
        output.textContent = error.message;
        return [];
      }),
  )
  .subscribe((distance) => {
    output.textContent = `Distance: ${Math.round(distance)} pixels`;
  });
```

Wenn `catch()` innerhalb von [`switchMap()`](/de/docs/Web/API/Observable/switchMap) platziert wird, bleibt der Fehler auf den inneren Stream beschränkt. Das leere Array schließt diesen Stream ab, ohne einen weiteren Wert auszugeben.

{{EmbedLiveSample("catch-drag", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.finally()`](/de/docs/Web/API/Observable/finally)
- [`Observable.switchMap()`](/de/docs/Web/API/Observable/switchMap)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
