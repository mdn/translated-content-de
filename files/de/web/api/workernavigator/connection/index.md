---
title: "WorkerNavigator: Verbindungseigenschaft"
short-title: Verbindung
slug: Web/API/WorkerNavigator/connection
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Network Information API")}}{{AvailableInWorkers("worker")}}

Die **`connection`** schreibgeschützte Eigenschaft der {{domxref("WorkerNavigator")}}-Schnittstelle gibt ein {{domxref("NetworkInformation")}}-Objekt zurück, das Informationen über die Verbindung des Systems enthält, wie z.B. die aktuelle Bandbreite des Geräts des Benutzers oder ob die Verbindung limitiert ist.
Dies könnte verwendet werden, um hochauflösenden oder niedrigauflösenden Inhalt basierend auf der Verbindung des Nutzers auszuwählen.

## Wert

Ein {{domxref("NetworkInformation")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
- [Network Information API](/de/docs/Web/API/Network_Information_API)
