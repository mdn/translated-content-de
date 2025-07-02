---
title: Aktualisierung von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die vorhandene Erweiterungen beeinflussen können.

## Änderungen der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde in Firefox 4 entfernt und durch eine neue Add-on-Leiste ersetzt. Siehe [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar) für weitere Details.

### Symbolleisten

#### Erstellen von Symbolleisten

Falls Ihr Add-on eine neue Symbolleiste mittels eines Overlays erstellt, kann es sein, dass Ihre Symbolleiste nicht angezeigt wird. Dies geschieht, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements ist, anstatt ein direktes Kind des Overlay-Elements. Verschieben Sie die Toolbox außerhalb des Window-Elements, um dieses Problem zu beheben.

### Das Firefox Applikationsmenü

Unter Windows ist die Menüleiste nun standardmäßig ausgeblendet. Stattdessen gibt es einen einzigen Button, der ein vereinfachtes Firefox-Applikationsmenü öffnet. Dieses Menü enthält die am häufigsten genutzten Menüfunktionen, was die Anwendung benutzerfreundlicher macht. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Falls Ihr Add-on nur über die Menüleiste aufrufbar ist, sollten Sie das Applikationsmenü ebenfalls überlagern. Es gibt keinen spezifischen Platz für Erweiterungsmenüelemente, deshalb sollten Sie sich das Menü anschauen und den richtigen Platz für Ihre spezielle Erweiterung auswählen.

### Tabs

Eine Reihe von Änderungen wurden am `<tabbrowser>`-Element vorgenommen, um App-Tabs und Panoramen zu unterstützen sowie um die Tableiste in eine Standard-Symbolleiste zu verwandeln. Weitere Änderungen, die bestehende Erweiterungen beeinträchtigen können, umfassen:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` steigen nicht mehr bis zum `<tabbrowser>`-Element (`gBrowser`) auf. Ereignislistener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<tabbrowser>`. Es kann daher direkt mit [XUL Overlays](/de/docs/XUL_Overlays) überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Weitere Details finden Sie in [diesem Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Mehrere Änderungen wurden vorgenommen, die Add-ons und Anwendungen betreffen, die XPCOM-Komponenten enthalten. Siehe [XPCOM-Änderungen in Gecko 2](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0) für Details.

## Der Add-on-Manager

Der überarbeitete Add-on-Manager wird als Tab anstatt in einem separaten Fenster implementiert. Eine der Änderungen, die Ihre Browsererfahrung beeinflusst, ist, dass das Icon Ihres Add-ons jetzt 64x64 Pixel groß sein kann, anstatt nur 32x32. Während 32x32 Pixel Icons weiterhin funktionieren, sieht Ihr Add-on mit einem 64x64 Pixel Icon natürlich besser aus. Glücklicherweise sind 64x64 Icons abwärtskompatibel und skalieren gut herunter, sodass Sie einfach wechseln können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Backend des Add-on-Managers neu gestaltet. Das `nsIExtensionManager`-Interface ist entfernt worden, ebenso wie der alte RDF-basierte Speicher. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](/de/docs/JavaScript_code_modules) namens [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager).

Ein wesentlicher Unterschied zur neuen API ist, dass das Anfordern von Add-on-Metadaten jetzt asynchron anstatt synchron erfolgt; dies gilt auch für Add-ons, die FUEL verwenden, sodass alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden müssen.

## Threading

Sie können keine JavaScript-Objekte mehr zwischen Threads übergeben. Dies macht den Thread-Manager für Add-on-Entwickler größtenteils nutzlos, leider gibt es derzeit nicht viele Alternativen. Es ist möglich, dass in Zukunft der [`ChromeWorker`](/de/docs/DOM/ChromeWorker) verbessert wird, um diese Lücke zu schließen.

## Netzwerkumleitungen

Die API zur Handhabung von Netzwerkumleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der Kategorie "net-channel-event-sinks" registrieren, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Entpacken

Firefox 4 [extrahiert keine XPIs mehr](https://bugzil.la/533038) beim Installieren von Erweiterungen. Es wird lediglich die XPI-Datei im Benutzerprofil abgelegt und dann die Chrome-Dateien und andere direkt aus der XPI-Datei gelesen. Ein Jar innerhalb der XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was Ihre Entwicklung oder den Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen gemacht und ermöglicht eine bessere Cache-Invalidierung, was auch Entwicklern hilft. Allerdings können nicht alle Arten von Dateien aus der XPI gelesen werden, sodass, falls Ihre Erweiterung eine dieser Dateien verwendet, Sie `<em:unpack>` in Ihrer install.rdf angeben müssen, um Firefox dazu zu bringen, Ihre XPI weiterhin zu extrahieren und einzelne Dateien zu verwenden, andernfalls wird Ihre Erweiterung fehlschlagen, wenn versucht wird, auf diese Dateien zuzugreifen.

Falls Ihre Erweiterung nur diese Arten von Dateien enthält, müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardvoreinstellungen
- XPCOM-Komponenten, die in JavaScript geschrieben sind

Falls Ihre Erweiterung eine der folgenden enthält, müssen Sie `<em:unpack>` in der install.rdf einschließen:

- Binäre XPCOM-Komponenten
- Mit ctypes geladene gemeinsame Bibliotheken
- `searchplugins/` (welche automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenster-Icons (könnte [behoben werden](https://bugzil.la/595462))

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie in der XPI verpackt haben, dann müssen Sie entweder `<em:unpack>` in der install.rdf einschließen oder Sie können möglicherweise die gepackte Installation unterstützen, indem Sie einige Änderungen an Ihrem Code vornehmen. Jeglicher Code, der getInstallLocation() und nsIFile verwendet hat, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode [`Addon.getResourceURI()`](/de/docs/Addons/Add-on_Manager/Addon#getResourceURI%28%29) verwenden, die eine `nsIURI` zurückgibt, die auf die angeforderte Datei zeigt. Wenn die Erweiterung entpackt ist, wird es eine `file://`-URI sein. Wenn die Erweiterung gepackt ist, wird es eine `jar://`-URI sein. Sie können Streams zu diesen URIs öffnen, indem Sie einen Channel mit dem `nsIIOService` öffnen, womit Sie den Dateiinhalt ohne Entpacken laden können.

## Child HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden Child-`HWND`s unter Windows für den internen Gebrauch erstellt. Im Zuge der Arbeiten zur Verbesserung der Grafikleistung werden diese nun nicht mehr erstellt.

Leider haben einige Erweiterungen auf diese `HWND`s zugegriffen und sie direkt manipuliert; diese Erweiterungen werden in Firefox 4 nicht mehr funktionieren. Wir haben einige Workarounds implementiert, um bestimmte Zeigegerätetreiber und unterstützende Technologiesoftware (z. B. Bildschirmleser) zu unterstützen. Allerdings haben wir uns dagegen entschieden, noch mehr Workarounds hinzuzufügen, um Erweiterungen zu unterstützen, die dies von Anfang an nicht hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, die auf `HWND`s angewiesen sind, die nicht mehr existieren, müssen Sie Ihre Erweiterung aktualisieren. Es gibt zwei Möglichkeiten, dies zu tun.

Die erste und bessere Lösung ist, auf den Zugriff auf `HWND`s zu verzichten und stattdessen Web-Features oder XUL zu verwenden, um Ihre Erweiterung zu implementieren. Es gibt viele neue Funktionen in Firefox 4, die viele der Dinge ermöglichen, die früher nativen Code erforderten, sodass Sie dies möglicherweise nicht mehr benötigen.

Wenn Sie feststellen, dass dies nicht funktioniert und Sie weiterhin direkt auf `HWND`s zugreifen müssen, kann es sein, dass Ihre einzige Lösung darin besteht, ein [NPAPI](/de/docs/NPAPI)-Plugin zu schreiben, das die Arbeiten ausführt. Dies könnte viel Arbeit sein, aber es sollte funktionieren. Natürlich hilft Ihnen das möglicherweise nicht, wenn die speziellen `HWND`s, die Sie verwendet haben, nicht mehr existieren.

## Entwicklungs- und Testtipps

### Caching

Da Firefox nun aggressiver Code und andere Ressourcen cached, sollten Sie sicherstellen, dass Sie die Caches leeren, wenn Sie Firefox 4 starten. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Um dies zu tun, starten Sie Firefox mit der `-purgecaches`-Befehlszeilenoption.

### Der Profil-Manager

Das alte Profil-Manager-Tool wird aus Firefox 4 entfernt werden, auch wenn es noch nicht geschehen ist. Dieses Tool wurde lange nicht aktualisiert und es fehlen ihm Funktionen. Außerdem verlangsamt seine Präsenz den Start der Anwendung.

Ein Ersatz für den Profil-Manager steht [zur Verfügung](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox-Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profil-Manager.

### Globale Installation von Erweiterungen

Die Befehlszeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Die globale Installation war schon immer kompliziert, und es werden derzeit Diskussionen geführt, wie das Thema künftig behandelt werden soll. In der Zwischenzeit, siehe [Erweiterungen installieren](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) für Informationen über Möglichkeiten zur automatischen Installation von Add-ons.

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogbeitrag)
