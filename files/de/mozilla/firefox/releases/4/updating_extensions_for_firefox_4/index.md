---
title: Aktualisieren von Erweiterungen für Firefox 4
slug: Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Dieser Artikel bietet Details zu Änderungen in Firefox 4, die bestehende Erweiterungen beeinflussen können.

## Änderungen an der Benutzeroberfläche

### Die Statusleiste

Die Statusleiste wurde in Firefox 4 entfernt, und stattdessen wurde eine neue Add-on-Leiste hinzugefügt. Siehe [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar) für Details.

### Symbolleisten

#### Erstellen von Symbolleisten

Wenn Ihr Add-on eine neue Symbolleiste mit einem Overlay erstellt, wird Ihre Symbolleiste möglicherweise nicht angezeigt. Dies geschieht, wenn Ihr `<toolbox>`-Element-Overlay ein Kind des `<window>`-Elements ist, anstatt ein direktes Kind des Overlay-Elements zu sein. Verschieben Sie den Werkzeugkasten aus dem Window-Element, um dieses Problem zu beheben.

### Das Firefox-Anwendungsmenü

Unter Windows ist die Menüleiste jetzt standardmäßig ausgeblendet. Stattdessen gibt es eine einzige Schaltfläche, die ein vereinfachtes Firefox-Anwendungsmenü öffnet. Dieses Menü enthält die am häufigsten verwendeten Menüfunktionen, was die Anwendung benutzerfreundlicher macht. Die Menüleiste kann weiterhin durch Drücken der Alt-Taste aufgerufen werden.

Wenn Ihr Add-on nur über die Menüleiste zugänglich ist, sollten Sie auch das Anwendungsmenü überlagern. Es gibt keinen spezifischen Ort, um Erweiterungsmenüpunkte zu platzieren, daher sollten Sie sich das Menü ansehen und den richtigen Platz für Ihre spezielle Erweiterung auswählen.

### Tabs

Es wurden eine Reihe von Änderungen am `<tabbrowser>`-Element vorgenommen, um App-Tabs und Panoramen zu unterstützen sowie um die Tableiste in eine standardmäßige Symbolleiste zu verwandeln. Weitere Änderungen, die bestehende Erweiterungen unterbrechen können, beinhalten:

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` werden nicht mehr an das `<tabbrowser>`-Element (`gBrowser`) weitergegeben. Ereignis-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<tabbrowser>`. Es kann daher direkt mit [XUL-Overlays](/de/docs/XUL_Overlays) überlagert werden. Es kann auch direkter im JavaScript über `gBrowser.tabContextMenu` aufgerufen werden. Siehe [diesen Blog-Eintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.

## XPCOM-Änderungen

Es wurden mehrere Änderungen vorgenommen, die Add-ons und Anwendungen betreffen, die XPCOM-Komponenten enthalten. Siehe [XPCOM-Änderungen in Gecko 2](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0) für Details.

## Der Add-on-Manager

Der überarbeitete Add-on-Manager ist als Tab anstatt in einem separaten Fenster implementiert. Zu den Änderungen, die Ihre Browser-Erfahrung aus Benutzersicht betreffen, gehört, dass das Icon Ihres Add-ons jetzt 64x64 Pixel groß sein kann anstatt 32x32. Zwar funktionieren 32x32 Pixel Icons immer noch, aber Ihr Add-on sieht besser aus, wenn es ein 64x64 Pixel Icon bereitstellt. Zum Glück sind 64x64 Icons abwärtskompatibel und skalieren gut nach unten, sodass Sie einfach wechseln können, anstatt beide Größen zu benötigen.

Darüber hinaus wurde das Backend des Add-on-Managers neu gestaltet. Das `nsIExtensionManager`-Interface ist verschwunden, ebenso wie der alte RDF-basierte Speicher, den es verwendete. Add-on-Metadaten werden jetzt in einer SQLite-Datenbank gespeichert, und der Add-on-Manager ist jetzt ein [JavaScript-Code-Modul](/de/docs/JavaScript_code_modules) namens [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html).

Ein wesentlicher Unterschied zur neuen API ist, dass das Anfordern von Add-on-Metadaten jetzt asynchron anstatt synchron erfolgt; dies gilt auch für Add-ons, die FUEL verwenden, sodass alle Add-ons, die Metadaten über Add-ons anfordern, aktualisiert werden müssen.

## Threading

Es ist nicht mehr möglich, JavaScript-Objekte zwischen Threads zu übergeben. Dies macht den Thread Manager leider größtenteils nutzlos für Add-on-Entwickler, und es gibt derzeit nicht viele Alternativen. Es ist möglich, dass in Zukunft der [`ChromeWorker`](/de/docs/DOM/ChromeWorker) verbessert wird, um die Lücke zu füllen.

## Netzwerk-Weiterleitungen

Die API zur Behandlung von Netzwerk-Weiterleitungen wurde geändert, um asynchron zu sein; alle Add-ons, die sich in der "net-channel-event-sinks"-Kategorie registrieren, müssen aktualisiert werden, um die neue API `asyncOnChannelRedirect` zu verwenden.

## XPI-Auspacken

Firefox 4 [extrahiert keine XPIs mehr](https://bugzil.la/533038) bei der Installation von Erweiterungen. Die XPI-Datei wird einfach im Benutzerprofil platziert, und dann werden die Chrome-Dateien und andere direkt aus der XPI gelesen. Ein Jar innerhalb der XPI funktioniert weiterhin, ist aber nicht mehr notwendig, was Ihre Entwicklung oder den Build erleichtern kann. Dies wurde hauptsächlich aus Leistungsgründen auf langsamen Betriebssystemen durchgeführt und ermöglicht eine bessere Cache-Invalidierung, was auch Entwicklern zugutekommt. Allerdings können noch nicht alle Arten von Dateien von innerhalb der XPI gelesen werden, sodass wenn Ihre Erweiterung eine dieser Dateien verwendet, Sie [`<em:unpack>`](/en-US/Install_Manifests#unpack) in Ihrem install.rdf angeben müssen, damit Firefox Ihre XPI weiterhin extrahiert und einzelne Dateien verwendet, andernfalls schlägt Ihre Erweiterung beim Zugriff auf diese Dateien fehl.

Wenn Ihre Erweiterung nur diese Dateitypen enthält, müssen Sie keine Änderungen vornehmen:

- `install.rdf`
- `chrome.manifest`
- `chrome` (einschließlich `content`, `locale`, `skin`)
- Standardpräferenzen
- XPCOM-Komponenten, die in JavaScript geschrieben sind

Wenn Ihre Erweiterung eine der folgenden enthält, müssen Sie `<em:unpack>` in das install.rdf aufnehmen:

- Binäre XPCOM-Komponenten
- Mit ctypes geladene gemeinsam genutzte Bibliotheken
- `searchplugins/` (die automatisch von Firefox geladen werden sollen)
- `dictionaries/`
- Fenster-Icons (könnte [behoben](https://bugzil.la/595462) werden)

Wenn Ihr Erweiterungscode auf andere Dateien zugreift, die Sie mit der XPI gepackt haben, müssen Sie entweder `<em:unpack>` in das install.rdf aufnehmen oder Sie können die Unterstützung für gepackte Installation durch einige Änderungen an Ihrem Code ermöglichen. Jeder Code, der getInstallLocation() und nsIFile verwendet hat, benötigt entweder em:unpack oder muss geändert werden. Sie können die Methode `Addon.getResourceURI()` verwenden, die ein `nsIURI` zurückgibt, das auf die angeforderte Datei zeigt. Wenn die Erweiterung ausgepackt ist, wird es ein `file://` URI sein. Wenn die Erweiterung gepackt ist, wird es ein `jar://` URI sein. Sie können Streams zu diesen URIs öffnen, indem Sie einen Kanal mit dem `nsIIOService` öffnen, was es Ihnen ermöglicht, die Dateiinhalte ohne Auspacken zu laden.

## Kind-HWNDs wurden entfernt

Dies sollte nur eine sehr kleine Anzahl von Entwicklern betreffen. In früheren Versionen von Firefox wurden Kinder-`HWND`s unter Windows für den internen Gebrauch erstellt. Als Teil der Arbeit zur Verbesserung der Grafikleistung werden diese nicht mehr erstellt.

Leider haben einige Erweiterungen auf diese `HWND`s zugegriffen und sie direkt manipuliert; diese Erweiterungen werden in Firefox 4 nicht mehr funktionieren. Wir haben einige Hacks implementiert, um bestimmte Zeigegerätetreiber und unterstützende Technologiesoftware (zum Beispiel Screenreader) zu unterstützen. Wir haben jedoch beschlossen, keine weiteren Hacks zur Unterstützung von Erweiterungen hinzuzufügen, die dies grundsätzlich nicht hätten tun sollen.

Wenn Sie eine Erweiterung pflegen, die native Komponenten verwendet, die auf `HWND`s angewiesen sind, die nicht mehr existieren, müssen Sie Ihre Erweiterung aktualisieren. Es gibt zwei Möglichkeiten, dies zu tun.

Die erste und bessere Lösung besteht darin, `HWND`s nicht mehr zu verwenden und stattdessen Web-Features oder XUL zu verwenden, um Ihre Erweiterung zu implementieren. Es gibt viele neue Funktionen in Firefox 4, die viele Dinge ermöglichen, die früher nativen Code erforderten, sodass Sie dies möglicherweise nicht mehr tun müssen.

Wenn dies nicht funktioniert und Sie weiterhin direkt auf `HWND`s zugreifen müssen, finden Sie möglicherweise heraus, dass Ihre einzige Lösung darin besteht, ein [NPAPI](/de/docs/NPAPI)-Plugin zu schreiben, das die Arbeit erledigt. Dies könnte eine Menge Arbeit sein, aber es sollte funktionieren. Natürlich könnte dies Ihnen nicht helfen, wenn die spezifischen `HWND`s, die Sie verwendet haben, nicht mehr existieren.

## Entwicklungs- und Testtipps

### Caching

Da Firefox nun aggressiver Code und andere Ressourcen im Cache speichert, sollten Sie darauf achten, die Caches zu leeren, wenn Sie Firefox 4 starten. Andernfalls testen Sie möglicherweise veraltete Teile Ihres Add-ons. Um dies zu tun, starten Sie Firefox mit der Kommandozeilenoption `-purgecaches`.

### Der Profil-Manager

Das alte Profil-Manager-Tool wird aus Firefox 4 entfernt, obwohl es noch nicht geschehen ist. Dieses Tool wurde lange nicht aktualisiert und es fehlen Funktionen. Darüber hinaus verlangsamt seine Anwesenheit den Anwendungsstart.

Ein Ersatz für den Profil-Manager ist [verfügbar](https://ftp.mozilla.org/pub/utilities/profilemanager/). (Siehe auch [Firefox Bug 539524](https://bugzil.la/539524)). Dieses neue Tool ist unabhängig vom Browser selbst und robuster als der alte Profil-Manager.

### Globale Installation von Erweiterungen

Die Kommandozeilenoptionen `-install-global-extension` und `-install-global-theme` wurden entfernt. Der Umgang mit globaler Installation war schon immer kompliziert und es werden Diskussionen darüber geführt, wie dieses Thema in Zukunft adressiert werden kann. In der Zwischenzeit finden Sie unter [Installieren von Erweiterungen](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/) Informationen über Möglichkeiten, um Add-ons automatisch zu installieren.

## Siehe auch

- [Making Your Add-on Compatible with Firefox 4](https://blog.mozilla.org/addons/2010/11/11/making-add-on-compatible-firefox-4/) (Blog-Beitrag)
