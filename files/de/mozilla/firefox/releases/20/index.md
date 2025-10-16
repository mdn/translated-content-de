---
title: Firefox 20 Versionshinweise für Entwickler
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut bei den {{HTMLElement("a")}} und {{HTMLElement("area")}} Elementen wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert nun in Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Harmony (ECMAScript 2015) Entwurf hinzugefügt wurde, wurde hinzugefügt ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl für Harmony (ECMAScript 2015) vorgeschlagen, wurde sie noch nicht akzeptiert und ist weiterhin nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Webanwendungen, die ziehbare Texte mit Kinetic 3.x verwenden, funktionieren nun auch mit dem Cairo-Canvas-Backend ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Anweisung wurde als veraltet erklärt und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Anweisung ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig nur in Vorabversionen verfügbar (Beta-Versionen ausgeschlossen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled` about:config-Einstellung auf `true` gesetzt wird.
- Die [`mask-type`](/de/docs/Web/CSS/mask-type)-Eigenschaft wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudoklasse wurde hinzugefügt. In Aurora und Nightly standardmäßig aktiviert, kann sie in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config-Einstellung auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl lesend als auch schreibend), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann über die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE nicht mehr vorangestellt zu CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE. Die vorangestellte Version wird vorübergehend beibehalten, um Webautor beim Übergang ihres Codes zu helfen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die [`DOMParser`](/de/docs/Web/API/DOMParser) `parseFromStream` und `parseFromBuffer` Methoden sind aus Webinhalten nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) `serializeToStream` Methode ist aus Webinhalten nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) Schnittstellen sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die `CSS.supports()` Methode wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Voreinstellung (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode, die ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) Methoden wurde optional gemäß HTML-Spezifikation.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), weiterhin vorangestellt als `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale, `transfer` Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es erlaubt, eine Sequenz von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel zu übertragen ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) Methode beschränkt jetzt die minimale Größe: Das Fenster kann nicht mehr gezwungen werden, auf kleine Größen zu reduzieren, die den Benutzer an der Interaktion hindern ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue`, etc. wurden zur Canvas [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) Eigenschaft hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die vorangestellte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, sodass schlechter cross-browser Code mit Präfixen (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht unterbrochen wird. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der `contentScriptType` und `contentStyleType` Eigenschaften wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt zusammen mit der Entfernung aus SVG2 ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren beim Debuggen von "invalid-markup" Fehlern in ihren Dokumenten zu unterstützen, werden MathML-Parserfehler (wie das Vorhandensein von zu vielen/wenigen Kindelementen) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt in der Fehlerkonsole gemeldet.
- Das `scriptminsize` Attribut akzeptiert nun wertlose und Prozentwerte. Diese werden als Vielfache des Standardwerts (`8pt`) interpretiert.
- Wertlose Werte sind jetzt auch für die `mathsize` und `fontsize` Attribute erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript für XML (E4X) ist jetzt vollständig für alle Chrome- und Inhaltsskripte deaktiviert. Es wurde zuvor für Inhalte in Firefox 17 deaktiviert und wird in Firefox 21 vollständig entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Das `nsIDOMParserJS` Interface existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Das `nsIContentPrefService` Interface ist jetzt veraltet und die asynchrone `nsIContentPrefService2` Speicher-API wurde implementiert.
- Die `nsIProfile` und `nsIProfileChangeStatus` Interfaces wurden entfernt, zusammen mit anderem Code, der das Vor-Firefox-Profilmanagementsystem unterstützt hat. Sie haben diese Interfaces wahrscheinlich nicht verwendet, aber wenn doch, sollten Sie damit aufhören. Dies verhindert, dass nicht mehr vorhandene Teile des Profilmanagementsystems den Shutdown-Prozess verhindern.
- Das `nsIEventSource` Interface existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
