---
title: IdleDetector
slug: Web/API/IdleDetector
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`IdleDetector`**-Schnittstelle der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) stellt Methoden und Ereignisse bereit, um die Aktivität von Benutzern an einem Gerät oder Bildschirm zu erkennen.

Diese Schnittstelle erfordert einen sicheren Kontext.

{{InheritanceDiagram}}

## Konstruktor

- [`IdleDetector()`](/de/docs/Web/API/IdleDetector/IdleDetector) {{Experimental_Inline}}
  - : Erstellt ein neues `IdleDetector`-Objekt.

## Instanzeigenschaften

- [`IdleDetector.userState`](/de/docs/Web/API/IdleDetector/userState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob innerhalb des an `start()` übergebenen Schwellenwerts eine Interaktion mit dem Bildschirm oder dem Gerät stattgefunden hat: `"active"` oder `"idle"`. Vor dem Aufruf von `start()` gibt diese Eigenschaft `null` zurück.
- [`IdleDetector.screenState`](/de/docs/Web/API/IdleDetector/screenState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob der Bildschirm gesperrt ist: `"locked"` oder `"unlocked"`. Vor dem Aufruf von `start()` gibt diese Eigenschaft `null` zurück.

## Statische Methoden

- [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das erfüllt wird, sobald die Benutzerin oder der Benutzer entschieden hat, ob der Origin Zugriff auf den Inaktivitätsstatus erhalten soll. Bei Zustimmung wird es mit `"granted"`, bei Ablehnung mit `"denied"` erfüllt.

## Instanzmethoden

- [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) {{Experimental_Inline}}
  - : Gibt ein `Promise` zurück, das erfüllt wird, sobald der Detektor beginnt, Änderungen des Inaktivitätsstatus zu überwachen. `userState` und `screenState` erhalten Anfangswerte. Die Methode akzeptiert ein optionales `options`-Objekt mit `threshold` für den Schwellenwert in Millisekunden, ab dem Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, mit dem sich der Detektor abbrechen lässt.

## Ereignisse

- [`change`](/de/docs/Web/API/IdleDetector/change_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der Wert von `userState` oder `screenState` ändert.

## Beispiele

Das folgende Beispiel zeigt, wie ein Detektor erstellt und Änderungen des Inaktivitätsstatus protokolliert werden. Eine Schaltfläche sorgt für die erforderliche Benutzeraktivierung, bevor die Berechtigung angefordert wird.

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
