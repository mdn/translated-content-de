---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie man eine Web-App als PWA installierbar macht, lesen Sie stattdessen [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Lesezeichen". Dies sind nur Links zu Websites.

Einige Betriebssysteme (OS) haben die Lesezeichenfunktionalität erweitert und ermöglichen das Speichern von Lesezeichen an gängigen Orten, wie dem Startbildschirm oder der Taskleiste, mit einem Symbol, das die Seite im Standardbrowser des OS öffnet. Für viele Websites ist dies ebenfalls nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers und integriert sie vollständig in das Betriebssystem, ähnlich wie native Anwendungen auf den meisten Geräten. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Zuerst behandeln wir die Vorläufer – das Speichern von Links zu Websites.

### Lesezeichen für Websites

Alle Browser haben eine Funktion zum Hinzufügen von Lesezeichen zu den Favoriten. Ein Lesezeichen oder Favorit ist eine klickbare Verknüpfung für eine Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Lesezeichen sind besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser ermöglichen den Benutzern, ihre Lesezeichen zu betrachten und zu verwalten, einschließlich der Umbenennung und Löschung von Favoriten. Standardmäßig umfasst die Anzeige des Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite zusammen mit einem Symbol, das aus dem {{Glossary("Favicon", "Favicon")}} der Seite besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und anderweitige Verwalten von Lesezeichen. Die Benutzeroberfläche für das Lesezeichen-Management variiert je nach Browser.

### Hinzufügen zum Startbildschirm

Smartphones, angefangen mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" eingeführt. Für reguläre (nicht-PWA) Websites ist dieses Feature ähnlich wie Lesezeichen, aber anstatt das Favicon und den Titel der Seite zum Lesezeichen-Menü hinzuzufügen — eine Browser-Funktion — wird auf diese Weise favorisiert [ein Symbol](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) zum Startbildschirm des OS hinzugefügt.

Das Hinzufügen einer nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Vielmehr wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das, wenn angeklickt, den markierten Link im Standardbrowser öffnet.

![iPhone zum Startbildschirm hinzufügen, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung liefert Informationen darüber, ob durch das Löschen des Symbols ein Lesezeichen oder eine gesamte Anwendung gelöscht wird.

## Installation und Deinstallation von PWAs

Das Installieren einer PWA erfordert nur wenige Klicks. Abhängig von den Funktionen der Webanwendung geht das Ergebnis der Installation einer PWA in der Regel weit über das Erstellen eines Links zu einer Seite im Internet hinaus; das Installieren einer PWA integriert die Webanwendung tiefer in das Gerät des Benutzers.

Abhängig von der PWA, dem Gerät und den Funktionen des Betriebssystems und des Browsers kann die Installation einer PWA native ähnliche Funktionen ermöglichen, wie das Bereitstellen eines eigenen eigenständigen Fensters oder das Registrieren als Dateihandler. Dies bedeutet auch, dass die Deinstallation einer PWA, die ebenfalls nur wenige Klicks erfordert, mehr bewirkt als nur das Entfernen des PWA-Icons.

### Installation von PWAs

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Geräte- und Betriebssystemkombination. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA in Safari auf iOS. Andere Browser, einschließlich Chrome für Android, haben den Befehl zur Installation der App im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop wird, wenn der Benutzer zur Seite navigiert, falls die Seite eine PWA ist und die PWA nicht bereits von dem Browser installiert ist, ein Installationssymbol in der URL-Leiste sichtbar:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob die PWA installiert werden soll, und wenn sie akzeptiert wird, wird die PWA installiert.

![PWA-Installationsbestätigungsaufforderung](installconfirm.jpg)

Sobald installiert, verhält sich die PWA wie andere auf dem Betriebssystem installierte Anwendungen. Zum Beispiel erscheint das Symbol auf macOS im Dock und hat die gleichen Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten befindet sich die Installationsaufforderung in der Regel im Menü der Browseroptionen. Unabhängig vom Browser oder Betriebssystem muss die Installation bestätigt werden.

![PWA-Installation in Chrome für Android, mit Bestätigung, Startbildschirmsymbol und Offline-Erlebnis.](android_pwa.jpg)

Sobald installiert, verhält sich die PWA wie andere installierte Anwendungen: Ein Klick auf das Anwendungssymbol öffnet die PWA, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, variiert je nach Browser-/Betriebssystemkombination. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen—ChromeOS, macOS, Windows, Android, Linux, etc.—direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil gilt für iOS-Versionen vor 16.4, wo PWAs **nur** in Safari installiert werden konnten. PWAs können auf macOS 14.0 oder später und iOS/iPadOS 16.4 oder später von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-UI), läuft jedoch effektiv in einem Browserfenster, auch wenn die üblichen Browser-UI-Elemente wie die Adressleiste oder die Zurück-Schaltfläche nicht sichtbar sind. Die Anwendung befindet sich dort, wo das Betriebssystem andere Anwendungen speichert, in einem für den Browser spezifischen Ordner.

PWAs, die von einem Browser installiert werden, bleiben spezifisch für diesen Browser. Dies bedeutet, dass der Browser, der zur Installation einer PWA verwendet wurde, derjenige ist, der diese PWA ausführt. Es bedeutet auch, dass Sie die gleiche PWA von einem anderen Browser installieren können und dass die beiden Apps als zwei verschiedene Instanzen fungieren und keine Daten teilen werden.

Der Browser, der zur Installation der PWA verwendet wurde, erkennt die Installation der PWA, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Zum Beispiel, wenn Sie eine PWA mit MS Edge installieren, fordert Edge Sie auf, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome Sie weiterhin auffordert, die Anwendung zu installieren. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden die Daten nicht zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, öffnet sich diese in der Browserumgebung, die die PWA installiert hat, normalerweise ohne die Browser-UI, obwohl dies von der Konfiguration des [Web-App-Manifests](/de/docs/Web/Manifest) durch den Entwickler abhängt. Ebenso hängt die Methode zum Deinstallieren der PWA davon ab, welcher Browser zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen wird die Deinstallation einer PWA auf die gleiche Weise durchgeführt wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Bedienfeld, in dem Anwendungen aus App-Stores verwaltet werden, und können dort deinstalliert werden.

Auf iOS sind PWAs, die von Safari installiert wurden, vom Bildschirm "App-Mediathek" aus aufgelistet und durchsuchbar, erscheinen jedoch nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen". Auf iOS bringt ein langes Tippen auf ein Symbol die Benutzeroberfläche zum Löschen von Lesezeichen hervor; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann eine PWA direkt in der geöffneten PWA deinstalliert werden. Um zu deinstallieren, öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um weitere Werkzeuge zu sehen. Abhängig vom verwendeten Browser zur Installation der PWA gibt es entweder einen Link zum Deinstallieren der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Entweder klicken Sie auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Durch die Auswahl der App-Einstellung aus dem geöffneten Dropdown-Menü in Edge wurde die MS Edge-Browser-Registerkarte `edge://apps` geöffnet. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Uninstall`. Bestätigen Sie die Deinstallation. Das war's!

In Edge sind die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besuchen. In Chrome sind die Liste der Google Apps und installierten PWAs einsehbar und verwaltbar, indem `chrome://apps` in Ihrem Chrome-Browser besucht wird.

## Siehe auch

- [Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, verwalten oder deinstallieren von Apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
