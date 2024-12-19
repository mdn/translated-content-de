---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie darüber lernen möchten, wie man eine Web-App als PWA installierbar macht, lesen Sie stattdessen [Wie man PWAs installierbar macht](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Lesezeichen". Diese sind nur Links zu Websites.

Einige Betriebssysteme (OS) haben die Möglichkeiten zum Speichern von Lesezeichen erweitert, sodass sie an üblichen Orten wie dem Startbildschirm oder der Taskleiste mit einem Symbol gespeichert werden können, das die Seite im Standardbrowser des OS startet. Für viele Websites ist dies auch nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers und integriert sie vollständig in die Betriebssysteme wie native Anwendungen auf den meisten Geräten. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Wir werden zuerst die Vorläufer behandeln – das Speichern von Links zu Websites.

### Webseiten als Lesezeichen speichern

Alle Browser verfügen über eine Funktion zum Hinzufügen zu Favoriten oder Lesezeichen. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Das Speichern als Lesezeichen ist besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser ermöglichen es Benutzern, ihre Lesezeichen anzuzeigen und zu verwalten, einschließlich des Umbenennens und Löschens von Favoriten. Standardmäßig enthält die Anzeige des Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite zusammen mit einem Symbol, das aus dem {{Glossary("Favicon", "Favicon")}} der Website besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und anderweitige Verwalten von Lesezeichen. Die Benutzeroberfläche für das Verwalten von Lesezeichen unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, beginnend mit dem iPhone im Jahr 2007, fügten die Funktion "Zum Startbildschirm hinzufügen" hinzu. Für reguläre (nicht-PWA) Websites ähnelt diese Funktion Lesezeichen, aber anstatt das Favicon und den Titel der Seite zum Lesezeichenmenü hinzuzufügen – eine Browser-Funktion –, favorisiert man auf diese Weise [ein Symbol auf den Startbildschirm des OS](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

Das Hinzufügen einer Nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Vielmehr fügt es das vom Entwickler definierte Symbol zum Startbildschirm hinzu, das, wenn darauf geklickt wird, den markierten Link im Standardbrowser öffnet.

![iPhone-Option zum Hinzufügen zum Startbildschirm, Installationsaufforderung, Symbol und Löschfunktionalität.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Webseite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung informiert darüber, ob das Löschen des Symbols ein Lesezeichen oder die gesamte Anwendung entfernt.

## Installation und Deinstallation von PWAs

Auch wenn die Installation einer PWA nur ein paar Klicks erfordert, kann das Ergebnis je nach Funktionen der Webanwendung über das einfache Erstellen eines Links zu einer Seite im Internet hinausgehen; die Installation einer PWA integriert die Webanwendung tiefer in das Gerät des Benutzers.

Abhängig von der PWA, dem Gerät und den Funktionen des Betriebssystems und Browsers kann die Installation einer PWA nativen ähnliche Funktionen ermöglichen, wie z.B. das Geben der App eines eigenen eigenständigen Fensters oder das Registrieren als Dateihandler. Dies bedeutet auch, dass die Deinstallation einer PWA, die ebenfalls nur wenige Klicks erfordert, mehr tut als nur das Entfernen des PWA-Symbols.

### PWAs installieren

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform.

Die Benutzeroberfläche für die Installation von PWAs unterscheidet sich je nach Gerätekombination und Betriebssystem. Die Benutzeroberfläche zum "Zum Startbildschirm hinzufügen" installiert die PWA auf Safari auf iOS. Andere Browser, einschließlich Chrome für Android, haben den Befehl zur App-Installation im Browser-Einstellungsmenü. In Chrome und Edge auf dem Desktop wird beim Navigieren zur Seite, wenn die Seite eine PWA ist und die PWA nicht bereits vom Browser installiert ist, ein Installationssymbol in der URL-Leiste sichtbar sein:

![Installationsaufforderung für PWA in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an, die fragt, ob er die PWA installieren möchte, und wenn er zustimmt, wird die PWA installiert.

![Bestätigung der PWA-Installation](installconfirm.jpg)

Sobald installiert, verhält sich die PWA wie andere auf dem OS installierte Anwendungen. Zum Beispiel erscheint das Symbol auf macOS im Dock und hat die gleichen Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf mobilen Geräten wird die Installationsaufforderung in der Regel im Menü der Browseroptionen gefunden. Unabhängig vom Browser oder OS muss die Installation bestätigt werden.

![Installation einer PWA auf Chrome für Android, mit Bestätigung, Startbildschirm-Symbol und Offline-Erlebnis.](android_pwa.jpg)

Nachdem die PWA installiert ist, verhält sie sich wie andere installierte Anwendungen: Ein Klick auf das Anwendungssymbol öffnet die PWA, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf das Betriebssystem installiert werden kann, unterscheidet sich je nach Browser-Betriebssystem-Kombination. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen—ChromeOS, macOS, Windows, Android, Linux, etc.—direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil gilt für iOS-Versionen vor 16.4, bei denen PWAs **nur** in Safari installiert werden konnten. PWAs können ab macOS 14.0 und iOS/iPadOS 16.4 oder höher von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), aber sie läuft dennoch effektiv in einem Browserfenster, auch wenn die üblichen Browser-Benutzeroberflächelemente wie die Adressleiste oder der Zurück-Button nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das Betriebssystem andere Anwendungen speichert, innerhalb eines spezifischen Ordners für den Browser.

Von einem Browser installierte PWAs bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, der zum Installieren der PWA verwendet wurde, derjenige ist, der verwendet wird, um die PWA auszuführen. Es bedeutet auch, dass Sie die gleiche PWA von einem anderen Browser installieren können und dass die beiden Apps als zwei verschiedene Instanzen agieren und keine Daten teilen werden.

Der Browser, der zur Installation der PWA verwendet wurde, weiß, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Zum Beispiel, wenn Sie eine PWA mit MS Edge installieren, wird Edge Sie auffordern, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome Sie weiterhin auffordert, die Anwendung zu installieren. Installieren Sie die PWA auch mit Chrome, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden keine Daten zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, öffnet es sich in der Browserumgebung, die die PWA installiert hat, in der Regel ohne die Benutzeroberfläche des Browsers, obwohl das von der Art abhängig ist, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Manifest) konfiguriert hat. Ebenso hängt die Methode, die zur Deinstallation der PWA verwendet wird, vom Browser ab, der zur Installation verwendet wurde.

### Deinstallieren

Auf den meisten mobilen Betriebssystemen wird die Deinstallation einer PWA auf die gleiche Weise durchgeführt wie das Deinstallieren anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Kontrollpanel, in dem heruntergeladene Anwendungen aus App-Stores verwaltet werden, und können dort deinstalliert werden.

Auf iOS sind PWAs, die von Safari installiert wurden, vom "App Library"-Bildschirm aus gelistet und durchsuchbar, aber sie sind nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgeführt. Auf iOS wird durch langes Tippen auf ein Symbol das Benutzeroberflächen zum Löschen eines Lesezeichens angezeigt; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann eine PWA direkt von der geöffneten PWA aus deinstalliert werden. Um die Deinstallation durchzuführen, öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um mehr Werkzeuge anzuzeigen. Abhängig vom Browser, der zur Installation der PWA verwendet wurde, gibt es entweder einen Link zum Deinstallieren der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Entweder klicken Sie auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Durch Auswahl der App-Einstellung aus dem geöffneten Dropdown-Menü in Edge wird der MS Edge Browser `edge://apps` Tab geöffnet. Dort finden wir eine Liste der installierten Anwendungen mit Optionen für jede, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge sind die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besuchen. In Chrome sind die Liste der Google Apps und installierten PWAs durch den Besuch von `chrome://apps` in Ihrem Chrome-Browser sichtbar und verwaltbar.

## Siehe auch

- [PWAs in Chrome verwenden: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, verwalten oder deinstallieren Sie Apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
