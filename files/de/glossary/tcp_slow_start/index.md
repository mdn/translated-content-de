---
title: TCP Slow Start
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: aa751052a9d07bdf29274fbb216f2d6d13993c11
---

{{Glossary("TCP", "TCP")}} Slow Start ist ein Algorithmus, der dabei hilft, die verfügbare Netzwerkbandbreite für die Paketübertragung zu erkennen und die Übertragungsgeschwindigkeit entsprechend den Fähigkeiten des Netzwerks auszubalancieren. Der Mechanismus erhöht das Volumen der gesendeten Informationen schnell von einem sehr niedrigen Niveau auf ein Schwellenwertniveau. Wenn eine Überlastung festgestellt wird, wird der Schwellenwert auf ein stark reduziertes Niveau zurückgesetzt und der Slow Start-Prozess beginnt von neuem. Dies verhindert Überlastungen, wenn die Fähigkeiten eines Netzwerks unbekannt oder überschritten sind — zu Beginn einer Verbindung, nach einer Inaktivitätsperiode oder nach der Erkennung von Überlastungen — ohne selbst eine Überlastung zu verursachen.

Netzwerküberlastung tritt auf, wenn mehr Daten gesendet werden, als das Netzwerk zu einem gegebenen Zeitpunkt zwischen Knoten übertragen kann. Wenn ein Netzwerk überlastet ist, erleben Maschinen im Netzwerk eine verschlechterte Dienstqualität, einschließlich langsamer Datenübertragungen und verlorener Pakete.

Der Slow Start-Algorithmus ist ein wesentlicher Bestandteil der TCP-Staukontrolle, da er sicherstellt, dass neue Verbindungen die Datenraten schrittweise erhöhen und diese Raten andere Knoten nicht überfordern.

## Siehe auch

- [Befüllung der Seite: wie Browser arbeiten](/de/docs/Web/Performance/Guides/How_browsers_work)
- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
