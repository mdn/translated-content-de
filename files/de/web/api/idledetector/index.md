---
title: IdleDetector
slug: Web/API/IdleDetector
l10n:
  sourceCommit: a28ce291736be0291feb822083b92c6f4385d57c
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`IdleDetector`**-Interface der [Idle Detection API](/de/docs/Web/API/Idle_detection_api) bietet Methoden und Ereignisse, um Benutzeraktivität auf einem Gerät oder Bildschirm zu erkennen.

Dieses Interface erfordert einen sicheren Kontext.

{{InheritanceDiagram}}

## Konstruktor

- [`IdleDetector()`](/de/docs/Web/API/IdleDetector/IdleDetector) {{Experimental_Inline}}
  - : Erstellt ein neues `IdleDetector`-Objekt.

## Instanzeigenschaften

- [`IdleDetector.userState`](/de/docs/Web/API/IdleDetector/userState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob der Benutzer mit dem Bildschirm oder dem Gerät innerhalb der an `start()` übergebenen Schwelle interagiert hat, entweder `"active"` oder `"idle"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.
- [`IdleDetector.screenState`](/de/docs/Web/API/IdleDetector/screenState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob der Bildschirm gesperrt ist, entweder `"locked"` oder `"unlocked"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.

## Ereignisse

- [`change`](/de/docs/Web/API/IdleDetector/change_event) {{Experimental_Inline}}
  - : Wird aufgerufen, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Statische Methoden

- [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn der Benutzer gewählt hat, ob er dem Ursprung Zugriff auf seinen Leerlaufzustand gewähren möchte. Wird mit `"granted"` bei Annahme und `"denied"` bei Ablehnung aufgelöst.

## Instanzmethoden

- [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) {{Experimental_Inline}}
  - : Gibt ein `Promise` zurück, das aufgelöst wird, wenn der Detektor beginnt, Änderungen im Leerlaufzustand des Benutzers zu überwachen. `userState` und `screenState` erhalten Anfangswerte. Diese Methode nimmt ein optionales `options`-Objekt mit der `threshold` in Millisekunden, in der Inaktivität gemeldet werden soll, und `signal` für einen `AbortSignal`, um den Leerlaufdetektor abzubrechen.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines Detektors und das Protokollieren von Änderungen am Leerlaufzustand des Benutzers. Ein Button wird verwendet, um die notwendige Benutzeraktivierung vor dem Anfordern der Berechtigung zu erhalten.

```js
const controller = new AbortController();
const signal = controller.signal;

startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }

  try {
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener("change", () => {
      const userState = idleDetector.userState;
      const screenState = idleDetector.screenState;
      console.log(`Idle change: ${userState}, ${screenState}.`);
    });

    await idleDetector.start({
      threshold: 60_000,
      signal,
    });
    console.log("IdleDetector is active.");
  } catch (err) {
    // Deal with initialization errors like permission denied,
    // running outside of top-level frame, etc.
    console.error(err.name, err.message);
  }
});

stopButton.addEventListener("click", () => {
  controller.abort();
  console.log("IdleDetector is stopped.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
