---
title: Firefox 28 für Entwickler
slug: Mozilla/Firefox/Releases/28
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 28 wurde am 18. März 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Eigenschaft `console.exception` wurde hinzugefügt ([Firefox-Bug 922214](https://bugzil.la/922214)).
- Die {{domxref("console/assert_static", "console.assert()")}}-Eigenschaft wurde hinzugefügt ([Firefox-Bug 760193](https://bugzil.la/760193)).
- App-Verwalter: Ein neuer Manifest-Editor wurde hinzugefügt.
- App-Verwalter: Das Werkzeug zum Debuggen von Apps ist jetzt in die App-Verwaltungs-UI eingebettet.
- Webkonsole: Ein „geteiltes Konsolen“-Modus wurde hinzugefügt – drücken Sie Escape, um die Konsole schnell in jedem anderen Werkzeug zu öffnen.
- Webkonsole: Ein dunkles Thema für die Ausgabe wurde hinzugefügt.
- Debugger: Minifizierte JavaScript-Daten schön ausdrucken.
- Debugger: Schweben Sie über eine beliebige Variable oder klicken Sie darauf, um ein Popup anzuzeigen, das den aktuellen Wert anzeigt.
- Inspektor: Ein Farbwähler wurde in der Regelansicht und in verschiedenen Tooltips hinzugefügt.
- Browser-Toolbox: Ermöglicht Add-on- und Plattformentwicklern die Verwendung fast aller Entwicklerwerkzeuge, während sie auf den Browser selbst abzielen.

Weitere Details in [diesem Beitrag](https://hacks.mozilla.org/2013/12/split-console-pretty-print-minified-js-and-more-firefox-developer-tools-episode-28/).

### CSS

- Unterstützung für mehrzeiliges [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wurde hinzugefügt ([Firefox-Bug 939901](https://bugzil.la/939901)).
- Langhand-Ostasiatische [Counter-Styles](/de/docs/Web/CSS/list-style-type) wurden implementiert ([Firefox-Bug 934072](https://bugzil.la/934072)).
- Experimentelle Unterstützung für die {{cssxref("background-blend-mode")}}-Eigenschaft wurde hinzugefügt, ist aber standardmäßig deaktiviert ([Firefox-Bug 841601](https://bugzil.la/841601)).
- Der Wert `none` wurde zu {{cssxref("font-variant-ligatures")}} hinzugefügt ([Firefox-Bug 913264](https://bugzil.la/913264)).
- Unterstützung für die {{cssxref(":hover")}} Benutzeraktionen-Pseudo-Klasse auf Pseudoelementen wurde implementiert ([Firefox-Bug 922669](https://bugzil.la/922669)).

### HTML

- `<input type=color>` und `<input type=number>` wurden implementiert, sind aber standardmäßig deaktiviert.

### JavaScript

- ECMAScript 2015 Implementierung läuft weiter:

  - Neue `Array`-Methoden wurden implementiert: {{jsxref("Array.prototype.entries()")}} und {{jsxref("Array.prototype.keys()")}} ([Firefox-Bug 894658](https://bugzil.la/894658)).

- Ein Fehler, der dazu führte, dass {{jsxref("Object.getOwnPropertyNames()")}} die ungelösten Eigenschaften von {{jsxref("Error")}}-Objekten nicht sah, wurde behoben ([Firefox-Bug 724768](https://bugzil.la/724768)).

### Schnittstellen/APIs/DOM

- `HTMLVideoElement.canPlayType('video/webm')` gibt jetzt `maybe` zurück. ([Firefox-Bug 884275](https://bugzil.la/884275)).
- Die Methode {{domxref("DocumentFragment.getElementById()")}} wurde implementiert. Beispiel: `document.createDocumentFragment().getElementById()` ([Firefox-Bug 933193](https://bugzil.la/933193)).
- Das Attribut {{domxref("KeyboardEvent.repeat")}} wurde implementiert ([Firefox-Bug 600117](https://bugzil.la/600117)).
- Der {{domxref("File")}}-Konstruktor, z. B. `new File(["foo"], "foo.txt")`, wurde implementiert ([Firefox-Bug 819900](https://bugzil.la/819900)).
- Die {{domxref("Navigator.plugins")}} ist aus Datenschutzgründen nicht mehr auflistbar ([Firefox-Bug 757726](https://bugzil.la/757726)).
- Die beiden Attribute {{domxref("Window.screenX")}} und {{domxref("Window.screenY")}} geben jetzt CSS-Pixel (und nicht mehr Gerätepixel) zurück ([Firefox-Bug 943668](https://bugzil.la/943668)).
- Die beiden Methoden `CanvasRenderingContext2D.drawSystemFocusRing()` und {{domxref("CanvasRenderingContext2D/drawFocusIfNeeded", "CanvasRenderingContext2D.drawCustomFocusRing()")}} wurden implementiert. Die Einstellung `canvas.focusring.enabled` muss auf `true` gesetzt sein, um beide zu aktivieren ([Firefox-Bug 540456](https://bugzil.la/540456)).
- Das `willReadFrequently`-Kontextattribut für "`2d`"-Canvas-Kontexte wurde implementiert (siehe {{domxref("HTMLCanvasElement.getContext()")}}) ([Firefox-Bug 884226](https://bugzil.la/884226)).
- Die folgenden Attribute und Methoden von `NavigatorID` wurden auf {{domxref("WorkerNavigator")}} implementiert, um deren Nutzung in Workern zu ermöglichen: {{domxref("Navigator.appCodeName")}}, {{domxref("Navigator.product")}}, und {{domxref("Navigator.taintEnabled")}} ([Firefox-Bug 925847](https://bugzil.la/925847)).
- Die {{domxref("Element/previousElementSibling", "previousElementSibling")}} und {{domxref("Element/nextElementSibling", "nextElementSibling")}} Eigenschaften wurden aus {{domxref("DocumentType")}} entfernt, aufgrund von Kompatibilitätsproblemen ([Firefox-Bug 932501](https://bugzil.la/932501)).

### MathML

- Unterstützung des `mathvariant`-Attributs wurde hinzugefügt ([Firefox-Bug 114365](https://bugzil.la/114365)).

### SVG

_Keine Änderung._

### Audio/Video

- Opus in WebM wird jetzt unterstützt ([Firefox-Bug 887978](https://bugzil.la/887978)).
- Der VP9-Videodecoder wird jetzt unterstützt ([Firefox-Bug 833023](https://bugzil.la/833023)).

### Netzwerk

- Unterstützung von `SPDY/2` wurde entfernt.

## Änderungen für Add-ons und Mozilla-Entwickler

- Das Interface von `DeferredTask.jsm` wurde geändert, und die Methoden `isPending()`, `start()`, `flush()`, und `cancel()` wurden entfernt ([Firefox-Bug 940408](https://bugzil.la/940408)).

## Sicherheit

- CSP wurde in sandboxierten Iframes nicht durchgesetzt. Dies wurde behoben ([Firefox-Bug 886164](https://bugzil.la/886164)).
- Die experimentelle CSP 1.1 Direktive `script-nonce` wurde implementiert. Die Einstellung `security.csp.experimentalEnabled` sollte auf `true` gesetzt werden, um diese Funktionalität zu aktivieren ([Firefox-Bug 855326](https://bugzil.la/855326)).

### Ältere Versionen

{{Firefox_for_developers}}
