---
title: Was ist eine Progressive Web App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

Eine Progressive Web App (PWA) ist eine App, die mit Webplattformtechnologien erstellt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App ähnelt.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine Gerätekategorie entwickelt, wie etwa ein iOS- oder Android-Gerät, und verwenden normalerweise ein vom Plattformanbieter bereitgestelltes SDK. Sie werden in der Regel über den App-Store des Anbieters verteilt, wo der Benutzer sie finden und installieren kann, und erscheinen dem Benutzer anschließend als eine permanente zusätzliche Funktion seines Geräts, die dessen Möglichkeiten in gewisser Weise erweitert.

Die Vorteile von plattformspezifischen Apps umfassen:

- **Einfacher Zugriff für Benutzer**: Sie erhalten ein eigenes Symbol auf dem Gerät, sodass Benutzer sie leicht finden und öffnen können.
- **Offline- und Hintergrundbetrieb**: Sie können arbeiten, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es beispielsweise einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer anzuzeigen. Es ermöglicht auch einer Nachrichten-App, im Hintergrund zu aktualisieren, sodass sie frische Inhalte anzeigen kann, selbst wenn das Gerät offline ist.
- **Eigene Benutzeroberfläche**: Sie können eine eigene unverwechselbare, immersive Benutzeroberfläche implementieren.
- **OS-Integration**: Sie können in das Host-Betriebssystem integriert werden: beispielsweise kann eine Messaging-App als Ziel für das Teilen registriert werden, sodass Benutzer ein Bild in der Foto-App auswählen und mit der Messaging-App senden können. Sie können auch auf Gerätefunktionen wie die Kamera, GPS oder Beschleunigungsmesser zugreifen.
- **App Store-Integration**: Sie werden über den App Store vertrieben, wodurch die Benutzer sie an einem Ort finden und auf konsistente Weise entscheiden können, ob sie sie installieren möchten.

## Traditionelle Websites

Traditionell sind Websites weniger wie „etwas, das der Benutzer hat“ und mehr wie „irgendwo, wo der Benutzer hingeht“. Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn der Benutzer nicht darauf zugreift; sie kann nur erreicht werden, indem der Benutzer den Browser öffnet und zur Seite navigiert, und ist stark abhängig von der Netzwerkverbindung.

Jedoch haben Websites einige Vorteile gegenüber plattformspezifischen Apps, einschließlich:

- **Einzelner Codebase**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Gerätekategorien aus einem einzigen Codebase ausgeführt werden.
- **Verteilung über das Web**: Das Web ist eine hervorragende Vertriebsplattform. Websites werden von Suchmaschinen indiziert und können einfach über URLs geteilt und aufgerufen werden. Eine Website kann ohne Registrierung in einem App-Store eines Anbieters verteilt werden.

## Progressive Web Apps

Progressive Web Apps kombinieren die besten Eigenschaften traditioneller Websites und plattformspezifischer Apps.

PWAs haben die Vorteile von Websites, darunter:

- PWAs werden unter Verwendung standardmäßiger Webplattform-Technologien entwickelt, sodass sie auf mehreren Betriebssystemen und Gerätekategorien aus einem einzigen Codebase ausgeführt werden können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs verfügen auch über viele der Vorteile von plattformspezifischen Apps, darunter:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:
  - Die PWA kann aus dem App-Store der Plattform installiert oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Sobald installiert, erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
  - Sobald installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website im Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, während die Seite im Browser geladen ist. Eine PWA kann:
  - Ohne Netzwerkverbindung arbeiten.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen mit dem OS-[Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) anzeigen.

- PWAs können [den gesamten Bildschirm verwenden](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt in der Browser-Benutzeroberfläche zu laufen.
- PWAs können in das Gerät integriert werden, indem sie als Ziele und Quellen für das Teilen registriert werden und auf Gerätefunktionen zugreifen.
- PWAs können sowohl in App-Stores als auch offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es visuell offensichtlich, dass die Website „im Browser läuft“. Die Browser-Benutzeroberfläche bietet einen sichtbaren Rahmen um die Website, einschließlich Features wie Vorwärts-/Rückwärts-Tasten und einem Titel für die Seite. Die von Ihrer Website aufgerufenen Web-APIs werden von der Browser-Engine implementiert.

PWAs sehen typischerweise wie plattformspezifische Apps aus – sie werden normalerweise ohne die Browser-Benutzeroberfläche angezeigt – aber sie sind, technologisch gesehen, immer noch Websites. Das bedeutet, dass sie eine Browser-Engine, wie die von Chrome oder Firefox, benötigen, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Plattform-Betriebssystem die App und stellt die Umgebung bereit, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genauso wie bei normalen Websites.

![Diagramm, das die Laufzeitumgebung für traditionelle Websites, PWAs und plattformspezifische Apps vergleicht](pwa-environment.svg)

In unserer Dokumentation zu PWAs erwähnen wir manchmal den Browser, der diese Hintergrundrolle spielt. Wir könnten zum Beispiel sagen: „Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird.“ Hierbei findet die Aktivität des Browsers vollständig im Hintergrund statt. Aus Sicht der PWA könnte es ebenso gut das Betriebssystem sein, das sie gestartet hat. Für einige Systeme, wie etwa Chromebooks, gibt es möglicherweise sogar keinen Unterschied zwischen „dem Browser“ und „dem Betriebssystem“.

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Funktionen wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie bei einer normalen Website hat das durch die Seite geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Funktionen:

- Eine [Web App Manifest](/de/docs/Web/Progressive_web_apps/Manifest)-Datei, die mindestens Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie den App-Namen und das Symbol.
- Optional einen [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu ermöglichen.

#### Web App Manifest

Eine PWA muss ein Web App Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie [Themenfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und [Hintergrundfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color), und deren Verhalten, einschließlich der Fähigkeit, [als Ziel für das Teilen](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) für Daten von anderen Apps zu fungieren oder [bestimmte Dateitypen zu handhaben](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker benötigt, um installiert zu werden, werden Service Worker oft mit PWAs verwendet, um zumindest eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, in der die Seiten der App - also der traditionelle Teil einer Website - die Benutzeroberfläche implementieren und der Service Worker ein Backend implementiert, das den [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann, was die PWA eher wie eine App als wie eine Website verhalten lässt. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (z. B. um eine Push-Benachrichtigung zu handhaben).

### PWAs und Single-Page Apps

Traditionell wird eine Website als Sammlung untereinander verlinkter Seiten erstellt. Wenn der Benutzer auf einen Link von einer Seite der Website zu einer anderen Seite derselben Website klickt, lädt der Browser die neue Seite als komplett neue Entität, einschließlich des HTMLs und der vom HTML geladenen Subressourcen, wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page App")}} besteht die Website aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies durch JavaScript gehandhabt, das neue Inhalte vom Server abruft und die entsprechenden Teile der Seite aktualisiert.

Single-Page Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näherkommt, daher werden PWAs oft als Single-Page Apps implementiert. Insbesondere erleichtern Single-Page Apps eine nahtlose Benutzeroberfläche, in der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

Allerdings müssen PWAs keine Single-Page Apps sein, und Single-Page Apps müssen keine PWAs sein.

### Progressive Verbesserung

Während {{Glossary("Progressive_Enhancement", "progressive Verbesserung")}} ein wünschenswertes Attribut für die meisten Websites ist, ist es besonders wichtig für PWAs, die erwarten, auf einer Vielzahl von Geräten zu laufen und oft erweiterte Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Eine grundlegende Komponente der progressiven Verbesserung ist, dass der Benutzer, wenn er Ihre PWA im Web besucht, indem er ihre URL im Browser eingibt, mit der App wie mit einer normalen Website interagieren kann. Aber wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren, und die App wird als neue Funktion auf ihrem Gerät erscheinen.

PWAs sollten eine Funktionsprüfung für erweiterte APIs durchführen und akzeptable Fallback-Erfahrungen bieten.

Ein Beispiel: Die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) ermöglicht es einer PWA, einen Service Worker zu bitten, eine Netzwerkanfrage zu stellen, sobald das Gerät eine Verbindung hat. Ein klassischer Anwendungsfall hierfür ist Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App den Benutzer darüber informieren, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später erneut zu versuchen.
