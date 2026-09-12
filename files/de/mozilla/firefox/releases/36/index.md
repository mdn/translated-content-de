---
title: Firefox-36-Versionshinweise für Entwickler
short-title: Firefox 36
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Firefox 36 wurde am 24. Februar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Highlights:

- [eval-Quellen erscheinen jetzt im Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Vereinfachter Prozess zur Verbindung mit Firefox für Android](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Der Box-Model-Highlighter funktioniert auf Remote-Zielen.
- [Option „Invert the call tree“ im Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [DOM-Promises in der Konsole untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Zusätzliche „Paste“-Befehle im Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle zwischen Firefox 35 und Firefox 36 behobenen Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- Die Eigenschaft {{cssxref("will-change")}} wurde standardmäßig aktiviert ([Firefox-Bug 961871](https://bugzil.la/961871)).
- Die Eigenschaft {{cssxref("white-space")}} funktioniert jetzt auf {{HTMLElement("textarea")}}-HTML-Elementen ([Firefox-Bug 82711](https://bugzil.la/82711)).
- Der Deskriptor {{cssxref("@font-face/unicode-range", "unicode-range")}} wird jetzt von {{cssxref("@font-face")}} unterstützt ([Firefox-Bug 475891](https://bugzil.la/475891)), ist jedoch nicht standardmäßig aktiviert.
- Die Eigenschaften {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} sind ohne Präfix verfügbar ([Firefox-Bug 825004](https://bugzil.la/825004)). Die Versionen mit Präfix bleiben zur Erleichterung des Übergangs noch einige Zeit verfügbar ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die Eigenschaft {{cssxref("text-decoration")}} wurde in eine Kurzformeigenschaft umgewandelt ([Firefox-Bug 1039488](https://bugzil.la/1039488)).
- Die Eigenschaften {{cssxref("object-fit")}} und {{cssxref("object-position")}} werden jetzt unterstützt ([Firefox-Bug 624647](https://bugzil.la/624647)).
- Der Wert `contents` der Eigenschaft {{cssxref("display")}} wurde experimentell implementiert. Er ist standardmäßig per Preference deaktiviert ([Firefox-Bug 907396](https://bugzil.la/907396)).
- Im [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) wurde der [`:active`- und `:hover`-Quiver-Quirk](https://web.archive.org/web/20210414153205/https://developer.mozilla.org/de/docs/Mozilla/Mozilla_quirks_mode_behavior#Miscellaneous_.26_Style) so geändert, dass er seltener angewendet wird: Er wird jetzt nur für Links verwendet, nur wenn das Element keine Pseudoelemente oder andere Pseudoklassen enthält und wenn es nicht Teil eines Pseudoklassenelements ist ([Firefox-Bug 783213](https://bugzil.la/783213)).
- Die Eigenschaft {{cssxref("isolation")}} wurde implementiert ([Firefox-Bug 1077872](https://bugzil.la/1077872)).
- CSS-{{cssxref("&lt;gradient&gt;")}} wird jetzt auf die vormultiplizierten Farben angewendet, entsprechend der Spezifikation und anderer Browser, wodurch darin auftretende unerwartete graue Farben vermieden werden ([Firefox-Bug 591600](https://bugzil.la/591600)).
- Die Syntax für Interpolationshinweise wurde zu {{cssxref("&lt;gradient&gt;")}} hinzugefügt ([Firefox-Bug 1074056](https://bugzil.la/1074056)).
- Die Eigenschaft {{cssxref("scroll-behavior")}} wurde implementiert ([Firefox-Bug 1010538](https://bugzil.la/1010538)).

### HTML

- Unterstützung für [`<meta name="referrer">`](/de/docs/Web/HTML/Reference/Elements/meta) wurde hinzugefügt ([Firefox-Bug 704320](https://bugzil.la/704320)).
- In Firefox werden die im Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) angegebenen {{HTMLElement("input")}}-Filter immer standardmäßig ausgewählt, sofern das Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) keinen unbekannten Wert enthält, also keinen unbekannten MIME-Typ oder falsch formatierten Wert. Zuvor wurden angegebene Filter nur für die Werte `image/*`, `video/*` und `audio/*` standardmäßig ausgewählt ([Firefox-Bug 826185](https://bugzil.la/826185)).

### JavaScript

- Der Datentyp Symbol aus [ECMAScript 2015](https://web.archive.org/web/20210612110055/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) wurde standardmäßig aktiviert (seit Version 33 im Nightly-Kanal verfügbar) ([Firefox-Bug 1066322](https://bugzil.la/1066322)):
  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- Der alte Platzhalter-String `"@@iterator"` wurde für den Schlüssel der Eigenschaft der [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Schnittstelle durch das tatsächliche wohlbekannte ES2015-Symbol {{jsxref("Symbol.iterator")}} ersetzt ([Firefox-Bug 918828](https://bugzil.la/918828)).
- Die spezifikationsinterne abstrakte Operation `ToNumber(string)` unterstützt jetzt binäre (`0b`) und oktale (`0o`) Literale. Dies ist eine potenziell inkompatible Änderung gegenüber ES5 ([Firefox-Bug 1079120](https://bugzil.la/1079120)).
  - `Number("0b11")` gibt jetzt `3` statt `NaN` zurück.
  - `"0o11" == 9` gibt jetzt `true` statt `false` zurück.

- Die Deklaration [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) ist jetzt auf Blockebene gültig und erfordert einen Initialisierer ([Firefox-Bug 611388](https://bugzil.la/611388)). Sie kann außerdem nicht mehr erneut deklariert werden ([Firefox-Bug 1095439](https://bugzil.la/1095439)).
  - `{const a=1}; a;` löst jetzt aufgrund der Blockbereichsgültigkeit einen {{jsxref("ReferenceError")}} aus und gibt nicht mehr `1` zurück.
  - `const a;` löst jetzt einen {{jsxref("SyntaxError")}} aus („missing = in const declaration“): Ein Initialisierer ist erforderlich.
  - `const a = 1; a = 2;` löst jetzt ebenfalls einen {{jsxref("SyntaxError")}} aus („invalid assignment to const a“).

- Die ES2016-Methode {{jsxref("Array.prototype.includes")}} wurde implementiert, ist derzeit jedoch nur in Nightly-Builds aktiviert ([Firefox-Bug 1069063](https://bugzil.la/1069063)).
- Der Operator [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) löst jetzt die „[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)“ aus, wenn er mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwendet wird ([Firefox-Bug 1074571](https://bugzil.la/1074571)).
- Die nicht standardmäßigen [`let`-Blöcke und `let`-Ausdrücke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) sind veraltet und protokollieren jetzt eine Warnung in der Konsole. Verwenden Sie sie nicht mehr, da sie künftig entfernt werden.
- Der Konstruktor [WeakMap](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) verarbeitet jetzt ein optionales iterierbares Argument ([Firefox-Bug 1092537](https://bugzil.la/1092537)).

### Schnittstellen/APIs/DOM

- Die Methode [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform) der Canvas API wurde implementiert ([Firefox-Bug 1099148](https://bugzil.la/1099148)).
- ECDSA wird jetzt in der Web Crypto API unterstützt ([Firefox-Bug 1034854](https://bugzil.la/1034854)).
- Unsere experimentelle Implementierung von WebGL 2.0 macht Fortschritte!
  - Die Schnittstelle [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) ist verfügbar ([Firefox-Bug 1048719](https://bugzil.la/1048719)).
  - Die Methode [`WebGL2RenderingContext.invalidateFrameBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer) wurde implementiert ([Firefox-Bug 1076456](https://bugzil.la/1076456)).

- Die Schnittstelle [`MediaDevices`](/de/docs/Web/API/MediaDevices), die die Promise-basierte Version von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) enthält, wurde hinzugefügt. Sie ist über [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verfügbar ([Firefox-Bug 1033885](https://bugzil.la/1033885)).
- Die EME-bezogene Methode [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) sowie das zugehörige [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) werden jetzt unterstützt ([Firefox-Bug 1095257](https://bugzil.la/1095257)).
- Das Ereignis [`keyschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event) wird jetzt gesendet, wenn ein EME-bezogenes CDM Schlüssel in einer Sitzung ändert ([Firefox-Bug 1081755](https://bugzil.la/1081755)).
- Die Standardwerte der Optionen für [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Experimentelle Unterstützung für Virtual-Reality-Geräte wurde hinter der standardmäßig deaktivierten Preference `dom.vr.enabled` hinzugefügt ([Firefox-Bug 1036604](https://bugzil.la/1036604)).
- Die mit [`RTCPeerConnection.onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) verknüpfte Funktion erhält jetzt gemäß Spezifikation ein Ereignis als Parameter ([Firefox-Bug 1075133](https://bugzil.la/1075133)).
- Die experimentelle Implementierung von Web Animations macht Fortschritte: Die Methoden [`AnimationPlayer.play()`](/de/docs/Web/API/Animation/play) und [`AnimationPlayer.pause()`](/de/docs/Web/API/Animation/pause) werden jetzt unterstützt ([Firefox-Bug 1070745](https://bugzil.la/1070745)), ebenso wie [`AnimationPlayer.playState`](/de/docs/Web/API/Animation/playState) ([Firefox-Bug 1037321](https://bugzil.la/1037321)).
- Die nicht standardmäßige Schnittstelle `DOMRequest` verfügt jetzt über eine Methode `DOMRequest.then()` ([Firefox-Bug 839838](https://bugzil.la/839838)).
- Die Methoden zur Steuerung des Scroll-Verhaltens aus CSSOM View, [`Element.scroll()`](/de/docs/Web/API/Element/scroll), [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo), [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) und [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView), wurden implementiert oder erweitert ([Firefox-Bug 1045754](https://bugzil.la/1045754) und [Firefox-Bug 1087559](https://bugzil.la/1087559)).
- Eine Zuweisung an [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) eines [`SVGElement`](/de/docs/Web/API/SVGElement) erstellt jetzt Elemente im SVG-Namensraum ([Firefox-Bug 886390](https://bugzil.la/886390)).
- Die Methode `nsIWebBrowserPersist.saveURI()` erfordert jetzt 8 Argumente in einer Reihenfolge, die mit früheren Versionen nicht kompatibel ist.
- Die Unterstützung für Media Source Extensions (MSE) ist in nicht veröffentlichten Builds standardmäßig aktiviert (nur Nightly und Developer Edition) ([Firefox-Bug 1000686](https://bugzil.la/1000686)). In Beta- und Release-Versionen bleibt sie per Preference deaktiviert.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

- Die Unterstützung für SPDY/3 wurde entfernt; die Unterstützung für SPDY/3.1 ist weiterhin verfügbar ([Firefox-Bug 1097944](https://bugzil.la/1097944)).

## Sicherheit

- RC4 gilt jetzt als unsicher, und alle UI-Indikatoren reagieren entsprechend; SSLv3 wurde in Firefox 34 standardmäßig deaktiviert, aber die UI wurde geändert, damit Benutzer besser verstehen, was geschieht ([Firefox-Bug 1093595](https://bugzil.la/1093595)).
- Außerdem wird RC4 beim anfänglichen TLS-Handshake nicht mehr angeboten ([Firefox-Bug 1088915](https://bugzil.la/1088915)).
- Die Direktive [`form-action`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action) von CSP 1.1 wird jetzt unterstützt ([Firefox-Bug 529697](https://bugzil.la/529697)).
- In den Firefox-Einstellungen ist das Auswahl-Widget [Do Not Track](/de/docs/Web/HTTP/Reference/Headers/DNT) wieder ein Ein-/Aus-Schalter ([Firefox-Bug 1071747](https://bugzil.la/1071747)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

#### Highlights

- Das Modul [`sdk/test/httpd`](https://web.archive.org/web/20160422002127/https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/test_httpd) wurde entfernt; verwenden Sie stattdessen das npm-Modul [addon-httpd](https://www.npmjs.com/package/addon-httpd).
- Badges zu [`sdk/ui`](https://web.archive.org/web/20210216154222/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/ui)-Schaltflächen hinzufügen ([Firefox-Bug 994280](https://bugzil.la/994280)).
- Eine globale Funktion `require` wurde implementiert, um überall auf SDK-Module zuzugreifen ([Firefox-Bug 1070927](https://bugzil.la/1070927)), mittels:

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Details

[GitHub-Commits zwischen Firefox 35 und Firefox 36](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### JavaScript-Code-Module

- `PromiseUtils.resolveOrTimeout` wurde implementiert ([Firefox-Bug 1080466](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (ein Ersatz für `Promise.defer()`) wurde implementiert ([Firefox-Bug 1093021](https://bugzil.la/1093021)).

### Schnittstellen

#### nsIContentPolicy

Zu `nsIContentPolicy` wurden neue Konstanten hinzugefügt, damit Gecko-Interna und Add-on-Code verschiedene Arten von Anfragen besser unterscheiden können. Dies sind:

- `TYPE_FETCH`
  - : Kennzeichnet eine durch die Methode [`fetch()`](/de/docs/Web/API/Window/fetch) initiierte Anfrage zum Laden von Inhalt.
- `TYPE_IMAGESET`
  - : Kennzeichnet eine Anfrage zum Laden eines {{HTMLElement("img")}} (mit dem Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) oder dem Element {{HTMLElement("picture")}}).

### XUL

_Keine Änderung._

### Sonstiges

- Die Firefox-Kommandozeilenoption `-remote` wurde entfernt ([Firefox-Bug 1080319](https://bugzil.la/1080319)).
