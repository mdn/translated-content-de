---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{FirefoxSidebar}}

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut bei den {{HTMLElement("a")}}- und {{HTMLElement("area")}}-Elementen wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes#dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das globale Attribut `contextmenu` funktioniert nun auch in Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Harmony (ECMAScript 2015) Entwurfsvorschlag hinzugefügt wurde, wurde hinzugefügt ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)-Methode, eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl für Harmony (ECMAScript 2015) vorgeschlagen, wurde sie noch nicht akzeptiert und ist weiterhin nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren nun auch bei Verwendung des Cairo-Canvas-Backends ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) ist veraltet und sollte nicht mehr verwendet werden. Erwägen Sie stattdessen die Verwendung der neuen [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Anweisung ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist nun standardmäßig nur in Vorabversionen verfügbar (ausgenommen Betaversionen). Es kann in Release- und Betaversionen aktiviert werden, indem die `layout.css.flexbox.enabled`-Einstellung in about:config auf `true` gesetzt wird.
- Das `mask-type`-Property aus der [CSS Masking Specification](https://www.w3.org/TR/css-masking-1/#the-mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}}-Pseudoklasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann es in Release- und Betaversionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled`-Einstellung in about:config auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lese- als auch Schreibzugriff) mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit dem Property `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE zu CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE umbenannt. Die vorangestellte Version wird vorübergehend beibehalten, um Webautoren den Übergang ihres Codes zu erleichtern ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zu setzen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr im Web-Content verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr im Web-Content verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Web-Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled`-Einstellung (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für den `UndoManager` wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde gemäß der HTML-Spezifikation optional gemacht.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), weiterhin als `Navigator.mozGetUserMedia` vorangestellt, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht die Übertragung einer Sequenz von [transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an die Zielseite ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die die Benutzerinteraktion verhindern ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi wie `overlay`, `color-burn`, `hue` usw. wurden zur `Canvas`-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die vorangestellte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, um zu verhindern, dass fehlerhafter Cross-Browser-Präfixcode (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox fehlschlägt. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844).)

### SVG

- Die Implementierung der `contentScriptType`- und `contentStyleType`-Eigenschaften wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren bei der Fehlerbehebung von "ungültigem Markup" in ihren Dokumenten zu helfen, werden MathML-Parsing-Fehler (wie zum Beispiel zu viele/wenige Kind-Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt im Fehlerprotokoll gemeldet.
- Das `scriptminsize`-Attribut akzeptiert jetzt wertlose und Prozentwerte. Diese werden als Vielfache des Standardwerts ("`8pt`") interpretiert.
- Wertlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- EcmaScript für XML (E4X) ist jetzt vollständig für alle Chrome- und Inhalts-Scripts deaktiviert. Es wurde zuvor für den Inhalt in Firefox 17 deaktiviert und wird für Firefox 21 vollständig entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Die `nsIDOMParserJS`-Schnittstelle existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService`-Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2`-Speicher-API wurde implementiert.
- Die `nsIProfile`- und `nsIProfileChangeStatus`-Schnittstellen wurden zusammen mit anderem Code, der das frühere Firefox-Profil-Managementsystem unterstützt, entfernt. Sie haben diese Schnittstellen wahrscheinlich nicht verwendet, aber falls doch, sollten Sie aufhören, dies zu tun. Dies verhindert, dass obsolete Teile des Profil-Managementsystems den Herunterfahrprozess blockieren.
- Die `nsIEventSource`-Schnittstelle existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
