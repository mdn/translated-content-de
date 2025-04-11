---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Der [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) Attribut-Support für das {{HTMLElement("a")}} und das {{HTMLElement("area")}} Element wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das globale Attribut `contextmenu` funktioniert jetzt auch unter Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die `WeakMap.prototype.clear()` Methode, die kürzlich zum Harmony (ECMAScript 2015) Entwurfsprotokoll hinzugefügt wurde ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) Methode, eine C-ähnliche 32-Bit Multiplikationsfunktion. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert und bleibt nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Webanwendungen, die Ziehbare Texte mit Kinetic 3.x verwenden, funktionieren jetzt auch bei Verwendung des Cairo-Canvas-Backends ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Anweisung ist veraltet und sollte nicht mehr verwendet werden. Ziehen Sie die Nutzung der neuen [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Anweisung in Betracht ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für die {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig in Vorabversionen verfügbar (ausgenommen Beta-Versionen). Es kann in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.flexbox.enabled` about:config Präferenz auf `true` gesetzt wird.
- Die `mask-type` Eigenschaft aus der [CSS Masking-Spezifikation](https://www.w3.org/TR/css-masking-1/#the-mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudoklasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann sie in Release- und Beta-Versionen aktiviert werden, indem die `layout.css.scope-pseudo.enabled` about:config Präferenz auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl lesen als auch schreiben), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann mit der Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Auf [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE ohne Präfix zur CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE geändert. Die Version mit Präfix wird vorübergehend beibehalten, um Webautoren bei der Umstellung ihres Codes zu helfen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist jetzt möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die [`DOMParser`](/de/docs/Web/API/DOMParser) Methoden `parseFromStream` und `parseFromBuffer` sind aus Webinhalten nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) Methode `serializeToStream` ist aus Webinhalten nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Präferenz (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für den UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) Methoden ist gemäß HTML-Spezifikation optional geworden.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), weiterhin mit Präfix als `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer` Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht, eine Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel zu übertragen ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die dem Benutzer die Interaktion unmöglich machen ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi wie `overlay`, `color-burn`, `hue` usw. wurden zur Canvas [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) Eigenschaft hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die versionierte Einführung von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, damit schlechter plattformübergreifender Präfix-Code (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht fehlschlägt. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der `contentScriptType` und `contentStyleType` Eigenschaften von [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) wurde zusammen mit deren Entfernung aus SVG2 entfernt ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren bei der Fehlerbehebung von "ungültigen Markup"-Fehlern in ihren Dokumenten zu unterstützen, werden MathML-Ausgabe-Fehler (wie zu viele oder zu wenige Kind-Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt an die Fehlerkonsole gemeldet.
- Das Attribut `scriptminsize` akzeptiert nun einheitenlose Werte und Prozentwerte. Diese werden als Vielfache des Standardwertes (`8pt`) interpretiert.
- Einheitlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Erweiterungs- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist nun vollständig deaktiviert für alle Chrome- und Inhalts-Skripte. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde vollständig für Firefox 21 entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht nativen JXON-Algorithmus.
- Die `nsIDOMParserJS` Schnittstelle existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService` Schnittstelle ist jetzt veraltet und die asynchrone `nsIContentPrefService2` Speicher-API wurde implementiert.
- Die Schnittstellen `nsIProfile` und `nsIProfileChangeStatus` wurden zusammen mit anderem Code, der das Vor-Firefox-Profilverwaltungssystem unterstützte, entfernt. Wahrscheinlich haben Sie diese Schnittstellen nicht verwendet, aber falls doch, sollten Sie damit aufhören. Dies verhindert, dass überholte Teile des Profilverwaltungssystems den Shutdown-Prozess blockieren.
- Die `nsIEventSource` Schnittstelle existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Erweiterungskompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
