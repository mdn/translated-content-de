---
title: Was ist eine Progressive Web-App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

Eine Progressive Web-App (PWA) ist eine App, die mit Technologien der Webplattform erstellt wird, aber ein Benutzererlebnis wie eine plattformspezifische App bietet.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine Geräteklasse entwickelt, wie ein iOS- oder Android-Gerät, und verwenden in der Regel ein SDK, das vom Plattformanbieter bereitgestellt wird. Sie werden normalerweise über den App-Store des Anbieters verteilt, wo der Benutzer sie finden und installieren kann, und erscheinen dem Benutzer danach wie eine dauerhafte zusätzliche Funktion seines Geräts, die dessen Fähigkeiten in gewisser Weise erweitert.

Die Vorteile von plattformspezifischen Apps sind unter anderem:

- **Einfacher Zugriff für Benutzer**: Sie haben ein eigenes Symbol auf dem Gerät, was es den Benutzern erleichtert, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können betrieben werden, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es beispielsweise einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und dem Benutzer eine Benachrichtigung anzuzeigen. Es ermöglicht auch einer Nachrichten-App, im Hintergrund zu aktualisieren, sodass sie frische Inhalte anzeigen kann, selbst wenn das Gerät offline ist.
- **Dedizierte Benutzeroberfläche**: Sie können ihre eigene unverwechselbare, immersive Benutzeroberfläche implementieren.
- **OS-Integration**: Sie können in das Hostbetriebssystem integriert werden: Zum Beispiel kann eine Messaging-App als Freigabe-Ziel registriert werden, sodass Benutzer ein Bild in der Foto-App auswählen und es mit der Messaging-App versenden können. Sie können auch auf Gerätefunktionen wie Kamera, GPS oder Beschleunigungssensor zugreifen.
- **App-Store-Integration**: Sie werden über den App-Store vertrieben, was den Benutzern einen einzigen Ort bietet, um sie zu finden, und eine konsistente Möglichkeit, zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Websites

Traditionell sind Websites weniger wie "etwas, das der Benutzer hat" und mehr wie "ein Ort, den der Benutzer besucht". Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn der Benutzer nicht darauf zugreift, kann nur erreicht werden, indem der Benutzer den Browser öffnet und zur Seite navigiert, und ist stark von der Netzwerkverbindung abhängig.

Jedoch haben Websites einige Vorteile gegenüber plattformspezifischen Apps, einschließlich:

- **Einzelner Codebasis**: Weil das Web von Natur aus plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Geräteklassen von einer einzigen Codebasis aus laufen.
- **Vertrieb über das Web**: Das Web ist eine großartige Vertriebsplattform. Websites werden von Suchmaschinen indiziert und können über URLs geteilt und erreicht werden. Eine Website kann verteilt werden, ohne dass eine Anmeldung im App-Store eines Anbieters erforderlich ist.

## Progressive Web-Apps

Progressive Web-Apps kombinieren die besten Eigenschaften traditioneller Websites und plattformspezifischer Apps.

PWAs haben die Vorteile von Websites, einschließlich:

- PWAs werden mit standardmäßigen Technologien der Webplattform entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen von einer einzigen Codebasis aus laufen können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs haben auch viele der Vorteile von plattformspezifischen Apps, einschließlich:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:

  - Die PWA kann aus dem App-Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Einmal installiert, erhält die PWA ein App-Symbol auf dem Gerät, neben plattformspezifischen Apps.
  - Einmal installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website im Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, während die Seite im Browser geladen ist. Eine PWA kann:

  - Funktionieren, während das Gerät keine Netzwerkverbindung hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen mit dem OS [Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) anzeigen.

- PWAs können [den gesamten Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt im UI des Browsers zu laufen.
- PWAs können in das Gerät integriert werden, indem sie sich als Freigabeziel und -quelle registrieren und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores sowie offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es visuell offensichtlich, dass die Website "im Browser läuft". Die Benutzeroberfläche des Browsers bietet einen sichtbaren Rahmen um die Website, einschließlich UI-Elementen wie Vorwärts-/Rückwärts-Schaltflächen und einem Titel für die Seite. Die Web-APIs, die Ihre Website aufruft, werden von der Browser-Engine implementiert.

PWAs sehen typischerweise aus wie plattformspezifische Apps - sie werden normalerweise ohne die UI des Browsers um sie herum angezeigt - aber sie sind in technologischer Hinsicht immer noch Websites. Das bedeutet, dass sie eine Browser-Engine benötigen, wie die in Chrome oder Firefox, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Plattformbetriebssystem die App, indem es die Umgebung bereitstellt, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genauso wie bei normalen Websites.

![Diagramm zum Vergleich der Laufzeitumgebung von traditionellen Websites, PWAs und plattformspezifischen Apps](pwa-environment.svg)

In unserer Dokumentation für PWAs beziehen wir uns manchmal darauf, dass der Browser diese Hintergrundrolle spielt. Wir könnten beispielsweise sagen: "Der Browser startet den Service-Arbeiter einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hierbei erfolgt die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es ebenso gut das Betriebssystem sein, das sie gestartet hat. Für einige Systeme, wie Chromebooks, gibt es möglicherweise sogar keinen Unterschied zwischen "dem Browser" und "dem Betriebssystem".

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Merkmale wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie bei einer normalen Website hat das JavaScript, das von der Seite geladen wird, ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Funktionen:

- Eine [Web-App-Manifest](/de/docs/Web/Manifest)-Datei, die mindestens Informationen liefert, die der Browser benötigt, um die PWA zu installieren, wie den Namen der App und das Symbol.
- Optional einen [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung zu bieten.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie [Themenfarbe](/de/docs/Web/Manifest/Reference/theme_color) und [Hintergrundfarbe](/de/docs/Web/Manifest/Reference/background_color), und ihr Verhalten, einschließlich ihrer Fähigkeit, [als Freigabeziel zu agieren](/de/docs/Web/Manifest/Reference/share_target) für Daten von anderen Apps oder [bestimmte Dateitypen zu verarbeiten](/de/docs/Web/Manifest/Reference/file_handlers).

#### Service-Arbeiter

Obwohl eine PWA keinen Service-Arbeiter zur Installation benötigt, werden Service-Arbeiter oft mit PWAs verwendet, um mindestens eine minimale Offline-Erfahrung zu bieten.

Service-Arbeiter fördern eine Architektur, bei der die Seiten der App - das heißt der traditionelle Teil einer Website - die Benutzeroberfläche implementieren, und der Service-Arbeiter ein Backend implementiert, das [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützen kann, sodass sich die PWA mehr wie eine App als eine Website verhält. Dies liegt daran, dass Service-Arbeiter vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu verarbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als eine Sammlung von miteinander verknüpften Seiten erstellt. Wenn der Benutzer auf einen Link von einer Seite der Website zu einer anderen Seite derselben Website klickt, lädt der Browser die neue Seite als vollständig neue Entität, einschließlich des HTML und der Unterressourcen, die das HTML lädt, wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page-App")}} besteht die Website aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies von JavaScript bearbeitet, das neue Inhalte vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näher kommt, weshalb PWAs oft als Single-Page-Apps implementiert werden. Insbesondere ermöglichen es Single-Page-Apps, eine nahtlose Benutzeroberfläche zu erreichen, bei der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

Jedoch müssen PWAs keine Single-Page-Apps sein, und Single-Page-Apps müssen keine PWAs sein.

### Progressiver Ausbau

Während {{Glossary("Progressive_Enhancement", "progressiver Ausbau")}} eine wünschenswerte Eigenschaft für die meisten Websites ist, ist es besonders wichtig für PWAs, die erwarten, auf einer Vielzahl von Geräten zu laufen und oft fortgeschrittene Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Ein grundlegender Bestandteil des progressiven Ausbaus ist, dass, wenn der Benutzer Ihre PWA über das Web besucht, indem er ihre URL in einem Browser eingibt, der Benutzer mit der App wie mit einer normalen Website interagieren kann. Wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren, und die App erscheint als neue Funktion auf seinem Gerät.

PWAs sollten Feature-Erkennung für fortgeschrittene APIs durchführen und akzeptable Fallback-Erfahrungen bieten.

Zum Beispiel ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service-Arbeiter zu bitten, eine Netzwerkabfrage zu machen, sobald das Gerät Konnektivität hat. Ein klassischer Anwendungsfall hierfür ist Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App den Benutzer wissen lassen, dass die Nachricht nicht gesendet werden konnte, sodass er die Möglichkeit hat, es später erneut zu versuchen.
