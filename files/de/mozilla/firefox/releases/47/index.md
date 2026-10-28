---
title: Firefox 47 – Versionshinweise für Entwickler
short-title: Firefox 47
slug: Mozilla/Firefox/Releases/47
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

[Installieren Sie Firefox Developer Edition, um die neuesten Entwicklerfunktionen von Firefox zu testen](https://www.firefox.com/en-US/channel/desktop/developer/). Firefox 47 wurde am 6. Juni 2016 veröffentlicht. Dieser Artikel führt wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Entwickler von Firefox, Gecko und Add-ons nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- [User-Agent-Spoofing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) über den [Responsive-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [Bereich für Referenzpfade](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators_view/index.html#retaining-paths-panel) im Speicherwerkzeug
- Debugging für [Service Worker](/de/docs/Web/API/ServiceWorker) und die [Push API](/de/docs/Web/API/Push_API)
  - [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Übersicht für Worker
  - Zwischengespeicherte Anfragen werden jetzt im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) angezeigt
  - Unterstützung für den [Cache-Speicher](/de/docs/Web/API/Cache) im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)

- Einträge im [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) können gefiltert werden
- Die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) erkennt jetzt unvollständige Eingaben und wechselt in den mehrzeiligen Modus
- Aktualisierte Darstellung von Haltepunkten im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- Im [Browser-Toolbox](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html) können Sie verhindern, dass Bereiche automatisch ausgeblendet werden, um das Debugging von Browser und Add-ons zu erleichtern
- Der [Schriftarten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) ist standardmäßig deaktiviert
- Die [3D-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) wurde entfernt
- Überarbeitetes Design der Entwicklertools
- Das Schriftarten-Panel wurde deaktiviert ([Firefox-Bug 1247723](https://bugzil.la/1247723)).

### HTML

_Keine Änderungen._

### CSS

- Unterstützung für das Pseudoelement {{cssxref("::backdrop")}} wurde hinzugefügt ([Firefox-Bug 1064843](https://bugzil.la/1064843)).
- Der Modifikator `i` für Vergleiche ohne Berücksichtigung der Groß- und Kleinschreibung (wie in `[foo=bar i]`) wurde für [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) implementiert ([Firefox-Bug 888190](https://bugzil.la/888190)).
- Eine experimentelle Implementierung der CSS-Mask-Image-Eigenschaften wurde hinzugefügt. Derzeit ist sie nur in Nightly-Versionen von Firefox verfügbar: Die Kurzschreibweise {{cssxref("mask")}} sowie {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}} und {{cssxref("mask-size")}} stehen jetzt zur Verfügung ([Firefox-Bug 686281](https://bugzil.la/686281)).
- Die Eigenschaft {{cssxref("clip-path")}} unterstützt auf HTML-Elementen jetzt experimentell `polygon()`, `ellipse()` und `circle()` (nicht jedoch [inset()](https://bugzil.la/1246762) und [path()](https://bugzil.la/1246764)). Voraussetzung ist die Einstellung `layout.css.clip-path-shapes.enabled`, deren Standardwert `false` ist ([Firefox-Bug 1075457](https://bugzil.la/1075457)). Die Interpolation dieser Werte und damit auch ihre Animation wird noch nicht unterstützt.
- Unsere noch experimentelle Grid-Implementierung wurde aktualisiert:
  - {{cssxref("align-content")}}: `normal` verhält sich bei Grid-Containern jetzt wie `stretch` ([Firefox-Bug 1237754](https://bugzil.la/1237754)).
  - Die Reihenfolge der Spalten- und Zeilenwerte für {{cssxref('grid')}}, {{cssxref('grid-template')}} und `grid-gap` wurde vertauscht ([Firefox-Bug 1251999](https://bugzil.la/1251999)).

- Das Medienmerkmal {{cssxref("@media/display-mode", "display-mode")}} wird jetzt unterstützt ([Firefox-Bug 1104916](https://bugzil.la/1104916)).
- Der Wert `true` von {{cssxref("text-align")}} und {{cssxref("text-align-last")}} wurde in `unsafe` umbenannt ([Firefox-Bug 1250342](https://bugzil.la/1250342)).

### JavaScript

- Die neuen ES2017-Methoden {{jsxref("Object.values()")}} und {{jsxref("Object.entries()")}} wurden implementiert ([Firefox-Bug 1232639](https://bugzil.la/1232639)).
- Die veraltete Proxy-API (`Proxy.create` und `Proxy.createFunction`) gibt jetzt eine Warnung über ihre bevorstehende Entfernung in der Konsole aus und wird in einer zukünftigen Version entfernt. Verwenden Sie stattdessen das standardisierte Objekt {{jsxref("Proxy")}} ([Firefox-Bug 892903](https://bugzil.la/892903)).
- Die Unterstützung für das veraltete, nicht standardisierte Argument `flags` von {{jsxref("String.prototype.match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} wurde in Nicht-Release-Builds entfernt ([Firefox-Bug 1245801](https://bugzil.la/1245801)).
- Gemäß der neuen ES2016-Spezifikation wurde die enumerate-Trap von {{jsxref("Proxy")}} für [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Anweisungen entfernt ([Firefox-Bug 1246318](https://bugzil.la/1246318)).
- Die Methoden {{jsxref("Array.prototype.indexOf()")}} und {{jsxref("Array.prototype.lastIndexOf()")}} sowie ihre Entsprechungen für {{jsxref("TypedArray")}} wurden aktualisiert, sodass sie gemäß der ECMAScript-Spezifikation niemals `-0` zurückgeben ([Firefox-Bug 1242043](https://bugzil.la/1242043)).

### Schnittstellen/APIs/DOM

#### DOM und HTML-DOM

- Die Eigenschaft [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) wurde hinter der Einstellung `dom.document.scrollingElement.enabled` implementiert, deren Standardwert `false` ist ([Firefox-Bug 1153322](https://bugzil.la/1153322)).

#### WebGL

_Keine Änderungen._

#### IndexedDB

- Die Methode [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes) wurde implementiert ([Firefox-Bug 1251498](https://bugzil.la/1251498)).

#### Service Worker und zugehörige APIs

- Der Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) kann jetzt eine Referrer-Option in seinem Initialisierungsobjekt entgegennehmen ([Firefox-Bug 1251448](https://bugzil.la/1251448)).
- Die Eigenschaft [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) wird jetzt unterstützt ([Firefox-Bug 1251872](https://bugzil.la/1251872)).
- [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Push](/de/docs/Web/API/Push_API) wurden in [Firefox 45 Extended Support Release](https://www.firefox.com/en-US/enterprise/) (ESR) deaktiviert ([Firefox-Bug 1232029](https://bugzil.la/1232029)).

#### WebRTC

- Die Unterstützung für das Dictionary `RTCIceServer` wurde entsprechend den Überarbeitungen der WebGL-1.0-Spezifikation um die Eigenschaft [credentialType](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#credentialtype) erweitert. Diese Eigenschaft ist ein String, der angibt, ob es sich beim Berechtigungsnachweis um ein Passwort oder ein Token handelt. Derzeit unterstützt Firefox nur `"password"`.

#### Neue APIs

_Keine Änderungen._

#### Sonstiges

- [`Cache.add()`](/de/docs/Web/API/Cache/add) und [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) lösen jetzt eine `TypeError`-Exception aus, wenn der Antwortstatus nicht im `200`-Bereich liegt ([Firefox-Bug 1244764](https://bugzil.la/1244764)).
- Die APIs zur Installation und Verwaltung von Apps (`navigator.mozApps.*`) sind auf Plattformen außerhalb von Firefox OS nicht mehr verfügbar ([Firefox-Bug 1238576](https://bugzil.la/1238576)).
- Methoden der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) können jetzt den kryptografischen Algorithmus RSA-PSS verwenden ([Firefox-Bug 1191936](https://bugzil.la/1191936)).
- Der [Permissions API](/de/docs/Web/API/Permissions_API) wurde die Methode [`Permissions.revoke()`](/de/docs/Web/API/Permissions/revoke) hinzugefügt ([Firefox-Bug 1197461](https://bugzil.la/1197461)).
- Die Browser API erweitert die Funktionalität von {{htmlelement("iframe")}}-Elementen, sodass Frames zur Anzeige von Webinhalten mit HTML erstellt werden können. Sie war bisher nur in Firefox OS verfügbar und steht jetzt auch Desktop-Chrome-Code zur Verfügung ([Firefox-Bug 1238160](https://bugzil.la/1238160)).
- Die Methode [`requestPermission()`](/de/docs/Web/API/Notification/requestPermission_static) der [Notification API](/de/docs/Web/API/Notification) wurde von einer Callback-basierten auf eine Promise-basierte Syntax umgestellt ([Firefox-Bug 1241278](https://bugzil.la/1241278)).
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurde an die neueste Spezifikation angepasst und kann jetzt ohne Präfix verwendet werden. Einige Methoden wurden umbenannt oder ihre Groß- und Kleinschreibung wurde geändert ([Firefox-Bug 743198](https://bugzil.la/743198)). Beachten Sie, dass dies von der Einstellung `full-screen-api.unprefix.enabled` abhängt, deren Standardwert `false` ist ([Firefox-Bug 1268749](https://bugzil.la/1268749)).

### Audio/Video

- WAV-Dateien mit u-law-Komprimierung können jetzt abgespielt werden ([Firefox-Bug 851530](https://bugzil.la/851530)).
- Das von Google Inc. bereitgestellte [Widevine](https://www.widevine.com/) Content Decryption Module ist über die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) für MP4 verfügbar (ausschließlich MP4; zur EME-Unterstützung für WebM siehe [Firefox-Bug 1257716](https://bugzil.la/1257716)). Es kann unter Windows Vista und höher sowie unter Mac OS X verwendet werden und ermöglicht die Abkehr von Silverlight ([Firefox-Bug 1265270](https://bugzil.la/1265270)).

## HTTP

- Der Standardwert des Headers {{HTTPHeader("Accept")}} für Bilder lautet jetzt `*/*` statt `image/png,image/*;q=0.8,*/*;q=0.5` ([Firefox-Bug 1249474](https://bugzil.la/1249474)).

## Netzwerk

_Keine Änderungen._

## Sicherheit

- URLs mit dem Protokoll `view-source:` öffnen das Werkzeug [Quelltext anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) nicht mehr, wenn sie von einer Webseite aus verwendet werden ([Firefox-Bug 1172165](https://bugzil.la/1172165)).
- Die [Click-to-activate-Whitelist für Plugins](https://blog.mozilla.org/futurereleases/2013/09/24/plugin-activation-in-firefox/) in Firefox wurde entfernt: Nur Flash muss zur Aktivierung nicht angeklickt werden ([Firefox-Bug 1263630](https://bugzil.la/1263630)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellen

- Der CSS-Tokenizer steht Add-ons jetzt in JavaScript zur Verfügung ([Firefox-Bug 1152033](https://bugzil.la/1152033)).

### FUEL

Die JavaScript-Bibliothek FUEL, die mit Firefox 3 eingeführt wurde, **wurde entfernt**. Sie sollte die Add-on-Entwicklung erleichtern. Seit der Einführung des Add-on SDK und der Unterstützung für [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) ist sie nicht mehr nützlich. ([Firefox-Bug 1090880](https://bugzil.la/1090880))

### XUL

_Keine Änderungen._

### JavaScript-Code-Module

_Keine Änderungen._

### XPCOM

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._
