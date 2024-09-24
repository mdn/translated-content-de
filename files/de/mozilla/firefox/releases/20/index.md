---
title: Firefox 20 für Entwickler
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{FirefoxSidebar}}

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel bietet Informationen zu den Änderungen in dieser Version, die Entwickler betreffen werden.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das [`download`](/de/docs/Web/HTML/Element/a#download) Attribut an den {{HTMLElement("a")}} und {{HTMLElement("area")}} Elementen wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes#dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Global_attributes) `contextmenu` funktioniert jetzt auf Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich zum Harmony-Entwurfsvorschlag (ECMAScript 2015) hinzugefügt wurde, ist hinzugefügt worden ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine C-ähnliche 32-Bit-Multiplikationsfunktion. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht akzeptiert und somit immer noch nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Web-Apps, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren, selbst wenn sie das Cairo-Canvas-Backend nutzen ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) ist veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Anweisung ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}}, und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) ist jetzt standardmäßig nur in Vorabversionen (ausgenommen Betaversionen) verfügbar. Es kann in der Release- und Betaversion durch Setzen der `layout.css.flexbox.enabled` about:config-Präferenz auf `true` aktiviert werden.
- Die `mask-type` Eigenschaft aus der [CSS Masking-Spezifikation](https://www.w3.org/TR/css-masking-1/#the-mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die {{cssxref(":scope")}} Pseudoklasse wurde hinzugefügt. Standardmäßig in Aurora und Nightly aktiviert, kann sie in Release- und Betaversionen durch Setzen der `layout.css.scope-pseudo.enabled` about:config-Präferenz auf `true` aktiviert werden ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- {{domxref("HTMLMediaElement")}} unterstützt nun `playbackRate` (sowohl lesend als auch schreibend), mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann durch die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen {{domxref("CSSGroupingRule")}} und {{domxref("CSSConditionRule")}} wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei {{domxref("CSSRule")}} wurden die Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE auf CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE umgestellt. Die vorangestellten Versionen werden vorübergehend beibehalten, um Webautoren beim Umstellen ihres Codes zu unterstützen ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Es ist nun möglich, den Wert von `conditionText` für {{domxref("CSSMediaRule")}} zu setzen ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` des {{domxref("DOMParser")}} sind nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Methode [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) `serializeToStream` ist nicht mehr aus Webinhalten verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Schnittstellen {{domxref("TextDecoder")}} und {{domxref("TextEncoder")}} sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt, hinter der `layout.css.supports-rule.enabled` Präferenz (standardmäßig deaktiviert) ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode {{domxref("Document.caretPositionFromPoint()")}}, die eine {{domxref("CaretPosition")}} zurückgibt, wurde implementiert.
- Das Index-Argument der Methoden {{domxref("HTMLTableRowElement.insertCell()")}} und {{domxref("HTMLTableElement.insertRow()")}} wurde gemäß HTML-Spezifikation optional gemacht.
- {{domxref("Navigator.getUserMedia")}}, noch mit dem Präfix `Navigator.mozGetUserMedia`, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale `transfer`-Argument von {{domxref("Window.postMessage")}} wird jetzt unterstützt. Es ermöglicht, eine Sequenz von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel zu übertragen ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht-standardspezifische Methode {{domxref("Window.sizeToContent()")}} beschränkt jetzt die minimale Größe: Das Fenster kann nicht mehr auf kleine Größen verkleinert werden, die die Benutzerinteraktion verhindern ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Mischmodi wie `overlay`, `color-burn`, `hue` usw. wurden zur Canvas-Eigenschaft {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die vorangestellte Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) — `window.mozIndexedDB` — wurde in Gecko wieder eingeführt, damit fehlerhafte Code-Präfixe, die cross-browser verwendet wurden (wie `var indexedDB = window.indexedDB || window.webkitIndexedDB …`), in Firefox nicht brechen. Eine bessere Vorgehensweise ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844).)

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) zusammen mit der Entfernung aus SVG2 entfernt ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren beim Debuggen von "ungültigen Markup"-Fehlern in ihren Dokumenten zu helfen, werden jetzt MathML-Parsing-Fehler (wie zu viele oder zu wenige Kind-Elemente) und Warnungen über veraltete Attribute oder falsche Attributwerte in der Fehlerkonsole gemeldet.
- Das `scriptminsize` Attribut akzeptiert jetzt einheitenlose Werte und Prozentwerte. Diese werden als Vielfache des Standardwerts ("`8pt`") interpretiert.
- Einheitenlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` erlaubt; sie multiplizieren den Standardwert.

## Änderungen für Add-on- und Mozilla-Entwickler

- EcmaScript für XML (E4X) ist nun vollständig für alle Chrome- und Inhalts-Skripte deaktiviert. Es war zuvor für Inhalte in Firefox 17 deaktiviert und wurde für Firefox 21 vollständig entfernt. Verwenden Sie DOMParser/DOMSerializer oder einen nicht-native JXON-Algorithmus stattdessen.
- Die `nsIDOMParserJS` Schnittstelle existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Siehe `nsIDOMParser` für Alternativen.
- Inhaltspräferenzen: Die `nsIContentPrefService` Schnittstelle ist nun veraltet und die asynchrone `nsIContentPrefService2` Speicherschnittstelle wurde implementiert.
- Die Schnittstellen `nsIProfile` und `nsIProfileChangeStatus` wurden zusammen mit anderem Code, der das vor-Firefox-Profilmanagementsystem unterstützte, entfernt. Wahrscheinlich haben Sie diese Schnittstellen nicht verwendet, aber falls doch, sollten Sie damit aufhören. Dies verhindert, dass veraltete Teile des Profilmanagementsystems den Abschaltprozess blockieren.
- Die `nsIEventSource` Schnittstelle existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Firefox 20 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Ältere Versionen

{{Firefox_for_developers}}
