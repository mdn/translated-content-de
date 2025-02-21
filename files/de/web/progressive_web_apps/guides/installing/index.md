---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Nutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie Sie eine Web-App als PWA installierbar machen, sehen Sie sich stattdessen [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) an.

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Kurzlinks zu Websites ermöglicht, bekannt als "Lesezeichen". Dies sind einfach Links zu Websites.

Einige Betriebssysteme (OS) haben erweiterte Lesezeichenfunktionen, die das Speichern von Lesezeichen an häufig genutzten Orten wie dem Startbildschirm oder der Taskleiste ermöglichen, mit einem Symbol, das die Seite im Standardbrowser des OS startet. Für viele Websites ist dies ebenfalls nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Nutzers und integriert sie vollständig in die Betriebssysteme, ähnlich wie native Anwendungen auf den meisten Geräten. Ebenso wie PWAs installiert werden können, können sie auch deinstalliert werden.

Zuerst decken wir die Vorläufer ab – das Speichern von Links zu Websites.

### Websites als Lesezeichen speichern

Alle Browser verfügen über eine Funktion zum Hinzufügen von Lesezeichen oder Favoriten. Ein Lesezeichen oder Favorit ist eine klickbare Abkürzung zu einer Webseite. Lesezeichen ermöglichen den schnellen Zugriff auf Websites, ohne dass der Nutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Das Setzen eines Lesezeichens ist besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser ermöglichen es Nutzern, ihre Lesezeichen anzusehen und zu verwalten, einschließlich der Umbenennung und des Löschens von Favoriten. Standardmäßig zeigt die Lesezeichenanzeige den Textinhalt des {{HTMLElement("title")}}-Elements der gespeicherten Seite zusammen mit einem Symbol, bestehend aus dem {{Glossary("Favicon", "favicon")}} der Website, an.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und die sonstige Verwaltung von Lesezeichen. Die Benutzeroberfläche für die Lesezeichenverwaltung unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, beginnend mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" hinzugefügt. Für normale (nicht-PWA) Websites ist diese Funktion ähnlich wie Lesezeichen, aber anstatt das Favicon und den Titel der Seite zum Lesezeichenmenü hinzuzufügen – eine Browserfunktion – wird bei dieser Art des Favoritens [ein Symbol zum Startbildschirm des OS hinzugefügt](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site).

Das Hinzufügen einer nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Stattdessen wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das beim Anklicken den gespeicherten Link im Standardbrowser öffnet.

![iPhone zum Startbildschirm hinzufügen, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt an, ob das Löschen des Symbols ein Lesezeichen oder die gesamte Anwendung löscht.

## Installation und Deinstallation von PWAs

Während die Installation einer PWA nur ein paar Klicks erfordert, geht das Resultat der Installation einer PWA oft weit über das Erstellen eines Links zu einer Seite im Internet hinaus; das Installieren einer PWA integriert die Webanwendung tiefer auf dem Gerät des Nutzers.

Je nach PWA, Gerät und Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native-ähnliche Funktionen ermöglichen, wie z.B. der App ein eigenes eigenständiges Fenster zu geben oder sie als Dateihandler zu registrieren. Das bedeutet auch, dass das Deinstallieren einer PWA, das ebenfalls nur ein paar Klicks erfordert, mehr tut als nur das Entfernen des PWA-Symbols.

### Installation von PWAs

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zum anderen.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Geräte- und OS-Kombination. Die "Zum Startbildschirm hinzufügen" Benutzeroberfläche installiert die PWA auf Safari für iOS. Andere Browser, einschließlich Chrome für Android, beinhalten den Befehl zur App-Installation im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop, wenn der Nutzer zur Seite navigiert, und wenn die Seite eine PWA ist und die PWA nicht bereits vom Browser installiert ist, wird ein Installationssymbol in der URL-Leiste sichtbar:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Nutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob er die PWA installieren möchte, und wenn sie akzeptieren, wird die PWA installiert.

![Bestätigungsaufforderung zur PWA-Installation](installconfirm.jpg)

Einmal installiert, verhält sich die PWA wie andere Anwendungen, die auf dem OS installiert sind. Zum Beispiel wird das Symbol auf macOS im Dock erscheinen und hat dieselben Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten befindet sich die Installationsaufforderung im Allgemeinen im Menü der Browseroptionen. Unabhängig vom Browser oder OS muss die Installation bestätigt werden.

![PWA-Installation auf Chrome für Android, mit Bestätigung, Startbildsymbol und Offline-Erfahrung.](android_pwa.jpg)

Sobald die PWA installiert ist, verhält sie sich wie andere installierte Anwendungen: Das Klicken auf das Anwendungssymbol öffnet die PWA, selbst wenn der Nutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, hängt von der Kombination aus Browser und Betriebssystem ab. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen – ChromeOS, macOS, Windows, Android, Linux, etc. – direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil ist bei iOS-Versionen vor 16.4 der Fall, bei denen PWAs **nur** in Safari installiert werden konnten. Ab macOS 14.0 oder neuer und iOS/iPadOS 16.4 oder neuer können PWAs von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in einem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), sie läuft jedoch effektiv in einem Browserfenster, selbst wenn die üblichen Browser-Benutzerelemente wie die Adressleiste oder die Zurück-Taste nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das OS andere Anwendungen speichert, in einem spezifischen Ordner für den Browser.

PWAs, die von einem Browser installiert werden, bleiben spezifisch für diesen Browser. Dies bedeutet, dass der Browser, der zur Installation einer PWA verwendet wurde, auch derjenige ist, der zum Ausführen dieser PWA genutzt wird. Es bedeutet auch, dass Sie dieselbe PWA von einem anderen Browser installieren können, und dass die beiden Apps sich als zwei unterschiedliche Instanzen verhalten und keine Daten teilen.

Der Browser, der zur Installation der PWA verwendet wurde, weiß, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Zum Beispiel, wenn Sie eine PWA mit MS Edge installieren, wird Edge Sie auffordern, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome weiterhin die Installation der Anwendung vorschlagen wird. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden keine Daten zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, öffnet sie sich im Browserumfeld, das die PWA installiert hat, im Allgemeinen ohne die UI des Browsers darum, obwohl das davon abhängt, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) konfiguriert hat. Ähnlich hängt die Methode, die zur Deinstallation der PWA verwendet wird, von dem Browser ab, der zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen wird die Deinstallation einer PWA auf die gleiche Weise durchgeführt wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im gleichen Kontrollpanel, in dem Anwendungen verwaltet werden, die aus App-Stores heruntergeladen wurden, und können dort deinstalliert werden.

Auf iOS sind PWAs, die aus Safari installiert wurden, über den "App Library"-Bildschirm aufgelistet und durchsuchbar, aber sie werden nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgeführt. Auf iOS ruft das lange Antippen eines Symbols die Benutzeroberfläche zum Löschen von Lesezeichen auf; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Um zu deinstallieren, öffnen Sie die PWA. In der rechten oberen Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um weitere Werkzeuge zu sehen. Abhängig vom verwendeten Browser zur Installation der PWA wird es entweder einen Link zur Deinstallation der PWA geben oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Klicken Sie entweder auf die Deinstallationsoption im Dropdown-Menü, wenn vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Das Auswählen von App-Einstellungen im geöffneten Dropdown-Menü in Edge öffnete die MS Edge Browser `edge://apps` Tab. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge sind die installierten PWAs aufgelistet und können verwaltet werden, indem [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besucht wird. In Chrome können die Liste der Google Apps und installierte PWAs angezeigt und verwaltet werden, indem `chrome://apps` in Ihrem Chrome-Browser besucht wird.

## Siehe auch

- [Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, verwalten oder deinstallieren von Apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
