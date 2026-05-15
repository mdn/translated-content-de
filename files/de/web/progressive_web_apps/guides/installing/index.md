---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

Dieser Leitfaden beschreibt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie lernen möchten, wie Sie eine Web-App als PWA installierbar machen, schauen Sie sich stattdessen den [Leitfaden zur Installierbarkeit von PWAs](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) an.

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Lesezeichen". Diese sind einfach Links zu Websites.

Einige Betriebssysteme (OS) haben die Lesezeichen-Funktionalitäten erweitert, sodass Lesezeichen an üblichen Orten gespeichert werden können, wie z.B. dem Startbildschirm oder der Taskleiste, wobei ein Symbol die Seite im Standardbrowser des OS startet. Für viele Websites ist dies auch nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Hinzufügen zum Startbildschirm die PWA auf dem Gerät des Benutzers und integriert sie vollständig in das Betriebssystem, ähnlich wie native Anwendungen auf den meisten Geräten. Genau wie PWAs installierbar sind, können sie auch deinstalliert werden.

Wir werden zunächst die Vorläufer behandeln — das Speichern von Links zu Websites.

### Websites als Lesezeichen speichern

Alle Browser haben eine "Zu Favoriten hinzufügen"-Funktionalität für Lesezeichen. Ein Lesezeichen oder Favorit ist eine klickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Dies ist besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser erlauben Benutzern, ihre Lesezeichen anzuzeigen und zu verwalten, einschließlich Umbenennung und Löschung von Favoriten. Standardmäßig umfasst die Anzeige des Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite sowie ein Symbol, das aus dem {{Glossary("Favicon", "Favicon")}} der Website besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und anderweitige Verwalten von Lesezeichen. Die Benutzeroberfläche für die Verwaltung von Lesezeichen unterscheidet sich je nach Browser.

### Hinzufügen zum Startbildschirm

Smartphones, beginnend mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" eingeführt. Für reguläre (nicht-PWA) Websites ist diese Funktion ähnlich wie Lesezeichen, jedoch wird, anstatt das Favicon und den Titel der Seite zum Lesezeichen-Menü hinzuzufügen — einer Browser-Funktion — das Favorisieren auf diese Weise [ein Symbol zum Startbildschirm](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) des OS hinzu.

Das Hinzufügen einer nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Stattdessen wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das beim Anklicken den markierten Link im Standardbrowser öffnet.

![iPhone hinzufügen zum Startbildschirm, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt an, ob beim Löschen des Symbols ein Lesezeichen oder die gesamte Anwendung gelöscht wird.

## Installation und Deinstallation von PWAs

Während die Installation einer PWA nur wenige Klicks erfordert, geht das Ergebnis der Installation einer PWA normalerweise weit über das Erstellen eines Links zu einer Seite im Internet hinaus; das Installieren einer PWA integriert die Webanwendung tiefer in das Gerät des Benutzers.

Je nach PWA, Gerät und den Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native-ähnliche Funktionen ermöglichen, wie z.B. der App ein eigenes unabhängiges Fenster zu geben oder sie als Dateihandler zu registrieren. Dies bedeutet auch, dass das Deinstallieren einer PWA, das ebenfalls nur ein paar Klicks erfordert, mehr tut als nur das Entfernen des PWA-Symbols.

### Installation von PWAs

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Gerät und Kombination von Betriebssystem. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA in Safari auf iOS. Andere Browser, einschließlich Chrome für Android, enthalten den Installationsbefehl der App im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop, wenn der Benutzer zur Seite navigiert, wird, falls die Seite eine PWA ist und die PWA derzeit nicht vom Browser installiert ist, ein Installationssymbol in der URL-Leiste sichtbar:

![PWA Installationsaufforderung in URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an, ob die PWA installiert werden soll, und wenn der Benutzer zustimmt, wird die PWA installiert.

![Bestätigungsaufforderung zur PWA-Installation](installconfirm.jpg)

Sobald installiert, verhält sich die PWA wie andere Anwendungen, die auf dem OS installiert sind. Zum Beispiel erscheint auf macOS das Symbol im Dock und hat dieselben Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

Auf den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten findet sich die Installationsaufforderung in der Regel im Menü mit den Browseroptionen. Unabhängig vom Browser oder Betriebssystem muss die Installation bestätigt werden.

![PWA Installation auf Chrome für Android, mit Bestätigung, Startbildschirmsymbol und Offline-Erfahrung.](android_pwa.jpg)

Einmal installiert, verhält sich die PWA wie andere installierte Anwendungen: Durch Klicken auf das Anwendungssymbol wird die PWA geöffnet, selbst wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, hängt von der Kombination aus Browser und Betriebssystem ab. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen — ChromeOS, macOS, Windows, Android, Linux usw. — direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil gilt für iOS-Versionen vor 16.4, bei denen PWAs **nur** in Safari installiert werden konnten. PWAs können auf macOS 14.0 oder später und iOS/iPadOS 16.4 oder später von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen unabhängigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), aber sie läuft effektiv in einem Browserfenster, selbst wenn die üblichen Browser-Benutzerschnittstellenelemente wie die Adressleiste oder die Zurück-Schaltfläche nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das OS andere Anwendungen speichert, in einem für den Browser spezifischen Ordner.

Von einem Browser installierte PWAs bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, mit dem eine PWA installiert wurde, auch der ist, der für die Ausführung dieser PWA genutzt wird. Es bedeutet auch, dass Sie dieselbe PWA von einem anderen Browser installieren können und die beiden Apps sich wie zwei verschiedene Instanzen verhalten und keine Daten teilen werden.

Der Browser, der zur Installation der PWA verwendet wurde, wird wissen, dass die PWA installiert ist, aber andere Browser werden keinen Zugriff auf den Installationsstatus haben. Zum Beispiel, wenn Sie eine PWA mit MS Edge installieren, wird Edge Ihnen anbieten, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome weiterhin die Installation der Anwendung anbietet. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden keine Daten zwischen Instanzen, die von verschiedenen Browsern installiert wurden, geteilt.

Wenn Sie auf das Symbol der Web-App tippen, öffnet es sich in der Browser-Umgebung, die die PWA installiert hat, in der Regel ohne die UI des Browsers darum herum, obwohl das von der Art abhängt, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) konfiguriert hat. Ähnlich hängt die Methode zur Deinstallation der PWA vom Browser ab, der zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen erfolgt die Deinstallation einer PWA auf die gleiche Weise wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im gleichen Kontrollzentrum, wo Anwendungen, die aus App Stores heruntergeladen wurden, verwaltet werden und können dort deinstalliert werden.

Auf iOS sind von Safari installierte PWAs über den "App Library" Bildschirm aufgelistet und durchsuchbar, jedoch nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgeführt. Auf iOS bringt das lange Tippen auf ein Symbol die Benutzeroberfläche zum Löschen von Lesezeichen zum Vorschein; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Um zu deinstallieren, öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um weitere Werkzeuge zu sehen. Je nach dem Browser, der zur Installation der PWA verwendet wurde, gibt es entweder einen Link zur Deinstallation der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Klicken Sie entweder auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Die Auswahl von App-Einstellungen aus dem geöffneten Dropdown-Menü in Edge öffnete den MS Edge-Browser `edge://apps` Tab. Dort erhalten wir eine Liste der installierten Anwendungen mit Optionen für jede, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge werden die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser aufrufen. In Chrome können die Liste der Google-Apps und installierten PWAs eingesehen und verwaltet werden, indem Sie `chrome://apps` in Ihrem Chrome-Browser aufrufen.

## Siehe auch

- [Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, Verwalten oder Deinstallieren von Apps in Microsoft Edge](https://support.microsoft.com/en-US/edge/install-manage-or-uninstall-apps-in-microsoft-edge)
