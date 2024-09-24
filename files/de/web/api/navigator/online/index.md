---
title: "Navigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

Gibt den Online-Status des Browsers zurück. Die Eigenschaft gibt einen Boolean-Wert zurück, wobei `true` online und `false` offline bedeutet. Die Eigenschaft sendet Aktualisierungen, wenn sich die Fähigkeit des Browsers, eine Verbindung zum Netzwerk herzustellen, ändert. Die Aktualisierung erfolgt, wenn der Benutzer Links folgt oder wenn ein Skript eine entfernte Seite anfordert. Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer Links anklicken, kurz nachdem sie die Internetverbindung verloren haben.

Browser implementieren diese Eigenschaft unterschiedlich.

In Chrome und Safari ist der Browser offline, wenn er keine Verbindung zu einem lokalen Netzwerk (LAN) oder einem Router herstellen kann; alle anderen Bedingungen geben `true` zurück. Während Sie also annehmen können, dass der Browser offline ist, wenn er einen `false` Wert zurückgibt, können Sie nicht davon ausgehen, dass ein `true` Wert notwendigerweise bedeutet, dass der Browser auf das Internet zugreifen kann. Es könnten Fehlalarme wie in Fällen auftreten, in denen der Computer eine Virtualisierungssoftware betreibt, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Wenn Sie also wirklich den Online-Status des Browsers bestimmen möchten, sollten Sie zusätzliche Methoden zur Überprüfung entwickeln.

In Firefox sendet das Umschalten des Browsers in den Offline-Modus einen `false` Wert. Bis Firefox 41 gaben alle anderen Bedingungen einen `true` Wert zurück; Tests des tatsächlichen Verhaltens in Nightly 68 auf Windows zeigen, dass es nur nach einer LAN-Verbindung sucht, wie Chrome und Safari, wodurch Fehlalarme entstehen.

Sie können Änderungen im Netzwerkstatus sehen, indem Sie die [`online`](/de/docs/Web/API/Window/online_event) und [`offline`](/de/docs/Web/API/Window/offline_event) Ereignisse abhören.

## Wert

Ein Boolean.

## Beispiele

### Grundlegende Verwendung

Um zu überprüfen, ob Sie online sind, fragen Sie `window.navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, wird das obige Beispiel immer als `false`/`undefined` ausgegeben.

### Änderungen im Netzwerkstatus beobachten

Um Änderungen im Netzwerkstatus zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um die Ereignisse `window.online` und `window.offline` zu überwachen, wie im folgenden Beispiel:

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
