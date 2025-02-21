---
title: Was ist eine Progressive Web App?
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Eine Progressive Web App (PWA) ist eine App, die mit Technologien der Webplattform entwickelt wird, aber ein Benutzererlebnis bietet, das dem einer plattformspezifischen App gleicht.

## Plattformspezifische Apps

_Plattformspezifische Apps_ werden für ein bestimmtes Betriebssystem (OS) und/oder eine Klasse von Geräten, wie zum Beispiel ein iOS- oder Android-Gerät, entwickelt, in der Regel mithilfe eines von dem Plattformanbieter bereitgestellten SDK. Sie werden normalerweise über den App-Store des Anbieters verbreitet, wo der Benutzer sie finden und installieren kann, und sie scheinen dem Benutzer dann wie eine permanente Zusatzfunktion seines Geräts, die dessen Fähigkeiten auf irgendeine Weise erweitert.

Die Vorteile plattformspezifischer Apps umfassen:

- **Einfacher Zugang für Benutzer**: Sie erhalten ihr eigenes Icon auf dem Gerät, was es Benutzern erleichtert, sie zu finden und zu öffnen.
- **Offline- und Hintergrundbetrieb**: Sie können arbeiten, wenn der Benutzer nicht mit ihnen interagiert und wenn das Gerät offline ist. Dies ermöglicht zum Beispiel einer Chat-App, Nachrichten zu empfangen, wenn sie nicht geöffnet ist, und eine Benachrichtigung an den Benutzer zu senden. Es ermöglicht auch einer Nachrichten-App, Inhalte im Hintergrund zu aktualisieren, damit sie aktuelle Inhalte anzeigen kann, selbst wenn das Gerät offline ist.
- **Eigenes UI**: Sie können eine eigene, unverwechselbare und immersive Benutzeroberfläche implementieren.
- **Integration in das Betriebssystem**: Sie können in das Host-Betriebssystem integriert werden: Ein Beispiel wäre eine Messaging-App, die sich als Freigabeziel registriert, sodass Benutzer ein Bild in der Foto-App auswählen und mit der Messaging-App senden können. Sie können auch auf Gerätefunktionen wie Kamera, GPS oder Beschleunigungsmesser zugreifen.
- **Integration in den App-Store**: Sie werden über den App-Store verteilt, was Benutzern eine zentrale Stelle gibt, um sie zu finden und ihnen eine konsistente Möglichkeit ermöglicht, zu entscheiden, ob sie sie installieren möchten.

## Traditionelle Websites

Traditionell sind Websites weniger wie "etwas, das der Benutzer hat", und mehr wie "irgendwo, das der Benutzer besucht". Typischerweise hat eine Website keine Präsenz auf dem Gerät des Benutzers, wenn dieser nicht darauf zugreift, kann nur vom Benutzer über das Öffnen des Browsers und Navigieren zur Seite aufgerufen werden und ist stark von der Netzwerkkonnektivität abhängig.

Jedoch haben Websites einige Vorteile gegenüber plattformspezifischen Apps, darunter:

- **Einzelner Codebasis**: Da das Web von Natur aus plattformübergreifend ist, kann eine Website auf verschiedenen Betriebssystemen und Gerätekategorien von einer einzigen Codebasis aus laufen.
- **Verbreitung über das Web**: Das Web ist eine großartige Verbreitungsplattform. Websites werden von Suchmaschinen indexiert und können geteilt und einfach über URLs aufgerufen werden. Eine Website kann verbreitet werden, ohne sich bei einem App-Store-Anbieter anmelden zu müssen.

## Progressive Web Apps

Progressive Web Apps kombinieren die besten Funktionen traditioneller Websites und plattformspezifischer Apps.

PWAs haben die Vorteile von Websites, darunter:

- PWAs werden mithilfe standardmäßiger Webplattform-Technologien entwickelt, sodass sie auf mehreren Betriebssystemen und Gerätekategorien von einer einzigen Codebasis aus laufen können.
- PWAs können direkt aus dem Web aufgerufen werden.

PWAs bieten auch viele der Vorteile plattformspezifischer Apps, darunter:

- [**PWAs können auf dem Gerät installiert werden**](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable). Das bedeutet:

  - Die PWA kann aus dem App-Store der Plattform oder direkt aus dem Web installiert werden.
  - Die PWA kann wie eine plattformspezifische App installiert werden und den Installationsprozess anpassen.
  - Nach der Installation erhält die PWA ein App-Icon auf dem Gerät, neben plattformspezifischen Apps.
  - Nach der Installation kann die PWA als eigenständige App gestartet werden, anstatt als Website in einem Browser.

- [**PWAs können im Hintergrund und offline arbeiten**](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation): eine typische Website ist nur aktiv, solange die Seite im Browser geladen ist. Eine PWA kann:

  - Funktionieren, wenn das Gerät keine Netzwerkkonnektivität hat.
  - Inhalte im Hintergrund aktualisieren.
  - Auf [Push-Nachrichten](/de/docs/Web/API/Push_API) vom Server reagieren.
  - Benachrichtigungen mit dem [Benachrichtigungssystem](/de/docs/Web/API/Notifications_API) des Betriebssystems anzeigen.

- PWAs können den [ganzen Bildschirm nutzen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), anstatt im Browser-UI zu arbeiten.
- PWAs können in das Gerät integriert werden, indem sie als Freigabeziele und -quellen registriert und auf Gerätefunktionen zugreifen.
- PWAs können in App-Stores verbreitet, aber auch offen über das Web verteilt werden.

### PWAs und der Browser

Wenn Sie eine Website im Browser besuchen, ist es optisch erkennbar, dass die Website "im Browser läuft". Die Browser-UI bietet einen sichtbaren Rahmen um die Website, einschließlich UI-Funktionen wie Zurück-/Vorwärts-Schaltflächen und einem Seitentitel. Die Web-APIs, die Ihre Website aufruft, werden von der Browser-Engine implementiert.

PWAs sehen typischerweise aus wie plattformspezifische Apps － sie werden normalerweise ohne die Browser-UI um sie herum angezeigt － aber sie sind, technisch gesehen, immer noch Websites. Das bedeutet, sie brauchen eine Browser-Engine, wie die in Chrome oder Firefox, um sie zu verwalten und auszuführen. Bei einer plattformspezifischen App verwaltet das Plattform-Betriebssystem die App und bietet die Umgebung, in der sie läuft. Bei einer PWA übernimmt eine Browser-Engine diese Hintergrundrolle, genau wie bei normalen Websites.

![Diagramm, das die Laufzeitumgebung für traditionelle Websites, PWAs und plattformspezifische Apps vergleicht](pwa-environment.svg)

In unserer Dokumentation für PWAs beziehen wir uns manchmal darauf, dass der Browser diese Hintergrundrolle spielt. Wir könnten zum Beispiel sagen: "Der Browser startet den Service Worker einer PWA, wenn eine Push-Benachrichtigung empfangen wird." Hierbei ist die Aktivität des Browsers vollständig im Hintergrund. Aus der Perspektive der PWA könnte es ebenso gut das Betriebssystem sein, das sie startet. Für einige Systeme, wie Chromebooks, könnte es möglicherweise keinen Unterschied zwischen "dem Browser" und "dem Betriebssystem" geben.

### Technische Merkmale von PWAs

Da PWAs Websites sind, verfügen sie über die gleichen grundlegenden Merkmale wie jede andere Website: mindestens eine HTML-Seite, die sehr wahrscheinlich einige CSS und JavaScript lädt. Wie bei einer normalen Website hat das von der Seite geladene JavaScript ein globales [`Window`](/de/docs/Web/API/Window)-Objekt und kann auf alle Web-APIs zugreifen, die über dieses Objekt verfügbar sind.

Darüber hinaus hat eine PWA einige zusätzliche Funktionen:

- Eine [Web-App-Manifeste](/de/docs/Web/Progressive_web_apps/Manifest)-Datei, die mindestens die Informationen bereitstellt, die der Browser benötigt, um die PWA zu installieren, wie den App-Namen und das Icon.
- Optional einen [Service Worker](/de/docs/Web/API/Service_Worker_API), um eine Offline-Erfahrung bereitzustellen.

#### Web-App-Manifest

Eine PWA muss ein Web-App-Manifest haben, und das [Manifest muss genügend Informationen enthalten, damit der Browser die PWA installieren kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest).

Das Manifest kann viele andere Aspekte des Erscheinungsbildes der PWA definieren, wie die [Designfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color) und die [Hintergrundfarbe](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color), sowie ihr Verhalten, einschließlich ihrer Fähigkeit, als [Freigabeziel](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) für Daten anderer Apps zu fungieren oder [bestimmte Dateitypen zu handhaben](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers).

#### Service Worker

Obwohl eine PWA keinen Service Worker zur Installation benötigt, werden Service Worker häufig mit PWAs verwendet, um zumindest eine minimale Offline-Erfahrung zu bieten.

Service Worker fördern eine Architektur, bei der die Seiten der App - also der traditionelle Teil einer Website - die Benutzeroberfläche implementieren, und der Service Worker ein Backend im Hintergrund implementiert, das [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) unterstützt. Das lässt die PWA mehr wie eine App als eine Website wirken. Dies liegt daran, dass Service Worker vom Browser im Hintergrund gestartet werden können, wenn sie benötigt werden (zum Beispiel, um eine Push-Benachrichtigung zu bearbeiten).

### PWAs und Single-Page-Apps

Traditionell wird eine Website als Ansammlung von miteinander verlinkten Seiten gebaut. Wenn der Benutzer von einer Seite der Website zu einer anderen Seite derselben Website klickt, lädt der Browser die neue Seite als vollständig neues Objekt, einschließlich des HTML und der vom HTML geladenen Resourcen wie CSS und JavaScript. In einer {{Glossary("SPA", "Single-Page-App")}} besteht die Site aus einer einzigen HTML-Seite, und wenn der Benutzer auf interne Links klickt, wird dies durch JavaScript behandelt, das neue Inhalte vom Server abruft und die relevanten Teile der Seite aktualisiert.

Single-Page-Apps können ein Benutzererlebnis bieten, das plattformspezifischen Apps näher kommt, daher werden PWAs häufig als Single-Page-Apps implementiert. Insbesondere erleichtern Single-Page-Apps das Erreichen einer nahtlosen Benutzeroberfläche, bei der dem Benutzer eine einzige, konsistente Seite präsentiert wird und nur die relevanten Teile der Seite aktualisiert werden, wenn der Benutzer mit der App interagiert.

Allerdings müssen PWAs keine Single-Page-Apps sein, und Single-Page-Apps müssen keine PWAs sein.

### Progressive Verbesserung

Obwohl {{Glossary("Progressive_Enhancement", "progressive Verbesserung")}} eine wünschenswerte Eigenschaft für die meisten Websites ist, ist sie besonders wichtig für PWAs, die auf einer Vielzahl von Geräten laufen sollen und häufig fortschrittliche Web-APIs verwenden, die möglicherweise nicht von allen Browsern unterstützt werden.

Eine grundlegende Komponente der progressiven Verbesserung ist, dass, wenn der Benutzer Ihre PWA im Web besucht, indem er ihre URL in einen Browser eingibt, der Benutzer mit der App wie mit einer normalen Website interagieren kann. Wenn der Browser sie installieren kann, wird der Benutzer aufgefordert, sie zu installieren und die App erscheint als neue Funktion auf seinem Gerät.

PWAs sollten Funktionen fortschrittlicher APIs erkennen und akzeptable Alternativerfahrungen bereitstellen.

Zum Beispiel ermöglicht die [Background Sync API](/de/docs/Web/API/Background_Synchronization_API) einer PWA, einen Service Worker zu bitten, eine Netzwerk-Anfrage zu stellen, sobald das Gerät Konnektivität hat. Ein klassischer Anwendungsfall dafür ist das Messaging. Angenommen, der Benutzer verfasst eine Nachricht, aber wenn er versucht, die Nachricht zu senden, ist das Gerät offline. Die Background Sync API ermöglicht es dem Gerät, die Nachricht im Hintergrund zu senden, sobald das Gerät verbunden ist. Auf einem Gerät, das Background Sync nicht unterstützt, sollte die App dem Benutzer mitteilen, dass die Nachricht nicht gesendet werden konnte, und ihm die Möglichkeit geben, es später erneut zu versuchen.
