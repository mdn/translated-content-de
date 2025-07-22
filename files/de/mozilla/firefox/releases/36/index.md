---
title: Firefox 36 für Entwickler
short-title: Firefox 36
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 36 wurde am 24. Februar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

Höhepunkte:

- [eval-Quellen erscheinen jetzt im Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Einfacherer Prozess zum Herstellen einer Verbindung zu Firefox für Android](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Boxmodell-Hervorhebung funktioniert auf entfernten Zielen
- ["Invert the call tree"-Option im Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [DOM-Promises in der Konsole inspizieren](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Zusätzliche "Einfügen"-Befehle im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle Devtools-Bugs, die zwischen Firefox 35 und Firefox 36 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- Die {{cssxref("will-change")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Bug 961871](https://bugzil.la/961871)).
- Die {{cssxref("white-space")}}-Eigenschaft funktioniert jetzt auf {{HTMLElement("textarea")}} HTML-Elementen ([Firefox-Bug 82711](https://bugzil.la/82711)).
- Der {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor wird jetzt von {{cssxref("@font-face")}} unterstützt ([Firefox-Bug 475891](https://bugzil.la/475891)), ist aber nicht standardmäßig aktiviert.
- Die Eigenschaften {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, und {{cssxref("text-decoration-style")}} sind nun ohne Präfix ([Firefox-Bug 825004](https://bugzil.la/825004)). Die versionen mit Präfix sind noch für einige Zeit verfügbar, um den Übergang zu erleichtern ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die {{cssxref("text-decoration")}}-Eigenschaft wird in eine Kurzform-Eigenschaft umgewandelt ([Firefox-Bug 1039488](https://bugzil.la/1039488)).
- Die Eigenschaften {{cssxref("object-fit")}} und {{cssxref("object-position")}} werden jetzt unterstützt ([Firefox-Bug 624647](https://bugzil.la/624647)).
- Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wurde experimentell implementiert. Er ist standardmäßig deaktiviert ([Firefox-Bug 907396](https://bugzil.la/907396)).
- Im [Quirks Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) wurde die [`:active` und `:hover` Vibrations-Besonderheit](https://web.archive.org/web/20210414153205/https://developer.mozilla.org/de/docs/Mozilla/Mozilla_quirks_mode_behavior#Miscellaneous_.26_Style) geändert, um weniger oft angewendet zu werden: Sie wird jetzt nur auf Links angewendet, nur wenn keine Pseudo-Elemente oder andere Pseudo-Klassen im Element vorhanden sind und wenn es nicht Teil eines Pseudo-Klassen-Elements ist ([Firefox-Bug 783213](https://bugzil.la/783213)).
- Die {{cssxref("isolation")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1077872](https://bugzil.la/1077872)).
- CSS {{cssxref("&lt;gradient&gt;")}} wird nun auf die vorverarbeiteten Farben angewandt, was den Spezifikationen und anderen Browsern entspricht und unerwartete graue Farben in ihnen beseitigt ([Firefox-Bug 591600](https://bugzil.la/591600)).
- Die Interpolationshinweis-Syntax wurde zu {{cssxref("&lt;gradient&gt;")}} hinzugefügt ([Firefox-Bug 1074056](https://bugzil.la/1074056)).
- Die {{cssxref("scroll-behavior")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1010538](https://bugzil.la/1010538)).

### HTML

- Unterstützung für [`<meta name="referrer">`](/de/docs/Web/HTML/Reference/Elements/meta) wurde hinzugefügt ([Firefox-Bug 704320](https://bugzil.la/704320)).
- In Firefox werden die im [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attribut spezifizierten Filter in {{HTMLElement("input")}} standardmäßig ausgewählt, es sei denn, es gibt einen unbekannten Wert, der einen unbekannten MIME-Typ oder einen falsch formatierten Wert im [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut darstellt. Zuvor wurden spezifizierte Filter nur für die Werte `image/*`, `video/*` und `audio/*` standardmäßig ausgewählt ([Firefox-Bug 826185](https://bugzil.la/826185)).

### JavaScript

- Der [ECMAScript 2015](https://web.archive.org/web/20210612110055/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) Symbol-Datentyp wurde standardmäßig aktiviert (war seit Version 33 im Nightly-Kanal verfügbar) ([Firefox-Bug 1066322](https://bugzil.la/1066322)):
  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- Der alte Platzhalter-String `"@@iterator"` wurde durch das echte ES2015 wohlbekannte Symbol {{jsxref("Symbol.iterator")}} für den [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Schnittstelleneigenschafts-Schlüssel ersetzt ([Firefox-Bug 918828](https://bugzil.la/918828)).
- Die spezifikationsinterne abstrakte Operation `ToNumber(string)` unterstützt jetzt binäre (`0b`) und oktale (`0o`) Literale, was eine potenziell breaking change von ES5 ist ([Firefox-Bug 1079120](https://bugzil.la/1079120)).
  - `Number("0b11")` gibt jetzt `3` zurück, nicht mehr `NaN`.
  - `"0o11" == 9` ergibt jetzt `true`, nicht mehr `false`.

- Die [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklaration ist jetzt block-scope und erfordert einen Initialisierer ([Firefox-Bug 611388](https://bugzil.la/611388)). Sie kann auch nicht mehr erneut deklariert werden ([Firefox-Bug 1095439](https://bugzil.la/1095439)).
  - `{const a=1}; a;` löst jetzt einen {{jsxref("ReferenceError")}} aus und gibt aufgrund von Block-Scoping nicht mehr `1` zurück.
  - `const a;` löst jetzt einen {{jsxref("SyntaxError")}} aus ("fehlendes = in const Deklaration"): Ein Initialisierer ist erforderlich.
  - `const a = 1; a = 2;` löst jetzt auch einen {{jsxref("SyntaxError")}} aus ("ungültige Zuweisung an const a").

- Die ES2016 Methode {{jsxref("Array.prototype.includes")}} wurde implementiert, ist jedoch vorerst nur in Nightly-Versionen aktiviert ([Firefox-Bug 1069063](https://bugzil.la/1069063)).
- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator löst jetzt die "[temporale Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" aus, wenn er mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwendet wird ([Firefox-Bug 1074571](https://bugzil.la/1074571)).
- Die nicht-standardmäßigen [`let` Blöcke und `let` Ausdrücke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) sind veraltet und werden jetzt eine Warnung in der Konsole ausgeben. Verwenden Sie sie nicht mehr, sie werden in Zukunft entfernt.
- Der [WeakMap](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)-Konstruktor handhabt jetzt ein optionales Iterable-Argument ([Firefox-Bug 1092537](https://bugzil.la/1092537)).

### Schnittstellen/APIs/DOM

- Die [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)-Methode der Canvas-API wurde implementiert ([Firefox-Bug 1099148](https://bugzil.la/1099148)).
- ECDSA wird jetzt in der Web Crypto API unterstützt ([Firefox-Bug 1034854](https://bugzil.la/1034854)).
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!
  - Die [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Schnittstelle ist verfügbar ([Firefox-Bug 1048719](https://bugzil.la/1048719)).
  - Die [`WebGL2RenderingContext.invalidateFrameBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)-Methode wurde implementiert ([Firefox-Bug 1076456](https://bugzil.la/1076456)).

- Die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle, die die Promise-basierte Version von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) enthält, wurde hinzugefügt. Sie ist über [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verfügbar ([Firefox-Bug 1033885](https://bugzil.la/1033885)).
- Die EME-bezogene [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode und das zugehörige [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) werden jetzt unterstützt ([Firefox-Bug 1095257](https://bugzil.la/1095257)).
- Das [`keyschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)-Ereignis wird jetzt gesendet, wenn ein EME-bezogenes CDM in einer Sitzung Schlüssel ändert ([Firefox-Bug 1081755](https://bugzil.la/1081755)).
- Die Standardwerte der Optionen für [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Experimentelle Unterstützung für virtuelle Realitätsgeräte wurde hinter der Präferenz `dom.vr.enabled` angesiedelt, standardmäßig deaktiviert ([Firefox-Bug 1036604](https://bugzil.la/1036604)).
- Die Funktion, die mit [`RTCPeerConnection.onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) verbunden ist, erhält jetzt ein Ereignis als Parameter, gemäß der Spezifikation ([Firefox-Bug 1075133](https://bugzil.la/1075133)).
- Die experimentelle Implementierung von Web Animationen macht Fortschritte: Die Methode [`AnimationPlayer.play()`](/de/docs/Web/API/Animation/play) und [`AnimationPlayer.pause()`](/de/docs/Web/API/Animation/pause) werden jetzt unterstützt ([Firefox-Bug 1070745](https://bugzil.la/1070745)), ebenso wie [`AnimationPlayer.playState`](/de/docs/Web/API/Animation/playState) ([Firefox-Bug 1037321](https://bugzil.la/1037321)).
- Die nicht-standardmäßige `DOMRequest`-Schnittstelle hat jetzt eine `DOMRequest.then()`-Methode ([Firefox-Bug 839838](https://bugzil.la/839838)).
- Die CSSOM View Scroll-Verhalten steuernden Methoden, [`Element.scroll()`](/de/docs/Web/API/Element/scroll), [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo), [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) und [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView), wurden implementiert oder erweitert ([Firefox-Bug 1045754](https://bugzil.la/1045754) und [Firefox-Bug 1087559](https://bugzil.la/1087559)).
- Zuweisungen an [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) auf einem [`SVGElement`](/de/docs/Web/API/SVGElement) erzeugen nun Elemente im SVG-Namespace ([Firefox-Bug 886390](https://bugzil.la/886390)).
- Die Methode `nsIWebBrowserPersist.saveURI()` erfordert jetzt 8 Argumente, in einer Reihenfolge, die mit vorherigen Versionen nicht kompatibel ist.
- Unterstützung für Media Source Extensions (MSE) ist standardmäßig in Nicht-Build-Versionen (nur Nightly und Developer Edition) aktiviert ([Firefox-Bug 1000686](https://bugzil.la/1000686)). Sie bleibt in der Beta- und Release-Version deaktiviert.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

- Unterstützung für SPDY/3 wurde entfernt; Unterstützung für SPDY/3.1 ist weiterhin verfügbar ([Firefox-Bug 1097944](https://bugzil.la/1097944)).

## Sicherheit

- RC4 wird jetzt als unsicher betrachtet und alle UI-Indikatoren reagieren entsprechend; SSLv3 wurde in Firefox 34 standardmäßig deaktiviert, aber die Benutzeroberfläche wurde geändert, um dem Benutzer besser zu vermitteln, was passiert ([Firefox-Bug 1093595](https://bugzil.la/1093595)).
- Auch wird RC4 im anfänglichen Handshake von TLS nicht mehr angeboten ([Firefox-Bug 1088915](https://bugzil.la/1088915)).
- Die [`form-action`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action)-Direktive von CSP 1.1 wird jetzt unterstützt ([Firefox-Bug 529697](https://bugzil.la/529697)).
- In den Einstellungen von Firefox ist das [Do Not Track](/de/docs/Web/HTTP/Reference/Headers/DNT) Auswahlfeld wieder ein Ein-/Ausschalter ([Firefox-Bug 1071747](https://bugzil.la/1071747)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on SDK

#### Höhepunkte

- Das [`sdk/test/httpd`](https://web.archive.org/web/20160422002127/https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/test_httpd)-Modul wurde entfernt, verwenden Sie stattdessen das npm-Modul [addon-httpd](https://www.npmjs.com/package/addon-httpd).
- Fügen Sie Badges zu [`sdk/ui`](https://web.archive.org/web/20210216154222/https://developer.mozilla.org/de/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/ui)-Buttons hinzu ([Firefox-Bug 994280](https://bugzil.la/994280)).
- Implementierte globale `require`-Funktion, um SDK-Module überall zugänglich zu machen ([Firefox-Bug 1070927](https://bugzil.la/1070927)), Verwendung:

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Details

[GitHub Commits, die zwischen Firefox 35 und Firefox 36 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### JavaScript-Code-Module

- `PromiseUtils.resolveOrTimeout` wurde implementiert ([Firefox-Bug 1080466](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (ein Ersatz für `Promise.defer()`) wurde implementiert ([Firefox-Bug 1093021](https://bugzil.la/1093021)).

### Schnittstellen

#### nsIContentPolicy

Neue Konstanten wurden `nsIContentPolicy` hinzugefügt, um Gecko-Interna und Add-on-Code zu ermöglichen, verschiedene Arten von Anforderungen besser zu differenzieren. Diese sind:

- `TYPE_FETCH`
  - : Zeigt eine Inhalt-Ladeanforderung an, die durch die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode initiiert wurde.
- `TYPE_IMAGESET`
  - : Zeigt eine Anfrage zum Laden eines {{HTMLElement("img")}} (mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut oder {{HTMLElement("picture")}} an.

### XUL

_Keine Änderung._

### Sonstiges

- Die `-remote` [Kommandozeilenoption](https://wiki.mozilla.org/Firefox/CommandLineOptions) von Firefox wurde entfernt ([Firefox-Bug 1080319](https://bugzil.la/1080319)).
