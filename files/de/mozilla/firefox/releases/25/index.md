---
title: Firefox 25 für Entwickler
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Neu in den Firefox DevTools

- Der Inspektor bietet jetzt Autovervollständigung für CSS-Namen und -Werte.
- Der Debugger erlaubt es jetzt, Skriptdateien als "Black Box" zu definieren, um zu verhindern, dass Haltepunkte im Bibliothekscode stoppen, an dem Sie nicht interessiert sind.
- Der Profiler hat jetzt die Möglichkeit, Profiling-Ergebnisse zu speichern und zu importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Firefox-Entwicklertools.
- Das Netzwerk-Panel hat ein Rechtsklick-Kontextmenü mit Befehlen zum Kopieren und erneuten Senden von URLs.
- Zahlreiche Änderungen im Hintergrund können es erforderlich machen, dass Add-ons, die die DevTools modifizieren, umgeschrieben werden müssen.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der CSS-Eigenschaft {{cssxref("background-attachment")}} wurde hinzugefügt ([Firefox Bug 483446](https://bugzil.la/483446)).
- Die Unterstützung einer nicht standardmäßigen, nur von Mozilla unterstützten Media Query zur Bestimmung der Betriebssystemversion wurde hinzugefügt: [`-moz-os-version`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-os-version) ([Firefox Bug 810399](https://bugzil.la/810399)). Diese Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox Bug 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt jetzt die funktionelle Notation `hue-rotate()` ([Firefox Bug 897392](https://bugzil.la/897392)). Sie ist standardmäßig noch deaktiviert.
- `page-break-inside`: `avoid` funktioniert jetzt mit der Höhe eines Blocks ([Firefox Bug 883676](https://bugzil.la/883676)).

### HTML

- Das [`srcdoc`](/de/docs/Web/HTML/Element/iframe#srcdoc) Attribut des {{HTMLElement("iframe")}}, das die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} erlaubt, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem Typ `"image/jpeg"` akzeptiert die Methode `HTMLCanvasElement.toBlob` nun ein drittes Attribut zur Definition der Bildqualität ([Firefox Bug 891884](https://bugzil.la/891884)).

### JavaScript

Die Umsetzung von ECMAScript 2015 wird fortgesetzt!

- Die Methode {{jsxref("Array.of()")}} ist nun auf [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox Bug 866849](https://bugzil.la/866849)).
- Die Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox Bug 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox Bug 886949](https://bugzil.la/886949))
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox Bug 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox Bug 717379](https://bugzil.la/717379)).
- Unterstützung für binäre und oktale Ganzzahlenliterale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox Bug 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, das kleinste darstellbare Zahl, die zu 1 addiert wird und nicht 1 ergibt, ist nun als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} verfügbar ([Firefox Bug 885798](https://bugzil.la/885798)).
- [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden aktualisiert, um [nicht mehr in der Prototypenkette nach indizierten Eigenschaften zu suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox Bug 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Einstellung verfügbar ([Firefox Bug 779297](https://bugzil.la/779297)).
- Einige IME-bezogene Tasten unter Windows werden von `KeyboardEvent.key` unterstützt ([Firefox Bug 865565](https://bugzil.la/865565)), siehe [die Tastennamentabelle](/de/docs/Web/API/KeyboardEvent#keyname_table_win) für die Details.
- Firefox für Metro gibt jetzt Tastendrücke auf die gleiche Weise wie die Desktop-Version weiter ([Firefox Bug 843236](https://bugzil.la/843236)).
- Das `keypress`-Ereignis wird nicht mehr ausgelöst, wenn `preventDefault()` des vorhergehenden `keydown`-Ereignisses aufgerufen wird ([Firefox Bug 501496](https://bugzil.la/501496)), siehe [das Dokument des `keydown`-Ereignisses](</de/docs/Web/API/Element/keydown_event#preventdefault()_of_keydown_event>) für die Details.
- Die `Future`-Schnittstelle wurde in `Promise` umbenannt ([Firefox Bug 884279](https://bugzil.la/884279)).
- Die `srcDoc`-Eigenschaft auf dem {{domxref("HTMLIFrameElement")}} Interface, die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} erlaubt, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Die Methode `createTBody()` im {{domxref("HTMLTableElement")}} Interface, die den Zugriff auf dessen {{HTMLElement("tbody")}} erlaubt, wird jetzt unterstützt ([Firefox Bug 813034](https://bugzil.la/813034)).
- Der Parameter `toStart` der Methode {{domxref("Range.collapse()")}} ist nun optional und standardmäßig `false`, wie in der Spezifikation definiert ([Firefox Bug 891340](https://bugzil.la/891340)).
- Die Unterstützung des `ParentNode`-Mixins auf {{domxref("Document")}} und {{domxref("DocumentFragment")}} wurde hinzugefügt ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die `previousElementSibling` und `nextElementSibling` wurden in das `ChildNode` Mixin verschoben, sodass sie nicht nur auf einem {{domxref("Element")}}-Objekt, sondern auch auf einem {{domxref("CharacterData")}} oder {{domxref("DocumentType")}} Objekt aufgerufen werden können ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die Eigenschaft `navigator.geolocation` wurde aktualisiert, um der Spezifikation zu entsprechen. Sie gibt niemals `null` zurück. Wenn die Einstellung `geo.enabled` auf `false` gesetzt ist, gibt sie nun `undefined` zurück ([Firefox Bug 884921](https://bugzil.la/884921)).
- Das Attribut `videoPlaybackQuality` auf dem {{ domxref("HTMLVideoElement") }} Interface wurde in die Methode `getVideoPlaybackQuality` umgewandelt ([Firefox Bug 889205](https://bugzil.la/889205)).
- Die nicht standardmäßige Schnittstelle `GlobalObjectConstructor` wurde entfernt ([Firefox Bug 898136](https://bugzil.la/898136)). Diese Schnittstelle wurde verwendet, um Argumente zu den Konstruktoren von APIs hinzuzufügen, die Firefox [Add-ons](/de/docs/Mozilla/Add-ons) im globalen Objekt bereitgestellt haben. Diese Fähigkeit wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktionalität gibt.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Ältere Versionen

{{Firefox_for_developers}}
