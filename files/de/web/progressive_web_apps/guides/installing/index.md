---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 32238d68e222c197a460e7023877346c82a102f8
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Nutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie man eine Web-App als PWA installierbar macht, sehen Sie stattdessen [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Verknüpfungen zu Webseiten ermöglicht, bekannt als "Bookmarks". Dies sind einfach Links zu Webseiten.

Einige Betriebssysteme (OS) haben die Bookmark-Fähigkeiten verbessert, sodass Bookmarks an gängigen Orten wie dem Startbildschirm oder der Taskleiste mit einem Symbol, das die Seite im Standardbrowser des OS öffnet, gespeichert werden können. Für viele Webseiten ist dies auch nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, wird das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers installieren und sie wie native Anwendungen auf den meisten Geräten vollständig in das Betriebssystem integrieren. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Wir werden zuerst die Vorläufer behandeln — das Speichern von Links zu Webseiten.

### Webseiten bookmarken

Alle Browser haben eine Funktionalität, um Seiten zu den Favoriten hinzuzufügen. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Webseiten, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Das Bookmarken ist besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Homepage der Seite sind.

Alle Browser ermöglichen es den Nutzern, ihre Lesezeichen anzusehen und zu verwalten, einschließlich der Umbenennung und Löschung von Favoriten. Standardmäßig zeigt die Lesezeichendarstellung den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite zusammen mit einem Icon, das aus dem [Favicon](/de/docs/Glossary/Favicon) der Seite besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und anderweitige Verwalten von Lesezeichen. Die Benutzeroberfläche zur Verwaltung von Lesezeichen unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, angefangen mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" eingeführt. Bei regulären (nicht-PWA) Webseiten ist diese Funktion ähnlich wie Lesezeichen, aber anstatt das Favicon und den Titel der Seite zum Bookmarks-Menü — einer Browser-Funktion — hinzuzufügen, [fügt das Favorisieren auf diese Weise ein Symbol](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) zum Startbildschirm des OS hinzu.

Das Hinzufügen einer nicht-PWA-Site zum Startbildschirm installiert die Webseite nicht auf dem Gerät. Vielmehr wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das beim Anklicken den markierten Link im Standardbrowser öffnet.

![iPhone-Zum-Startbildschirm-hinzufügen, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt an, ob das Löschen des Symbols ein Lesezeichen oder eine gesamte Anwendung löscht.

## Installation und Deinstallation von PWAs

Während die Installation einer PWA nur ein paar Klicks erfordert, geht das Ergebnis der Installation einer PWA, abhängig von den Funktionen der Webanwendung, normalerweise über das Erstellen eines Links zu einer Seite im Internet hinaus; die Installation einer PWA integriert die Webanwendung tiefer in das Gerät des Nutzers.

Abhängig von der PWA, dem Gerät und den Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native-ähnliche Funktionen ermöglichen, wie das Bereitstellen eines eigenen Standalone-Fensters für die App oder die Registrierung als Dateimanager. Das bedeutet auch, dass die Deinstallation einer PWA, die ebenfalls nur ein paar Klicks erfordert, mehr als das Entfernen des PWA-Symbols bewirkt.

### PWAs installieren

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Geräte- und Betriebssystemkombination. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA auf Safari unter iOS. Andere Browser, einschließlich Chrome für Android, beinhalten den Befehl zur App-Installation im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop, wenn der Benutzer zur Seite navigiert und die Seite eine PWA ist und die PWA nicht bereits vom Browser installiert ist, wird ein Installationssymbol in der URL-Leiste angezeigt:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob die PWA installiert werden soll, und wenn zugestimmt wird, wird die PWA installiert.

![Bestätigungsaufforderung zur PWA-Installation](installconfirm.jpg)

Einmal installiert, verhält sich die PWA wie andere Anwendungen, die auf dem OS installiert sind. Zum Beispiel wird auf macOS das Symbol im Dock erscheinen und die gleichen Symboloptionen haben wie andere Anwendungen:

![PWA-Symbol im Dock auf MacOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf mobilen Geräten wird die Installationsaufforderung üblicherweise im Menü der Browseroptionen gefunden. Unabhängig vom Browser oder OS muss die Installation bestätigt werden.

![PWA-Installation auf Chrome für Android mit Bestätigung, Startbildschirmsymbol und Offline-Erfahrung.](android_pwa.jpg)

Einmal installiert, verhält sich die PWA wie andere installierte Anwendungen: Ein Klick auf das Anwendungssymbol öffnet die PWA, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, unterscheidet sich je nach Browser-/Betriebssystemkombination. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen – ChromeOS, MacOS, Windows, Android, Linux, etc. – direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil war der Fall für iOS-Versionen vor 16.4, wo PWAs **nur** in Safari installiert werden konnten. PWAs können auf macOS 14.0 oder später und iOS/iPadOS 16.4 oder später von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen Standalone-Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), aber sie läuft im Grunde genommen immer noch in einem Browserfenster, auch wenn die üblichen Browser-Bedienelemente wie die Adressleiste oder die Schaltfläche "Zurück" nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das OS andere Anwendungen speichert, in einem Browser-spezifischen Ordner.

Von einem Browser installierte PWAs bleiben spezifisch für diesen Browser. Dies bedeutet, dass der Browser, mit dem eine PWA installiert wurde, derjenige ist, der zum Ausführen dieser PWA verwendet wird. Es bedeutet auch, dass Sie die gleiche PWA von einem anderen Browser installieren können und dass die beiden Apps sich als zwei unterschiedliche Instanzen verhalten werden und keine Daten teilen.

Der Browser, der zur Installation der PWA verwendet wurde, wird wissen, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Wenn Sie beispielsweise eine PWA mit MS Edge installieren, fordert Edge Sie auf, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome weiterhin die Installation der Anwendung vorschlägt. Wenn Sie die PWA auch in Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden keine Daten zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, wird sie in der Browserumgebung geöffnet, die die PWA installiert hat, normalerweise ohne die Benutzeroberfläche des Browsers darum herum, obwohl dies von der Art und Weise abhängt, wie der Entwickler das [web app manifest](/de/docs/Web/Manifest) konfiguriert hat. Ähnlich hängt die Methode zur Deinstallation der PWA von dem Browser ab, der zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen wird die Deinstallation einer PWA auf die gleiche Weise durchgeführt wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Kontrollfeld, in dem Anwendungen, die aus App-Stores heruntergeladen wurden, verwaltet werden, und können dort deinstalliert werden.

Unter iOS sind PWAs, die von Safari installiert wurden, auf dem Bildschirm "App-Bibliothek" gelistet und durchsuchbar, aber sie sind nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgelistet. Auf iOS zeigt ein langes Antippen eines Symbols die Benutzeroberfläche zum Löschen eines Lesezeichens; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Um sie zu deinstallieren, öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um weitere Tools zu sehen. Je nach verwendetem Browser zur Installation der PWA gibt es entweder einen Link zur Deinstallation der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Entweder klicken Sie auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder gehen Sie zu den App-Einstellungen in einem Browser-Tab und klicken auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Wenn Sie die App-Einstellungen aus dem geöffneten Dropdown-Menü in Edge auswählen, wird der MS Edge-Browser-Tab `edge://apps` geöffnet. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge sind die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besuchen. In Chrome können die Liste der Google-Apps und installierte PWAs angesehen und verwaltet werden, indem Sie `chrome://apps` in Ihrem Chrome-Browser aufrufen.

## Siehe auch

- [Using PWAs in Chrome: computer and Android](https://support.google.com/chrome/answer/9658361)
- [Install, manage, or uninstall apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
