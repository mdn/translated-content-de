---
title: Firefox 26 für Entwickler
slug: Mozilla/Firefox/Releases/26
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 26 wurde am 10. Dezember 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### CSS

- Die {{cssxref("text-decoration-line")}}-Eigenschaft, noch mit Präfix, berücksichtigt nun `'blink'` als gültigen Wert, allerdings blinkt der Inhalt überhaupt nicht ([Firefox Bug 812995](https://bugzil.la/812995)).
- Die nicht standardisierte `-moz-text-blink`-Eigenschaft wurde entfernt ([Firefox Bug 812995](https://bugzil.la/812995)).
- Unterstützung für die {{cssxref("image-orientation")}}-Eigenschaft, in der Version CSS Images & Values Level 4, die das Schlüsselwort `from-image` und EXIF-Unterstützung enthält, wurde hinzugefügt ([Firefox Bug 825771](https://bugzil.la/825771)).
- Experimentelle Unterstützung für `position: sticky` wurde implementiert und kann durch die Einstellung `layout.css.sticky.enabled` aktiviert werden ([Firefox Bug 886646](https://bugzil.la/886646)).
- Die {{cssxref("text-align")}}-Eigenschaft gilt nun für das `::-moz-placeholder`-Pseudoelement ([Firefox Bug 915551](https://bugzil.la/915551)).

### HTML

- Die Eigenschaft `HTMLSelectElement.selectedOptions` wurde implementiert ([Firefox Bug 596681](https://bugzil.la/596681)).
- Im {{HTMLElement("input")}}-Element vom Typ `email` werden Werte mit Domänenbezeichnungen, die länger als 63 Zeichen sind, nicht mehr als gültig betrachtet ([Firefox Bug 884332](https://bugzil.la/884332)).
- Die Eigenschaften `HTMLInputElement.width` und `height` geben nun `0` zurück, wenn der `type` nicht `image` ist ([Firefox Bug 905240](https://bugzil.la/905240)).
- Ein {{HTMLElement("fieldset")}}-Element ist nun ungültig und kann mit der {{cssxref(":invalid")}}-Pseudoklasse gestaltet werden, wenn eines der darin enthaltenen Elemente ungültig ist ([Firefox Bug 717181](https://bugzil.la/717181)).

### JavaScript

ECMAScript 2015 Implementierung wird fortgesetzt!

- Die ECMAScript 2015-konforme Syntax für [Generators (yield)](https://web.archive.org/web/20170126155949/http://wiki.ecmascript.org/doku.php?id=harmony:generators) wurde implementiert ([Firefox Bug 666399](https://bugzil.la/666399)).
- Generator/Iterator-Ergebnisse werden jetzt als `{ value: foo, done: bool }` gekapselt ([Firefox Bug 907744](https://bugzil.la/907744)).
- Neue mathematische Methoden wurden in [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: [`Math.fround()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) ([Firefox Bug 900125](https://bugzil.la/900125)).
- Die [reservierten Worte](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) können nicht mehr als Funktionsnamen verwendet werden: Ein solcher Gebrauch löst nun einen [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) aus ([Firefox Bug 907958](https://bugzil.la/907958)).
- Die [Syntax für Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde aktualisiert, um Parameter ohne Standardwerte nach Standardparametern zu erlauben, wie zum Beispiel `function f(x=1, y)`. Siehe [Firefox Bug 777060](https://bugzil.la/777060).
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} wurde implementiert ([Firefox Bug 904701](https://bugzil.la/904701)).

### Schnittstellen/APIs/DOM

- Das letzte Argument (doctype) zu [`DOMImplementation.createDocument`](/de/docs/Web/API/DOMImplementation/createDocument) kann nun optional sein ([Firefox Bug 909859](https://bugzil.la/909859)).
- Die neue Spezifikation von [`element.classList`](/de/docs/Web/API/Element/classList) wurde implementiert, die das Hinzufügen/Entfernen mehrerer Klassen mit einem Aufruf erlaubt ([Firefox Bug 814014](https://bugzil.la/814014)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor wurde in der [`URL`](/de/docs/Web/API/URL)-Schnittstelle implementiert ([Firefox Bug 887364](https://bugzil.la/887364)).
- Die Eigenschaften [`URLUtils.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), [`URLUtils.password`](/de/docs/Web/API/HTMLAnchorElement/password) und [`URLUtils.username`](/de/docs/Web/API/HTMLAnchorElement/username) sind nun für alle Schnittstellen, die das `URLUtils`-Mixin implementieren, verfügbar: [`URL`](/de/docs/Web/API/URL), [`Location`](/de/docs/Web/API/Location), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ([Firefox Bug 887364](https://bugzil.la/887364)).
- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist nun von Web-Workern aus zugänglich ([Firefox Bug 887364](https://bugzil.la/887364)).
- IndexedDB kann nun als "optimistischer" Speicherbereich verwendet werden, sodass keine Eingabeaufforderungen erforderlich sind und die Daten in einem Pool mit LRU-Austauschrichtlinie, kurz temporärer Speicher, gesichert werden ([Firefox Bug 785884](https://bugzil.la/785884)).
- Unterstützung für [`WaveShaperNode.oversample`](/de/docs/Web/API/WaveShaperNode/oversample) wurde hinzugefügt ([Firefox Bug 875277](https://bugzil.la/875277)).
- Der Pfad für den persistenten Speicher wurde von `<profile>/indexedDB` nach `<profile>/storage/persistent` geändert (bei b2g von `/data/local/indexedDB` nach `/data/local/storage/persistent`).
- Die [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)-Eigenschaft und die [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)-Methode unterstützen jetzt den Wert `default`, der je nach Gerät `portrait-primary` oder `landscape-primary` zugeordnet wird ([Firefox Bug 908058](https://bugzil.la/908058)) Dies funktioniert nur für Firefox OS und Firefox für Android. Firefox Desktop wird nicht unterstützt.
- [`Event`](/de/docs/Web/API/Event)-Konstruktoren können in Web-Workern verwendet werden ([Firefox Bug 910910](https://bugzil.la/910910)).
- Der Versuch, die [`Document.domain`](/de/docs/Web/API/Document/domain)-Eigenschaft auf einer Seite festzulegen, die in einem {{HTMLElement("iframe")}} mit dem `sandbox`-Attribut eingebettet ist, führt nun zu einem Sicherheitsfehler ([Firefox Bug 907892](https://bugzil.la/907892)).
- Die [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle wurde aktualisiert, um den neuesten Spezifikationen zu entsprechen. Die Methode `initMessageEvent` wurde entfernt, während die Schnittstelle nun einen Konstruktor hat ([Firefox Bug 848294](https://bugzil.la/848294)).
- Die HTML5-`MessageChannel`-API wurde implementiert, hinter der `dom.messageChannel.enabled`-Voreinstellung ([Firefox Bug 677638](https://bugzil.la/677638)).
- Unterstützung für `VTTCue`, hinter der `media.webvtt.enabled`-Voreinstellung, wie für alle WebVTT-bezogenen Implementierungen, wurde hinzugefügt ([Firefox Bug 868509](https://bugzil.la/868509)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wurde standardmäßig verfügbar gemacht ([Firefox Bug 885505](https://bugzil.la/885505)).

### MathML

- Inkonsistente Darstellungen von {{MathMLElement("mmultiscripts")}}, {{MathMLElement("msub")}}, {{MathMLElement("msup")}} und {{MathMLElement("msubsup")}} wurden vereinheitlicht und die Fehlerbehandlung dieser Elemente verbessert ([Firefox Bug 827713](https://bugzil.la/827713)).

### SVG

- Die Einfügung von SVG-Glyphen innerhalb von OpenType, _SVG-in-OpenType_, wurde aktualisiert, um der aktuellen Version der Spezifikation zu entsprechen ([Firefox Bug 906521](https://bugzil.la/906521)).
- Die Methode `SVGElement.ownerSVGElement()` wirft keinen Fehler mehr ([Firefox Bug 835048](https://bugzil.la/835048)).

## Entwicklungswerkzeuge

- Der Inspector ist jetzt ferngesteuert bedienbar ([Firefox Bug 805526](https://bugzil.la/805526)).
- Der Text der Webkonsole kann ausgewählt werden, {{cssxref("::before")}} und {{cssxref("::after")}} sind jetzt inspizierbar. Debugger und responsive Design-Features sind für diese Version geplant. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

### Ältere Versionen

{{Firefox_for_developers}}
