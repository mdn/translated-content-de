---
title: Installation und Deinstallation von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Dieser Leitfaden behandelt, wie Benutzer auf ihren Geräten PWAs installieren und deinstallieren können. Wenn Sie lernen möchten, wie Sie eine Web-App als PWA installierbar machen, sehen Sie sich stattdessen den [Leitfaden zur Installierbarkeit von PWAs](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) an.

## Geschichte der Installation von Web-Apps

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Bookmarking". Diese sind einfach Links zu Websites.

Einige Betriebssysteme (OS) haben die Möglichkeiten des Bookmarkings erweitert, wodurch Lesezeichen an häufig genutzten Orten wie dem Startbildschirm oder der Taskleiste gespeichert werden können, wobei ein Symbol die Website im Standardbrowser des OS startet. Für viele Websites ist dies ebenfalls nur ein Link zur Website. Wenn die Website eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, wird durch das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers installiert und vollständig in das Betriebssystem integriert, ähnlich wie native Anwendungen auf den meisten Geräten. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Zuerst behandeln wir die Vorläufer — das Speichern von Links zu Websites.

### Lesezeichen für Websites

Alle Browser verfügen über eine Funktion zum Hinzufügen zu den Favoriten. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Bookmarking ist besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Website sind.

Alle Browser ermöglichen es Benutzern, ihre Lesezeichen zu betrachten und zu verwalten, einschließlich der Möglichkeit, Favoriten umzubenennen und zu löschen. Standardmäßig umfasst die Anzeige des Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite zusammen mit einem Symbol, das aus dem {{Glossary("Favicon", "Favicon")}} der Website besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und anderweitige Verwalten von Lesezeichen. Die Benutzeroberfläche für die Verwaltung von Lesezeichen unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, beginnend mit dem iPhone im Jahr 2007, fügten die Funktion "Zum Startbildschirm hinzufügen" hinzu. Für reguläre (nicht-PWA) Websites ist diese Funktion ähnlich wie Lesezeichen, aber anstatt das Favicon und den Titel der Seite zum Lesezeichenmenü hinzuzufügen — eine Browserfunktion — fügt das Favorisieren auf diese Weise [ein Symbol](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) zum Startbildschirm des OS hinzu.

Das Hinzufügen einer nicht-PWA-Website zum Startbildschirm installiert die Website nicht auf dem Gerät. Es fügt vielmehr das von den Entwicklern definierte Symbol zum Startbildschirm hinzu, das beim Anklicken den markierten Link im Standardbrowser öffnet.

![iPhone zum Startbildschirm hinzufügen, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die Website, die zum Startbildschirm hinzugefügt wurde, eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt an, ob das Löschen des Symbols ein Lesezeichen oder die gesamte Anwendung löscht.

## Installation und Deinstallation von PWAs

Das Installieren einer PWA erfordert nur ein paar Klicks. Abhängig von den Funktionen der Webanwendung reicht das Ergebnis der Installation einer PWA jedoch meist weit über das Erstellen eines Links zu einer Seite im Internet hinaus; die Installation einer PWA integriert die Webanwendung stärker auf dem Gerät des Benutzers.

Je nach PWA, Gerät und Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native Funktionen ermöglichen, wie beispielsweise der App ein eigenes, eigenständiges Fenster zu geben oder sie als Dateihandler zu registrieren. Das bedeutet auch, dass das Deinstallieren einer PWA, was ebenfalls nur wenige Klicks erfordert, mehr tut, als nur das Symbol der PWA zu entfernen.

### Installation von PWAs

Die Benutzeroberfläche für die Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen.

Die Benutzeroberfläche für die Installation von PWAs unterscheidet sich je nach Gerät- und OS-Kombination. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA auf Safari unter iOS. Andere Browser, einschließlich Chrome für Android, enthalten den Befehl zur App-Installation im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop erscheint ein Installationssymbol in der URL-Leiste, wenn die Seite eine PWA ist und die PWA nicht derzeit vom Browser installiert ist:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, ob er die PWA installieren möchte, und wenn er dies akzeptiert, wird die PWA installiert.

![Bestätigungsaufforderung für PWA-Installation](installconfirm.jpg)

Einmal installiert, wird die PWA sich wie andere Anwendungen verhalten, die auf dem OS installiert sind. Zum Beispiel erscheint auf macOS das Symbol im Dock und hat die gleichen Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf macOS](dock.jpg)

Auf den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf mobilen Geräten findet sich die Installationsaufforderung generell im Menü der Browseroptionen. Unabhängig vom Browser oder OS muss die Installation bestätigt werden.

![PWA-Installation auf Chrome für Android, mit Bestätigung, Startbildschirmsymbol und Offline-Erfahrung.](android_pwa.jpg)

Einmal installiert, verhält sich die PWA wie andere installierte Anwendungen: Ein Klick auf das Anwendungs-Symbol öffnet die PWA, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, hängt von der Kombination aus Browser und Betriebssystem ab. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen—ChromeOS, macOS, Windows, Android, Linux usw.—direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil gilt für iOS-Versionen vor 16.4, wo PWAs **nur** in Safari installiert werden konnten. PWAs können ab macOS 14.0 oder später und iOS/iPadOS 16.4 oder später von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in ihrem eigenen eigenständigen Fenster (ohne die vollständige Browser-Benutzeroberfläche) angezeigt werden, läuft jedoch effektiv in einem Browserfenster, selbst wenn die üblichen Browser-Oberflächenelemente, wie die Adressleiste oder die Zurück-Taste, nicht sichtbar sind. Die Anwendung wird dort gefunden, wo das OS andere Anwendungen speichert, innerhalb eines spezifischen Ordners für den Browser.

PWAs, die von einem Browser installiert wurden, bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, der für die Installation einer PWA verwendet wurde, derjenige ist, der diese PWA ausführt. Es bedeutet auch, dass Sie die gleiche PWA von einem anderen Browser installieren können und dass die beiden Apps sich als zwei verschiedene Instanzen verhalten und keine Daten teilen.

Der Browser, der zum Installieren der PWA verwendet wurde, weiß, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Zum Beispiel fordert Edge Sie auf, die PWA zu öffnen, wenn Sie die Website besuchen, nachdem Sie eine PWA mit MS Edge installiert haben, während Chrome Sie weiterhin dazu auffordert, die Anwendung zu installieren. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden Daten nicht zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, öffnet es sich in der Browserumgebung, die die PWA installiert hat, normalerweise ohne die Browseroberfläche darum, obwohl dies von der Art und Weise abhängt, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) konfiguriert hat. Ebenso hängt die Methode, die zum Deinstallieren der PWA verwendet wird, vom Browser ab, der zur Installation verwendet wurde.

### Deinstallation

Auf den meisten mobilen Betriebssystemen erfolgt die Deinstallation einer PWA auf die gleiche Weise wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Kontrollpanel, in dem Anwendungen, die aus App-Stores heruntergeladen wurden, verwaltet werden, und können dort deinstalliert werden.

Auf iOS werden von Safari installierte PWAs auf dem "App-Bibliothek"-Bildschirm aufgelistet und sind durchsuchbar, werden jedoch nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgelistet. Auf iOS zeigt ein langes Tippen auf ein Symbol die Benutzeroberfläche zum Löschen eines Lesezeichens an; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Zum Deinstallieren öffnen Sie die PWA. In der oberen rechten Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um weitere Werkzeuge zu sehen. Abhängig vom Browser, der zur Installation der PWA verwendet wurde, gibt es entweder einen Link zur Deinstallation der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Entweder klicken Sie auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den App-Einstellungen in einem Browser-Tab und klicken Sie auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Das Auswählen der App-Einstellung aus dem geöffneten Dropdown-Menü in Edge öffnete den MS Edge-Browser `edge://apps` Tab. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Uninstall`. Die Deinstallation bestätigen. Das war's!

In Edge werden die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser besuchen. In Chrome sind die Liste der Google-Apps und installierte PWAs sichtbar und können verwaltet werden, indem Sie `chrome://apps` in Ihrem Chrome-Browser besuchen.

## Siehe auch

- [Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Installieren, Verwalten oder Deinstallieren von Apps in Microsoft Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
