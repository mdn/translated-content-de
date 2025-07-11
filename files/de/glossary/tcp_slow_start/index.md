---
title: TCP Slow-Start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("TCP", "TCP")}} Slow-Start hilft dabei, die Übertragungsgeschwindigkeiten an die Fähigkeiten des Netzwerks heranzuführen. Dies geschieht, ohne diese Fähigkeiten initial zu kennen und ohne Staus zu verursachen. {{Glossary("TCP", "TCP")}} Slow-Start ist ein Algorithmus, der die verfügbare Bandbreite für die Paketübertragung erkennt und die Geschwindigkeit einer Netzwerkverbindung ausbalanciert. Er verhindert das Auftreten von Netzwerkstaus, deren Fähigkeiten anfangs unbekannt sind, und erhöht langsam das übertragene Informationsvolumen, bis die maximale Kapazität des Netzwerks erreicht ist.

Um TCP Slow-Start zu implementieren, setzt das Stau-Fenster (_cwnd_) ein oberes Limit für die Datenmenge, die eine Quelle über das Netzwerk senden kann, bevor eine Bestätigung (ACK) empfangen wird. Die Slow-Start-Schwelle (_ssthresh_) bestimmt die (De-)Aktivierung des Slow-Start. Wenn eine neue Verbindung hergestellt wird, wird cwnd auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung oder ACK. Wenn dieses ACK empfangen wird, wird das Stau-Fenster inkrementiert, bis _cwnd_ größer ist als _ssthresh_. Slow-Start endet auch, wenn eine Stauung auftritt.

## Stau-Kontrolle

Stau selbst ist ein Zustand, der innerhalb einer Netzwerkschicht auftritt, wenn der Nachrichtentransfer so beschäftigt ist, dass er die Netzwerkreaktionszeit verlangsamt. Der Server sendet Daten in TCP-Paketen, der Client des Benutzers bestätigt die Zustellung, indem er Bestätigungen oder ACKs zurücksendet. Die Verbindung hat eine begrenzte Kapazität, abhängig von der Hardware und den Netzwerkbedingungen. Wenn der Server zu viele Pakete zu schnell sendet, werden sie verworfen. Das bedeutet, es gibt keine Bestätigung. Der Server registriert dies als fehlende ACKs. Stau-Kontrollalgorithmen nutzen diesen Fluss von gesendeten Paketen und ACKs, um eine Sendequote zu bestimmen.

## Siehe auch

- [Populating the page: how browsers work](/de/docs/Web/Performance/Guides/How_browsers_work)
- [http overview](/de/docs/Web/HTTP/Guides/Overview)
