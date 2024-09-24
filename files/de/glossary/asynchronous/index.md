---
title: Asynchron
slug: Glossary/Asynchronous
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{GlossarySidebar}}

Der Begriff **asynchron** bezieht sich auf zwei oder mehr Objekte oder Ereignisse, die nicht zur gleichen Zeit existieren oder passieren, das heißt, sie sind **nicht** {{glossary("synchronous")}}. Wenn mehrere miteinander verbundene Ereignisse stattfinden, ohne dass eines von der Vollendung der vorangegangenen Ereignisse abhängt, sind sie asynchron.

In der Informatik wird das Wort "asynchron" in zwei Hauptkontexten verwendet, wie unten erläutert.

## In der Vernetzung und Kommunikation

Asynchrone Kommunikation ist eine Methode des Nachrichtenaustauschs, bei der das Senden, Empfangen und Verarbeiten jeder Nachricht nicht von dem Senden, Empfang oder der Verarbeitung anderer Nachrichten abhängt. Bei asynchroner Kommunikation erhält und verarbeitet jede Partei Nachrichten, wann es ihr bequem oder möglich ist, anstatt dies sofort beim Empfang zu tun. Nachrichten können auch ohne Warten auf eine Bestätigung gesendet werden, mit dem Verständnis, dass der Empfänger bei einem Problem Korrekturen anfordert oder die Situation anderweitig handhabt.

E-Mail ist eine Art der asynchronen menschlichen Kommunikation. Ein Sender sendet eine E-Mail. Der Empfänger liest die E-Mail und antwortet darauf (oder auch nicht), wann es ihm passt, nicht unbedingt sofort. Alle Parteien können jederzeit weiterhin Nachrichten senden und empfangen. E-Mails müssen nicht in einer bestimmten Reihenfolge geplant werden.

Bei asynchroner Software blockiert eine Anfrage, zum Beispiel an einen Server, andere Prozesse nicht, während auf die Antwort gewartet wird. Die Software kann weiterhin andere Aufgaben ausführen. Beispielsweise werden in [API-basierten Versprechen](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) {{JSxRef("Promise")}}-Objekte für lange Operationen erstellt. Nachdem die Operation abgeschlossen ist, wird das Versprechen bearbeitet. Mit Versprechen muss die Software nicht darauf warten, dass die Operation beendet ist.

## In der Softwaredesign

Asynchrones Softwaredesign erweitert das Konzept, indem Code erstellt wird, der es einem Programm ermöglicht, eine Aufgabe neben der ursprünglichen Aufgabe (oder Aufgaben) auszuführen, ohne auf den Abschluss der Aufgabe zu warten. Wenn die sekundäre Aufgabe abgeschlossen ist, wird die ursprüngliche Aufgabe mit einem vereinbarten Mechanismus benachrichtigt, damit sie weiß, dass die Arbeit erledigt ist und das Ergebnis, falls vorhanden, verfügbar ist.

Es gibt eine Reihe von Programmiertechniken zur Implementierung asynchroner Software. Lesen Sie den Artikel [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous) für eine Einführung in diese Techniken.

## Siehe auch

- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Lernbereich)
- Verwandte Glossarbegriffe:
  - {{glossary("Synchronous")}}
