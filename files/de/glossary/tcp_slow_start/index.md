---
title: TCP slow start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

{{Glossary("TCP", "TCP")}} Slow Start hilft, die Übertragungsgeschwindigkeiten an die Leistungsfähigkeit des Netzwerks anzupassen. Dies geschieht, ohne von Anfang an die genauen Kapazitäten zu kennen, und ohne Überlastung zu verursachen. {{Glossary("TCP", "TCP")}} Slow Start ist ein Algorithmus, der die verfügbare Bandbreite für die Paketübertragung erkennt und die Geschwindigkeit einer Netzwerkverbindung ausbalanciert. Er verhindert das Auftreten von Netzwerküberlastungen, deren Kapazitäten zunächst unbekannt sind, und erhöht langsam das übertragene Informationsvolumen, bis die maximale Netzwerkkapazität erreicht ist.

Um TCP Slow Start zu implementieren, setzt das Überlastungsfenster (_cwnd_) ein oberes Limit für die Datenmenge, die eine Quelle über das Netzwerk senden kann, bevor eine Empfangsbestätigung (ACK) erfolgt. Die Slow Start-Schwelle (_ssthresh_) bestimmt die (De-)Aktivierung des Slow Starts. Wenn eine neue Verbindung hergestellt wird, wird _cwnd_ auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung oder ACK. Wenn dieses ACK empfangen wird, wird das Überlastungsfenster inkrementiert, bis _cwnd_ größer als _ssthresh_ ist. Slow Start endet auch, wenn Überlastung auftritt.

## Überlastkontrolle

Überlastung selbst ist ein Zustand, der in einer Netzwerkschicht auftritt, wenn der Nachrichtendurchsatz so stark ist, dass er die Netzwerkantwortzeit verlangsamt. Der Server sendet Daten in TCP-Paketen, und der Client des Nutzers bestätigt die Lieferung durch Rücksendung von Empfangsbestätigungen oder ACKs. Die Verbindung hat je nach Hardware- und Netzwerkbedingungen eine begrenzte Kapazität. Wenn der Server zu schnell zu viele Pakete sendet, werden diese verworfen. Das bedeutet, dass keine Bestätigung erfolgt. Der Server registriert dies als fehlende ACKs. Überlastungssteuerungsalgorithmen nutzen diesen Fluss gesendeter Pakete und ACKs, um eine Versandrate zu bestimmen.

## Siehe auch

- [Befüllung der Seite: wie Browser funktionieren](/de/docs/Web/Performance/Guides/How_browsers_work)
- [HTTP-Überblick](/de/docs/Web/HTTP/Overview)
