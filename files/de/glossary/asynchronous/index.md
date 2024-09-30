---
title: Asynchronous
slug: Glossary/Asynchronous
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{GlossarySidebar}}

Der Begriff **asynchron** bezieht sich auf zwei oder mehr Objekte oder Ereignisse, die nicht zur gleichen Zeit existieren oder geschehen, das heißt, sie sind **nicht** [synchron](/de/docs/Glossary/synchronous). Wenn mehrere zusammenhängende Dinge passieren, ohne dass eines von der Fertigstellung vorheriger Abläufe abhängig ist, sind sie asynchron.

In der Informatik wird das Wort "asynchron" in zwei wesentlichen Kontexten verwendet, wie unten erläutert.

## In Netzwerken und Kommunikation

Asynchrone Kommunikation ist eine Methode des Nachrichtenaustauschs, bei der das Senden, Empfangen und Verarbeiten jeder Nachricht nicht vom Senden, Empfang oder der Verarbeitung anderer Nachrichten abhängig ist. In der asynchronen Kommunikation empfängt und verarbeitet jede Partei Nachrichten, wann es praktisch oder möglich ist, anstatt dies unmittelbar nach dem Erhalt zu tun. Außerdem können Nachrichten gesendet werden, ohne auf eine Bestätigung zu warten, mit dem Verständnis, dass der Empfänger bei Auftreten eines Problems um Korrekturen bitten oder die Situation anderweitig behandeln wird.

E-Mail ist eine Art der asynchronen menschlichen Kommunikation. Ein Absender sendet eine E-Mail. Der Empfänger liest die E-Mail und antwortet darauf (oder auch nicht) nach Belieben, nicht unbedingt sofort. Alle Parteien können jederzeit Nachrichten senden und empfangen. E-Mails müssen nicht in einer bestimmten Reihenfolge gesendet werden.

In asynchroner Software blockiert eine Anfrage, wie beispielsweise an einen Server, nicht andere Prozesse, während auf die Antwort gewartet wird. Die Software kann andere Aufgaben weiter ausführen. Zum Beispiel werden in [Promise-basierten APIs](/de/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API) {{JSxRef("Promise")}} Objekte für langwierige Operationen erstellt. Nachdem die Operation abgeschlossen ist, wird das Versprechen behandelt. Mit Versprechen muss die Software nicht warten, bis die Operation beendet ist.

## In der Softwareentwicklung

Asynchrone Softwareentwicklung erweitert das Konzept, indem Code erstellt wird, der es einem Programm ermöglicht, eine Aufgabe parallel zu der ursprünglichen Aufgabe (oder Aufgaben) auszuführen, ohne anzuhalten, um auf die Fertigstellung der Aufgabe zu warten. Wenn die sekundäre Aufgabe abgeschlossen ist, wird die ursprüngliche Aufgabe über einen vereinbarten Mechanismus benachrichtigt, damit sie weiß, dass die Arbeit erledigt ist und dass das Ergebnis, falls vorhanden, verfügbar ist.

Es gibt eine Reihe von Programmiertechniken zur Implementierung von asynchroner Software. Der Artikel [Asynchronous JavaScript](/de/docs/Learn/JavaScript/Asynchronous) bietet eine Einführung in diese Techniken.

## Siehe auch

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Lernbereich)
- Verwandte Glossarbegriffe:
  - [Synchron](/de/docs/Glossary/Synchronous)
