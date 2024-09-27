---
title: Was ist eine progressive Web-App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 1c8c727322725bb2e5f658fb0a94a362c1f16fe8
---

{{PWASidebar}}

Eine progressive Web-App (PWA) ist eine App, die mit Technologien der Webplattform erstellt wurde, aber eine Benutzererfahrung bietet, die der einer plattformspezifischen App ähnelt.

## Plattformspezifische Apps

_Platformspezifische Apps_ werden für ein spezifisches Betriebssystem (OS) und/oder eine Geräteklasse entwickelt, wie ein iOS- oder Android-Gerät, in der Regel mit einem vom Plattformanbieter bereitgestellten SDK. Sie werden normalerweise über den App-Store des Anbieters verteilt, wo der Benutzer sie finden und installieren kann. Anschließend erscheinen sie dem Benutzer wie eine permanente zusätzliche Funktion seines Geräts, die dessen Fähigkeiten auf irgendeine Weise erweitert.

Die Vorteile plattformspezifischer Apps umfassen:

- **Einfacher Zugriff für Benutzer**: Sie erhalten ihr eigenes Symbol auf dem Gerät, was es den Benutzern leicht macht, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können arbeiten, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht beispielsweise einer Chat-App, Nachrichten zu empfangen, selbst wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer anzuzeigen. Es ermöglicht auch einer Nachrichten-App, im Hintergrund zu aktualisieren, so dass sie auch bei Offline-Betrieb des Geräts aktuelle Inhalte anzeigen kann.
- **Dedizierte Benutzeroberfläche**: Sie können ihre eigene unverwechselbare, immersive Benutzeroberfläche implementieren.
- **OS-Integration**: Sie können in das Host-Betriebssystem integriert werden: zum Beispiel kann sich eine Messaging-App als Freigabeziel registrieren, sodass Benutzer ein Bild in der Foto-App auswählen und mit der Messaging-App senden können. Sie können auch auf Gerätefunktionen wie die Kamera, GPS oder den Beschleunigungsmesser zugreifen.
- **App-Store-Integration**: Sie werden über den App-Store verteilt, was den Benutzern einen einzigen Ort bietet, um sie zu finden und einen konsistenten Weg, um zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Webseiten

Traditionell sind Webseiten weniger wie "etwas, das der Benutzer hat" und mehr wie "ein Ort, den der Benutzer besucht". Typischerweise hat eine Webseite keine Präsenz auf dem Gerät des Benutzers, wenn er nicht darauf zugreift, kann nur erreicht werden, indem der Benutzer den Browser öffnet und zur Seite navigiert, und ist stark von der Netzwerkkonnektivität abhängig.

Allerdings bieten Webseiten einige Vorteile gegenüber plattformspezifischen Apps, einschließlich:

- **Einzelner Codebase**: Da das Web von Natur aus plattformübergreifend ist, kann eine Webseite auf verschiedenen Betriebssystemen und Geräteklassen von einem einzigen Codebase aus laufen.
- **Verteilung über das Web**: Das Web ist eine großartige Distributionsplattform. Webseiten werden von Suchmaschinen indexiert und können einfach über URLs geteilt und aufgerufen werden. Eine Webseite kann verteilt werden, ohne sich bei einem App-Store eines Anbieters anmelden zu müssen.

## Progressive Web-Apps

Progressive Web-Apps kombinieren die besten Eigenschaften traditioneller Webseiten und plattformspezifischer Apps.

PWAs haben die Vorteile von Webseiten, einschließlich:

- PWAs werden mit standardmäßigen Technologien der Webplattform entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen von einem einzigen Codebase aus laufen können.
- PWAs können direkt aus dem Web abgerufen werden.

PWAs haben auch viele der Vorteile plattformspezifischer Apps, einschließlich:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Dies bedeutet:

  - Die PWA kann aus dem App-Store der Plattform installiert oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Nach der Installation erhält die PWA ein App-Symbol auf dem Gerät neben plattformspezifischen Apps.
  - Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Webseite im Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Webseite ist nur aktiv, solange die Seite im Browser geladen ist. Eine PWA kann:

  - Arbeiten, während das Gerät keine Netzwerkverbindung hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen mit dem OS [Benachrichtigungs](/de/docs/Web/API/Notifications_API)-System anzeigen.

- PWAs können [den gesamten Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt im Browser-UI zu laufen.
- PWAs können in das Gerät integriert werden, indem sie sich als Freigabeziele und –quellen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores vertrieben werden, sowie offen über das Web.

### PWAs und der Browser

Wenn Sie eine Webseite im Browser besuchen, wird visuell deutlich, dass die Webseite "im Browser läuft". Die Browseroberfläche bietet einen sichtbaren Rahmen um die Webseite, einschließlich UI-Funktionen wie Vor-/Zurück-Buttons und einem Titel für die Seite. Die Web-APIs, die Ihre Webseite aufruft, werden von der Browser-Engine implementiert.

PWAs sehen typischerweise wie plattformspezifische Apps aus － sie werden normalerweise ohne die Browser-UI um sie herum angezeigt － aber technisch gesehen, sind sie immer noch Webseiten. Das bedeutet, dass sie eine Browser-Engine benötigen, wie die in Chrome oder Firefox, um sie zu verwalten und laufen zu lassen. Bei einer plattformspezifischen App verwaltet das Plattform-OS die App und stellt die Umgebung bereit, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genauso wie bei normalen Webseiten.

![Diagramm, das die Laufzeitumgebung für traditionelle Webseiten, PWAs und plattformspezifische Apps vergleicht](pwa-environment.svg)

In unserer Dokumentation für PWAs beziehen wir uns manchmal auf den Browser, der diese Hintergrundrolle spielt. Wir könnten zum Beispiel sagen: "Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hier ist die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es genauso gut das Betriebssystem sein, das sie gestartet hat. Bei einigen Systemen, wie bei Chromebooks, gibt es möglicherweise nicht einmal eine Unterscheidung zwischen "dem Browser" und "dem Betriebssystem".

### Technische Merkmale von PWAs

Da PWAs Webseiten sind, haben sie die gleichen grundlegenden Merkmale wie jede andere Webseite: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie bei einer normalen Webseite hat das von der Seite geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Merkmale:

- Eine [Web-App-Manifest](/de/docs/Web/Manifest)-Datei, die mindestens Informationen bereitstellt, die der Browser zum Installieren der PWA benötigt, wie den App-Namen und das Symbol.
- Optional ein [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie [Themenfarbe](/de/docs/Web/Manifest/theme_color) und [Hintergrundfarbe](/de/docs/Web/Manifest/background_color), und ihr Verhalten, einschließlich ihrer Fähigkeit, [als Freigabeziel zu fungieren](/de/docs/Web/Manifest/share_target) für Daten aus anderen Apps oder um [bestimmte Dateitypen zu verarbeiten](/de/docs/Web/Manifest/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker benötigt, um installiert zu werden, werden Service Worker oft mit PWAs verwendet, um zumindest eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, in der die Seiten der App - also der traditionelle Teil einer Webseite - die Benutzeroberfläche implementieren, und der Service Worker ein Backend implementiert, das [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann, wodurch die PWA sich mehr wie eine App als eine Webseite verhält. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu bearbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Webseite als Sammlung von verknüpften Seiten aufgebaut. Wenn der Benutzer auf einen Link von einer Seite der Site zu einer anderen Seite in derselben Site klickt, lädt der Browser die neue Seite als vollständig neues Objekt, einschließlich des HTML und der Unterressourcen, die das HTML lädt, wie CSS und JavaScript. In einer [Single-Page-App](/de/docs/Glossary/SPA) besteht die Site aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies durch JavaScript behandelt, das neue Inhalte vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können eine Benutzererfahrung bieten, die plattformspezifischen Apps näher kommt, so dass PWAs oft als Single-Page-Apps implementiert werden. Insbesondere erleichtern Single-Page-Apps das Erreichen einer nahtlosen Benutzeroberfläche, in der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

Allerdings müssen PWAs keine Single-Page-Apps sein, und Single-Page-Apps müssen nicht PWAs sein.

### Progressive Verbesserung

Während [progressive Verbesserung](/de/docs/Glossary/Progressive_Enhancement) ein wünschenswertes Merkmal für die meisten Webseiten ist, ist es besonders wichtig für PWAs, die erwarten, auf einer Vielzahl von Geräten zu laufen und oft fortgeschrittene Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Ein grundlegender Bestandteil der progressiven Verbesserung ist, dass der Benutzer mit der App wie eine normale Webseite interagieren kann, wenn er Ihre PWA im Web besucht, indem er ihre URL in einem Browser eingibt. Aber wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren und die App wird als neue Funktion auf seinem Gerät angezeigt.

PWAs sollten für fortgeschrittene APIs eine Feature-Erkennung durchführen und akzeptable Fallback-Erfahrungen bereitstellen.

Zum Beispiel ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service Worker zu bitten, eine Netzwerk-Anfrage zu stellen, sobald das Gerät eine Verbindung hat. Ein klassischer Anwendungsfall dafür ist Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App den Benutzer darüber informieren, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später noch einmal zu versuchen.
