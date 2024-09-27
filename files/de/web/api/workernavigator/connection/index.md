---
title: "WorkerNavigator: connection-Eigenschaft"
short-title: connection
slug: Web/API/WorkerNavigator/connection
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Network Information API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`connection`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt zurück, das Informationen über die Verbindung des Systems enthält, wie zum Beispiel die aktuelle Bandbreite des Geräts oder ob die Verbindung gedrosselt ist.
Dies könnte verwendet werden, um hochauflösende Inhalte oder niedrigauflösende Inhalte basierend auf der Verbindung des Benutzers auszuwählen.

## Wert

Ein [`NetworkInformation`](/de/docs/Web/API/NetworkInformation)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
- [Network Information API](/de/docs/Web/API/Network_Information_API)
