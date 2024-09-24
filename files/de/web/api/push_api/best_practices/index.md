---
title: Web-Push-API-Benachrichtigungen – Best Practices
slug: Web/API/Push_API/Best_Practices
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{DefaultAPISidebar("Push API") }}

Dieser Artikel bietet eine nützliche Zusammenfassung von Best Practices, die bei der Entwicklung von Websites und Anwendungen, die Push-Benachrichtigungen zur Nutzerbindung verwenden, zu berücksichtigen sind.

> „Wenn es gut gemacht ist, ist es nett, aber wenn nicht, ist es wirklich nervig.“ — Gespräch zwischen zwei Browser-Entwicklern über die Ethik von Push-Benachrichtigungen überhört.

## Übersicht über Web-Push-Benachrichtigungen

Web-Push-Benachrichtigungen (erstellt mithilfe einer Kombination aus den [Notifications](/de/docs/Web/API/Notifications_API), [Push](/de/docs/Web/API/Push_API) und [Service Worker](/de/docs/Web/API/Service_Worker_API) APIs) sind Teil des wachsenden Lärms, den Produktentwickler und Vermarkter nutzen, um Aufmerksamkeit für ihre Websites zu erlangen. Sucht man im Web nach „Web-Push-Benachrichtigungen“, findet man Artikel von Marketing-Experten, die glauben, dass man Push verwenden sollte, um Personen, die Ihre Website verlassen haben, erneut anzusprechen, sodass sie einen Kauf abschließen, die neuesten Nachrichten erhalten oder Links zu empfohlenen Produkten bekommen können.

### Die dunkle Seite

Ihre Neuheit bietet eine neue und unerschlossene Möglichkeit für einfallsreiche Websites, potenzielle Kunden zu erreichen. Hat der Kunde die Registerkarte gewechselt, um eine E-Mail zu beantworten? Gewinnen Sie sie mit einem begrenzten Angebot für kostenlosen Versand zurück, das sie nicht ignorieren können!

Aber wirklich, ist dies der beste Einsatz von Push-Benachrichtigungen? Oder ist es eine neue Iteration der alten und müden Pop-up-Werbung?

> „Web-Push landet nicht im Spam-Ordner. Es kann auch nicht durch Werbeblocker blockiert werden. Es erscheint direkt auf Ihrem Desktop, selbst wenn die Website geschlossen ist. Auf Mobilgeräten erscheint es in der Benachrichtigungsleiste, genau wie App-Push-Benachrichtigungen, selbst wenn der Browser nicht läuft.“ — eine ungenannte Marketing-Website

### Positive Anwendungen von Push

Aber es gibt auch eine positive und nützliche Seite von Push-Benachrichtigungen. Angenommen, Sie und Ihr Team verwenden normalerweise ein Chat-Programm zur Kommunikation, aber heute arbeiten Sie glücklich irgendwo und es tritt ein Problem auf. Sagen wir, Ihr Programm-Manager hat einen Fehler in den Genehmigungen gefunden und möchte Ihr Feedback zu etwas einholen, bevor er fortfährt.

Nach einigen erfolglosen Versuchen, Ihre Aufmerksamkeit zu erlangen, senden sie Ihnen eine E-Mail und Ihre E-Mail-App erzeugt eine Push-Benachrichtigung, die Sie erfolgreich alarmiert, obwohl Ihre Web-Mail-App nicht geöffnet ist.

In diesem Dokument sprechen wir über den ethischen Einsatz von Web-Push-Benachrichtigungen. Manchmal können sie Frustration und Ärger beseitigen, und manchmal können sie diese verursachen, und es liegt an Ihnen als Entwickler, kluge Empfehlungen (und Entscheidungen) zum Einsatz von Push-Benachrichtigungen zu treffen.

## Was möchten Sie mit dieser Push-Benachrichtigung erreichen?

Wie bei allem gilt: Mit großer Macht kommt große Verantwortung. Jede Push-Benachrichtigung sollte nützlich und zeitkritisch sein, und der Benutzer sollte immer um Erlaubnis gebeten werden, bevor die erste gesendet wird, und eine einfache Möglichkeit haben, sich von weiteren Benachrichtigungen in der Zukunft abzumelden.

Es gibt einige grundlegende Fragen, die Sie beantworten können, um festzustellen, ob eine Push-Benachrichtigung erforderlich ist:

- Wartet jemand in Echtzeit auf eine Antwort? In unserem obigen Beispiel wartet der Programm-Manager auf Ihre Antwort, und daher ist eine Push-Benachrichtigung angebracht.
- Ist eine minutengenaue Aktualisierung erforderlich? Ich nutze einen Dienst, der verschiedene soziale Medienquellen aggregiert. Wenn eine Geschichte, die mich interessiert, im Trend liegt, möchte ich eine Benachrichtigung erhalten!
- Gibt es aktuelle Nachrichten, die zeitnah sind? Hier wird es etwas knifflig. Manchmal fordern Nachrichtenseiten Push-Benachrichtigungen an, um im Wesentlichen zu sagen: „Schau mich an! Schau mich an!“ Es hängt alles davon ab, was der Benutzer möchte, und Sie können sein Verhalten nutzen, um eine Absicht zu bestimmen. Wenn der Benutzer beispielsweise mehr als einen Artikel liest oder mehrere Minuten auf Ihrer Seite verweilt, könnte er daran interessiert sein, Aktualisierungen zu erhalten.

Neben der Frage, ob eine Push-Benachrichtigung überhaupt erforderlich ist, gibt es viele verschiedene Arten von Push-Benachrichtigungen, die von informell und verschwindend bis hin zu dauerhaft und interaktionsbedürftig reichen.

Wir raten Ihnen, die interaktionsbedürftigen sehr sparsam zu verwenden, da sie am lästigsten sein können. Ihre Benachrichtigungen sollten unterstützend und nicht störend sein.

## Vertrauen aufbauen

Einige Studien haben gezeigt, dass bis zu 60 % der Push-Benachrichtigungen blockiert werden. Das Zulassen, dass Ihre Website in Echtzeit Benachrichtigungen sendet, erfordert Vertrauen. Sie können Vertrauen aufbauen, indem Sie eine gut gestaltete Website präsentieren, die guten Inhalt liefert, die den Benutzer respektiert, und einen klaren Mehrwert für das Akzeptieren von Push-Benachrichtigungen aufzeigt.

## Browser-Minderungsstrategien

Aufgrund von Missbrauch von Push-Benachrichtigungen in der Vergangenheit haben Entwickler von Webbrowsern begonnen, Strategien zu implementieren, um dieses Problem abzumildern. Zum Beispiel erfordert Safari 12.1 jetzt – und andere Browser tun dies bereits oder planen, dies zu tun – dass der Benutzer in irgendeiner Weise mit der Seite interagiert, bevor die Seite um Erlaubnis bitten kann, Push-Benachrichtigungen durchzuführen. Dies verhindert zumindest, dass der Benutzer spontan auf Webseiten, die er nur einmal überflogen hat und die er möglicherweise selten oder nie wieder ansehen wird, mit dieser Frage konfrontiert wird.

Im Fall von Firefox siehe [Firefox-Bug 1524619](https://bugzil.la/1524619), in dem wir feststellen, dass Firefox 68 dies implementiert, standardmäßig deaktiviert, hinter der Präferenz `dom.webnotifications.requireuserinteraction`.

## Siehe auch

- [Notifications API](/de/docs/Web/API/Notifications_API)
- [Verwendung der Notifications API](/de/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Push API](/de/docs/Web/API/Push_API)
