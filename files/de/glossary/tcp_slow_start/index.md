---
title: TCP slow start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{Glossary("TCP", "TCP")}} Slow Start hilft, die Übertragungsgeschwindigkeiten an die Fähigkeiten des Netzwerks anzupassen. Dies geschieht, ohne die Kenntnisse über diese Fähigkeiten zu Beginn zu haben und ohne Staus zu verursachen. {{Glossary("TCP", "TCP")}} Slow Start ist ein Algorithmus, der die verfügbare Bandbreite für die Paketübertragung erkennt und die Geschwindigkeit einer Netzwerkverbindung ausbalanciert. Er verhindert das Auftreten von Netzstau, dessen Kapazitäten anfangs unbekannt sind, und erhöht langsam das übertragene Datenvolumen, bis die maximale Netzwerkkapazität gefunden ist.

Um TCP Slow Start zu implementieren, setzt das "congestion window" (_cwnd_) eine Obergrenze für die Datenmenge, die eine Quelle über das Netzwerk senden kann, bevor eine Bestätigung (ACK) empfangen wird. Der Schwellenwert für den langsamen Start (_ssthresh_) bestimmt die (De)Aktivierung des langsamen Starts. Wenn eine neue Verbindung hergestellt wird, wird cwnd auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung, oder ACK. Wenn diese ACK empfangen wird, wird das "congestion window" inkrementiert, bis das _cwnd_ größer als _ssthresh_ ist. Der Slow-Start endet auch, wenn Staus auftreten.

## Staukontrolle

Stau selbst ist ein Zustand, der innerhalb einer Netzwerkschicht auftritt, wenn der Nachrichtenverkehr so stark ist, dass er die Netzwerkantwortzeit verlangsamt. Der Server sendet Daten in TCP-Paketen, der Client des Benutzers bestätigt dann die Lieferung, indem er Bestätigungen oder ACKs zurücksendet. Die Verbindung hat eine begrenzte Kapazität, abhängig von der Hardware und den Netzwerkbedingungen. Wenn der Server zu viele Pakete zu schnell sendet, werden sie verworfen. Das bedeutet, es gibt keine Bestätigung. Der Server registriert dies als fehlende ACKs. Staukontrollalgorithmen verwenden diesen Fluss von gesendeten Paketen und ACKs, um eine Sendegeschwindigkeit zu bestimmen.

## Siehe auch

- [Die Seite laden: wie Browser funktionieren](/de/docs/Web/Performance/How_browsers_work)
- [HTTP-Übersicht](/de/docs/Web/HTTP/Overview)
