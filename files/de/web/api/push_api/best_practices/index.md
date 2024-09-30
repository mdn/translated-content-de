---
title: "Web Push API-Benachrichtigungen: Best Practices"
slug: Web/API/Push_API/Best_Practices
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{DefaultAPISidebar("Push API") }}

Dieser Artikel bietet eine nützliche Zusammenfassung von Best Practices, die Sie im Auge behalten sollten, wenn Sie Websites und Anwendungen entwickeln, die Push-Benachrichtigungen zur Benutzerbindung verwenden.

> "Wenn es gut gemacht ist, ist es schön zu haben, aber wenn nicht, ist es wirklich nervig." — Gespräch zwischen zwei Browser-Entwicklern über die Ethik von Push-Benachrichtigungen.

## Überblick über Web-Push-Benachrichtigungen

Web-Push-Benachrichtigungen (erstellt mit einer Kombination der [Notifications](/de/docs/Web/API/Notifications_API), [Push](/de/docs/Web/API/Push_API) und [Service Worker](/de/docs/Web/API/Service_Worker_API) APIs) sind Teil des zunehmenden Lärms, den Produktentwickler und Vermarkter nutzen, um Aufmerksamkeit für ihre Seiten zu erlangen. Suchen Sie im Internet nach "Web Push-Benachrichtigungen", finden Sie Artikel von Marketingexperten, die glauben, dass Sie Push verwenden sollten, um Personen zurückzugewinnen, die Ihre Seite verlassen haben, damit sie einen Kauf abschließen, die neuesten Nachrichten erhalten oder Links zu empfohlenen Produkten bekommen können.

### Die dunkle Seite

Ihre Neuheit bietet eine neue und ungenutzte Gelegenheit für findige Seiten, potenzielle Kunden zu erreichen. Hat der Kunde den Tab gewechselt, um eine E-Mail zu beantworten? Gewinnen Sie ihn mit einem ablaufenden Angebot für kostenlosen Versand zurück, das er nicht ignorieren kann!

Aber ist dies wirklich die beste Nutzung von Push-Benachrichtigungen? Oder ist es eine neue Iteration der alten und ermüdenden Pop-up-Anzeige?

> "Web-Push riskiert nicht, im Spam-Ordner zu landen. Es kann auch nicht von Adblockern blockiert werden. Es erscheint direkt auf Ihrem Desktop, selbst wenn die Website geschlossen ist. Auf dem Mobilgerät erscheint es im Benachrichtigungsfach, genauso wie App-Push-Benachrichtigungen, auch wenn der Browser nicht ausgeführt wird." — eine ungenannte Marketingseite

### Positive Anwendungen von Push

Aber es gibt auch eine positive und nützliche Seite von Push-Benachrichtigungen. Nehmen wir an, Sie und Ihr Team verwenden häufig ein Chat-Programm zur Kommunikation, aber heute arbeiten Sie glücklich irgendwo und es tritt ein Problem auf. Angenommen, Ihr Programmmanager hat einen Hänger in den Freigaben gefunden und möchte Ihr Feedback zu etwas erhalten, bevor er fortfährt.

Nach einigen erfolglosen Versuchen, Ihre Aufmerksamkeit zu erlangen, senden sie Ihnen eine E-Mail und Ihre E-Mail-App erzeugt eine Push-Benachrichtigung, die Sie erfolgreich alarmiert, obwohl Ihre Mail-Web-App nicht geöffnet ist.

In diesem Dokument sprechen wir über den ethischen Einsatz von Web-Push-Benachrichtigungen. Manchmal können sie Frustration und Ärger beseitigen, und manchmal können sie diese verursachen. Es liegt an Ihnen als Entwickler, weise Empfehlungen (und Entscheidungen) über die Nutzung von Push-Benachrichtigungen zu treffen.

## Was hoffen Sie mit dieser Push-Benachrichtigung zu erreichen?

Wie bei allem geht mit großer Macht große Verantwortung einher. Jede Push-Benachrichtigung sollte nützlich und zeitkritisch sein, und der Benutzer sollte immer um Erlaubnis gefragt werden, bevor die erste gesendet wird, und eine einfache Möglichkeit haben, sich in Zukunft abzumelden.

Es gibt einige grundlegende Fragen, die Sie beantworten können, um festzustellen, ob eine Push-Benachrichtigung erforderlich ist:

- Wartet jemand in Echtzeit auf eine Antwort? In unserem obigen Beispiel wartet der Programmmanager auf Ihre Antwort, daher ist eine Push-Benachrichtigung angebracht.
- Ist ein aktuelles Update notwendig? Ich nutze einen Dienst, der verschiedene Social-Media-Nachrichtenquellen aggregiert. Wenn eine Geschichte, die mich interessiert, im Trend liegt, möchte ich eine Benachrichtigung erhalten!
- Gibt es aktuelle Nachrichten, die zeitkritisch sind? Hier wird es ein wenig knifflig. Manchmal fordern Nachrichtenseiten Push-Benachrichtigungen an, um im Wesentlichen zu sagen "Schau mich an! Schau mich an!" Es kommt darauf an, was der Benutzer will, und man kann das Verhalten nutzen, um die Absicht zu bestimmen. Wenn der Benutzer beispielsweise mehr als einen Artikel liest oder mehrere Minuten auf Ihrer Seite verweilt, könnte er daran interessiert sein, Updates zu erhalten.

Zusätzlich zur Frage, ob eine Push-Benachrichtigung überhaupt erforderlich ist, gibt es viele verschiedene Arten von Push-Benachrichtigungen, die von gelegentlich-und-verschwindend bis zu persistierend-und-interaktions-erfordernd reichen.

Wir raten Ihnen, die interaktionspflichtigen sehr sparsam zu verwenden, da sie die nervigsten sein können. Ihre Benachrichtigungen sollten unterstützend, nicht störend sein.

## Vertrauen aufbauen

Einige Studien haben gezeigt, dass bis zu 60% der Push-Benachrichtigungen blockiert werden. Ihrem Standort zu erlauben, Benachrichtigungen in Echtzeit zu senden, erfordert Vertrauen. Sie können Vertrauen aufbauen, indem Sie eine gut gestaltete Website haben, die gute Inhalte bietet, die Respekt für den Benutzer zeigen, und einen klaren Wert für die Annahme von Push-Benachrichtigungen.

## Maßnahmen der Browser

Aufgrund von Missbräuchen von Push-Benachrichtigungen in der Vergangenheit haben Webbrowser-Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu lindern. Zum Beispiel erfordert Safari 12.1 jetzt – und andere Browser tun dies entweder bereits oder planen, dies zu tun – dass der Benutzer auf irgendeine Weise mit der Seite interagiert, bevor die Seite eine Erlaubnis für Push-Benachrichtigungen anfordern kann. Dies verhindert zumindest, dass der Benutzer spontan auf Webseiten, die er nur einmal kurz angesehen hat und möglicherweise selten bis nie wieder ansehen wird, diese Frage gestellt bekommt.

Im Falle von Firefox siehe [Firefox Fehler 1524619](https://bugzil.la/1524619), in dem wir feststellen, dass Firefox 68 dies implementiert, standardmäßig deaktiviert, hinter der Voreinstellung `dom.webnotifications.requireuserinteraction`.

## Siehe auch

- [Notifications API](/de/docs/Web/API/Notifications_API)
- [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Push API](/de/docs/Web/API/Push_API)
