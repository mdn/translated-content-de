---
title: Was ist eine Progressive Web App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

Eine Progressive Web App (PWA) ist eine Anwendung, die mit Webplattform-Technologien entwickelt wird, aber ein Benutzererlebnis wie eine plattformspezifische App bietet.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine bestimmte Geräteklasse entwickelt, etwa für ein iOS- oder Android-Gerät. Dafür wird in der Regel ein SDK des Plattformanbieters verwendet. Die Apps werden üblicherweise über den App-Store des Anbieters vertrieben, wo Benutzer sie finden und installieren können. Anschließend erscheinen sie als dauerhaft verfügbare zusätzliche Funktion des Geräts, die dessen Möglichkeiten erweitert.

Zu den Vorteilen plattformspezifischer Apps gehören:

- **Einfacher Zugriff**: Sie erhalten ein eigenes Symbol auf dem Gerät, sodass Benutzer sie leicht finden und öffnen können.
- **Offline- und Hintergrundbetrieb**: Sie können arbeiten, während Benutzer nicht mit ihnen interagieren oder das Gerät offline ist. So kann beispielsweise eine Chat-App Nachrichten empfangen, während sie nicht geöffnet ist, und eine Benachrichtigung anzeigen. Eine Nachrichten-App kann sich im Hintergrund aktualisieren und dadurch aktuelle Inhalte anzeigen, selbst wenn das Gerät später offline ist.
- **Eigene Benutzeroberfläche**: Sie können eine unverwechselbare, immersive Benutzeroberfläche bereitstellen.
- **Integration in das Betriebssystem**: Sie können in das Betriebssystem des Geräts integriert werden. Beispielsweise kann sich eine Messaging-App als Freigabeziel registrieren, sodass Benutzer ein Bild in der Foto-App auswählen und über die Messaging-App versenden können. Außerdem können solche Apps auf Gerätefunktionen wie Kamera, GPS oder Beschleunigungssensor zugreifen.
- **Integration in den App-Store**: Sie werden über den App-Store vertrieben. Dadurch haben Benutzer einen zentralen Ort, um Apps zu finden, und können auf einheitliche Weise entscheiden, ob sie diese installieren möchten.

## Herkömmliche Websites

Herkömmliche Websites sind weniger „etwas, das Benutzer haben“, sondern eher „ein Ort, den Benutzer besuchen“. Typischerweise ist eine Website nicht auf dem Gerät präsent, wenn Benutzer sie nicht aufrufen. Sie ist nur erreichbar, indem sie einen Browser öffnen und zur Website navigieren, und sie ist stark von einer Netzwerkverbindung abhängig.

Websites haben gegenüber plattformspezifischen Apps jedoch einige Vorteile:

- **Eine gemeinsame Codebasis**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website mit einer einzigen Codebasis auf verschiedenen Betriebssystemen und Geräteklassen ausgeführt werden.
- **Verbreitung über das Web**: Das Web ist eine hervorragende Verbreitungsplattform. Websites werden von Suchmaschinen indexiert und lassen sich allein über URLs teilen und aufrufen. Eine Website kann verbreitet werden, ohne dass eine Registrierung beim App-Store eines Anbieters erforderlich ist.

## Progressive Web Apps

Progressive Web Apps vereinen die besten Eigenschaften herkömmlicher Websites und plattformspezifischer Apps.

PWAs bieten die Vorteile von Websites, darunter:

- PWAs werden mit standardisierten Webplattform-Technologien entwickelt und können daher mit einer einzigen Codebasis auf mehreren Betriebssystemen und Geräteklassen ausgeführt werden.
- PWAs können direkt über das Web aufgerufen werden.

PWAs bieten außerdem viele Vorteile plattformspezifischer Apps:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:
  - Die PWA kann über den App-Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben den plattformspezifischen Apps.
  - Nach der Installation kann die PWA als eigenständige App gestartet werden, statt als Website in einem Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, solange ihre Seite im Browser geladen ist. Eine PWA kann:
  - Funktionieren, während das Gerät keine Netzwerkverbindung hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Über das [Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) des Betriebssystems Benachrichtigungen anzeigen.

- PWAs können [den gesamten Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), statt innerhalb der Browseroberfläche ausgeführt zu werden.
- PWAs können in das Gerät integriert werden, sich als Freigabeziele und -quellen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können sowohl über App-Stores als auch frei über das Web verbreitet werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist sichtbar, dass die Website „im Browser ausgeführt wird“. Die Browseroberfläche bildet einen sichtbaren Rahmen um die Website und enthält Bedienelemente wie Zurück- und Vorwärts-Schaltflächen sowie einen Seitentitel. Die Web-APIs, die Ihre Website aufruft, werden von der Browser-Engine implementiert.

PWAs sehen normalerweise wie plattformspezifische Apps aus – sie werden meist ohne die umgebende Browseroberfläche angezeigt –, technisch gesehen sind sie aber weiterhin Websites. Deshalb benötigen sie eine Browser-Engine, beispielsweise die von Chrome oder Firefox, die sie verwaltet und ausführt. Bei einer plattformspezifischen App übernimmt das Betriebssystem der Plattform die Verwaltung und stellt die Laufzeitumgebung bereit. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundaufgabe, genau wie bei gewöhnlichen Websites.

![Diagramm zum Vergleich der Laufzeitumgebungen herkömmlicher Websites, PWAs und plattformspezifischer Apps](pwa-environment.svg)

In unserer Dokumentation zu PWAs beziehen wir uns gelegentlich auf diese Hintergrundrolle des Browsers. Wir könnten beispielsweise schreiben: „Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird.“ Die Aktivität des Browsers findet dabei vollständig im Hintergrund statt. Aus Sicht der PWA könnte ebenso gut das Betriebssystem sie gestartet haben. Bei manchen Systemen, etwa Chromebooks, gibt es möglicherweise nicht einmal eine Unterscheidung zwischen „dem Browser“ und „dem Betriebssystem“.

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie dieselben grundlegenden Bestandteile wie andere Websites: mindestens eine HTML-Seite, die sehr wahrscheinlich CSS und JavaScript lädt. Wie bei einer gewöhnlichen Website verfügt das von der Seite geladene JavaScript über ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle darüber verfügbaren Web-APIs zugreifen.

Darüber hinaus hat eine PWA einige zusätzliche Merkmale:

- Eine [Web-App-Manifestdatei](/de/docs/Web/Progressive_web_apps/Manifest), die mindestens die Informationen bereitstellt, die der Browser zur Installation der PWA benötigt, beispielsweise den App-Namen und das App-Symbol.
- Optional einen [Service Worker](/de/docs/Web/API/Service_Worker_API), der eine Offline-Nutzung ermöglicht.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und [das Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele weitere Aspekte des Erscheinungsbilds der PWA festlegen, etwa die [Designfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und die [Hintergrundfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color). Es kann auch ihr Verhalten festlegen, darunter die Möglichkeit, [als Freigabeziel](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) für Daten aus anderen Apps zu dienen oder [bestimmte Dateitypen zu verarbeiten](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers).

#### Service Worker

Eine PWA benötigt für die Installation keinen Service Worker. Dennoch werden Service Worker häufig mit PWAs verwendet, um zumindest eine grundlegende Offline-Nutzung zu ermöglichen.

Service Worker begünstigen eine Architektur, bei der die Seiten der App – also der herkömmliche Teil einer Website – die Benutzeroberfläche implementieren. Der Service Worker implementiert dabei ein Backend, das den [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann. Dadurch verhält sich die PWA eher wie eine App als wie eine Website. Das ist möglich, weil der Browser Service Worker bei Bedarf im Hintergrund starten kann, beispielsweise um eine Push-Benachrichtigung zu verarbeiten.

### PWAs und Single-Page-Apps

Herkömmlicherweise besteht eine Website aus mehreren miteinander verknüpften Seiten. Wenn Benutzer auf einen Link klicken, der von einer Seite der Website zu einer anderen Seite derselben Website führt, lädt der Browser die neue Seite vollständig neu – einschließlich des HTML und der vom HTML geladenen Unterressourcen wie CSS und JavaScript. Eine {{Glossary("SPA", "Single-Page-App")}} hingegen besteht aus einer einzigen HTML-Seite. Wenn Benutzer auf interne Links klicken, ruft JavaScript neue Inhalte vom Server ab und aktualisiert die entsprechenden Teile der Seite.

Single-Page-Apps können ein Benutzererlebnis bieten, das dem plattformspezifischer Apps näherkommt. Deshalb werden PWAs häufig als Single-Page-Apps implementiert. Insbesondere erleichtern Single-Page-Apps eine nahtlose Benutzeroberfläche: Benutzer sehen eine einzige, konsistente Seite, von der bei der Interaktion mit der App nur die jeweils relevanten Teile aktualisiert werden.

PWAs müssen jedoch keine Single-Page-Apps sein, und Single-Page-Apps müssen keine PWAs sein.

### Progressive Verbesserung

{{Glossary("Progressive_Enhancement", "Progressive Verbesserung")}} ist für die meisten Websites wünschenswert. Für PWAs ist sie besonders wichtig, da diese auf einer Vielzahl von Geräten laufen sollen und häufig fortgeschrittene Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Ein grundlegender Aspekt der progressiven Verbesserung ist: Wenn Benutzer Ihre PWA im Web besuchen, indem sie ihre URL in einen Browser eingeben, können sie mit der App wie mit einer gewöhnlichen Website interagieren. Kann der Browser die PWA jedoch installieren, werden sie zur Installation aufgefordert, und die App erscheint als neue Funktion auf ihrem Gerät.

PWAs sollten prüfen, ob fortgeschrittene APIs verfügbar sind, und andernfalls brauchbare Alternativen anbieten.

Mit der [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) kann eine PWA beispielsweise einen Service Worker beauftragen, eine Netzwerkanfrage zu stellen, sobald das Gerät wieder eine Verbindung hat. Ein klassischer Anwendungsfall ist der Nachrichtenversand: Angenommen, Benutzer verfassen eine Nachricht, aber das Gerät ist offline, wenn sie sie senden möchten. Mit der Background Sync API kann das Gerät die Nachricht im Hintergrund senden, sobald wieder eine Verbindung besteht. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App darüber informieren, dass die Nachricht nicht gesendet werden konnte, und die Möglichkeit bieten, es später erneut zu versuchen.
