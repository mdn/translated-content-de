---
title: Installieren und Deinstallieren von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie eine Web-App als PWA installierbar gemacht wird, lesen Sie stattdessen [PWAs installierbar machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Web-App-Installation

Browser ermöglichen seit jeher das Speichern von Verknüpfungen zu Websites, das sogenannte „Lesezeichen setzen“. Dabei handelt es sich lediglich um Links zu Websites.

Einige Betriebssysteme (OS) verfügen über erweiterte Lesezeichenfunktionen, die das Speichern von Lesezeichen an gängigen Orten ermöglichen, etwa auf dem Startbildschirm oder in der Taskleiste, wobei ein Symbol die Website im Standardbrowser des Betriebssystems öffnet. Bei vielen Websites ist dies ebenfalls lediglich ein Link zur Website. Wenn die Website eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, installiert das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Benutzers und integriert sie auf den meisten Geräten vollständig wie eine native Anwendung in das Betriebssystem. So wie PWAs installiert werden können, können sie auch deinstalliert werden.

Zunächst behandeln wir die Vorläufer – das Speichern von Links zu Websites.

### Lesezeichen für Websites

Alle Browser verfügen über Funktionen zum Hinzufügen von Lesezeichen zu Favoriten. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder anderweitig nach Inhalten suchen muss. Das Setzen von Lesezeichen ist besonders bei langen URLs und beim Zugriff auf häufig besuchte Inhalte nützlich, die nicht die Startseite der Website sind.

Alle Browser ermöglichen Benutzern das Anzeigen und Verwalten ihrer Lesezeichen, einschließlich des Umbenennens und Löschens von Favoriten. Standardmäßig enthält die Darstellung eines Lesezeichens den Textinhalt des {{HTMLElement("title")}}-Elements der mit einem Lesezeichen versehenen Seite sowie ein Symbol, das aus dem {{Glossary("Favicon", "Favicon")}} der Website besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben, Löschen und sonstige Verwalten von Lesezeichen. Die Benutzeroberfläche zur Lesezeichenverwaltung unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones führten, beginnend mit dem iPhone im Jahr 2007, die Funktion „Auf Startbildschirm sichern“ ein. Bei regulären Websites (die keine PWAs sind) ähnelt diese Funktion Lesezeichen, doch statt das Favicon und den Titel der Seite zum Lesezeichenmenü – einer Browserfunktion – hinzuzufügen, fügt das Speichern auf diese Weise [ein Symbol](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) zum Startbildschirm des Betriebssystems hinzu.

Das Hinzufügen einer Website, die keine PWA ist, zum Startbildschirm installiert die Website nicht auf dem Gerät. Stattdessen wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das beim Anklicken den als Lesezeichen gespeicherten Link im Standardbrowser öffnet.

![iPhone: Zum Startbildschirm hinzufügen, Installationsaufforderung, Symbol und Löschfunktion.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Website eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung informiert darüber, ob durch das Löschen des Symbols ein Lesezeichen oder eine gesamte Anwendung gelöscht wird.

## Installieren und Deinstallieren von PWAs

Die Installation einer PWA erfordert zwar nur wenige Klicks, doch abhängig von den Funktionen der Webanwendung geht das Ergebnis der Installation einer PWA in der Regel weit über das Erstellen eines Links zu einer Seite im Internet hinaus; die Installation einer PWA integriert die Webanwendung stärker in das Gerät des Benutzers.

Abhängig von der PWA, dem Gerät sowie den Funktionen des Betriebssystems und Browsers kann die Installation einer PWA native ähnliche Funktionen ermöglichen, beispielsweise der App ein eigenes, eigenständiges Fenster zu geben oder sie als Dateihandler zu registrieren. Das bedeutet auch, dass die Deinstallation einer PWA, die ebenfalls nur wenige Klicks erfordert, mehr bewirkt als lediglich das Entfernen des Symbols der PWA.

### PWAs installieren

Die Benutzeroberfläche zum Installieren einer PWA aus dem Web variiert je nach Browser und Plattform.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Kombination aus Gerät und Betriebssystem. Die Benutzeroberfläche „Zum Startbildschirm hinzufügen“ installiert die PWA in Safari unter iOS. Andere Browser, einschließlich Chrome für Android, enthalten den Befehl zur App-Installation im Einstellungsmenü des Browsers. Wenn der Benutzer in Chrome und Edge auf dem Desktop zu einer Seite navigiert und die Seite eine PWA ist, die derzeit nicht durch den Browser installiert wurde, ist ein Installationssymbol in der URL-Leiste sichtbar:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Aufforderung an, in der gefragt wird, ob die PWA installiert werden soll. Wenn der Benutzer zustimmt, wird die PWA installiert.

![Bestätigungsaufforderung für die PWA-Installation](installconfirm.jpg)

Nach der Installation verhält sich die PWA wie andere Anwendungen, die auf dem Betriebssystem installiert sind. Unter macOS wird das Symbol beispielsweise im Dock angezeigt und verfügt über dieselben Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock unter macOS](dock.jpg)

In den meisten Desktopbrowsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten befindet sich die Installationsaufforderung in der Regel im Menü der Browseroptionen. Unabhängig vom Browser oder Betriebssystem muss die Installation bestätigt werden.

![PWA-Installation in Chrome für Android mit Bestätigung, Startbildschirmsymbol und Offline-Erlebnis.](android_pwa.jpg)

Nach der Installation verhält sich die PWA wie andere installierte Anwendungen: Durch Klicken auf das Anwendungssymbol wird die PWA geöffnet, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA durch den Browser auf dem Betriebssystem installiert werden kann, unterscheidet sich je nach Kombination aus Browser und Betriebssystem. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen – ChromeOS, macOS, Windows, Android, Linux usw. – direkt oder nach der Installation einer Erweiterung.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs unter macOS von jedem Browser **außer** Safari installiert werden. Für iOS-Versionen vor 16.4 gilt das Gegenteil: Dort konnten PWAs **nur** in Safari installiert werden. PWAs können unter macOS 14.0 oder neuer sowie unter iOS/iPadOS 16.4 oder neuer in jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in einem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), sie läuft jedoch weiterhin effektiv in einem Browserfenster, auch wenn die üblichen Browser-Benutzeroberflächenelemente wie die Adressleiste oder die Schaltfläche „Zurück“ nicht sichtbar sind. Die Anwendung befindet sich dort, wo das Betriebssystem andere Anwendungen speichert, innerhalb eines browserspezifischen Ordners.

Von einem Browser installierte PWAs bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, mit dem eine PWA installiert wurde, auch zum Ausführen dieser PWA verwendet wird. Es bedeutet außerdem, dass Sie dieselbe PWA über einen anderen Browser installieren können und sich die beiden Apps wie zwei verschiedene Instanzen verhalten und keine Daten gemeinsam nutzen.

Der Browser, der zur Installation der PWA verwendet wurde, weiß, dass die PWA installiert ist, andere Browser haben jedoch keinen Zugriff auf den Installationsstatus. Wenn Sie beispielsweise eine PWA mit MS Edge installieren, fordert Edge Sie beim Besuch der Website zum Öffnen der PWA auf, während Chrome Sie weiterhin zur Installation der Anwendung auffordert. Wenn Sie die PWA auch mit Chrome installieren, verfügen Sie über zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA geöffnet sind, werden Daten nicht zwischen Instanzen geteilt, die von unterschiedlichen Browsern installiert wurden.

Wenn Sie auf das Symbol der Web-App tippen, wird sie in der Browserumgebung geöffnet, die die PWA installiert hat, in der Regel ohne die Browser-Benutzeroberfläche darum herum. Dies hängt jedoch davon ab, wie der Entwickler das [Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest) konfiguriert hat. Ebenso hängt die Methode zur Deinstallation der PWA vom Browser ab, der zu ihrer Installation verwendet wurde.

### Deinstallieren

Auf den meisten mobilen Betriebssystemen wird eine PWA auf dieselbe Weise deinstalliert wie andere Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs in derselben Systemsteuerung, in der Anwendungen verwaltet werden, die aus App-Stores heruntergeladen wurden, und können dort deinstalliert werden.

Unter iOS werden von Safari installierte PWAs im Bildschirm „App-Mediathek“ aufgelistet und sind dort durchsuchbar, werden jedoch nicht zusammen mit anderen installierten Anwendungen unter „Einstellungen“ aufgeführt. Unter iOS zeigt langes Tippen auf ein Symbol die Benutzeroberfläche zum Löschen des Lesezeichens an; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann eine PWA direkt in der geöffneten PWA deinstalliert werden. Öffnen Sie zum Deinstallieren die PWA. In der oberen rechten Ecke der geöffneten App befindet sich ein Symbol, das erweitert werden muss, um weitere Werkzeuge anzuzeigen. Abhängig vom Browser, der zur Installation der PWA verwendet wurde, gibt es entweder einen Link zum Deinstallieren der PWA oder einen Einstellungslink, der die Einstellungsseite des Browsers mit einem Deinstallationslink öffnet. Klicken Sie entweder auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie in einem Browser-Tab zu den App-Einstellungen und klicken Sie auf „Deinstallieren“.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Durch Auswahl der App-Einstellungen im geöffneten Dropdown-Menü in Edge wird der Tab `edge://apps` des MS-Edge-Browsers geöffnet. Dort wird eine Liste installierter Anwendungen mit Optionen für jede Anwendung bereitgestellt, einschließlich `🗑️ Uninstall`. Bestätigen Sie die Deinstallation. Das war's!

In Edge werden die installierten PWAs aufgelistet und können verwaltet werden, indem Sie in Ihrem Edge-Browser [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) aufrufen. In Chrome können Sie die Liste der Google Apps und installierten PWAs anzeigen und verwalten, indem Sie in Ihrem Chrome-Browser `chrome://apps` aufrufen.

## Siehe auch

- [PWAs in Chrome verwenden: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Apps in Microsoft Edge installieren, verwalten oder deinstallieren](https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge)
