---
title: TCP Slow Start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary('TCP')}} Slow Start hilft dabei, die Übertragungsgeschwindigkeiten auf die Fähigkeiten des Netzwerks aufzubauen. Es tut dies, ohne die Fähigkeiten des Netzwerks anfangs zu kennen und ohne Staus zu verursachen. {{glossary('TCP')}} Slow Start ist ein Algorithmus, der verwendet wird, um die verfügbare Bandbreite für die Paketübertragung zu erkennen und die Geschwindigkeit einer Netzwerkverbindung auszubalancieren. Es verhindert das Auftreten von Netzwerküberlastungen, deren Fähigkeiten zunächst unbekannt sind, und erhöht langsam das übertragene Informationsvolumen, bis die maximale Kapazität des Netzwerks erreicht ist.

Um TCP Slow Start zu implementieren, setzt das Überlastfenster (_cwnd_) eine Obergrenze für die Datenmenge, die eine Quelle über das Netzwerk senden kann, bevor sie eine Bestätigung (ACK) erhält. Die Schwelle für den langsamen Start (_ssthresh_) bestimmt die (De-)Aktivierung des langsamen Starts. Wenn eine neue Verbindung hergestellt wird, wird cwnd auf ein TCP-Daten- oder Bestätigungspaket initialisiert und wartet auf eine Bestätigung oder ACK. Wenn dieses ACK empfangen wird, wird das Überlastfenster inkrementiert, bis _cwnd_ größer als _ssthresh_ ist. Slow Start endet auch, wenn eine Überlastung festgestellt wird.

## Überlastkontrolle

Überlastung ist ein Zustand, der in einer Netzwerkschicht auftritt, wenn der Datenverkehr zu stark ist und die Netzwerkreaktionszeit verlangsamt. Der Server sendet Daten in TCP-Paketen, und der Client des Benutzers bestätigt die Zustellung durch das Zurücksenden von Bestätigungen oder ACKs. Die Verbindung hat eine begrenzte Kapazität, abhängig von Hardware- und Netzwerkbedingungen. Wenn der Server zu viele Pakete zu schnell sendet, werden sie verworfen. Das bedeutet, es wird keine Bestätigung geben. Der Server registriert dies als fehlende ACKs. Überlastkontrollalgorithmen nutzen diesen Fluss von gesendeten Paketen und ACKs, um eine Sendegeschwindigkeit zu bestimmen.

## Siehe auch

- [Populating the page: how browsers work](/de/docs/Web/Performance/How_browsers_work)
- [http overview](/de/docs/Web/HTTP/Overview)
