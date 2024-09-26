---
title: Firefox 72 für Entwickler
slug: Mozilla/Firefox/Releases/72
l10n:
  sourceCommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 72, die Entwickler betreffen werden. Firefox 72 wurde am 7. Januar 2020 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

[Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- Im [Mehrzeilenmodus des interaktiven JS-Interpreters](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) können Sie Dateien mit den Tastenkombinationen `Strg` + `O` und `Strg` + `S` öffnen und speichern ([Firefox-Bug 1592308](https://bugzil.la/1592308)).
- Sie können eine [Einstellung setzen, so dass asynchrone Nachrichten visuell getrennt werden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#async-stack-frames) ([Firefox-Bug 1592969](https://bugzil.la/1592969)).

[JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- Sie können jetzt mit der rechten Maustaste/`Strg`-Klick auf Objekte im Scopes-Panel klicken und _Property set_ oder _Property get_ wählen, um [Überwachungspunkte zu setzen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_watchpoints/index.html#set-a-watchpoint) ([Firefox-Bug 1574192](https://bugzil.la/1574192)).

[Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- Der Reiter „Timings“ zeigt nun [wartende, gestartete und heruntergeladene](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#queued-started-downloaded) Zeiten für jede Ressource an ([Firefox-Bug 1580431](https://bugzil.la/1580431)).

[Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Sie können eine [Einstellung setzen, um einen Simulator](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-color-scheme-preference) für verschiedene Werte der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Feature zu aktivieren ([Firefox-Bug 1550804](https://bugzil.la/1550804)).

#### Entfernt

- Die _Scratchpad_-Funktion wurde entfernt ([Firefox-Bug 1519103](https://bugzil.la/1519103)).

### HTML

_Keine Änderungen._

### CSS

- CSS Shadow Parts sind jetzt aktiviert. Dies beinhaltet das [`part`-Attribut](/de/docs/Web/HTML/Global_attributes/part) und das [`::part`-Pseudoelement](/de/docs/Web/CSS/::part), die es Shadow Hosts erlauben, ausgewählte Elemente aus ihrem Shadow Tree für Styling-Zwecke der Außenseite zugänglich zu machen ([Firefox-Bug 1559074](https://bugzil.la/1559074)).
- [CSS Motion Path](/de/docs/Web/CSS/CSS_motion_path) wurde ausgeliefert ([Firefox-Bug 1582554](https://bugzil.la/1582554), sehen Sie auch den [Intend to Ship](https://groups.google.com/forum/#!topic/mozilla.dev.platform/nOOIRsuxvuc)). Dies beinhaltet:

  - {{cssxref("offset")}}
  - {{cssxref("offset-path")}}
  - {{cssxref("offset-anchor")}}
  - {{cssxref("offset-distance")}}
  - {{cssxref("offset-rotate")}}

- Die individuellen Transform-Eigenschaften — {{cssxref("scale")}}, {{cssxref("rotate")}}, und {{cssxref("translate")}} — sind jetzt standardmäßig aktiviert ([Firefox-Bug 1424900](https://bugzil.la/1424900)).

#### Entfernt

### SVG

_Keine Änderungen._

### JavaScript

- Der [Nullish-Coalescing-Operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) wurde implementiert ([Firefox-Bug 1566141](https://bugzil.la/1566141)).

### APIs

#### Neue APIs

- {{domxref("FormDataEvent")}} und [ereignisbasierte Formular-Teilnahme](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects#using_a_formdata_event) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1594708](https://bugzil.la/1594708)).
- Die Eigenschaft {{domxref("Window.crossOriginIsolated")}} und die Eigenschaft {{domxref("WorkerGlobalScope.crossOriginIsolated")}} werden jetzt unterstützt ([Firefox-Bug 1591892](https://bugzil.la/1591892)).

#### DOM

- Die [Geolocation-API](/de/docs/Web/API/Geolocation_API) hat einige Schnittstellennamen-Updates gemäß den neuesten Spezifikationsänderungen erfahren ([Firefox-Bug 1575144](https://bugzil.la/1575144)):

  - `Coordinates` wurde geändert zu {{domxref("GeolocationCoordinates")}}.
  - `Position` wurde geändert zu {{domxref("GeolocationPosition")}}.
  - `PositionError` wurde geändert zu {{domxref("GeolocationPositionError")}}.

- Eine Reihe von Eigenschaften wurden aktualisiert, um standardmäßige Stringifier zu verwenden ([Firefox-Bug 824857](https://bugzil.la/824857)):

  - {{domxref("DOMTokenList.value")}}
  - {{domxref("HTMLAnchorElement.href")}}
  - {{domxref("Location.href")}}
  - {{domxref("MediaList.mediaText")}}
  - {{domxref("URL.href")}}
  - {{domxref("WorkerLocation.href")}}

#### DOM-Ereignisse

- {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} und {{domxref("PushManager.subscribe()")}} können jetzt nur als Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen werden ([Firefox-Bug 1593644](https://bugzil.la/1593644)).

#### Medien, Web Audio und WebRTC

- Die Methode {{domxref("MediaDevices.getDisplayMedia()")}} kann jetzt nur als Reaktion auf eine Benutzeraktion wie ein [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen werden ([Firefox-Bug 1580944](https://bugzil.la/1580944)).
- Das `RTCRtpContributingSource`-Wörterbuch kann nun die Eigenschaft `rtpTimestamp` beinhalten, die eine quellenerzeugte Zeit ist, zu der das Medium des Pakets erzeugt oder abgetastet wurde ([Firefox-Bug 1583867](https://bugzil.la/1583867)).

#### Entfernt

- Entfernte die nicht standardmäßige Eigenschaft `window.mozPaintCount`. ([Firefox-Bug 1591968](https://bugzil.la/1591968))
- Die {{domxref("BatteryManager")}}-Schnittstelle wird nicht mehr für Web-Inhalte verfügbar gemacht ([Firefox-Bug 1441976](https://bugzil.la/1441976)).
- {{domxref("Navigator.vibrate()")}} wird nicht mehr in Cross-Origin-{{htmlelement("iframe")}}s unterstützt ([Firefox-Bug 1591113](https://bugzil.la/1591113)).
- WebRTC unterstützt die `rid=` und `pt=` Parameter auf dem `simulcast` Attribut nicht mehr. Die neue Syntax für eine Zeile wie "`a=simulcast: send rid=7 recv rid=8`" ist jetzt "`a=simulcast: send 7 recv 8`". Die neue Syntax wurde seit Firefox 68 unterstützt, daher ist es jetzt an der Zeit, die Unterstützung für die alte Syntax einzustellen ([Firefox-Bug 1470568](https://bugzil.la/1470568)).

### Sicherheit

- Das Opt-Out für MIME-Sniffing mit {{HTTPHeader("X-Content-Type-Options")}} wird nun auch auf Dokumente der obersten Ebene angewendet, wenn ein {{HTTPHeader("Content-type")}} angegeben wird. Dies kann dazu führen, dass HTML-Webseiten heruntergeladen werden, anstatt gerendert zu werden, wenn sie mit einem MIME-Typ außer `text/html` bereitgestellt werden. Stellen Sie sicher, dass beide Header korrekt gesetzt sind. ([Firefox-Bug 1591932](https://bugzil.la/1591932)).
- Die Unterstützung für HTTP Public Key Pinning (HPKP) wurde wegen geringer Verbreitung und Interoperabilitätsrisiko eingestellt. Die Header `Public-Key-Pins` und `Public-Key-Pins-Report-Only` werden jetzt stillschweigend ignoriert [Firefox-Bug 1412438](https://bugzil.la/1412438).

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

- Entfernte `Anon` und `AnonAttribute` Strategien von den `WebDriver:FindElement` und `WebDriver:FindElements` Befehlen ([Firefox-Bug 1587627](https://bugzil.la/1587627)).
- `Webdriver:TakeScreenshot` schlägt nicht mehr fehl, wenn der erfasste Bereich die obere maximale Grenze für die Breite, Höhe oder Größe der Leinwand überschreitet ([Firefox-Bug 1590064](https://bugzil.la/1590064)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Eigenschaft [`browserSettings.ftpProtocolEnabled`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled) wurde implementiert ([Firefox-Bug 1592687](https://bugzil.la/1592687)).
- Das Ereignis [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) wurde implementiert ([Firefox-Bug 1410412](https://bugzil.la/1410412)).
- Die Eigenschaft [`captivePortal.canonicalURL`](/de/docs/Mozilla/Add-ons/WebExtensions/API/captivePortal/canonicalURL) wurde implementiert ([Firefox-Bug 1592932](https://bugzil.la/1592932)).
- Die Rückruffunktionen für die Ereignisse [`browserAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked) und [`pageAction.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked) beinhalten jetzt eine `OnClickData`-Eigenschaft, die ein Objekt enthält, dessen Eigenschaften die gedrückte Maustaste zusammen mit Tastaturmodifikatoren beschreiben ([Firefox-Bug 1405031](https://bugzil.la/1405031)). Dies ermöglicht Unterstützung für zusätzliche Arten von Maus-Klicks.
- Die Eigenschaft {{WebExtAPIRef("browserSettings.tlsVersionRestrictionConfig")}} wurde implementiert und ermöglicht das Lesen der höchsten und niedrigsten von dem Browser unterstützten TLS-Versionen ([Firefox-Bug 1593635](https://bugzil.la/1593635)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Post: [Firefox 72 — unser erstes Lied von 2020](https://hacks.mozilla.org/2020/01/firefox-72-our-first-song-of-2020/)

## Ältere Versionen

{{Firefox_for_developers}}