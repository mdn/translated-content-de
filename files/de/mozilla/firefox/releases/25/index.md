---
title: Versionshinweise für Entwickler zu Firefox 25
short-title: Firefox 25
slug: Mozilla/Firefox/Releases/25
l10n:
  sourceCommit: 1da52a7f6bb19443de543ed6dfd8983602d501c7
---

## Änderungen für Webentwickler

### Neu in Firefox DevTools

- Der Inspektor bietet jetzt die automatische Vervollständigung für CSS-Namen und -Werte.
- Im Debugger können Sie nun Skriptdateien "ausblenden", um zu verhindern, dass Haltepunkte im Bibliothekscode, den Sie nicht debuggen möchten, stoppen.
- Der Profiler kann nun Profilierungsergebnisse speichern und importieren. "Show Gecko Platform Data" ist jetzt eine Option in den Firefox DevTools-Optionen.
- Das Netzwerkpanel hat nun ein Rechtsklick-Kontextmenü mit Befehlen zum Kopieren und Wiederholen von URLs.
- Zahlreiche interne Änderungen können es erforderlich machen, dass Add-ons, die die DevTools ändern, neu geschrieben werden müssen.

### CSS

- Die Unterstützung für das Schlüsselwort `local` als Wert der CSS-Eigenschaft {{cssxref("background-attachment")}} wurde hinzugefügt ([Firefox Bug 483446](https://bugzil.la/483446)).
- Unterstützung für eine nicht standardmäßige, nur bei Mozilla verfügbare Media Query zur Bestimmung der Betriebssystemversion wurde hinzugefügt: `-moz-os-version` ([Firefox Bug 810399](https://bugzil.la/810399)). Diese Eigenschaft ist derzeit nur unter Windows implementiert.
- Die CSS-Eigenschaft `-moz-osx-font-smoothing` wurde hinzugefügt ([Firefox Bug 857142](https://bugzil.la/857142)).
- Unsere experimentelle Unterstützung für {{cssxref("filter")}} unterstützt nun die funktionale Notation `hue-rotate()` ([Firefox Bug 897392](https://bugzil.la/897392)). Sie ist standardmäßig noch deaktiviert.
- `page-break-inside`: `avoid` funktioniert jetzt mit der Höhe eines Blocks ([Firefox Bug 883676](https://bugzil.la/883676)).

### HTML

- Das Attribut [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc) von {{HTMLElement("iframe")}}, das die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Bei Verwendung mit einem `"image/jpeg"`-Typ akzeptiert die Methode `HTMLCanvasElement.toBlob` nun ein drittes Attribut, das die Qualität des Bildes definiert ([Firefox Bug 891884](https://bugzil.la/891884)).

### JavaScript

Die Implementierung von ECMAScript 2015 geht weiter!

- Die Methode {{jsxref("Array.of()")}} ist jetzt auf [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) implementiert ([Firefox Bug 866849](https://bugzil.la/866849)).
- Unterstützung für die Methoden {{jsxref("Array.prototype.find()")}} und {{jsxref("Array.prototype.findIndex()")}} wurde hinzugefügt ([Firefox Bug 885553](https://bugzil.la/885553)).
- Die Methoden {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} und {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} wurden implementiert ([Firefox Bug 886949](https://bugzil.la/886949)).
- Die Methoden {{jsxref("Map.prototype.forEach()")}} und {{jsxref("Set.prototype.forEach()")}} sind jetzt implementiert ([Firefox Bug 866847](https://bugzil.la/866847)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` und `Math.cbrt()` ([Firefox Bug 717379](https://bugzil.la/717379)).
- Unterstützung für binäre und oktale Ganzzahl-Literale wurde hinzugefügt: `0b10101010`, `0B1010`, `0o777`, `0O237` sind jetzt gültig ([Firefox Bug 894026](https://bugzil.la/894026)).
- Die Maschinen-Epsilon-Konstante, die kleinste darstellbare Zahl, die, wenn sie zu 1 addiert wird, nicht 1 ergibt, ist jetzt als {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} verfügbar ([Firefox Bug 885798](https://bugzil.la/885798)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) wurden aktualisiert, um [nicht mehr in der Prototypkette nach indizierten Eigenschaften zu suchen](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox Bug 829896](https://bugzil.la/829896)).

### Schnittstellen/APIs/DOM

- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird jetzt unterstützt. Eine unvollständige Implementierung war zuvor hinter einer Voreinstellung verfügbar ([Firefox Bug 779297](https://bugzil.la/779297)).
- Einige IME-bezogene Tasten unter Windows werden nun von `KeyboardEvent.key` unterstützt ([Firefox Bug 865565](https://bugzil.la/865565)), siehe [die Tastenname-Tabelle](/de/docs/Web/API/UI_Events/Keyboard_event_key_values) für Details.
- Firefox für Metro löst nun Tastenereignisse auf die gleiche Weise aus wie die Desktop-Version ([Firefox Bug 843236](https://bugzil.la/843236)).
- Das `keypress`-Ereignis wird nicht mehr ausgelöst, wenn `preventDefault()` des vorhergehenden `keydown`-Ereignisses aufgerufen wurde ([Firefox Bug 501496](https://bugzil.la/501496)).
- Die Schnittstelle `Future` wurde in `Promise` umbenannt ([Firefox Bug 884279](https://bugzil.la/884279)).
- Die Eigenschaft `srcDoc` auf der Schnittstelle [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement), die die Inline-Spezifikation des Inhalts eines {{HTMLElement("iframe")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 802895](https://bugzil.la/802895)).
- Die Methode `createTBody()` auf der Schnittstelle [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement), die das Abrufen ihres {{HTMLElement("tbody")}} ermöglicht, wird jetzt unterstützt ([Firefox Bug 813034](https://bugzil.la/813034)).
- Der Parameter `toStart` der Methode [`Range.collapse()`](/de/docs/Web/API/Range/collapse) ist jetzt optional und standardmäßig `false`, wie in der Spezifikation definiert ([Firefox Bug 891340](https://bugzil.la/891340)).
- Unterstützung für das `ParentNode`-Mixin auf [`Document`](/de/docs/Web/API/Document) und [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) wurde hinzugefügt ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die Eigenschaften `previousElementSibling` und `nextElementSibling` wurden zum `ChildNode`-Mixin verschoben, sodass sie nicht nur auf einem [`Element`](/de/docs/Web/API/Element)-Objekt, sondern auch auf einem [`CharacterData`](/de/docs/Web/API/CharacterData)- oder [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt aufgerufen werden können ([Firefox Bug 895974](https://bugzil.la/895974)).
- Die Eigenschaft `navigator.geolocation` wurde aktualisiert, um mit der Spezifikation übereinzustimmen. Sie gibt niemals `null` zurück. Wenn die Voreinstellung `geo.enabled` auf `false` gesetzt ist, gibt sie jetzt `undefined` zurück ([Firefox Bug 884921](https://bugzil.la/884921)).
- Das Attribut `videoPlaybackQuality` auf der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) wurde zur Methode `getVideoPlaybackQuality` geändert ([Firefox Bug 889205](https://bugzil.la/889205)).
- Die nicht standardmäßige `GlobalObjectConstructor`-Schnittstelle wurde entfernt ([Firefox Bug 898136](https://bugzil.la/898136)). Diese Schnittstelle wurde verwendet, um Argumente zu den Konstruktoren von APIs hinzuzufügen, die Firefox-[Add-ons](/de/docs/Mozilla/Add-ons) auf dem globalen Objekt bereitstellten. Diese Fähigkeit wurde entfernt; beachten Sie, dass es derzeit keinen Ersatz für diese Funktionalität gibt.

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._
