---
title: Was ist eine Progressive Web App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Eine Progressive Web App (PWA) ist eine App, die mit Technologien der Webplattform erstellt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine Geräteklasse entwickelt, wie beispielsweise ein iOS- oder Android-Gerät, in der Regel unter Verwendung eines SDKs, das vom Plattformanbieter bereitgestellt wird. Sie werden normalerweise über den App-Store des Anbieters vertrieben, wo der Benutzer sie finden und installieren kann, wodurch sie für den Benutzer wie eine dauerhafte, zusätzliche Funktion seines Geräts erscheinen, die dessen Fähigkeiten in gewisser Weise erweitert.

Die Vorteile von plattformspezifischen Apps umfassen:

- **Einfacher Zugang für Benutzer**: Sie erhalten ihr eigenes Icon auf dem Gerät, was es den Benutzern erleichtert, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können arbeiten, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es beispielsweise einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer anzuzeigen. Es ermöglicht auch einer Nachrichten-App, im Hintergrund zu aktualisieren, sodass sie auch bei Offline-Zustand des Geräts neue Inhalte anzeigen kann.
- **Eigene Benutzeroberfläche**: Sie können eine eigene, unverwechselbare, immersive Benutzeroberfläche implementieren.
- **OS-Integration**: Sie können in das Host-OS integriert werden: Beispielsweise kann sich eine Messaging-App als Share-Ziel registrieren lassen, wodurch Benutzer ein Bild in der Foto-App auswählen und es mit der Messaging-App senden können. Sie können auch auf Gerätefunktionen wie Kamera, GPS oder Beschleunigungsmesser zugreifen.
- **App-Store-Integration**: Sie werden über den App-Store verteilt, was den Nutzern einen zentralen Ort bietet, um sie zu finden und eine konsistente Möglichkeit zu geben, zu entscheiden, ob sie installiert werden soll.

## Traditionelle Websites

Traditionell sind Websites eher "etwas, das der Benutzer besucht" als "etwas, das der Benutzer hat". Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn er sie nicht verwendet, sie kann nur erreicht werden, indem der Benutzer den Browser öffnet und zur Seite navigiert, und sie hängt stark von der Netzwerkverbindung ab.

Jedoch haben Websites einige Vorteile gegenüber plattformspezifischen Apps, darunter:

- **Einziger Codebasis**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website von einer einzigen Codebasis aus auf verschiedenen Betriebssystemen und Geräteklassen ausgeführt werden.
- **Verbreitung über das Web**: Das Web ist eine großartige Distributionsplattform. Websites werden von Suchmaschinen indexiert und können über URLs geteilt und aufgerufen werden. Eine Website kann ohne die Notwendigkeit, sich bei einem App-Store eines Anbieters anzumelden, verteilt werden.

## Progressive Web Apps

Progressive Web Apps kombinieren die besten Funktionen traditioneller Websites und plattformspezifischer Apps.

PWAs haben die Vorteile von Websites, einschließlich:

- PWAs werden mit Standardtechnologien der Webplattform entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen von einer einzigen Codebasis auslaufen können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs haben auch viele der Vorteile plattformspezifischer Apps, einschließlich:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:
  - Die PWA kann über den App-Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Einmal installiert, erhält die PWA ein App-Icon auf dem Gerät, neben plattformspezifischen Apps.
  - Einmal installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website im Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, während die Seite im Browser geladen ist. Eine PWA kann:
  - Arbeiten, während das Gerät keine Netzwerkverbindung hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen über das OS-[Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) anzeigen.

- PWAs können [den ganzen Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt in der Benutzeroberfläche des Browsers zu laufen.
- PWAs können ins Gerät integriert werden, indem sie sich als Share-Ziele und -Quellen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores sowie offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es optisch offensichtlich, dass die Website "im Browser läuft". Die Benutzeroberfläche des Browsers bietet einen sichtbaren Rahmen um die Website, inklusive UI-Features wie Vor-/Zurück-Schaltflächen und einen Titel für die Seite. Die Web-APIs, die Ihre Website aufruft, werden vom Browser-Engine implementiert.

PWAs sehen typischerweise wie plattformspezifische Apps aus – sie werden in der Regel ohne die Benutzeroberfläche des Browsers angezeigt – aber sie sind, was die Technik betrifft, immer noch Websites. Das bedeutet, dass sie einen Browser-Engine benötigen, wie die in Chrome oder Firefox, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Plattform-OS die App und stellt die Umgebung bereit, in der sie läuft. Bei einer PWA übernimmt ein Browser-Engine diese Hintergrundrolle, genau wie bei normalen Websites.

![Diagramm zum Vergleich der Ausführungsumgebung für traditionelle Websites, PWAs und plattformspezifische Apps](pwa-environment.svg)

In unserer Dokumentation für PWAs beziehen wir uns manchmal auf den Browser, der diese Hintergrundrolle übernimmt. Wir könnten beispielsweise sagen: "Der Browser startet den Service-Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hierbei ist die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es genauso gut das Betriebssystem sein, das sie gestartet hat. Bei manchen Systemen, wie Chromebooks, könnte es sogar keine Unterscheidung zwischen "dem Browser" und "dem Betriebssystem" geben.

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Merkmale wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie eine normale Website hat das geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Merkmale:

- Eine [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest)-Datei, die mindestens Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie den Namen der App und das Icon.
- Optional ein [Service-Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung bereitzustellen.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie [Themenfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [Hintergrundfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color), sowie ihr Verhalten, einschließlich der Fähigkeit, [als Share-Ziel](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) für Daten aus anderen Apps zu fungieren oder [bestimmte Dateitypen zu handhaben](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers).

#### Service-Worker

Obwohl eine PWA keinen Service-Worker zum Installieren benötigt, werden Service-Worker oft mit PWAs verwendet, um zumindest eine minimale Offline-Erfahrung zu bieten.

Service-Worker fördern eine Architektur, bei der die Seiten der App – das heißt der traditionelle Teil einer Website – die Benutzeroberfläche implementieren, und der Service-Worker ein Backend implementiert, das [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann, wodurch die PWA mehr wie eine App als eine Website funktioniert. Dies liegt daran, dass Service-Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu bearbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als eine Sammlung von verknüpften Seiten gebaut. Wenn der Benutzer auf einen Link von einer Seite auf eine andere Seite derselben Website klickt, lädt der Browser die neue Seite als komplett neues Objekt, inklusive des HTML und der vom HTML geladenen Subressourcen wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page-App")}} besteht die Seite aus einer einzigen HTML-Seite, und wenn der Benutzer interne Links anklickt, wird dies von JavaScript behandelt, das neue Inhalte vom Server holt und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näherkommt, und daher werden PWAs oft als Single-Page-Apps implementiert. Insbesondere machen es Single-Page-Apps einfacher, eine nahtlose Benutzeroberfläche zu erreichen, in der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, wenn der Benutzer mit der App interagiert.

Allerdings müssen PWAs nicht als Single-Page-Apps implementiert werden, und Single-Page-Apps müssen keine PWAs sein.

### Progressive Verbesserung

Während {{Glossary("Progressive_Enhancement", "progressive Verbesserung")}} für die meisten Websites ein wünschenswertes Attribut ist, ist es besonders wichtig für PWAs, die darauf ausgelegt sind, auf einer Vielzahl von Geräten zu laufen und oft fortschrittliche Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Ein grundlegender Bestandteil der progressiven Verbesserung ist, dass, wenn der Benutzer Ihre PWA im Web besucht, indem er ihre URL in einem Browser eingibt, der Benutzer mit der App wie mit einer normalen Website interagieren kann. Wenn der Browser die Installation der App unterstützt, wird der Benutzer dazu aufgefordert, sie zu installieren, und die App erscheint als neue Funktion auf seinem Gerät.

PWAs sollten Feature-Detection für fortschrittliche APIs durchführen und akzeptable Fallback-Erfahrungen bieten.

Zum Beispiel ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service-Worker zu bitten, eine Netzwerk-Anfrage durchzuführen, sobald das Gerät verbunden ist. Ein klassischer Anwendungsfall dafür ist Messaging. Angenommen, der Benutzer erstellt eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App den Benutzer darüber informieren, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später erneut zu versuchen.
