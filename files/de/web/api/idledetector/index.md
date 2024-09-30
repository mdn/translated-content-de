---
title: IdleDetector
slug: Web/API/IdleDetector
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Das **`IdleDetector`**-Interface der [Idle Detection API](/de/docs/Web/API/Idle_detection_api) bietet Methoden und Ereignisse zum Erkennen von Benutzeraktivitäten auf einem Gerät oder Bildschirm.

Dieses Interface erfordert einen sicheren Kontext.

{{InheritanceDiagram}}

## Konstruktor

- [`IdleDetector()`](/de/docs/Web/API/IdleDetector/IdleDetector) {{Experimental_Inline}}
  - : Erstellt ein neues `IdleDetector`-Objekt.

## Instanz-Eigenschaften

- [`IdleDetector.userState`](/de/docs/Web/API/IdleDetector/userState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der anzeigt, ob der Benutzer innerhalb des Schwellenwerts, der an `start()` übergeben wird, entweder mit dem Bildschirm oder dem Gerät interagiert hat, einer von `"active"` oder `"idle"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.
- [`IdleDetector.screenState`](/de/docs/Web/API/IdleDetector/screenState) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der anzeigt, ob der Bildschirm gesperrt ist, einer von `"locked"` oder `"unlocked"`. Dieses Attribut gibt `null` zurück, bevor `start()` aufgerufen wird.

## Ereignisse

- [`change`](/de/docs/Web/API/IdleDetector/change_event) {{Experimental_Inline}}
  - : Wird aufgerufen, wenn sich der Wert von `userState` oder `screenState` geändert hat.

## Statische Methoden

- [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn der Benutzer gewählt hat, ob er dem Ursprung Zugriff auf seinen Leerlaufstatus gewähren möchte. Wird mit `"granted"` bei Zustimmung und `"denied"` bei Ablehnung aufgelöst.

## Instanz-Methoden

- [`IdleDetector.start()`](/de/docs/Web/API/IdleDetector/start) {{Experimental_Inline}}
  - : Gibt ein `Promise` zurück, das aufgelöst wird, wenn der Detektor beginnt, auf Änderungen des Leerlaufstatus des Benutzers zu hören. `userState` und `screenState` erhalten Anfangswerte. Diese Methode nimmt ein optionales `options`-Objekt mit der `threshold` in Millisekunden, in denen Inaktivität gemeldet werden soll, und `signal` für ein `AbortSignal`, um den Leerlaufdetektor abzubrechen.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines Detektors und das Protokollieren von Änderungen am Leerlaufstatus des Benutzers. Ein Button wird verwendet, um die notwendige Benutzeraktivierung vor dem Anfordern der Berechtigung zu erhalten.

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
