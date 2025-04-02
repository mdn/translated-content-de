---
title: Firefox 36 für Entwickler
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{FirefoxSidebar}}

Firefox 36 wurde am 24. Februar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Hervorhebungen:

- [eval-Quelltexte erscheinen jetzt im Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Einfacherer Prozess zur Verbindung mit Firefox für Android](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Box-Modell-Hervorhebung funktioniert auf Remote-Zielen
- [Option "Aufrufbaum umkehren" im Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [Inspektion von DOM-Promises in der Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Zusätzliche "Einfügen"-Befehle im Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle DevTools-Fehlerbehebungen zwischen Firefox 35 und Firefox 36](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- Die {{cssxref("will-change")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Bug 961871](https://bugzil.la/961871)).
- Die {{cssxref("white-space")}}-Eigenschaft funktioniert jetzt bei {{HTMLElement("textarea")}} HTML-Elementen ([Firefox-Bug 82711](https://bugzil.la/82711)).
- Der {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor wird jetzt von {{cssxref("@font-face")}} unterstützt ([Firefox-Bug 475891](https://bugzil.la/475891)), ist jedoch nicht standardmäßig aktiviert.
- Die Eigenschaften {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}} und {{cssxref("text-decoration-style")}} sind jetzt ohne Präfix ([Firefox-Bug 825004](https://bugzil.la/825004)). Die Versionen mit Präfix sind noch verfügbar, um den Übergang zu erleichtern ([Firefox-Bug 1097922](https://bugzil.la/1097922)).
- Die {{cssxref("text-decoration")}}-Eigenschaft wurde in eine Kurzschreibweise umgewandelt ([Firefox-Bug 1039488](https://bugzil.la/1039488)).
- Die Eigenschaften {{cssxref("object-fit")}} und {{cssxref("object-position")}} werden jetzt unterstützt ([Firefox-Bug 624647](https://bugzil.la/624647)).
- Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wurde experimentell implementiert und ist standardmäßig nicht aktiviert ([Firefox-Bug 907396](https://bugzil.la/907396)).
- Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) wurde der [`:active` und `:hover` Quirks-Modus](/de/docs/Mozilla_Quirks_Mode_Behavior#Miscellaneous_.26_Style) seltener angewendet: Er wird jetzt nur noch auf Links angewendet, es sei denn, es gibt kein Pseudo-Element oder andere Pseudo-Klasse im Element und es ist kein Teil eines Pseudo-Klassenelements ([Firefox-Bug 783213](https://bugzil.la/783213)).
- Die {{cssxref("isolation")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1077872](https://bugzil.la/1077872)).
- CSS {{cssxref("&lt;gradient&gt;")}} wird jetzt auf die premultiplizierten Farben angewendet, was der Spezifikation und anderen Browsern entspricht und das Auftreten unerwarteter grauer Farben vermeidet ([Firefox-Bug 591600](https://bugzil.la/591600)).
- Syntax für Interpolationshinweise wurde zu {{cssxref("&lt;gradient&gt;")}} hinzugefügt ([Firefox-Bug 1074056](https://bugzil.la/1074056)).
- Die {{cssxref("scroll-behavior")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1010538](https://bugzil.la/1010538)).

### HTML

- Unterstützung für [`<meta name="referrer">`](/de/docs/Web/HTML/Element/meta) wurde hinzugefügt ([Firefox-Bug 704320](https://bugzil.la/704320)).
- In Firefox werden Filter, die im [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut des {{HTMLElement("input")}}-Elements angegeben sind, nun standardmäßig ausgewählt, es sei denn, es gibt einen unbekannten Wert, d.h. einen unbekannten MIME-Typ oder einen schlecht formatierten Wert im [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut. Zuvor wurden Filter nur für die Werte `image/*`, `video/*` und `audio/*` standardmäßig ausgewählt ([Firefox-Bug 826185](https://bugzil.la/826185)).

### JavaScript

- Der [ECMAScript 2015](/de/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) Symbol-Datentyp wurde standardmäßig aktiviert (war seit Version 33 in der Nightly-Kanal verfügbar) ([Firefox-Bug 1066322](https://bugzil.la/1066322)):

  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- Der alte Platzhalter-String `"@@iterator"` wurde durch das richtige ES2015 wohlbekannte Symbol {{jsxref("Symbol.iterator")}} für den [iterablen](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Schnittstellen-Eigenschaftsschlüssel ersetzt ([Firefox-Bug 918828](https://bugzil.la/918828)).
- Die intern spezifizierte abstrakte Operation `ToNumber(string)` unterstützt jetzt Binär- (`0b`) und Oktal- (`0o`) Literale, was eine potenziell breaking Änderung von ES5 darstellt ([Firefox-Bug 1079120](https://bugzil.la/1079120)).

  - `Number("0b11")` gibt jetzt `3` zurück, nicht mehr `NaN`.
  - `"0o11" == 9` gibt jetzt `true` zurück, nicht mehr `false`.

- Die [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklaration ist jetzt blockscoped und erfordert einen Initialisierer ([Firefox-Bug 611388](https://bugzil.la/611388)). Sie kann auch nicht mehr neu deklariert werden ([Firefox-Bug 1095439](https://bugzil.la/1095439)).

  - `{const a=1}; a;` löst nun eine {{jsxref("ReferenceError")}} aus und gibt nicht mehr `1` zurück aufgrund von Blockscoping.
  - `const a;` löst jetzt eine {{jsxref("SyntaxError")}} ("missing = in const declaration") aus: Ein Initialisierer ist erforderlich.
  - `const a = 1; a = 2;` löst jetzt auch eine {{jsxref("SyntaxError")}} ("invalid assignment to const a") aus.

- Die ES2016-Methode {{jsxref("Array.prototype.includes")}} wurde implementiert, ist aber derzeit nur in Nightly-Builds aktiviert ([Firefox-Bug 1069063](https://bugzil.la/1069063)).
- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator löst jetzt die "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" aus, wenn er mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) verwendet wird ([Firefox-Bug 1074571](https://bugzil.la/1074571)).
- Die nicht-standardisierten [let-Blöcke und let-Ausdrücke](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) sind veraltet und es wird jetzt eine Warnung in der Konsole ausgegeben. Verwenden Sie sie nicht mehr, sie werden in Zukunft entfernt.
- Der [WeakMap](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)-Konstruktor verarbeitet jetzt ein optionales iterierbares Argument ([Firefox-Bug 1092537](https://bugzil.la/1092537)).

### Schnittstellen/APIs/DOM

- Die [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)-Methode der Canvas-API wurde implementiert ([Firefox-Bug 1099148](https://bugzil.la/1099148)).
- ECDSA wird jetzt in der Web Crypto API unterstützt ([Firefox-Bug 1034854](https://bugzil.la/1034854)).
- Unsere experimentelle Implementierung von WebGL 2.0 macht Fortschritte!

  - Die [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Schnittstelle ist verfügbar ([Firefox-Bug 1048719](https://bugzil.la/1048719)).
  - Die [`WebGL2RenderingContext.invalidateFrameBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFrameBuffer)-Methode wurde implementiert ([Firefox-Bug 1076456](https://bugzil.la/1076456)).

- Die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle, die die auf {{jsxref("Promise")}} basierende Version von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) enthält, wurde hinzugefügt. Sie ist über [`Navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verfügbar ([Firefox-Bug 1033885](https://bugzil.la/1033885)).
- Die EME-bezogene Methode [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) und das zugehörige [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) werden jetzt unterstützt ([Firefox-Bug 1095257](https://bugzil.la/1095257)).
- Das [`keyschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)-Ereignis wird nun gesendet, wenn ein EME-bezogenes CDM in einer Sitzung Schlüssel ändert ([Firefox-Bug 1081755](https://bugzil.la/1081755)).
- Die Standardwerte der Optionen für [`MutationObserver.observe()`](/de/docs/Web/API/MutationObserver/observe) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 973638](https://bugzil.la/973638)).
- Experimentelle Unterstützung für Virtual-Reality-Geräte wurde hinter der `dom.vr.enabled`-Einstellung eingeführt, die standardmäßig deaktiviert ist ([Firefox-Bug 1036604](https://bugzil.la/1036604)).
- Die Funktion, die mit [`RTCPeerConnection.onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) verbunden ist, erhält jetzt gemäß Spezifikation ein Ereignis als Parameter ([Firefox-Bug 1075133](https://bugzil.la/1075133)).
- Die experimentelle Implementierung der Web-Animationen macht Fortschritte: Die Methode [`AnimationPlayer.play()`](/de/docs/Web/API/Animation/play) und [`AnimationPlayer.pause()`](/de/docs/Web/API/Animation/pause) werden jetzt unterstützt ([Firefox-Bug 1070745](https://bugzil.la/1070745)), ebenso wie [`AnimationPlayer.playState`](/de/docs/Web/API/Animation/playState) ([Firefox-Bug 1037321](https://bugzil.la/1037321)).
- Die nicht-standardisierte `DOMRequest`-Schnittstelle verfügt jetzt über eine `DOMRequest.then()`-Methode ([Firefox-Bug 839838](https://bugzil.la/839838)).
- Die CSSOM-View-Scroll-Verhalten-steuernden Methoden, [`Element.scroll()`](/de/docs/Web/API/Element/scroll), [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo), [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy), und [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView), wurden implementiert oder erweitert ([Firefox-Bug 1045754](https://bugzil.la/1045754) und [Firefox-Bug 1087559](https://bugzil.la/1087559)).
- Die Zuordnung zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) auf einem [`SVGElement`](/de/docs/Web/API/SVGElement) erstellt jetzt Elemente im SVG-Namespace ([Firefox-Bug 886390](https://bugzil.la/886390)).
- Die Methode `nsIWebBrowserPersist.saveURI()` erfordert jetzt 8 Argumente, in einer Reihenfolge, die mit früheren Versionen unverträglich ist.
- Die Unterstützung für Media Source Extensions (MSE) ist jetzt standardmäßig in nicht-Build-Versionen (nur Nightly und Developer Edition) aktiviert ([Firefox-Bug 1000686](https://bugzil.la/1000686)). Sie bleibt in Beta- und Release-Versionen deaktiviert.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk

- Die Unterstützung für SPDY/3 wurde entfernt; Unterstützung für SPDY/3.1 ist weiterhin verfügbar ([Firefox-Bug 1097944](https://bugzil.la/1097944)).

## Sicherheit

- RC4 wird jetzt als unsicher angesehen, und alle UI-Anzeigen reagieren entsprechend; SSLv3 wurde in Firefox 34 standardmäßig deaktiviert, aber das UI wurde geändert, um den Benutzer besser verstehen zu lassen, was passiert ([Firefox-Bug 1093595](https://bugzil.la/1093595)).
- Außerdem wird RC4 nicht mehr im initialen TLS-Handshake angeboten ([Firefox-Bug 1088915](https://bugzil.la/1088915)).
- Die [`form-action`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action)-Direktive von CSP 1.1 wird jetzt unterstützt ([Firefox-Bug 529697](https://bugzil.la/529697)).
- In den Einstellungen von Firefox ist das [Nicht-Verfolgen](/de/docs/Web/HTTP/Reference/Headers/DNT)-Auswahl-Widget wieder ein An/Aus-Schalter ([Firefox-Bug 1071747](https://bugzil.la/1071747)).

## Änderungen für Add-on- und Mozilla-Entwickler

### Add-on-SDK

#### Höhepunkte

- Das Modul [`sdk/test/httpd`](/de/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/test_httpd) wurde entfernt, verwenden Sie stattdessen das [addon-httpd](https://www.npmjs.com/package/addon-httpd) npm-Modul.
- Abzeichen zu [`sdk/ui`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/ui)-Schaltflächen hinzugefügt ([Firefox-Bug 994280](https://bugzil.la/994280)).
- Eine globale `require`-Funktion implementiert, um auf SDK-Module überall zuzugreifen ([Firefox-Bug 1070927](https://bugzil.la/1070927)), indem:

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Details

[GitHub-Commits zwischen Firefox 35 und Firefox 36](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### JavaScript-Code-Module

- `PromiseUtils.resolveOrTimeout` ist implementiert ([Firefox-Bug 1080466](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (ein Ersatz für `Promise.defer()`) ist implementiert ([Firefox-Bug 1093021](https://bugzil.la/1093021)).

### Schnittstellen

#### nsIContentPolicy

Neue Konstanten wurden zu `nsIContentPolicy` hinzugefügt, um Gecko-Interna und Add-on-Code besser unterschiedliche Arten von Anfragen unterscheiden zu lassen. Diese sind:

- `TYPE_FETCH`
  - : Zeigt eine Inhaltsanforderung an, die durch die [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode initiiert wird.
- `TYPE_IMAGESET`
  - : Zeigt eine Anfrage zum Laden eines {{HTMLElement("img")}} (mit dem [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut oder {{HTMLElement("picture")}}-Element) an.

### XUL

_Keine Änderung._

### Sonstiges

- Die `-remote` [Befehlszeilenoption](https://wiki.mozilla.org/Firefox/CommandLineOptions) von Firefox wurde entfernt ([Firefox-Bug 1080319](https://bugzil.la/1080319)).

## Ältere Versionen

{{Firefox_for_developers}}
