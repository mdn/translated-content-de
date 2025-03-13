---
title: Firefox 47 für Entwickler
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

[Um die neuesten Entwickler-Funktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Web-Entwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- [Spoofing des User-Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) im [Responsive Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Retaining paths panel](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel) im Speichertool
- Debugging von [Service Workers](/de/docs/Web/API/ServiceWorker) und [Push API](/de/docs/Web/API/Push_API)

  - [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Dashboard für Worker
  - Zwischengespeicherte Anfragen werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt
  - Unterstützung für [Cache Storage](/de/docs/Web/API/Cache) im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)

- Möglichkeit, Einträge im [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) zu filtern
- Die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den Mehrzeilenmodus
- Aktualisierter Breakpoint-Stil im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- Verhindern, dass sich Panels automatisch ausblenden, mithilfe des [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html), um Browser- und Add-on-Debugging zu unterstützen
- Der [Font-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) wurde standardmäßig deaktiviert
- Die [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt
- Theme-Refresh der Entwicklerwerkzeuge
- Deaktivieren des Font-Panels ([Firefox Fehler 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderung._

### CSS

- Unterstützung für das {{cssxref("::backdrop")}} Pseudo-Element wurde hinzugefügt ([Firefox Fehler 1064843](https://bugzil.la/1064843)).
- Der case-insensitive Modifikator `i` (wie in `[foo=bar i]`) für [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wurde implementiert ([Firefox Fehler 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung von CSS Mask Image Eigenschaften wurde hinzugefügt. Momentan ist dies nur in Nightly-Versionen von Firefox verfügbar: die Kurzform von {{cssxref("mask")}} sowie {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} sind jetzt verfügbar ([Firefox Fehler 686281](https://bugzil.la/686281)).
- Die {{cssxref("clip-path")}} Eigenschaft unterstützt jetzt experimentell `polygon()`, `ellipse()` und `circle()` auf HTML-Elementen (unterstützt nicht [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)), hinter der Einstellung `layout.css.clip-path-shapes.enabled`, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 1075457](https://bugzil.la/1075457)). Interpolation (und daher Animation) dieser Werte wird noch nicht unterstützt.
- Unsere noch experimentelle Grid-Implementierung wurde aktualisiert:

  - {{cssxref("align-content")}}: `normal` verhält sich jetzt wie `stretch` für Grid-Container ([Firefox Fehler 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Spalten/Zeilen-Werte für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap` Eigenschaften wurde vertauscht ([Firefox Fehler 1251999](https://bugzil.la/1251999)).

- Die {{cssxref("@media/display-mode", "display-mode")}} Medienabfrage wird jetzt unterstützt ([Firefox Fehler 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde zu `unsafe` umbenannt ([Firefox Fehler 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017 {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} Methoden wurden implementiert ([Firefox Fehler 1232639](https://bugzil.la/1232639)).
- Die veraltete, alte Proxy-API (`Proxy.create` und `Proxy.createFunction`) zeigt jetzt eine Veraltungswarnung in der Konsole an und wird in einer zukünftigen Version entfernt. Verwenden Sie stattdessen das standardmäßige {{jsxref("Proxy")}} Objekt ([Firefox Fehler 892903](https://bugzil.la/892903)).
- Die Unterstützung für das veraltete nicht standardisierte `flags` Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox Fehler 1245801](https://bugzil.la/1245801)).
- Laut der neuen ES2016-Spezifikation wurde die {{jsxref("Proxy")}} Enumerate-Falle für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen entfernt ([Firefox Fehler 1246318](https://bugzil.la/1246318)).
- Die {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} Methoden (und ihre {{jsxref("TypedArray")}} Äquivalente) wurden aktualisiert, sodass sie niemals `-0` zurückgeben, gemäß der ECMAScript-Spezifikation ([Firefox Fehler 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Eigenschaft [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) wurde hinter der Einstellung `dom.document.scrollingElement.enabled` implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox Fehler 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderung._

#### IndexedDB

- Die Methode [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes) wurde implementiert ([Firefox Fehler 1251498](https://bugzil.la/1251498)).

#### Service Worker und verwandte APIs

- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) kann jetzt eine Referrer-Option im Init-Objekt akzeptieren ([Firefox Fehler 1251448](https://bugzil.la/1251448)).
- Die Eigenschaft [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) wird jetzt unterstützt ([Firefox Fehler 1251872](https://bugzil.la/1251872)).
- [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in der [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/enterprise/) (ESR) deaktiviert ([Firefox Fehler 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das `RTCIceServer` Wörterbuch wurde gemäß den Änderungen an der WebGL 1.0-Spezifikation aktualisiert, indem die Unterstützung für die [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) Eigenschaft hinzugefügt wurde. Diese Eigenschaft ist eine Zeichenfolge, die angibt, ob das Anmeldeinformationsfeld ein Passwort oder ein Token ist. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderung._

#### Sonstiges

- [`Cache.add()`](/de/docs/Web/API/Cache/add) und [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) werfen jetzt eine `TypeError` Ausnahme, wenn der Antwortstatus nicht im `200` Bereich liegt ([Firefox Fehler 1244764](https://bugzil.la/1244764)).
- Die App-Installations- und Verwaltungs-APIs (`navigator.mozApps.*`) werden nicht mehr auf Nicht-Firefox-OS-Plattformen angezeigt ([Firefox Fehler 1238576](https://bugzil.la/1238576)).
- Methoden der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) können jetzt den RSA-PSS-Kryptografie-Algorithmus verwenden ([Firefox Fehler 1191936](https://bugzil.la/1191936)).
- Der [Permissions API](/de/docs/Web/API/Permissions_API) wurde die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) hinzugefügt ([Firefox Fehler 1197461](https://bugzil.la/1197461)).
- Die Browser-API, die die Funktionalität von {{htmlelement("iframe")}}s erweitert, um die Erstellung von Frames zur Anzeige von Webinhalten mit HTML zu ermöglichen – und die zuvor nur in Firefox OS verfügbar war – steht jetzt auch dem Chrome-Code auf dem Desktop zur Verfügung ([Firefox Fehler 1238160](https://bugzil.la/1238160)).
- Die Methode [`requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) der [Notification API](/de/docs/Web/API/Notification) wurde von einem Callback auf eine versprochene Syntax aktualisiert ([Firefox Fehler 1241278](https://bugzil.la/1241278)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde auf die neueste Spezifikation aktualisiert und unpräfixiert. Einige Methoden wurden umbenannt oder ihre Großschreibung wurde geändert ([Firefox Fehler 743198](https://bugzil.la/743198)). Beachten Sie, dass dies hinter der `full-screen-api.unprefix.enabled` Einstellung steht, die standardmäßig auf false gesetzt ist ([Firefox Fehler 1268749](https://bugzil.la/1268749)).

### Audio/Video

- Jetzt können WAV-Dateien mit u-law-Komprimierungscodierung abgespielt werden ([Firefox Fehler 851530](https://bugzil.la/851530)).
- Das von Google Inc. bereitgestellte [Widevine](https://www.widevine.com/) Content Decryption Module ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) für die Verwendung mit MP4 (nur; siehe [Firefox Fehler 1257716](https://bugzil.la/1257716) für EME-mit-WebM Unterstützung) auf Windows Vista und später sowie auf Mac OS X verfügbar, was die Migration von Silverlight ermöglicht ([Firefox Fehler 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des {{HTTPHeader("Accept")}} Headers für Bilder ist jetzt `*/*` statt `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox Fehler 1249474](https://bugzil.la/1249474)).

## Netzwerke

_Keine Änderung._

## Sicherheit

- URLs mit dem Protokoll `view-source:` öffnen das [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Tool nicht mehr, wenn sie von einer Webseite aus aufgerufen werden ([Firefox Fehler 1172165](https://bugzil.la/1172165)).
- Die Firefox [Click-to-Activate-Plugin-Whitelist](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) wurde entfernt: nur Flash muss nicht mehr geklickt werden, um aktiviert zu werden ([Firefox Fehler 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on und Mozilla Entwickler

### Schnittstellen

- Der CSS-Tokenizer ist jetzt in JavaScript für Add-ons verfügbar ([Firefox Fehler 1152033](https://bugzil.la/1152033)).

### FUEL

Die in Firefox 3 eingeführte FUEL JavaScript-Bibliothek **wurde entfernt**. Diese Bibliothek wurde entwickelt, um die Entwicklung von Add-ons zu unterstützen, und ist mit der Einführung des Add-on SDK und, jetzt, durch Unterstützung von [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) nicht mehr nützlich ([Firefox Fehler 1090880](https://bugzil.la/1090880)).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
