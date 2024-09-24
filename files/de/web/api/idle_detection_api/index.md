---
title: Leerlauf-Detektions-API
slug: Web/API/Idle_Detection_API
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}{{SeeCompatTable}}

Die Leerlauf-Detektions-API bietet eine Möglichkeit, den Leerlaufstatus des Benutzers zu erkennen - aktiv, inaktiv und gesperrt - und benachrichtigt zu werden, wenn sich der Leerlaufstatus ändert, ohne dass ein Skript Abfragen durchführen muss.

## Konzepte und Verwendung

Native Anwendungen und Browser-Erweiterungen verwenden die Leerlauferkennung, um Benutzererfahrungen darauf zu basieren, wann ein Benutzer mit einem Gerät interagiert. Beispielsweise können Chat-Anwendungen anderen Benutzern einer Anwendung anzeigen, ob jemand verfügbar ist. Andere Anwendungen könnten wählen, Benachrichtigungen nur dann zu zeigen, wenn ein Benutzer mit der App interagiert. Eine Webanwendung könnte diese API für ähnliche Anwendungsfälle verwenden. Darüber hinaus könnte eine progressive Web-App die Leerlauferkennung verwenden, um ein Service-Worker-Update auszulösen, wenn die App nicht genutzt wird.

## Schnittstellen

- {{domxref("IdleDetector")}} {{Experimental_Inline}}
  - : Bietet Methoden und Ereignisse zur Erkennung der Benutzeraktivität auf einem Gerät oder Bildschirm.

## Beispiele

Das folgende Beispiel zeigt, wie ein Detektor erstellt wird und Änderungen im Leerlaufzustand des Benutzers protokolliert werden. Eine Schaltfläche wird verwendet, um die notwendige Benutzeraktivierung zu erhalten, bevor die Erlaubnis angefordert wird.

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
