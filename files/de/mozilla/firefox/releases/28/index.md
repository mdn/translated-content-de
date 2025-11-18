---
title: Firefox 28 Versionshinweise für Entwickler
short-title: Firefox 28
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 28 wurde am 18. März 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Entwickler von Firefox, Gecko und Erweiterungen nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die `console.exception` Eigenschaft wurde hinzugefügt ([Firefox Fehler 922214](https://bugzil.la/922214)).
- Die [`console.assert()`](/de/docs/Web/API/console/assert_static) Methode wurde hinzugefügt ([Firefox Fehler 760193](https://bugzil.la/760193)).
- App Manager: Ein neuer Manifest-Editor wurde hinzugefügt.
- App Manager: Die Toolbox zur Fehlersuche in Apps ist nun in die App Manager UI eingebettet.
- Web-Konsole: Ein "Split Console"-Modus wurde hinzugefügt - Drücken Sie Escape, um die Konsole schnell in jedem anderen Werkzeug zu öffnen.
- Web-Konsole: Ein dunkles Thema für die Ausgabe wurde hinzugefügt.
- Debugger: Minimiertes JavaScript hübsch drucken.
- Debugger: Überfahren Sie eine Variable oder klicken Sie darauf, um ein Pop-up zu öffnen, das den aktuellen Wert anzeigt.
- Inspektor: Ein Farbwähler im Regelansicht und verschiedene Tooltips wurden hinzugefügt.
- Browser-Toolbox: Ermöglicht Entwicklern von Erweiterungen und Plattformen, fast alle Entwicklerwerkzeuge direkt im Browser zu verwenden.

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Unterstützung für mehrzeilige [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wurde hinzugefügt ([Firefox Fehler 939901](https://bugzil.la/939901)).
- Langform Ostasiatische [Zählstile](/de/docs/Web/CSS/Reference/Properties/list-style-type) wurden implementiert ([Firefox Fehler 934072](https://bugzil.la/934072)).
- Experimentelle Unterstützung für die {{cssxref("background-blend-mode")}} Eigenschaft wurde hinzugefügt, ist jedoch standardmäßig deaktiviert ([Firefox Fehler 841601](https://bugzil.la/841601)).
- Der `none` Wert wurde zu {{cssxref("font-variant-ligatures")}} hinzugefügt ([Firefox Fehler 913264](https://bugzil.la/913264)).
- Unterstützung für die {{cssxref(":hover")}} Benutzeraktions-Pseudoklasse bei Pseudo-Elementen wurde implementiert ([Firefox Fehler 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` und `<input type=number>` wurden implementiert, sind aber standardmäßig deaktiviert.

### JavaScript

- Die Implementierung von ECMAScript 2015 wird fortgesetzt:
  - Neue `Array` Methoden wurden implementiert: {{jsxref("Array.prototype.entries()")}} und {{jsxref("Array.prototype.keys()")}} ([Firefox Fehler 894658](https://bugzil.la/894658)).

- Ein Fehler, der dazu führte, dass {{jsxref("Object.getOwnPropertyNames()")}} in {{jsxref("Error")}} Objekten ungelöste Eigenschaften nicht sehen konnte, wurde behoben ([Firefox Fehler 724768](https://bugzil.la/724768)).

### Schnittstellen/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` meldet jetzt `maybe`. ([Firefox Fehler 884275](https://bugzil.la/884275)).
- Die Methode [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById) wurde implementiert. Z.B. `document.createDocumentFragment().getElementById()` ([Firefox Fehler 933193](https://bugzil.la/933193)).
- Das Attribut [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wurde implementiert ([Firefox Fehler 600117](https://bugzil.la/600117)).
- Der Konstruktor [`File`](/de/docs/Web/API/File), z.B. `new File(["foo"], "foo.txt")`, wurde implementiert. ([Firefox Fehler 819900](https://bugzil.la/819900)).
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) ist aus Datenschutzgründen nicht mehr aufzählbar ([Firefox Fehler 757726](https://bugzil.la/757726)).
- Die beiden Attribute [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) geben jetzt CSS-Pixel (und nicht mehr Geräte-Pixel) zurück ([Firefox Fehler 943668](https://bugzil.la/943668)).
- Die beiden Methoden `CanvasRenderingContext2D.drawSystemFocusRing()` und [`CanvasRenderingContext2D.drawCustomFocusRing()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) wurden implementiert. Die Präferenz `canvas.focusring.enabled` muss auf `true` gesetzt werden, um beide zu aktivieren ([Firefox Fehler 540456](https://bugzil.la/540456)).
- Das `willReadFrequently` Kontextattribut für 2D-Canvas-Kontexte wurde implementiert (siehe [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)) ([Firefox Fehler 884226](https://bugzil.la/884226)).
- Die folgenden Attribute und Methoden von `NavigatorID` wurden auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) implementiert, um deren Nutzung in Workern zu ermöglichen: [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName), [`Navigator.product`](/de/docs/Web/API/Navigator/product) und [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ([Firefox Fehler 925847](https://bugzil.la/925847)).
- Die Eigenschaften [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) und [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) wurden aus [`DocumentType`](/de/docs/Web/API/DocumentType) entfernt, aufgrund von Kompatibilitätsproblemen ([Firefox Fehler 932501](https://bugzil.la/932501)).

### MathML

- Unterstützung des `mathvariant` Attributs wurde hinzugefügt ([Firefox Fehler 114365](https://bugzil.la/114365)).

### SVG

_Keine Änderung._

### Audio/Video

- Opus in WebM wird jetzt unterstützt ([Firefox Fehler 887978](https://bugzil.la/887978)).
- Der VP9-Videodecoder wird jetzt unterstützt ([Firefox Fehler 833023](https://bugzil.la/833023)).

### Netzwerk

- Unterstützung von `SPDY/2` wurde entfernt.

## Änderungen für Add-ons und Mozilla-Entwickler

- Die Schnittstelle von `DeferredTask.jsm` wurde geändert, und die Methoden `isPending()`, `start()`, `flush()` und `cancel()` wurden entfernt ([Firefox Fehler 940408](https://bugzil.la/940408)).

## Sicherheit

- CSP wurde in sandboxed iframes nicht durchgesetzt. Dies wurde behoben ([Firefox Fehler 886164](https://bugzil.la/886164)).
- Die experimentelle CSP 1.1 Direktive `script-nonce` wurde implementiert. Die Präferenz `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox Fehler 855326](https://bugzil.la/855326)).
