---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut auf den {{HTMLElement("a")}}- und {{HTMLElement("area")}}-Elementen wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert jetzt auf Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die `WeakMap.prototype.clear()`-Methode, kürzlich dem Harmony (ECMAScript 2015) Entwurfsvorschlag hinzugefügt, wurde hinzugefügt ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)-Methode, eine C-Style-32-Bit-Multiplikationsfunktion. Obwohl vorgeschlagen für Harmony (ECMAScript 2015), wurde sie noch nicht akzeptiert und ist noch nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Web-Apps mit ziehbarem Text und Kinetic 3.x funktionieren, selbst wenn das Cairo-Canvas-Backend genutzt wird ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Anweisung ist veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Anweisung ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für die {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig nur in Vorabversionen verfügbar (außer in Betaversionen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled` about:config-Einstellung auf `true` gesetzt wird.
- Die [`mask-type`](/de/docs/Web/CSS/mask-type)-Eigenschaft wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudo-Klasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann es in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config-Einstellung auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl lesen als auch schreiben), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit der Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE zu CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE umbenannt. Die vorgepräfixte Version wird vorübergehend beibehalten, um Web-Entwicklern beim Umstellen ihres Codes zu helfen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die `parseFromStream`- und `parseFromBuffer`-Methoden von [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus dem Web-Inhalt verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die `serializeToStream`-Methode von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus dem Web-Inhalt verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) Schnittstellen sind jetzt in Arbeitern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die `CSS.supports()`-Methode wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled`-Einstellung verborgen (standardmäßig ausgeschaltet) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode, die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde optional gemacht, gemäß HTML-Spezifikation.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), noch als `Navigator.mozGetUserMedia` geprefixt, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale, `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht, eine Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel zu übertragen ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardmäßige [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent)-Methode begrenzt jetzt die minimale Größe: das Fenster kann nicht mehr auf kleine Größen reduziert werden, wodurch verhindert wird, dass der Benutzer mit ihm interagieren kann ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue`, usw. wurden der Canvas [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) Eigenschaft hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die vorgepräfixte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, damit schlechter Cross-Browser-Präfixcode (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) nicht in Firefox bricht. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren beim Debuggen von "ungültigem Markup"-Fehlern in ihren Dokumenten zu helfen, werden jetzt MathML-Parsing-Fehler (wie zu viele / zu wenige Kind-Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte an der Fehlerkonsole gemeldet.
- Das `scriptminsize`-Attribut akzeptiert jetzt einheitslose Werte und Prozentwerte. Sie werden als Vielfache des Standardwertes (`8pt`) interpretiert.
- Einheitslose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt vollständig deaktiviert für alle Chrome- und Inhaltsskripte. Es war zuvor für Inhalt in Firefox 17 deaktiviert und wurde vollständig entfernt für Firefox 21. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Die `nsIDOMParserJS`-Schnittstelle existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe 'nsIDOMParser' für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService`-Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2`-Speicher-API wurde implementiert.
- Die `nsIProfile` und `nsIProfileChangeStatus`-Schnittstellen wurden entfernt, zusammen mit anderem Code, der das vor-Firefox Profilmanagementsystem unterstützt. Sie haben diese Schnittstellen wahrscheinlich nicht verwendet, aber wenn doch, sollten Sie damit aufhören. Dies verhindert, dass defekte Teile des Profilmanagementsystems den Shutdown-Prozess blockieren.
- Die `nsIEventSource`-Schnittstelle existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
