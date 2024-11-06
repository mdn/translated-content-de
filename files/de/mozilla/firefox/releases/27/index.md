---
title: Firefox 27 für Entwickler
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 27 wurde am 4. Februar 2014 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Breakpoints können jetzt für DOM-Events gesetzt werden.
- JavaScript im Debugger-Panel kann durch den { }-Button unminifiziert werden.
- Der Inspektor verfügt jetzt über eine "edit-element-html"-Funktion, ohne dass ein Add-on benötigt wird.
- Hintergrund-URLs und Farben haben eine Vorschau im Inspektor. Selbst das Schweben über `canvas`-Elementen liefert ein Pop-up mit einer Bildvorschau.
- Ein Reflow-Logging wurde hinzugefügt.
- Stile von SVG-Elementen sind jetzt inspizierbar ([Firefox Fehler 921191](https://bugzil.la/921191)).
- Der Fehler beim Finden des Bildes beim Klicken auf den URL-Link im CSS-Inspektor wurde behoben ([Firefox Fehler 921686](https://bugzil.la/921686)).
- Der {{HTTPHeader("SourceMap", "X-SourceMap")}}-Header wird jetzt unterstützt ([Firefox Fehler 765993](https://bugzil.la/765993)).

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Die Schlüsselwörter `-moz-grab` und `-moz-grabbing` bei der CSS {{cssxref("cursor")}}-Eigenschaft wurden auf `grab` und `grabbing` umgeändert ([Firefox Fehler 880672](https://bugzil.la/880672)).
- Die Unterstützung für die funktionalen Notationen `-moz-hsla()` und `-moz-rgba()` wurde entfernt. Nur die unpräfixierten Versionen `hsla()` und `rgba()` werden nun unterstützt ([Firefox Fehler 893319](https://bugzil.la/893319)).
- Der Wert "`true`" für {{cssxref("text-align")}} wurde hinzugefügt ([Firefox Fehler 929991](https://bugzil.la/929991)).
- Experimentelle Unterstützung von `position:sticky` ist jetzt standardmäßig in Nicht-Veröffentlichungs-Builds aktiv ([Firefox Fehler 902992](https://bugzil.la/902992)). Für Veröffentlichungs-Builds muss die `layout.css.sticky.enabled`-Einstellung weiterhin auf `true` gesetzt sein.
- Die {{cssxref("all")}}-Kurzschreibweise wurde hinzugefügt ([Firefox Fehler 842329](https://bugzil.la/842329)).
- Der globale Wert {{cssxref("unset")}} wurde hinzugefügt; er ermöglicht das Zurücksetzen jeder CSS-Eigenschaft ([Firefox Fehler 921731](https://bugzil.la/921731)).
- Geschweifte Klammern sind in HTML-`style`-Attributen nicht mehr erlaubt: Die Verwendung von `<div style="{ display: none }">` funktionierte im Quirks-Modus, aber nicht mehr [Firefox Fehler 915053](https://bugzil.la/915053).
- Die {{cssxref("overflow")}}-Eigenschaft funktioniert jetzt auf {{HTMLElement("fieldset")}} ([Firefox Fehler 261037](https://bugzil.la/261037)).

### HTML

- Der `color`-Wert des {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs wurde auf Desktop-Plattformen implementiert. Er war bereits auf mobilen Plattformen verfügbar.
- Die `allow-popups`-Direktive wird jetzt mit dem [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt ([Firefox Fehler 766282](https://bugzil.la/766282)).
- Die Vermischung von HTML-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Präferenz muss auf `true` gesetzt sein ([Firefox Fehler 902525](https://bugzil.la/902525)).
- Die `typeMustMatch`-Eigenschaft des {{HTMLElement("object")}}-Elements wird jetzt unterstützt ([Firefox Fehler 827160](https://bugzil.la/827160)).

### JavaScript

Die Umsetzung von [ECMAScript 2015](/de/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) geht weiter!

- Der [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt in Funktionsaufrufen unterstützt ([Firefox Fehler 762363](https://bugzil.la/762363)).
- Die mathematische Funktion {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} wurde implementiert ([Firefox Fehler 896264](https://bugzil.la/896264)).
- Der Ausdruck {{jsxref("Operators/yield*", "yield*")}} ist jetzt implementiert ([Firefox Fehler 666396](https://bugzil.la/666396)).
- Die Objekte `MapIterator`, `SetIterator` und `ArrayIterator` entsprechen jetzt der Spezifikation ([Firefox Fehler 881226](https://bugzil.la/881226)).
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen erwarten jetzt das ES2015-Standard [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und entfernen sich von dem alten SpiderMonkey-Iterator-Protokoll, das `StopIteration` verwendet.
- {{jsxref("String.match")}} und {{jsxref("String.replace")}} setzen jetzt {{jsxref("RegExp.lastIndex")}} zurück ([Firefox Fehler 501739](https://bugzil.la/501739)).

### Schnittstellen/APIs/DOM

- Unterstützung für die beiden `setRange()`-Methoden der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle wurde hinzugefügt ([Firefox Fehler 850364](https://bugzil.la/850364)).
- Unterstützung für die beiden `setRange()`-Methoden der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle wurde hinzugefügt ([Firefox Fehler 918940](https://bugzil.la/918940)).
- Die Methoden `getAllKeys()` und `openKeyCursor()` wurden zu [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) hinzugefügt ([Firefox Fehler 920633](https://bugzil.la/920633) und [Firefox Fehler 920800](https://bugzil.la/920800)).
- Das [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)-Interface wurde implementiert ([Firefox Fehler 913920](https://bugzil.la/913920)).
- Das [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface unterstützt jetzt die beiden Methoden [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash) und [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) sowie die Eigenschaft [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) ([Firefox Fehler 768067](https://bugzil.la/768067)).
- Das `typeMustMatch`-Attribut wurde auf dem [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Interface implementiert ([Firefox Fehler 827160](https://bugzil.la/827160)).
- Die Methoden `copyFromChannel()` und `copyToChannel()` wurden zu [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) hinzugefügt ([Firefox Fehler 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` ist jetzt nicht mehr fälschbar ([Firefox Fehler 637248](https://bugzil.la/637248)).
- Das WebRTC API-Objekt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält jetzt eine [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)-Methode zur Unterstützung von Signalisierung und Debugging ([Firefox Fehler 928304](https://bugzil.la/928304)).
- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)-Methode wurde angepasst, um der endgültigen Spezifikation zu entsprechen: Sie gibt jetzt `false` zurück, wenn die Liste zu lang ist oder zu große Einträge aufweist, anstatt eine Ausnahme zu werfen ([Firefox Fehler 884935](https://bugzil.la/884935)).
- Im Rahmen der laufenden Bemühungen zur Standardisierung von globalen Objekten sind die nicht standardmäßigen Stylesheet-Änderungs-Ereignis-Interfaces, einschließlich `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` und `StyleSheetChangeEvent`, nicht mehr aus Webinhalten verfügbar. Das Interface `CSSGroupRuleRuleList`, ein Implementierungsdetail von [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), wurde ebenfalls entfernt ([Firefox Fehler 872934](https://bugzil.la/872934) und [Firefox Fehler 916871](https://bugzil.la/916871)).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) ignoriert jetzt Leerzeichen ([Firefox Fehler 711180](https://bugzil.la/711180)).
- [WebGL](/de/docs/Web/API/WebGL_API): `MOZ_`-präfixierte Erweiterungs-Strings sind veraltet. Die Unterstützung für sie wird in Zukunft entfernt. Verwenden Sie nur unpräfixierte Erweiterungs-Strings. Um Entwurfserweiterungen zu erhalten, setzen Sie die `webgl.enable-draft-extensions`-Einstellungen ([Firefox Fehler 924176](https://bugzil.la/924176)).

### MathML

_Keine Änderung._

### SVG

- Die Vermischung von SVG-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Präferenz muss auf `true` gesetzt sein ([Firefox Fehler 902525](https://bugzil.la/902525)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Die `downloads-indicator`-Schaltfläche ist weggefallen. Sie sollten jetzt das `downloads-button`-Element verwenden. Wenn Sie überprüfen müssen, ob es sein Overlay geladen hat, überprüfen Sie das `indicator`-Attribut an dieser Schaltfläche.
- Das Stylesheet `chrome://browser/skin/downloads/indicator.css` wird in Firefox nicht mehr referenziert.

## Sicherheit

- TLS 1.2 wurde für verbesserte Sicherheit implementiert ([Firefox Fehler 861266](https://bugzil.la/861266)).

## Siehe auch

- [Liste der Änderungen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) für Firefox 27.

### Ältere Versionen

{{Firefox_for_developers}}
