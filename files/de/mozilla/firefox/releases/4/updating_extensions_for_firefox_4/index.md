---
title: Aktualisieren von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die bestehende Erweiterungen beeinflussen können.

## Änderungen in der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde aus Firefox 4 entfernt, und eine neue Add-on-Leiste wurde stattdessen hinzugefügt. Weitere Informationen finden Sie unter [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar).

### Werkzeugleisten

#### Erstellen von Werkzeugleisten

Wenn Ihr Add-on eine neue Werkzeugleiste mit einem Overlay erstellt, wird möglicherweise Ihre Werkzeugleiste nicht angezeigt. Dies passiert, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements ist, anstatt ein direktes Kind des Overlay-Elements. Verschieben Sie das `toolbox`-Element aus dem `window`-Element, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste jetzt standardmäßig ausgeblendet. Stattdessen gibt es einen einzigen Knopf, der ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü beinhaltet die am häufigsten verwendeten Menüfunktionen, was die Anwendung benutzerfreundlicher macht. Die Menüleiste kann immer noch durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste auffindbar ist, sollten Sie auch das Anwendungsmenü überlagern. Es gibt keinen spezifischen Ort, um Erweiterungsmenüeinträge zu platzieren, daher sollten Sie das Menü ansehen und den richtigen Ort für Ihre spezifische Erweiterung auswählen.

### Tabs

Es wurden mehrere Änderungen am `<tabbrowser>`-Element vorgenommen, um App-Tabs und Panoramas zu unterstützen sowie um die Tableiste zu einer Standard-Werkzeugleiste zu machen. Weitere Änderungen, die bestehende Erweiterungen beeinträchtigen könnten, sind:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` werden nicht mehr zum `<tabbrowser>`-Element (`gBrowser`) weitergegeben. Ereignislistener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<tabbrowser>` mehr. Es kann daher direkt mit [XUL-Overlays](/de/docs/XUL_Overlays) überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Weitere Details finden Sie in [diesem Blogeintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Es wurden mehrere Änderungen vorgenommen, die Add-ons und Anwendungen betreffen, die XPCOM-Komponenten enthalten. Weitere Informationen finden Sie unter [XPCOM-Änderungen in Gecko 2](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0).

## Der Add-on-Manager

Der überarbeitete Add-on-Manager wird jetzt als Tab anstelle eines separaten Fensters implementiert. Zu den Änderungen, die die Benutzererfahrung in Ihrem Browser betreffen, gehört, dass das Icon Ihres Add-ons jetzt 64x64 Pixel groß sein kann, anstatt 32x32. Während 32x32 Pixel große Icons immer noch funktionieren, sieht Ihr Add-on offensichtlich besser aus, wenn es ein 64x64 Pixel großes Icon anbietet. Glücklicherweise sind 64x64 Icons abwärtskompatibel und skalieren gut nach unten, sodass Sie einfach umschalten können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Backend des Add-on-Managers neu gestaltet. Die `nsIExtensionManager`-Schnittstelle ist verschwunden, ebenso wie der alte RDF-basierte Speicher, den sie verwendet hat. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](/de/docs/JavaScript_code_modules) namens [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager).

Ein wesentlicher Unterschied zur neuen API besteht darin, dass die Anfrage nach Add-on-Metadaten asynchron statt synchron erfolgt; dies gilt auch für Add-ons, die FUEL verwenden, sodass alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden müssen.

## Threading

Es ist nicht mehr möglich, JavaScript-Objekte zwischen Threads zu übergeben. Dies macht den Thread-Manager leider für Add-on-Entwickler weitgehend nutzlos, und es gibt derzeit nicht viele Alternativen. Es ist möglich, dass in Zukunft der [`ChromeWorker`](/de/docs/DOM/ChromeWorker) verbessert wird, um diese Lücke zu füllen.

## Netzwerkumleitungen

Die API für den Umgang mit Netzwerkumleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der Kategorie "net-channel-event-sinks" registrieren, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Entpacken

Firefox 4 [extrahiert keine XPIs mehr](https://bugzil.la/533038) beim Installieren von Erweiterungen. Es wird nur die XPI-Datei im Benutzerprofil abgelegt und liest dann die Chrome-Dateien und andere direkt aus der XPI. Ein Jar innerhalb der XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was die Entwicklung oder den Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen durchgeführt und ermöglicht eine bessere Cache-Invalidierung, was auch den Entwicklern zugutekommt. Allerdings können nicht alle Arten von Dateien noch von innerhalb der XPI gelesen werden. Wenn Ihre Erweiterung eine dieser Dateien verwendet, müssen Sie [`<em:unpack>`](/en-US/Install_Manifests#unpack) in Ihrer install.rdf angeben, um Firefox zu veranlassen, Ihre XPI weiterhin zu extrahieren und Einzeldateien zu verwenden. Andernfalls schlägt der Zugriff Ihrer Erweiterung auf diese Dateien fehl.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, müssen Sie keinerlei Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardpräferenzen
- XPCOM-Komponenten, die in JavaScript geschrieben sind

Wenn Ihre Erweiterung eine der folgenden enthält, müssen Sie `<em:unpack>` in die install.rdf aufnehmen:

- Binäre XPCOM-Komponenten
- Shared Libraries, die mit ctypes geladen wurden
- `searchplugins/` (die automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenster-Icons (könnte [behoben](https://bugzil.la/595462) werden)

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie im XPI gepackt haben, müssen Sie entweder `<em:unpack>` in die install.rdf aufnehmen oder Sie könnten eine Unterstützung für die gepackte Installation durch Änderungen an Ihrem Code erreichen. Jeder Code, der getInstallLocation() und nsIFile verwendet, benötigt entweder `em:unpack` oder muss geändert werden. Sie können die Methode [`Addon.getResourceURI()`](/de/docs/Addons/Add-on_Manager/Addon#getResourceURI%28%29) verwenden, sie gibt ein `nsIURI` zurück, das auf die angeforderte Datei zeigt. Wenn die Erweiterung entpackt ist, wird es eine `file://` URI sein. Wenn die Erweiterung gepackt ist, wird es eine `jar://` URI sein. Sie können Streams zu diesen URIs öffnen, indem Sie einen Kanal mit dem `nsIIOService` öffnen, der Ihnen ermöglicht, den Inhalt der Dateien ohne jegliches Entpacken zu laden.

## Child HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden Child-`HWND`s unter Windows für den internen Gebrauch erstellt. Als Teil der Arbeiten zur Verbesserung der Grafikleistung werden diese nicht mehr erstellt.

Leider haben einige Erweiterungen auf diese `HWND`s zugegriffen und sie direkt manipuliert; Diese Erweiterungen funktionieren in Firefox 4 nicht mehr. Wir haben einige Hacks implementiert, um bestimmten Zeigereingabegerät-Treibern und unterstützender Technologie-Software (z. B. Bildschirmleser) zu helfen. Wir haben uns jedoch gegen das Hinzufügen weiterer Hacks entschieden, um Erweiterungen zu unterstützen, die dies ohnehin nicht hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, die auf `HWND`s angewiesen sind, die nicht mehr existieren, müssen Sie Ihre Erweiterung aktualisieren. Es gibt zwei Möglichkeiten, dies zu tun.

Die erste und bessere Lösung besteht darin, auf den Zugriff auf `HWND`s zu verzichten und stattdessen Web-Funktionen oder XUL zur Implementierung Ihrer Erweiterung zu verwenden. Es gibt viele neue Funktionen in Firefox 4, die viele Dinge ermöglichen, die früher nativen Code erforderten, sodass Sie dies möglicherweise nicht mehr tun müssen.

Wenn Sie feststellen, dass dies nicht funktioniert und Sie immer noch direkt auf `HWND`s zugreifen müssen, stellt möglicherweise Ihre einzige Lösung das Schreiben eines [NPAPI](/de/docs/NPAPI)-Plugins dar, das die Arbeit erledigt. Dies könnte viel Arbeit bedeuten, sollte aber funktionieren. Natürlich hilft dies möglicherweise nicht, wenn die spezifischen `HWND`s, die Sie verwendet haben, nicht mehr existieren.

## Entwicklungs- und Testtipps

### Caching

Da Firefox jetzt den Code und andere Ressourcen aggressiver zwischenspeichert, sollten Sie sicherstellen, dass Sie die Caches beim Starten von Firefox 4 leeren. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Um dies zu tun, starten Sie Firefox mit der `-purgecaches` Kommandozeilenoption.

### Der Profil-Manager

Das alte Profil-Manager-Tool wird in Firefox 4 entfernt, obwohl es noch nicht geschehen ist. Dieses Tool wurde lange nicht aktualisiert und es fehlen Funktionen. Außerdem verlangsamt seine Präsenz den Start der Anwendung.

Ein Ersatz für den Profil-Manager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profil-Manager.

### Globale Installation von Erweiterungen

Die Kommandozeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Die Handhabung der globalen Installation war immer kompliziert, und es werden derzeit Diskussionen darüber geführt, wie dieses Thema in Zukunft angegangen werden soll. In der Zwischenzeit finden Sie Informationen zu automatischen Installationsmöglichkeiten von Add-ons unter [Erweiterungen installieren](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogeintrag)
