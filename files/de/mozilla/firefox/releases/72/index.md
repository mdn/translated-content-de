---
title: Firefox 72 Versionshinweise für Entwickler
short-title: Firefox 72
slug: Mozilla/Firefox/Releases/72
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 72, die Entwickler betreffen werden. Firefox 72 wurde am 7. Januar 2020 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Im [Mehrzeilenmodus des interaktiven JS-Interpreters](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) können Sie Dateien mit den Tastenkombinationen `Strg` + `O` und `Strg` + `S` öffnen und speichern ([Firefox Fehler 1592308](https://bugzil.la/1592308)).
- Sie können eine [Einstellung setzen, damit asynchrone Nachrichten visuell getrennt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) ([Firefox Fehler 1592969](https://bugzil.la/1592969)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Sie können jetzt mit Rechts-/`Strg`-Klick auf Objekte im Bereich Scopes klicken und _Eigenschaft setzen_ oder _Eigenschaft abfragen_ wählen, um [Watchpoints zu setzen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) ([Firefox Fehler 1574192](https://bugzil.la/1574192)).

[Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Die Registerkarte Zeitpläne zeigt jetzt [wartend, gestartet und heruntergeladen](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) Zeiten für jede Ressource an ([Firefox Fehler 1580431](https://bugzil.la/1580431)).

[Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Sie können eine [Einstellung setzen, um einen Simulator zu aktivieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) für verschiedene Werte der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienfunktion ([Firefox Fehler 1550804](https://bugzil.la/1550804)).

#### Entfernungen

- Die _Scratchpad_-Funktion wurde entfernt ([Firefox Fehler 1519103](https://bugzil.la/1519103)).

### HTML

_Keine Änderungen._

### CSS

- CSS Shadow Parts sind jetzt aktiviert. Dies beinhaltet das [`part` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/part) und das [`::part` Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/::part), die es Shadow Hosts ermöglichen, ausgewählte Elemente aus ihrem Shadow-Baum zur Stilgestaltung an die Außenseite der Seite freizugeben ([Firefox Fehler 1559074](https://bugzil.la/1559074)).
- [CSS Bewegungspfad](/de/docs/Web/CSS/Guides/Motion_path) wurde eingeführt ([Firefox Fehler 1582554](https://bugzil.la/1582554), siehe auch den [Intent to Ship](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc)). Dies umfasst:

  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- Die individuellen Transformations-Eigenschaften — {{cssxref("scale")}}, {{cssxref("rotate")}}, und {{cssxref("translate")}} — sind jetzt standardmäßig aktiviert ([Firefox Fehler 1424900](https://bugzil.la/1424900)).

#### Entfernungen

### SVG

_Keine Änderungen._

### JavaScript

- Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) wurde implementiert ([Firefox Fehler 1566141](https://bugzil.la/1566141)).

### APIs

#### Neue APIs

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent) und [ereignisbasierte Formularbeteiligung](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#using_a_formdata_event) sind jetzt standardmäßig aktiviert ([Firefox Fehler 1594708](https://bugzil.la/1594708)).
- Die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und die Eigenschaft [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) werden jetzt unterstützt ([Firefox Fehler 1591892](https://bugzil.la/1591892)).

#### DOM

- Die [Geolocation API](/de/docs/Web/API/Geolocation_API) hat einige Interface-Namen-Updates erhalten, entsprechend den neuesten Spezifikationsänderungen ([Firefox Fehler 1575144](https://bugzil.la/1575144)):

  - `Coordinates` wurde zu [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) geändert.
  - `Position` wurde zu [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) geändert.
  - `PositionError` wurde zu [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) geändert.

- Eine Reihe von Eigenschaften wurden aktualisiert, um standardkonforme Stringifiers zu verwenden ([Firefox Fehler 824857](https://bugzil.la/824857)):
  - [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - [`Location.href`](/de/docs/Web/API/Location/href)
  - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - [`URL.href`](/de/docs/Web/API/URL/href)
  - [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href)

#### DOM-Ereignisse

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) und [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) können jetzt nur als Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox Fehler 1593644](https://bugzil.la/1593644)).

#### Medien, Web Audio und WebRTC

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) kann jetzt nur als Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox Fehler 1580944](https://bugzil.la/1580944)).
- Das `RTCRtpContributingSource` Wörterbuch kann jetzt die `rtpTimestamp` Eigenschaft enthalten, die eine quellenbasierte Zeit angibt, zu der das Medienpaket erzeugt oder abgetastet wurde ([Firefox Fehler 1583867](https://bugzil.la/1583867)).

#### Entfernungen

- Die nicht standardisierte Eigenschaft `window.mozPaintCount` wurde entfernt. ([Firefox Fehler 1591968](https://bugzil.la/1591968))
- Das [`BatteryManager`](/de/docs/Web/API/BatteryManager) Interface wird nicht mehr für Webinhalte bereitgestellt ([Firefox Fehler 1441976](https://bugzil.la/1441976)).
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wird in Cross-Origin-{{htmlelement("iframe")}}s nicht mehr unterstützt ([Firefox Fehler 1591113](https://bugzil.la/1591113)).
- WebRTC unterstützt keine `rid=` und `pt=` Parameter mehr im `simulcast` Attribut. Die neue Syntax für eine Zeile wie `a=simulcast: send rid=7 recv rid=8` ist jetzt `a=simulcast: send 7 recv 8`. Die neue Syntax wird seit Firefox 68 unterstützt, daher ist es jetzt an der Zeit, die Unterstützung für die alte Syntax zu beenden ([Firefox Fehler 1470568](https://bugzil.la/1470568)).

### Sicherheit

- Das Opt-out von MIME Sniffing über {{HTTPHeader("X-Content-Type-Options")}} wird jetzt auch auf Dokumente auf oberster Ebene angewendet, wenn ein {{HTTPHeader("Content-type")}} bereitgestellt wird. Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt gesetzt sind. ([Firefox Fehler 1591932](https://bugzil.la/1591932)).
- Die Unterstützung für HTTP Public Key Pinning (HPKP) wurde aufgrund der geringen Akzeptanzrate und des Interoperabilitätsrisikos eingestellt. Die Header `Public-Key-Pins` und `Public-Key-Pins-Report-Only` werden jetzt stillschweigend ignoriert [Firefox Fehler 1412438](https://bugzil.la/1412438).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Die Strategien `Anon` und `AnonAttribute` wurden aus den Befehlen `WebDriver:FindElement` und `WebDriver:FindElements` entfernt ([Firefox Fehler 1587627](https://bugzil.la/1587627)).
- `Webdriver:TakeScreenshot` schlägt nicht mehr fehl, wenn der erfasste Bereich die obere maximale Grenze für die Breite, Höhe oder Größe der Leinwand überschreitet ([Firefox Fehler 1590064](https://bugzil.la/1590064)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Eigenschaft [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) wurde implementiert ([Firefox Fehler 1592687](https://bugzil.la/1592687)).
- Das Ereignis [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) wurde implementiert ([Firefox Fehler 1410412](https://bugzil.la/1410412)).
- Die Eigenschaft [`captivePortal.canonicalURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) wurde implementiert ([Firefox Fehler 1592932](https://bugzil.la/1592932)).
- Die Callback-Funktionen für die Ereignisse [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) und [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) enthalten jetzt eine `OnClickData` Eigenschaft, die ein Objekt enthält, dessen Eigenschaften die gedrückte Maustaste zusammen mit Tastaturmodifikatoren beschreiben ([Firefox Fehler 1405031](https://bugzil.la/1405031)). Dies ermöglicht die Unterstützung zusätzlicher Mausklicktypen.
- Die Eigenschaft {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} wurde implementiert und ermöglicht das Lesen der höchsten und niedrigsten TLS-Versionen, die der Browser unterstützt ([Firefox Fehler 1593635](https://bugzil.la/1593635)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Post: [Firefox 72 — unser erstes Lied von 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)
