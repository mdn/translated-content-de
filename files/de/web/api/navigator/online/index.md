---
title: "Navigator: onLine-Eigenschaft"
short-title: onLine
slug: Web/API/Navigator/onLine
l10n:
  sourceCommit: 0b62e40a6e9755d40bb470a4542673b6ac2f06aa
---

{{ApiRef("HTML DOM")}}

Die **`onLine`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt an, ob das Gerät mit dem Netzwerk verbunden ist, wobei `true` online und `false` offline bedeutet. Der Wert der Eigenschaft ändert sich, nachdem der Browser seine Netzwerkverbindung überprüft hat, normalerweise wenn der Benutzer Links folgt oder ein Skript eine remote Seite anfordert. Zum Beispiel sollte die Eigenschaft `false` zurückgeben, wenn Benutzer Links anklicken, kurz nachdem sie ihre Internetverbindung verloren haben. Wenn sich ihr Wert ändert, wird ein [`online`](/de/docs/Web/API/Window/online_event)- oder [`offline`](/de/docs/Web/API/Window/offline_event)-Ereignis im `window` ausgelöst.

Browser und Betriebssysteme verwenden unterschiedliche Heuristiken, um zu bestimmen, ob das Gerät online ist. Allgemein wird eine Verbindung zum LAN als online betrachtet, auch wenn das LAN keinen Internetzugang hat. Zum Beispiel könnte der Computer eine Virtualisierungssoftware ausführen, die virtuelle Ethernet-Adapter hat, die immer "verbunden" sind. Unter Windows wird der Online-Status dadurch bestimmt, ob das System einen Microsoft-Heimserver erreichen kann, was durch Firewalls oder VPNs blockiert sein könnte, selbst wenn der Computer Internetzugang hat. Deshalb ist diese Eigenschaft von Natur aus unzuverlässig, und Sie sollten keine Funktionen deaktivieren, basierend auf dem Online-Status, sondern nur Hinweise geben, wenn der Benutzer scheinbar offline ist.

## Wert

Ein boolean.

## Beispiele

### Grundlegende Nutzung

Um zu überprüfen, ob Sie online sind, rufen Sie `window.navigator.onLine` ab, wie im folgenden Beispiel:

```js
if (navigator.onLine) {
  console.log("online");
} else {
  console.log("offline");
}
```

Wenn der Browser `navigator.onLine` nicht unterstützt, gibt das obige Beispiel immer `false`/`undefined` zurück.

### Änderungen des Netzwerkstatus überwachen

Um Änderungen des Netzwerkstatus zu sehen, verwenden Sie [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener), um auf die Ereignisse `window.online` und `window.offline` zu hören, wie im folgenden Beispiel:

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
