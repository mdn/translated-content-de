---
title: "Observable: Methode switchMap()"
short-title: switchMap()
slug: Web/API/Observable/switchMap
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die Methode **`switchMap()`** der Schnittstelle [`Observable`](/de/docs/Web/API/Observable) gibt ein neues Observable zurück. Sie ordnet jeden Wert des Quell-Observables einem inneren Observable zu und gibt nur Werte des jeweils neuesten inneren Observables aus.

## Syntax

```js-nolint
switchMap(mapper)
```

### Parameter

- `mapper`
  - : Eine Funktion, die für jeden vom Quell-Observable ausgegebenen Wert ausgeführt wird. Sie muss einen Wert zurückgeben, den [`Observable.from()`](/de/docs/Web/API/Observable/from_static) in ein Observable umwandeln kann: ein [`Observable`](/de/docs/Web/API/Observable), ein {{jsxref("Promise")}}, ein iterierbares Objekt oder ein asynchron iterierbares Objekt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `value`
      - : Der aktuell verarbeitete Wert.
    - `index`
      - : Der Index des aktuell verarbeiteten Werts, beginnend bei `0`.

### Rückgabewert

Ein neues [`Observable`](/de/docs/Web/API/Observable). Wenn es abonniert wird, ruft es `mapper` für jeden Wert des Quell-Observables auf, wandelt den Rückgabewert in ein Observable um und gibt die Werte dieses inneren Observables aus. Bevor es `mapper` für einen neuen Wert des Quell-Observables aufruft, beendet es das Abonnement des aktuellen inneren Observables. Das zurückgegebene Observable wird abgeschlossen, nachdem das Quell-Observable und das letzte innere Observable abgeschlossen wurden.

## Beschreibung

Wie andere Operatoren, die ein Observable zurückgeben, arbeitet diese Methode verzögert: Der Aufruf erstellt ein neues Observable, ohne das Quell-Observable zu abonnieren. Die Verarbeitung beginnt, wenn das zurückgegebene Observable abonniert wird.

Nur Werte des neuesten inneren Observables werden weitergegeben. Um alle Werte des Quell-Observables nacheinander zu verarbeiten und jeweils auf den Abschluss des inneren Observables zu warten, verwenden Sie stattdessen [`flatMap()`](/de/docs/Web/API/Observable/flatMap).

Wenn `mapper` eine Ausnahme auslöst oder sein Rückgabewert nicht in ein Observable umgewandelt werden kann, meldet das zurückgegebene Observable einen Fehler. Fehler des Quell-Observables oder des aktiven inneren Observables werden ebenfalls weitergegeben. In jedem dieser Fälle beendet das zurückgegebene Observable die Abonnements des Quell-Observables und eines gegebenenfalls aktiven inneren Observables.

Das Beenden des Abonnements eines inneren Observables bricht die zugrunde liegende Arbeit nicht unbedingt ab. Wenn der Mapper beispielsweise ein Promise von `fetch()` zurückgibt, bricht der Wechsel zu einem neuen inneren Observable die Anfrage nicht ab. Unter [Asynchrone Arbeit abbrechen](/de/docs/Web/API/Observable_API/Creating_observables#canceling_asynchronous_work) finden Sie ein benutzerdefiniertes Observable, das einen Abbruch unterstützt.

## Beispiele

### Einen Stream umschalten

In diesem Beispiel startet oder stoppt jeder Klick auf die Schaltfläche einen Zähler. Das benutzerdefinierte Observable gibt alle 500 Millisekunden einen Wert aus und registriert einen Callback zum Aufräumen, der das Intervall beendet, wenn sein Abonnement endet.

```html hidden live-sample___toggle-stream
<button>Start count</button>
<p>Count not started</p>
```

```js live-sample___toggle-stream
const btn = document.querySelector("button");
const output = document.querySelector("p");

const counter = new Observable((subscriber) => {
  let n = 1;
  const interval = setInterval(() => subscriber.next(n++), 500);
  subscriber.addTeardown(() => clearInterval(interval));
});

btn
  .when("click")
  .switchMap((event, index) => {
    const start = index % 2 === 0;
    btn.textContent = start ? "Stop count" : "Start count";
    return start ? counter : [];
  })
  .subscribe((value) => {
    output.textContent = value;
  });
```

Der Wechsel zu einem leeren Array beendet das Abonnement des Zählers und löscht dessen Intervall. Das Abonnement für Klicks auf die Schaltfläche bleibt aktiv, sodass der nächste Klick einen neuen Zählvorgang bei `1` startet.

{{EmbedLiveSample("toggle-stream", "", 100)}}

### Vorausschauende Suche

In diesem Beispiel werden Suchvorschläge abgerufen, während die Person eine Suchanfrage in ein Suchfeld eingibt. Es setzt voraus, dass `/search-items` ein JSON-Array mit Ergebnissen zurückgibt und `updateLookahead()` diese Ergebnisse anzeigt.

```js
const textbox = document.querySelector('input[type="search"]');

textbox
  .when("input")
  .map(() => textbox.value.trim())
  .filter((query) => query.length > 3)
  .switchMap((query) =>
    fetch(`/search-items?q=${encodeURIComponent(query)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search failed: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
        return [];
      }),
  )
  .subscribe(updateLookahead);
```

Jede Suchanfrage mit mehr als drei Zeichen startet eine Anfrage. `switchMap()` wandelt das zurückgegebene Promise in ein Observable um und beendet das Abonnement des vorherigen inneren Observables. Wenn eine frühere Anfrage erst abgeschlossen wird, nachdem eine neuere Suchanfrage mit mehr als drei Zeichen eingegeben wurde, werden ihre Ergebnisse ignoriert. Das Beenden des Abonnements bricht die zugrunde liegende `fetch()`-Anfrage selbst nicht ab.

Der `catch()`-Handler des Promises gibt bei einem Fehler ein leeres Ergebnis-Array zurück. Dadurch bleibt das äußere Abonnement aktiv und wartet auch nach einer fehlgeschlagenen Suche weiter auf Eingaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
