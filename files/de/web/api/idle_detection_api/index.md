---
title: Idle Detection API
slug: Web/API/Idle_Detection_API
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}

Die Idle Detection API bietet eine Möglichkeit, um den Leerlaufstatus des Benutzers zu erkennen, speziell aktiv, inaktiv und gesperrt, und um über Änderungen des Leerlaufstatus ohne Abfragen von einem Skript benachrichtigt zu werden.

## Konzepte und Verwendung

Native Anwendungen und Browsererweiterungen nutzen Leerlauferkennung, basierend auf der Benutzererfahrung, wenn ein Benutzer mit einem Gerät interagiert. Zum Beispiel können Chat-Anwendungen anderen Nutzern einer Anwendung anzeigen, ob jemand verfügbar ist. Andere Anwendungen könnten sich entscheiden, Benachrichtigungen nur anzuzeigen, wenn ein Benutzer mit der App interagiert. Eine Webanwendung könnte diese API für ähnliche Anwendungsfälle nutzen. Zudem könnte eine progressive Web-App die Leerlauferkennung verwenden, um ein Service Worker-Update auszulösen, wenn die App nicht genutzt wird.

## Schnittstellen

- [`IdleDetector`](/de/docs/Web/API/IdleDetector) {{Experimental_Inline}}
  - : Bietet Methoden und Ereignisse zur Erkennung der Benutzeraktivität auf einem Gerät oder Bildschirm.

## Beispiele

Das folgende Beispiel zeigt, wie man einen Detektor erstellt und Änderungen des Leerlaufstatus des Benutzers protokolliert. Eine Schaltfläche wird verwendet, um die notwendige Benutzeraktivierung vor der Anforderung von Berechtigungen zu erhalten.

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
