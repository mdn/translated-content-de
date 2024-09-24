---
title: Firefox 36 für Entwickler
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{FirefoxSidebar}}

Firefox 36 wurde am 24. Februar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [eval-Quellen erscheinen jetzt im Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Einfacherer Prozess zum Verbinden mit Firefox für Android](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Boxmodell-Hervorhebung funktioniert auf entfernten Zielen
- ["Invert the call tree"-Option im Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [Untersuchen von DOM-Promises in der Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Zusätzliche "Paste"-Befehle im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle Devtools-Bugs, die zwischen Firefox 35 und Firefox 36 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- Die {{cssxref("will-change")}}-Eigenschaft ist standardmäßig aktiviert ([Firefox-Bug 961871](https://bugzil.la/961871)).
- Die {{cssxref("white-space")}}-Eigenschaft funktioniert nun auf {{HTMLElement("textarea")}} HTML-Elementen ([Firefox-Bug 82711](https://bugzil.la/82711)).
- Der {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor wird jetzt von {{cssxref("@font-face")}} unterstützt ([Firefox-Bug 475891](https://bugzil.la/475891)), ist aber standardmäßig nicht aktiviert.
- Die Eigenschaften {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} sind nicht mehr mit einem Präfix versehen ([Firefox-Bug 825004](https://bugzil.la/825004)). Die Versionen mit Präfix sind noch eine Weile verfügbar, um den Übergang zu erleichtern ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die {{cssxref("text-decoration")}}-Eigenschaft wird in eine Kurzschreibweise umgewandelt ([Firefox-Bug 1039488](https://bugzil.la/1039488)).
- Die Eigenschaften {{cssxref("object-fit")}} und {{cssxref("object-position")}} werden jetzt unterstützt ([Firefox-Bug 624647](https://bugzil.la/624647)).
- Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wurde experimentell implementiert. Er ist standardmäßig deaktiviert ([Firefox-Bug 907396](https://bugzil.la/907396)).
- Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) wurde die [`:active` und `:hover` Quiver-Quirk](/de/docs/Mozilla_Quirks_Mode_Behavior#Miscellaneous_.26_Style) geändert, um seltener angewendet zu werden: sie wird jetzt nur noch auf Links angewendet, wenn kein Pseudo-Element oder keine andere Pseudo-Klasse im Element vorhanden ist und es nicht Teil eines Pseudo-Klassen-Elements ist ([Firefox-Bug 783213](https://bugzil.la/783213)).
- Die {{cssxref("isolation")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1077872](https://bugzil.la/1077872)).
- CSS {{cssxref("&lt;gradient&gt;")}} gilt jetzt für die vormultiplizierten Farben, entspricht der Spezifikation und anderen Browsern und beseitigt unerwartete graue Farben, die in ihnen auftreten ([Firefox-Bug 591600](https://bugzil.la/591600)).
- Interpolationshinweissyntax wurde zu {{cssxref("&lt;gradient&gt;")}} hinzugefügt ([Firefox-Bug 1074056](https://bugzil.la/1074056)).
- Die {{cssxref("scroll-behavior")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1010538](https://bugzil.la/1010538)).

### HTML

- Unterstützung für [`<meta name="referrer">`](/de/docs/Web/HTML/Element/meta) wurde hinzugefügt ([Firefox-Bug 704320](https://bugzil.la/704320)).
- In Firefox werden die {{HTMLElement("input")}} Filter, die im [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut angegeben sind, immer standardmäßig ausgewählt, es sei denn, es gibt einen unbekannten Wert, das ist ein unbekannter Mime-Typ oder schlecht formatierten Wert im [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut. Bisher angegebene Filter wurden nur für `image/*`, `video/*` und `audio/*` Werte standardmäßig ausgewählt ([Firefox-Bug 826185](https://bugzil.la/826185)).

### JavaScript

- Der [ECMAScript 2015](/de/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) Symbol-Datentyp ist standardmäßig aktiviert (war seit Version 33 im Nightly-Kanal verfügbar) ([Firefox-Bug 1066322](https://bugzil.la/1066322)):

  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- Der alte Platzhalterstring `"@@iterator"` wurde durch das echte ES2015-Symbol {{jsxref("Symbol.iterator")}} für den [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Schnittstellen-Schlüssel ersetzt ([Firefox-Bug 918828](https://bugzil.la/918828)).
- Die Spezifikation-interne abstrakte Operation `ToNumber(string)` unterstützt jetzt Binär- (`0b`) und Oktal- (`0o`) Literale, dies ist eine potenziell breaking Änderung im Vergleich zu ES5 ([Firefox-Bug 1079120](https://bugzil.la/1079120)).

  - `Number("0b11")` gibt jetzt `3` zurück, nicht `NaN`.
  - `"0o11" == 9` gibt jetzt `true` zurück, nicht `false`.

- Die [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklaration ist jetzt block-scoped und erfordert eine Initialisierung ([Firefox-Bug 611388](https://bugzil.la/611388)). Außerdem kann sie nicht mehr neu deklariert werden ([Firefox-Bug 1095439](https://bugzil.la/1095439)).

  - `const a=1; a;` führt jetzt zu einem {{jsxref("ReferenceError")}} aufgrund des Blockscopings.
  - `const a;` führt jetzt zu einem {{jsxref("SyntaxError")}} ("missing = in const declaration"): Eine Initialisierung ist erforderlich.
  - `const a = 1; a = 2;` führt jetzt auch zu einem {{jsxref("SyntaxError")}} ("invalid assignment to const a").

- Die ES2016 Methode {{jsxref("Array.prototype.includes")}} wurde implementiert, ist aber vorerst nur in Nightly-Builds aktiviert ([Firefox-Bug 1069063](https://bugzil.la/1069063)).
- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löst jetzt die "temporal dead zone" aus, wenn er mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwendet wird ([Firefox-Bug 1074571](https://bugzil.la/1074571)).
- Die nicht standardmäßigen [`let` Blocks und `let` Ausdrücke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) sind veraltet und zeigen nun eine Warnung in der Konsole an. Verwenden Sie sie nicht mehr, sie werden in Zukunft entfernt.
- Der [WeakMap](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) Konstruktor verarbeitet jetzt optionale Iterable-Argumente ([Firefox-Bug 1092537](https://bugzil.la/1092537)).

### Schnittstellen/APIs/DOM

- Die {{domxref("CanvasRenderingContext2D.resetTransform()")}} Methode der Canvas-API wurde implementiert ([Firefox-Bug 1099148](https://bugzil.la/1099148)).
- ECDSA wird jetzt in der Web Crypto API unterstützt ([Firefox-Bug 1034854](https://bugzil.la/1034854)).
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!

  - Die {{domxref("WebGLQuery")}} Schnittstelle ist verfügbar ([Firefox-Bug 1048719](https://bugzil.la/1048719)).
  - Die {{domxref("WebGL2RenderingContext.invalidateFrameBuffer()")}} Methode wurde implementiert ([Firefox-Bug 1076456](https://bugzil.la/1076456)).

- Die {{domxref("MediaDevices")}} Schnittstelle, die die versprechen-basierte Version von {{domxref("MediaDevices.getUserMedia()", "getUserMedia()")}} enthält, wurde hinzugefügt. Sie ist über {{domxref("Navigator.mediaDevices")}} verfügbar ([Firefox-Bug 1033885](https://bugzil.la/1033885)).
- Die EME-bezogene {{domxref("Navigator.requestMediaKeySystemAccess()")}} Methode und die zugehörige {{domxref("MediaKeySystemAccess")}} werden jetzt unterstützt ([Firefox-Bug 1095257](https://bugzil.la/1095257)).
- Das {{domxref("MediaKeySession/keystatuseschange_event", "keyschange")}} Ereignis wird jetzt gesendet, wenn ein EME-bezogener CDM Schlüssel in einer Sitzung ändert ([Firefox-Bug 1081755](https://bugzil.la/1081755)).
- Die Standardwerte der Optionen für {{domxref("MutationObserver.observe()")}} wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Experimentelle Unterstützung für virtuelle Realitätsgeräte wurde unter der Einstellung `dom.vr.enabled` hinzugefügt, standardmäßig deaktiviert ([Firefox-Bug 1036604](https://bugzil.la/1036604)).
- Die Funktion, die zu {{domxref("RTCPeerConnection.signalingstatechange_event", "RTCPeerConnection.onsignalingstatechange")}} dazugehört, erhält jetzt nach der Spezifikation ein Ereignis als Parameter ([Firefox-Bug 1075133](https://bugzil.la/1075133)).
- Die experimentelle Implementierung von Webanimations macht Fortschritte: Die Methoden {{domxref("Animation/play", "AnimationPlayer.play()")}} und {{domxref("Animation/pause", "AnimationPlayer.pause()")}} werden nun unterstützt ([Firefox-Bug 1070745](https://bugzil.la/1070745)), ebenso wie {{domxref("Animation/playState", "AnimationPlayer.playState")}} ([Firefox-Bug 1037321](https://bugzil.la/1037321)).
- Die nicht-standardisierte `DOMRequest`-Schnittstelle hat jetzt eine `DOMRequest.then()`-Methode ([Firefox-Bug 839838](https://bugzil.la/839838)).
- Die CSSOM-View-Scrollverhalten-kontrollierenden Methoden, {{domxref("Element.scroll()")}}, {{domxref("Element.scrollTo()")}}, {{domxref("Element.scrollBy()")}}, und {{domxref("Element.scrollIntoView()")}}, wurden implementiert oder erweitert ([Firefox-Bug 1045754](https://bugzil.la/1045754) und [Firefox-Bug 1087559](https://bugzil.la/1087559)).
- Die Zuweisung zu {{domxref("Element.innerHTML")}} bei einem {{domxref("SVGElement")}} erstellt nun Elemente im SVG-Namespace ([Firefox-Bug 886390](https://bugzil.la/886390)).
- Die `nsIWebBrowserPersist.saveURI()` Methode erfordert nun 8 Argumente in einer Reihenfolge, die nicht mit früheren Versionen kompatibel ist.
- Die Unterstützung für Media-Source-Erweiterungen (MSE) ist standardmäßig in Nicht-Build-Versionen (nur Nightly und Developer Edition) aktiviert ([Firefox-Bug 1000686](https://bugzil.la/1000686)). Sie bleibt in der Beta- und Release-Version deaktiviert.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerke

- Unterstützung für SPDY/3 wurde entfernt; Unterstützung für SPDY/3.1 ist weiterhin verfügbar ([Firefox-Bug 1097944](https://bugzil.la/1097944)).

## Sicherheit

- RC4 gilt jetzt als unsicher und alle UI-Indikatoren reagieren entsprechend; SSLv3 wurde standardmäßig in Firefox 34 deaktiviert, aber die Benutzeroberfläche wurde geändert, um dem Benutzer besser zu verdeutlichen, was passiert ([Firefox-Bug 1093595](https://bugzil.la/1093595)).
- Ebenfalls, RC4 wird im anfänglichen TLS-Handshake nicht mehr angeboten ([Firefox-Bug 1088915](https://bugzil.la/1088915)).
- Die [`form-action`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#form-action) Direktive von CSP 1.1 wird nun unterstützt ([Firefox-Bug 529697](https://bugzil.la/529697)).
- In den Firefox-Einstellungen ist das [Do not track](/de/docs/Web/HTTP/Headers/DNT) Auswahl-Widget wieder ein Ein/Aus-Schalter ([Firefox-Bug 1071747](https://bugzil.la/1071747)).

## Änderungen für Add-On- und Mozilla-Entwickler

### Add-On SDK

#### Höhepunkte

- Das [`sdk/test/httpd`](/de/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/test_httpd) Modul wurde entfernt, verwenden Sie stattdessen das [addon-httpd](https://www.npmjs.com/package/addon-httpd) npm-Modul.
- Fügen Sie Badges zu [`sdk/ui`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/ui) Schaltflächen hinzu ([Firefox-Bug 994280](https://bugzil.la/994280)).
- Implementierte globale `require` Function zum Zugriff auf sdk-Module von überall ([Firefox-Bug 1070927](https://bugzil.la/1070927)), verwendet:

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Details

[GitHub Commits, die zwischen Firefox 35 und Firefox 36 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### JavaScript Code-Module

- `PromiseUtils.resolveOrTimeout` ist implementiert ([Firefox-Bug 1080466](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (ein Ersatz für `Promise.defer()`) ist implementiert ([Firefox-Bug 1093021](https://bugzil.la/1093021)).

### Schnittstellen

#### nsIContentPolicy

Neue Konstanten wurden zu `nsIContentPolicy` hinzugefügt, um den Gecko-Internen und Add-On-Code zu ermöglichen, verschiedenartige Anfragen besser zu differenzieren. Diese sind:

- `TYPE_FETCH`
  - : Zeigt eine Inhaltsladeanforderung an, die durch die {{domxref("Window/fetch", "fetch()")}} Methode initiiert wurde.
- `TYPE_IMAGESET`
  - : Zeigt eine Anforderung zum Laden eines {{HTMLElement("img")}} (mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut oder {{HTMLElement("picture")}} Element.

### XUL

_Keine Änderung._

### Andere

- Die `-remote` [Kommandozeilenoption](https://wiki.mozilla.org/Firefox/CommandLineOptions) von Firefox wurde entfernt ([Firefox-Bug 1080319](https://bugzil.la/1080319)).

## Ältere Versionen

{{Firefox_for_developers}}
