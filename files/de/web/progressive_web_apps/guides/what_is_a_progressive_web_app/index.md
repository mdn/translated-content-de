---
title: Was ist eine progressive Web-App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 1c8c727322725bb2e5f658fb0a94a362c1f16fe8
---

{{PWASidebar}}

Eine progressive Web-App (PWA) ist eine App, die mit Technologien der Webplattform erstellt wird, aber eine Benutzererfahrung bietet, die der einer plattform-spezifischen App ähnlich ist.

## Plattform-spezifische Apps

_Plattform-spezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine Geräteklasse entwickelt, wie ein iOS- oder Android-Gerät, meist unter Verwendung eines SDK, das vom Plattformanbieter bereitgestellt wird. Sie werden in der Regel über den App Store des Anbieters vertrieben, wo der Benutzer sie finden und installieren kann. Sie scheinen dem Benutzer wie ein permanentes Zusatzfeature seines Geräts, das dessen Möglichkeiten auf irgendeine Weise erweitert.

Die Vorteile von plattform-spezifischen Apps umfassen:

- **Einfacher Zugang für Benutzer**: Sie erhalten ihr eigenes Symbol auf dem Gerät, was es den Benutzern erleichtert, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können betrieben werden, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht es beispielsweise einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer anzuzeigen. Ebenso kann eine Nachrichten-App im Hintergrund aktualisieren, sodass sie frische Inhalte anzeigen kann, auch wenn das Gerät offline ist.
- **Dedizierte Benutzeroberfläche**: Sie können ihre eigene, unverwechselbare und immersive Benutzeroberfläche implementieren.
- **Integration in das Betriebssystem**: Sie können in das Host-Betriebssystem integriert werden: zum Beispiel kann eine Messaging-App sich als Ziel für das Teilen registrieren, sodass Benutzer ein Bild in der Foto-App auswählen und es über die Messaging-App senden können. Sie können auch auf Gerätefunktionen wie die Kamera, GPS oder den Beschleunigungssensor zugreifen.
- **Integration in den App Store**: Sie werden über den App Store vertrieben, was Benutzern einen zentralen Ort bietet, um sie zu finden und ihnen eine konsistente Möglichkeit bietet, zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Websites

Traditionell sind Websites weniger „etwas, das der Benutzer hat“, sondern eher „ein Ort, den der Benutzer besucht“. Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn der Benutzer sie nicht aufruft, kann nur aufgerufen werden, indem der Benutzer den Browser öffnet und zur Website navigiert, und ist stark von der Netzwerkverbindung abhängig.

Jedoch haben Websites einige Vorteile gegenüber plattform-spezifischen Apps, darunter:

- **Einheitlicher Code**: Da das Web inhärent plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Geräteklassen von einem einzigen Code aus ausgeführt werden.
- **Verbreitung über das Web**: Das Web ist eine großartige Verbreitungsplattform. Websites werden von Suchmaschinen indexiert und können einfach über URLs geteilt und aufgerufen werden. Eine Website kann ohne die Notwendigkeit, sich bei einem App Store eines Anbieters anzumelden, verbreitet werden.

## Progressive Web-Apps

Progressive Web-Apps kombinieren die besten Eigenschaften traditioneller Websites und plattform-spezifischer Apps.

PWAs haben die Vorteile von Websites, einschließlich:

- PWAs werden mit standardmäßigen Webplattform-Technologien entwickelt, sodass sie auf mehreren Betriebssystemen und Geräteklassen von einem einzigen Code aus betrieben werden können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs haben auch viele Vorteile von plattform-spezifischen Apps, darunter:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Dies bedeutet:

  - Die PWA kann aus dem App Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattform-spezifische App installiert werden und den Installationsprozess anpassen.
  - Sobald sie installiert ist, erhält die PWA ein App-Symbol auf dem Gerät, neben plattform-spezifischen Apps.
  - Sobald installiert, kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

- [**PWAs können im Hintergrund und offline betrieben werden**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): Eine typische Website ist nur aktiv, solange die Seite im Browser geladen ist. Eine PWA kann:

  - Arbeiten, während das Gerät keine Netzwerkverbindung hat.
  - Inhalt im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen über das [Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) des Betriebssystems anzeigen.

- PWAs können [den gesamten Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt innerhalb der Benutzeroberfläche des Browsers zu laufen.
- PWAs können in das Gerät integriert werden, sich als Ziel und Quelle für das Teilen registrieren und auf Gerätefunktionen zugreifen.
- PWAs können sowohl in App Stores als auch offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es visuell offensichtlich, dass die Website "im Browser läuft". Die Benutzeroberfläche des Browsers bietet einen sichtbaren Rahmen um die Website, einschließlich UI-Elementen wie vor- und zurück-Tasten und einem Seitentitel. Die Web-APIs, die Ihre Website aufruft, werden vom Browser-Engine implementiert.

PWAs sehen in der Regel wie plattform-spezifische Apps aus – sie werden in der Regel ohne die Browser-UI um sie herum angezeigt – sind aber technologisch gesehen weiterhin Websites. Das bedeutet, dass sie eine Browser-Engine wie die von Chrome oder Firefox benötigen, um sie zu verwalten und auszuführen. Bei einer plattform-spezifischen App verwaltet das Plattform-Betriebssystem die App, indem es die Umgebung bereitstellt, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genau wie bei normalen Websites.

![Diagramm, das die Laufzeitumgebung für traditionelle Websites, PWAs und plattform-spezifische Apps vergleicht](pwa-environment.svg)

In unserer Dokumentation für PWAs beziehen wir uns manchmal auf den Browser in dieser Hintergrundrolle. Wir könnten beispielsweise sagen: "Der Browser startet den Service Worker der PWA, wenn eine Push-Benachrichtigung eingeht." Hierbei ist die Aktivität des Browsers vollständig im Hintergrund. Aus Sicht der PWA könnte es genauso gut das Betriebssystem sein, das sie gestartet hat. Für einige Systeme, wie Chromebooks, gibt es möglicherweise nicht einmal eine Unterscheidung zwischen "dem Browser" und "dem Betriebssystem".

### Technische Merkmale von PWAs

Da PWAs Websites sind, haben sie die gleichen grundlegenden Funktionen wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie eine normale Website hat das von der Seite geladene JavaScript ein globales {{domxref("Window")}}-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Funktionen:

- Eine [Web-App-Manifest](/de/docs/Web/Manifest)-Datei, die mindestens Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie den App-Namen und das Symbol.
- Optional ein [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung bereitzustellen.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie [Themenfarbe](/de/docs/Web/Manifest/theme_color) und [Hintergrundfarbe](/de/docs/Web/Manifest/background_color), und sein Verhalten, einschließlich seiner Fähigkeit, [als Ziel für das Teilen](/de/docs/Web/Manifest/share_target) von Daten aus anderen Apps zu fungieren oder [bestimmte Dateitypen zu handhaben](/de/docs/Web/Manifest/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker benötigt, um installiert zu werden, werden Service Worker häufig mit PWAs verwendet, um mindestens eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, bei der die Seiten der App - also der traditionelle Teil einer Website - die Benutzeroberfläche implementieren, und der Service Worker ein Backend implementiert, das den [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützt, sodass die PWA sich mehr wie eine App als eine Website verhält. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu verarbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als Sammlung von miteinander verlinkten Seiten aufgebaut. Wenn der Benutzer einen Link von einer Seite der Website zu einer anderen Seite derselben Website klickt, lädt der Browser die neue Seite als komplett neues Objekt, einschließlich des HTML und der vom HTML geladenen Ressourcen wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page App")}} besteht die Website aus einer einzigen HTML-Seite, und wenn der Benutzer interne Links klickt, wird dies durch JavaScript erledigt, das neue Inhalte vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können eine Benutzererfahrung bieten, die plattform-spezifischen Apps näher kommt, weshalb PWAs oft als Single-Page-Apps implementiert werden. Insbesondere machen Single-Page-Apps es einfacher, eine nahtlose Benutzeroberfläche zu erreichen, bei der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, während der Benutzer mit der App interagiert.

Allerdings müssen PWAs keine Single-Page-Apps sein, und Single-Page-Apps müssen keine PWAs sein.

### Progressive Verbesserung

Obwohl {{Glossary("Progressive Enhancement", "progressive Verbesserung")}} für die meisten Websites eine wünschenswerte Eigenschaft ist, ist sie für PWAs besonders wichtig, die erwartet werden, auf einer Vielzahl von Geräten zu laufen und häufig erweiterte Web-APIs zu verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Eine grundlegende Komponente der progressiven Verbesserung ist, dass, wenn der Benutzer Ihre PWA im Web aufruft, indem er ihre URL in einem Browser eingibt, der Benutzer wie auf eine normale Website mit der App interagieren kann. Aber wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren, und die App erscheint als neues Feature auf ihrem Gerät.

PWAs sollten für fortschrittliche APIs eine Funktionsüberprüfung durchführen und akzeptable Fallback-Erfahrungen bieten.

Beispielsweise ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service Worker zu bitten, eine Netzwerk-Anfrage zu stellen, sobald das Gerät eine Verbindung hat. Ein klassischer Anwendungsfall dafür ist Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn der Benutzer versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App den Benutzer informieren, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später erneut zu versuchen.
