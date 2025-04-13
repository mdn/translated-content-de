---
title: Network Information API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 1fae6a1db8be34bc73fb9d1e0fb058c253045853
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

Die **Network Information API** bietet Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'wifi', 'cellular', etc.). Dies kann verwendet werden, um basierend auf der Verbindung des Benutzers hochauflösende oder niedrigauflösende Inhalte auszuwählen.

Die Schnittstelle besteht aus einem einzigen [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt, welches durch die [`Navigator.connection`](/de/docs/Web/API/Navigator/connection)-Eigenschaft oder die [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection)-Eigenschaft zurückgegeben wird.

## Schnittstellen

- [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)
  - : Bietet Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk verwendet, und ermöglicht es Skripten, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert. Die `NetworkInformation`-Schnittstelle kann nicht instanziiert werden. Sie wird stattdessen über die [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle oder die [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle aufgerufen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) {{ReadOnlyInline}}
  - : Bietet ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt, das Informationen über die Netzwerkverbindung eines Geräts enthält.

## Beispiele

### Verbindungänderungen erkennen

Dieses Beispiel überwacht Änderungen an der Verbindung des Benutzers.

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `Connection type changed from ${type} to ${navigator.connection.effectiveType}`,
  );
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener("change", updateConnectionStatus);
```

### Große Ressourcen vorladen

Das Verbindungsobjekt ist nützlich, um zu entscheiden, ob Ressourcen vorab geladen werden sollen, die viel Bandbreite oder Speicher benötigen. Dieses Beispiel würde kurz nach dem Laden der Seite aufgerufen werden, um eine Verbindung zu überprüfen, bei der das Vorladen eines Videos möglicherweise nicht wünschenswert ist. Wenn eine Mobilfunkverbindung erkannt wird, wird die `preloadVideo`-Flag auf `false` gesetzt. Zur Vereinfachung und Klarheit testet dieses Beispiel nur für einen Verbindungstyp. Ein realer Anwendungsfall würde wahrscheinlich eine Switch-Anweisung oder eine andere Methode verwenden, um alle möglichen Werte von [`NetworkInformation.type`](/de/docs/Web/API/NetworkInformation/type) zu überprüfen. Unabhängig vom `type`-Wert können Sie eine Schätzung der Verbindungsgeschwindigkeit über die [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType)-Eigenschaft erhalten.

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
