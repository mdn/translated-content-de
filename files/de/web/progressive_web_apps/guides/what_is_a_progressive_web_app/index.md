---
title: Was ist eine progressive Web-App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 1c8c727322725bb2e5f658fb0a94a362c1f16fe8
---

{{PWASidebar}}

Eine progressive Web-App (PWA) ist eine App, die mit Technologien der Webplattform erstellt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine bestimmte Geräteklasse entwickelt, wie zum Beispiel ein iOS- oder Android-Gerät, in der Regel mit einem vom Plattformanbieter bereitgestellten SDK. Sie werden normalerweise über den App Store des Anbieters vertrieben, wo der Benutzer sie finden und installieren kann, und erscheinen dem Benutzer anschließend wie eine permanente zusätzliche Funktion ihres Geräts, die dessen Möglichkeiten in gewisser Weise erweitert.

Die Vorteile plattformspezifischer Apps umfassen:

- **Einfacher Zugriff für Benutzer**: Sie erhalten ihr eigenes Symbol auf dem Gerät, was es den Benutzern erleichtert, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können betrieben werden, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es zum Beispiel einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und dem Benutzer eine Benachrichtigung anzuzeigen. Es ermöglicht auch einer Nachrichten-App, im Hintergrund zu aktualisieren, sodass sie frische Inhalte anzeigen kann, selbst wenn das Gerät offline ist.
- **Dedizierte Benutzeroberfläche**: Sie können ihre eigene, unverwechselbare, immersive Benutzeroberfläche implementieren.
- **Integration ins Betriebssystem**: Sie können in das Host-Betriebssystem integriert werden: Zum Beispiel kann eine Nachrichten-App als Freigabeziel registriert werden, wodurch Benutzer ein Bild in der Foto-App auswählen und es über die Nachrichten-App senden können. Sie können auch auf Gerätefunktionen wie die Kamera, GPS oder den Beschleunigungssensor zugreifen.
- **Integration in den App Store**: Sie werden über den App Store vertrieben, was den Benutzern einen einzigen Ort gibt, um sie zu finden, und eine konsistente Möglichkeit, zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Websites

Traditionell sind Websites weniger wie "etwas, das der Benutzer hat" und mehr wie "ein Ort, den der Benutzer besucht". Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn er nicht darauf zugreift, kann nur durch Öffnen des Browsers und Navigieren zur Site erreicht werden und ist stark von der Netzwerkkonnektivität abhängig.

Websites haben jedoch einige Vorteile gegenüber plattformspezifischen Apps, einschließlich:

- **Einzelner Codebestand**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Geräteklassen von einem einzigen Codebestand aus betrieben werden.
- **Verteilung über das Web**: Das Web ist eine großartige Distributionsplattform. Websites werden von Suchmaschinen indiziert und können einfach über URLs geteilt und aufgerufen werden. Eine Website kann verteilt werden, ohne sich in einem App Store eines Anbieters registrieren zu müssen.

## Progressive Web-Apps

Progressive Web-Apps kombinieren die besten Eigenschaften traditioneller Websites und plattformspezifischer Apps.

PWAs haben die Vorteile von Websites, einschließlich:

- PWAs werden mit Standard-Webplattform-Technologien entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen aus einem einzigen Codebestand betrieben werden können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs haben auch viele der Vorteile plattformspezifischer Apps, einschließlich:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:

  - Die PWA kann aus dem App Store der Plattform installiert werden oder direkt aus dem Web.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät neben plattformspezifischen Apps.
  - Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website im Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, während die Seite im Browser geladen ist. Eine PWA kann:

  - Arbeiten, während das Gerät keine Netzwerkkonnektivität hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen mit dem OS [Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) anzeigen.

- PWAs können [den gesamten Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt in der Browser-UI zu laufen.
- PWAs können in das Gerät integriert werden, indem sie sich als Freigabeziele und -quellen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores sowie offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es visuell offensichtlich, dass die Website "im Browser ausgeführt wird". Die Browser-UI bietet einen sichtbaren Rahmen um die Website, einschließlich UI-Elementen wie Vorwärts-/Zurück-Schaltflächen und einem Titel für die Seite. Die Web-APIs, die Ihre Website aufruft, werden durch die Browser-Engine implementiert.

PWAs sehen typischerweise wie plattformspezifische Apps aus － sie werden normalerweise ohne die Browser-UI um sie herum angezeigt － aber sie sind technologisch gesehen immer noch Websites. Das bedeutet, sie benötigen eine Browser-Engine, wie die in Chrome oder Firefox, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Betriebssystem der Plattform die App und bietet die Umgebung, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genau wie bei normalen Websites.

![Diagramm zum Vergleich der Laufzeitumgebung für traditionelle Websites, PWAs und plattformspezifische Apps](pwa-environment.svg)

In unserer Dokumentation zu PWAs beziehen wir uns manchmal darauf, dass der Browser diese Hintergrundrolle spielt. Wir könnten zum Beispiel sagen: "Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hierbei liegt die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es ebenso gut das Betriebssystem sein, das sie gestartet hat. Bei einigen Systemen, wie Chromebooks, gibt es möglicherweise keinen Unterschied zwischen "dem Browser" und "dem Betriebssystem."

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Merkmale wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS- und JavaScript-Dateien lädt. Wie eine normale Website hat das von der Seite geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die durch dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Merkmale:

- Eine [Web-App-Manifest](/de/docs/Web/Manifest)-Datei, die mindestens Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie den Namen und das Symbol der App.
- Optional ein [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und [das Manifest muss genug Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie z.B. [Themfarbe](/de/docs/Web/Manifest/theme_color) und [Hintergrundfarbe](/de/docs/Web/Manifest/background_color), sowie ihr Verhalten, einschließlich ihrer Fähigkeit, [als Freigabeziel](/de/docs/Web/Manifest/share_target) für Daten anderer Apps zu agieren oder [bestimmte Dateitypen zu verarbeiten](/de/docs/Web/Manifest/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker benötigt, um installiert zu werden, werden Service Worker oft mit PWAs verwendet, um mindestens eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, bei der die Seiten der App - das ist der traditionelle Teil einer Website - die Benutzeroberfläche implementieren, und der Service Worker ein Backend implementiert, das [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann, wodurch die PWA eher wie eine App als wie eine Website funktioniert. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu verarbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als Sammlung von miteinander verknüpften Seiten aufgebaut. Wenn der Benutzer auf einen Link von einer Seite der Site zu einer anderen Seite in derselben Site klickt, lädt der Browser die neue Seite als vollständig neue Einheit, einschließlich des HTML und der Unterressourcen, die das HTML lädt, wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page-App")}} besteht die Site aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies durch JavaScript behandelt, das neuen Inhalt vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näher kommt, daher werden PWAs oft als Single-Page-Apps implementiert. Insbesondere erleichtern Single-Page-Apps das Erreichen einer nahtlosen Benutzeroberfläche, bei der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

PWAs müssen jedoch nicht als Single-Page-Apps implementiert werden und Single-Page-Apps müssen nicht als PWAs implementiert sein.

### Progressive Verbesserung

Während {{Glossary("Progressive_Enhancement", "progressive Verbesserung")}} ein wünschenswertes Attribut für die meisten Websites ist, ist es besonders wichtig für PWAs, die darauf ausgelegt sind, auf einer Vielzahl von Geräten ausgeführt zu werden und häufig fortschrittliche Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Eine grundlegende Komponente der progressiven Verbesserung besteht darin, dass der Benutzer, wenn er Ihre PWA im Web besucht, indem er deren URL in einen Browser eingibt, mit der App wie mit einer normalen Website interagieren kann. Aber wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren und die App erscheint als neue Funktion auf ihrem Gerät.

PWAs sollten Feature-Erkennung für fortschrittliche APIs durchführen und akzeptable Fallback-Erfahrungen bieten.

Zum Beispiel ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service Worker zu bitten, eine Netzwerkabfrage auszuführen, sobald das Gerät Konnektivität hat. Ein klassischer Anwendungsfall hierfür ist Messaging. Stellen Sie sich vor, der Benutzer verfasst eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App dem Benutzer mitteilen, dass die Nachricht nicht gesendet werden konnte, sodass er später erneut versuchen kann.
