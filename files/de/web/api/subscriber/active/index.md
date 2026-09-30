---
title: "Subscriber: Eigenschaft active"
short-title: active
slug: Web/API/Subscriber/active
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`active`** der Schnittstelle [`Subscriber`](/de/docs/Web/API/Subscriber) gibt an, ob die Subscription noch Werte an Beobachter senden kann.

## Wert

Ein boolescher Wert, der `true` ist, solange die Subscription aktiv ist, und `false`, nachdem sie beendet wurde.

## Beschreibung

Ein Subscriber wird inaktiv, wenn [`Subscriber.complete()`](/de/docs/Web/API/Subscriber/complete) oder [`Subscriber.error()`](/de/docs/Web/API/Subscriber/error) aufgerufen wird oder wenn sich alle Beobachter [abmelden](/de/docs/Web/API/Observable_API/Using_observables#unsubscribing_from_an_observable). Meldet sich nur ein Beobachter ab, wird der Subscriber nicht inaktiv, solange weitere Beobachter vorhanden sind. Der Wert ist bereits `false`, wenn die Teardown-Callbacks und die `complete`- oder `error`-Callbacks der Beobachter ausgeführt werden.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Subscriptions könnte sich ändern. Ein [Vorschlag, jedem Beobachter einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jede Subscription eine eigene Ausführung startet, statt eine aktive Subscription wiederzuverwenden.

Wenn beim Starten einer neuen Subscription ein bereits abgebrochenes Signal an [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben wird, erhält der Producer-Callback einen inaktiven `Subscriber`.

## Beispiele

### Den Wert von `active` im Verlauf des Lebenszyklus zeigen

Dieses Beispiel zählt von 1 bis 10 und zeigt an, ob die Subscription aktiv ist.

```html hidden live-sample___basic-active
<button class="count">Start count</button>
<button class="abort" disabled>Abort count</button>
<p class="countOutput">Count not started</p>
<p class="active">Observable subscription active: false</p>
```

Im Producer-Callback zeigen wir den anfänglichen Wert von `active` an und starten ein Intervall. Nachdem die Zahlen von 1 bis 10 gesendet wurden, rufen wir `complete()` auf. Der Teardown-Callback beendet das Intervall und zeigt den aktualisierten Wert von `active` an. Er wird sowohl ausgeführt, wenn das Zählen abgeschlossen ist, als auch, wenn der Benutzer es abbricht.

```js live-sample___basic-active
const outputElem = document.querySelector(".countOutput");
const activeStatus = document.querySelector(".active");
const countBtn = document.querySelector(".count");
const abortBtn = document.querySelector(".abort");
let controller;

function init() {
  controller = new AbortController();

  const observable = new Observable((subscriber) => {
    countBtn.textContent = "Counting...";
    countBtn.disabled = true;
    abortBtn.disabled = false;
    activeStatus.textContent = `Observable subscription active: ${subscriber.active}`;

    let i = 1;
    const interval = setInterval(() => {
      if (i > 10) {
        subscriber.complete();
      } else {
        subscriber.next(i++);
      }
    }, 500);

    subscriber.addTeardown(() => {
      clearInterval(interval);
      activeStatus.textContent = `Observable subscription active: ${subscriber.active}`;
      countBtn.textContent = "Restart count";
      countBtn.disabled = false;
      abortBtn.disabled = true;
    });
  });

  observable.subscribe(
    {
      next(value) {
        outputElem.textContent = value;
      },
      complete() {
        outputElem.textContent = "Count complete";
      },
    },
    { signal: controller.signal },
  );
}

countBtn.addEventListener("click", init);
abortBtn.addEventListener("click", () => {
  controller.abort();
  outputElem.textContent = "Count aborted";
});
```

Das an `subscribe()` übergebene Signal ermöglicht es der Abbrechen-Schaltfläche, den Beobachter abzumelden. Ein Abbruch ruft den `complete`-Callback des Beobachters nicht auf. Deshalb setzt der Handler der Abbrechen-Schaltfläche die Ausgabe selbst auf „Count aborted“.

{{EmbedLiveSample("basic-active", "", 120)}}

Drücken Sie die Start-Schaltfläche, um den Zählvorgang zu beginnen. Der Wert von `active` wird beim Start der Subscription zu `true` und nach ihrem Abschluss oder Abbruch zu `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
