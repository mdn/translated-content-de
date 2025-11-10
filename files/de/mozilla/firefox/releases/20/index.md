---
title: Firefox 20 Versionshinweise für Entwickler
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut im {{HTMLElement("a")}} und {{HTMLElement("area")}} Element wurde hinzugefügt ([Firefox Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert jetzt in Firefox für Android ([Firefox Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Entwurfsvorschlag Harmony (ECMAScript 2015) hinzugefügt wurde ([Firefox Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-ähnliche Funktion für 32-Bit-Multiplikation. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert und weiterhin nicht standardisiert ([Firefox Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren, auch wenn der Cairo-Canvas-Backend verwendet wird ([Firefox Bug 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Anweisung wurde veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Anweisung ([Firefox Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}}, und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) ist jetzt standardmäßig nur in Pre-Release-Versionen verfügbar (Beta-Versionen ausgeschlossen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled` about:config Präferenz auf `true` gesetzt wird.
- Die [`mask-type`](/de/docs/Web/CSS/Reference/Properties/mask-type) Eigenschaft wurde hinzugefügt ([Firefox Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudoklasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann es in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config Präferenz auf `true` gesetzt wird ([Firefox Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (lesen und schreiben), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit der Eigenschaft `mozPreservesPitch` kontrolliert werden ([Firefox Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE zu CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE ohne Präfix geändert. Die version mit Präfix wird vorübergehend beibehalten, um Webautoren bei der Anpassung ihres Codes zu unterstützen ([Firefox Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` der [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus Web-Inhalten verfügbar ([Firefox Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus Web-Inhalten verfügbar ([Firefox Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Worker verfügbar ([Firefox Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Präferenz (standardmäßig aus) ([Firefox Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde gemäß HTML-Spezifikation optional gemacht.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) ist weiterhin als `Navigator.mozGetUserMedia` vorgeprefixt und jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer` Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht das Übertragen einer Sequenz von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel ([Firefox Bug 822094](https://bugzil.la/822094)).
- Die nicht-standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die die Benutzerinteraktion verhindern ([Firefox Bug 764240](https://bugzil.la/764240)).
- Blend-Modi, wie `overlay`, `color-burn`, `hue`, etc. wurden zur Canvas-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox Bug 748433](https://bugzil.la/748433)).
- Die vorgepräfixte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko reintroduziert, damit schlechter Code mit Browser-Präfixen (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht bricht. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox Bug 770844](https://bugzil.la/770844).)

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) zusammen mit der Entfernung aus SVG2 entfernt ([Firefox Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren beim Debuggen von "ungültigem Markup" in ihren Dokumenten zu helfen, werden MathML-Parsing-Fehler (wie zu viele / zu wenige Kindelemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt in der Fehlerkonsole gemeldet.
- Das Attribut `scriptminsize` akzeptiert jetzt wertlose Werte und Prozentwerte. Sie werden als Vielfaches des Standardwerts (`8pt`) interpretiert.
- Wertlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt vollständig für alle Chrome- und Inhalts-Skripts deaktiviert. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde für Firefox 21 komplett entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht nativen JXON-Algorithmus.
- Die `nsIDOMParserJS` Schnittstelle existiert nicht mehr ([Firefox Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService` Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2` Speicher-API wurde implementiert.
- Die `nsIProfile` und `nsIProfileChangeStatus` Schnittstellen wurden entfernt, zusammen mit anderem Code, der das Firefox-Profilverwaltungssystem vor Firefox unterstützte. Wahrscheinlich haben Sie diese Schnittstellen nicht verwendet, aber falls doch, sollten Sie damit aufhören. Dies verhindert, dass nicht mehr benötigte Teile des Profilverwaltungssystems den Herunterfahrprozess blockieren.
- Die `nsIEventSource` Schnittstelle existiert nicht mehr ([Firefox Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
