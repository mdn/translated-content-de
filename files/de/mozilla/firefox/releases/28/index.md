---
title: Firefox 28 für Entwickler
short-title: Firefox 28
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 28 wurde am 18. März 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die `console.exception` Eigenschaft wurde hinzugefügt ([Firefox Bug 922214](https://bugzil.la/922214)).
- Die [`console.assert()`](/de/docs/Web/API/console/assert_static) Eigenschaft wurde hinzugefügt ([Firefox Bug 760193](https://bugzil.la/760193)).
- App Manager: Ein neuer Manifest-Editor wurde hinzugefügt.
- App Manager: Die Werkzeugleiste zur App-Debugging ist jetzt in der App-Manager-Benutzeroberfläche eingebettet.
- Web-Konsole: Ein "geteiltes Konsolen"-Modus wurde hinzugefügt - drücken Sie Escape, um die Konsole schnell in jedem anderen Werkzeug zu öffnen.
- Web-Konsole: Ein dunkles Thema für die Ausgabe wurde hinzugefügt.
- Debugger: Minifizierte JavaScript-Dateien schön darstellen.
- Debugger: Fahren Sie mit der Maus über eine Variable oder klicken Sie darauf, um ein Pop-up anzuzeigen, das den aktuellen Wert zeigt.
- Inspektor: Ein Farbwähler in der Regelliste und verschiedene Tooltips wurden hinzugefügt.
- Browser-Werkzeugkasten: Ermöglicht Add-on- und Plattform-Entwicklern die Nutzung fast aller Entwicklerwerkzeuge, während sie auf den Browser selbst abzielen.

Mehr Details in [diesem Beitrag](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Unterstützung für mehrzeilige [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde hinzugefügt ([Firefox Bug 939901](https://bugzil.la/939901)).
- Langformatische ostasiatische [Zählerstile](/de/docs/Web/CSS/list-style-type) wurden implementiert ([Firefox Bug 934072](https://bugzil.la/934072)).
- Experimentelle Unterstützung für die {{cssxref("background-blend-mode")}} Eigenschaft wurde hinzugefügt, ist aber standardmäßig deaktiviert ([Firefox Bug 841601](https://bugzil.la/841601)).
- Der `none` Wert wurde zu {{cssxref("font-variant-ligatures")}} hinzugefügt ([Firefox Bug 913264](https://bugzil.la/913264)).
- Unterstützung für die {{cssxref(":hover")}} Benutzeraktions-Pseudoklasse auf Pseudo-Elementen wurde implementiert ([Firefox Bug 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` und `<input type=number>` wurden implementiert, sind aber standardmäßig deaktiviert.

### JavaScript

- ECMAScript 2015 Implementierung geht weiter:
  - Neue `Array`-Methoden wurden implementiert: {{jsxref("Array.prototype.entries()")}} und {{jsxref("Array.prototype.keys()")}} ([Firefox Bug 894658](https://bugzil.la/894658)).

- Ein Fehler wurde behoben, bei dem {{jsxref("Object.getOwnPropertyNames()")}} unbehandelte Eigenschaften von {{jsxref("Error")}} Objekten nicht sah ([Firefox Bug 724768](https://bugzil.la/724768)).

### Schnittstellen/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` meldet jetzt `maybe`. ([Firefox Bug 884275](https://bugzil.la/884275)).
- Die [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById) Methode wurde implementiert, z.B. `document.createDocumentFragment().getElementById()` ([Firefox Bug 933193](https://bugzil.la/933193)).
- Das [`KeyboardEvent.repeat`](/de/docs/Web/API/KeyboardEvent/repeat) Attribut wurde implementiert ([Firefox Bug 600117](https://bugzil.la/600117)).
- Der [`File`](/de/docs/Web/API/File) Konstruktor, z.B. `new File(["foo"], "foo.txt")` wurde implementiert ([Firefox Bug 819900](https://bugzil.la/819900)).
- [`Navigator.plugins`](/de/docs/Web/API/Navigator/plugins) ist aus Datenschutzgründen nicht mehr aufzählbar ([Firefox Bug 757726](https://bugzil.la/757726)).
- Die beiden Attribute [`Window.screenX`](/de/docs/Web/API/Window/screenX) und [`Window.screenY`](/de/docs/Web/API/Window/screenY) geben jetzt CSS-Pixel zurück (und keine Geräte-Pixel mehr) ([Firefox Bug 943668](https://bugzil.la/943668)).
- Die beiden Methoden `CanvasRenderingContext2D.drawSystemFocusRing()` und [`CanvasRenderingContext2D.drawCustomFocusRing()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) wurden implementiert. Die Präferenz `canvas.focusring.enabled` muss auf `true` gesetzt werden, um beide zu aktivieren ([Firefox Bug 540456](https://bugzil.la/540456)).
- Das `willReadFrequently` Kontextattribut für 2D-Canvas-Kontexte wurde implementiert (siehe [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext)) ([Firefox Bug 884226](https://bugzil.la/884226)).
- Die folgenden Attribute und Methoden von `NavigatorID` wurden auf [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) implementiert, um ihre Nutzung in Workern zu ermöglichen: [`Navigator.appCodeName`](/de/docs/Web/API/Navigator/appCodeName), [`Navigator.product`](/de/docs/Web/API/Navigator/product), und [`Navigator.taintEnabled`](/de/docs/Web/API/Navigator/taintEnabled) ([Firefox Bug 925847](https://bugzil.la/925847)).
- Die [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) und [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) Eigenschaften wurden von [`DocumentType`](/de/docs/Web/API/DocumentType) entfernt, aufgrund von Kompatibilitätsproblemen ([Firefox Bug 932501](https://bugzil.la/932501)).

### MathML

- Unterstützung für das `mathvariant` Attribut wurde hinzugefügt ([Firefox Bug 114365](https://bugzil.la/114365)).

### SVG

_Keine Änderung._

### Audio/Video

- Opus in WebM wird jetzt unterstützt ([Firefox Bug 887978](https://bugzil.la/887978)).
- Der VP9-Videodecoder wird jetzt unterstützt ([Firefox Bug 833023](https://bugzil.la/833023)).

### Netzwerk

- Unterstützung für `SPDY/2` wurde entfernt.

## Änderungen für Add-ons und Mozilla-Entwickler

- Die Schnittstelle von `DeferredTask.jsm` wurde geändert, und die Methoden `isPending()`, `start()`, `flush()`, und `cancel()` wurden entfernt ([Firefox Bug 940408](https://bugzil.la/940408)).

## Sicherheit

- CSP wurde in sandboxed iframes nicht durchgesetzt. Dies wurde behoben ([Firefox Bug 886164](https://bugzil.la/886164)).
- Die experimentelle CSP 1.1 Direktive `script-nonce` wurde implementiert. Die Präferenz `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox Bug 855326](https://bugzil.la/855326)).
