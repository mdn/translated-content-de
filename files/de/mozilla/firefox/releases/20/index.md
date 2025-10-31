---
title: Veröffentlichungsnotizen zu Firefox 20 für Entwickler
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut bei den {{HTMLElement("a")}}- und {{HTMLElement("area")}}-Elementen wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert jetzt in Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich dem Harmony (ECMAScript 2015) Entwurf hinzugefügt wurde ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-Stil 32-Bit-Multiplikationsfunktion. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert und bleibt nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren, auch wenn sie das Cairo-Canvas-Backend verwenden ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) ist veraltet und sollte nicht verwendet werden. Erwägen Sie, die neue Anweisung [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) zu verwenden ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig nur in Pre-Release-Builds verfügbar (ausgenommen Beta-Versionen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled` about:config-Einstellungen auf `true` gesetzt werden.
- Die Eigenschaft [`mask-type`](/de/docs/Web/CSS/Reference/Properties/mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudo-Klasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann es in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config-Einstellung auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lese- als auch Schreibzugriff) mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann über die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE auf CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE unpräfixiert. Die präfixierte Version wird vorübergehend beibehalten, um Webautoren bei der Anpassung ihres Codes zu unterstützen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled`-Einstellung (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für den `UndoManager` wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde gemäß HTML-Spezifikation optional gemacht.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), noch als `Navigator.mozGetUserMedia` vorgeprägt, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es erlaubt das Übertragen einer Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die den Benutzer daran hindern, mit ihm zu interagieren ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi wie `overlay`, `color-burn`, `hue` usw. wurden zur Canvas-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die präfixierte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko reaktiviert, sodass schlechtes Cross-Browser-Prefixing (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht kaputtgeht. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus dem [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren bei der Fehlersuche nach "ungültige-Markup"-Fehlern in ihren Dokumenten zu unterstützen, werden MathML-Parsing-Fehler (wie zu viele / zu wenige Kindelemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt an die Fehlerkonsole gemeldet.
- Das `scriptminsize`-Attribut akzeptiert jetzt einheitenlose Werte und Prozentwerte. Sie werden als Vielfache des Standardwerts (`8pt`) interpretiert.
- Einheitlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt vollständig für alle Chrome- und Inhaltsskripte deaktiviert. Es wurde zuvor in Firefox 17 für Inhalte deaktiviert und wird für Firefox 21 vollständig entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Die Schnittstelle `nsIDOMParserJS` existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltseinstellungen: Die Schnittstelle `nsIContentPrefService` ist jetzt veraltet und die asynchrone `nsIContentPrefService2`-Speicher-API wurde implementiert.
- Die Schnittstellen `nsIProfile` und `nsIProfileChangeStatus` wurden entfernt, zusammen mit anderem Code zur Unterstützung des alten Firefox-Profilverwaltungssystems. Wahrscheinlich haben Sie diese Schnittstellen nicht verwendet, aber wenn doch, sollten Sie damit aufhören. Dies verhindert, dass überholte Teile des Profilverwaltungssystems den Abschaltvorgang blockieren.
- Die Schnittstelle `nsIEventSource` existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Veröffentlichungsnotizen zu Firefox 20](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
