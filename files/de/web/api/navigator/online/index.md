---
title: "Navigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen booleschen Wert zurück, wobei `true` online bedeutet und `false` offline. Die Eigenschaft sendet Updates, wann immer sich die Fähigkeit des Browsers ändert, eine Verbindung zum Netzwerk herzustellen. Das Update erfolgt, wenn der Benutzer Links folgt oder wenn ein Skript eine entfernte Seite anfordert. Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer auf Links klicken, kurz nachdem sie die Internetverbindung verloren haben.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er keine Verbindung zu einem lokalen Netzwerk (LAN) oder Router herstellen kann; alle anderen Bedingungen geben `true` zurück. Auch wenn Sie davon ausgehen können, dass der Browser offline ist, wenn er `false` zurückgibt, können Sie nicht davon ausgehen, dass ein `true`-Wert unbedingt bedeutet, dass der Browser auf das Internet zugreifen kann. Es könnte zu falschen Positiven kommen, wie in Fällen, in denen der Computer eine Virtualisierungssoftware ausführt, die virtuelle Ethernet-Adapter hat, die immer „verbunden“ sind. Wenn Sie den Online-Status des Browsers wirklich feststellen möchten, sollten Sie zusätzliche Mittel zur Prüfung entwickeln.

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false`-Wert. Bis Firefox 41 gaben alle anderen Bedingungen `true` zurück; Tests des tatsächlichen Verhaltens auf Nightly 68 unter Windows zeigen, dass er nur nach einer LAN-Verbindung sucht, ähnlich wie Chrome und Safari, was zu falschen Positiven führen kann.

Sie können Änderungen im Netzwerkstatus sehen, indem Sie die [`online`](/de/docs/Web/API/Window/online_event) und [`offline`](/de/docs/Web/API/Window/offline_event) Ereignisse abhören.

## Wert

Ein Boolescher Wert.

## Beispiele

### Grundlegende Nutzung

Um zu überprüfen, ob Sie online sind, fragen Sie `window.navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, wird das obige Beispiel immer als `false`/`undefined` ausgegeben.

### Überwachung von Änderungen im Netzwerkstatus

Um Änderungen im Netzwerkstatus zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `window.online` und `window.offline` zu hören, wie im folgenden Beispiel:

```js
window.addEventListener("offline", (e) => {
  console.log("offline");
});

window.addEventListener("online", (e) => {
  console.log("online");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
