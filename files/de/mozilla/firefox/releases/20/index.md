---
title: Veröffentlichungsnotizen für Entwickler zu Firefox 20
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut bei den {{HTMLElement("a")}} und {{HTMLElement("area")}} Elementen wurde hinzugefügt ([Firefox Fehler 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox Fehler 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert nun in Firefox für Android ([Firefox Fehler 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die `WeakMap.prototype.clear()`-Methode, die kürzlich zum Harmony (ECMAScript 2015) Entwurfsvorschlag hinzugefügt wurde, wurde hinzugefügt ([Firefox Fehler 814562](https://bugzil.la/814562)).
- Unterstützung für die [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)-Methode, eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert worden und ist weiterhin nicht standardisiert ([Firefox Fehler 808148](https://bugzil.la/808148)).
- Web-Apps, die verschiebbare Texte mit Kinetic 3.x verwenden, funktionieren jetzt, auch wenn das Cairo-Canvas-Backend verwendet wird ([Firefox Fehler 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Anweisung wurde veraltet und sollte nicht mehr verwendet werden. Erwägen Sie, die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Anweisung zu verwenden ([Firefox Fehler 804834](https://bugzil.la/804834)).
- Unterstützung für die {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}}, und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox Fehler 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) ist nun standardmäßig nur in Vorabversionen verfügbar (ausgenommen Betaversionen). Es kann in der Release- und Betaversion aktiviert werden, indem die `layout.css.flexbox.enabled` about:config Präferenz auf `true` gesetzt wird.
- Die [`mask-type`](/de/docs/Web/CSS/Reference/Properties/mask-type)-Eigenschaft wurde hinzugefügt ([Firefox Fehler 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudo-Klasse wurde hinzugefügt. In Aurora und Nightly standardmäßig aktiviert, kann sie in der Release- und Betaversion aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config Präferenz auf `true` gesetzt wird ([Firefox Fehler 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lese- als auch Schreibzugriff), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann über die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox Fehler 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox Fehler 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE ohne Präfix auf CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE umgestellt. Die Version mit Präfix wird vorübergehend beibehalten, um Web-Autoren beim Übergang ihres Codes zu unterstützen ([Firefox Fehler 816431](https://bugzil.la/816431)).
- CSSOM: Es ist nun möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zu setzen ([Firefox Fehler 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des [`DOMParser`](/de/docs/Web/API/DOMParser) sind aus Webinhalten nicht mehr verfügbar ([Firefox Fehler 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist aus Webinhalten nicht mehr verfügbar ([Firefox Fehler 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox Fehler 795542](https://bugzil.la/795542)).
- Unterstützung für die `CSS.supports()`-Methode wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Präferenz (standardmäßig deaktiviert) ([Firefox Fehler 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox Fehler 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) wurde gemäß HTML-Spezifikation optional gemacht.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), noch immer mit dem Präfix `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird nun unterstützt. Es erlaubt Ihnen, eine Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel zu übertragen ([Firefox Fehler 822094](https://bugzil.la/822094)).
- Die nicht standardmäßige Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) klemmt nun die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die die Interaktion des Benutzers verhindern ([Firefox Fehler 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue`, etc. wurden zur [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)-Eigenschaft der Leinwand hinzugefügt ([Firefox Fehler 748433](https://bugzil.la/748433)).
- Die Version mit Präfix von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko neu eingeführt, sodass schlechtes Cross-Browser-Prefix-Coding (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht mehr fehlschlägt. Eine bessere Vorgehensweise ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox Fehler 770844](https://bugzil.la/770844).)

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus dem [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox Fehler 819731](https://bugzil.la/819731)).

### MathML

- Zur Unterstützung von MathML-Autoren beim Debuggen von "ungültige-Markup"-Fehlern in ihren Dokumenten werden jetzt MathML-Parsing-Fehler (wie zu viele/zu wenige untergeordnete Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte an die Fehlerkonsole gemeldet.
- Das `scriptminsize`-Attribut akzeptiert nun werteinheitenlose Werte und Prozentwerte. Sie werden als Vielfache des Standardwertes (`8pt`) interpretiert.
- Werteinheitenlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript für XML (E4X) ist nun vollständig für alle Chrome- und Inhalts-Skripten deaktiviert. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde vollständig für Firefox 21 entfernt. Verwenden Sie DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus.
- Die `nsIDOMParserJS`-Schnittstelle existiert nicht mehr ([Firefox Fehler 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService`-Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2`-Speicher-API wurde implementiert.
- Die Schnittstellen `nsIProfile` und `nsIProfileChangeStatus` wurden zusammen mit anderem Code, der das vor-Firefox-Profilverwaltungssystem unterstützt, entfernt. Sie haben diese Schnittstellen wahrscheinlich nicht verwendet, aber wenn, sollten Sie damit aufhören. Dies verhindert, dass überholte Teile des Profilsystems den Shutdown-Prozess blockieren.
- Die `nsIEventSource`-Schnittstelle existiert nicht mehr ([Firefox Fehler 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Veröffentlichungsnotizen](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
