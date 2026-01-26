---
title: Firefox 20 Versionshinweise für Entwickler
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. In diesem Artikel finden Sie Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut auf dem {{HTMLElement("a")}} und {{HTMLElement("area")}} Element wurde hinzugefügt ([Firefox Fehler 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox Fehler 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert nun auch auf Firefox für Android ([Firefox Fehler 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Harmony (ECMAScript 2015) Entwurfsvorschlag hinzugefügt wurde ([Firefox Fehler 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl vorgeschlagen für Harmony (ECMAScript 2015), wurde sie noch nicht akzeptiert und ist weiterhin nicht standardisiert ([Firefox Fehler 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren auch beim Einsatz des Cairo-Canvas-Backends ([Firefox Fehler 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) wurde als veraltet markiert und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Anweisung ([Firefox Fehler 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox Fehler 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) ist jetzt standardmäßig in Vorabversionen verfügbar (Beta-Versionen ausgenommen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled`-Einstellung in about:config auf `true` gesetzt wird.
- Die Eigenschaft [`mask-type`](/de/docs/Web/CSS/Reference/Properties/mask-type) wurde hinzugefügt ([Firefox Fehler 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudoklasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann sie in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled`-Einstellung in about:config auf `true` gesetzt wird ([Firefox Fehler 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lese- als auch Schreibzugriff), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit der Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox Fehler 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox Fehler 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE zu CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE ohne Präfix geändert. Die Version mit Präfix wird vorübergehend beibehalten, um Webautoren beim Übergang ihres Codes zu unterstützen ([Firefox Fehler 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zu setzen ([Firefox Fehler 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` von [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus Webinhalten verfügbar ([Firefox Fehler 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus Webinhalten verfügbar ([Firefox Fehler 816410](https://bugzil.la/816410)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) Schnittstellen sind jetzt in Workern verfügbar ([Firefox Fehler 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Einstellung (standardmäßig deaktiviert) ([Firefox Fehler 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox Fehler 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde gemäß der HTML-Spezifikation optional gemacht.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), immer noch mit Präfix als `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer` Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Diese erlaubt das Übertragen einer Sequenz von [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel ([Firefox Fehler 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die den Benutzer daran hindern, damit zu interagieren ([Firefox Fehler 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue` usw., wurden zu der Canvas-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox Fehler 748433](https://bugzil.la/748433)).
- Die Version mit Präfix von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, damit schlechter Cross-Browser-Präfix-Code (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) nicht in Firefox fehlschlägt. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox Fehler 770844](https://bugzil.la/770844).)

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde von [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox Fehler 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren beim Debuggen von "ungültigen Markup"-Fehlern in ihren Dokumenten zu helfen, werden jetzt MathML-Parsingfehler (wie zu viele / zu wenige Kind-Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte in der Fehlerkonsole gemeldet.
- Das Attribut `scriptminsize` akzeptiert jetzt werteinheitenfreie Werte und Prozentwerte. Diese werden als Vielfache des Standardwerts (`8pt`) interpretiert.
- Wundheightsfreie Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt vollständig für alle Chrome- und Inhaltsskripte deaktiviert. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde vollständig für Firefox 21 entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Die `nsIDOMParserJS` Schnittstelle existiert nicht mehr ([Firefox Fehler 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService` Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2` Speicher-API wurde implementiert.
- Die `nsIProfile` und `nsIProfileChangeStatus` Schnittstellen wurden entfernt, zusammen mit anderem Code, der das Pre-Firefox Profilverwaltungssystem unterstützte. Sie haben diese Schnittstellen wahrscheinlich nicht verwendet, aber wenn ja, sollten Sie damit aufhören. Dies verhindert, dass nicht funktionierende Teile des Profilverwaltungssystems den Abschaltprozess blockieren.
- Die `nsIEventSource` Schnittstelle existiert nicht mehr ([Firefox Fehler 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
