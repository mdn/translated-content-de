---
title: TCP Slow Start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

{{Glossary("TCP", "TCP")}} Slow Start hilft, die Übertragungsgeschwindigkeit an die Fähigkeiten des Netzwerks anzupassen. Es tut dies, ohne anfangs zu wissen, welche Fähigkeiten das Netzwerk hat und ohne eine Überlastung zu erzeugen. {{Glossary("TCP", "TCP")}} Slow Start ist ein Algorithmus, der die verfügbare Bandbreite für die Paketübertragung erkennt und die Geschwindigkeit einer Netzwerkverbindung ausbalanciert. Er verhindert das Auftreten von Netzüberlastungen, deren Fähigkeiten anfangs unbekannt sind, und erhöht langsam das Volumen der verbreiteten Informationen, bis die maximale Kapazität des Netzwerks gefunden ist.

Um TCP Slow Start zu implementieren, legt das Überlastungsfenster (_cwnd_) eine Obergrenze für die Menge an Daten fest, die eine Quelle über das Netzwerk übertragen kann, bevor eine Bestätigung (ACK) empfangen wird. Der Slow-Start-Schwellenwert (_ssthresh_) bestimmt die (De-)Aktivierung von Slow Start. Wenn eine neue Verbindung hergestellt wird, wird cwnd auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung oder ACK. Wenn dieses ACK empfangen wird, wird das Überlastungsfenster erhöht, bis _cwnd_ größer als _ssthresh_ ist. Slow Start endet auch, wenn eine Überlastung auftritt.

## Überlastungssteuerung

Eine Überlastung tritt in einer Netzwerkschicht auf, wenn der Nachrichtenverkehr so stark ist, dass er die Antwortzeit des Netzwerks verlangsamt. Der Server sendet Daten in TCP-Paketen, und der Client des Benutzers bestätigt die Zustellung, indem er Bestätigungen oder ACKs zurücksendet. Die Verbindung hat eine begrenzte Kapazität, abhängig von Hardware und Netzwerkbedingungen. Wenn der Server zu viele Pakete zu schnell sendet, werden diese verworfen. Das bedeutet, dass es keine Bestätigungen gibt. Der Server registriert dies als fehlende ACKs. Überlastungssteuerungsalgorithmen nutzen diesen Fluss von gesendeten Paketen und ACKs, um eine Sendegeschwindigkeit zu bestimmen.

## Siehe auch

- [Das Befüllen der Seite: wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
- [HTTP-Übersicht](/de/docs/Web/HTTP/Guides/Overview)
