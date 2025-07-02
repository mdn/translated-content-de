---
title: Firefox 28 für Entwickler
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 28 wurde am 18. März 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklertools

- Die Eigenschaft `console.exception` wurde hinzugefügt ([Firefox-Bug 922214](https://bugzil.la/922214)).
- Die Eigenschaft [`console.assert()`](/de/docs/Web/API/console/assert_static) wurde hinzugefügt ([Firefox-Bug 760193](https://bugzil.la/760193)).
- App-Manager: Ein neuer Manifest-Editor wurde hinzugefügt.
- App-Manager: Das Werkzeugkasten zum Debuggen von Apps ist jetzt in die Benutzeroberfläche des App-Managers eingebettet.
- Webkonsole: Ein "Split-Console"-Modus wurde hinzugefügt - drücken Sie Escape, um die Konsole schnell in einem anderen Tool zu öffnen.
- Webkonsole: Ein dunkles Thema für die Ausgabe wurde hinzugefügt.
- Debugger: Minified JavaScript wird lesefreundlich dargestellt.
- Debugger: Bewegen Sie die Maus über eine Variable oder klicken Sie darauf, um ein Pop-up anzuzeigen, das den aktuellen Wert zeigt.
- Inspektor: Ein Farbwähler in der Rule-Ansicht und verschiedene Tooltips wurden hinzugefügt.
- Browser-Werkzeugkasten: Ermöglicht es Add-on- und Plattformentwicklern, fast alle Entwicklertools zu verwenden, während sie den Browser selbst anvisieren.

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Unterstützung für mehrzeilige [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde hinzugefügt ([Firefox-Bug 939901](https://bugzil.la/939901)).
- Langschriftzeichenstile für Ostasiatische [Zähler-Stile](/de/docs/Web/CSS/list-style-type) wurden implementiert ([Firefox-Bug 934072](https://bugzil.la/934072)).
- Experimentelle Unterstützung für die Eigenschaft {{cssxref("background-blend-mode")}} wurde hinzugefügt, ist aber standardmäßig deaktiviert ([Firefox-Bug 841601](https://bugzil.la/841601)).
- Der Wert `none` wurde zu {{cssxref("font-variant-ligatures")}} hinzugefügt ([Firefox-Bug 913264](https://bugzil.la/913264)).
- Unterstützung für die {{cssxref(":hover")}} Benutzeraktions-Pseudoklasse auf Pseudo-Elementen wurde implementiert ([Firefox-Bug 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` und `<input type=number>` wurden implementiert, standardmäßig jedoch deaktiviert.

### JavaScript

- Die Implementierung von ECMAScript 2015 wird fortgesetzt:
  - Neue `Array`-Methoden wurden implementiert: {{jsxref("Array.prototype.entries()")}} und {{jsxref("Array.prototype.keys()")}} ([Firefox-Bug 894658](https://bugzil.la/894658)).

- Ein Fehler, der dazu führte, dass {{jsxref("Object.getOwnPropertyNames()")}} ungelöste Eigenschaften von {{jsxref("Error")}} Objekten nicht erkannte, wurde behoben ([Firefox-Bug 724768](https://bugzil.la/724768)).

### Schnittstellen/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` gibt nun `maybe` zurück. ([Firefox-Bug 884275](https://bugzil.la/884275)).
- Die Methode [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById) wurde implementiert, z. B. `document.createDocumentFragment().getElementById()` ([Firefox-Bug 933193](https://bugzil.la/933193)).
- Das Attribut [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) wurde implementiert ([Firefox-Bug 600117](https://bugzil.la/600117)).
- Der Konstruktor [`File`](/de/docs/Web/API/File), z. B. `new File(["foo"], "foo.txt")`, wurde implementiert. ([Firefox-Bug 819900](https://bugzil.la/819900)).
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) ist aus Datenschutzgründen nicht mehr aufzählbar ([Firefox-Bug 757726](https://bugzil.la/757726)).
- Die beiden Attribute [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) geben nun CSS-Pixel zurück (und nicht mehr Gerätepixel) ([Firefox-Bug 943668](https://bugzil.la/943668)).
- Die beiden Methoden `CanvasRenderingContext2D.drawSystemFocusRing()` und [`CanvasRenderingContext2D.drawCustomFocusRing()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) wurden implementiert. Die Präferenz `canvas.focusring.enabled` muss auf `true` gesetzt sein, um beide zu aktivieren ([Firefox-Bug 540456](https://bugzil.la/540456)).
- Das `willReadFrequently` Kontextattribut für 2D-Canvas-Kontexte wurde implementiert, siehe [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) ([Firefox-Bug 884226](https://bugzil.la/884226)).
- Die folgenden Attribute und Methoden von `NavigatorID` wurden auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) implementiert, um ihre Verwendung in Workern zu ermöglichen: [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName), [`Navigator.product`](/de/docs/Web/API/Navigator/product), und [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ([Firefox-Bug 925847](https://bugzil.la/925847)).
- Die Eigenschaften [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) und [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) wurden wegen Kompatibilitätsproblemen aus [`DocumentType`](/de/docs/Web/API/DocumentType) entfernt ([Firefox-Bug 932501](https://bugzil.la/932501)).

### MathML

- Unterstützung für das `mathvariant` Attribut wurde hinzugefügt ([Firefox-Bug 114365](https://bugzil.la/114365)).

### SVG

_Keine Änderung._

### Audio/Video

- Opus in WebM wird jetzt unterstützt ([Firefox-Bug 887978](https://bugzil.la/887978)).
- Der VP9-Videodecoder wird jetzt unterstützt ([Firefox-Bug 833023](https://bugzil.la/833023)).

### Netzwerk

- Unterstützung von `SPDY/2` wurde entfernt.

## Änderungen für Add-ons und Mozilla-Entwickler

- Die Schnittstelle von `DeferredTask.jsm` wurde geändert, und die Methoden `isPending()`, `start()`, `flush()`, und `cancel()` wurden entfernt ([Firefox-Bug 940408](https://bugzil.la/940408)).

## Sicherheit

- CSP wurde in sandboxed iframes nicht durchgesetzt. Dies wurde behoben ([Firefox-Bug 886164](https://bugzil.la/886164)).
- Die experimentelle CSP 1.1 Direktive `script-nonce` wurde implementiert. Die Präferenz `security.csp.experimentalEnabled` sollte auf `true` gesetzt sein, um diese Funktionalität zu aktivieren ([Firefox-Bug 855326](https://bugzil.la/855326)).

### Ältere Versionen

{{Firefox_for_developers}}
