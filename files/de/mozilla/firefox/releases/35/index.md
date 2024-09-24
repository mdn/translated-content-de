---
title: Firefox 35 für Entwickler
slug: Mozilla/Firefox/Releases/35
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 35 wurde am 13. Januar 2015 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Sehen Sie ::before und ::after Pseudo-Elemente im Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)
- [CSS-Quellenkarten sind jetzt standardmäßig aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)
- ["DOM-Eigenschaften anzeigen" aus dem Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle Devtools-Fehler behoben zwischen Firefox 34 und Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Die {{cssxref("mask-type")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Bug 1058519](https://bugzil.la/1058519)).
- Die {{cssxref("filter")}}-Eigenschaft ist nun standardmäßig aktiviert ([Firefox-Bug 1057180](https://bugzil.la/1057180)).
- Die {{cssxref("@font-face")}}-Regel unterstützt jetzt WOFF2-Schriftarten ([Firefox-Bug 1064737](https://bugzil.la/1064737)).
- Die {{cssxref("symbols", "symbols()")}}-Funktionale Notation wird nun unterstützt ([Firefox-Bug 966168](https://bugzil.la/966168)).
- Die CSS-Font-Loading-API wurde implementiert ([Firefox-Bug 1028497](https://bugzil.la/1028497)).
- Bei Verwendung von `-moz-appearance` mit dem Wert `none` bei einem Kombinationsfeld wird nun der Dropdown-Button entfernt ([Firefox-Bug 649849](https://bugzil.la/649849)).
- Der Eigenschafts-Zugriff `element.style["css-property-name"]` wurde hinzugefügt, um anderen Browsern zu entsprechen ([Firefox-Bug 958887](https://bugzil.la/958887)).

### HTML

- Die veralteten und nicht konformen Attribute `bottommargin`, `leftmargin`, `rightmargin` und `topmargin` des {{HTMLElement("body")}}-Elements wurden im Non-Quirks-Modus aktiviert ([Firefox-Bug 95530](https://bugzil.la/95530)).

### JavaScript

- Die "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" für [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklarationen wurde implementiert. In Übereinstimmung mit den `let`-Semantiken von ES2015 werfen die folgenden Situationen jetzt Fehler. Siehe auch diese [Newsgroup-Ankündigung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) und [Firefox-Bug 1001090](https://bugzil.la/1001090).

  - Das erneute Deklarieren bestehender Variablen oder Argumente mit `let` im selben Bereich in Funktionskörpern ist jetzt ein Syntaxfehler.
  - Die Verwendung einer mit `let` deklarierten Variablen in Funktionskörpern vor Erreichen und Auswertung der Deklaration führt jetzt zu einem Laufzeitfehler.

- Die ES2015 {{jsxref("Global_Objects/Symbol", "Symbole")}} (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um den neuesten Spezifikationsänderungen zu entsprechen:

  - `String(Symbol("1"))` wirft nun keinen {{jsxref("TypeError")}} mehr; stattdessen wird ein String (`"Symbol(1)"`) zurückgegeben ([Firefox-Bug 1058396](https://bugzil.la/1058396)).

- Die verschiedenen [_TypedArray_-Konstruktoren](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) haben nun als `[[Prototype]]` eine einzelne Funktion, `%TypedArray%` genannt in ES2015 (aber ansonsten nicht direkt freigelegt). Jedes Typed Array Prototype erbt nun von `%TypedArray%.prototype`. (`%TypedArray%` und `%TypedArray%.prototype` erben von [`Function.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) bzw. [`Object.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), sodass Typed Array-Konstruktoren und -Instanzen weiterhin die auf diesen Objekten gefundenen Eigenschaften haben.) Typed Array-Funktions-Eigenschaften befinden sich jetzt auf `%TypedArray%.prototype` und funktionieren bei jedem Typed Array. Siehe [_TypedArray_](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) und [Firefox-Bug 896116](https://bugzil.la/896116) für weitere Informationen.
- Die ES2015-Semantiken für [Prototype-Veränderungen mit Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) wurden implementiert ([Firefox-Bug 1061853](https://bugzil.la/1061853)).

  - Nun wird nur noch ein einziges Element als `__proto__:value` notiert, um das `[[Prototype]]` in der Objekt-Literal-Syntax zu verändern.
  - Methodenmitglieder wie `__proto__() {}` überschreiben das `[[Prototype]]` nicht mehr.

### Schnittstellen/APIs/DOM

- {{domxref("WorkerNavigator.language", "navigator.language")}} und {{domxref("WorkerNavigator.languages", "navigator.languages")}} sind jetzt für Worker auf {{domxref("WorkerNavigator")}} verfügbar ([Firefox-Bug 925849](https://bugzil.la/925849)).
- Die {{domxref("Element.closest()")}}-Methode gibt das nächste übergeordnete Element des aktuellen Elements zurück ([Firefox-Bug 1055533](https://bugzil.la/1055533)).
- Experimenteller Support für die {{domxref("CanvasRenderingContext2D.filter")}}-Eigenschaft wurde hinter dem `canvas.filters.enabled`-Flag hinzugefügt ([Firefox-Bug 927892](https://bugzil.la/927892)).
- Unsere experimentelle Implementierung von Web-Animationen schreitet mit der Einführung der `Animation.target`-Eigenschaft voran. Dies ist immer hinter der `dom.animations-api.core.enabled`-Präferenz, die standardmäßig deaktiviert ist ([Firefox-Bug 1067701](https://bugzil.la/1067701)).
- Die {{domxref("Element.hasAttributes", "hasAttributes()")}}-Methode wurde von {{domxref("Node")}} zu {{domxref("Element")}} verschoben, wie es die Spezifikation verlangt ([Firefox-Bug 1055773](https://bugzil.la/1055773)).
- Das reflektierte Attribut `crossOrigin` von {{domxref("HTMLImageElement")}}, {{domxref("HTMLLinkElement")}}, {{domxref("HTMLMediaElement")}}, {{domxref("HTMLScriptElement")}}, und {{domxref("SVGScriptElement")}} akzeptiert nur gültige Werte, und `""` ist nicht zulässig, `null` muss stattdessen verwendet werden ([Firefox-Bug 880997](https://bugzil.la/880997)).
- Die Resource Timing API wurde standardmäßig aktiviert ([Firefox-Bug 1002855](https://bugzil.la/1002855)).
- Um die Spezifikation einzuhalten, kann das erste Argument von {{domxref("Selection.containsNode()")}} nicht mehr `null` sein ([Firefox-Bug 1068058](https://bugzil.la/1068058)).
- Die neue {{domxref("ImageCapture")}}-API wurde implementiert: {{domxref("ImageCapture.takePhoto()")}} ist verfügbar ([Firefox-Bug 916643](https://bugzil.la/916643)).
- Nicht-HTTP-{{domxref("XMLHttpRequest")}}-Anfragen geben nun `200` im Falle eines Erfolgs zurück (anstatt des fehlerhaften `0`) ([Firefox-Bug 716491](https://bugzil.la/716491)).
- {{domxref("XMLHttpRequest.responseURL")}} wurde an die neueste Spezifikation angepasst und enthält nicht mehr den Fragment (`'#xyz'`) der URL, falls relevant ([Firefox-Bug 1073882](https://bugzil.la/1073882)).
- Die interne, nicht standardisierte, `File.mozFullPath` Eigenschaft ist nicht mehr aus dem Inhalt sichtbar ([Firefox-Bug 1048293](https://bugzil.la/1048293)).
- Der Konstruktor von {{domxref("File")}} wurde erweitert, um die Spezifikation zu erfüllen ([Firefox-Bug 1047483](https://bugzil.la/1047483)).
- Eine experimentelle Implementierung von `AbortablePromise`, einem Promise, das von einer anderen Entität als der, die es erstellt hat, abgebrochen werden kann, wurde hinzugefügt. Es ist mit `Moz` vorangestellt und wird durch die `dom.abortablepromise.enabled` Eigenschaft gesteuert, die standardmäßig auf `false` gesetzt ist ([Firefox-Bug 1035060](https://bugzil.la/1035060)).
- Die nicht standardisierte Eigenschaft `Navigator.mozIsLocallyAvailable` wurde entfernt ([Firefox-Bug 1066826](https://bugzil.la/1066826)).
- Die Präferenz `network.websocket.enabled`, standardmäßig `true`, wurde entfernt; die [Websocket](/de/docs/Web/API/WebSockets_API) API kann nicht mehr deaktiviert werden ([Firefox-Bug 1091016](https://bugzil.la/1091016)).
- Die nicht standardisierten Methoden und Eigenschaften von {{domxref("Crypto")}} wurden entfernt ([Firefox-Bug 1030963](https://bugzil.la/1030963)). Es sind nur noch Methoden und Eigenschaften der standardisierten WebCrypto API vorhanden.
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!

  - Die {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}-Methode wurde implementiert ([Firefox-Bug 1048668](https://bugzil.la/1048668)).

### MathML

- Die `dtls` OpenType-Funktion (über die CSS-{{cssxref("font-feature-settings")}} auf dem Standard-Stylesheet) wird jetzt automatisch auf MathML-Elemente angewendet, wenn Skripte darüber positioniert werden (z. B. punktloses i mit mathematischem Hut).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk & Sicherheit

- HTTP/2 wurde implementiert und aktiviert, mit nur AEAD-Chiffren ([Firefox-Bug 1027720](https://bugzil.la/1027720) und [Firefox-Bug 1047594](https://bugzil.la/1047594)).
- Der HTTP/2 `alt-svc` Header wird jetzt unterstützt ([Firefox-Bug 1003448](https://bugzil.la/1003448)).
- Die Erweiterung Public Key Pinning für HTTP (HPKP) wurde implementiert ([Firefox-Bug 787133](https://bugzil.la/787133)).
- Die [CSP](/de/docs/Web/HTTP/CSP) 1.1 `base-uri` [Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox-Bug 1045897](https://bugzil.la/1045897)).
- Bei der Host-Quellen-Abgleichung in [CSP](/de/docs/Web/HTTP/CSP) wird nun auch der Pfad der Quelle berücksichtigt ([Firefox-Bug 808292](https://bugzil.la/808292)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL & Add-ons

- Die private `_getTabForBrowser()`-Methode auf dem `<xul:tabbrowser>`-Element wurde als veraltet markiert. An ihrer Stelle haben wir eine neue, öffentliche Methode namens `getTabForBrowser` hinzugefügt. Diese gibt, wie vorhersehbar, das `<xul:tab>`-Element zurück, das das angegebene `<xul:browser>` enthält.
- `Components.utils.now()`, analog zu {{domxref("Performance.now()")}}, wurde für Non-Window-Chrome-Code implementiert ([Firefox-Bug 969490](https://bugzil.la/969490)).

### Add-on SDK

#### Höhepunkte

- Zugangstasten für das Kontextmenü hinzugefügt.
- `isPrivateBrowsing` wurde aus `BrowserWindow` entfernt.
- `toJSON`-Methode zu `URL`-Instanzen hinzugefügt.

#### Details

[GitHub Commits zwischen Firefox 34 und Firefox 35](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). Dies schließt keine Erhöhungen ein, die nach dieser Freigabe in Aurora gemacht wurden.

[Fehlerbehebungen zwischen Firefox 34 und Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies schließt keine Erhöhungen ein, die nach dieser Freigabe in Aurora gemacht wurden.

## Ältere Versionen

{{Firefox_for_developers}}
