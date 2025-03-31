---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Veröffentlichung, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Element/a#download)-Attribut auf dem {{HTMLElement("a")}}- und {{HTMLElement("area")}}-Element wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Global_attributes) `contextmenu` funktioniert jetzt auch auf Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich dem Harmony (ECMAScript 2015) Entwurfsvorschlag hinzugefügt wurde, wurde implementiert ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-stilähnliche 32-Bit-Multiplikationsfunktion. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert und immer noch nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren, auch wenn das Cairo-Canvas-Backend verwendet wird ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Anweisung wurde veraltet und sollte nicht verwendet werden. Erwägen Sie die Verwendung der neuen [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Anweisung ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt nur in Vorabversionen standardmäßig verfügbar (Beta-Versionen ausgeschlossen). Es kann in Veröffentlichungs- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled`-Einstellung in about:config auf `true` gesetzt wird.
- Die `mask-type`-Eigenschaft aus der [CSS Masking-Spezifikation](https://www.w3.org/TR/css-masking-1/#the-mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}}-Pseudoklasse wurde hinzugefügt. In Aurora und Nightly standardmäßig aktiviert, kann es in Veröffentlichungs- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled`-Einstellung in about:config auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lesen als auch Schreiben), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit der Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE in CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE entprefixt. Die prefixed Version wird vorübergehend beibehalten, um Webautoren bei der Umstellung ihres Codes zu helfen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Voreinstellung (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde optional gemäß HTML-Spezifikation.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), immer noch mit Präfix als `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht den Transfer einer Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) zum Ziel ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die Mindestgröße: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die die Benutzerinteraktion verhindern ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue`, etc. wurden zur `Canvas`-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die prefixed Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, damit schlechter Browser-übergreifender Präfix-Code (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht bricht. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) zusammen mit der Entfernung aus SVG2 entfernt ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Zur Unterstützung von MathML-Autoren bei der Fehlersuche zu "ungültigem Markup" in ihren Dokumenten werden MathML-Parsing-Fehler (wie zu viele / zu wenige Kindelemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt an die Fehlerkonsole gemeldet.
- Das `scriptminsize`-Attribut akzeptiert nun einheitenlose Werte und Prozentwerte. Sie werden als Vielfache des Standardwerts (`8pt`) interpretiert.
- Einheitenlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` zulässig; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt vollständig für alle Chrome- und Inhaltsskripte deaktiviert. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wird vollständig für Firefox 21 entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Das `nsIDOMParserJS`-Interface existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Das `nsIContentPrefService`-Interface ist jetzt veraltet und die asynchrone `nsIContentPrefService2`-Speicher-API wurde implementiert.
- Die `nsIProfile`- und `nsIProfileChangeStatus`-Interfaces wurden entfernt, zusammen mit anderem Code, der das vor-Firefox-Profilmanagementsystem unterstützte. Sie haben diese Schnittstellen wahrscheinlich nicht verwendet, aber wenn Sie das getan haben, sollten Sie damit aufhören. Dies verhindert, dass überholte Teile des Profilmanagementsystems den Shutdown-Prozess ablehnen.
- Das `nsIEventSource`-Interface existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
