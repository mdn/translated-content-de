---
title: Aktualisierung von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die vorhandene Erweiterungen beeinflussen könnten.

## Änderungen in der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde in Firefox 4 entfernt und durch eine neue Add-on-Leiste ersetzt. Weitere Informationen finden Sie unter [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar).

### Symbolleisten

#### Erstellen von Symbolleisten

Wenn Ihr Add-on eine neue Symbolleiste mit einem Overlay erstellt, wird Ihre Symbolleiste möglicherweise nicht angezeigt. Dies geschieht, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements ist, anstatt ein direktes Kind des Overlay-Elements zu sein. Verschieben Sie das Werkzeugfeld aus dem Fensterelement, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste jetzt standardmäßig ausgeblendet. Stattdessen gibt es einen einzigen Button, der ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü enthält die am meisten genutzten Menüfunktionen, was die Anwendung leichter bedienbar macht. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste entdeckt werden kann, sollten Sie das Anwendungsmenü ebenfalls überlagern. Es gibt keinen spezifischen Platz für Menüeinträge von Erweiterungen, daher sollten Sie sich das Menü ansehen und den richtigen Ort für Ihre spezielle Erweiterung auswählen.

### Tabs

Es wurden mehrere Änderungen am `<tabbrowser>`-Element vorgenommen, um App-Tabs und Panoramas zu unterstützen sowie um die Tableiste in eine Standard-Werkzeugleiste zu verwandeln. Weitere Änderungen, die bestehende Erweiterungen beeinflussen könnten, beinhalten:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` steigen nicht mehr zum `<tabbrowser>`-Element (`gBrowser`) auf. Ereignislistener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt dem `gBrowser`.
- Das Kontextmenü der Tabs ist nicht mehr ein anonymes Kind des `<tabbrowser>`. Es kann daher direkt mit [XUL-Overlays](/de/docs/XUL_Overlays) überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Weitere Details finden Sie in [diesem Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Mehrere Änderungen betreffen Add-ons und Anwendungen, die XPCOM-Komponenten enthalten. Siehe [XPCOM-Änderungen in Gecko 2](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0) für Details.

## Der Add-on-Manager

Der überarbeitete Add-on-Manager ist als Tab implementiert, anstatt als separates Fenster. Zu den Änderungen, die sich aus der Benutzerperspektive ergeben, gehört, dass das Icon Ihres Add-ons jetzt 64x64 Pixel groß sein kann, anstatt 32x32. Während 32x32 Pixel-Icons immer noch funktionieren, wird Ihr Add-on natürlich besser aussehen, wenn es ein 64x64 Pixel-Icon bietet. 64x64-Icons sind abwärtskompatibel und skalieren gut herunter, sodass Sie einfach wechseln können, ohne beide Größen zu benötigen.

Der Back-End des Add-on-Managers wurde ebenfalls neu gestaltet. Die `nsIExtensionManager`-Schnittstelle ist verschwunden, genauso wie der alte RDF-basierte Speicher. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](/de/docs/JavaScript_code_modules) namens [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager).

Ein wesentlicher Unterschied zur neuen API besteht darin, dass das Anfragen von Add-on-Metadaten jetzt asynchron statt synchron erfolgt; dies gilt auch für Add-ons, die FUEL verwenden, sodass alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden müssen.

## Threading

Es ist nicht mehr möglich, JavaScript-Objekte zwischen Threads zu übergeben. Dies macht den Thread Manager für Add-on-Entwickler größtenteils nutzlos, und es gibt derzeit nicht viele Alternativen. Es ist möglich, dass zukünftig der [`ChromeWorker`](/de/docs/DOM/ChromeWorker) verbessert wird, um diese Lücke zu schließen.

## Netzwerweiterleitungen

Die API zur Handhabung von Netzwerkweiterleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der Kategorie "net-channel-event-sinks" registrieren, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Entpacken

Firefox 4 [extrahiert XPIs nicht mehr](https://bugzil.la/533038) beim Installieren von Erweiterungen. Er legt einfach die XPI-Datei im Benutzerprofil ab und liest die Chrome-Dateien und andere direkt aus der XPI. Ein Jar innerhalb der XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was Ihre Entwicklung oder den Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen getan und ermöglicht eine bessere Cache-Invalidierung, was auch Entwicklern zugutekommt. Allerdings können nicht alle Dateitypen aus der XPI gelesen werden, sodass Sie, wenn Ihre Erweiterung eine dieser Dateien verwendet, `<em:unpack>` in Ihrer install.rdf angeben müssen, damit Firefox Ihre XPI weiterhin extrahiert und einzelne Dateien verwendet, sonst schlägt Ihre Erweiterung fehl, wenn sie versucht, auf diese Dateien zuzugreifen.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardpräferenzen
- XPCOM-Komponenten, die in JavaScript geschrieben sind

Wenn Ihre Erweiterung eines der folgenden enthält, müssen Sie `<em:unpack>` in der install.rdf einschließen:

- Binäre XPCOM-Komponenten
- Mit ctypes geladene Shared Libraries
- `searchplugins/` (die automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenstericons (könnte [behoben](https://bugzil.la/595462) werden)

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie in der XPI gepackt haben, müssen Sie entweder `<em:unpack>` in der install.rdf angeben oder möglicherweise eine Unterstützung für die gepackte Installation durch einige Codeänderungen bieten. Jeder Code, der getInstallLocation() und nsIFile verwendet hat, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode [`Addon.getResourceURI()`](/de/docs/Addons/Add-on_Manager/Addon#getResourceURI%28%29) verwenden, die einen `nsIURI` zurückgibt, der auf die angeforderte Datei zeigt. Wenn die Erweiterung entpackt ist, wird es eine `file://`-URI sein. Wenn die Erweiterung gepackt ist, wird es eine `jar://`-URI sein. Sie können Streams zu diesen URIs öffnen, indem Sie einen Kanal mit dem `nsIIOService` öffnen, der es Ihnen ermöglicht, die Dateiinhalte ohne Entpacken zu laden.

## Child HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden unter Windows Child-`HWND`s für den internen Gebrauch erstellt. Im Rahmen der Arbeit an der Verbesserung der Grafikleistung werden diese nicht mehr erstellt.

Leider haben einige Erweiterungen auf diese `HWND`s zugegriffen und sie direkt manipuliert; diese Erweiterungen werden in Firefox 4 nicht mehr funktionieren. Wir haben ein paar Hacks implementiert, um bestimmten Zeigegerätetreibern und Assistenztechnologien (wie Bildschirmlesegeräten) zu helfen. Wir haben uns jedoch dagegen entschieden, noch mehr Hacks zu implementieren, um Erweiterungen zu unterstützen, die dies ohnehin nie hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die nativen Komponenten verwendet, die auf `HWND`s angewiesen sind, die nicht mehr existieren, müssen Sie Ihre Erweiterung aktualisieren. Dafür gibt es zwei Möglichkeiten.

Die erste und bessere Lösung ist, auf den Zugriff auf `HWND`s zu verzichten und stattdessen Webfunktionen oder XUL zu verwenden, um Ihre Erweiterung zu implementieren. Es gibt viele neue Funktionen in Firefox 4, die viele Dinge ermöglichen, die früher nativen Code erforderten, sodass Sie dies möglicherweise nicht mehr tun müssen.

Wenn dies nicht funktioniert und Sie immer noch direkten Zugriff auf `HWND`s benötigen, könnte die einzige Lösung darin bestehen, ein [NPAPI](/de/docs/NPAPI)-Plugin zu schreiben, das die Arbeit erledigt. Das könnte viel Arbeit sein, sollte aber funktionieren. Natürlich wird Ihnen das nicht helfen, wenn die spezifischen `HWND`s, die Sie benutzt haben, nicht mehr existieren.

## Entwicklungs- und Testtipps

### Caching

Da Firefox jetzt aggressiver Code und andere Ressourcen cached, sollten Sie sicherstellen, dass beim Start von Firefox 4 die Caches geleert werden. Andernfalls könnten Sie veraltete Teile Ihres Add-ons testen. Führen Sie dazu Firefox mit der Befehlszeilenoption `-purgecaches` aus.

### Der Profilmanager

Das alte Profilmanager-Tool wird aus Firefox 4 entfernt, obwohl es noch nicht geschehen ist. Dieses Tool wurde seit langem nicht mehr aktualisiert und es fehlen Funktionen. Zusätzlich verlangsamt seine Anwesenheit den Anwendungsstart.

Ein Ersatz für den Profilmanager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profilmanager.

### Globale Installation von Erweiterungen

Die Befehlszeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Der Umgang mit der globalen Installation war schon immer kompliziert, und es wird diskutiert, wie dieses Thema in Zukunft angegangen werden soll. In der Zwischenzeit finden Sie unter [Installing extensions](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) Informationen zu Möglichkeiten, um Add-ons automatisch zu installieren.

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogbeitrag)
