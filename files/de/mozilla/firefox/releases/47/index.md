---
title: Firefox 47 für Entwickler
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [User-Agent-Spoofing](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent) im [Responsive-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Beibehaltung von Pfaden im Speicher-Tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel)
- Debugging von [Service Workern](/de/docs/Web/API/ServiceWorker) und [Push API](/de/docs/Web/API/Push_API)

  - [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Dashboard für Worker
  - Zwischengespeicherte Anfragen werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt
  - Unterstützung für [Cache-Speicher](/de/docs/Web/API/Cache) im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)

- Möglichkeit zur Filterung von Einträgen im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den Mehrzeilenmodus
- Aktualisierter Haltepunkt-Stil im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- Verhindern Sie, dass Panels automatisch ausgeblendet werden, indem Sie das [Browser Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) verwenden, um das Debugging von Browsern und Add-ons zu unterstützen
- [Schriftinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) wurde standardmäßig deaktiviert
- [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt
- Aktualisierungsthema der Entwicklerwerkzeuge
- Deaktivieren Sie das Schrift-Panel ([Firefox Bug 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderung._

### CSS

- Unterstützung für das {{cssxref("::backdrop")}} Pseudo-Element wurde hinzugefügt ([Firefox Bug 1064843](https://bugzil.la/1064843)).
- Der Modifikator `i`, der die Groß-/Kleinschreibung ignoriert (wie in `[foo=bar i]`) für [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors), wurde implementiert ([Firefox Bug 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung von CSS-Maskenbild-Eigenschaften wurde eingeführt. Vorläufig wird dies nur in Nightly-Versionen von Firefox verfügbar sein: Die Kurzformversion von {{cssxref("mask")}}, sowie {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} sind jetzt verfügbar ([Firefox Bug 686281](https://bugzil.la/686281)).
- Die {{cssxref("clip-path")}} Eigenschaft unterstützt nun experimentell `polygon()`, `ellipse()` und `circle()` auf HTML-Elementen (unterstützt nicht [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)), hinter der Voreinstellung `layout.css.clip-path-shapes.enabled`, die standardmäßig auf `false` gesetzt ist ([Firefox Bug 1075457](https://bugzil.la/1075457)). Interpolation (und daher Animation) dieser Werte wird noch nicht unterstützt.
- Unsere noch experimentelle Gitter-Implementierung wurde aktualisiert:

  - {{cssxref("align-content")}}: `normal` verhält sich jetzt wie `stretch` für Gittercontainer ([Firefox Bug 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Werte für Spalten/Zeilen für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap` Eigenschaften wurde getauscht ([Firefox Bug 1251999](https://bugzil.la/1251999)).

- Das {{cssxref("@media/display-mode", "display-mode")}} Medienmerkmal wird nun unterstützt ([Firefox Bug 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde in `unsafe` umbenannt ([Firefox Bug 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017 {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} Methoden wurden implementiert ([Firefox Bug 1232639](https://bugzil.la/1232639)).
- Die veraltete, alte Proxy-API (`Proxy.create` und `Proxy.createFunction`) zeigt nun eine Veraltungswarnung in der Konsole an und wird in einer zukünftigen Version entfernt. Verwenden Sie stattdessen das Standard-{{jsxref("Proxy")}} Objekt ([Firefox Bug 892903](https://bugzil.la/892903)).
- Unterstützung für das veraltete, nicht standardmäßige `flags` Argument von `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox Bug 1245801](https://bugzil.la/1245801)).
- Gemäß der neuen ES2016-Spezifikation wurde die enumerate-Fangeigenschaft des {{jsxref("Proxy")}} für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen entfernt ([Firefox Bug 1246318](https://bugzil.la/1246318)).
- Die {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} Methoden (und ihre {{jsxref("TypedArray")}} Äquivalente) wurden aktualisiert, um niemals `-0` zurückzugeben, gemäß der ECMAScript-Spezifikation ([Firefox Bug 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Eigenschaft {{domxref("Document.scrollingElement")}} wurde hinter der Voreinstellung `dom.document.scrollingElement.enabled` implementiert, die standardmäßig `false` ist ([Firefox Bug 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderung._

#### IndexedDB

- Die Methode {{domxref("IDBKeyRange.includes()")}} wurde implementiert ([Firefox Bug 1251498](https://bugzil.la/1251498)).

#### Service Worker und verwandte APIs

- Der {{domxref("Request.Request", "Request()")}} Konstruktor kann jetzt eine Referrer-Option in seinem Init-Objekt akzeptieren ([Firefox Bug 1251448](https://bugzil.la/1251448)).
- Die Eigenschaft {{domxref("Request.referrerPolicy")}} wird nun unterstützt ([Firefox Bug 1251872](https://bugzil.la/1251872)).
- [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in der [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/enterprise/) (ESR) deaktiviert ([Firefox Bug 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das `RTCIceServer` Wörterbuch wurde entsprechend den Revisionen der WebGL 1.0 Spezifikation aktualisiert, indem die Unterstützung für die [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) Eigenschaft hinzugefügt wurde. Diese Eigenschaft ist ein String, der angibt, ob die Berechtigung ein Passwort oder ein Token ist. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderung._

#### Sonstiges

- {{domxref("Cache.add()")}} und {{domxref("Cache.addAll()")}} lösen jetzt eine `TypeError` Ausnahme aus, wenn der Antwortstatus nicht im `200` Bereich liegt ([Firefox Bug 1244764](https://bugzil.la/1244764)).
- Die App-Installations- und Verwaltungs-APIs (`navigator.mozApps.*`) werden auf Nicht-Firefox OS-Plattformen nicht mehr angeboten ([Firefox Bug 1238576](https://bugzil.la/1238576)).
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) Methoden können jetzt den RSA-PSS-Kryptographiealgorithmus verwenden ([Firefox Bug 1191936](https://bugzil.la/1191936)).
- Der [Permissions API](/de/docs/Web/API/Permissions_API) wurde die Methode {{domxref("Permissions.revoke()")}} hinzugefügt ([Firefox Bug 1197461](https://bugzil.la/1197461)).
- Die Browser-API, die die Funktionalität von {{htmlelement("iframe")}}s erweitert, um die Erstellung von Frames zur Darstellung von Webinhalten mit HTML zu ermöglichen – und die zuvor nur in Firefox OS verfügbar war – ist jetzt auch für Desktop-Chrome-Code verfügbar ([Firefox Bug 1238160](https://bugzil.la/1238160)).
- Die {{domxref("Notification/requestPermission_static","requestPermission()")}} Methode der [Notification API](/de/docs/Web/API/Notification) wurde von einer Rückruffunktion zu einer versprochenbasierten Syntax aktualisiert ([Firefox Bug 1241278](https://bugzil.la/1241278)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde auf die neueste Spezifikation aktualisiert und unpräfixiert. Einige Methoden wurden umbenannt oder ihre Großschreibung geändert ([Firefox Bug 743198](https://bugzil.la/743198)). Beachten Sie, dass dies hinter der `full-screen-api.unprefix.enabled` Voreinstellung steht, die standardmäßig auf false gesetzt ist ([Firefox Bug 1268749](https://bugzil.la/1268749)).

### Audio/Video

- Nun können WAV-Dateien mit u-law Komprimierungscodierung abgespielt werden ([Firefox Bug 851530](https://bugzil.la/851530)).
- Das von Google Inc. bereitgestellte [Widevine](https://www.widevine.com/) Content Decryption Module ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) für die Verwendung mit MP4 (nur; siehe [Firefox Bug 1257716](https://bugzil.la/1257716) für EME-mit-WebM Unterstützung) auf Windows Vista und später und auf Mac OS X verfügbar und ermöglicht die Migration von Silverlight ([Firefox Bug 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des {{HTTPHeader("Accept")}} Headers für Bilder ist jetzt `*/*` anstelle von `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox Bug 1249474](https://bugzil.la/1249474)).

## Netzwerke

_Keine Änderung._

## Sicherheit

- URLs mit dem `view-source:` Protokoll öffnen nicht mehr das [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Werkzeug, wenn sie von einer Webseite verwendet werden ([Firefox Bug 1172165](https://bugzil.la/1172165)).
- Die Firefox [Click-to-Activate Plugin-Whitelist](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) wurde entfernt: nur Flash muss nicht geklickt werden, um aktiviert zu werden ([Firefox Bug 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

- Der CSS-Tokenizer ist jetzt in JavaScript für Add-ons verfügbar ([Firefox Bug 1152033](https://bugzil.la/1152033)).

### FUEL

Die FUEL-JavaScript-Bibliothek, die in Firefox 3 eingeführt wurde, **wurde entfernt**. Diese Bibliothek wurde entwickelt, um die Entwicklung von Add-ons zu unterstützen, und mit der Einführung des Add-on-SDK und jetzt durch die Unterstützung von [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) ist sie nicht mehr nützlich. ([Firefox Bug 1090880](https://bugzil.la/1090880))

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
