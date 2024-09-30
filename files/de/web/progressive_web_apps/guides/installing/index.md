---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 32238d68e222c197a460e7023877346c82a102f8
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie Sie eine Web-App als PWA installierbar machen, lesen Sie stattdessen [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Web-App-Installation

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Lesezeichen setzen". Diese sind einfach Links zu Websites.

Einige Betriebssysteme (OS) haben die Lesezeichenfunktion erweitert, sodass Lesezeichen an gemeinsamen Orten wie dem Startbildschirm oder der Taskleiste gespeichert werden können. Das Symbol startet die Seite im Standardbrowser des OS. Für viele Websites ist dies ebenfalls nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers, sodass sie wie native Anwendungen auf den meisten Geräten vollständig in das Betriebssystem integriert wird. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Wir behandeln zuerst die Vorläufer — das Speichern von Links zu Websites.

### Websites mit Lesezeichen versehen

Alle Browser haben eine Funktion zum Hinzufügen zu Favoriten oder Lesezeichen. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen einen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder auf andere Weise nach Inhalten suchen muss. Lesezeichen sind besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser ermöglichen es Benutzern, ihre Lesezeichen anzuzeigen und zu verwalten, einschließlich der Umbenennung und Löschung von Favoriten. Standardmäßig umfasst die Anzeige des Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite sowie ein Symbol, das aus dem [Favicon](/de/docs/Glossary/Favicon) der Seite besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben und Löschen von Lesezeichen sowie deren Verwaltung. Die Benutzeroberfläche für die Lesezeichenverwaltung unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, beginnend mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" eingeführt. Für reguläre (nicht PWA) Websites ist dies ähnlich wie bei Lesezeichen, aber anstatt das Favicon und den Titel der Seite dem Lesezeichenmenü hinzuzufügen — eine Funktion des Browsers — wird auf diese Weise ein Symbol zum Startbildschirm des OS [hinzugefügt](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site).

Das Hinzufügen einer nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Stattdessen wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das beim Anklicken den markierten Link im Standardbrowser öffnet.

![iPhone "Zum Startbildschirm hinzufügen", Installationsaufforderung, Symbol und Löschfunktionalität.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt darüber Auskunft, ob durch das Löschen des Symbols ein Lesezeichen oder eine gesamte Anwendung gelöscht wird.

## Installation und Deinstallation von PWAs

Während die Installation einer PWA oft nur wenige Klicks erfordert, geht das Ergebnis je nach den Funktionen der Webanwendung meist weit über das Erstellen eines Links zu einer Seite im Internet hinaus; das Installieren einer PWA integriert die Webanwendung tiefer in das Gerät des Benutzers.

Je nach PWA, Gerät und den Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native-ähnliche Funktionen ermöglichen, wie zum Beispiel das Geben eines eigenen eigenständigen Fensters oder das Registrieren als Datei-Handler. Dies bedeutet auch, dass das Deinstallieren einer PWA, das ebenfalls nur wenige Klicks erfordert, mehr als nur das Entfernen des PWA-Symbols bewirkt.

### Installation von PWAs

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von Browser zu Browser und von Plattform zu Plattform.

Die Benutzeroberfläche für die Installation von PWAs unterscheidet sich je nach Geräte- und Betriebssystemkombination. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA auf Safari unter iOS. Andere Browser, einschließlich Chrome für Android, beinhalten den App-Installationsbefehl im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop, wenn der Benutzer die Seite besucht, wird, falls die Seite eine PWA ist und die PWA derzeit nicht vom Browser installiert ist, ein Installationssymbol in der URL-Leiste sichtbar:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol wählt, zeigt der Browser eine Aufforderung an, ob die PWA installiert werden soll, und wenn der Benutzer zustimmt, wird die PWA installiert.

![Bestätigungsaufforderung zur PWA-Installation](installconfirm.jpg)

Sobald sie installiert ist, verhält sich die PWA wie andere Anwendungen, die auf dem OS installiert sind. Zum Beispiel wird auf macOS das Symbol im Dock angezeigt und hat die gleichen Optionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten befindet sich die Installationsaufforderung in der Regel im Menü der Browseroptionen. Unabhängig vom Browser oder OS muss die Installation bestätigt werden.

![Installation einer PWA auf Chrome für Android, mit Bestätigung, Startbildschirm-Symbol und Offline-Erlebnis.](android_pwa.jpg)

Einmal installiert, verhält sich die PWA wie andere installierte Anwendungen: Das Anklicken des Anwendungssymbols öffnet die PWA, selbst wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, unterscheidet sich je nach Browser/Betriebssystem-Kombination. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen—ChromeOS, macOS, Windows, Android, Linux usw.—entweder direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil ist der Fall für iOS-Versionen vor 16.4, wo PWAs **nur** in Safari installiert werden konnten. PWAs können ab macOS 14.0 oder höher und iOS/iPadOS 16.4 oder höher von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), aber sie läuft effektiv in einem Browserfenster, selbst wenn die üblichen Browser-Benutzerschnittstellen-Elemente wie die Adressleiste oder die Zurück-Taste nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das OS andere Anwendungen speichert, in einem browser-spezifischen Ordner.

PWAs, die von einem Browser installiert werden, bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, der zur Installation einer PWA verwendet wurde, derjenige ist, der zur Ausführung dieser PWA verwendet wird. Es bedeutet auch, dass Sie die gleiche PWA aus einem anderen Browser installieren können, und dass die beiden Apps wie zwei verschiedene Instanzen funktionieren und keine Daten teilen.

Der Browser, der zur Installation der PWA verwendet wurde, weiß, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Zum Beispiel, wenn Sie eine PWA mit MS Edge installieren, wird Edge eine Aufforderung anzeigen, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome weiterhin eine Aufforderung zur Installation der Anwendung anzeigt. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden keine Daten zwischen den Instanzen geteilt, die aus verschiedenen Browsern installiert wurden.

Wenn Sie das Web-App-Symbol antippen, wird es in der Browserumgebung geöffnet, die die PWA installiert hat, in der Regel ohne die Browser-Benutzeroberfläche darum herum, obwohl dies von der Art und Weise abhängt, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Manifest) konfiguriert hat. Ebenso hängt die Methode zur Deinstallation der PWA vom Browser ab, der zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen wird die Deinstallation einer PWA auf die gleiche Weise wie die Deinstallation anderer Anwendungen durchgeführt. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Kontrollpanel, in dem auch Anwendungen aus App-Stores verwaltet werden, und können dort deinstalliert werden.

Auf iOS sind PWAs, die von Safari installiert wurden, auf dem Bildschirm "App-Mediathek" aufgelistet und durchsuchbar, jedoch nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgeführt. Auf iOS wird beim langen Tippen auf ein Symbol die Benutzeroberfläche zum Löschen von Lesezeichen angezeigt; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Um zu deinstallieren, öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App befindet sich ein Symbol, das erweitert werden muss, um mehr Werkzeuge anzuzeigen. Abhängig vom Browser, der zur Installation der PWA verwendet wurde, gibt es entweder einen Link zur Deinstallation der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Klicken Sie entweder auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Das Auswählen der Programmeinstellungen aus dem geöffneten Dropdown-Menü in Edge öffnete den MS Edge-Browser `edge://apps` Tab. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge werden die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besuchen. In Chrome sind die Liste der Google-Apps und installierten PWAs einsehbar und verwaltbar, indem Sie `chrome://apps` in Ihrem Chrome-Browser besuchen.

## Siehe auch

- [Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, verwalten oder deinstallieren von Apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
