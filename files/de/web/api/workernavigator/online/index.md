---
title: "WorkerNavigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/WorkerNavigator/onLine
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`onLine`** der Schnittstelle [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen booleschen Wert zurück: `true` bedeutet online und `false` bedeutet offline. Der Wert wird aktualisiert, wenn sich die Fähigkeit des Browsers ändert, eine Verbindung zum Netzwerk herzustellen. Eine Aktualisierung erfolgt, wenn Benutzer Links folgen oder ein Skript eine Remote-Seite anfordert.

Beispielsweise sollte die Eigenschaft `false` zurückgeben, wenn Benutzer kurz nach dem Verlust der Internetverbindung auf Links klicken.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari gilt der Browser als offline, wenn er keine Verbindung zu einem lokalen Netzwerk (LAN) oder einem Router herstellen kann; unter allen anderen Bedingungen wird `true` zurückgegeben. Wenn der Wert `false` ist, können Sie daher davon ausgehen, dass der Browser offline ist. Ein Wert von `true` bedeutet jedoch nicht zwangsläufig, dass der Browser auf das Internet zugreifen kann. Es kann zu falsch positiven Ergebnissen kommen, etwa wenn auf dem Computer eine Virtualisierungssoftware mit virtuellen Ethernet-Adaptern ausgeführt wird, die immer „verbunden“ sind. Wenn Sie den Online-Status des Browsers zuverlässig bestimmen möchten, sollten Sie daher zusätzliche Möglichkeiten zur Überprüfung entwickeln. Weitere Informationen finden Sie im Artikel [Working Off the Grid](https://developer.chrome.com/docs/workbox/service-worker-overview/) aus dem Jahr 2011.

Wenn Sie Firefox in den Offline-Modus schalten, wird `false` zurückgegeben.

## Wert

`online` ist ein boolescher Wert: `true` oder `false`.

## Beispiele

### Grundlegende Verwendung

Um in einem Worker zu prüfen, ob Sie online sind, fragen Sie `navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, ergibt das obige Beispiel immer `false`/`undefined`.

### Auf Änderungen des Netzwerkstatus reagieren

Um Änderungen des Netzwerkstatus zu erkennen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `online` und `offline` zu reagieren, wie im folgenden Beispiel:

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
