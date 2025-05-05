---
title: Was ist eine Progressive Web App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Eine Progressive Web App (PWA) ist eine Anwendung, die mit Technologien der Webplattform entwickelt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine bestimmte Geräteklasse entwickelt, wie z.B. ein iOS- oder Android-Gerät, und nutzen dabei im Allgemeinen ein SDK des Plattformanbieters. Sie werden in der Regel über den App-Store des Anbieters bereitgestellt, wo der Nutzer sie finden und installieren kann. Danach erscheinen sie dem Nutzer als dauerhafte zusätzliche Funktion seines Geräts, die dessen Fähigkeiten auf irgendeine Weise erweitert.

Die Vorteile plattformspezifischer Apps umfassen:

- **Einfacher Zugang für Benutzer**: Sie erhalten ein eigenes Symbol auf dem Gerät, was es den Benutzern leicht macht, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können funktionieren, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es einer Chat-App beispielsweise, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer zu senden. Es ermöglicht auch, dass eine Nachrichten-App im Hintergrund aktualisiert wird, um frische Inhalte anzuzeigen, selbst wenn das Gerät offline ist.
- **Dedizierte Benutzeroberfläche**: Sie können ihre eigene unverwechselbare, immersive Benutzeroberfläche implementieren.
- **OS-Integration**: Sie können in das Host-OS integriert werden: Zum Beispiel kann sich eine Messaging-App als Freigabeziel registrieren, was Benutzern ermöglicht, ein Bild in der Foto-App auszuwählen und es mit der Messaging-App zu senden. Sie können auch auf Gerätefunktionen wie die Kamera, GPS oder das Beschleunigungsmesser zugreifen.
- **App-Store-Integration**: Sie werden über den App-Store vertrieben, was den Benutzern einen zentralen Ort bietet, um sie zu finden, sowie eine konsistente Methode, um zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Webseiten

Traditionell sind Webseiten weniger wie "etwas, das der Benutzer hat" und mehr wie "ein Ort, den der Benutzer besucht". In der Regel hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn der Benutzer sie nicht aufruft. Sie kann nur vom Benutzer durch das Öffnen des Browsers und das Navigieren zur Webseite erreicht werden und ist stark von der Netzwerkverbindung abhängig.

Dennoch haben Webseiten einige Vorteile gegenüber plattformspezifischen Apps, einschließlich:

- **Einziger Codebestand**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Geräteklassen mit einem einzigen Codebestand laufen.
- **Vertrieb über das Web**: Das Web ist eine hervorragende Vertriebsplattform. Webseiten werden von Suchmaschinen indexiert und können einfach über URLs geteilt und aufgerufen werden. Eine Website kann verbreitet werden, ohne dass eine Anmeldung in einem App-Store eines Anbieters erforderlich ist.

## Progressive Web Apps

Progressive Web Apps kombinieren die besten Merkmale traditioneller Webseiten und plattformspezifischer Apps.

PWAs haben die Vorteile von Webseiten, einschließlich:

- PWAs werden mit standardmäßigen Technologien der Webplattform entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen mit einem einzigen Codebestand ausgeführt werden können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs haben auch viele der Vorteile plattformspezifischer Apps, einschließlich:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:

  - Die PWA kann aus dem App-Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert und der Installationsprozess angepasst werden.
  - Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
  - Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

- [**PWAs können im Hintergrund und offline operieren**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, während die Seite im Browser geladen ist. Eine PWA kann:

  - Funktionieren, während das Gerät keine Netzwerkverbindung hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen über das OS-Benachrichtigungssystem [notifications](/de/docs/Web/API/Notifications_API) anzeigen.

- PWAs können [den ganzen Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt nur im Browser-UI zu laufen.
- PWAs können in das Gerät integriert werden, indem sie sich als Freigabeziele und -quellen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores sowie offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es optisch offensichtlich, dass die Website "im Browser läuft". Die Benutzeroberfläche des Browsers liefert einen sichtbaren Rahmen um die Website, einschließlich UI-Elementen wie Vorwärts- und Rückwärts-Schaltflächen und einem Titel für die Seite. Die Web-APIs, die Ihre Website aufruft, werden von der Browser-Engine implementiert.

PWAs sehen typischerweise wie plattformspezifische Apps aus － sie werden normalerweise ohne die Browser-UI um sie herum angezeigt － aber technologisch gesehen sind sie dennoch Websites. Das bedeutet, dass sie eine Browser-Engine benötigen, wie die in Chrome oder Firefox, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Plattformbetriebssystem die App und bietet die Umgebung, in der sie ausgeführt wird. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genauso wie bei normalen Websites.

![Diagramm, das die Laufzeitumgebung für traditionelle Websites, PWAs und plattformspezifische Apps vergleicht](pwa-environment.svg)

In unserer Dokumentation zu PWAs verweisen wir manchmal darauf, dass der Browser diese Hintergrundrolle spielt. Wir könnten beispielsweise sagen: "Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hierbei ist die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es genauso gut das Betriebssystem sein, das sie gestartet hat. Für einige Systeme, wie Chromebooks, gibt es möglicherweise sogar keinen Unterschied zwischen "dem Browser" und "dem Betriebssystem."

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Merkmale wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie eine normale Website hat das von der Seite geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Merkmale:

- Eine [Web App Manifest-Datei](/de/docs/Web/Progressive_web_apps/Manifest), die mindestens Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie etwa den App-Namen und das Symbol.
- Optional einen [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.

#### Web App Manifest

Eine PWA muss ein Web App Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie z.B. [Theme-Farbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [Hintergrundfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color), und ihr Verhalten, einschließlich ihrer Fähigkeit, [als Freigabeziel zu fungieren](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) für Daten von anderen Apps oder [bestimmte Dateitypen zu verarbeiten](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker benötigt, um installiert zu werden, werden Service Worker oft mit PWAs verwendet, um zumindest eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, in der die Seiten der App - also der traditionelle Teil einer Website - die Benutzeroberfläche implementieren und der Service Worker ein Backend bereitstellt, das [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützt, sodass die PWA mehr wie eine App als eine Website funktioniert. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu bearbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als Sammlung miteinander verlinkter Seiten aufgebaut. Wenn der Benutzer auf einen Link von einer Seite der Website zu einer anderen Seite in derselben Website klickt, lädt der Browser die neue Seite als vollständig neue Entität, einschließlich des HTML und der vom HTML geladenen Subressourcen wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page-App")}} besteht die Website aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies von JavaScript bearbeitet, das neue Inhalte vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näherkommt, daher werden PWAs oft als Single-Page-Apps implementiert. Insbesondere machen Single-Page-Apps es einfacher, eine nahtlose Benutzeroberfläche zu erreichen, in der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

Allerdings müssen PWAs keine Single-Page-Apps sein, und Single-Page-Apps müssen keine PWAs sein.

### Progressive Verbesserung

Während {{Glossary("Progressive_Enhancement", "Progressive Enhancement")}} ein wünschenswertes Attribut für die meisten Websites ist, ist es besonders wichtig für PWAs, die erwarten, auf einer Vielzahl von Geräten zu laufen und oft erweiterte Web-APIs zu nutzen, die möglicherweise nicht von allen Browsern unterstützt werden.

Eine grundlegende Komponente des Progressive Enhancement ist, dass, wenn der Benutzer Ihre PWA im Web besucht, indem er ihre URL in einem Browser eingibt, der Benutzer mit der App wie mit einer normalen Website interagieren kann. Aber wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren, und die App erscheint als neue Funktion auf seinem Gerät.

PWAs sollten Funktionsprüfung für erweiterte APIs durchführen und akzeptable Fallback-Erfahrungen bieten.

Ein Beispiel: Die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) ermöglicht es einer PWA, einen Service Worker darum zu bitten, eine Netzwerk-Anfrage auszuführen, sobald das Gerät eine Verbindung hat. Ein klassischer Anwendungsfall hierfür ist Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn er versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App dem Benutzer mitteilen, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später erneut zu versuchen.
