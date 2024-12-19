---
title: Asynchron
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Der Begriff **asynchron** bezieht sich auf zwei oder mehr Objekte oder Ereignisse, die nicht zur gleichen Zeit existieren oder stattfinden, das heißt, sie sind **nicht** {{Glossary("synchronous", "synchron")}}. Wenn mehrere zusammenhängende Dinge geschehen, ohne dass eines von der Vollendung vorheriger Ereignisse abhängt, sind sie asynchron.

Im Bereich der Informatik wird das Wort "asynchron" in zwei wesentlichen Kontexten verwendet, die im Folgenden erläutert werden.

## In der Netzwerktechnik und Kommunikation

Asynchrone Kommunikation ist eine Methode zum Austausch von Nachrichten, bei der das Senden, Empfangen und Verarbeiten jeder Nachricht nicht vom Senden, Empfang oder Verarbeiten anderer Nachrichten abhängt. Bei der asynchronen Kommunikation empfängt und verarbeitet jede Partei Nachrichten, wann es ihr passt oder möglich ist, anstatt dies sofort nach Erhalt zu tun. Darüber hinaus können Nachrichten gesendet werden, ohne auf eine Bestätigung zu warten, mit dem Verständnis, dass der Empfänger bei Problemen Korrekturen anfordert oder die Situation anderweitig handhabt.

E-Mail ist eine Form der asynchronen menschlichen Kommunikation. Ein Absender sendet eine E-Mail. Der Empfänger liest die E-Mail und antwortet darauf (oder auch nicht) nach seinem Belieben und nicht unbedingt sofort. Alle Parteien können jederzeit weiterhin Nachrichten senden und empfangen. E-Mails müssen nicht in einer bestimmten Reihenfolge geplant werden.

In asynchroner Software blockiert eine Anforderung, wie z.B. an einen Server, nicht andere Prozesse, während auf die Antwort gewartet wird. Die Software kann andere Aufgaben weiterhin ausführen. Zum Beispiel werden in [versprechensbasierten APIs](/de/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API) {{JSxRef("Promise")}} Objekte für lange Operationen erstellt. Nachdem die Operation abgeschlossen ist, wird das Versprechen bearbeitet. Mit Versprechen muss die Software nicht darauf warten, dass die Operation abgeschlossen ist.

## In der Softwareentwicklung

Asynchrones Softwaredesign erweitert das Konzept, indem Code erstellt wird, der es einem Programm ermöglicht, eine Aufgabe parallel zur ursprünglichen Aufgabe (oder Aufgaben) ausführen zu lassen, ohne auf den Abschluss der Aufgabe zu warten. Wenn die sekundäre Aufgabe abgeschlossen ist, wird die ursprüngliche Aufgabe über einen vereinbarten Mechanismus benachrichtigt, sodass sie weiß, dass die Arbeit erledigt ist und das Ergebnis, falls vorhanden, verfügbar ist.

Es gibt eine Reihe von Programmiertechniken zur Implementierung asynchroner Software. Siehe den Artikel [Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) für eine Einführung in diese Techniken.

## Siehe auch

- [Lernen: Netzwerk-Anfragen mit JavaScript](/de/docs/Learn_web_development/Core/Scripting/Network_requests) (Lernbereich)
- Verwandte Glossarbegriffe:
  - {{Glossary("Synchronous", "Synchron")}}
