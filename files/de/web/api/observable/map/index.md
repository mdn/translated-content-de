---
title: "Observable: Methode map()"
short-title: map()
slug: Web/API/Observable/map
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`map()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück, das die Werte des Quell-Observables ausgibt, nachdem jeder Wert durch eine Abbildungsfunktion umgewandelt wurde.

## Syntax

```js-nolint
map(mapper)
```

### Parameter

- `mapper`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Ihr Rückgabewert wird vom zurückgegebenen Observable ausgegeben. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, ruft es `mapper` für jeden vom Quell-Observable ausgegebenen Wert auf und gibt den jeweiligen Rückgabewert aus. Wenn das Quell-Observable abgeschlossen ist, wird auch das zurückgegebene Observable abgeschlossen.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Ihr Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, sobald das zurückgegebene Observable abonniert wird.

Wenn `mapper` eine Ausnahme auslöst, gibt das zurückgegebene Observable einen Fehler aus und beendet das Abonnement des Quell-Observables. Fehler des Quell-Observables werden ebenfalls weitergegeben.

Der Rückgabewert von `mapper` wird unverändert ausgegeben. Insbesondere wird ein zurückgegebenes Promise als Promise-Objekt ausgegeben; es wird nicht auf dessen Erfüllung gewartet. Um Werte aus einem zurückgegebenen Promise oder einem anderen Observable auszugeben, verwenden Sie [`flatMap()`](/de/docs/Web/API/Observable/flatMap) oder [`switchMap()`](/de/docs/Web/API/Observable/switchMap).

## Beispiele

### map() verwenden

Dieses Beispiel zeigt die Mauskoordinaten an, wenn sich der Mauszeiger über eines von zwei `<div>`-Elementen bewegt. Die Abbildungsfunktion extrahiert die Koordinaten aus jedem Mausereignis und legt sie in einem Objekt mit den Eigenschaften `x` und `y` ab.

```html hidden live-sample___basic-map
<div></div>
<div></div>
<p></p>
```

```css hidden live-sample___basic-map
div {
  height: 120px;
  background-color: purple;
  margin-bottom: 40px;
}
```

```js live-sample___basic-map
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

{{EmbedLiveSample("basic-map", "", 360)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Observable.flatMap()`](/de/docs/Web/API/Observable/flatMap)
- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
