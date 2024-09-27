---
title: TCP slow start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

[TCP](/de/docs/Glossary/TCP) Slow Start hilft, die Übertragungsgeschwindigkeit an die Fähigkeiten des Netzwerks anzupassen. Es tut dies, ohne anfänglich zu wissen, welche Fähigkeiten das Netzwerk hat und ohne Staus zu verursachen. [TCP](/de/docs/Glossary/TCP) Slow Start ist ein Algorithmus, der die verfügbare Bandbreite für die Paketübertragung erkennt und die Geschwindigkeit einer Netzwerkverbindung ausgleicht. Er verhindert das Auftreten von Netzwerkstau, deren Fähigkeiten anfänglich unbekannt sind, und erhöht langsam das übertragene Informationsvolumen, bis die maximale Kapazität des Netzwerks erreicht ist.

Um TCP Slow Start umzusetzen, setzt das Stau-Fenster (_cwnd_) ein oberes Limit für die Datenmenge, die eine Quelle über das Netzwerk senden kann, bevor sie eine Bestätigung (ACK) erhält. Die Slow Start-Schwelle (_ssthresh_) bestimmt die (De-)Aktivierung von Slow Start. Wenn eine neue Verbindung hergestellt wird, wird cwnd auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung oder ACK. Wenn dieses ACK empfangen wird, wird das Stau-Fenster inkrementiert, bis _cwnd_ größer als _ssthresh_ ist. Slow Start endet auch, wenn ein Stau festgestellt wird.

## Staukontrolle

Stau selbst ist ein Zustand, der innerhalb einer Netzwerkschicht auftritt, wenn der Nachrichtenverkehr so stark ist, dass die Antwortzeit des Netzwerks verlangsamt wird. Der Server sendet Daten in TCP-Paketen, der Client des Benutzers bestätigt die Lieferung, indem er Bestätigungen, oder ACKs, zurücksendet. Die Verbindung hat eine begrenzte Kapazität, abhängig von Hardware und Netzwerkbedingungen. Wenn der Server zu viele Pakete zu schnell sendet, werden sie verworfen, was bedeutet, dass es keine Bestätigung geben wird. Der Server registriert dies als fehlende ACKs. Staukontrollalgorithmen verwenden diesen Fluss gesendeter Pakete und ACKs, um eine Sendegeschwindigkeit zu bestimmen.

## Siehe auch

- [Populating the page: how browsers work](/de/docs/Web/Performance/How_browsers_work)
- [http overview](/de/docs/Web/HTTP/Overview)
