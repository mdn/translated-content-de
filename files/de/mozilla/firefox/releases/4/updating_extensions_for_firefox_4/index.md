---
title: Aktualisieren von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die bestehende Erweiterungen beeinflussen können.

## Änderungen an der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde aus Firefox 4 entfernt und durch eine neue Add-on-Leiste ersetzt. Weitere Informationen finden Sie unter [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar).

### Symbolleisten

#### Erstellen von Symbolleisten

Wenn Ihr Add-on eine neue Symbolleiste mithilfe eines Overlays erstellt, wird Ihre Symbolleiste möglicherweise nicht angezeigt. Dies passiert, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements ist, anstatt ein direktes Kind des Overlay-Elements zu sein. Bewegen Sie das Toolbox-Element aus dem Window-Element heraus, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste nun standardmäßig ausgeblendet. Stattdessen gibt es einen einzigen Button, der ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü enthält die am häufigsten verwendeten Menüfunktionen, was die Anwendung benutzerfreundlicher macht. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste auffindbar ist, sollten Sie auch das Anwendungsmenü überlagern. Es gibt keinen speziellen Platz für Erweiterungsmenüeinträge, daher sollten Sie sich das Menü ansehen und den richtigen Platz für Ihre spezielle Erweiterung auswählen.

### Tabs

Es wurden mehrere Änderungen am `<tabbrowser>`-Element vorgenommen, um App-Tabs und Panoramen zu unterstützen sowie die Tab-Leiste in eine Standard-Symbolleiste zu verwandeln. Andere Änderungen, die bestehende Erweiterungen beeinträchtigen könnten, umfassen:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<tabbrowser>`-Element (`gBrowser`) hoch. Event-Listener für diese Ereignisse sollten zum `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<tabbrowser>` mehr. Es kann daher direkt mit [XUL-Overlays](https://web.archive.org/web/20160927025909/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Overlays) überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugänglich gemacht werden. Weitere Details finden Sie in [diesem Blogeintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Es wurden mehrere Änderungen vorgenommen, die Add-ons und Anwendungen betreffen, die XPCOM-Komponenten enthalten. Weitere Einzelheiten finden Sie unter [XPCOM-Änderungen in Gecko 2](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0).

## Der Add-on-Manager

Der überarbeitete Add-on-Manager wird als Tab statt in einem separaten Fenster implementiert. Zu den Änderungen, die aus Sicht des Benutzererlebnisses Auswirkungen auf Ihren Browser haben, gehört, dass das Icon Ihres Add-ons jetzt 64x64 Pixel groß sein kann anstelle von 32x32. Obwohl 32x32-Pixel-Icons weiterhin funktionieren, sieht Ihr Add-on offensichtlich besser aus, wenn es ein 64x64-Pixel-Icon bereitstellt. Glücklicherweise sind 64x64-Icons abwärtskompatibel und lassen sich gut verkleinern, sodass Sie einfach wechseln können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Back-End des Add-on-Managers neu gestaltet. Das `nsIExtensionManager`-Interface ist verschwunden, ebenso wie der alte RDF-basierte Speicher, den es verwendete. Die Metadaten von Add-ons werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules) namens [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html).

Ein wesentlicher Unterschied mit der neuen API ist, dass das Anfordern von Add-on-Metadaten jetzt asynchron statt synchron ist; dies gilt auch für Add-ons, die FUEL verwenden, daher müssen alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden.

## Threading

Es ist nicht mehr möglich, JavaScript-Objekte zwischen Threads zu übergeben. Dadurch wird der Thread-Manager für Add-on-Entwickler größtenteils unbrauchbar, und es gibt derzeit nicht viele Alternativen. Es ist möglich, dass in Zukunft der [`ChromeWorker`](https://web.archive.org/web/20210512121129/https://developer.mozilla.org/de/docs/Mozilla/Gecko/Chrome/API/ChromeWorker) verbessert wird, um diese Lücke zu füllen.

## Netzwerkumleitungen

Die API zur Handhabung von Netzwerkumleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der Kategorie "net-channel-event-sinks" registrieren, müssen so aktualisiert werden, dass sie die neue API `asyncOnChannelRedirect` verwenden.

## XPI-Entpackung

Firefox 4 [extrahiert keine XPIs mehr](https://bugzil.la/533038) beim Installieren von Erweiterungen. Es speichert die XPI-Datei im Benutzerprofil und liest dann die Chrome-Dateien und andere direkt aus der XPI. Ein Jar innerhalb der XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was die Entwicklung oder den Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen durchgeführt und ermöglicht eine bessere Cache-Invalidierung, was auch Entwicklern hilft. Allerdings können noch nicht alle Arten von Dateien aus der XPI herausgelesen werden. Wenn Ihre Erweiterung eine solche Datei verwendet, müssen Sie [`<em:unpack>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack) in Ihrer install.rdf angeben, damit Firefox Ihre XPI weiterhin extrahiert und Einzeldateien verwendet, andernfalls schlägt Ihre Erweiterung fehl, wenn sie versucht, auf diese Dateien zuzugreifen.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, dann müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardpräferenzen
- XPCOM-Komponenten, die in JavaScript geschrieben sind

Wenn Ihre Erweiterung eine der folgenden enthält, müssen Sie `<em:unpack>` in die install.rdf aufnehmen:

- Binäre XPCOM-Komponenten
- Geteilte Bibliotheken, die mit ctypes geladen werden
- `searchplugins/` (sollen automatisch von Firefox geladen werden)
- `dictionaries/`
- Fenster-Icons (könnte [behoben werden](https://bugzil.la/595462))

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie in der XPI verpackt haben, dann müssen Sie entweder `<em:unpack>` in die install.rdf aufnehmen oder könnten eine Unterstützung für verpackte Installationen ermöglichen, indem Sie einige Änderungen an Ihrem Code vornehmen. Jeglicher Code, der getInstallLocation() und nsIFile verwendet, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode `Addon.getResourceURI()` verwenden, die ein `nsIURI` zurückgibt, das auf die angeforderte Datei zeigt. Wenn die Erweiterung entpackt ist, wird es eine `file://` URL sein. Wenn die Erweiterung verpackt ist, wird es eine `jar://` URL sein. Sie können Streams zu diesen URIs öffnen, indem Sie einen Kanal mit dem `nsIIOService` öffnen, was Ihnen ermöglicht, die Dateiinhalte ohne Entpacken zu laden.

## Child HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden Child-`HWND`s unter Windows zur internen Verwendung erstellt. Im Rahmen der Arbeiten zur Verbesserung der Grafikleistung werden diese nicht mehr erstellt.

Leider haben einige wenige Erweiterungen Zugriff auf diese `HWND`s genommen und sie direkt manipuliert; diese Erweiterungen funktionieren in Firefox 4 nicht mehr. Wir haben einige Hacks eingebaut, um bestimmte Zeigegerätetreiber und unterstützende Technologie-Software (z. B. Screenreader) zu unterstützen. Wir haben jedoch beschlossen, keine weiteren Hacks hinzuzufügen, um Erweiterungen zu unterstützen, die dies nie hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, die auf nicht mehr vorhandene `HWND`s angewiesen sind, müssen Sie Ihre Erweiterung aktualisieren. Es gibt zwei Möglichkeiten, dies zu tun.

Die erste und bessere Lösung besteht darin, den Zugriff auf `HWND`s zu stoppen und stattdessen Web-Features oder XUL zur Implementierung Ihrer Erweiterung zu verwenden. Es gibt viele neue Funktionen in Firefox 4, die viele Dinge ermöglichen, die früher nativen Code erforderten, sodass Sie dies möglicherweise nicht mehr tun müssen.

Wenn Sie feststellen, dass dies nicht funktioniert und Sie dennoch direkt auf `HWND`s zugreifen müssen, ist möglicherweise Ihre einzige Lösung, ein NPAPI-Plugin zu schreiben, das die Arbeit erledigt. Dies kann viel Arbeit erfordern, aber es sollte funktionieren. Natürlich hilft Ihnen das möglicherweise nicht, wenn die spezifischen `HWND`s, die Sie verwendeten, nicht mehr vorhanden sind.

## Entwicklungs- und Testtipps

### Caching

Da Firefox jetzt aggressiver Code und andere Ressourcen cached, sollten Sie sicherstellen, dass die Caches beim Start von Firefox 4 geleert werden. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Um dies zu tun, starten Sie Firefox mit der Kommandozeilenoption `-purgecaches`.

### Der Profil-Manager

Das alte Profil-Manager-Tool wird aus Firefox 4 entfernt, obwohl es noch nicht der Fall ist. Dieses Tool wurde seit langem nicht aktualisiert und es fehlen Funktionen. Außerdem verzögert seine Anwesenheit den Anwendungsstart.

Ein Ersatz für den Profil-Manager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox-Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profil-Manager.

### Globale Installation von Erweiterungen

Die Kommandozeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Die Behandlung der globalen Installation war schon immer kompliziert, und es werden derzeit Diskussionen darüber geführt, wie das Thema weiter angegangen werden soll. In der Zwischenzeit finden Sie unter [Erweiterungen installieren](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) Informationen zu Möglichkeiten, Add-ons automatisch zu installieren.

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogeintrag)
