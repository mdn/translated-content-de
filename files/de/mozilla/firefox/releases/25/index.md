---
title: Firefox 25 für Entwickler
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

## Änderungen für Webentwickler

### Neu in den Firefox DevTools

- Der Inspektor bietet jetzt Autovervollständigung für CSS-Namen und -Werte.
- Der Debugger erlaubt es nun, Skriptdateien als "Black Box" zu markieren, sodass Haltepunkte in nicht relevanten Bibliothekscodes nicht ausgelöst werden.
- Der Profiler kann jetzt Profilergebnisse speichern und importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Entwicklertools von Firefox.
- Das Netzwerk-Panel verfügt über ein Kontextmenü bei Rechtsklick mit Befehlen zum Kopieren und Erneutes Senden der URL.
- Zahlreiche Änderungen unter der Haube könnten einige Neuschreibarbeiten erfordern für Add-ons, die die DevTools modifizieren.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der CSS-Eigenschaft {{cssxref("background-attachment")}} wurde hinzugefügt ([Firefox Bug 483446](https://bugzil.la/483446)).
- Die Unterstützung einer nicht standardmäßigen, nur Mozilla-eigenen Media-Abfrage zur Bestimmung der Betriebssystemversion wurde hinzugefügt: [`-moz-os-version`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-os-version) ([Firefox Bug 810399](https://bugzil.la/810399)). Die Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox Bug 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt nun die funktionale Notation `hue-rotate()` ([Firefox Bug 897392](https://bugzil.la/897392)). Sie ist standardmäßig noch deaktiviert.
- `page-break-inside`: `avoid` funktioniert jetzt in Bezug auf die Höhe eines Blocks ([Firefox Bug 883676](https://bugzil.la/883676)).

### HTML

- Das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut des {{HTMLElement("iframe")}}, das die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem `"image/jpeg"`-Typ akzeptiert die Methode `HTMLCanvasElement.toBlob` nun ein drittes Attribut, das die Qualität des Bildes definiert ([Firefox Bug 891884](https://bugzil.la/891884)).

### JavaScript

Die Umsetzung von ECMAScript 2015 geht weiter!

- Die Methode {{jsxref("Array.of()")}} ist jetzt auf [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox Bug 866849](https://bugzil.la/866849)).
- Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox Bug 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox Bug 886949](https://bugzil.la/886949)).
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox Bug 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox Bug 717379](https://bugzil.la/717379)).
- Unterstützung für binäre und oktale Ganzzahl-Literale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox Bug 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, also die kleinste darstellbare Zahl, die zu 1 addiert wird und nicht 1 ist, ist jetzt als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} verfügbar ([Firefox Bug 885798](https://bugzil.la/885798)).
- [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden aktualisiert, um [nicht mehr in der Prototypkette nach indizierten Eigenschaften zu suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox Bug 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Voreinstellung verfügbar ([Firefox Bug 779297](https://bugzil.la/779297)).
- Einige IME-bezogene Tasten unter Windows werden von `KeyboardEvent.key` unterstützt ([Firefox Bug 865565](https://bugzil.la/865565)); für Einzelheiten siehe [die Tastennamen-Tabelle](/de/docs/Web/API/KeyboardEvent#keyname_table_win).
- Firefox für Metro sendet jetzt Tastenevents auf die gleiche Weise wie die Desktop-Version ([Firefox Bug 843236](https://bugzil.la/843236)).
- `keypress`-Event wird nicht mehr ausgelöst, wenn `preventDefault()` des vorhergehenden `keydown`-Events aufgerufen wurde ([Firefox Bug 501496](https://bugzil.la/501496)); siehe [die Dokumentation des `keydown`-Events](</de/docs/Web/API/Element/keydown_event#preventdefault()_of_keydown_event>) für Einzelheiten.
- Das Interface `Future` wurde in `Promise` umbenannt ([Firefox Bug 884279](https://bugzil.la/884279)).
- Die `srcDoc`-Eigenschaft auf dem [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interface, die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Die Methode `createTBody()` auf dem [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interface, die es ermöglicht, sein {{HTMLElement("tbody")}} abzurufen, wird jetzt unterstützt ([Firefox Bug 813034](https://bugzil.la/813034)).
- Der `toStart` Parameter der Methode [`Range.collapse()`](/de/docs/Web/API/Range/collapse) ist jetzt optional und standardmäßig `false`, wie in der Spezifikation definiert ([Firefox Bug 891340](https://bugzil.la/891340)).
- Unterstützung des `ParentNode`-Mixins in [`Document`](/de/docs/Web/API/Document) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) wurde hinzugefügt ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die `previousElementSibling` und `nextElementSibling` wurden zum `ChildNode`-Mixin verschoben, sodass sie nicht nur auf einem [`Element`](/de/docs/Web/API/Element)-Objekt, sondern auch auf einem [`CharacterData`](/de/docs/Web/API/CharacterData)- oder [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt aufgerufen werden können ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die `navigator.geolocation`-Eigenschaft wurde aktualisiert, um der Spezifikation zu entsprechen. Sie gibt niemals `null` zurück. Wenn die Voreinstellung `geo.enabled` auf `false` gesetzt ist, gibt sie nun `undefined` zurück ([Firefox Bug 884921](https://bugzil.la/884921)).
- Das Attribut `videoPlaybackQuality` auf dem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interface wurde zur Methode `getVideoPlaybackQuality` geändert ([Firefox Bug 889205](https://bugzil.la/889205)).
- Das nicht standardmäßige `GlobalObjectConstructor`-Interface wurde entfernt ([Firefox Bug 898136](https://bugzil.la/898136)). Dieses Interface wurde verwendet, um Argumente zu den Konstruktoren von APIs hinzuzufügen, die Firefox [Add-ons](/de/docs/Mozilla/Add-ons) im globalen Objekt freigaben. Diese Fähigkeit wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktionalität gibt.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

### Ältere Versionen

{{Firefox_for_developers}}
