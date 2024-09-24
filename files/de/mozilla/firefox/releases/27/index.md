---
title: Firefox 27 für Entwickler
slug: Mozilla/Firefox/Releases/27
l10n:
  sourceCommit: dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{FirefoxSidebar}}

Firefox 27 wurde am 4. Februar 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- Breakpoints können jetzt auf DOM-Ereignissen gesetzt werden.
- JavaScript im Debugger-Panel kann mit der { }-Taste nicht minimiert werden.
- Der Inspektor verfügt jetzt über eine "edit-element-html"-Funktion, ohne dass ein Add-on erforderlich ist.
- Hintergrund-URLs und Farben haben eine Vorschau im Inspektor. Sogar beim Hover über Canvas-Elemente wird eine Pop-up-Bildvorschau angezeigt.
- Reflow-Logging wurde hinzugefügt.
- Stile von SVG-Elementen sind jetzt inspizierbar ([Firefox Bug 921191](https://bugzil.la/921191)).
- Der Fehler, dass ein Bild beim Klicken auf einen URL-Link im CSS-Inspektor nicht gefunden wird, wurde behoben ([Firefox Bug 921686](https://bugzil.la/921686)).
- Der {{HTTPHeader("SourceMap", "X-SourceMap")}}-Header wird jetzt unterstützt ([Firefox Bug 765993](https://bugzil.la/765993)).

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- Die `-moz-grab`- und `-moz-grabbing`-Schlüsselwörter auf der CSS-{{cssxref("cursor")}}-Eigenschaft wurden ohne Präfix zu `grab` und `grabbing` geändert ([Firefox Bug 880672](https://bugzil.la/880672)).
- Die Unterstützung für die `-moz-hsla()`- und `-moz-rgba()`-Funktionsnotationen wurde eingestellt. Nur die Versionen ohne Präfix, `hsla()` und `rgba()`, werden ab sofort unterstützt ([Firefox Bug 893319](https://bugzil.la/893319)).
- Der "`true`"-Wert für {{cssxref("text-align")}} wurde hinzugefügt ([Firefox Bug 929991](https://bugzil.la/929991)).
- Experimentelle Unterstützung von `position:sticky` ist standardmäßig in Nicht-Release-Builds aktiviert ([Firefox Bug 902992](https://bugzil.la/902992)). Für Release-Builds muss die `layout.css.sticky.enabled`-Präferenz weiterhin auf `true` gesetzt werden.
- Die {{cssxref("all")}}-Kurzschreibweise wurde hinzugefügt ([Firefox Bug 842329](https://bugzil.la/842329)).
- Der {{cssxref("unset")}}-globale Wert wurde hinzugefügt; er ermöglicht das Zurücksetzen einer beliebigen CSS-Eigenschaft ([Firefox Bug 921731](https://bugzil.la/921731)).
- Geschweifte Klammern sind in HTML-`style`-Attributen nicht mehr erlaubt: Das Schreiben von `<div style="{ display: none }">` funktionierte im Quirks-Modus, aber nicht mehr [Firefox Bug 915053](https://bugzil.la/915053).
- Die {{cssxref("overflow")}}-Eigenschaft funktioniert jetzt auf {{HTMLElement("fieldset")}} ([Firefox Bug 261037](https://bugzil.la/261037)).

### HTML

- Der `color`-Wert des {{HTMLElement("input")}} [`type`](/de/docs/Web/HTML/Element/input#type)-Attributes wurde auf Desktop-Plattformen implementiert. Er war bereits auf mobilen Plattformen verfügbar.
- Die `allow-popups`-Richtlinie wird jetzt mit dem [`sandbox`](/de/docs/Web/HTML/Element/iframe#sandbox)-Attribut des {{HTMLElement("iframe")}}-Elements unterstützt ([Firefox Bug 766282](https://bugzil.la/766282)).
- Die Mischung von HTML-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled`-Präferenz muss auf `true` gesetzt werden ([Firefox Bug 902525](https://bugzil.la/902525)).
- Die {{domxref("Object.typeMustMatch", "typeMustMatch")}}-Eigenschaft des {{HTMLElement("object")}}-Elements wird jetzt unterstützt ([Firefox Bug 827160](https://bugzil.la/827160)).

### JavaScript

[ECMAScript 2015](/de/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla)-Implementierung setzt sich fort!

- Der [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird jetzt in Funktionsaufrufen unterstützt ([Firefox Bug 762363](https://bugzil.la/762363)).
- Die mathematische Funktion {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} wurde implementiert ([Firefox Bug 896264](https://bugzil.la/896264)).
- Der {{jsxref("Operators/yield*", "yield*")}}-Ausdruck wird jetzt implementiert ([Firefox Bug 666396](https://bugzil.la/666396)).
- Die `MapIterator`, `SetIterator` und `ArrayIterator` Objekte entsprechen jetzt der Spezifikation ([Firefox Bug 881226](https://bugzil.la/881226)).
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen erwarten jetzt das ES2015-Standard-[Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) anstelle des alten SpiderMonkey-Iterator-Protokolls unter Verwendung von `StopIteration`.
- {{jsxref("String.match")}} und {{jsxref("String.replace")}} setzen jetzt {{jsxref("RegExp.lastIndex")}} zurück ([Firefox Bug 501739](https://bugzil.la/501739)).

### Schnittstellen/APIs/DOM

- Unterstützung für die beiden `setRange()`-Methoden auf der {{domxref("HTMLInputElement")}}-Schnittstelle wurde hinzugefügt ([Firefox Bug 850364](https://bugzil.la/850364)).
- Unterstützung für die beiden `setRange()`-Methoden auf der {{domxref("HTMLTextAreaElement")}}-Schnittstelle wurde hinzugefügt ([Firefox Bug 918940](https://bugzil.la/918940)).
- Die Methoden `getAllKeys()` und `openKeyCursor()` wurden zu {{domxref("IDBObjectStore")}} hinzugefügt ([Firefox Bug 920633](https://bugzil.la/920633) und [Firefox Bug 920800](https://bugzil.la/920800)).
- Die {{domxref("HTMLFormControlsCollection")}}-Schnittstelle wurde implementiert ([Firefox Bug 913920](https://bugzil.la/913920)).
- Die {{domxref("CanvasRenderingContext2D")}}-Schnittstelle unterstützt jetzt die beiden Methoden {{domxref("CanvasRenderingContext2D.getLineDash()", "getLineDash()")}} und {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} und die {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}-Eigenschaft ([Firefox Bug 768067](https://bugzil.la/768067)).
- Das `typeMustMatch`-Attribut wurde auf der {{domxref("HTMLObjectElement")}}-Schnittstelle implementiert ([Firefox Bug 827160](https://bugzil.la/827160)).
- Die `copyFromChannel()` und `copyToChannel()`-Methoden wurden zu {{domxref("AudioBuffer")}} hinzugefügt ([Firefox Bug 915524](https://bugzil.la/915524)).
- `Event.isTrusted()` ist jetzt nicht mehr fälschlich ([Firefox Bug 637248](https://bugzil.la/637248)).
- Das WebRTC API's {{domxref("RTCIceCandidate")}}-Objekt enthält jetzt eine {{domxref("RTCIceCandidate.toJSON", "toJSON()")}}-Methode, die beim Signalisieren und Debuggen hilft ([Firefox Bug 928304](https://bugzil.la/928304)).
- Die {{domxref("Navigator.vibrate()")}}-Methode wurde angepasst, um der endgültigen Spezifikation zu entsprechen: Sie gibt jetzt `false` zurück, wenn die Liste zu lang ist oder zu große Einträge hat, anstelle eines Wurfs ([Firefox Bug 884935](https://bugzil.la/884935)).
- Im Rahmen des laufenden Bestrebens, globale Objekte zu standardisieren, sind die nicht standardmäßigen Schnittstellen für Stylesheet-Änderungsereignisse, einschließlich `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` und `StyleSheetChangeEvent`, nicht mehr über Webinhalte verfügbar. Die `CSSGroupRuleRuleList`-Schnittstelle, das Implementierungsdetail von {{domxref("CSSRuleList")}}, wurde ebenfalls entfernt ([Firefox Bug 872934](https://bugzil.la/872934) und [Firefox Bug 916871](https://bugzil.la/916871)).
- {{domxref("Window.atob()")}} ignoriert jetzt Leerzeichen ([Firefox Bug 711180](https://bugzil.la/711180)).
- [WebGL](/de/docs/Web/API/WebGL_API): `MOZ_`-präfixierte Erweiterungsstrings sind veraltet. Die Unterstützung dafür wird in Zukunft entfernt. Verwenden Sie nur unpräfixte Erweiterungsstrings. Um Entwurfs-Erweiterungen zu erhalten, setzen Sie die `webgl.enable-draft-extensions`-Präferenzen ([Firefox Bug 924176](https://bugzil.la/924176)).

### MathML

_Keine Änderung._

### SVG

- Das Mischen von SVG-Elementen mit der {{cssxref("mix-blend-mode")}}-Eigenschaft wurde implementiert. Die `layout.css.mix-blend-mode.enabled`-Präferenz muss auf `true` gesetzt werden ([Firefox Bug 902525](https://bugzil.la/902525)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Die `downloads-indicator`-Schaltfläche ist weggefallen. Sie sollten jetzt das `downloads-button`-Element verwenden. Wenn Sie überprüfen müssen, ob es sein Overlay geladen hat, überprüfen Sie das `indicator`-Attribut auf dieser Schaltfläche.
- Das `chrome://browser/skin/downloads/indicator.css`-Stylesheet wird nicht mehr in Firefox referenziert.

## Sicherheit

- TLS 1.2 wurde für verbesserte Sicherheit implementiert ([Firefox Bug 861266](https://bugzil.la/861266)).

## Siehe auch

- [Liste der Änderungen](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) für Firefox 27.

### Ältere Versionen

{{Firefox_for_developers}}
