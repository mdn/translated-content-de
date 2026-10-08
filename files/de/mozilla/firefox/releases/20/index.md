---
title: "Firefox 20: Versionshinweise für Entwickler"
short-title: Firefox 20
slug: Mozilla/Firefox/Releases/20
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Firefox 20 wurde am 2. April 2013 veröffentlicht. Dieser Artikel informiert über die Änderungen in dieser Version, die für Entwickler relevant sind.

## Änderungen für Webentwickler

### HTML

- Unterstützung für das Attribut [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) bei den Elementen {{HTMLElement("a")}} und {{HTMLElement("area")}} wurde hinzugefügt ([Firefox-Bug 676619](https://bugzil.la/676619)).
- Der Wert `auto` für das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) wurde implementiert ([Firefox-Bug 548206](https://bugzil.la/548206)).
- Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) `contextmenu` funktioniert jetzt auch in Firefox für Android ([Firefox-Bug 736321](https://bugzil.la/736321)).

### JavaScript

- Unterstützung für die Methode `WeakMap.prototype.clear()`, die kürzlich dem Harmony-Entwurf (ECMAScript 2015) hinzugefügt wurde, wurde ergänzt ([Firefox-Bug 814562](https://bugzil.la/814562)).
- Unterstützung für die Methode [`Math.imul()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), eine 32-Bit-Multiplikationsfunktion nach C-Vorbild, wurde hinzugefügt. Obwohl sie für Harmony (ECMAScript 2015) vorgeschlagen wurde, ist sie noch nicht angenommen worden und weiterhin nicht standardisiert ([Firefox-Bug 808148](https://bugzil.la/808148)).
- Webanwendungen, die ziehbaren Text mit Kinetic 3.x verwenden, funktionieren jetzt auch mit dem Cairo-Canvas-Backend ([Firefox-Bug 835064](https://bugzil.la/835064)).
- Die Anweisung [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) ist veraltet und sollte nicht mehr verwendet werden. Verwenden Sie stattdessen die neue Anweisung [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) ([Firefox-Bug 804834](https://bugzil.la/804834)).
- Unterstützung für {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}} und {{jsxref("Map.prototype.entries()")}} wurde hinzugefügt ([Firefox-Bug 817368](https://bugzil.la/817368)).

### CSS

- [CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) ist jetzt standardmäßig nur in Vorabversionen verfügbar (mit Ausnahme der Beta-Versionen). In Release- und Beta-Versionen kann es aktiviert werden, indem die about:config-Einstellung `layout.css.flexbox.enabled` auf `true` gesetzt wird.
- Die Eigenschaft [`mask-type`](/de/docs/Web/CSS/Reference/Properties/mask-type) wurde hinzugefügt ([Firefox-Bug 793617](https://bugzil.la/793617)).
- Experimentelle Unterstützung für die Pseudoklasse {{cssxref(":scope")}} wurde hinzugefügt. Sie ist in Aurora und Nightly standardmäßig aktiviert und kann in Release- und Beta-Versionen aktiviert werden, indem die about:config-Einstellung `layout.css.scope-pseudo.enabled` auf `true` gesetzt wird ([Firefox-Bug 648722](https://bugzil.la/648722)).

### DOM/APIs

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) unterstützt jetzt `playbackRate` (sowohl lesend als auch schreibend) mit Tonhöhenkorrektur. Die Tonhöhenkorrektur kann über die Eigenschaft `mozPreservesPitch` gesteuert werden ([Firefox-Bug 495040](https://bugzil.la/495040)).
- CSSOM: Unterstützung für die neuen Interfaces [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) und [`CSSConditionRule`](/de/docs/Web/API/CSSConditionRule) wurde hinzugefügt ([Firefox-Bug 814907](https://bugzil.la/814907)).
- CSSOM: Bei [`CSSRule`](/de/docs/Web/API/CSSRule) wurden die Präfixe der Konstanten CSSRule.MOZ_KEYFRAME_RULE und CSSRule.MOZ_KEYFRAMES_RULE entfernt; sie heißen jetzt CSSRule.KEYFRAME_RULE und CSSRule.KEYFRAMES_RULE. Die Versionen mit Präfix bleiben vorübergehend erhalten, um Webentwicklern die Umstellung ihres Codes zu erleichtern ([Firefox-Bug 816431](https://bugzil.la/816431)).
- CSSOM: Der Wert von `conditionText` kann jetzt für [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) festgelegt werden ([Firefox-Bug 815021](https://bugzil.la/815021)).
- Die Methoden `parseFromStream` und `parseFromBuffer` von [`DOMParser`](/de/docs/Web/API/DOMParser) sind für Webinhalte nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Methode `serializeToStream` von [`XMLSerializer`](/de/docs/Web/API/XMLSerializer) ist für Webinhalte nicht mehr verfügbar ([Firefox-Bug 816410](https://bugzil.la/816410)).
- Die Interfaces [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) sind jetzt in Workern verfügbar ([Firefox-Bug 795542](https://bugzil.la/795542)).
- Unterstützung für die Methode `CSS.supports()` wurde hinzugefügt. Sie ist über die Einstellung `layout.css.supports-rule.enabled` verfügbar, die standardmäßig deaktiviert ist ([Firefox-Bug 779917](https://bugzil.la/779917)).
- Unterstützung für UndoManager wurde hinzugefügt ([Firefox-Bug 617532](https://bugzil.la/617532)).
- Die CSSOM-Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint), die eine [`CaretPosition`](/de/docs/Web/API/CaretPosition) zurückgibt, wurde implementiert.
- Das Indexargument der Methoden [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell) und [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow) ist gemäß der HTML-Spezifikation jetzt optional.
- [`Navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia), weiterhin mit dem Präfix als `Navigator.mozGetUserMedia` verfügbar, ist jetzt standardmäßig aktiviert.
- Das dritte, optionale Argument `transfer` von [`Window.postMessage`](/de/docs/Web/API/Window/postMessage) wird jetzt unterstützt. Damit können Sie eine Folge [übertragbarer Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) an das Ziel übertragen ([Firefox-Bug 822094](https://bugzil.la/822094)).
- Die nicht standardisierte Methode [`Window.sizeToContent()`](/de/docs/Web/API/Window/sizeToContent) begrenzt jetzt die Mindestgröße: Ein Fenster kann nicht mehr so stark verkleinert werden, dass Benutzer nicht mehr damit interagieren können ([Firefox-Bug 764240](https://bugzil.la/764240)).
- Überblendmodi wie `overlay`, `color-burn` und `hue` wurden der Canvas-Eigenschaft [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) hinzugefügt ([Firefox-Bug 748433](https://bugzil.la/748433)).
- Die Version von [`window.indexedDB`](/de/docs/Web/API/Window/indexedDB) mit Präfix – `window.mozIndexedDB` – wurde in Gecko wieder eingeführt, damit fehlerhafter browserübergreifender Code zur Präfixbehandlung (etwa `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) in Firefox nicht mehr fehlschlägt. Ein besserer Ansatz ist `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (siehe [Firefox-Bug 770844](https://bugzil.la/770844)).

### SVG

- Die Implementierung der Eigenschaften `contentScriptType` und `contentStyleType` wurde aus [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) entfernt, nachdem sie auch aus SVG2 entfernt worden waren ([Firefox-Bug 819731](https://bugzil.la/819731)).

### MathML

- Um MathML-Autoren bei der Fehlersuche nach Fehlern durch ungültiges Markup in ihren Dokumenten zu unterstützen, werden MathML-Parsing-Fehler (etwa zu viele oder zu wenige Kindelemente) sowie Warnungen vor veralteten Attributen oder ungültigen Attributwerten jetzt in der Fehlerkonsole angezeigt.
- Das Attribut `scriptminsize` akzeptiert jetzt einheitenlose Werte und Prozentwerte. Sie werden als Vielfache des Standardwerts (`8pt`) interpretiert.
- Einheitenlose Werte sind jetzt auch für die Attribute `mathsize` und `fontsize` zulässig; sie werden mit dem Standardwert multipliziert.

## Änderungen für Add-on- und Mozilla-Entwickler

- ECMAScript for XML (E4X) ist jetzt für alle Chrome- und Inhaltsskripte vollständig deaktiviert. Für Inhaltsskripte wurde es bereits in Firefox 17 deaktiviert; in Firefox 21 wurde es vollständig entfernt. Verwenden Sie stattdessen DOMParser/DOMSerializer oder einen nicht nativen JXON-Algorithmus.
- Das Interface `nsIDOMParserJS` existiert nicht mehr ([Firefox-Bug 816410](https://bugzil.la/816410)). Alternativen finden Sie unter `nsIDOMParser`.
- Inhaltseinstellungen: Das Interface `nsIContentPrefService` ist jetzt veraltet, und die asynchrone Speicher-API `nsIContentPrefService2` wurde implementiert.
- Die Interfaces `nsIProfile` und `nsIProfileChangeStatus` wurden entfernt, ebenso wie weiterer Code zur Unterstützung des Profilverwaltungssystems aus der Zeit vor Firefox. Wahrscheinlich haben Sie diese Interfaces nicht verwendet. Falls doch, sollten Sie sie nicht mehr verwenden. Dadurch wird verhindert, dass nicht mehr genutzte Teile des Profilverwaltungssystems das Herunterfahren blockieren.
- Das Interface `nsIEventSource` existiert nicht mehr ([Firefox-Bug 819639](https://bugzil.la/819639)).

## Siehe auch

- [Versionshinweise zu Firefox 20](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)
