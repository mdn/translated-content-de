---
title: Aktualisieren von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die bestehende Erweiterungen beeinflussen können.

## Änderungen der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde in Firefox 4 entfernt und durch eine neue Add-on-Leiste ersetzt. Weitere Informationen finden Sie unter [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar).

### Symbolleisten

#### Erstellen von Symbolleisten

Falls Ihr Add-on eine neue Symbolleiste mit einem Overlay erstellt, wird diese möglicherweise nicht angezeigt. Dies passiert, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements anstelle eines direkten Kindes des Overlay-Elements ist. Verschieben Sie die Toolbox aus dem Window-Element, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste jetzt standardmäßig ausgeblendet. Stattdessen gibt es eine einzelne Schaltfläche, die ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü enthält die am häufigsten verwendeten Menüfunktionen, was die Anwendung benutzerfreundlicher macht. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste auffindbar ist, sollten Sie auch das Anwendungsmenü überlagern. Es gibt keinen spezifischen Ort, um Erweiterungs-Menüpunkte zu platzieren, daher sollten Sie sich das Menü ansehen und den richtigen Ort für Ihre spezielle Erweiterung auswählen.

### Tabs

Eine Reihe von Änderungen wurden am `<tabbrowser>`-Element vorgenommen, um das App-Tabs und Panoramas zu unterstützen, sowie um die Tableiste in eine Standard-Symbolleiste zu verwandeln. Weitere Änderungen, die bestehende Erweiterungen beeinträchtigen können, umfassen:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` steigen nicht mehr zum `<tabbrowser>`-Element (`gBrowser`) auf. Ereignis-Listener für diese Ereignisse sollten zum `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zum `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<tabbrowser>` mehr. Es kann daher direkt mit [XUL-Overlays](/de/docs/XUL_Overlays) überlagert werden und ist auch im JavaScript direkter zugänglich über `gBrowser.tabContextMenu`. Weitere Details finden Sie in [diesem Blogpost](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Es wurden mehrere Änderungen vorgenommen, die Add-ons und Anwendungen betreffen, die XPCOM-Komponenten enthalten. Siehe [XPCOM-Änderungen in Gecko 2](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0) für weitere Details.

## Der Add-on-Manager

Der überarbeitete Add-on-Manager ist als Tab implementiert, statt in einem separaten Fenster. Zu den Änderungen, die Ihr Browser aus der Benutzerperspektive betreffen, gehört, dass das Icon Ihres Add-ons jetzt 64x64 Pixel anstelle von 32x32 Pixel betragen kann. Während 32x32-Pixel-Icons weiterhin funktionieren, sieht Ihr Add-on offensichtlich besser aus, wenn es ein 64x64-Pixel-Icon bietet. Glücklicherweise sind 64x64-Icons abwärtskompatibel und können gut herunter skaliert werden, sodass Sie einfach wechseln können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Backend des Add-on-Managers neu gestaltet. Die `nsIExtensionManager`-Schnittstelle ist verschwunden, ebenso wie der alte RDF-basierte Speicher, den er verwendete. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](/de/docs/JavaScript_code_modules) namens [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager).

Ein wesentlicher Unterschied bei der neuen API ist, dass das Anfordern von Add-on-Metadaten jetzt asynchron statt synchron erfolgt; dies gilt auch für Add-ons, die FUEL verwenden, daher müssen alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden.

## Threading

Sie können keine JavaScript-Objekte mehr zwischen Threads übergeben. Dies macht den Thread Manager für Add-on-Entwickler weitgehend unbrauchbar, und es gibt zurzeit nicht viele Alternativen. Es ist möglich, dass in der Zukunft der [`ChromeWorker`](/de/docs/DOM/ChromeWorker) verbessert wird, um diese Lücke zu füllen.

## Netzwerkumleitungen

Die API zum Umgang mit Netzwerkumleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der "net-channel-event-sinks"-Kategorie registrieren, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Entpacken

Firefox 4 [extrahiert keine XPI-Dateien mehr](https://bugzil.la/533038) bei der Installation von Erweiterungen. Es wird einfach die XPI-Datei im Benutzerprofil abgelegt und liest die Chromedateien und andere direkt aus dem XPI. Ein Jar innerhalb des XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was Ihre Entwicklung oder Ihr Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen gemacht und ermöglicht eine bessere Cache-Invalidierung, was auch Entwicklern hilft. Allerdings können noch nicht alle Arten von Dateien direkt aus dem XPI gelesen werden. Wenn Ihre Erweiterung eine dieser Dateien verwendet, müssen Sie [`<em:unpack>`](/en-US/Install_Manifests#unpack) in Ihrem install.rdf angeben, damit Firefox Ihr XPI weiterhin entpackt und einzelne Dateien verwendet, andernfalls schlägt Ihre Erweiterung fehl, wenn versucht wird, auf diese Dateien zuzugreifen.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardpräferenzen
- XPCOM-Komponenten in JavaScript geschrieben

Wenn Ihre Erweiterung eine der folgenden enthält, müssen Sie `<em:unpack>` in der install.rdf einfügen:

- Binäre XPCOM-Komponenten
- Shared Libraries, die mit ctypes geladen werden
- `searchplugins/` (die automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenstericons (könnten [behoben](https://bugzil.la/595462) werden)

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie im XPI gepackt haben, müssen Sie entweder `<em:unpack>` in der install.rdf einfügen oder Sie könnten die Unterstützung für die gepackte Installation durch einige Codeänderungen realisieren. Jeder Code, der getInstallLocation() und nsIFile verwendet, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode [`Addon.getResourceURI()`](/de/docs/Addons/Add-on_Manager/Addon#getResourceURI%28%29) verwenden, die ein `nsIURI` zurückgibt, das auf die angeforderte Datei zeigt. Wenn die Erweiterung entpackt ist, ist es eine `file://`-URI. Wenn die Erweiterung gepackt ist, ist es eine `jar://`-URI. Streams zu diesen URIs können geöffnet werden, indem ein Kanal unter Verwendung des `nsIIOService` geöffnet wird, der es Ihnen ermöglicht, den Dateiinhalte ohne Entpacken zu laden.

## Child-HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden unter Windows Child-HWNDs für den internen Gebrauch erstellt. Als Teil der Arbeit zur Verbesserung der Grafikleistung werden diese nun nicht mehr erstellt.

Leider haben ein paar Erweiterungen Zugriff auf diese HWNDs erhalten und sie direkt manipuliert; diese Erweiterungen werden in Firefox 4 nicht mehr funktionieren. Wir haben einige Hacks implementiert, um bestimmten Zeigegerätetreibern und unterstützenden Softwaretechnologien (z.B. Screenreadern) zu helfen. Wir haben uns jedoch dagegen entschieden, noch mehr Hacks hinzuzufügen, um Erweiterungen zu unterstützen, die dies von Anfang an nicht hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, die auf nicht mehr vorhandene HWNDs angewiesen sind, müssen Sie Ihre Erweiterung aktualisieren. Es gibt zwei Möglichkeiten, dies zu tun.

Die erste und bessere Lösung besteht darin, den Zugriff auf HWNDs zu stoppen und stattdessen Webfeatures oder XUL zu verwenden, um Ihre Erweiterung zu implementieren. Es gibt viele neue Funktionen in Firefox 4, die viele Dinge ermöglichen, für die früher nativer Code benötigt wurde, sodass Sie dies möglicherweise nicht mehr tun müssen.

Wenn dies nicht funktioniert und Sie weiterhin direkten Zugriff auf HWNDs benötigen, könnte es sein, dass Ihre einzige Lösung darin besteht, ein [NPAPI](/de/docs/NPAPI)-Plugin zu schreiben, das die Arbeit erledigt. Dies könnte viel Arbeit bedeuten, sollte aber funktionieren. Natürlich hilft Ihnen dies möglicherweise nicht, wenn die spezifischen HWNDs, die Sie verwendeten, nicht mehr existieren.

## Entwicklungs- und Testtipps

### Caching

Da Firefox jetzt Code und andere Ressourcen aggressiver zwischenspeichert, sollten Sie sicherstellen, dass Sie die Caches leeren, wenn Sie Firefox 4 starten. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Um dies zu tun, starten Sie Firefox mit der `-purgecaches`-Befehlszeilenoption.

### Der Profilmanager

Das alte Profilmanager-Tool wird aus Firefox 4 entfernt, obwohl es noch nicht geschehen ist. Dieses Tool wurde seit langer Zeit nicht mehr aktualisiert und es fehlen Funktionen. Zudem verlangsamt seine Präsenz den Start der Anwendung.

Ein Ersatz für den Profilmanager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox-Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profilmanager.

### Globale Installation von Erweiterungen

Die Befehlszeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Die Handhabung der globalen Installation war schon immer kompliziert, und es werden Diskussionen darüber geführt, wie das Thema in Zukunft angegangen werden kann. In der Zwischenzeit siehe [Installieren von Erweiterungen](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) für Informationen zu Möglichkeiten, Add-ons automatisch zu installieren.

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogpost)
