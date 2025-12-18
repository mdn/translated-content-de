---
title: Firefox 25 Versionshinweise für Entwickler
short-title: Firefox 25
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

## Änderungen für Webentwickler

### Neu in Firefox DevTools

- Der Inspektor bietet jetzt die Autovervollständigung für CSS-Namen und -Werte.
- Der Debugger ermöglicht es jetzt, Skriptdateien als "black box" zu markieren, um zu verhindern, dass Haltepunkte in Bibliothekscode stoppen, an dem Sie nicht interessiert sind.
- Der Profiler kann nun Profilierungsergebnisse speichern und importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Firefox-Entwicklertools-Optionen.
- Das Netzwerk-Panel hat ein Rechtsklick-Kontextmenü mit den Befehlen URL kopieren und erneut senden.
- Zahlreiche Änderungen in der Architektur könnten einige Neuschreibungen für Add-ons erforderlich machen, die die DevTools modifizieren.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der CSS-Eigenschaft {{cssxref("background-attachment")}} wurde hinzugefügt ([Firefox-Fehler 483446](https://bugzil.la/483446)).
- Unterstützung einer nicht standardmäßigen, nur von Mozilla verwendeten Media-Query, um die Betriebssystemversion zu bestimmen, wurde hinzugefügt: `-moz-os-version` ([Firefox-Fehler 810399](https://bugzil.la/810399)). Die Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox-Fehler 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt jetzt die funktionale Notation `hue-rotate()` ([Firefox-Fehler 897392](https://bugzil.la/897392)). Sie ist standardmäßig noch deaktiviert.
- `page-break-inside`: `avoid` funktioniert nun mit der Höhe eines Blocks ([Firefox-Fehler 883676](https://bugzil.la/883676)).

### HTML

- Das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut von {{HTMLElement("iframe")}}, das die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox-Fehler 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem Typ `"image/jpeg"` akzeptiert die Methode `HTMLCanvasElement.toBlob` nun ein drittes Attribut, das die Qualität des Bildes definiert ([Firefox-Fehler 891884](https://bugzil.la/891884)).

### JavaScript

Die Implementierung von ECMAScript 2015 geht weiter!

- Die Methode {{jsxref("Array.of()")}} ist nun bei [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox-Fehler 866849](https://bugzil.la/866849)).
- Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox-Fehler 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox-Fehler 886949](https://bugzil.la/886949)).
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox-Fehler 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden bei [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox-Fehler 717379](https://bugzil.la/717379)).
- Unterstützung für binäre und oktale Ganzzahl-Literale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox-Fehler 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, das kleinste darstellbare Zahl, die zu 1 addiert nicht 1 ergibt, ist jetzt als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} verfügbar ([Firefox-Fehler 885798](https://bugzil.la/885798)).
- [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden aktualisiert, um [nicht mehr in der Prototypen-Kette nach indizierten Eigenschaften zu suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox-Fehler 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web-Audio-API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Präferenz verfügbar ([Firefox-Fehler 779297](https://bugzil.la/779297)).
- Einige mit IMEs verwandte Tasten auf Windows werden von `KeyboardEvent.key` unterstützt ([Firefox-Fehler 865565](https://bugzil.la/865565)), siehe [die Schlüsselname-Tabelle](/de/docs/Web/API/UI_Events/Keyboard_event_key_values) für Details.
- Firefox für Metro überträgt jetzt Tastaturevents auf die gleiche Weise wie die Desktop-Version ([Firefox-Fehler 843236](https://bugzil.la/843236)).
- `keypress`-Event wird nicht mehr ausgelöst, wenn `preventDefault()` beim vorhergehenden `keydown`-Event aufgerufen wurde ([Firefox-Fehler 501496](https://bugzil.la/501496)).
- Die `Future`-Schnittstelle wurde in `Promise` umbenannt ([Firefox-Fehler 884279](https://bugzil.la/884279)).
- Die `srcDoc`-Eigenschaft auf der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle, die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox-Fehler 802895](https://bugzil.la/802895)).
- Die `createTBody()`-Methode auf der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die das Erhalten des {{HTMLElement("tbody")}} ermöglicht, wird jetzt unterstützt ([Firefox-Fehler 813034](https://bugzil.la/813034)).
- Der `toStart`-Parameter der [`Range.collapse()`](/de/docs/Web/API/Range/collapse)-Methode ist jetzt optional und standardmäßig auf `false` gesetzt, wie in der Spezifikation definiert ([Firefox-Fehler 891340](https://bugzil.la/891340)).
- Unterstützung des `ParentNode`-Mixins bei [`Document`](/de/docs/Web/API/Document) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) wurde hinzugefügt ([Firefox-Fehler 895974](https://bugzil.la/895974)).
- Die `previousElementSibling` und `nextElementSibling` wurden zum `ChildNode`-Mixin verschoben, sodass sie nicht nur auf einem [`Element`](/de/docs/Web/API/Element)-Objekt, sondern auch auf einem [`CharacterData`](/de/docs/Web/API/CharacterData) oder [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt aufgerufen werden können ([Firefox-Fehler 895974](https://bugzil.la/895974)).
- Die `navigator.geolocation`-Eigenschaft wurde aktualisiert, um der Spezifikation zu entsprechen. Sie gibt nie `null` zurück. Wenn die Präferenz `geo.enabled` auf `false` gesetzt ist, gibt sie jetzt `undefined` zurück ([Firefox-Fehler 884921](https://bugzil.la/884921)).
- Das `videoPlaybackQuality`-Attribut auf der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wurde in die `getVideoPlaybackQuality`-Methode geändert ([Firefox-Fehler 889205](https://bugzil.la/889205)).
- Die nicht standardmäßige `GlobalObjectConstructor`-Schnittstelle wurde entfernt ([Firefox-Fehler 898136](https://bugzil.la/898136)). Diese Schnittstelle wurde verwendet, um Argumente zu den Konstruktoren der APIs hinzuzufügen, die Firefox [Add-ons](/de/docs/Mozilla/Add-ons) im globalen Objekt ausgaben. Diese Fähigkeit wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktionalität gibt.

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._
