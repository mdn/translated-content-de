---
title: Firefox 27 für Entwickler
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{FirefoxSidebar}}

Firefox 27 wurde am 4. Februar 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Breakpoints können jetzt auf DOM-Ereignissen gesetzt werden.
- JavaScript im Debug-Panel kann mit der { }-Taste unminifiziert werden.
- Der Inspektor verfügt jetzt über eine "edit-element-html"-Funktion, ohne dass ein Add-on erforderlich ist.
- Hintergrund-URLs und Farben haben eine Vorschau im Inspektor. Sogar beim Überfahren von Canvas-Elementen wird ein Popup mit einer Bildvorschau angezeigt.
- Reflow-Logging wurde hinzugefügt.
- Die Stile von SVG-Elementen sind nun inspizierbar ([Firefox Fehler 921191](https://bugzil.la/921191)).
- Fehler beim Finden des Bildes beim Klicken auf den URL-Link im CSS-Inspektor wurde behoben ([Firefox Fehler 921686](https://bugzil.la/921686)).
- Der {{HTTPHeader("SourceMap", "X-SourceMap")}} Header wird jetzt unterstützt ([Firefox Fehler 765993](https://bugzil.la/765993)).

Mehr Details in [diesem Beitrag](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Die `-moz-grab` und `-moz-grabbing` Schlüsselwörter der CSS {{cssxref("cursor")}}-Eigenschaft wurden zu `grab` und `grabbing` ohne Präfix geändert ([Firefox Fehler 880672](https://bugzil.la/880672)).
- Unterstützung für die `-moz-hsla()` und `-moz-rgba()` Funktionsnotationen wurde entfernt. Nur die versionen ohne Präfix, `hsla()` und `rgba()` werden ab jetzt unterstützt ([Firefox Fehler 893319](https://bugzil.la/893319)).
- Der "`true`"-Wert für {{cssxref("text-align")}} wurde hinzugefügt ([Firefox Fehler 929991](https://bugzil.la/929991)).
- Experimentelle Unterstützung von `position:sticky` ist jetzt in Nicht-Release-Builds standardmäßig aktiv ([Firefox Fehler 902992](https://bugzil.la/902992)). Für Release-Builds muss die `layout.css.sticky.enabled` Präferenz weiterhin auf `true` gesetzt werden.
- Die {{cssxref("all")}} Kurzschreibweise wurde hinzugefügt ([Firefox Fehler 842329](https://bugzil.la/842329)).
- Der {{cssxref("unset")}} globale Wert wurde hinzugefügt; er erlaubt das Zurücksetzen jeder CSS-Eigenschaft ([Firefox Fehler 921731](https://bugzil.la/921731)).
- Geschweifte Klammern sind in HTML `style` Attributen nicht mehr erlaubt: Die Verwendung von `<div style="{ display: none }">` funktionierte im Quirks-Modus, wird jetzt aber nicht mehr unterstützt [Firefox Fehler 915053](https://bugzil.la/915053).
- Die {{cssxref("overflow")}}-Eigenschaft funktioniert jetzt auf {{HTMLElement("fieldset")}} ([Firefox Fehler 261037](https://bugzil.la/261037)).

### HTML

- Der `color` Wert des {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type) Attributs wurde auf Desktop-Plattformen implementiert. Er war bereits auf mobilen Plattformen verfügbar.
- Die `allow-popups` Direktive wird jetzt mit dem [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox) Attribut des {{HTMLElement("iframe")}} Elements unterstützt ([Firefox Fehler 766282](https://bugzil.la/766282)).
- Das Mischen von HTML-Elementen mit der {{cssxref("mix-blend-mode")}} Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Präferenz muss auf `true` gesetzt werden ([Firefox Fehler 902525](https://bugzil.la/902525)).
- Die [`typeMustMatch`](/de/docs/Web/API/Object/typeMustMatch) Eigenschaft des {{HTMLElement("object")}} Elements wird jetzt unterstützt ([Firefox Fehler 827160](https://bugzil.la/827160)).

### JavaScript

Die Implementierung von [ECMAScript 2015](/de/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) geht weiter!

- Der [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt bei Funktionsaufrufen unterstützt ([Firefox Fehler 762363](https://bugzil.la/762363)).
- Die mathematische Funktion {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} wurde implementiert ([Firefox Fehler 896264](https://bugzil.la/896264)).
- Der {{jsxref("Operators/yield*", "yield*")}} Ausdruck wurde implementiert ([Firefox Fehler 666396](https://bugzil.la/666396)).
- Die Objekte `MapIterator`, `SetIterator` und `ArrayIterator` entsprechen nun der Spezifikation ([Firefox Fehler 881226](https://bugzil.la/881226)).
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleifen erwarten nun das ES2015 Standard-Iteratoren-Protokoll und weichen vom alten SpiderMonkey-Iteratoren-Protokoll ab, das `StopIteration` verwendete.
- {{jsxref("String.match")}} und {{jsxref("String.replace")}} setzen jetzt den {{jsxref("RegExp.lastIndex")}} zurück ([Firefox Fehler 501739](https://bugzil.la/501739)).

### Schnittstellen/APIs/DOM

- Unterstützung für die zwei `setRange()` Methoden auf der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle wurde hinzugefügt ([Firefox Fehler 850364](https://bugzil.la/850364)).
- Unterstützung für die zwei `setRange()` Methoden auf der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstelle wurde hinzugefügt ([Firefox Fehler 918940](https://bugzil.la/918940)).
- Die Methoden `getAllKeys()` und `openKeyCursor()` wurden zu [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) hinzugefügt ([Firefox Fehler 920633](https://bugzil.la/920633) und [Firefox Fehler 920800](https://bugzil.la/920800)).
- Die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) Schnittstelle wurde implementiert ([Firefox Fehler 913920](https://bugzil.la/913920)).
- Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle unterstützt jetzt die Methoden [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash) und [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) und die [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) Eigenschaft ([Firefox Fehler 768067](https://bugzil.la/768067)).
- Das `typeMustMatch` Attribut wurde auf der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Schnittstelle implementiert ([Firefox Fehler 827160](https://bugzil.la/827160)).
- Die Methoden `copyFromChannel()` und `copyToChannel()` wurden zu [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) hinzugefügt ([Firefox Fehler 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` ist jetzt nicht mehr fälschbar ([Firefox Fehler 637248](https://bugzil.la/637248)).
- Das WebRTC API-Objekt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) beinhaltet jetzt eine [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON) Methode, um beim Signalisieren und Debugging zu helfen ([Firefox Fehler 928304](https://bugzil.la/928304)).
- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) Methode wurde angepasst, um der endgültigen Spezifikation zu entsprechen: Sie gibt jetzt `false` zurück, wenn die Liste zu lang oder zu groß ist, anstatt einen Fehler zu werfen ([Firefox Fehler 884935](https://bugzil.la/884935)).
- Im Rahmen der laufenden Bemühungen zur Standardisierung globaler Objekte sind die nicht-standardisierten Schnittstellen für Stylesheet-Änderungsereignisse, einschließlich `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` und `StyleSheetChangeEvent`, nicht mehr aus Webinhalten verfügbar. Die `CSSGroupRuleRuleList` Schnittstelle, das Implementierungsdetail von [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), wurde ebenfalls entfernt ([Firefox Fehler 872934](https://bugzil.la/872934) und [Firefox Fehler 916871](https://bugzil.la/916871)).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) ignoriert jetzt Leerzeichen ([Firefox Fehler 711180](https://bugzil.la/711180)).
- [WebGL](/de/docs/Web/API/WebGL_API): `MOZ_`-präfixierte Erweiterungsstrings sind veraltet. Die Unterstützung für sie wird in Zukunft entfernt. Verwenden Sie nur nicht-präfixierte Erweiterungsstrings. Um Zugriff auf Entwurfserweiterungen zu erhalten, setzen Sie die `webgl.enable-draft-extensions` Präferenz ([Firefox Fehler 924176](https://bugzil.la/924176)).

### MathML

_Keine Änderung._

### SVG

- Das Mischen von SVG-Elementen mit der {{cssxref("mix-blend-mode")}} Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled` Präferenz muss auf `true` gesetzt werden ([Firefox Fehler 902525](https://bugzil.la/902525)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `downloads-indicator` Button wurde entfernt. Sie sollten jetzt das `downloads-button` Element verwenden. Wenn Sie überprüfen müssen, ob es sein Overlay geladen hat, überprüfen Sie das `indicator` Attribut auf diesem Button.
- Das `chrome://browser/skin/downloads/indicator.css` Stylesheet wird in Firefox nicht mehr referenziert.

## Sicherheit

- TLS 1.2 wurde für verbesserte Sicherheit implementiert ([Firefox Fehler 861266](https://bugzil.la/861266)).

## Siehe auch

- [Liste der Änderungen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) für Firefox 27.

### Ältere Versionen

{{Firefox_for_developers}}
