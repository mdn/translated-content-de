---
title: Netzwerkinformations-API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

Die **Netzwerkinformations-API** bietet Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'wifi', 'cellular', etc.). Dies kann verwendet werden, um basierend auf der Verbindung des Benutzers hochauflösende oder niedrigauflösende Inhalte auszuwählen.

Das Interface besteht aus einem einzigen {{domxref("NetworkInformation")}}-Objekt, dessen Instanz durch die {{domxref("Navigator.connection")}}-Eigenschaft oder die {{domxref("WorkerNavigator.connection")}}-Eigenschaft zurückgegeben wird.

## Schnittstellen

- {{domxref("NetworkInformation")}}
  - : Bietet Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk verwendet, und ermöglicht es Skripten, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert. Das `NetworkInformation`-Interface kann nicht instanziiert werden. Stattdessen wird darauf über das {{domxref("Navigator")}}-Interface oder das {{domxref("WorkerNavigator")}}-Interface zugegriffen.

### Erweiterungen anderer Schnittstellen

- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("NetworkInformation")}}-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- {{domxref("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : Bietet ein {{domxref("NetworkInformation")}}-Objekt, das Informationen über die Netzwerkverbindung eines Geräts enthält.

## Beispiele

### Erkennung von Verbindungsänderungen

Dieses Beispiel überwacht Änderungen an der Benutzerverbindung.

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

Das Verbindungsobjekt ist nützlich, um zu entscheiden, ob Ressourcen vorab geladen werden sollen, die große Mengen an Bandbreite oder Speicher verbrauchen. Dieses Beispiel wird kurz nach dem Laden der Seite aufgerufen, um eine Verbindung zu überprüfen, bei der das Vorladen eines Videos möglicherweise nicht wünschenswert ist. Wenn eine Mobilfunkverbindung gefunden wird, wird das `preloadVideo`-Flag auf `false` gesetzt. Zur Vereinfachung und Klarheit testet dieses Beispiel nur einen Verbindungstyp. Ein realer Anwendungsfall würde wahrscheinlich eine switch-Anweisung oder eine andere Methode verwenden, um alle möglichen Werte von {{domxref("NetworkInformation.type")}} zu überprüfen. Unabhängig vom `type`-Wert können Sie durch die {{domxref("NetworkInformation.effectiveType")}}-Eigenschaft eine Schätzung der Verbindungsgeschwindigkeit erhalten.

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
