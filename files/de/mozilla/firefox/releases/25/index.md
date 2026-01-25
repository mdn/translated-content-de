---
title: Firefox 25 Versionshinweise für Entwickler
short-title: Firefox 25
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

## Änderungen für Webentwickler

### Neu in den Firefox DevTools

- Der Inspektor verfügt jetzt über eine Autovervollständigung für CSS-Namen und -Werte.
- Der Debugger ermöglicht jetzt, Skriptdateien "black box" zu setzen, um zu verhindern, dass Haltepunkte in Bibliothekscode stoppen, der nicht von Interesse ist.
- Der Profiler kann jetzt Profilierungsergebnisse speichern und importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Firefox Entwicklerwerkzeugen.
- Das Netzwerk-Panel verfügt über ein Kontextmenü mit Befehlen zum Kopieren und Wiederholen von URLs.
- Zahlreiche Änderungen unter der Haube können es erforderlich machen, Add-ons neu zu schreiben, die die DevTools modifizieren.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der {{cssxref("background-attachment")}} CSS-Eigenschaft wurde hinzugefügt ([Firefox Bug 483446](https://bugzil.la/483446)).
- Die Unterstützung einer nicht standardmäßigen, nur von Mozilla verwendeten Media Query zur Bestimmung der Betriebssystemversion wurde hinzugefügt: `-moz-os-version` ([Firefox Bug 810399](https://bugzil.la/810399)). Die Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox Bug 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt jetzt die funktionelle Notation `hue-rotate()` ([Firefox Bug 897392](https://bugzil.la/897392)). Sie ist standardmäßig immer noch deaktiviert.
- `page-break-inside`: `avoid` funktioniert jetzt mit der Höhe eines Blocks ([Firefox Bug 883676](https://bugzil.la/883676)).

### HTML

- Das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut des {{HTMLElement("iframe")}}, das die inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem Typ `"image/jpeg"` akzeptiert die Methode `HTMLCanvasElement.toBlob` jetzt ein drittes Attribut, das die Qualität des Bildes definiert ([Firefox Bug 891884](https://bugzil.la/891884)).

### JavaScript

Die Implementierung von ECMAScript 2015 wird fortgesetzt!

- Die Methode {{jsxref("Array.of()")}} ist jetzt auf [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox Bug 866849](https://bugzil.la/866849)).
- Die Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox Bug 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox Bug 886949](https://bugzil.la/886949)).
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox Bug 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox Bug 717379](https://bugzil.la/717379)).
- Unterstützung für binäre und oktale Ganzzahl-Literale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox Bug 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, das ist die kleinste darstellbare Zahl, die zu 1 hinzugefügt wird, ohne dass 1 herauskommt, ist jetzt als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} verfügbar ([Firefox Bug 885798](https://bugzil.la/885798)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden so aktualisiert, dass sie [nicht länger in der Prototyp-Kette nach indizierten Eigenschaften suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox Bug 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Einstellung verfügbar ([Firefox Bug 779297](https://bugzil.la/779297)).
- Einige IME-bezogene Tasten unter Windows werden jetzt von `KeyboardEvent.key` unterstützt ([Firefox Bug 865565](https://bugzil.la/865565)), siehe [die Taste-Namen-Tabelle](/de/docs/Web/API/UI_Events/Keyboard_event_key_values) für Details.
- Firefox für Metro versendet jetzt Tastenereignisse in gleicher Weise wie die Desktop-Version ([Firefox Bug 843236](https://bugzil.la/843236)).
- `keypress`-Ereignis wird nicht mehr ausgelöst, wenn `preventDefault()` des vorausgehenden `keydown`-Ereignisses aufgerufen wird ([Firefox Bug 501496](https://bugzil.la/501496)).
- Das `Future`-Interface wurde in `Promise` umbenannt ([Firefox Bug 884279](https://bugzil.la/884279)).
- Die `srcDoc`-Eigenschaft im [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Interface, die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Die Methode `createTBody()` im [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) Interface, die es ermöglicht, sein {{HTMLElement("tbody")}} zu erhalten, wird jetzt unterstützt ([Firefox Bug 813034](https://bugzil.la/813034)).
- Der `toStart`-Parameter der Methode [`Range.collapse()`](/de/docs/Web/API/Range/collapse) ist jetzt optional und standardmäßig auf `false` eingestellt, wie in der Spezifikation definiert ([Firefox Bug 891340](https://bugzil.la/891340)).
- Die Unterstützung der `ParentNode`-Mixin auf [`Document`](/de/docs/Web/API/Document) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) wurde hinzugefügt ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die Eigenschaften `previousElementSibling` und `nextElementSibling` wurden auf das `ChildNode`-Mixin verschoben, was es ermöglicht, sie nicht nur auf einem [`Element`](/de/docs/Web/API/Element) Objekt, sondern auch auf einem [`CharacterData`](/de/docs/Web/API/CharacterData) oder [`DocumentType`](/de/docs/Web/API/DocumentType) Objekt aufzurufen ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die Eigenschaft `navigator.geolocation` wurde aktualisiert, um der Spezifikation zu entsprechen. Sie gibt niemals `null` zurück. Wenn die Einstellung `geo.enabled` auf `false` gesetzt ist, gibt sie jetzt `undefined` zurück ([Firefox Bug 884921](https://bugzil.la/884921)).
- Das Attribut `videoPlaybackQuality` im [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Interface wurde in die Methode `getVideoPlaybackQuality` geändert. ([Firefox Bug 889205](https://bugzil.la/889205))
- Das nicht standardmäßige `GlobalObjectConstructor` Interface wurde entfernt ([Firefox Bug 898136](https://bugzil.la/898136)). Diese Schnittstelle wurde verwendet, um Argumente zu den Konstruktoren von APIs hinzuzufügen, die Firefox [Add-ons](/de/docs/Mozilla/Add-ons) auf dem globalen Objekt bereitstellten. Diese Funktionalität wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktion gibt.

### MathML

_Keine Änderungen._

### SVG

_Keine Änderungen._
