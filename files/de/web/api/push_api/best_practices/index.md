---
title: Web Push API Notifications Best Practices
slug: Web/API/Push_API/Best_Practices
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{DefaultAPISidebar("Push API") }}

Dieser Artikel bietet eine nützliche Zusammenfassung von Best Practices, die bei der Entwicklung von Websites und Anwendungen, die Push-Benachrichtigungen zur Benutzerinteraktion nutzen, beachtet werden sollten.

> „Wenn es gut gemacht ist, ist es schön zu haben, aber wenn es schlecht gemacht ist, ist es wirklich nervig.“ — Mithören von Gesprächen zwischen zwei Browser-Entwicklern, die die Ethik von Push-Benachrichtigungen diskutieren.

## Überblick über Web-Push-Benachrichtigungen

Web-Push-Benachrichtigungen (erstellt mit einer Kombination der [Notifications](/de/docs/Web/API/Notifications_API), [Push](/de/docs/Web/API/Push_API) und [Service Worker](/de/docs/Web/API/Service_Worker_API) APIs) gehören zu den zunehmenden Geräuschen, die Produktentwickler und Marketingspezialisten verwenden, um Aufmerksamkeit für ihre Seiten zu erlangen. Wenn man im Web nach „Web-Push-Benachrichtigungen“ sucht, findet man Artikel von Marketingexperten, die glauben, dass Sie Push-Benachrichtigungen verwenden sollten, um Personen, die Ihre Seite verlassen haben, erneut zu begeistern, damit sie einen Kauf abschließen können, die neuesten Nachrichten erhalten oder Links zu empfohlenen Produkten erhalten.

### Die dunkle Seite

Ihre Neuheit bietet eine neue und ungenutzte Möglichkeit für unternehmungslustige Seiten, potenzielle Kunden zu erreichen. Hat der Kunde den Tab gewechselt, um eine E-Mail zu beantworten? Gewinnen Sie ihn zurück mit einem ablaufenden Angebot für kostenlosen Versand, das er nicht ignorieren kann!

Aber ist dies wirklich der beste Einsatz von Push-Benachrichtigungen? Oder ist es eine neue Iteration der alten und müden Pop-up-Werbung?

> „Web-Push läuft nicht Gefahr, im Spam-Ordner zu landen. Es kann auch nicht von Werbeblockern blockiert werden. Es erscheint direkt auf Ihrem Desktop, auch wenn die Website geschlossen ist. Auf Mobilgeräten erscheint es im Benachrichtigungsfeld, genau wie App-Push-Benachrichtigungen, selbst wenn der Browser nicht läuft.“ — eine nicht genannte Marketingseite

### Positive Anwendungen von Push-Benachrichtigungen

Aber es gibt auch eine positive und nützliche Seite von Push-Benachrichtigungen. Nehmen wir an, Sie und Ihr Team verwenden häufig ein Chat-Programm zur Kommunikation, aber heute arbeiten Sie glücklich irgendwo und ein Problem tritt auf. Sagen wir, Ihr Programmmanager hat einen Stolperstein bei den Genehmigungen gefunden und möchte Ihr Feedback zu etwas erhalten, bevor sie fortfährt.

Nach ein paar fehlgeschlagenen Versuchen, Ihre Aufmerksamkeit zu erregen, senden sie Ihnen eine E-Mail, und Ihre E-Mail-App erzeugt eine Push-Benachrichtigung, die Sie erfolgreich alarmiert, obwohl Ihre Mail-Web-App nicht geöffnet ist.

In diesem Dokument sprechen wir über den ethischen Einsatz von Web-Push-Benachrichtigungen. Manchmal können sie Frustration und Ärger eliminieren, und manchmal können sie diese verursachen, und es liegt an Ihnen als Entwickler, weise Empfehlungen (und Entscheidungen) über die Verwendung von Push-Benachrichtigungen zu treffen.

## Was wollen Sie mit dieser Push-Benachrichtigung erreichen?

Wie bei allem gilt auch hier: Mit großer Macht kommt große Verantwortung. Jede Push-Benachrichtigung sollte nützlich und zeitkritisch sein, und der Benutzer sollte immer um Erlaubnis gefragt werden, bevor die erste gesendet wird, und es sollte eine einfache Möglichkeit angeboten werden, sich in Zukunft von weiteren Benachrichtigungen abzumelden.

Es gibt einige grundlegende Fragen, die Sie beantworten können, um festzustellen, ob eine Push-Benachrichtigung erforderlich ist:

- Wartet jemand in Echtzeit auf eine Antwort? In unserem obigen Beispiel wartet der Programmmanager auf Ihre Antwort und daher ist eine Push-Benachrichtigung angemessen.
- Ist eine Aktualisierung in Echtzeit notwendig? Ich benutze einen Dienst, der verschiedene soziale Nachrichtenquellen aggregiert. Wenn eine Geschichte, die mich interessiert, im Trend liegt, möchte ich eine Benachrichtigung erhalten!
- Gibt es Nachrichten, die zeitnah sind? Hier wird es etwas knifflig. Manchmal bitten Nachrichtenseiten um Push-Benachrichtigungen, damit sie im Wesentlichen sagen können: „Schau mich an! Schau mich an!“ Alles hängt davon ab, was der Benutzer möchte, und Sie können Verhaltensweisen nutzen, um Absichten zu bestimmen. Zum Beispiel, wenn der Benutzer mehr als einen Artikel ansieht oder einige Minuten auf Ihrer Seite verweilt, ist er möglicherweise daran interessiert, Updates zu erhalten.

Zusätzlich zur Frage, ob überhaupt eine Push-Benachrichtigung erforderlich ist, gibt es viele verschiedene Arten von Push-Benachrichtigungen, die von zwanglos-und-verschwinden bis hin zu persistent-und-interaktion-erfordernd reichen.

Wir warnen Sie, die interaktionserfordernden sehr sparsam zu verwenden, da sie am nervigsten sein können. Ihre Benachrichtigungen sollten assistierend, nicht störend sein.

## Vertrauen aufbauen

Einige Studien haben gezeigt, dass bis zu 60 % der Push-Benachrichtigungen blockiert werden. Ihrer Site zu erlauben, Benachrichtigungen in Echtzeit zu senden, erfordert Vertrauen. Sie können Vertrauen aufbauen, indem Sie eine gut gestaltete Website haben, die gute Inhalte bietet, den Benutzer respektiert und klaren Wert darauf legt, Push-Benachrichtigungen zu akzeptieren.

## Browser-Abschwächungen

Aufgrund von Missbrauchsfällen bei Push-Benachrichtigungen in der Vergangenheit haben Webbrowser-Entwickler begonnen, Strategien zu implementieren, um dieses Problem zu entschärfen. Zum Beispiel erfordert Safari 12.1 jetzt — und andere Browser tun dies entweder bereits oder planen es — dass der Benutzer in irgendeiner Weise mit der Seite interagiert, bevor die Seite die Erlaubnis anfordern kann, Push-Benachrichtigungen durchzuführen. Dies verhindert zumindest, dass der Benutzer spontan auf diese Frage auf Webseiten stößt, die er nur einmal flüchtig betrachtet hat und die er selten, wenn überhaupt, noch einmal ansehen wird.

Im Fall von Firefox siehe [Firefox Bug 1524619](https://bugzil.la/1524619), in dem wir feststellen, dass Firefox 68 dies implementiert, standardmäßig deaktiviert, hinter der Einstellung `dom.webnotifications.requireuserinteraction`.

## Siehe auch

- [Notifications API](/de/docs/Web/API/Notifications_API)
- [Using the Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Push API](/de/docs/Web/API/Push_API)
