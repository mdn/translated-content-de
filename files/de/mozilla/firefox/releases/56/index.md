---
title: Firefox 56 für Entwickler
slug: Mozilla/Firefox/Releases/56
l10n:
  sourceCommit: 83266dac8d670b493141002c825f7fb8876dd29d
---

{{FirefoxSidebar}}

Firefox 56 wurde am 28. September 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- Anzeige negativer Zeilennummern im CSS Grid Inspector ([Firefox Fehler 1369942](https://bugzil.la/1369942)).
- Das neue CSS Grid Layout Panel ist jetzt verfügbar und bietet viel bessere Debugging-Möglichkeiten für CSS Grid ([Firefox Fehler 1181227](https://bugzil.la/1181227)). Weitere Details finden Sie unter [Powerful New Additions to the CSS Grid Inspector in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/).

### HTML

- Implementiert die `labels`-Eigenschaft für beschriftbare Formularelemente, zum Beispiel [`HTMLInputElement.labels`](/de/docs/Web/API/HTMLInputElement/labels) ([Firefox Fehler 556743](https://bugzil.la/556743)).
- Implementiert `<link rel="preload">`; siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details ([Firefox Fehler 1222633](https://bugzil.la/1222633)). Beachten Sie, dass Firefox derzeit nur das Vorladen von zwischenspeicherbaren Ressourcen unterstützt.

### CSS

- Implementiert die proprietären, Mozilla-spezifischen {{cssxref("&lt;color&gt;")}}-Werte `-moz-win-accentcolor` und `-moz-win-accentcolortext` (siehe [Firefox Fehler 1344910](https://bugzil.la/1344910)) sowie die proprietäre Media Query [`-moz-windows-accent-color-in-titlebar`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-accent-color-in-titlebar) (siehe [Firefox Fehler 1379938](https://bugzil.la/1379938)).

### SVG

_Keine Änderungen._

### JavaScript

- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) wurde unter Firefox für Android aktiviert ([Firefox Fehler 1344625](https://bugzil.la/1344625)).

### APIs

#### Neue APIs

_Keine Änderungen._

#### DOM

- Auf Mac ist [`Document.hidden`](/de/docs/Web/API/Document/hidden) jetzt wahr, wenn das Fenster hinter einer anderen nicht durchscheinenden Anwendung ist [Firefox Fehler 1236512](https://bugzil.la/1236512).
- Die Eigenschaft [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) wurde implementiert ([Firefox Fehler 1375816](https://bugzil.la/1375816)).
- Die Eigenschaft [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) wurde implementiert ([Firefox Fehler 772589](https://bugzil.la/772589)).
- Firefox akzeptierte zuvor `iso-2022-jp-2`-Sequenzen stillschweigend, wenn ein `iso-2022-jp`-[`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder) instanziiert wurde, jedoch wurde dies nun entfernt, um die API zu vereinfachen, da kein anderer Browser dies unterstützt und keine Seiten dies zu nutzen scheinen. ([Firefox Fehler 715833](https://bugzil.la/715833)).
- Das 4ms-Clamping-Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) wurde aktualisiert, um mehr im Einklang mit anderen Browsern zu sein, wie in [Timeouts throttled to >=4ms](/de/docs/Web/API/Window/setTimeout#timeouts_throttled_to_%3e4ms) beschrieben ([Firefox Fehler 1378586](https://bugzil.la/1378586)).
- Der Handler [`onvisibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) der [Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde hinzugefügt ([Firefox Fehler 1333912](https://bugzil.la/1333912)).
- Die Methode [`Window.showModalDialog()`](/de/docs/Web/API/Window/showModalDialog) wurde entfernt ([Firefox Fehler 981796](https://bugzil.la/981796)).
- Die Implementierung der Eigenschaften [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action), [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction) und [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction) wurde aktualisiert, sodass sie die korrekte URL für die Formularübermittlung gemäß Spezifikation zurückgeben ([Firefox Fehler 1366361](https://bugzil.la/1366361)).

#### DOM Ereignisse

- [`onwheel`](/de/docs/Web/API/Element/wheel_event) ist jetzt auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) verfügbar — vorher war dies nicht der Fall ([Firefox Fehler 1370550](https://bugzil.la/1370550)).

#### Medien und WebRTC

- Firefox unterstützt jetzt die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaften, die es ermöglichen, die aktuellen und ausstehenden Konfigurationen der lokalen und entfernten Enden der Verbindung zu untersuchen, um Änderungen in der Konfiguration zu verwalten: [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) und [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription).
- Hardware-Codierung von Medien ist jetzt auf Android standardmäßig aktiviert; es war verfügbar, aber in Firefox 55 standardmäßig deaktiviert ([Firefox Fehler 1386974](https://bugzil.la/1386974)). Dies unterstützt eine effizientere Codierung von VP8-Medien auf Geräten, die dies unterstützen. Dies spart Akkulaufzeit und Prozessorleistung und verbessert allgemein die Leistung des Geräts des Benutzers.

#### Canvas und WebGL

- Die Methode [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) wurde aktualisiert, sodass Glättung beim Herunterskalieren auch erfolgt, wenn `imageSmoothingEnabled` `false` ist. Dies ist laut Spezifikation nicht verpflichtend, jedoch entspricht dies dem Verhalten von Chrome. Siehe [Firefox Fehler 1360415](https://bugzil.la/1360415).
- Ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement) kann jetzt als Bildquelle in einem [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Aufruf verwendet werden ([Firefox Fehler 1382027](https://bugzil.la/1382027)).

### Sicherheit

_Keine Änderungen._

### Plugins

- Firefox für Android hat jegliche Unterstützung für Plugins entfernt ([Fehler 1381916](https://bugzil.la/1381916)).

### Sonstiges

- Gecko codiert jetzt URLs intern als [Punycode](https://en.wikipedia.org/wiki/Punycode), um Probleme mit der URL-Codierung zu vermeiden (siehe [Firefox Fehler 945240](https://bugzil.la/945240), auch Diskussion in [Firefox Fehler 942074](https://bugzil.la/942074)).
- Firefox auf Windows und macOS kann nun mit dem Flag `-headless` im Headless-Modus ausgeführt werden (siehe [Firefox Fehler 1355150](https://bugzil.la/1355150) und [Firefox Fehler 1355147](https://bugzil.la/1355147)).

## Entfernungen aus der Web-Plattform

### HTML

- Das `<isindex>`-Element wurde aus dem HTML-Parser und aus der Formularübermittlung entfernt ([Firefox Fehler 1266495](https://bugzil.la/1266495)).
- Das `<applet>`-Element wurde entfernt ([Firefox Fehler 1279218](https://bugzil.la/1279218)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [browsingData.RemovalOptions](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions) erhält die Option "hostnames" für Cookies
- [browsingData.settings()](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/settings) und [browsingData.removeCookies()](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies) werden jetzt auf Firefox für Android unterstützt
- [browserSettings.cacheEnabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled)
- Die Nutzung von [browser_style](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) wurde geändert
- [chrome_settings_overrides.search_provider.is_default](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- contextMenus wurde zu [menus](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) umbenannt
- [cookies.set()](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set) und [cookies.remove()](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove) funktionieren jetzt im privaten Modus
- [devtools.panels.elements.onSelectionChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
- [downloads.open()](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/open) kann jetzt nur aus einer Benutzeraktion aufgerufen werden
- [FindProxyForURL "DIRECT" return type no longer takes an argument](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy#pac_file_environment)
- [history.onVisited](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) enthält jetzt den Seitentitel, wenn dieser bekannt ist.
- [management.get()](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/get) und [management.getAll()](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/getAll)
- [menus](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) unterstützt jetzt den Kontext "tools_menu"
- [menus.OnClickData](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData) hat jetzt "linkText"
- [menus.create()](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) hat jetzt eine ["icons"-Option](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus#icons)
- [notifications.onShown](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown)
- [pageAction.show()](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [pageAction.hide()](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) werden jetzt auf Firefox für Android unterstützt
- [permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) unterstützt jetzt "unlimitedStorage"
- [privacy.services](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services) umfasst jetzt "passwordSavingEnabled"
- [privacy.websites.referrersEnabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)
- [protocol_handlers](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) unterstützt jetzt "gopher"
- proxy.registerProxyScript() wurde zu [proxy.register()](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) umbenannt
- [proxy.unregister()](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [runtime.onInstalled](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) erhält das `temporary`-Flag
- [tabs.print()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print), [tabs.PageSettings](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings), [tabs.printPreview()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview), [tabs.saveAsPDF()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF)
- [tabs.Tab.lastAccessed](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)
- [theme.reset()](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset)
- [windows.create()](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) und [windows.update()](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/update) unterstützen jetzt das Voranstellen des Fenstertitels

## Ältere Versionen

{{Firefox_for_developers}}
