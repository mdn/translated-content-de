---
title: Firefox 27 für Entwickler
short-title: Firefox 27
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 27 wurde am 4. Februar 2014 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklertools

- Haltepunkte können jetzt auf DOM-Ereignisse gesetzt werden.
- JavaScript im Debugger-Panel kann mit der { } Schaltfläche un-minified werden.
- Der Inspektor hat jetzt ein "edit-element-html"-Feature, ohne dass ein Add-on benötigt wird.
- Hintergrund-URLs und Farben haben eine Vorschau im Inspektor. Selbst das Überfahren von Canvas-Elementen gibt ein Popup mit einer Bildvorschau.
- Reflow-Logging wurde hinzugefügt.
- Stile von SVG-Elementen sind jetzt inspizierbar ([Firefox Bug 921191](https://bugzil.la/921191)).
- Fehler beim Finden des Bildes beim Klicken auf den URL-Link im CSS-Inspektor wurde behoben ([Firefox Bug 921686](https://bugzil.la/921686)).
- Der {{HTTPHeader("SourceMap", "X-SourceMap")}} Header wird jetzt unterstützt ([Firefox Bug 765993](https://bugzil.la/765993)).

Mehr Details in [diesem Beitrag](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Die Schlüsselwörter `-moz-grab` und `-moz-grabbing` in der CSS {{cssxref("cursor")}} Eigenschaft wurden unpräfixiert in `grab` und `grabbing` geändert ([Firefox Bug 880672](https://bugzil.la/880672)).
- Die Unterstützung für die funktionalen Notationen `-moz-hsla()` und `-moz-rgba()` wurde eingestellt. Ab jetzt werden nur noch die unpräfixierten Versionen `hsla()` und `rgba()` unterstützt ([Firefox Bug 893319](https://bugzil.la/893319)).
- Der `true` Wert für {{cssxref("text-align")}} wurde hinzugefügt ([Firefox Bug 929991](https://bugzil.la/929991)).
- Experimentelle Unterstützung von `position:sticky` ist jetzt standardmäßig in Nicht-Release-Builds aktiv ([Firefox Bug 902992](https://bugzil.la/902992)). Für Release-Builds muss die `layout.css.sticky.enabled` Voreinstellung weiterhin auf `true` gesetzt werden.
- Die {{cssxref("all")}} Kurzform-Eigenschaft wurde hinzugefügt ([Firefox Bug 842329](https://bugzil.la/842329)).
- Der globale Wert {{cssxref("unset")}} wurde hinzugefügt; er ermöglicht das Zurücksetzen jeder CSS-Eigenschaft ([Firefox Bug 921731](https://bugzil.la/921731)).
- Geschwungene Klammern sind in HTML `style`-Attributen nicht mehr erlaubt: `<div style="{ display: none }">` funktionierte im Quirks-Modus, aber nicht mehr länger [Firefox Bug 915053](https://bugzil.la/915053).
- Die {{cssxref("overflow")}} Eigenschaft funktioniert jetzt auf {{HTMLElement("fieldset")}} ([Firefox Bug 261037](https://bugzil.la/261037)).

### HTML

- Der `color` Wert des {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributs wurde auf Desktop-Plattformen implementiert. Er war bereits auf mobilen Plattformen verfügbar.
- Die `allow-popups` Direktive wird jetzt mit dem [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) Attribut des {{HTMLElement("iframe")}} Elements unterstützt ([Firefox Bug 766282](https://bugzil.la/766282)).
- Das Mischen von HTML-Elementen mit der {{cssxref("mix-blend-mode")}} Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Voreinstellung muss auf `true` gesetzt werden ([Firefox Bug 902525](https://bugzil.la/902525)).
- Die `typeMustMatch` Eigenschaft des {{HTMLElement("object")}} Elements wird jetzt unterstützt ([Firefox Bug 827160](https://bugzil.la/827160)).

### JavaScript

Die Implementierung von [ECMAScript 2015](/de/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) geht weiter!

- Der [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt in Funktionsaufrufen unterstützt ([Firefox Bug 762363](https://bugzil.la/762363)).
- Die mathematische Funktion {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} wurde implementiert ([Firefox Bug 896264](https://bugzil.la/896264)).
- Der {{jsxref("Operators/yield*", "yield*")}} Ausdruck ist jetzt implementiert ([Firefox Bug 666396](https://bugzil.la/666396)).
- Die Objekte `MapIterator`, `SetIterator` und `ArrayIterator` entsprechen jetzt der Spezifikation ([Firefox Bug 881226](https://bugzil.la/881226)).
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen erwarten jetzt das ES2015 Standard [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols), weg von SpiderMonkeys altem Iterator-Protokoll, das `StopIteration` verwendet.
- {{jsxref("String.match")}} und {{jsxref("String.replace")}} setzen jetzt {{jsxref("RegExp.lastIndex")}} zurück ([Firefox Bug 501739](https://bugzil.la/501739)).

### Schnittstellen/APIs/DOM

- Die Unterstützung für die beiden `setRange()` Methoden auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle wurde hinzugefügt ([Firefox Bug 850364](https://bugzil.la/850364)).
- Die Unterstützung für die beiden `setRange()` Methoden auf der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstelle wurde hinzugefügt ([Firefox Bug 918940](https://bugzil.la/918940)).
- Die Methoden `getAllKeys()` und `openKeyCursor()` wurden zu [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) hinzugefügt ([Firefox Bug 920633](https://bugzil.la/920633) und [Firefox Bug 920800](https://bugzil.la/920800)).
- Die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) Schnittstelle wurde implementiert ([Firefox Bug 913920](https://bugzil.la/913920)).
- Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle unterstützt jetzt die beiden Methoden [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash) und [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) sowie die [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) Eigenschaft ([Firefox Bug 768067](https://bugzil.la/768067)).
- Das `typeMustMatch` Attribut wurde auf der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstelle implementiert ([Firefox Bug 827160](https://bugzil.la/827160)).
- Die Methoden `copyFromChannel()` und `copyToChannel()` wurden zu [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) hinzugefügt ([Firefox Bug 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` ist jetzt unfälschbar ([Firefox Bug 637248](https://bugzil.la/637248)).
- Das WebRTC API [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt enthält jetzt eine [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON) Methode zur Unterstützung von Signalisierung und Debugging ([Firefox Bug 928304](https://bugzil.la/928304)).
- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) Methode wurde angepasst, um der endgültigen Spezifikation zu entsprechen: Sie gibt jetzt `false` zurück, wenn die Liste zu lang ist oder Einträge zu groß sind, anstatt eine Ausnahme zu werfen ([Firefox Bug 884935](https://bugzil.la/884935)).
- Im Rahmen der laufenden Bemühungen zur Standardisierung globaler Objekte sind die nicht standardkonformen Stylesheet-Änderungsereignis-Schnittstellen, einschließlich `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` und `StyleSheetChangeEvent`, aus Webinhalten nicht mehr verfügbar. Die `CSSGroupRuleRuleList` Schnittstelle, die Implementierungsdetails der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), wurde ebenfalls entfernt ([Firefox Bug 872934](https://bugzil.la/872934) und [Firefox Bug 916871](https://bugzil.la/916871)).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) ignoriert jetzt Leerzeichen ([Firefox Bug 711180](https://bugzil.la/711180)).
- [WebGL](/de/docs/Web/API/WebGL_API): `MOZ_`-präfixierte Erweiterungsstrings sind veraltet. Die Unterstützung für sie wird in Zukunft entfernt. Verwenden Sie nur unpräfixierte Erweiterungsstrings. Um Entwürfe von Erweiterungen zu erhalten, setzen Sie die `webgl.enable-draft-extensions` Voreinstellungen ([Firefox Bug 924176](https://bugzil.la/924176)).

### MathML

_Keine Änderung._

### SVG

- Das Mischen von SVG-Elementen mit der {{cssxref("mix-blend-mode")}} Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Voreinstellung muss auf `true` gesetzt werden ([Firefox Bug 902525](https://bugzil.la/902525)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `downloads-indicator` Button wurde entfernt. Sie sollten jetzt das `downloads-button` Element verwenden. Wenn Sie prüfen müssen, ob es sein Overlay geladen hat, überprüfen Sie das `indicator` Attribut auf diesem Button.
- Das Stylesheet `chrome://browser/skin/downloads/indicator.css` wird in Firefox nicht mehr referenziert.

## Sicherheit

- TLS 1.2 wurde für verbesserte Sicherheit implementiert ([Firefox Bug 861266](https://bugzil.la/861266)).

## Siehe auch

- [Liste der Änderungen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) für Firefox 27.
