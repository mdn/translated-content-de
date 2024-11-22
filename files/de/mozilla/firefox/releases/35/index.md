---
title: Firefox 35 für Entwickler
slug: Mozilla/Firefox/Releases/35
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 35 wurde am 13. Januar 2015 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

Höhepunkte:

- [Sehen Sie ::before und ::after Pseudoelemente im Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)
- [CSS-Sourcemaps sind jetzt standardmäßig aktiviert](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)
- ["DOM-Eigenschaften anzeigen" aus dem Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Alle Entwicklungswerkzeug-Bugs, die zwischen Firefox 34 und Firefox 35 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- Die {{cssxref("mask-type")}} Eigenschaft wurde standardmäßig aktiviert ([Firefox Bug 1058519](https://bugzil.la/1058519)).
- Die {{cssxref("filter")}} Eigenschaft ist jetzt standardmäßig aktiviert ([Firefox Bug 1057180](https://bugzil.la/1057180)).
- Die {{cssxref("@font-face")}} At-Regel unterstützt jetzt WOFF2-Schriftarten ([Firefox Bug 1064737](https://bugzil.la/1064737)).
- Die {{cssxref("symbols", "symbols()")}} Funktionalnotation wird jetzt unterstützt ([Firefox Bug 966168](https://bugzil.la/966168)).
- Die CSS-Font-Loading-API wurde implementiert ([Firefox Bug 1028497](https://bugzil.la/1028497)).
- Die Verwendung von `-moz-appearance` mit dem Wert `none` auf einem Kombinationsfeld entfernt jetzt den Dropdown-Button ([Firefox Bug 649849](https://bugzil.la/649849)).
- Der Property-Accessor `element.style["css-property-name"]` wurde hinzugefügt, um andere Browser anzupassen ([Firefox Bug 958887](https://bugzil.la/958887)).

### HTML

- Die veralteten und nicht konformen `bottommargin`, `leftmargin`, `rightmargin` und `topmargin` Attribute des {{HTMLElement("body")}} Elements wurden im Non-Quirks-Modus aktiviert ([Firefox Bug 95530](https://bugzil.la/95530)).

### JavaScript

- Die "[temporäre tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" für [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) Deklarationen wurde implementiert. In Übereinstimmung mit den ES2015-`let`-Semantiken werfen die folgenden Situationen jetzt Fehler. Siehe auch diese [Newsgroup-Ankündigung](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) und [Firefox Bug 1001090](https://bugzil.la/1001090).

  - Die erneute Deklaration bestehender Variablen oder Argumente mit `let` innerhalb desselben Bereichs in Funktionskörpern ist jetzt ein Syntaxfehler.
  - Die Verwendung einer mit `let` deklarierten Variable in Funktionskörpern, bevor die Deklaration erreicht und ausgewertet wird, ist jetzt ein Laufzeitfehler.

- ES2015 {{jsxref("Global_Objects/Symbol", "Symbole")}} (nur im Nightly-Kanal verfügbar) wurden aktualisiert, um den jüngsten Spezifikationsänderungen zu entsprechen:

  - `String(Symbol("1"))` wirft nun keinen {{jsxref("TypeError")}} mehr; stattdessen wird ein String (`"Symbol(1)"`) zurückgegeben ([Firefox Bug 1058396](https://bugzil.la/1058396)).

- Die verschiedenen [_TypedArray_ Konstruktoren](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) haben jetzt als `[[Prototype]]` eine einzige Funktion, bezeichnet als `%TypedArray%` in ES2015 (aber sonst nicht direkt zugänglich). Jedes typisierte Array-Prototyp erbt jetzt von `%TypedArray%.prototype`. (`%TypedArray%` und `%TypedArray%.prototype` erben von [`Function.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) und [`Object.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) jeweils, sodass typisierte Array-Konstruktoren und -Instanzen weiterhin die auf diesen Objekten gefundenen Eigenschaften haben.) Typisierte Array-Funktionseigenschaften befinden sich jetzt auf `%TypedArray%.prototype` und funktionieren auf jedem typisierten Array. Siehe [_TypedArray_](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) und [Firefox Bug 896116](https://bugzil.la/896116) für weitere Informationen.
- ES2015-Semantiken für [Prototyp-Mutationen unter Verwendung von Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) wurden implementiert ([Firefox Bug 1061853](https://bugzil.la/1061853)).

  - Jetzt wird nur noch ein einzelnes Mitglied, das als `__proto__:value` notiert ist, den `[[Prototype]]` im Objektliteral-Syntax mutieren.
  - Methodenelemente wie `__proto__() {}` überschreiben den `[[Prototype]]` nicht mehr.

### Schnittstellen/APIs/DOM

- [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language) und [`navigator.languages`](/de/docs/Web/API/WorkerNavigator/languages) sind jetzt auf Arbeitern auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) verfügbar ([Firefox Bug 925849](https://bugzil.la/925849)).
- Die [`Element.closest()`](/de/docs/Web/API/Element/closest) Methode gibt den nächsten Vorfahren des aktuellen Elements zurück ([Firefox Bug 1055533](https://bugzil.la/1055533)).
- Experimentelle Unterstützung für die [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) Eigenschaft wurde hinter dem `canvas.filters.enabled` Flag hinzugefügt ([Firefox Bug 927892](https://bugzil.la/927892)).
- Unsere experimentelle Implementierung von Web Animations schreitet mit dem Einfügen der `Animation.target` Eigenschaft voran. Diese ist immer hinter dem `dom.animations-api.core.enabled` Pref, standardmäßig deaktiviert ([Firefox Bug 1067701](https://bugzil.la/1067701)).
- Die [`hasAttributes()`](/de/docs/Web/API/Element/hasAttributes) Methode wurde von [`Node`](/de/docs/Web/API/Node) nach [`Element`](/de/docs/Web/API/Element) verschoben, wie es die Spezifikation erfordert ([Firefox Bug 1055773](https://bugzil.la/1055773)).
- Das reflektierte Attribut `crossOrigin` des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) und [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) akzeptiert nur gültige Werte, und `""` ist es nicht, `null` muss stattdessen verwendet werden ([Firefox Bug 880997](https://bugzil.la/880997)).
- Die Resource Timing API wurde standardmäßig aktiviert ([Firefox Bug 1002855](https://bugzil.la/1002855)).
- Um der Spezifikation zu entsprechen, kann das erste Argument von [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode) nicht mehr `null` sein ([Firefox Bug 1068058](https://bugzil.la/1068058)).
- Die neue [`ImageCapture`](/de/docs/Web/API/ImageCapture) API wurde implementiert: [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto) ist verfügbar ([Firefox Bug 916643](https://bugzil.la/916643)).
- Non-HTTP [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen geben jetzt `200` im Erfolgsfall zurück (anstelle des fehlerhaften `0`) ([Firefox Bug 716491](https://bugzil.la/716491)).
- [`XMLHttpRequest.responseURL`](/de/docs/Web/API/XMLHttpRequest/responseURL) wurde an die neueste Spezifikation angepasst und enthält nicht das Fragment (`'#xyz'`) der URL, falls relevant ([Firefox Bug 1073882](https://bugzil.la/1073882)).
- Die interne, nicht standardisierte Eigenschaft `File.mozFullPath` ist von Inhalten nicht mehr sichtbar ([Firefox Bug 1048293](https://bugzil.la/1048293)).
- Der Konstruktor von [`File`](/de/docs/Web/API/File) wurde erweitert, um der Spezifikation zu entsprechen ([Firefox Bug 1047483](https://bugzil.la/1047483)).
- Eine experimentelle Implementierung von `AbortablePromise`, einem Promise, das von einer anderen Entität als derjenigen, die es erstellt hat, abgebrochen werden kann, wurde hinzugefügt. Es ist mit `Moz` versehen und wird durch die `dom.abortablepromise.enabled` Eigenschaft gesteuert, die standardmäßig auf `false` eingestellt ist ([Firefox Bug 1035060](https://bugzil.la/1035060)).
- Die nicht standardisierte Eigenschaft `Navigator.mozIsLocallyAvailable` wurde entfernt ([Firefox Bug 1066826](https://bugzil.la/1066826)).
- Die Voreinstellung `network.websocket.enabled`, standardmäßig `true`, wurde entfernt; die [WebSocket](/de/docs/Web/API/WebSockets_API) API kann nicht mehr deaktiviert werden ([Firefox Bug 1091016](https://bugzil.la/1091016)).
- Die nicht standardisierten Methoden und Eigenschaften von [`Crypto`](/de/docs/Web/API/Crypto) wurden entfernt ([Firefox Bug 1030963](https://bugzil.la/1030963)). Es sind nur noch die in der Standard-WebCrypto-API definierten Methoden und Eigenschaften vorhanden.
- Unsere experimentelle Implementierung von WebGL 2.0 schreitet voran!

  - Die Methode [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData) wurde implementiert ([Firefox Bug 1048668](https://bugzil.la/1048668)).

### MathML

- Die `dtls` OpenType-Funktion (über das CSS {{cssxref("font-feature-settings")}} im Standard-Stylesheet) wird jetzt automatisch auf MathML-Elemente angewendet, wenn Skripte darüber positioniert werden (z.B. punktloses i mit mathematischem Hut).

### SVG

_Keine Änderung._

### Audio/Video

_Keine Änderung._

## Netzwerk & Sicherheit

- HTTP/2 wurde implementiert und aktiviert, nur mit AEAD-Chiffren ([Firefox Bug 1027720](https://bugzil.la/1027720) und [Firefox Bug 1047594](https://bugzil.la/1047594)).
- Der HTTP/2 `alt-svc` Header wird jetzt unterstützt ([Firefox Bug 1003448](https://bugzil.la/1003448)).
- Die Public Key Pinning-Erweiterung für HTTP (HPKP) wurde implementiert ([Firefox Bug 787133](https://bugzil.la/787133)).
- Die [CSP](/de/docs/Web/HTTP/CSP) 1.1 `base-uri` [Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy) wird jetzt unterstützt ([Firefox Bug 1045897](https://bugzil.la/1045897)).
- Der Pfad der Quelle wird jetzt ebenfalls berücksichtigt, wenn das Host-Quellen-Matching in [CSP](/de/docs/Web/HTTP/CSP) erfolgt ([Firefox Bug 808292](https://bugzil.la/808292)).

## Änderungen für Add-on- und Mozilla-Entwickler

### XUL & Add-ons

- Die private `_getTabForBrowser()` Methode auf dem `<xul:tabbrowser>` Element wurde veraltet. Anstelle dessen haben wir eine neue, öffentliche Methode namens `getTabForBrowser` hinzugefügt. Diese gibt erwartungsgemäß das `<xul:tab>` Element zurück, das den angegebenen `<xul:browser>` enthält.
- `Components.utils.now()`, entsprechen [`Performance.now()`](/de/docs/Web/API/Performance/now) wurde für Nicht-Fenster-Chromecode implementiert ([Firefox Bug 969490](https://bugzil.la/969490)).

### Add-on SDK

#### Höhepunkte

- Zugangstasten für das Kontextmenü hinzugefügt.
- `isPrivateBrowsing` aus `BrowserWindow` entfernt.
- `toJSON` Methode zu `URL` Instanzen hinzugefügt.

#### Details

[GitHub Commits, die zwischen Firefox 34 und Firefox 35 gemacht wurden](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). Dies schließt keine Aufwertungen ein, die nach diesem Release in Aurora eingetreten sind.

[Bugs, die zwischen Firefox 34 und Firefox 35 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Dies schließt keine Aufwertungen ein, die nach diesem Release in Aurora eingetreten sind.

## Ältere Versionen

{{Firefox_for_developers}}
