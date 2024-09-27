---
title: "Navigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen booleschen Wert zurück, wobei `true` online bedeutet und `false` offline. Die Eigenschaft sendet Aktualisierungen, wenn sich die Fähigkeit des Browsers, sich mit dem Netzwerk zu verbinden, ändert. Die Aktualisierung erfolgt, wenn der Benutzer Links folgt oder wenn ein Skript eine entfernte Seite anfordert. Beispielsweise sollte die Eigenschaft `false` zurückgeben, wenn Benutzer auf Links klicken, kurz nachdem sie die Internetverbindung verloren haben.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er sich nicht mit einem lokalen Netzwerk (LAN) oder einem Router verbinden kann; unter allen anderen Bedingungen wird `true` zurückgegeben. Während Sie also davon ausgehen können, dass der Browser offline ist, wenn er einen `false`-Wert zurückgibt, können Sie nicht davon ausgehen, dass ein wahrer Wert notwendigerweise bedeutet, dass der Browser auf das Internet zugreifen kann. Sie könnten Fehlalarme erhalten, z. B. in Fällen, in denen der Computer eine Virtualisierungssoftware ausführt, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Daher sollten Sie, wenn Sie den Online-Status des Browsers wirklich bestimmen möchten, zusätzliche Methoden zur Überprüfung entwickeln.

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false`-Wert. Bis Firefox 41 gaben alle anderen Bedingungen einen `true`-Wert zurück; Tests des tatsächlichen Verhaltens auf Nightly 68 unter Windows zeigen, dass es nur nach LAN-Verbindung sucht, ähnlich wie Chrome und Safari, und somit Fehlalarme gibt.

Sie können Änderungen im Netzwerkstatus sehen, indem Sie den [`online`](/de/docs/Web/API/Window/online_event) und [`offline`](/de/docs/Web/API/Window/offline_event) Ereignissen lauschen.

## Wert

Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Um zu überprüfen, ob Sie online sind, fragen Sie `window.navigator.onLine` ab, wie im folgenden Beispiel gezeigt:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, liefert das obige Beispiel immer `false`/`undefined`.

### Veränderungen im Netzwerkstatus überwachen

Um Veränderungen im Netzwerkstatus zu sehen, verwenden Sie `addEventListener`, um die Ereignisse auf `window.online` und `window.offline` wie im folgenden Beispiel zu überwachen:

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
