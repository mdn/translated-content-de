---
title: Installieren und Deinstallieren von Web-Apps
slug: Web/Progressive_web_apps/Guides/Installing
l10n:
  sourceCommit: 32238d68e222c197a460e7023877346c82a102f8
---

{{PWASidebar}}

Dieser Leitfaden behandelt, wie Benutzer PWAs auf ihren Geräten installieren und deinstallieren können. Wenn Sie erfahren möchten, wie Sie eine Web-App als PWA installierbar machen, lesen Sie stattdessen [Making PWAs installable](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

## Geschichte der Installation von Web-Apps

Browser haben schon immer das Speichern von Verknüpfungen zu Websites ermöglicht, bekannt als "Lesezeichen anlegen". Das sind einfach Links zu Websites.

Einige Betriebssysteme (OS) haben die Fähigkeiten von Lesezeichen verbessert und ermöglichen das Speichern von Lesezeichen an häufig genutzten Orten wie dem Startbildschirm oder der Taskleiste. Dabei wird ein Symbol verwendet, das die Website im Standardbrowser des OS öffnet. Für viele Websites ist dies ebenfalls nur ein Link zur Seite. Wenn die Seite eine [Progressive Web Application (PWA)](/de/docs/Web/Progressive_web_apps) ist, wird durch das Speichern auf dem Startbildschirm die PWA auf dem Gerät des Nutzers installiert und vollständig in das Betriebssystem integriert, ähnlich wie native Anwendungen auf den meisten Geräten. Genau wie PWAs installiert werden können, können sie auch deinstalliert werden.

Zuerst werden wir die Vorläufer behandeln – das Speichern von Links zu Websites.

### Websites als Lesezeichen speichern

Alle Browser verfügen über die Funktionalität zum Hinzufügen zu Favoriten bzw. Lesezeichen. Ein Lesezeichen oder Favorit ist eine anklickbare Verknüpfung zu einer Webseite. Lesezeichen ermöglichen einen schnellen Zugriff auf Websites, ohne dass der Benutzer eine URL eingeben oder nach Inhalten suchen muss. Lesezeichen sind besonders nützlich für lange URLs und den Zugriff auf häufig besuchte Inhalte, die nicht die Startseite der Seite sind.

Alle Browser ermöglichen es Benutzern, ihre Lesezeichen anzuzeigen und zu verwalten, einschließlich der Umbenennung und Löschung von Favoriten. Standardmäßig zeigt das Lesezeichen den Textinhalt des {{HTMLElement("title")}}-Elements der markierten Seite zusammen mit einem Symbol an, das aus dem [Favicon](/de/docs/Glossary/Favicon) der Seite besteht.

Browser ermöglichen das Speichern, Bearbeiten, Verschieben und Löschen sowie die Verwaltung von Lesezeichen. Die Benutzeroberfläche für die Verwaltung von Lesezeichen unterscheidet sich je nach Browser.

### Zum Startbildschirm hinzufügen

Smartphones, beginnend mit dem iPhone im Jahr 2007, haben die Funktion "Zum Startbildschirm hinzufügen" eingeführt. Für reguläre (nicht PWA) Websites ähnelt diese Funktion Lesezeichen, jedoch wird anstelle des Favicons und Titels der Seite im Lesezeichen-Menü – einer Browserfunktion – durch ein Favorit-Anlegen auf diese Weise [ein Symbol zum Startbildschirm](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) des OS hinzugefügt.

Das Hinzufügen einer nicht-PWA-Seite zum Startbildschirm installiert die Website nicht auf dem Gerät. Stattdessen wird das vom Entwickler definierte Symbol zum Startbildschirm hinzugefügt, das, wenn es angeklickt wird, den markierten Link im Standardbrowser öffnet.

![iPhone zum Startbildschirm hinzufügen, Installationsaufforderung, Symbol und Löschfunktionalität.](iphone_pwa.jpg)

Wenn die zum Startbildschirm hinzugefügte Seite eine PWA ist, wird die PWA auf dem Gerät installiert.

Das Löschen des Symbols vom Startbildschirm entfernt das Lesezeichen. Die Löschbestätigung gibt an, ob das Löschen des Symbols ein Lesezeichen oder die gesamte Anwendung löscht.

## Installieren und Deinstallieren von PWAs

Während die Installation einer PWA nur ein paar Klicks erfordert, geht das Ergebnis der Installation einer PWA, abhängig von den Funktionen der Webanwendung, normalerweise weit über das Erstellen eines Links zu einer Seite im Internet hinaus; die Installation einer PWA integriert die Webanwendung tiefer in das Gerät des Benutzers.

Abhängig von der PWA, dem Gerät und den Funktionen des Betriebssystems und des Browsers kann die Installation einer PWA nativeähnliche Funktionen ermöglichen, wie der App ein eigenes eigenständiges Fenster zu geben oder sie als Dateihandler zu registrieren. Das bedeutet auch, dass das Deinstallieren einer PWA, was ebenfalls nur wenige Klicks erfordert, mehr bedeutet als nur das Entfernen des PWA-Symbols.

### PWAs installieren

Die Benutzeroberfläche zur Installation einer PWA aus dem Web variiert von einem Browser zum anderen und von einer Plattform zur anderen.

Die Benutzeroberfläche zur Installation von PWAs unterscheidet sich je nach Geräte- und Betriebssystemkombination. Die Benutzeroberfläche "Zum Startbildschirm hinzufügen" installiert die PWA auf Safari unter iOS. Andere Browser, einschließlich Chrome für Android, enthalten den App-Installationsbefehl im Einstellungsmenü des Browsers. In Chrome und Edge auf dem Desktop, wenn der Benutzer zur Seite navigiert und die Seite eine PWA ist und die PWA derzeit nicht vom Browser installiert ist, wird ein Installationssymbol in der URL-Leiste sichtbar:

![PWA-Installationsaufforderung in der URL-Leiste](pwa-install.png)

Wenn der Benutzer das Symbol auswählt, zeigt der Browser eine Eingabeaufforderung an und fragt, ob er die PWA installieren möchte. Akzeptiert er, wird die PWA installiert.

![Bestätigungsaufforderung zur PWA-Installation](installconfirm.jpg)

Sobald installiert, verhält sich die PWA wie andere Anwendungen, die auf dem Betriebssystem installiert sind. Beispielsweise wird auf macOS das Symbol im Dock angezeigt und hat die gleichen Symboloptionen wie andere Anwendungen:

![PWA-Symbol im Dock auf MacOS](dock.jpg)

In den meisten Desktop-Browsern befindet sich die Installationsaufforderung in der URL-Leiste. Auf Mobilgeräten wird die Installationsaufforderung in der Regel im Menü der Browseroptionen gefunden. Unabhängig vom Browser oder Betriebssystem muss die Installation bestätigt werden.

![PWA-Installation auf Chrome für Android, mit Bestätigung, Startbildschirm-Symbol und Offline-Erfahrung.](android_pwa.jpg)

Nach der Installation verhält sich die PWA wie andere installierte Anwendungen: Ein Klick auf das Anwendungssymbol öffnet die PWA, auch wenn der Benutzer offline ist.

Die Installation wird auf allen modernen Desktop- und Mobilgeräten unterstützt. Ob die PWA vom Browser auf dem Betriebssystem installiert werden kann, hängt von der Kombination aus Browser/Betriebssystem ab. Die meisten Browser unterstützen die Installation von PWAs auf allen Betriebssystemen – ChromeOS, MacOS, Windows, Android, Linux, etc. – direkt oder wenn eine Erweiterung installiert ist.

Firefox erfordert eine [PWA-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/pwas-for-firefox/).

Vor macOS 14 (Sonoma) konnten PWAs auf macOS von jedem Browser **außer** Safari installiert werden. Das Gegenteil war der Fall für iOS-Versionen vor 16.4, wo PWAs **nur** in Safari installiert werden konnten. PWAs können auf macOS 14.0 oder später und iOS/iPadOS 16.4 oder später von jedem unterstützenden Browser installiert werden.

Wenn eine installierte PWA gestartet wird, kann sie in einem eigenen eigenständigen Fenster angezeigt werden (ohne die vollständige Browser-Benutzeroberfläche), läuft aber dennoch effektiv in einem Browserfenster, auch wenn die üblichen Browser-Benutzeroberflächenelemente wie die Adressleiste oder die Zurück-Schaltfläche nicht sichtbar sind. Die Anwendung wird dort zu finden sein, wo das Betriebssystem andere Anwendungen speichert, in einem browser-spezifischen Ordner.

Von einem Browser installierte PWAs bleiben spezifisch für diesen Browser. Das bedeutet, dass der Browser, der zur Installation einer PWA verwendet wurde, auch jener ist, der die PWA ausführt. Es bedeutet auch, dass Sie die gleiche PWA von einem anderen Browser installieren können und dass die beiden Apps sich wie zwei verschiedene Instanzen verhalten und keine Daten teilen.

Der Browser, der zur Installation der PWA verwendet wurde, weiß, dass die PWA installiert ist, aber andere Browser haben keinen Zugriff auf den Installationsstatus. Beispielsweise, wenn Sie eine PWA mit MS Edge installieren, wird Edge Sie auffordern, die PWA zu öffnen, wenn Sie die Seite besuchen, während Chrome Sie weiterhin zur Installation der Anwendung auffordern wird. Wenn Sie die PWA auch mit Chrome installieren, haben Sie zwei Kopien der PWA. Wenn mehrere Instanzen einer PWA offen sind, werden Daten nicht zwischen Instanzen geteilt, die von verschiedenen Browsern installiert wurden.

Wenn Sie das Symbol der Web-App antippen, wird sie in der Browser-Umgebung geöffnet, die die PWA installiert hat, in der Regel ohne die UI des Browsers darum, obwohl das von der Konfiguration des Entwicklers im [Web-App-Manifest](/de/docs/Web/Manifest) abhängt. Ebenso hängt die Methode zur Deinstallation der PWA von dem Browser ab, mit dem sie installiert wurde.

### Deinstallieren

Auf den meisten mobilen Betriebssystemen erfolgt die Deinstallation einer PWA auf dieselbe Weise wie die Deinstallation anderer Anwendungen. Auf einigen mobilen Betriebssystemen erscheinen PWAs im selben Bedienfeld, in dem Anwendungen, die aus App-Stores heruntergeladen wurden, verwaltet werden können, und können dort deinstalliert werden.

Auf iOS sind von Safari installierte PWAs im "App Library"-Bildschirm aufgelistet und durchsuchbar, jedoch nicht zusammen mit anderen installierten Anwendungen unter "Einstellungen" aufgeführt. Auf iOS öffnet das langes Drücken eines Symbols die Benutzeroberfläche zum Löschen von Lesezeichen; das Entfernen des Symbols vom Startbildschirm löscht die PWA.

In einigen Desktop-Betriebssystemen kann die Deinstallation einer PWA direkt in der geöffneten PWA erfolgen. Um zu deinstallieren, öffnen Sie die PWA. In der rechten oberen Ecke der geöffneten App gibt es ein Symbol, das erweitert werden muss, um mehr Werkzeuge zu sehen. Abhängig vom verwendeten Browser gibt es entweder einen Link zum Deinstallieren der PWA oder einen Einstellungslink, der die Browser-Einstellungsseite mit einem Deinstallationslink öffnet. Entweder klicken Sie auf die Deinstallationsoption im Dropdown-Menü, falls vorhanden, oder navigieren Sie zu den Einstellungen der App in einem Browser-Tab und klicken Sie auf Deinstallieren.

![App-Einstellungen in MS Edge mit einem Deinstallationslink](remove.jpg)

Das Auswählen der App-Einstellungen aus dem geöffneten Dropdown-Menü in Edge öffnete den Tab `edge://apps` im MS Edge-Browser. Dort wird eine Liste der installierten Anwendungen mit Optionen für jede angezeigt, einschließlich `🗑️ Deinstallieren`. Bestätigen Sie die Deinstallation. Das war's!

In Edge sind die installierten PWAs aufgelistet und können verwaltet werden, indem Sie [`edge://apps`](https://blogs.windows.com/msedgedev/2022/05/18/find-and-manage-your-installed-apps-and-sites/) in Ihrem Edge-Browser aufrufen. In Chrome sind die Liste der Google Apps und installierten PWAs einsehbar und werden verwaltet, indem Sie `chrome://apps` in Ihrem Chrome-Browser aufrufen.

## Siehe auch

- [Die Verwendung von PWAs in Chrome: Computer und Android](https://support.google.com/chrome/answer/9658361)
- [Apps in Microsoft Edge installieren, verwalten oder deinstallieren](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113)
