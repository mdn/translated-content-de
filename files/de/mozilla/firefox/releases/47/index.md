---
title: Firefox 47 für Entwickler
short-title: Firefox 47
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [User-Agent-Spoofing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) im [Responsive Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Retaining Paths Panel](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel) im Speichertool
- [Service Workers](/de/docs/Web/API/ServiceWorker) und [Push API](/de/docs/Web/API/Push_API) Debugging
  - [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Dashboard für Workers
  - Zwischengespeicherte Anfragen werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt
  - Unterstützung für [Cache-Speicher](/de/docs/Web/API/Cache) im [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)

- Möglichkeit, Einträge im [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) zu filtern
- Die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den Mehrzeilenmodus
- Aktualisierung des Haltepunkts-Stils im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- Verhindern Sie das automatische Ausblenden von Panels mit dem [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html), um Browser- und Add-on-Debugging zu unterstützen
- Der [Schrifteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) wurde standardmäßig deaktiviert
- Die [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt
- Thema der Entwicklerwerkzeuge aktualisiert
- Deaktivieren Sie das Schriftarten-Panel ([Firefox-Bug 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderung._

### CSS

- Unterstützung für das {{cssxref("::backdrop")}} Pseudo-Element wurde hinzugefügt ([Firefox-Bug 1064843](https://bugzil.la/1064843)).
- Der case-unsensitive Modifikator `i` (wie in `[foo=bar i]`) für [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wurde implementiert ([Firefox-Bug 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung von CSS Mask Image-Eigenschaften wurde eingeführt. Vorläufig wird dies nur in Nightly-Versionen von Firefox verfügbar sein: Kurzversion von {{cssxref("mask")}}, sowie {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} sind jetzt verfügbar ([Firefox-Bug 686281](https://bugzil.la/686281)).
- Die {{cssxref("clip-path")}} Eigenschaft unterstützt nun experimentell `polygon()`, `ellipse()` und `circle()` auf HTML-Elementen (unterstützt nicht [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)), hinter der Einstellung `layout.css.clip-path-shapes.enabled`, die standardmäßig auf `false` steht ([Firefox-Bug 1075457](https://bugzil.la/1075457)). Interpolation (und damit Animation) dieser Werte wird noch nicht unterstützt.
- Unsere immer noch experimentelle Grid-Implementierung wurde aktualisiert:
  - {{cssxref("align-content")}}: `normal` verhält sich jetzt wie `stretch` für Grid-Container ([Firefox-Bug 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Spalten/Zeilen-Werte für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap` Eigenschaften wurde vertauscht ([Firefox-Bug 1251999](https://bugzil.la/1251999)).

- Die {{cssxref("@media/display-mode", "display-mode")}} Medienfunktion wird jetzt unterstützt ([Firefox-Bug 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde in `unsafe` umbenannt ([Firefox-Bug 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017 {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} Methoden wurden implementiert ([Firefox-Bug 1232639](https://bugzil.la/1232639)).
- Die veraltete alte Proxy-API (`Proxy.create` und `Proxy.createFunction`) zeigt nun eine Deprecation-Warnung in der Konsole an und wird in einer zukünftigen Version entfernt. Nutzen Sie stattdessen das standardisierte {{jsxref("Proxy")}} Objekt ([Firefox-Bug 892903](https://bugzil.la/892903)).
- Unterstützung für das veraltete, nicht standardmäßige `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox-Bug 1245801](https://bugzil.la/1245801)).
- Gemäß der neuen ES2016-Spezifikation wurde die {{jsxref("Proxy")}} enumerate-Falle für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen entfernt ([Firefox-Bug 1246318](https://bugzil.la/1246318)).
- Die {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} Methoden (und ihre {{jsxref("TypedArray")}} Äquivalente) wurden aktualisiert, um niemals `-0` zurückzugeben, gemäß der ECMAScript-Spezifikation ([Firefox-Bug 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Eigenschaft [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) wurde hinter der Einstellung `dom.document.scrollingElement.enabled` implementiert, die standardmäßig auf `false` gesetzt ist ([Firefox-Bug 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderung._

#### IndexedDB

- Die Methode [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes) wurde implementiert ([Firefox-Bug 1251498](https://bugzil.la/1251498)).

#### Service Worker und verwandte APIs

- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) kann jetzt eine Referrer-Option in seinem Init-Objekt akzeptieren ([Firefox-Bug 1251448](https://bugzil.la/1251448)).
- Die Eigenschaft [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) wird jetzt unterstützt ([Firefox-Bug 1251872](https://bugzil.la/1251872)).
- [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in der [Firefox 45 Extended Support Release](https://www.firefox.com/en-US/browsers/enterprise/) (ESR) deaktiviert ([Firefox-Bug 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das `RTCIceServer` Dictionary wurde gemäß den Überarbeitungen der WebGL 1.0 Spezifikation aktualisiert, indem die Unterstützung für die [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) Eigenschaft hinzugefügt wurde. Diese Eigenschaft ist ein String, der angibt, ob die Berechtigung ein Passwort oder ein Token ist. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderung._

#### Sonstiges

- [`Cache.add()`](/de/docs/Web/API/Cache/add) und [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) werfen jetzt eine `TypeError` Ausnahme, wenn der Antwortstatus nicht im `200` Bereich liegt ([Firefox-Bug 1244764](https://bugzil.la/1244764)).
- Die App-Installations- und Verwaltungs-APIs (`navigator.mozApps.*`) werden auf Nicht-Firefox-OS-Plattformen nicht mehr verfügbar gemacht ([Firefox-Bug 1238576](https://bugzil.la/1238576)).
- Methoden der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) können jetzt den RSA-PSS kryptographischen Algorithmus verwenden ([Firefox-Bug 1191936](https://bugzil.la/1191936)).
- Der [Permissions API](/de/docs/Web/API/Permissions_API) wurde die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) hinzugefügt ([Firefox-Bug 1197461](https://bugzil.la/1197461)).
- Die Browser-API, die die Funktionalität von {{htmlelement("iframe")}}s erweitert, um die Erstellung von Frames zur Anzeige von Webinhalten mittels HTML zu ermöglichen — und zuvor nur in Firefox OS verfügbar war — ist jetzt auch für Desktop-Chromcode verfügbar ([Firefox-Bug 1238160](https://bugzil.la/1238160)).
- Die Methode [`requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) der [Notification API](/de/docs/Web/API/Notification) wurde von einem Callback- zu einem Promise-basierten Syntax aktualisiert ([Firefox-Bug 1241278](https://bugzil.la/1241278)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde auf die neueste Spezifikation aktualisiert und un-präfixiert. Einige Methoden wurden umbenannt oder ihre Groß-/Kleinschreibung wurde geändert ([Firefox-Bug 743198](https://bugzil.la/743198)). Beachten Sie, dass dies hinter der `full-screen-api.unprefix.enabled` Präferenz steht, die standardmäßig auf false gesetzt ist ([Firefox-Bug 1268749](https://bugzil.la/1268749)).

### Audio/Video

- WAV-Dateien mit u-law-Komprimierungscodierung können jetzt abgespielt werden ([Firefox-Bug 851530](https://bugzil.la/851530)).
- Das [Widevine](https://www.widevine.com/) Content Decryption Module, bereitgestellt von Google Inc., ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) für die Verwendung mit MP4 (nur; siehe [Firefox-Bug 1257716](https://bugzil.la/1257716) für EME-mit-WebM-Unterstützung) auf Windows Vista und später sowie auf Mac OS X verfügbar, um die Migration von Silverlight zu ermöglichen ([Firefox-Bug 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des {{HTTPHeader("Accept")}} Headers für Bilder ist nun `*/*` statt `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox-Bug 1249474](https://bugzil.la/1249474)).

## Netzwerke

_Keine Änderung._

## Sicherheit

- URLs mit dem `view-source:` Protokoll öffnen das [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Werkzeug nicht mehr, wenn sie von einer Webseite aus verwendet werden ([Firefox-Bug 1172165](https://bugzil.la/1172165)).
- Die Firefox [Click-to-Activate Plugin-Whitelist](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) wurde entfernt: Nur Flash muss nicht angeklickt werden, um aktiviert zu werden ([Firefox-Bug 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on und Mozilla-Entwickler

### Schnittstellen

- Der CSS-Tokenizer ist jetzt in JavaScript für Add-ons verfügbar ([Firefox-Bug 1152033](https://bugzil.la/1152033)).

### FUEL

Die FUEL-JavaScript-Bibliothek, die in Firefox 3 eingeführt wurde, **wurde entfernt**. Diese Bibliothek wurde entwickelt, um die Add-on-Entwicklung zu unterstützen, und mit der Einführung des Add-on-SDKs und jetzt mit [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) ist sie nicht mehr nützlich ([Firefox-Bug 1090880](https://bugzil.la/1090880)).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._
