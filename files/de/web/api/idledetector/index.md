---
title: IdleDetector
slug: Web/API/IdleDetector
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`IdleDetector`**-Schnittstelle der {{domxref('idle_detection_api','Idle Detection API','','true')}} stellt Methoden und Ereignisse zur Verfügung, um Benutzeraktivitäten auf einem Gerät oder Bildschirm zu erkennen.

Diese Schnittstelle erfordert einen sicheren Kontext.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("IdleDetector.IdleDetector", "IdleDetector()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `IdleDetector`-Objekt.

## Instanz-Eigenschaften

- {{domxref("IdleDetector.userState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der anzeigt, ob der Benutzer innerhalb der Schwelle, die `start()` übergeben wurde, mit dem Bildschirm oder dem Gerät interagiert hat, entweder `"active"` oder `"idle"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.
- {{domxref("IdleDetector.screenState")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der anzeigt, ob der Bildschirm gesperrt ist, entweder `"locked"` oder `"unlocked"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.

## Ereignisse

- {{domxref("IdleDetector.change_event", "change")}} {{Experimental_Inline}}
  - : Wird aufgerufen, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Statische Methoden

- [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn der Benutzer entschieden hat, ob er dem Ursprung Zugriff auf seinen Ruhezustand gewähren möchte. Wird mit `"granted"` bei Akzeptanz und `"denied"` bei Ablehnung aufgelöst.

## Instanz-Methoden

- {{domxref("IdleDetector.start()")}} {{Experimental_Inline}}
  - : Gibt ein `Promise` zurück, das aufgelöst wird, wenn der Detector beginnt, Änderungen im Ruhezustand des Benutzers zu überwachen. `userState` und `screenState` erhalten Anfangswerte. Diese Methode nimmt ein optionales `options`-Objekt mit der `threshold` in Millisekunden, ab der Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, um den Leerlauf-Detektor abzubrechen.

## Beispiele

Das folgende Beispiel zeigt das Erstellen eines Detektors und das Protokollieren von Änderungen des Ruhezustands des Benutzers. Ein Button wird verwendet, um die notwendige Benutzeraktivierung zu erhalten, bevor die Erlaubnis angefordert wird.

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
