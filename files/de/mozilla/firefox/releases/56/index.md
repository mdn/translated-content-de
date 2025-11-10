---
title: Firefox 56 Release Notes für Entwickler
short-title: Firefox 56
slug: Mozilla/Firefox/Releases/56
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 56 wurde am 28. September 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Anzeige negativer Zeilennummern im CSS-Gitter-Inspektor ([Firefox-Bug 1369942](https://bugzil.la/1369942)).
- Das neue CSS Grid Layout-Panel ist jetzt verfügbar und bietet viel bessere CSS-Gitter-Debugging-Möglichkeiten ([Firefox-Bug 1181227](https://bugzil.la/1181227)). Weitere Details finden Sie unter [Leistungsstarke neue Ergänzungen zum CSS-Gitter-Inspektor in Firefox Nightly](https://hacks.mozilla.org/2017/06/new-css-grid-layout-panel-in-firefox-nightly/).

### HTML

- Die `labels`-Eigenschaft für beschriftbare Formularelemente, zum Beispiel [`HTMLInputElement.labels`](/de/docs/Web/API/HTMLInputElement/labels), wurde implementiert ([Firefox-Bug 556743](https://bugzil.la/556743)).
- `<link rel="preload">` wurde implementiert; siehe [Inhalt mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details ([Firefox-Bug 1222633](https://bugzil.la/1222633)). Beachten Sie, dass Firefox derzeit nur das Vorladen von zwischenspeicherbaren Ressourcen unterstützt.

### CSS

- Implementiert die proprietären, Mozilla-spezifischen {{cssxref("&lt;color&gt;")}} Werte `-moz-win-accentcolor` und `-moz-win-accentcolortext` (siehe [Firefox-Bug 1344910](https://bugzil.la/1344910)) sowie die proprietäre Medienabfrage `-moz-windows-accent-color-in-titlebar` (siehe [Firefox-Bug 1379938](https://bugzil.la/1379938)).

### SVG

_Keine Änderungen._

### JavaScript

- Die [Intl API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) wurde in Firefox für Android aktiviert ([Firefox-Bug 1344625](https://bugzil.la/1344625)).

### APIs

#### Neue APIs

_Keine Änderungen._

#### DOM

- Auf Mac ist [`Document.hidden`](/de/docs/Web/API/Document/hidden) nun wahr, wenn das Fenster hinter einer anderen nicht-transluzenten Anwendung liegt ([Firefox-Bug 1236512](https://bugzil.la/1236512)).
- Die [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) Eigenschaft wurde implementiert ([Firefox-Bug 1375816](https://bugzil.la/1375816)).
- Die [`PerformanceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart) Eigenschaft wurde implementiert ([Firefox-Bug 772589](https://bugzil.la/772589)).
- Firefox nahm früher `iso-2022-jp-2`-Sequenzen stillschweigend an, wenn ein `iso-2022-jp` [`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder) instanziiert wurde, jedoch wurde dies nun entfernt, um die API zu vereinfachen, da keine anderen Browser dies unterstützen und keine Seiten sie zu benutzen scheinen. ([Firefox-Bug 715833](https://bugzil.la/715833)).
- Das 4ms-Clamping-Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) wurde aktualisiert, um besser mit anderen Browsern im Einklang zu stehen, wie in [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) beschrieben ([Firefox-Bug 1378586](https://bugzil.la/1378586)).
- Der [onvisibilitychange-Handler der Page Visibility API](/de/docs/Web/API/Page_Visibility_API) wurde hinzugefügt ([Firefox-Bug 1333912](https://bugzil.la/1333912)).
- Die Methode `Window.showModalDialog()` wurde entfernt ([Firefox-Bug 981796](https://bugzil.la/981796)).
- Die Implementierung der Eigenschaften [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action), [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction) und [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction) wurde aktualisiert, sodass sie die korrekte Form-Übermittlungs-URL gemäß Spezifikation zurückgeben ([Firefox-Bug 1366361](https://bugzil.la/1366361)).

#### DOM-Ereignisse

- [`onwheel`](/de/docs/Web/API/Element/wheel_event) ist jetzt auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) verfügbar — vorher war es das nicht ([Firefox-Bug 1370550](https://bugzil.la/1370550)).

#### Medien und WebRTC

- Firefox unterstützt nun die Eigenschaften von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), die es ermöglichen, die aktuellen und ausstehenden Konfigurationen der lokalen und entfernten Enden der Verbindung zu prüfen, um Änderungen in der Konfiguration zu verwalten: [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) und [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription).
- Die Hardware-Verschlüsselung von Videos ist jetzt standardmäßig auf Android aktiviert; sie war verfügbar, aber in Firefox 55 standardmäßig deaktiviert ([Firefox-Bug 1386974](https://bugzil.la/1386974)). Dies unterstützt eine effizientere Verschlüsselung von VP8-Medien auf Geräten, die dies unterstützen. Dies spart Akkulaufzeit und Prozessorleistung und verbessert im Allgemeinen die Leistung des Geräts des Benutzers.

#### Canvas und WebGL

- Die Methode [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) wurde aktualisiert, sodass beim Herunterskalieren eine Glättung auftritt, auch wenn `imageSmoothingEnabled` auf `false` gesetzt ist. Dies ist gemäß Spezifikation nicht zwingend erforderlich, folgt jedoch dem Verhalten von Chrome. Siehe [Firefox-Bug 1360415](https://bugzil.la/1360415).
- Ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement) kann jetzt als Bildquelle in einem [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Aufruf verwendet werden ([Firefox-Bug 1382027](https://bugzil.la/1382027)).

### Sicherheit

_Keine Änderungen._

### Plugins

- Firefox für Android hat die Unterstützung für Plugins vollständig entfernt ([Bug 1381916](https://bugzil.la/1381916)).

### Sonstiges

- Gecko codiert URLs nun intern als [Punycode](https://en.wikipedia.org/wiki/Punycode), um Probleme bei der URL-Codierung zu vermeiden (siehe [Firefox-Bug 945240](https://bugzil.la/945240), siehe auch Diskussion in [Firefox-Bug 942074](https://bugzil.la/942074)).
- Firefox auf Windows und macOS kann jetzt im Headless-Modus mit dem Flag `-headless` ausgeführt werden (siehe [Firefox-Bug 1355150](https://bugzil.la/1355150) und [Firefox-Bug 1355147](https://bugzil.la/1355147)).

## Entfernungen aus der Webplattform

### HTML

- Das `<isindex>`-Element wurde aus dem HTML-Parser und aus der Formularübermittlung entfernt ([Firefox-Bug 1266495](https://bugzil.la/1266495)).
- Das `<applet>`-Element wurde entfernt ([Firefox-Bug 1279218](https://bugzil.la/1279218)).

### APIs

_Keine Änderungen._

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [browsingData.RemovalOptions](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions) erhält die "hostnames"-Option für Cookies
- [browsingData.settings()](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/settings) und [browsingData.removeCookies()](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies) werden jetzt auf Firefox für Android unterstützt
- [browserSettings.cacheEnabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled)
- Die Verwendung von [browser_style](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) wurde geändert
- [chrome_settings_overrides.search_provider.is_default](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- contextMenus wurde in [menus](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) umbenannt
- [cookies.set()](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set) und [cookies.remove()](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies/remove) funktionieren jetzt im privaten Modus
- [devtools.panels.elements.onSelectionChanged](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
- [downloads.open()](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/open) kann jetzt nur durch eine Benutzeraktion aufgerufen werden
- [FindProxyForURL "DIRECT"-Rückgabewert nimmt kein Argument mehr](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file#return_value_format)
- [history.onVisited](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) enthält jetzt den Seitentitel, wenn er bekannt ist.
- [management.get()](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/get) und [management.getAll()](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/getAll)
- [menus](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) unterstützt jetzt den "tools_menu"-Kontext
- [menus.OnClickData](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData) hat jetzt "linkText"
- [menus.create()](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) hat jetzt eine ["icons" Option](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus#icons)
- [notifications.onShown](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown)
- [pageAction.show()](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/show) und [pageAction.hide()](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/hide) werden jetzt auf Firefox für Android unterstützt
- [permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) unterstützt jetzt "unlimitedStorage"
- [privacy.services](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services) beinhaltet jetzt passwordSavingEnabled
- [privacy.websites.referrersEnabled](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)
- [protocol_handlers](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) unterstützt jetzt "gopher"
- proxy.registerProxyScript() wurde in [proxy.register()](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) umbenannt
- [proxy.unregister()](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [runtime.onInstalled](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) erhält das `temporary`-Flag
- [tabs.print()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print), [tabs.PageSettings](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings), [tabs.printPreview()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview), [tabs.saveAsPDF()](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF)
- [tabs.Tab.lastAccessed](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)
- [theme.reset()](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/reset)
- [windows.create()](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) und [windows.update()](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/update) unterstützen jetzt die Vorgabe des Fenstertitels
