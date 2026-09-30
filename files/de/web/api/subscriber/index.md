---
title: Subscriber
slug: Web/API/Subscriber
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

Die **`Subscriber`**-Schnittstelle der [Observable API](/de/docs/Web/API/Observable_API) repräsentiert ein Abonnement eines Datenstroms beobachtbarer Werte und stellt Methoden bereit, um den [Lebenszyklus](/de/docs/Web/API/Observable_API/Creating_observables#creating_an_observable) dieses Abonnements zu verwalten.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`active`](/de/docs/Web/API/Subscriber/active) {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob das Abonnement aktiv ist.
- [`signal`](/de/docs/Web/API/Subscriber/signal) {{Experimental_Inline}}
  - : Ein intern erzeugtes [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn das Abonnement abgeschlossen wird, ein Fehler auftritt oder sich alle Beobachter abmelden.

## Instanzmethoden

- [`addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown) {{Experimental_Inline}}
  - : Registriert einen Callback, der Ressourcen bereinigt, wenn das Abonnement abgeschlossen wird, ein Fehler auftritt oder sich alle Beobachter abmelden.
- [`complete()`](/de/docs/Web/API/Subscriber/complete) {{Experimental_Inline}}
  - : Beendet das Abonnement und benachrichtigt die Beobachter darüber, dass der Datenstrom erfolgreich abgeschlossen wurde.
- [`error()`](/de/docs/Web/API/Subscriber/error) {{Experimental_Inline}}
  - : Beendet das Abonnement und benachrichtigt die Beobachter über einen Fehler.
- [`next()`](/de/docs/Web/API/Subscriber/next) {{Experimental_Inline}}
  - : Sendet einen Wert an die Beobachter des Abonnements.

## Beschreibung

Ein `Subscriber`-Objekt wird an den Callback übergeben, der dem [`Observable()`](/de/docs/Web/API/Observable/Observable)-Konstruktor bereitgestellt wurde, sobald sich der erste Beobachter anmeldet. Weitere Beobachter teilen sich diesen `Subscriber`, solange er aktiv ist. Nachdem das Abonnement abgeschlossen wurde, ein Fehler aufgetreten ist oder sich alle Beobachter abgemeldet haben, ruft die nächste Anmeldung den Callback mit einem neuen `Subscriber` auf. Sie können einen `Subscriber` nicht direkt konstruieren.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements könnte sich ändern. Ein [Vorschlag, jedem Beobachter einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jedes Abonnement eine separate Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.

Der Produzent ruft `Subscriber.next()`, `Subscriber.error()` und `Subscriber.complete()` auf, um Werte und Benachrichtigungen an Beobachter zu senden. Die Beobachter legen über die entsprechenden Callbacks, die an [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) übergeben werden, fest, wie diese Benachrichtigungen behandelt werden. Der Produzent kann außerdem mit [`Subscriber.addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown) Callbacks zur Bereinigung registrieren.

## Beispiele

Weitere Beispiele finden Sie unter [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables).

### Einfaches Beispiel für `Observable()`

In diesem Beispiel geben wir die Zahlen von 1 bis 10 auf der Seite aus. Wenn der Produzent das Abonnement abschließt, beendet der Bereinigungs-Callback das Intervall. Anschließend zeigt der `complete`-Callback des Beobachters eine Abschlussmeldung an.

#### HTML

Das Markup enthält ein einzelnes `<p>`-Element zur Anzeige des Zählstands und einen {{htmlelement("button")}}, um den Zähler zu starten.

```html live-sample___basic-observer
<button>Start count</button>
<p></p>
```

#### JavaScript

Im JavaScript holen wir zunächst Referenzen auf die Elemente `<p>` und `<button>`. Anschließend registrieren wir einen Event-Listener für `<button>`, damit der Zähler beim Klicken startet:

```js live-sample___basic-observer
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.disabled = true;
  const observable = new Observable((subscriber) => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === 11) {
        subscriber.complete();
      } else {
        subscriber.next(i);
      }
      i++;
    }, 500);
    subscriber.addTeardown(() => {
      if (btn.textContent === "Start count") {
        btn.textContent = "Restart count";
      }
      clearInterval(interval);
      btn.disabled = false;
    });
  });

  observable.subscribe({
    next(value) {
      outputElem.textContent = value;
    },
    complete() {
      outputElem.textContent = "Count complete";
    },
  });
});
```

Innerhalb der Handler-Funktion für das `click`-Ereignis:

- Wir deaktivieren die Schaltfläche, damit ein weiterer Klick keinen überlappenden Zähler starten kann. Dann erstellen wir mit dem [`Observable()`](/de/docs/Web/API/Observable/Observable)-Konstruktor ein neues Observable. In dessen Callback-Funktion deklarieren wir eine Variable `i` mit dem Wert `1`. Anschließend prüfen wir mit einem Aufruf von [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) alle 500 Millisekunden den Wert von `i`. Hat der Wert `11` erreicht, rufen wir die Methode [`complete()`](/de/docs/Web/API/Subscriber/complete) auf, um das Abonnement abzuschließen. Andernfalls rufen wir [`next()`](/de/docs/Web/API/Subscriber/next) auf, um den aktuellen Zählstand an den Beobachter zu senden.
- Am Ende jedes Intervalldurchlaufs wird `i` um 1 erhöht.
- Außerdem registrieren wir mit [`addTeardown()`](/de/docs/Web/API/Subscriber/addTeardown) einen Bereinigungs-Callback. Darin ändern wir den Text auf der Schaltfläche zu „Zähler neu starten“, sofern er nicht bereits so lautet – das ist passender, wenn der Zähler schon einmal gelaufen ist. Vor allem aber beenden wir das Intervall mit [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval), wenn das Abonnement endet, und aktivieren die Schaltfläche für den nächsten Zähldurchlauf wieder.
- Schließlich melden wir uns durch einen Aufruf von [`Observable.subscribe()`](/de/docs/Web/API/Observable/subscribe) beim Observable an. Im Argument der Methode `subscribe()` definieren wir die Beobachter-Callbacks, die von den `Subscriber`-Methoden im vorherigen Block aufgerufen werden: Der `next()`-Callback gibt den an ihn übergebenen Wert (im obigen aufrufenden Code `i`) im `<p>`-Element aus, und der `complete()`-Callback gibt dort „Zählen abgeschlossen“ aus.

#### Ergebnis

Das Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("basic-observer", "", 80)}}

Klicken Sie auf die Schaltfläche. Alle 500 Millisekunden wird der aktuelle Zählstand auf der Seite ausgegeben. Nachdem `10` angezeigt wurde, schließt der nächste Intervall-Callback das Abonnement ab und zeigt „Zählen abgeschlossen“ an.

Der Bereinigungs-Callback ändert den Text der Schaltfläche zu „Zähler neu starten“ und aktiviert sie wieder, bevor der `complete()`-Callback des Beobachters ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Observables erstellen](/de/docs/Web/API/Observable_API/Creating_observables)
- [Erläuterung zu Observable](https://github.com/WICG/observable/blob/master/README.md)
