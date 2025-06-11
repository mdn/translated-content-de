---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{FirefoxSidebar}}

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen über die Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attribut auf dem {{HTMLElement("a")}} und {{HTMLElement("area")}}-Element wurde hinzugefügt ([Firefox Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert jetzt in Firefox für Android ([Firefox Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Entwurf des Harmony (ECMAScript 2015) hinzugefügt wurde, ist nun vorhanden ([Firefox Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl für Harmony (ECMAScript 2015) vorgeschlagen, ist sie noch nicht akzeptiert und bleibt nich-standardisiert ([Firefox Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren nun, auch wenn der Cairo-Canvas-Backend genutzt wird ([Firefox Bug 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) ist veraltet und sollte nicht verwendet werden. Erwägen Sie, die neue Anweisung [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) zu verwenden ([Firefox Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}}, und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig nur in Vorabversionen (mit Ausnahme von Beta-Versionen) verfügbar. Es kann in den Veröffentlichungs- und Beta-Versionen durch Setzen der `layout.css.flexbox.enabled` about:config Voreinstellung auf `true` aktiviert werden.
- Die Eigenschaft [`mask-type`](/de/docs/Web/CSS/mask-type) wurde hinzugefügt ([Firefox Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die Pseudoklasse {{cssxref(":scope")}} wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann sie in den Veröffentlichungs- und Beta-Versionen durch Setzen der `layout.css.scope-pseudo.enabled` about:config Voreinstellung auf `true` aktiviert werden ([Firefox Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl Lesen als auch Schreiben), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann über die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE auf CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE ohne Präfix geändert. Die Version mit Präfix wird vorübergehend beibehalten, um Webautoren beim Übergang ihres Codes zu unterstützen ([Firefox Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist nun möglich, den Wert von `conditionText` für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festzulegen ([Firefox Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des [`DOMParser`](/de/docs/Web/API/DOMParser) sind nicht mehr aus Webinhalten verfügbar ([Firefox Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` des [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist nicht mehr aus Webinhalten verfügbar ([Firefox Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der Voreinstellung `layout.css.supports-rule.enabled` (standardmäßig deaktiviert) ([Firefox Bug 779917](https://bugzil.la/779917)).
- Unterstützung für den UndoManager wurde hinzugefügt ([Firefox Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) ist gemäß der HTML-Spezifikation jetzt optional.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), immer noch mit dem Präfix `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte optionale `transfer`-Argument von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Es ermöglicht die Übertragung einer Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel ([Firefox Bug 822094](https://bugzil.la/822094)).
- Die nicht-standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen gezwungen werden, die die Interaktion des Benutzers verhindern ([Firefox Bug 764240](https://bugzil.la/764240)).
- Mischmodi, wie `overlay`, `color-burn`, `hue`, etc., wurden zur `CanvasRenderingContext2D.globalCompositeOperation`-Eigenschaft des Canvas hinzugefügt ([Firefox Bug 748433](https://bugzil.la/748433)).
- Die version mit Präfix [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, sodass schlechter cross-browser Präfix-Code (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) nicht in Firefox fehlschlägt. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, zusammen mit der Entfernung aus SVG2 ([Firefox Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren bei der Fehlersuche von "invalid-markup" Fehlern in ihren Dokumenten zu unterstützen, werden MathML-Parsing-Fehler (wie zu viele oder zu wenige Kindelemente) und Warnungen über veraltete Attribute oder falsche Attributwerte jetzt an der Fehlerkonsole gemeldet.
- Das Attribut `scriptminsize` akzeptiert jetzt wertlose Werte und Prozentwerte. Sie werden als Vielfache des Standardwertes (`8pt`) interpretiert.
- Wertlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-On- und Mozilla-Entwickler

- ECMAScript für XML (E4X) ist jetzt vollständig deaktiviert für alle Chrome- und Inhaltsskripte. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde in Firefox 21 vollständig entfernt. Verwenden Sie DOMParser/DOMSerializer oder einen nicht-nativen JXON-Algorithmus anstelle.
- Die Schnittstelle `nsIDOMParserJS` existiert nicht mehr ([Firefox Bug 816410](https://bugzil.la/816410)). Sehen Sie `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die Schnittstelle `nsIContentPrefService` ist jetzt veraltet und die asynchrone `nsIContentPrefService2` Speicher-API wurde implementiert.
- Die Schnittstellen `nsIProfile` und `nsIProfileChangeStatus` wurden zusammen mit anderem Code, der das Pre-Firefox Profilmanagementsystem unterstützte, entfernt. Wahrscheinlich haben Sie diese Schnittstellen nicht verwendet, aber falls doch, sollten Sie damit aufhören. Dies verhindert, dass defekte Teile des Profilmanagementsystems den Abschaltvorgang verhindern.
- Die Schnittstelle `nsIEventSource` existiert nicht mehr ([Firefox Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
