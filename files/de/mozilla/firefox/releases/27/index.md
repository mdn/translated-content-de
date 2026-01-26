---
title: Firefox 27 Versionshinweise für Entwickler
short-title: Firefox 27
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 27 wurde am 4. Februar 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- Haltepunkte können nun auf DOM-Ereignissen gesetzt werden.
- JavaScript im Debugger-Panel kann mit dem { }-Button unminifiziert werden.
- Der Inspector verfügt jetzt über eine "edit-element-html"-Funktion, ohne dass ein Add-on benötigt wird.
- Hintergrund-URLs und Farben haben jetzt eine Vorschau im Inspector. Sogar das Überfahren von Canvas-Elementen gibt ein Pop-up mit einer Bildvorschau.
- Reflow-Protokollierung wurde hinzugefügt.
- Stile von SVG-Elementen sind jetzt inspizierbar ([Firefox-Bug 921191](https://bugzil.la/921191)).
- Das Problem, dass das Bild beim Klicken auf den URL-Link im CSS-Inspector nicht gefunden wurde, wurde behoben ([Firefox-Bug 921686](https://bugzil.la/921686)).
- Der {{HTTPHeader("SourceMap", "X-SourceMap")}}-Header wird nun unterstützt ([Firefox-Bug 765993](https://bugzil.la/765993)).

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Die `-moz-grab` und `-moz-grabbing` Schlüsselwörter der CSS {{cssxref("cursor")}}-Eigenschaft wurden auf `grab` und `grabbing` entprefixt ([Firefox-Bug 880672](https://bugzil.la/880672)).
- Unterstützung für die funktionalen Notationen `-moz-hsla()` und `-moz-rgba()` wurde entfernt. Nur die unpräpisierten Versionen, `hsla()` und `rgba()`, werden von nun an unterstützt ([Firefox-Bug 893319](https://bugzil.la/893319)).
- Der Wert `true` für {{cssxref("text-align")}} wurde hinzugefügt ([Firefox-Bug 929991](https://bugzil.la/929991)).
- Experimentelle Unterstützung von `position:sticky` ist nun standardmäßig in Nicht-Release-Builds aktiv ([Firefox-Bug 902992](https://bugzil.la/902992)). Für Release-Builds muss die `layout.css.sticky.enabled`-Einstellung weiterhin auf `true` gesetzt werden.
- Die {{cssxref("all")}}-Kurzschreibweise wurde hinzugefügt ([Firefox-Bug 842329](https://bugzil.la/842329)).
- Der {{cssxref("unset")}}-globale Wert wurde hinzugefügt; er ermöglicht das Zurücksetzen jeder CSS-Eigenschaft ([Firefox-Bug 921731](https://bugzil.la/921731)).
- Geschweifte Klammern sind in HTML `style`-Attributen nicht mehr erlaubt: `<div style="{ display: none }">` funktionierte im Quirks-Modus, aber nicht mehr [Firefox-Bug 915053](https://bugzil.la/915053).
- Die {{cssxref("overflow")}}-Eigenschaft funktioniert jetzt auf {{HTMLElement("fieldset")}} ([Firefox-Bug 261037](https://bugzil.la/261037)).

### HTML

- Der `color`-Wert des {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs wurde auf Desktop-Plattformen implementiert. Er war bereits auf mobilen Plattformen verfügbar.
- Die `allow-popups`-Richtlinie wird nun mit dem [`sandbox`](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt ([Firefox-Bug 766282](https://bugzil.la/766282)).
- Das Mischen von HTML-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled`-Einstellung muss auf `true` gesetzt werden ([Firefox-Bug 902525](https://bugzil.la/902525)).
- Die `typeMustMatch`-Eigenschaft des {{HTMLElement("object")}}-Elements wird nun unterstützt ([Firefox-Bug 827160](https://bugzil.la/827160)).

### JavaScript

Die [ECMAScript 2015](https://web.archive.org/web/20210612110055/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)-Implementierung wird fortgesetzt!

- Der [Spread Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird nun in Funktionsaufrufen unterstützt ([Firefox-Bug 762363](https://bugzil.la/762363)).
- Die mathematische Funktion {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} wurde implementiert ([Firefox-Bug 896264](https://bugzil.la/896264)).
- Der {{jsxref("Operators/yield*", "yield*")}}-Ausdruck ist jetzt implementiert ([Firefox-Bug 666396](https://bugzil.la/666396)).
- Die Objekte `MapIterator`, `SetIterator` und `ArrayIterator` entsprechen nun der Spezifikation ([Firefox-Bug 881226](https://bugzil.la/881226)).
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen erwarten jetzt das ES2015-Standard-[Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und bewegen sich weg vom alten SpiderMonkey-Iterator-Protokoll, das `StopIteration` verwendet.
- {{jsxref("String.match")}} und {{jsxref("String.replace")}} setzen jetzt {{jsxref("RegExp.lastIndex")}} zurück ([Firefox-Bug 501739](https://bugzil.la/501739)).

### Schnittstellen/APIs/DOM

- Unterstützung für die beiden `setRange()`-Methoden in der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle wurde hinzugefügt ([Firefox-Bug 850364](https://bugzil.la/850364)).
- Unterstützung für die beiden `setRange()`-Methoden in der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle wurde hinzugefügt ([Firefox-Bug 918940](https://bugzil.la/918940)).
- Die Methoden `getAllKeys()` und `openKeyCursor()` wurden zu [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) hinzugefügt ([Firefox-Bug 920633](https://bugzil.la/920633) und [Firefox-Bug 920800](https://bugzil.la/920800)).
- Die [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)-Schnittstelle wurde implementiert ([Firefox-Bug 913920](https://bugzil.la/913920)).
- Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle unterstützt jetzt die beiden Methoden [`getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash) und [`setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash) sowie die [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)-Eigenschaft ([Firefox-Bug 768067](https://bugzil.la/768067)).
- Das `typeMustMatch`-Attribut wurde in der [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)-Schnittstelle implementiert ([Firefox-Bug 827160](https://bugzil.la/827160)).
- Die Methoden `copyFromChannel()` und `copyToChannel()` wurden zu [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) hinzugefügt ([Firefox-Bug 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` ist jetzt unfälschbar ([Firefox-Bug 637248](https://bugzil.la/637248)).
- Das WebRTC-API-Objekt [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) enthält nun eine [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)-Methode zur Unterstützung bei der Signalisierung und Fehlersuche ([Firefox-Bug 928304](https://bugzil.la/928304)).
- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)-Methode wurde so angepasst, dass sie der endgültigen Spezifikation entspricht: Sie gibt jetzt `false` zurück, wenn die Liste zu lang oder zu große Einträge hat, anstatt eine Ausnahme auszulösen ([Firefox-Bug 884935](https://bugzil.la/884935)).
- Im Rahmen der laufenden Bemühungen zur Standardisierung von globalen Objekten sind die nicht standardmäßigen Stylesheet-Änderungsereignis-Schnittstellen, einschließlich `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` und `StyleSheetChangeEvent`, nicht mehr aus Web-Inhalten verfügbar. Die `CSSGroupRuleRuleList`-Schnittstelle, ein Implementierungsdetail von [`CSSRuleList`](/de/docs/Web/API/CSSRuleList), wurde ebenfalls entfernt ([Firefox-Bug 872934](https://bugzil.la/872934) und [Firefox-Bug 916871](https://bugzil.la/916871)).
- [`Window.atob()`](/de/docs/Web/API/Window/atob) ignoriert jetzt Leerzeichen ([Firefox-Bug 711180](https://bugzil.la/711180)).
- [WebGL](/de/docs/Web/API/WebGL_API): `MOZ_`-Präfix-Erweiterungszeichenfolgen sind veraltet. Die Unterstützung für diese wird in Zukunft entfernt. Verwenden Sie nur nicht-präfierte Erweiterungszeichenfolgen. Um Entwurfs-Erweiterungen zu erhalten, setzen Sie die Einstellungen `webgl.enable-draft-extensions` ([Firefox-Bug 924176](https://bugzil.la/924176)).

### MathML

_Keine Änderungen._

### SVG

- Das Mischen von SVG-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled`-Einstellung muss auf `true` gesetzt werden ([Firefox-Bug 902525](https://bugzil.la/902525)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Der `downloads-indicator`-Button ist weggefallen. Sie sollten jetzt das `downloads-button`-Element verwenden. Wenn Sie überprüfen müssen, ob es sein Overlay geladen hat, überprüfen Sie das `indicator`-Attribut an diesem Button.
- Das Stylesheet `chrome://browser/skin/downloads/indicator.css` wird in Firefox nicht mehr referenziert.

## Sicherheit

- TLS 1.2 wurde für verbesserte Sicherheit implementiert ([Firefox-Bug 861266](https://bugzil.la/861266)).

## Siehe auch

- [Liste der Änderungen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) für Firefox 27.
