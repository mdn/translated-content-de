---
title: "WorkerNavigator: onLine Eigenschaft"
short-title: onLine
slug: Web/API/WorkerNavigator/onLine
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen booleschen Wert zurück, wobei `true` für online und `false` für offline steht. Die Eigenschaft sendet Aktualisierungen, wenn sich die Fähigkeit des Browsers, eine Verbindung zum Netzwerk herzustellen, ändert. Die Aktualisierung erfolgt, wenn der Benutzer Links folgt oder ein Skript eine entfernte Seite anfordert.

Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer Links anklicken, kurz nachdem sie die Internetverbindung verloren haben.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er keine Verbindung zu einem lokalen Netzwerk (LAN) oder einem Router herstellen kann; alle anderen Bedingungen geben `true` zurück. Während Sie also davon ausgehen können, dass der Browser offline ist, wenn er einen `false`-Wert zurückgibt, können Sie nicht davon ausgehen, dass ein true-Wert notwendigerweise bedeutet, dass der Browser auf das Internet zugreifen kann. Es könnte zu Fehlalarmen kommen, wie in Fällen, in denen der Computer eine Virtualisierungssoftware ausführt, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Daher sollten Sie, wenn Sie wirklich den Online-Status des Browsers bestimmen möchten, zusätzliche Mittel zur Überprüfung entwickeln. Um mehr zu erfahren, lesen Sie den Artikel von 2011, [Working Off the Grid](https://developer.chrome.com/docs/workbox/service-worker-overview/).

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false`-Wert.

## Wert

`online` ist ein boolescher `true` oder `false`.

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

Wenn der Browser `navigator.onLine` nicht unterstützt, wird das obige Beispiel immer als `false`/`undefined` ausgegeben.

### Änderungen im Netzwerkstatus überwachen

Um Änderungen im Netzwerkstatus zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `online` und `offline` zu hören, wie im folgenden Beispiel:

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
