---
title: Firefox 47 für Entwickler
short-title: Firefox 47
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie die Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/). Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [User-Agent-Spoofing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) aus dem [Responsive-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Retaining Paths Panel](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel) im Speichertool
- Debuggen von [Service Workers](/de/docs/Web/API/ServiceWorker) und der [Push API](/de/docs/Web/API/Push_API)
  - Dashboard [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) für Worker
  - Zwischengespeicherte Anfragen werden nun im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt
  - Unterstützung für [Cache-Speicher](/de/docs/Web/API/Cache) im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)

- Möglichkeit, Einträge im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) zu filtern
- Die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den Mehrzeilenmodus
- Aktualisierte Breakpoint-Stil im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- Verhindern, dass Panels automatisch ausgeblendet werden, indem Sie das [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) verwenden, um Browser- und Add-on-Debugging zu unterstützen
- [Schriftinspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) wurde standardmäßig deaktiviert
- Die [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt
- Aktualisierung des Themas der Entwicklerwerkzeuge
- Deaktivieren des Schrift-Panels ([Firefox-Bug 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderung._

### CSS

- Unterstützung für das {{cssxref("::backdrop")}} Pseudo-Element wurde hinzugefügt ([Firefox-Bug 1064843](https://bugzil.la/1064843)).
- Der case-insensitive Modifikator `i` (wie in `[foo=bar i]`) für [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) wurde implementiert ([Firefox-Bug 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung von CSS-Maskenbild-Eigenschaften wurde eingeführt. Diese wird vorerst nur in Nightly-Versionen von Firefox verfügbar sein. Kurzversion von {{cssxref("mask")}}, sowie {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} sind jetzt verfügbar ([Firefox-Bug 686281](https://bugzil.la/686281)).
- Die {{cssxref("clip-path")}} Eigenschaft unterstützt nun experimentell `polygon()`, `ellipse()` und `circle()` auf HTML-Elementen (unterstützt nicht [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)), hinter dem Pref `layout.css.clip-path-shapes.enabled`, das standardmäßig `false` ist ([Firefox-Bug 1075457](https://bugzil.la/1075457)). Interpolation (und somit Animation) dieser Werte wird noch nicht unterstützt.
- Unsere noch experimentelle Grid-Implementierung wurde aktualisiert:
  - {{cssxref("align-content")}}: `normal` verhält sich jetzt als `stretch` für Grid-Container ([Firefox-Bug 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Spalten/Zeilenwerte für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap` Eigenschaften wurde getauscht ([Firefox-Bug 1251999](https://bugzil.la/1251999)).

- Das {{cssxref("@media/display-mode", "display-mode")}} Medien-Feature wird jetzt unterstützt ([Firefox-Bug 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde in `unsafe` umbenannt ([Firefox-Bug 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017-Methoden {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} wurden implementiert ([Firefox-Bug 1232639](https://bugzil.la/1232639)).
- Die veraltete, alte Proxy-API (`Proxy.create` und `Proxy.createFunction`) zeigt nun eine Deprecation-Warnung in der Konsole an und wird in einer zukünftigen Version entfernt. Verwenden Sie stattdessen das standardmäßige {{jsxref("Proxy")}}-Objekt ([Firefox-Bug 892903](https://bugzil.la/892903)).
- Unterstützung für das veraltete, nicht standardisierte `flags` Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox-Bug 1245801](https://bugzil.la/1245801)).
- Gemäß der neuen ES2016-Spezifikation wurde der {{jsxref("Proxy")}} Enumerierungstrick für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen entfernt ([Firefox-Bug 1246318](https://bugzil.la/1246318)).
- Die {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} Methoden (und ihre {{jsxref("TypedArray")}} Äquivalente) wurden aktualisiert, um niemals `-0` gemäß der ECMAScript-Spezifikation zurückzugeben ([Firefox-Bug 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Das [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) Attribut wurde hinter dem Pref `dom.document.scrollingElement.enabled` implementiert, das standardmäßig `false` ist ([Firefox-Bug 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderung._

#### IndexedDB

- Die Methode [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes) wurde implementiert ([Firefox-Bug 1251498](https://bugzil.la/1251498)).

#### Service Worker und verwandte APIs

- Der [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor kann nun eine `referrer`-Option in seinem Init-Objekt akzeptieren ([Firefox-Bug 1251448](https://bugzil.la/1251448)).
- Die [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) Eigenschaft wird nun unterstützt ([Firefox-Bug 1251872](https://bugzil.la/1251872)).
- [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in der [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/enterprise/) (ESR) deaktiviert ([Firefox-Bug 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das `RTCIceServer`-Wörterbuch wurde im Einklang mit den Überarbeitungen der WebGL 1.0-Spezifikation durch Hinzufügen der Unterstützung für die [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) Eigenschaft aktualisiert. Diese Eigenschaft ist ein String, der angibt, ob das Berechtigungsnachweis ein Passwort oder ein Token ist. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderung._

#### Sonstiges

- [`Cache.add()`](/de/docs/Web/API/Cache/add) und [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) werfen jetzt eine `TypeError`-Ausnahme, wenn der Antwortstatus nicht im `200`-Bereich liegt ([Firefox-Bug 1244764](https://bugzil.la/1244764)).
- Die App-Installations- und Verwaltungs-APIs (`navigator.mozApps.*`) werden nicht mehr für Nicht-Firefox-OS-Plattformen bereitgestellt ([Firefox-Bug 1238576](https://bugzil.la/1238576)).
- Die Methoden der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) können nun den RSA-PSS-Kryptographiealgorithmus verwenden ([Firefox-Bug 1191936](https://bugzil.la/1191936)).
- Die [Permissions API](/de/docs/Web/API/Permissions_API) hat die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) hinzugefügt bekommen ([Firefox-Bug 1197461](https://bugzil.la/1197461)).
- Die Browser-API, die die Funktionalität von {{htmlelement("iframe")}}s erweitert, um die Erstellung von Frames für die Anzeige von Webinhalten mithilfe von HTML zu ermöglichen — und zuvor nur in Firefox OS verfügbar war — ist jetzt auch für Desktop-Chrom-Code verfügbar ([Firefox-Bug 1238160](https://bugzil.la/1238160)).
- Die [`requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) Methode der [Notification API](/de/docs/Web/API/Notification) wurde von einem Callback zu einer Promise-basierten Syntax aktualisiert ([Firefox-Bug 1241278](https://bugzil.la/1241278)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde gemäß der neuesten Spezifikation aktualisiert und ist jetzt unpräfixiert. Einige Methoden wurden umbenannt oder ihre Groß-/Kleinschreibung wurde geändert ([Firefox-Bug 743198](https://bugzil.la/743198)). Beachten Sie, dass dies hinter der Einstellung `full-screen-api.unprefix.enabled` liegt, die standardmäßig false ist ([Firefox-Bug 1268749](https://bugzil.la/1268749)).

### Audio/Video

- Jetzt können WAV-Dateien mit u-law-Komprimierungscodec abgespielt werden ([Firefox-Bug 851530](https://bugzil.la/851530)).
- Das [Widevine](https://www.widevine.com/) Content Decryption Module, bereitgestellt von Google Inc., ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) verfügbar, um mit MP4 (nur; siehe [Firefox-Bug 1257716](https://bugzil.la/1257716) für EME-mit-WebM-Unterstützung) unter Windows Vista und höher sowie auf Mac OS X zu verwenden und so die Migration von Silverlight zu ermöglichen ([Firefox-Bug 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des {{HTTPHeader("Accept")}} Headers für Bilder ist jetzt `*/*` anstatt `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox-Bug 1249474](https://bugzil.la/1249474)).

## Netzwerk

_Keine Änderung._

## Sicherheit

- URLs mit dem `view-source:`-Protokoll öffnen das [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Werkzeug nicht mehr, wenn sie von einer Webseite aus verwendet werden ([Firefox-Bug 1172165](https://bugzil.la/1172165)).
- Die [Click-to-Activate-Plugin-Whitelist von Firefox](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) wurde entfernt: Nur Flash muss nicht angeklickt werden, um aktiviert zu werden ([Firefox-Bug 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

- Der CSS-Tokenizer ist jetzt in JavaScript für Add-ons verfügbar ([Firefox-Bug 1152033](https://bugzil.la/1152033)).

### FUEL

Die FUEL-JavaScript-Bibliothek, eingeführt in Firefox 3, **wurde entfernt**. Diese Bibliothek wurde entwickelt, um die Add-on-Entwicklung zu unterstützen und ist mit der Einführung des Add-on SDKs und jetzt durch die Unterstützung von [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) nicht mehr nützlich ([Firefox-Bug 1090880](https://bugzil.la/1090880)).

### XUL

_Keine Änderung._

### JavaScript-Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Sonstiges

_Keine Änderung._
