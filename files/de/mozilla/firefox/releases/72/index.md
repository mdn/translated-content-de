---
title: Firefox 72 für Entwickler
slug: Mozilla/Firefox/Releases/72
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 72, die Entwickler betreffen werden. Firefox 72 wurde am 7. Januar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Im [Multi-Line-Modus des interaktiven JS-Interpreters](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) können Sie Dateien mit den Tastenkombinationen `Strg` + `O` und `Strg` + `S` öffnen und speichern ([Firefox-Bug 1592308](https://bugzil.la/1592308)).
- Sie können eine [Voreinstellung festlegen, damit asynchrone Nachrichten visuell getrennt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) ([Firefox-Bug 1592969](https://bugzil.la/1592969)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Sie können jetzt mit der rechten Maustaste oder `Strg`-Klick auf Objekte im "Scopes"-Panel klicken und _Property set_ oder _Property get_ auswählen, um [Watchpoints festzulegen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) ([Firefox-Bug 1574192](https://bugzil.la/1574192)).

[Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der Tab "Timings" zeigt jetzt [Wartezeiten, Startzeiten und Downloadzeiten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) für jede Ressource an ([Firefox-Bug 1580431](https://bugzil.la/1580431)).

[Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Sie können eine [Voreinstellung festlegen, um einen Simulator zu aktivieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) für verschiedene Werte der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Feature ([Firefox-Bug 1550804](https://bugzil.la/1550804)).

#### Entfernungen

- Die Funktion _Scratchpad_ wurde entfernt ([Firefox-Bug 1519103](https://bugzil.la/1519103)).

### HTML

_Keine Änderungen._

### CSS

- CSS Shadow Parts sind jetzt aktiviert. Dies umfasst das [`part` Attribute](/de/docs/Web/HTML/Global_attributes/part) und das [`::part` Pseudo-Element](/de/docs/Web/CSS/::part), die es Shadow Hosts ermöglichen, ausgewählte Elemente aus ihrem Shadow-DOM zur Stilbearbeitung freizugeben ([Firefox-Bug 1559074](https://bugzil.la/1559074)).
- [CSS Motion Path](/de/docs/Web/CSS/CSS_motion_path) wurde implementiert ([Firefox-Bug 1582554](https://bugzil.la/1582554), siehe auch die [Intent to Ship](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc)). Dies umfasst:

  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- Die individuellen Transform-Eigenschaften — {{cssxref("scale")}}, {{cssxref("rotate")}} und {{cssxref("translate")}} — sind jetzt standardmäßig aktiviert ([Firefox-Bug 1424900](https://bugzil.la/1424900)).

#### Entfernungen

### SVG

_Keine Änderungen._

### JavaScript

- Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) wurde implementiert ([Firefox-Bug 1566141](https://bugzil.la/1566141)).

### APIs

#### Neue APIs

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent) und die [ereignisbasierte Formularteilnahme](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#using_a_formdata_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1594708](https://bugzil.la/1594708)).
- Die [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) Eigenschaft und die [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) Eigenschaft werden jetzt unterstützt ([Firefox-Bug 1591892](https://bugzil.la/1591892)).

#### DOM

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) hat einige Änderungen bei Schnittstellennamen erfahren, entsprechend den aktuellen Spezifikationsänderungen ([Firefox-Bug 1575144](https://bugzil.la/1575144)):

  - `Coordinates` wurde in [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) geändert.
  - `Position` wurde in [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) geändert.
  - `PositionError` wurde in [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) geändert.

- Eine Reihe von Eigenschaften wurden aktualisiert, um Standard-Stringifier zu verwenden ([Firefox-Bug 824857](https://bugzil.la/824857)):

  - [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - [`Location.href`](/de/docs/Web/API/Location/href)
  - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - [`URL.href`](/de/docs/Web/API/URL/href)
  - [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href)

#### DOM-Ereignisse

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) und [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) können jetzt nur in Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox-Bug 1593644](https://bugzil.la/1593644)).

#### Medien, Web Audio und WebRTC

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) kann jetzt nur in Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox-Bug 1580944](https://bugzil.la/1580944)).
- Das `RTCRtpContributingSource` Dictionary kann jetzt die `rtpTimestamp` Eigenschaft enthalten, die eine quellgenerierte Zeit angibt, zu der das Paketmedium generiert oder abgetastet wurde ([Firefox-Bug 1583867](https://bugzil.la/1583867)).

#### Entfernungen

- Die nicht standardisierte `window.mozPaintCount` Eigenschaft wurde entfernt. ([Firefox-Bug 1591968](https://bugzil.la/1591968))
- Die Schnittstelle [`BatteryManager`](/de/docs/Web/API/BatteryManager) wird nicht mehr für Webinhalte bereitgestellt ([Firefox-Bug 1441976](https://bugzil.la/1441976)).
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wird in Cross-Origin-{{htmlelement("iframe")}}s nicht mehr unterstützt ([Firefox-Bug 1591113](https://bugzil.la/1591113)).
- WebRTC unterstützt nicht mehr die `rid=` und `pt=` Parameter im `simulcast` Attribut. Die neue Syntax für eine Zeile wie "`a=simulcast: send rid=7 recv rid=8`" ist jetzt "`a=simulcast: send 7 recv 8`". Die neue Syntax wurde seit Firefox 68 unterstützt, daher ist es jetzt an der Zeit, die Unterstützung für die alte Syntax zurückzuziehen ([Firefox-Bug 1470568](https://bugzil.la/1470568)).

### Sicherheit

- Das Deaktivieren des MIME-Sniffings mit {{HTTPHeader("X-Content-Type-Options")}} wird jetzt auch auf Dokumente der obersten Ebene angewendet, wenn ein {{HTTPHeader("Content-type")}} angegeben ist. Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt gesetzt sind. ([Firefox-Bug 1591932](https://bugzil.la/1591932)).
- Die Unterstützung für HTTP Public Key Pinning (HPKP) wurde eingestellt, aufgrund der geringen Akzeptanzrate und des Interoperabilitätsrisikos. Die Header `Public-Key-Pins` und `Public-Key-Pins-Report-Only` werden jetzt stillschweigend ignoriert [Firefox-Bug 1412438](https://bugzil.la/1412438).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Entfernt wurden die `Anon` und `AnonAttribute` Strategien von den `WebDriver:FindElement` und `WebDriver:FindElements` Befehlen ([Firefox-Bug 1587627](https://bugzil.la/1587627)).
- `Webdriver:TakeScreenshot` schlägt nicht mehr fehl, wenn das erfasste Gebiet das obere Maximalmaß für die Breite, Höhe oder Größe der Leinwand überschreitet ([Firefox-Bug 1590064](https://bugzil.la/1590064)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Eigenschaft [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) wurde implementiert ([Firefox-Bug 1592687](https://bugzil.la/1592687)).
- Das Ereignis [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) wurde implementiert ([Firefox-Bug 1410412](https://bugzil.la/1410412)).
- Die Eigenschaft [`captivePortal.canonicalURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) wurde implementiert ([Firefox-Bug 1592932](https://bugzil.la/1592932)).
- Die Callback-Funktionen für die Ereignisse [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) und [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) umfassen jetzt eine `OnClickData`-Eigenschaft mit einem Objekt, dessen Eigenschaften die gedrückte Maustaste zusammen mit allen Tastaturmodifikatoren beschreiben ([Firefox-Bug 1405031](https://bugzil.la/1405031)). Dies ermöglicht die Unterstützung zusätzlicher Arten von Mausklicks.
- Die {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} Eigenschaft wurde implementiert und ermöglicht es, die höchste und niedrigste von dem Browser unterstützte TLS-Version zu lesen ([Firefox-Bug 1593635](https://bugzil.la/1593635)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks Veröffentlichungspost: [Firefox 72 — our first song of 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## Ältere Versionen

{{Firefox_for_developers}}
