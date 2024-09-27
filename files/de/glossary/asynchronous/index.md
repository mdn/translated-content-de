---
title: Asynchronous
slug: Glossary/Asynchronous
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{GlossarySidebar}}

Der Begriff **asynchron** bezieht sich auf zwei oder mehr Objekte oder Ereignisse, die nicht zur gleichen Zeit existieren oder stattfinden. Das heißt, sie sind **nicht** [synchron](/de/docs/Glossary/synchronous). Wenn mehrere zusammenhängende Dinge geschehen, ohne dass eines von der Fertigstellung vorheriger Ereignisse abhängig ist, sind sie asynchron.

In der Informatik wird das Wort "asynchron" in zwei Hauptkontexten verwendet, wie unten erklärt wird.

## In Netzwerken und Kommunikation

Asynchrone Kommunikation ist eine Methode des Nachrichtenaustauschs, bei der das Senden, Empfangen und Verarbeiten jeder Nachricht nicht von dem der anderen Nachrichten abhängig ist. Bei der asynchronen Kommunikation empfängt und verarbeitet jede Partei Nachrichten dann, wenn es ihr genehm oder möglich ist, anstatt dies sofort bei Erhalt zu tun. Darüber hinaus können Nachrichten gesendet werden, ohne auf eine Bestätigung zu warten, mit dem Verständnis, dass der Empfänger im Falle eines Problems Korrekturen anfordern oder anderweitig die Situation handhaben wird.

E-Mail ist eine Art der asynchronen menschlichen Kommunikation. Ein Absender sendet eine E-Mail. Der Empfänger liest die E-Mail und antwortet darauf (oder auch nicht) zu einem für ihn passenden Zeitpunkt, nicht unbedingt sofort. Alle Beteiligten können jederzeit fortfahren, Nachrichten zu senden und zu empfangen. E-Mails müssen nicht in einer bestimmten Reihenfolge geplant werden.

In asynchroner Software blockiert das Senden einer Anfrage, wie etwa an einen Server, nicht andere Prozesse, während auf die Antwort gewartet wird. Die Software kann weiterhin andere Aufgaben ausführen. Zum Beispiel werden in [Promise-basierten APIs](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) {{JSxRef("Promise")}} Objekte für lang andauernde Operationen erstellt. Nachdem die Operation abgeschlossen ist, wird das Promise behandelt. Mit Promises muss die Software nicht darauf warten, dass die Operation abgeschlossen ist.

## In der Softwareentwicklung

Asynchrone Softwareentwicklung erweitert das Konzept, indem sie Code erstellt, der es einem Programm ermöglicht, zu verlangen, dass eine Aufgabe neben der ursprünglichen Aufgabe (oder Aufgaben) durchgeführt wird, ohne anzuhalten, um auf die Fertigstellung der Aufgabe zu warten. Wenn die sekundäre Aufgabe abgeschlossen ist, wird die ursprüngliche Aufgabe über einen vereinbarten Mechanismus benachrichtigt, sodass sie weiß, dass die Arbeit abgeschlossen ist und das Ergebnis, falls vorhanden, verfügbar ist.

Es gibt eine Reihe von Programmiertechniken zur Implementierung von asynchroner Software. Siehe den Artikel [Asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous) für eine Einführung in diese Techniken.

## Siehe auch

- [Abrufen von Daten vom Server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Lernbereich)
- Verwandte Glossarbegriffe:
  - [Synchronous](/de/docs/Glossary/Synchronous)
