---
title: Firefox 72 für Entwickler
slug: Mozilla/Firefox/Releases/72
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 72, die Entwickler betreffen werden. Firefox 72 wurde am 7. Januar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

[Konsolen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Im [Mehrzeilenmodus des interaktiven JS-Interpreters](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) können Sie Dateien mit den Tastenkombinationen `Ctrl` + `O` zum Öffnen und `Ctrl` + `S` zum Speichern bearbeiten ([Firefox-Bug 1592308](https://bugzil.la/1592308)).
- Sie können eine [Einstellung festlegen, damit asynchrone Nachrichten visuell getrennt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) ([Firefox-Bug 1592969](https://bugzil.la/1592969)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Sie können jetzt mit Rechts-/`Ctrl`-Klick auf Objekte im Scopes-Panel klicken und _Property set_ oder _Property get_ auswählen, um [Watchpoints festzulegen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) ([Firefox-Bug 1574192](https://bugzil.la/1574192)).

[Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Die Registerkarte Timings zeigt jetzt [Warte-, Start- und Downloadzeiten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) für jede Ressource an ([Firefox-Bug 1580431](https://bugzil.la/1580431)).

[Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Sie können eine [Einstellung festlegen, um einen Simulator zu aktivieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) für verschiedene Werte der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienfeature ([Firefox-Bug 1550804](https://bugzil.la/1550804)).

#### Entfernungen

- Die Funktion _Scratchpad_ wurde entfernt ([Firefox-Bug 1519103](https://bugzil.la/1519103)).

### HTML

_Keine Änderungen._

### CSS

- CSS Shadow Parts sind jetzt aktiviert. Dazu gehören das [`part`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/part) und das [`::part`-Pseudoelement](/de/docs/Web/CSS/::part), die es Shadow Hosts ermöglichen, ausgewählte Elemente aus ihrem Shadow-Baum für Styling-Zwecke an die äußere Seite freizugeben ([Firefox-Bug 1559074](https://bugzil.la/1559074)).
- [CSS Motion Path](/de/docs/Web/CSS/CSS_motion_path) wurde veröffentlicht ([Firefox-Bug 1582554](https://bugzil.la/1582554), siehe auch die [Absichtserklärung zur Veröffentlichung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc)). Dies umfasst:
  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- Die individuellen Transformations-Eigenschaften – {{cssxref("scale")}}, {{cssxref("rotate")}}, und {{cssxref("translate")}} – sind jetzt standardmäßig aktiviert ([Firefox-Bug 1424900](https://bugzil.la/1424900)).

#### Entfernungen

### SVG

_Keine Änderungen._

### JavaScript

- Der [Nullish Coalescing Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) wurde implementiert ([Firefox-Bug 1566141](https://bugzil.la/1566141)).

### APIs

#### Neue APIs

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent) und [ereignisbasiertes Formularteilnahme](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#using_a_formdata_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1594708](https://bugzil.la/1594708)).
- Die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) werden jetzt unterstützt ([Firefox-Bug 1591892](https://bugzil.la/1591892)).

#### DOM

- Die [Geolocation-API](/de/docs/Web/API/Geolocation_API) hat einige Aktualisierungen der Schnittstellennamen erhalten, gemäß den neuesten Spezifikationsänderungen ([Firefox-Bug 1575144](https://bugzil.la/1575144)):
  - `Coordinates` wurde in [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) umbenannt.
  - `Position` wurde in [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) umbenannt.
  - `PositionError` wurde in [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) umbenannt.

- Eine Reihe von Eigenschaften wurde aktualisiert, um Standard-Stringifier zu verwenden ([Firefox-Bug 824857](https://bugzil.la/824857)):
  - [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)
  - [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)
  - [`Location.href`](/de/docs/Web/API/Location/href)
  - [`MediaList.mediaText`](/de/docs/Web/API/MediaList/mediaText)
  - [`URL.href`](/de/docs/Web/API/URL/href)
  - [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href)

#### DOM-Ereignisse

- [`Notification.requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) und [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe) können jetzt nur als Reaktion auf ein Benutzerereignis wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox-Bug 1593644](https://bugzil.la/1593644)).

#### Medien, Web Audio und WebRTC

- Die Methode [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) kann jetzt nur als Reaktion auf ein Benutzerereignis wie ein [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen werden ([Firefox-Bug 1580944](https://bugzil.la/1580944)).
- Das `RTCRtpContributingSource`-Dictionary kann jetzt die Eigenschaft `rtpTimestamp` enthalten, die eine vom Quellsystem generierte Zeit angibt, zu der das Medienpaket erzeugt oder abgetastet wurde ([Firefox-Bug 1583867](https://bugzil.la/1583867)).

#### Entfernungen

- Die nicht standardisierte Eigenschaft `window.mozPaintCount` wurde entfernt. ([Firefox-Bug 1591968](https://bugzil.la/1591968))
- Die Schnittstelle [`BatteryManager`](/de/docs/Web/API/BatteryManager) wird im Webinhalt nicht mehr angezeigt ([Firefox-Bug 1441976](https://bugzil.la/1441976)).
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wird in cross-origin {{htmlelement("iframe")}}s nicht mehr unterstützt ([Firefox-Bug 1591113](https://bugzil.la/1591113)).
- WebRTC unterstützt nicht mehr die `rid=` und `pt=` Parameter auf dem `simulcast` Attribut. Die neue Syntax für eine Zeile wie `a=simulcast: send rid=7 recv rid=8` ist jetzt `a=simulcast: send 7 recv 8`. Die neue Syntax wird seit Firefox 68 unterstützt, jetzt ist es an der Zeit, die Unterstützung für die alte Syntax zurückzuziehen ([Firefox-Bug 1470568](https://bugzil.la/1470568)).

### Sicherheit

- Das Abmelden von MIME-Sniffing mit {{HTTPHeader("X-Content-Type-Options")}} wird jetzt auch auf Dokumente auf oberster Ebene angewendet, wenn ein {{HTTPHeader("Content-type")}} angegeben ist. Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem anderen MIME-Typ als `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt gesetzt sind. ([Firefox-Bug 1591932](https://bugzil.la/1591932)).
- Die Unterstützung für HTTP Public Key Pinning (HPKP) wurde aufgrund der geringen Akzeptanzrate und des Interoperabilitätsrisikos gestrichen. Die Header `Public-Key-Pins` und `Public-Key-Pins-Report-Only` werden jetzt stillschweigend ignoriert [Firefox-Bug 1412438](https://bugzil.la/1412438).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- `Anon` und `AnonAttribute` Strategien wurden von den `WebDriver:FindElement` und `WebDriver:FindElements` Befehlen entfernt ([Firefox-Bug 1587627](https://bugzil.la/1587627)).
- `Webdriver:TakeScreenshot` schlägt nicht mehr fehl, wenn der erfasste Bereich das obere Maximalmaß für die Breite, Höhe oder Größe der Leinwand überschreitet ([Firefox-Bug 1590064](https://bugzil.la/1590064)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Eigenschaft [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) wurde implementiert ([Firefox-Bug 1592687](https://bugzil.la/1592687)).
- Das Ereignis [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) wurde implementiert ([Firefox-Bug 1410412](https://bugzil.la/1410412)).
- Die Eigenschaft [`captivePortal.canonicalURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) wurde implementiert ([Firefox-Bug 1592932](https://bugzil.la/1592932)).
- Die Callback-Funktionen für die Ereignisse [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) und [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) enthalten nun eine `OnClickData`-Eigenschaft, die ein Objekt mit Informationen über die gedrückte Maustaste sowie alle Tastaturmodifikatoren beschreibt ([Firefox-Bug 1405031](https://bugzil.la/1405031)). Dies ermöglicht die Unterstützung für zusätzliche Arten von Mausklicks.
- Die Eigenschaft {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} wurde implementiert und ermöglicht das Lesen der höchsten und niedrigsten TLS-Versionen, die vom Browser unterstützt werden ([Firefox-Bug 1593635](https://bugzil.la/1593635)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 72 — unser erster Song von 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## Ältere Versionen

{{Firefox_for_developers}}
