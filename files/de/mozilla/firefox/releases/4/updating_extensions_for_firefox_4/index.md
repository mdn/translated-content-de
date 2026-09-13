---
title: Erweiterungen für Firefox 4 aktualisieren
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Dieser Artikel enthält Details zu Änderungen in Firefox 4, die sich auf bestehende Erweiterungen auswirken können.

## Änderungen an der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde aus Firefox 4 entfernt und durch eine neue Add-on-Leiste ersetzt. Details finden Sie unter [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar).

### Symbolleisten

#### Symbolleisten erstellen

Wenn Ihr Add-on mithilfe eines Overlays eine neue Symbolleiste erstellt, wird Ihre Symbolleiste möglicherweise nicht angezeigt. Dies geschieht, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements statt ein direktes Kind des Overlay-Elements ist. Verschieben Sie die Toolbox aus dem Window-Element heraus, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste jetzt standardmäßig ausgeblendet. Stattdessen gibt es eine einzelne Schaltfläche, die ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü enthält die am häufigsten verwendeten Menüfunktionen, wodurch die Anwendung einfacher zu bedienen ist. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste auffindbar ist, sollten Sie auch das Anwendungsmenü überlagern. Es gibt keinen spezifischen Ort für Menüeinträge von Erweiterungen. Sie sollten sich daher das Menü ansehen und den geeigneten Ort für Ihre jeweilige Erweiterung auswählen.

### Tabs

Am `<tabbrowser>`-Element wurden mehrere Änderungen vorgenommen, um App-Tabs und Panoramas zu unterstützen sowie die Tab-Leiste in eine Standard-Symbolleiste umzuwandeln. Weitere Änderungen, die bestehende Erweiterungen beeinträchtigen können, umfassen:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` propagieren nicht mehr zum `<tabbrowser>`-Element (`gBrowser`) hinauf. Event-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` statt direkt zu `gBrowser` hinzugefügt werden.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind von `<tabbrowser>`. Es kann daher direkt mit [XUL-Overlays](https://web.archive.org/web/20160927025909/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Overlays) überlagert werden. Außerdem kann in JavaScript direkter über `gBrowser.tabContextMenu` darauf zugegriffen werden. Weitere Details finden Sie in [diesem Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).

## XPCOM-Änderungen

Es wurden mehrere Änderungen vorgenommen, die Add-ons und Anwendungen betreffen, welche XPCOM-Komponenten enthalten. Details finden Sie unter [XPCOM-Änderungen in Gecko 2](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0).

## Der Add-on-Manager

Der überarbeitete Add-on-Manager wird als Tab statt in einem separaten Fenster implementiert. Zu den Änderungen, die Ihren Browser aus Sicht der Benutzererfahrung betreffen, gehört, dass das Symbol Ihres Add-ons nun 64x64 Pixel statt 32x32 Pixel groß sein kann. Obwohl Symbole mit 32x32 Pixeln weiterhin funktionieren, wird Ihr Add-on offensichtlich besser aussehen, wenn es stattdessen ein Symbol mit 64x64 Pixeln bereitstellt. Glücklicherweise sind 64x64-Symbole abwärtskompatibel und lassen sich gut verkleinern, sodass Sie einfach wechseln können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Back-End des Add-on-Managers neu gestaltet. Die Schnittstelle `nsIExtensionManager` ist verschwunden, ebenso wie der alte RDF-basierte Speicher, den sie verwendete. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist nun ein [JavaScript-Code-Modul](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules) namens [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html).

Ein wesentlicher Unterschied der neuen API besteht darin, dass die Anforderung von Add-on-Metadaten nun asynchron statt synchron erfolgt. Dies gilt auch für Add-ons, die FUEL verwenden. Daher müssen alle Add-ons aktualisiert werden, die Metadaten über Add-ons anfordern.

## Threading

Sie können JavaScript-Objekte nicht mehr zwischen Threads übergeben. Dadurch wird der Thread Manager für Add-on-Entwickler leider größtenteils nutzlos, und derzeit gibt es nicht viele Alternativen. Möglicherweise wird [`ChromeWorker`](https://web.archive.org/web/20210512121129/https://developer.mozilla.org/de/docs/Mozilla/Gecko/Chrome/API/ChromeWorker) künftig verbessert, um diese Lücke zu schließen.

## Netzwerkumleitungen

Die API zur Behandlung von Netzwerkumleitungen wurde auf asynchron geändert. Alle Add-ons, die in der Kategorie „net-channel-event-sinks“ registriert sind, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Entpacken

Firefox 4 [extrahiert XPIs nicht mehr](https://bugzil.la/533038), wenn Erweiterungen installiert werden. Die XPI-Datei wird einfach im Benutzerprofil abgelegt; anschließend werden die Chrome-Dateien und andere Dateien direkt aus dem XPI gelesen. Ein JAR innerhalb des XPI funktioniert weiterhin, ist jedoch nicht mehr erforderlich, was Ihre Entwicklung oder Ihren Build vereinfachen kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen umgesetzt und ermöglicht eine bessere Cache-Invalidierung, was ebenfalls Entwicklern hilft. Allerdings können noch nicht alle Dateitypen innerhalb des XPI gelesen werden. Wenn Ihre Erweiterung einen dieser Typen verwendet, müssen Sie in Ihrer install.rdf [`<em:unpack>`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack) angeben, damit Firefox Ihr XPI weiterhin extrahiert und einzelne Dateien verwendet. Andernfalls schlägt Ihre Erweiterung beim Versuch fehl, auf diese Dateien zuzugreifen.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardvoreinstellungen
- in JavaScript geschriebene XPCOM-Komponenten

Wenn Ihre Erweiterung eines der Folgenden enthält, müssen Sie `<em:unpack>` in die install.rdf aufnehmen:

- Binäre XPCOM-Komponenten
- Mit ctypes geladene gemeinsam genutzte Bibliotheken
- `searchplugins/` (die automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenstersymbole (wird möglicherweise [behoben](https://bugzil.la/595462))

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie im XPI paketiert haben, müssen Sie entweder `<em:unpack>` in die install.rdf aufnehmen oder Sie können möglicherweise die gepackte Installation unterstützen, indem Sie einige Änderungen an Ihrem Code vornehmen. Jeder Code, der `getInstallLocation()` und nsIFile verwendet hat, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode `Addon.getResourceURI()` verwenden; sie gibt eine `nsIURI` zurück, die auf die angeforderte Datei verweist. Wenn die Erweiterung entpackt ist, handelt es sich um eine `file://`-URI. Wenn die Erweiterung gepackt ist, handelt es sich um eine `jar://`-URI. Sie können Streams zu diesen URIs öffnen, indem Sie einen Channel mit `nsIIOService` öffnen. Dadurch können Sie die Dateiinhalte ohne Entpacken laden.

## Child-HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Firefox-Versionen wurden unter Windows Child-`HWND`s für den internen Gebrauch erstellt. Im Zuge der Arbeiten zur Verbesserung der Grafikleistung werden diese nicht mehr erstellt.

Leider haben einige Erweiterungen auf diese `HWND`s zugegriffen und sie direkt manipuliert; diese Erweiterungen funktionieren in Firefox 4 nicht mehr. Wir haben einige Hacks implementiert, um bestimmte Zeigegerätetreiber und Software für unterstützende Technologien zu unterstützen, beispielsweise Screenreader. Wir haben uns jedoch dagegen entschieden, noch mehr Hacks hinzuzufügen, um Erweiterungen zu unterstützen, die dies von Anfang an niemals hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, welche auf nicht mehr vorhandenen `HWND`s basieren, müssen Sie Ihre Erweiterung aktualisieren. Dafür gibt es zwei Möglichkeiten.

Die erste und bessere Lösung besteht darin, nicht mehr auf `HWND`s zuzugreifen und stattdessen Web-Features oder XUL zur Implementierung Ihrer Erweiterung zu verwenden. Firefox 4 bietet viele neue Features, die vieles ermöglichen, wofür früher nativer Code erforderlich war. Möglicherweise müssen Sie dies also nicht mehr tun.

Wenn Sie feststellen, dass dies nicht funktioniert und Sie weiterhin direkt auf `HWND`s zugreifen müssen, besteht Ihre einzige Lösung möglicherweise darin, ein NPAPI-Plugin zu schreiben, das die Arbeit erledigt. Dies kann viel Arbeit sein, sollte aber funktionieren. Natürlich hilft dies möglicherweise nicht, wenn die spezifischen `HWND`s, die Sie verwendet haben, nicht mehr existieren.

## Tipps für Entwicklung und Tests

### Caching

Da Firefox Code und andere Ressourcen nun aggressiver zwischenspeichert, sollten Sie beim Starten von Firefox 4 unbedingt die Caches leeren. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Starten Sie Firefox dazu mit der Befehlszeilenoption `-purgecaches`.

### Der Profile Manager

Das alte Werkzeug Profile Manager wird aus Firefox 4 entfernt werden, obwohl dies noch nicht geschehen ist. Dieses Werkzeug wurde lange Zeit nicht aktualisiert und es fehlen Funktionen. Darüber hinaus verlangsamt seine Anwesenheit den Start der Anwendung.

Ein Ersatz für den Profile Manager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox-Bug 539524](https://bugzil.la/539524).) Dieses neue Werkzeug ist vom Browser selbst unabhängig und robuster als der alte Profile Manager.

### Erweiterungen global installieren

Die Befehlszeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Die Handhabung globaler Installationen war schon immer kompliziert, und es laufen Diskussionen darüber, wie dieses Thema künftig behandelt werden soll. Informationen zu Möglichkeiten, Add-ons automatisch zu installieren, finden Sie unter [Erweiterungen installieren](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).

## Siehe auch

- [Ihr Add-on mit Firefox 4 kompatibel machen](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blogbeitrag)
