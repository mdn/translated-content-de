---
title: "WorkerNavigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/WorkerNavigator/onLine
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen booleschen Wert zurück, wobei `true` online und `false` offline bedeutet. Die Eigenschaft sendet Aktualisierungen, wann immer sich die Fähigkeit des Browsers, sich mit dem Netzwerk zu verbinden, ändert. Die Aktualisierung erfolgt, wenn der Benutzer Links folgt oder ein Skript eine entfernte Seite anfordert.

Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer auf Links klicken, kurz nachdem sie die Internetverbindung verloren haben.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er nicht in der Lage ist, eine Verbindung zu einem lokalen Netzwerk (LAN) oder einem Router herzustellen; alle anderen Bedingungen geben `true` zurück. Daher können Sie zwar davon ausgehen, dass der Browser offline ist, wenn ein `false`-Wert zurückgegeben wird, Sie können jedoch nicht annehmen, dass ein `true`-Wert notwendigerweise bedeutet, dass der Browser auf das Internet zugreifen kann. Es könnten Fehlalarme auftreten, beispielsweise in Fällen, in denen der Computer eine Virtualisierungssoftware ausführt, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Daher sollten Sie, wenn Sie den Online-Status des Browsers wirklich bestimmen möchten, zusätzliche Mittel zur Überprüfung entwickeln. Um mehr zu erfahren, siehe den Artikel von 2011, [Working Off the Grid](https://developer.chrome.com/docs/workbox/service-worker-overview/).

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false`-Wert.

## Wert

`online` ist ein boolesches `true` oder `false`.

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

### Lauschen auf Änderungen im Netzwerkstatus

Um Änderungen im Netzwerkzustand zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `online` und `offline` zu lauschen, wie im folgenden Beispiel:

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
