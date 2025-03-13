---
title: Firefox 35 für Entwickler
slug: Mozilla/Firefox/Releases/35
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 35 wurde am 13. Januar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Sehen Sie ::before und ::after Pseudoelemente im Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)
- [CSS-Quellkarten sind jetzt standardmäßig aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)
- ["DOM-Eigenschaften anzeigen" aus dem Seiten-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle in den Entwicklerwerkzeugen zwischen Firefox 34 und Firefox 35 behobenen Fehler](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Die {{cssxref("mask-type")}}-Eigenschaft wurde standardmäßig aktiviert ([Firefox-Fehler 1058519](https://bugzil.la/1058519)).
- Die {{cssxref("filter")}}-Eigenschaft ist jetzt standardmäßig aktiviert ([Firefox-Fehler 1057180](https://bugzil.la/1057180)).
- Die {{cssxref("@font-face")}}-Regel unterstützt jetzt WOFF2-Schriften ([Firefox-Fehler 1064737](https://bugzil.la/1064737)).
- Die {{cssxref("symbols", "symbols()")}}-Funktionalnotation wird jetzt unterstützt ([Firefox-Fehler 966168](https://bugzil.la/966168)).
- Die CSS-Schrift-Ladungs-API wurde implementiert ([Firefox-Fehler 1028497](https://bugzil.la/1028497)).
- Die Verwendung von `-moz-appearance` mit dem Wert `none` auf einem Kombinationsfeld entfernt jetzt den Dropdown-Button ([Firefox-Fehler 649849](https://bugzil.la/649849)).
- Der Eigenschaftszugriff `element.style["css-property-name"]` wurde hinzugefügt, um andere Browser abzugleichen ([Firefox-Fehler 958887](https://bugzil.la/958887)).

### HTML

- Die veralteten und nicht konformen Attribute `bottommargin`, `leftmargin`, `rightmargin` und `topmargin` des {{HTMLElement("body")}}-Elements wurden im Non-Quirks-Modus aktiviert ([Firefox-Fehler 95530](https://bugzil.la/95530)).

### JavaScript

- Die "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" für [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklarationen wurde implementiert. In Übereinstimmung mit den ES2015 `let`-Semantiken werfen die folgenden Situationen jetzt Fehler. Siehe auch diese [Newsgroup-Ankündigung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) und [Firefox-Fehler 1001090](https://bugzil.la/1001090).

  - Die erneute Deklaration vorhandener Variablen oder Argumente mit `let` innerhalb desselben Bereichs in Funktionskörpern ist jetzt ein Syntaxfehler.
  - Die Verwendung einer mit `let` deklarierten Variablen in Funktionskörpern vor Erreichen und Auswertung der Deklaration ist jetzt ein Laufzeitfehler.

- ES2015 {{jsxref("Global_Objects/Symbol", "Symbole")}} (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um den Änderungen der Spezifikation zu entsprechen:

  - `String(Symbol("1"))` wirft jetzt keinen {{jsxref("TypeError")}} mehr; stattdessen wird ein String (`"Symbol(1)"`) zurückgegeben ([Firefox-Fehler 1058396](https://bugzil.la/1058396)).

- Die verschiedenen [_TypedArray_-Konstruktoren](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) haben jetzt als ihr `[[Prototype]]` eine einzige Funktion, die in ES2015 als `%TypedArray%` bezeichnet wird (aber ansonsten nicht direkt zugänglich ist). Jedes Typ-Array-Prototyp erbt jetzt von `%TypedArray%.prototype`. (`%TypedArray%` und `%TypedArray%.prototype` erben von [`Function.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) und [`Object.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), damit Typ-Array-Konstruktoren und Instanzen weiterhin die auf diesen Objekten gefundenen Eigenschaften haben.) Typ-Array-Funktionseigenschaften befinden sich nun auf `%TypedArray%.prototype` und funktionieren auf jedem Typ-Array. Siehe [_TypedArray_](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) und [Firefox-Fehler 896116](https://bugzil.la/896116) für weitere Informationen.
- ES2015-Semantiken für [Prototypenmutationen unter Verwendung von Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) wurden implementiert ([Firefox-Fehler 1061853](https://bugzil.la/1061853)).

  - Jetzt wird nur ein einzelnes Mitglied, das als `__proto__:value` notiert ist, das `[[Prototype]]` in der Objektliteral-Syntax ändern.
  - Methodenmitglieder wie `__proto__() {}` werden das `[[Prototype]]` nicht mehr überschreiben.

### Schnittstellen/APIs/DOM

- [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) und [`navigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) sind jetzt für Worker auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar ([Firefox-Fehler 925849](https://bugzil.la/925849)).
- Die Methode [`Element.closest()`](/de/docs/Web/API/Element/closest) gibt den nächstgelegenen Vorfahren des aktuellen Elements zurück ([Firefox-Fehler 1055533](https://bugzil.la/1055533)).
- Experimentelle Unterstützung für die Eigenschaft [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) wurde hinter dem Flag `canvas.filters.enabled` hinzugefügt ([Firefox-Fehler 927892](https://bugzil.la/927892)).
- Unsere experimentelle Implementierung von Web-Animationen macht Fortschritte mit der Einführung der Eigenschaft `Animation.target`. Diese ist immer noch hinter dem Standard `dom.animations-api.core.enabled`, das standardmäßig deaktiviert ist ([Firefox-Fehler 1067701](https://bugzil.la/1067701)).
- Die Methode [`hasAttributes()`](/de/docs/Web/API/Element/hasAttributes) wurde von [`Node`](/de/docs/Web/API/Node) zu [`Element`](/de/docs/Web/API/Element) verschoben, wie es die Spezifikation verlangt ([Firefox-Fehler 1055773](https://bugzil.la/1055773)).
- Das reflektierte Attribut `crossOrigin` von [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) akzeptiert nur gültige Werte, und `""` ist es nicht, `null` muss stattdessen verwendet werden ([Firefox-Fehler 880997](https://bugzil.la/880997)).
- Die Resource Timing API wurde standardmäßig aktiviert ([Firefox-Fehler 1002855](https://bugzil.la/1002855)).
- Um die Spezifikation zu erfüllen, kann das erste Argument von [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode) nicht mehr `null` sein ([Firefox-Fehler 1068058](https://bugzil.la/1068058)).
- Die neue [`ImageCapture`](/de/docs/Web/API/ImageCapture) API wurde implementiert: [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto) ist verfügbar ([Firefox-Fehler 916643](https://bugzil.la/916643)).
- Nicht-HTTP-Anfragen von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) geben jetzt `200` bei Erfolg zurück (anstatt des fehlerhaften `0`) ([Firefox-Fehler 716491](https://bugzil.la/716491)).
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) wurde an die neueste Spezifikation angepasst und schließt nicht das Fragment (`'#xyz'`) der URL ein, falls relevant ([Firefox-Fehler 1073882](https://bugzil.la/1073882)).
- Die interne, nicht standardisierte `File.mozFullPath`-Eigenschaft ist von Inhalten nicht mehr sichtbar ([Firefox-Fehler 1048293](https://bugzil.la/1048293)).
- Der Konstruktor von [`File`](/de/docs/Web/API/File) wurde erweitert, um der Spezifikation zu entsprechen ([Firefox-Fehler 1047483](https://bugzil.la/1047483)).
- Eine experimentelle Implementierung von `AbortablePromise`, ein Promise, das von einer anderen Entität, die es nicht erstellt hat, abgebrochen werden kann, wurde hinzugefügt. Es ist mit `Moz` versehen und wird durch die Eigenschaft `dom.abortablepromise.enabled` gesteuert, die standardmäßig auf `false` steht ([Firefox-Fehler 1035060](https://bugzil.la/1035060)).
- Die nicht standardisierte Eigenschaft `Navigator.mozIsLocallyAvailable` wurde entfernt ([Firefox-Fehler 1066826](https://bugzil.la/1066826)).
- Die Voreinstellung `network.websocket.enabled`, standardmäßig `true`, wurde entfernt; Die [WebSocket](/de/docs/Web/API/WebSockets_API) API kann nicht mehr deaktiviert werden ([Firefox-Fehler 1091016](https://bugzil.la/1091016)).
- Die nicht standardisierten Methoden und Eigenschaften von [`Crypto`](/de/docs/Web/API/Crypto) wurden entfernt ([Firefox-Fehler 1030963](https://bugzil.la/1030963)). Es bleiben nur Methoden und Eigenschaften übrig, die in der standardisierten WebCrypto API definiert sind.
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!

  - Die Methode [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData) wurde implementiert ([Firefox-Fehler 1048668](https://bugzil.la/1048668)).

### MathML

- Die `dtls`-OpenType-Funktion (über die CSS-Eigenschaft {{cssxref("font-feature-settings")}} im Standardstylesheet) wird nun beim Positionieren von Skripten über MathML-Elemente automatisch angewendet (z.B. punktloses i mit mathematischem Hut).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk & Sicherheit

- HTTP/2 wurde implementiert und aktiviert, nur mit AEAD-Chiffren ([Firefox-Fehler 1027720](https://bugzil.la/1027720) und [Firefox-Fehler 1047594](https://bugzil.la/1047594)).
- Der HTTP/2-Header `alt-svc` wird jetzt unterstützt ([Firefox-Fehler 1003448](https://bugzil.la/1003448)).
- Die Public Key Pinning Erweiterung für HTTP (HPKP) wurde implementiert ([Firefox-Fehler 787133](https://bugzil.la/787133)).
- Die [CSP](/de/docs/Web/HTTP/Guides/CSP) 1.1 `base-uri` [Directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox-Fehler 1045897](https://bugzil.la/1045897)).
- Beim Host-Quellen-Matching in [CSP](/de/docs/Web/HTTP/Guides/CSP) wird jetzt auch der Pfad der Quelle berücksichtigt ([Firefox-Fehler 808292](https://bugzil.la/808292)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL & Add-ons

- Die private Methode `_getTabForBrowser()` auf dem `<xul:tabbrowser>`-Element wurde als veraltet markiert. An deren Stelle haben wir eine neue, öffentliche Methode namens `getTabForBrowser` hinzugefügt. Diese gibt, wie erwartet, das `<xul:tab>`-Element zurück, das das angegebene `<xul:browser>` enthält.
- `Components.utils.now()`, entsprechend [`Performance.now()`](/de/docs/Web/API/Performance/now), wurde für Chrome-Code ohne Fenster implementiert ([Firefox-Fehler 969490](https://bugzil.la/969490)).

### Add-on SDK

#### Höhepunkte

- Hinzugefügt: Zugriffstasten für Kontextmenüs.
- Entfernt: `isPrivateBrowsing` aus `BrowserWindow`.
- Hinzugefügt: `toJSON`-Methode zu `URL`-Instanzen.

#### Details

[GitHub Commits zwischen Firefox 34 und Firefox 35](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). Dies schließt keine Aktualisierungen ein, die nach dem Übergang dieser Version in Aurora durchgeführt wurden.

[Fehler behoben zwischen Firefox 34 und Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies schließt keine Aktualisierungen ein, die nach dem Übergang dieser Version in Aurora durchgeführt wurden.

## Ältere Versionen

{{Firefox_for_developers}}
