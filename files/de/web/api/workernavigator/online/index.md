---
title: "WorkerNavigator: onLine Eigenschaft"
short-title: onLine
slug: Web/API/WorkerNavigator/onLine
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft liefert einen booleschen Wert, wobei `true` online bedeutet und `false` offline. Die Eigenschaft sendet Aktualisierungen, wenn sich die Fähigkeit des Browsers, eine Netzwerkverbindung herzustellen, ändert. Diese Aktualisierung erfolgt, wenn der Benutzer Links folgt oder wenn ein Skript eine entfernte Seite anfordert.

Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer kurz nach dem Verlust der Internetverbindung auf Links klicken.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er nicht in der Lage ist, eine Verbindung zu einem lokalen Netzwerk (LAN) oder einem Router herzustellen; alle anderen Bedingungen geben `true` zurück. Während Sie also annehmen können, dass der Browser offline ist, wenn er einen `false`-Wert zurückgibt, können Sie nicht sicher sein, dass ein `true`-Wert unbedingt bedeutet, dass der Browser auf das Internet zugreifen kann. Es könnten falsch-positive Ergebnisse wie in den Fällen auftreten, in denen der Computer eine Virtualisierungssoftware ausführt, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Wenn Sie also den Online-Status des Browsers wirklich bestimmen möchten, sollten Sie zusätzliche Mittel zur Überprüfung entwickeln. Um mehr zu erfahren, lesen Sie den Artikel von 2011, [Working Off the Grid](https://developer.chrome.com/docs/workbox/service-worker-overview/).

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false`-Wert.

## Wert

`online` ist ein boolescher Wert `true` oder `false`.

## Beispiele

### Grundlegende Verwendung

Um zu überprüfen, ob Sie in einem Worker online sind, fragen Sie `navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, ergibt das obige Beispiel immer `false`/`undefined`.

### Änderungen im Netzwerkstatus beobachten

Um Änderungen im Netzwerkstatus zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um die Ereignisse `online` und `offline` zu überwachen, wie im folgenden Beispiel:

```js
addEventListener("offline", (e) => {
  console.log("offline");
});

addEventListener("online", (e) => {
  console.log("online");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
