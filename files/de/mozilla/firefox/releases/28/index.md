---
title: Firefox 28 für Entwickler
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 28 wurde am 18. März 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Eigenschaft `console.exception` wurde hinzugefügt ([Firefox Bug 922214](https://bugzil.la/922214)).
- Die Eigenschaft [`console.assert()`](/de/docs/Web/API/Console/assert_static) wurde hinzugefügt ([Firefox Bug 760193](https://bugzil.la/760193)).
- App Manager: Ein neuer Manifest-Editor wurde hinzugefügt.
- App Manager: Die Toolbox, die zum Debuggen von Apps verwendet wird, ist jetzt in die App Manager-Benutzeroberfläche integriert.
- Web-Konsole: Ein "geteilte Konsole"-Modus wurde hinzugefügt - drücken Sie Escape, um die Konsole in jedem anderen Tool schnell zu öffnen.
- Web-Konsole: Ein dunkles Thema für die Ausgabe wurde hinzugefügt.
- Debugger: Minifizierten JavaScript-Code schön drucken.
- Debugger: Bewegen Sie die Maus über eine Variable oder klicken Sie darauf, um ein Popup anzuzeigen, das den aktuellen Wert anzeigt.
- Inspektor: Ein Farbwähler im Regel-Ansicht und verschiedene Tooltips wurden hinzugefügt.
- Browser-Toolbox: Ermöglicht es Add-on- und Plattformentwicklern, fast alle Entwicklerwerkzeuge zu nutzen, während sie den Browser selbst anvisieren.

Mehr Details finden Sie in [diesem Beitrag](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Unterstützung für mehrzeilige [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde hinzugefügt ([Firefox Bug 939901](https://bugzil.la/939901)).
- Langstielige ostasiatische [Counter-Styles](/de/docs/Web/CSS/list-style-type) wurden implementiert ([Firefox Bug 934072](https://bugzil.la/934072)).
- Experimentelle Unterstützung für die Eigenschaft {{cssxref("background-blend-mode")}} wurde hinzugefügt, ist aber standardmäßig deaktiviert ([Firefox Bug 841601](https://bugzil.la/841601)).
- Der Wert `none` wurde zu {{cssxref("font-variant-ligatures")}} hinzugefügt ([Firefox Bug 913264](https://bugzil.la/913264)).
- Unterstützung für die Benutzeraktion-Pseudoklasse {{cssxref(":hover")}} auf Pseudoelementen wurde implementiert ([Firefox Bug 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` und `<input type=number>` wurden implementiert, sind aber standardmäßig deaktiviert.

### JavaScript

- Die Implementierung von ECMAScript 2015 wird fortgesetzt:

  - Neue `Array`-Methoden wurden implementiert: {{jsxref("Array.prototype.entries()")}} und {{jsxref("Array.prototype.keys()")}} ([Firefox Bug 894658](https://bugzil.la/894658)).

- Ein Fehler, der verursachte, dass {{jsxref("Object.getOwnPropertyNames()")}} nicht die ungelösten Eigenschaften von {{jsxref("Error")}}-Objekten erkannte, wurde behoben ([Firefox Bug 724768](https://bugzil.la/724768)).

### Schnittstellen/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` meldet jetzt `maybe`. ([Firefox Bug 884275](https://bugzil.la/884275)).
- Die Methode [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById) wurde implementiert. Zum Beispiel `document.createDocumentFragment().getElementById()` ([Firefox Bug 933193](https://bugzil.la/933193)).
- Das Attribut [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wurde implementiert ([Firefox Bug 600117](https://bugzil.la/600117)).
- Der [`File`](/de/docs/Web/API/File)-Konstruktor, z.B. `new File(["foo"], "foo.txt")` wurde implementiert. ([Firefox Bug 819900](https://bugzil.la/819900)).
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) ist aus Datenschutzgründen nicht mehr aufzählbar ([Firefox Bug 757726](https://bugzil.la/757726)).
- Die beiden Attribute [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) geben jetzt CSS-Pixel zurück (und nicht mehr Geräte-Pixel) ([Firefox Bug 943668](https://bugzil.la/943668)).
- Die beiden Methoden `CanvasRenderingContext2D.drawSystemFocusRing()` und [`CanvasRenderingContext2D.drawCustomFocusRing()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) wurden implementiert. Die Einstellung `canvas.focusring.enabled` muss auf `true` gesetzt werden, um beide zu aktivieren ([Firefox Bug 540456](https://bugzil.la/540456)).
- Das Kontextattribut `willReadFrequently` für "`2d`"-Canvas-Kontexte wurde implementiert (siehe [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)) ([Firefox Bug 884226](https://bugzil.la/884226)).
- Die folgenden Attribute und Methoden von `NavigatorID` wurden an [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) implementiert, um deren Verwendung in Workern zu ermöglichen: [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName), [`Navigator.product`](/de/docs/Web/API/Navigator/product) und [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ([Firefox Bug 925847](https://bugzil.la/925847)).
- Die Eigenschaften [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) und [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) wurden von [`DocumentType`](/de/docs/Web/API/DocumentType) entfernt, aufgrund von Kompatibilitätsproblemen ([Firefox Bug 932501](https://bugzil.la/932501)).

### MathML

- Unterstützung des `mathvariant`-Attributs wurde hinzugefügt ([Firefox Bug 114365](https://bugzil.la/114365)).

### SVG

_Keine Änderung._

### Audio/Video

- Opus in WebM wird jetzt unterstützt ([Firefox Bug 887978](https://bugzil.la/887978)).
- Der VP9-Video-Decoder wird jetzt unterstützt ([Firefox Bug 833023](https://bugzil.la/833023)).

### Netzwerk

- Unterstützung von `SPDY/2` wurde entfernt.

## Änderungen für Add-ons und Mozilla-Entwickler

- Die Schnittstelle von `DeferredTask.jsm` wurde geändert, und die Methoden `isPending()`, `start()`, `flush()` und `cancel()` wurden entfernt ([Firefox Bug 940408](https://bugzil.la/940408)).

## Sicherheit

- CSP wurde in sandboxed iframes nicht erzwungen. Dies wurde behoben ([Firefox Bug 886164](https://bugzil.la/886164)).
- Die experimentelle CSP 1.1-Direktive `script-nonce` wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox Bug 855326](https://bugzil.la/855326)).

### Ältere Versionen

{{Firefox_for_developers}}
