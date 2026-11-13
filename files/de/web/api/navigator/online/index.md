---
title: "Navigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`onLine`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt an, ob das Gerät mit dem Netzwerk verbunden ist: `true` bedeutet online und `false` bedeutet offline. Der Wert der Eigenschaft ändert sich, nachdem der Browser seine Netzwerkverbindung überprüft hat – normalerweise, wenn Benutzer einem Link folgen oder ein Skript eine entfernte Seite anfordert. Beispielsweise sollte die Eigenschaft `false` zurückgeben, wenn Benutzer kurz nach dem Verlust ihrer Internetverbindung auf Links klicken. Wenn sich der Wert ändert, wird auf `window` ein [`online`](/de/docs/Web/API/Window/online_event)- oder [`offline`](/de/docs/Web/API/Window/offline_event)-Ereignis ausgelöst.

Browser und Betriebssysteme verwenden unterschiedliche Heuristiken, um festzustellen, ob das Gerät online ist. Im Allgemeinen gilt eine Verbindung zu einem LAN als online, auch wenn das LAN keinen Internetzugang hat. Beispielsweise kann auf dem Computer eine Virtualisierungssoftware mit virtuellen Ethernet-Adaptern ausgeführt werden, die immer „verbunden“ sind. Unter Windows hängt der Online-Status davon ab, ob ein Microsoft-Server erreichbar ist. Der Zugriff auf diesen Server kann durch Firewalls oder VPNs blockiert sein, selbst wenn der Computer Internetzugang hat. Diese Eigenschaft ist daher grundsätzlich unzuverlässig. Sie sollten Funktionen nicht aufgrund des Online-Status deaktivieren, sondern lediglich Hinweise geben, wenn der Benutzer möglicherweise offline ist.

## Wert

Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Um zu prüfen, ob Sie online sind, fragen Sie `window.navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, ergibt das obige Beispiel immer `false`/`undefined`.

### Auf Änderungen des Netzwerkstatus reagieren

Um Änderungen des Netzwerkstatus zu erkennen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `window.online` und `window.offline` zu reagieren, wie im folgenden Beispiel:

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
