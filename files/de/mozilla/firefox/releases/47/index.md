---
title: Firefox 47 für Entwickler
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

[Um die neuesten Entwicklerfunktionen von Firefox zu testen, installieren Sie Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- [User-Agent-Spoofing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) aus dem [Responsive Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
- [Bereithalten des Pfade-Panels](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel) im Speichertool.
- Debugging von [Service-Workern](/de/docs/Web/API/ServiceWorker) und [Push-API](/de/docs/Web/API/Push_API).
  - [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Dashboard für Worker.
  - Zwischengespeicherte Anfragen werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt.
  - Unterstützung für [Cache-Speicher](/de/docs/Web/API/Cache) im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html).

- Möglichkeit zum Filtern von Einträgen im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html).
- Die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den Mehrzeilenmodus.
- Aktualisierter Breakpoint-Stil im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html).
- Verhindern Sie, dass sich Panels automatisch verstecken, indem Sie das [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) verwenden, um Browser- und Add-on-Debugging zu unterstützen.
- Der [Schrifteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) wurde standardmäßig deaktiviert.
- Die [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt.
- Aktualisierung des Entwicklerwerkzeuge-Themes.
- Deaktivieren Sie das Schriften-Panel ([Firefox-Fehler 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderung._

### CSS

- Unterstützung für das {{cssxref("::backdrop")}} Pseudoelement wurde hinzugefügt ([Firefox-Fehler 1064843](https://bugzil.la/1064843)).
- Der fallunabhängige Modifikator `i` (wie in `[foo=bar i]`) für [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wurde implementiert ([Firefox-Fehler 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung der CSS-Mask-Image-Eigenschaften wurde hinzugefügt. Vorläufig wird dies nur in Nightly-Versionen von Firefox verfügbar sein. {{cssxref("mask")}} und die Kurzversionen {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-size")}} sind jetzt verfügbar ([Firefox-Fehler 686281](https://bugzil.la/686281)).
- Die {{cssxref("clip-path")}} Eigenschaft unterstützt jetzt experimentell `polygon()`, `ellipse()` und `circle()` auf HTML-Elementen (unterstützt nicht [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)), hinter der Voreinstellung `layout.css.clip-path-shapes.enabled`, die standardmäßig auf `false` gesetzt ist ([Firefox-Fehler 1075457](https://bugzil.la/1075457)). Interpolation (und damit Animation) dieser Werte wird noch nicht unterstützt.
- Unsere weiterhin experimentelle Grid-Implementierung wurde aktualisiert:
  - {{cssxref("align-content")}}: `normal` verhält sich nun wie `stretch` für Grid-Container ([Firefox-Fehler 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Spalten-/Zeilenwerte für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap`-Eigenschaften wurde vertauscht ([Firefox-Fehler 1251999](https://bugzil.la/1251999)).

- Die {{cssxref("@media/display-mode", "display-mode")}} Media-Feature wird jetzt unterstützt ([Firefox-Fehler 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde in `unsafe` umbenannt ([Firefox-Fehler 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017 {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} Methoden wurden implementiert ([Firefox-Fehler 1232639](https://bugzil.la/1232639)).
- Die veraltete, alte Proxy-API (`Proxy.create` und `Proxy.createFunction`) zeigt jetzt eine Deprecation-Warnung in der Konsole und wird in einer zukünftigen Version entfernt. Verwenden Sie stattdessen das Standard-{{jsxref("Proxy")}}-Objekt ([Firefox-Fehler 892903](https://bugzil.la/892903)).
- Unterstützung für das veraltete nicht standardisierte `flags`-Argument von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox-Fehler 1245801](https://bugzil.la/1245801)).
- Gemäß der neuen ES2016-Spezifikation wurde das {{jsxref("Proxy")}} Enumerations-Fangverhalten für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Anweisungen entfernt ([Firefox-Fehler 1246318](https://bugzil.la/1246318)).
- Die {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} Methoden (und deren {{jsxref("TypedArray")}}-Äquivalente) wurden aktualisiert, um niemals `-0` gemäß der ECMAScript-Spezifikation zurückzugeben ([Firefox-Fehler 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM & HTML DOM

- Die Eigenschaft [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) wurde hinter der Voreinstellung `dom.document.scrollingElement.enabled`, die standardmäßig auf `false` gesetzt ist, implementiert ([Firefox-Fehler 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderung._

#### IndexedDB

- Die Methode [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes) wurde implementiert ([Firefox-Fehler 1251498](https://bugzil.la/1251498)).

#### Service Worker und verwandte APIs

- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) kann nun eine Referrer-Option in seinem Init-Objekt akzeptieren ([Firefox-Fehler 1251448](https://bugzil.la/1251448)).
- Die Eigenschaft [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) wird jetzt unterstützt ([Firefox-Fehler 1251872](https://bugzil.la/1251872)).
- [Service-Worker](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in der [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/enterprise/) (ESR) deaktiviert ([Firefox-Fehler 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das `RTCIceServer`-Wörterbuch wurde entsprechend der Überarbeitung der WebGL 1.0-Spezifikation aktualisiert, indem die Unterstützung für die [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) Eigenschaft hinzugefügt wurde. Diese Eigenschaft ist ein String, der angibt, ob die Berechtigung ein Passwort oder ein Token ist. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderung._

#### Weitere

- [`Cache.add()`](/de/docs/Web/API/Cache/add) und [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) lösen jetzt eine `TypeError`-Ausnahme aus, wenn der Antwortstatus nicht im Bereich `200` liegt ([Firefox-Fehler 1244764](https://bugzil.la/1244764)).
- Die App-Installations- und Verwaltungs-APIs (`navigator.mozApps.*`) werden auf Nicht-Firefox-OS-Plattformen nicht mehr angezeigt ([Firefox-Fehler 1238576](https://bugzil.la/1238576)).
- [Web-Kryptografie-API](/de/docs/Web/API/Web_Crypto_API)-Methoden können jetzt den kryptografischen Algorithmus RSA-PSS verwenden ([Firefox-Fehler 1191936](https://bugzil.la/1191936)).
- Die [Berechtigungen-API](/de/docs/Web/API/Permissions_API) hat die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) hinzugefügt ([Firefox-Fehler 1197461](https://bugzil.la/1197461)).
- Die Browser-API, die die Funktionalität von {{htmlelement("iframe")}}s erweitert, um Frames zur Anzeige von Webinhalten mit HTML zu erstellen - und zuvor nur in Firefox OS verfügbar war - ist jetzt auch für den Desktop-Chrome-Code verfügbar ([Firefox-Fehler 1238160](https://bugzil.la/1238160)).
- Die Methode [`requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) der [Benachrichtigungs-API](/de/docs/Web/API/Notification) wurde von einem Callback zu einer auf Versprechen basierten Syntax aktualisiert ([Firefox-Fehler 1241278](https://bugzil.la/1241278)).
- Die [Vollbild-API](/de/docs/Web/API/Fullscreen_API) wurde auf die neueste Spezifikation aktualisiert und nicht mehr mit Präfix versehen. Einige Methoden wurden umbenannt oder ihre Großschreibung geändert ([Firefox-Fehler 743198](https://bugzil.la/743198)). Beachten Sie, dass dies hinter der Voreinstellung `full-screen-api.unprefix.enabled`, die standardmäßig auf false gesetzt ist, geschieht ([Firefox-Fehler 1268749](https://bugzil.la/1268749)).

### Audio/Video

- Jetzt können WAV-Dateien mit u-law-Komprimierungscodierung abgespielt werden ([Firefox-Fehler 851530](https://bugzil.la/851530)).
- [Widevine](https://www.widevine.com/) Content Decryption Module, bereitgestellt von Google Inc., ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) für die Verwendung mit MP4 (nur; siehe [Firefox-Fehler 1257716](https://bugzil.la/1257716) für EME-mit-WebM-Unterstützung) auf Windows Vista und später sowie auf Mac OS X verfügbar, wodurch die Migration von Silverlight ermöglicht wird ([Firefox-Fehler 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des {{HTTPHeader("Accept")}} Headers für Bilder ist jetzt `*/*` statt `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox-Fehler 1249474](https://bugzil.la/1249474)).

## Netzwerken

_Keine Änderung._

## Sicherheit

- URLs mit dem `view-source:` Protokoll öffnen das [View Source](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) Werkzeug nicht mehr, wenn sie von einer Webseite aus verwendet werden ([Firefox-Fehler 1172165](https://bugzil.la/1172165)).
- Die Firefox [Click-to-Activate-Plugin-Whitelist](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) wurde entfernt: Nur Flash muss nicht angeklickt werden, um aktiviert zu werden ([Firefox-Fehler 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

- Der CSS-Tokenizer ist jetzt in JavaScript für Add-ons verfügbar ([Firefox-Fehler 1152033](https://bugzil.la/1152033)).

### FUEL

Die FUEL-JavaScript-Bibliothek, die ursprünglich in Firefox 3 eingeführt wurde, **wurde entfernt**. Diese Bibliothek war dazu gedacht, die Add-on-Entwicklung zu unterstützen und ist mit der Einführung des Add-on SDKs und jetzt durch die Unterstützung von [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) nicht mehr nützlich. ([Firefox-Fehler 1090880](https://bugzil.la/1090880))

### XUL

_Keine Änderung._

### JavaScript Code-Module

_Keine Änderung._

### XPCOM

_Keine Änderung._

### Weitere

_Keine Änderung._

## Ältere Versionen

{{Firefox_for_developers}}
