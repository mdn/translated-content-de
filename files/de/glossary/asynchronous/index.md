---
title: Asynchron
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der Begriff **asynchron** bezieht sich auf zwei oder mehr Objekte oder Ereignisse, die nicht zur gleichen Zeit existieren oder stattfinden, das heißt, sie sind **nicht** {{Glossary("synchronous", "synchron")}}. Wenn mehrere zusammenhängende Dinge passieren, ohne dass deren Abschluss voneinander abhängt, sind sie asynchron.

Im Bereich der Informatik wird das Wort "asynchron" in zwei Hauptkontexten verwendet, wie im Folgenden erklärt.

## In der Netzwerktechnik und Kommunikation

Asynchrone Kommunikation ist eine Methode des Nachrichtenaustauschs, bei der das Senden, Empfangen und Verarbeiten jeder Nachricht nicht von dem Senden, Empfang oder der Verarbeitung anderer Nachrichten abhängt. Bei der asynchronen Kommunikation empfängt und verarbeitet jede Partei Nachrichten, wenn es für sie bequem oder möglich ist, anstatt dies sofort nach Erhalt zu tun. Zudem können Nachrichten versendet werden, ohne auf eine Bestätigung zu warten, mit dem Verständnis, dass der Empfänger bei Problemen Korrekturen anfordert oder die Situation anderweitig regelt.

E-Mail ist eine Art der asynchronen menschlichen Kommunikation. Ein Absender sendet eine E-Mail. Der Empfänger liest die E-Mail und antwortet darauf (oder auch nicht), wann es für ihn passt, nicht unbedingt sofort. Alle Parteien können jederzeit Nachrichten senden und empfangen. E-Mails müssen nicht in einer bestimmten Reihenfolge geplant werden.

Bei asynchroner Software blockiert das Stellen einer Anfrage, wie beispielsweise an einen Server, nicht andere Prozesse, während auf die Antwort gewartet wird. Die Software kann weiterhin andere Aufgaben ausführen. Zum Beispiel werden in [versprechenbasierten APIs](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) {{JSxRef("Promise")}} Objekte für langwierige Operationen erstellt. Nachdem die Operation abgeschlossen ist, wird das Promise verarbeitet. Mit Promises muss die Software nicht warten, bis die Operation beendet ist.

## In der Softwareentwicklung

Asynchrone Softwareentwicklung erweitert das Konzept, indem Code erstellt wird, der es einem Programm ermöglicht, eine Aufgabe neben der ursprünglichen Aufgabe (oder Aufgaben) durchführen zu lassen, ohne anzuhalten zu müssen, um das Ende der Aufgabe abzuwarten. Wenn die sekundäre Aufgabe abgeschlossen ist, wird die ursprüngliche Aufgabe über einen vereinbarten Mechanismus benachrichtigt, sodass sie weiß, dass die Arbeit erledigt ist und dass das Ergebnis, falls vorhanden, verfügbar ist.

Es gibt eine Reihe von Programmiertechniken zur Implementierung asynchroner Software. Siehe den Artikel [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) für eine Einführung in diese.

## Siehe auch

- [Lernen: Netzwerk-Anfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests) (Lernbereich)
- Verwandte Glossarbegriffe:
  - {{Glossary("Synchronous", "Synchronous")}}
