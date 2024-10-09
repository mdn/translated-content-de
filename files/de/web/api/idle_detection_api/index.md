---
title: Idle Detection API
slug: Web/API/Idle_Detection_API
l10n:
  sourceCommit: a28ce291736be0291feb822083b92c6f4385d57c
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die Idle Detection API bietet eine Möglichkeit, den Leerlaufstatus des Benutzers zu erkennen: aktiv, idle und gesperrt, und benachrichtigt über Änderungen des Leerlaufstatus, ohne dass ein Skript Polling durchführen muss.

## Konzepte und Verwendung

Native Anwendungen und Browser-Erweiterungen nutzen die Leerlauferkennung, um Benutzererfahrungen darauf abzustimmen, wann ein Benutzer mit einem Gerät interagiert. Zum Beispiel können Chat-Anwendungen anderen Benutzern einer Anwendung anzeigen, ob jemand verfügbar ist. Andere Anwendungen könnten Benachrichtigungen nur anzeigen, wenn ein Benutzer mit der App interagiert. Eine Webanwendung könnte diese API für ähnliche Anwendungsfälle verwenden. Darüber hinaus könnte eine progressive Web-App die Leerlauferkennung nutzen, um ein Service-Worker-Update auszulösen, wenn die App nicht verwendet wird.

## Schnittstellen

- [`IdleDetector`](/de/docs/Web/API/IdleDetector) {{Experimental_Inline}}
  - : Bietet Methoden und Ereignisse zur Erkennung von Benutzeraktivitäten auf einem Gerät oder Bildschirm.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines Detektors und das Protokollieren von Änderungen des Leerlaufstatus des Benutzers. Ein Button wird verwendet, um die notwendige Benutzeraktivierung zu erhalten, bevor die Erlaubnis angefordert wird.

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
