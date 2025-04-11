---
title: Firefox 25 für Entwickler
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Neu in den Entwicklertools von Firefox

- Der Inspektor bietet jetzt eine Autovervollständigung für CSS-Namen und -Werte.
- Der Debugger erlaubt es jetzt, Skriptdateien als "Black Box" zu markieren, um zu verhindern, dass Haltepunkte in Bibliothekscode ausgelöst werden, an dem Sie nicht debuggen möchten.
- Der Profiler kann jetzt Profiling-Ergebnisse speichern und importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Entwicklerwerkzeugen von Firefox.
- Das Netzwerk-Panel hat ein Kontextmenü mit Rechtsklick, das Befehle zum Kopieren und erneuten Senden von URLs enthält.
- Zahlreiche Änderungen im Hintergrund können notwendig machen, dass einige Add-ons, die die Entwicklertools modifizieren, umgeschrieben werden müssen.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der CSS-Eigenschaft {{cssxref("background-attachment")}} wurde hinzugefügt ([Firefox Fehler 483446](https://bugzil.la/483446)).
- Die Unterstützung für eine nicht standardisierte, ausschließlich von Mozilla verwendete Media Query zur Bestimmung der Betriebssystemversion wurde hinzugefügt: [`-moz-os-version`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-os-version) ([Firefox Fehler 810399](https://bugzil.la/810399)). Die Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox Fehler 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt jetzt die funktionale Notation `hue-rotate()` ([Firefox Fehler 897392](https://bugzil.la/897392)). Sie ist standardmäßig weiterhin deaktiviert.
- `page-break-inside`: `avoid` funktioniert jetzt mit der Höhe eines Blocks ([Firefox Fehler 883676](https://bugzil.la/883676)).

### HTML

- Das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut von {{HTMLElement("iframe")}}, das die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Fehler 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem `"image/jpeg"`-Typ akzeptiert die Methode `HTMLCanvasElement.toBlob` jetzt ein drittes Attribut, das die Bildqualität definiert ([Firefox Fehler 891884](https://bugzil.la/891884)).

### JavaScript

Die Implementierung von ECMAScript 2015 geht weiter!

- Die Methode {{jsxref("Array.of()")}} ist jetzt auf [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox Fehler 866849](https://bugzil.la/866849)).
- Die Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox Fehler 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox Fehler 886949](https://bugzil.la/886949)).
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox Fehler 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox Fehler 717379](https://bugzil.la/717379)).
- Die Unterstützung für binäre und oktale Ganzzahlliterale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox Fehler 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, das ist die kleinste darstellbare Zahl, die zu 1 addiert wird und dadurch nicht 1 ergibt, ist jetzt verfügbar als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} ([Firefox Fehler 885798](https://bugzil.la/885798)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden aktualisiert, sodass sie [nicht mehr in der Prototypkette nach indizierten Eigenschaften suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox Fehler 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Einstellung verfügbar ([Firefox Fehler 779297](https://bugzil.la/779297)).
- Einige IME-bezogene Tasten unter Windows werden von `KeyboardEvent.key` unterstützt ([Firefox Fehler 865565](https://bugzil.la/865565)), siehe [die Tastennamentabelle](/de/docs/Web/API/KeyboardEvent#keyname_table_win) für die Details.
- Firefox für Metro löst jetzt Tastaturereignisse auf die gleiche Weise aus wie die Desktop-Version ([Firefox Fehler 843236](https://bugzil.la/843236)).
- Das `keypress`-Ereignis wird nicht mehr ausgelöst, wenn `preventDefault()` des vorhergehenden `keydown`-Ereignisses aufgerufen wird ([Firefox Fehler 501496](https://bugzil.la/501496)), siehe [das Dokument des `keydown`-Ereignisses](</de/docs/Web/API/Element/keydown_event#preventdefault()_of_keydown_event>) für die Einzelheiten.
- Die Schnittstelle `Future` wurde in `Promise` umbenannt ([Firefox Fehler 884279](https://bugzil.la/884279)).
- Die `srcDoc`-Eigenschaft auf der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle, die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Fehler 802895](https://bugzil.la/802895)).
- Die `createTBody()`-Methode auf der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die es ermöglicht, ihr {{HTMLElement("tbody")}} zu erhalten, wird jetzt unterstützt ([Firefox Fehler 813034](https://bugzil.la/813034)).
- Der `Range.collapse()`-Methode `toStart`-Parameter ist jetzt optional und standardmäßig auf `false`, wie es in der Spezifikation definiert ist ([Firefox Fehler 891340](https://bugzil.la/891340)).
- Die Unterstützung des `ParentNode`-Mixins auf [`Document`](/de/docs/Web/API/Document) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) wurde hinzugefügt ([Firefox Fehler 895974](https://bugzil.la/895974)).
- Die Eigenschaften `previousElementSibling` und `nextElementSibling` wurden zum `ChildNode`-Mixin verschoben, sodass sie nicht nur auf einem [`Element`](/de/docs/Web/API/Element)-Objekt, sondern auch auf einem [`CharacterData`](/de/docs/Web/API/CharacterData) oder [`DocumentType`](/de/docs/Web/API/DocumentType) aufgerufen werden können ([Firefox Fehler 895974](https://bugzil.la/895974)).
- Die `navigator.geolocation`-Eigenschaft wurde aktualisiert, um der Spezifikation zu entsprechen. Sie gibt niemals `null` zurück. Wenn die Einstellung `geo.enabled` auf `false` gesetzt ist, gibt sie jetzt `undefined` zurück ([Firefox Fehler 884921](https://bugzil.la/884921)).
- Das Attribut `videoPlaybackQuality` auf der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wurde zur Methode `getVideoPlaybackQuality` geändert ([Firefox Fehler 889205](https://bugzil.la/889205)).
- Die nicht standardisierte Schnittstelle `GlobalObjectConstructor` wurde entfernt ([Firefox Fehler 898136](https://bugzil.la/898136)). Diese Schnittstelle wurde verwendet, um Argumente zu den Konstruktoren von APIs hinzuzufügen, die Firefox-[Add-ons](/de/docs/Mozilla/Add-ons) im globalen Objekt verfügbar machten. Diese Fähigkeit wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktionalität gibt.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Ältere Versionen

{{Firefox_for_developers}}
