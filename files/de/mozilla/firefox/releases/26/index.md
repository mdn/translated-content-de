---
title: Firefox 26 Versionshinweise für Entwickler
short-title: Firefox 26
slug: Mozilla/Firefox/Releases/26
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 26 wurde am 10. Dezember 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### CSS

- Die {{cssxref("text-decoration-line")}}-Eigenschaft, immer noch mit Präfix, betrachtet jetzt `'blink'` als einen gültigen Wert, obwohl der Inhalt überhaupt nicht blinkt ([Firefox-Bug 812995](https://bugzil.la/812995)).
- Die nicht standardisierte `-moz-text-blink`-Eigenschaft wurde entfernt ([Firefox-Bug 812995](https://bugzil.la/812995)).
- Unterstützung für die {{cssxref("image-orientation")}}-Eigenschaft, in ihrer CSS Images & Values Level 4-Version, das heißt mit dem `from-image`-Schlüsselwort und EXIF-Unterstützung, wurde hinzugefügt ([Firefox-Bug 825771](https://bugzil.la/825771)).
- Experimentelle Unterstützung für `position: sticky` wurde implementiert und kann durch Pref `layout.css.sticky.enabled` aktiviert werden ([Firefox-Bug 886646](https://bugzil.la/886646)).
- Die {{cssxref("text-align")}}-Eigenschaft gilt nun für das `::-moz-placeholder`-Pseudoelement ([Firefox-Bug 915551](https://bugzil.la/915551)).

### HTML

- Die `HTMLSelectElement.selectedOptions`-Eigenschaft wurde implementiert ([Firefox-Bug 596681](https://bugzil.la/596681)).
- Im {{HTMLElement("input")}}-Element des Typs `email` werden Werte mit Domänenbezeichnungen, die länger als 63 Zeichen sind, nicht mehr als gültig angesehen ([Firefox-Bug 884332](https://bugzil.la/884332)).
- Die `HTMLInputElement.width`- und `height`-Eigenschaften geben jetzt `0` zurück, wenn der `type` nicht `image` ist ([Firefox-Bug 905240](https://bugzil.la/905240)).
- Ein {{HTMLElement("fieldset")}}-Element ist jetzt ungültig und kann mit der {{cssxref(":invalid")}}-Pseudoklasse gestylt werden, wenn eines der enthaltenen Elemente ungültig ist ([Firefox-Bug 717181](https://bugzil.la/717181)).

### JavaScript

Die Implementierung von ECMAScript 2015 geht weiter!

- Die ECMAScript 2015-konforme Syntax für [Generatoren (yield)](https://web.archive.org/web/20170126155949/http://wiki.ecmascript.org/doku.php?id=harmony:generators) wurde implementiert ([Firefox-Bug 666399](https://bugzil.la/666399)).
- Generator/Iterator-Ergebnisse sind jetzt in Form von `{ value: foo, done: bool }` umschlossen ([Firefox-Bug 907744](https://bugzil.la/907744)).
- Neue mathematische Methoden wurden auf [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: [`Math.fround()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) ([Firefox-Bug 900125](https://bugzil.la/900125)).
- Die [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) können nicht mehr für Funktionsnamen verwendet werden: Eine solche Verwendung löst jetzt einen [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) aus ([Firefox-Bug 907958](https://bugzil.la/907958)).
- Die Syntax für [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde aktualisiert, um Parameter ohne Standards nach Standardparametern zuzulassen, wie bei `function f(x=1, y)`. Siehe [Firefox-Bug 777060](https://bugzil.la/777060).
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} ist implementiert ([Firefox-Bug 904701](https://bugzil.la/904701)).

### Schnittstellen/APIs/DOM

- Der letzte Parameter (doctype) von [`DOMImplementation.createDocument`](/de/docs/Web/API/DOMImplementation/createDocument) ist jetzt optional ([Firefox-Bug 909859](https://bugzil.la/909859)).
- Die neue Spezifikation von [`element.classList`](/de/docs/Web/API/Element/classList), die das Hinzufügen/Entfernen mehrerer Klassen mit einem Aufruf ermöglicht, wurde implementiert ([Firefox-Bug 814014](https://bugzil.la/814014)).
- Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor wurde auf der [`URL`](/de/docs/Web/API/URL)-Schnittstelle implementiert ([Firefox-Bug 887364](https://bugzil.la/887364)).
- Die Eigenschaften [`URLUtils.origin`](/de/docs/Web/API/HTMLAnchorElement/origin), [`URLUtils.password`](/de/docs/Web/API/HTMLAnchorElement/password) und [`URLUtils.username`](/de/docs/Web/API/HTMLAnchorElement/username) sind jetzt für alle Schnittstellen verfügbar, die das `URLUtils`-Mixin implementieren: [`URL`](/de/docs/Web/API/URL), [`Location`](/de/docs/Web/API/Location), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ([Firefox-Bug 887364](https://bugzil.la/887364)).
- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist jetzt von Web-Workern aus zugänglich ([Firefox-Bug 887364](https://bugzil.la/887364)).
- IndexedDB kann jetzt als "optimistischer" Speicherbereich genutzt werden, sodass keine Anfragen mehr nötig sind und Daten in einem Pool mit LRU-Auslöserpolitik gespeichert werden, kurzum ein temporärer Speicher ([Firefox-Bug 785884](https://bugzil.la/785884)).
- Unterstützung für [`WaveShaperNode.oversample`](/de/docs/Web/API/WaveShaperNode/oversample) wurde hinzugefügt ([Firefox-Bug 875277](https://bugzil.la/875277)).
- Der Pfad für den persistenten Speicher wurde von `<profile>/indexedDB` zu `<profile>/storage/persistent` geändert (auf b2g von `/data/local/indexedDB` zu `/data/local/storage/persistent`).
- Die [`Screen.orientation`](/de/docs/Web/API/Screen/orientation)-Eigenschaft und die [`Screen.lockOrientation()`](/de/docs/Web/API/Screen/lockOrientation)-Methode unterstützen jetzt den Wert `default`, der entweder `portrait-primary` oder `landscape-primary` zugeordnet wird, abhängig vom Gerät ([Firefox-Bug 908058](https://bugzil.la/908058)). Dies funktioniert nur für Firefox OS und Firefox für Android. Firefox Desktop wird nicht unterstützt.
- [`Event`](/de/docs/Web/API/Event)-Konstruktoren können in Web-Workern verwendet werden ([Firefox-Bug 910910](https://bugzil.la/910910)).
- Der Versuch, die [`Document.domain`](/de/docs/Web/API/Document/domain)-Eigenschaft auf einer in einem {{HTMLElement("iframe")}} eingebetteten Seite mit dem `sandbox`-Attribut zu setzen, wirft nun einen Sicherheitsfehler ([Firefox-Bug 907892](https://bugzil.la/907892)).
- Die [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle wurde aktualisiert, um die neueste Spezifikation zu erfüllen. Die `initMessageEvent`-Methode wurde entfernt, während die Schnittstelle jetzt einen Konstruktor hat ([Firefox-Bug 848294](https://bugzil.la/848294)).
- Die HTML5 `MessageChannel`-API wurde implementiert, hinter der `dom.messageChannel.enabled`-Einstellung ([Firefox-Bug 677638](https://bugzil.la/677638)).
- Unterstützung für `VTTCue`, hinter der `media.webvtt.enabled`-Einstellung, wie für alle WebVTT-bezogenen Implementierungen, wurde hinzugefügt ([Firefox-Bug 868509](https://bugzil.la/868509)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wurde standardmäßig aktiviert ([Firefox-Bug 885505](https://bugzil.la/885505)).

### MathML

- Inkonsistente Darstellungen von {{MathMLElement("mmultiscripts")}}, {{MathMLElement("msub")}}, {{MathMLElement("msup")}} und {{MathMLElement("msubsup")}} wurden vereinheitlicht und die Fehlerbehandlung dieser Elemente wurde verbessert ([Firefox-Bug 827713](https://bugzil.la/827713)).

### SVG

- Die Einbindung von SVG-Glyphen in OpenType, _SVG-in-OpenType_, wurde aktualisiert, um der aktuellen Version der Spezifikation zu entsprechen ([Firefox-Bug 906521](https://bugzil.la/906521)).
- Die `SVGElement.ownerSVGElement()`-Methode wirft keinen Fehler mehr ([Firefox-Bug 835048](https://bugzil.la/835048)).

## Entwicklungstools

- Der Inspector ist jetzt remotefähig ([Firefox-Bug 805526](https://bugzil.la/805526)).
- Der Text der Web-Konsole kann nun ausgewählt werden, {{cssxref("::before")}} und {{cssxref("::after")}} sind jetzt inspizierbar, Debugger- und Responsive-Design-Funktionen sind für diese Version geplant. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)
