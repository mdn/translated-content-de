---
title: Network Information API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

Die **Network Information API** bietet Informationen über die Verbindung des Systems in Bezug auf den allgemeinen Verbindungstyp (z.B. 'wifi', 'cellular' usw.).
Diese Informationen können verwendet werden, um hochauflösende oder niedrigauflösende Inhalte basierend auf der Verbindung des Nutzers auszuwählen.

Die Schnittstelle besteht aus einem einzelnen [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt, dessen Instanz durch die Eigenschaft [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) oder die Eigenschaft [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) zurückgegeben wird.

## Schnittstellen

- [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)
  - : Bietet Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk nutzt, und ermöglicht es Skripten, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert. Das `NetworkInformation`-Interface kann nicht instanziiert werden. Stattdessen wird es über das [`Navigator`](/de/docs/Web/API/Navigator)-Interface oder das [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interface aufgerufen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.connection`](/de/docs/Web/API/Navigator/connection) {{ReadOnlyInline}}
  - : Gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Netzwerkverbindung eines Geräts enthält.
- [`WorkerNavigator.connection`](/de/docs/Web/API/WorkerNavigator/connection) {{ReadOnlyInline}}
  - : Bietet ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt, das Informationen über die Netzwerkverbindung eines Geräts enthält.

## Beispiele

### Verbindungstypänderungen erkennen

Dieses Beispiel beobachtet Änderungen an der Verbindung des Nutzers.

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

Das `connection`-Objekt ist nützlich für die Entscheidung, ob Ressourcen vorgeladen werden sollen, die große Mengen an Bandbreite oder Speicher beanspruchen. Dieses Beispiel würde kurz nach dem Laden der Seite aufgerufen, um nach einem Verbindungstyp zu prüfen, bei dem das Vorladen eines Videos möglicherweise nicht erwünscht ist. Wird eine mobile Verbindung festgestellt, wird das `preloadVideo`-Flag auf `false` gesetzt. Zur Vereinfachung und Klarheit testet dieses Beispiel nur einen Verbindungstyp. Ein Anwendungsfall in der Praxis würde wahrscheinlich eine Switch-Anweisung oder eine andere Methode verwenden, um alle möglichen Werte von [`NetworkInformation.type`](/de/docs/Web/API/NetworkInformation/type) zu prüfen. Unabhängig vom `type`-Wert können Sie eine Schätzung der Verbindungsgeschwindigkeit über die Eigenschaft [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType) erhalten.

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
