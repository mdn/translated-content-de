---
title: Firefox 26 für Entwickler
slug: Mozilla/Firefox/Releases/26
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 26 wurde am 10. Dezember 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### CSS

- Die {{cssxref("text-decoration-line")}} Eigenschaft, noch mit Präfix, betrachtet jetzt `'blink'` als gültigen Wert, obwohl der Inhalt überhaupt nicht blinkt ([Firefox Bug 812995](https://bugzil.la/812995)).
- Die nicht standardisierte `-moz-text-blink` Eigenschaft wurde entfernt ([Firefox Bug 812995](https://bugzil.la/812995)).
- Unterstützung für die {{cssxref("image-orientation")}} Eigenschaft in ihrer CSS Images & Values Level 4 Version mit dem `from-image` Schlüsselwort und EXIF-Unterstützung wurde hinzugefügt ([Firefox Bug 825771](https://bugzil.la/825771)).
- Experimentelle Unterstützung für `position: sticky` wurde implementiert und kann durch das Präfix `layout.css.sticky.enabled` aktiviert werden ([Firefox Bug 886646](https://bugzil.la/886646)).
- Die {{cssxref("text-align")}} Eigenschaft gilt jetzt für das `::-moz-placeholder` Pseudo-Element ([Firefox Bug 915551](https://bugzil.la/915551)).

### HTML

- Die `HTMLSelectElement.selectedOptions` Eigenschaft wurde implementiert ([Firefox Bug 596681](https://bugzil.la/596681)).
- Im {{HTMLElement("input")}} Element vom Typ `email` werden Werte mit Domain-Labels, die länger als 63 Zeichen sind, nicht mehr als gültig betrachtet ([Firefox Bug 884332](https://bugzil.la/884332)).
- Die `HTMLInputElement.width` und `height` Eigenschaften geben jetzt `0` zurück, wenn der `type` nicht `image` ist ([Firefox Bug 905240](https://bugzil.la/905240)).
- Ein {{HTMLElement("fieldset")}} Element ist jetzt ungültig und kann mit der {{cssxref(":invalid")}} Pseudo-Klasse gestylt werden, wenn eines der enthaltenen Elemente ungültig ist ([Firefox Bug 717181](https://bugzil.la/717181)).

### JavaScript

Die Implementierung von ECMAScript 2015 geht weiter!

- Die ECMAScript 2015 konforme Syntax für [Generators (yield)](https://web.archive.org/web/20170126155949/http://wiki.ecmascript.org/doku.php?id=harmony:generators) wurde implementiert ([Firefox Bug 666399](https://bugzil.la/666399)).
- Generator/Iterator-Ergebnisse werden jetzt wie folgt gegliedert `{ value: foo, done: bool }` ([Firefox Bug 907744](https://bugzil.la/907744)).
- Neue mathematische Methoden wurden in [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) implementiert: [`Math.fround()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) ([Firefox Bug 900125](https://bugzil.la/900125)).
- Die [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) können nicht für Funktionsnamen verwendet werden: Eine solche Verwendung löst jetzt ein [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) aus ([Firefox Bug 907958](https://bugzil.la/907958)).
- Die Syntax für [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde aktualisiert, um Parameter ohne Standardwerte nach Standardparametern zuzulassen, wie `function f(x=1, y)`. Siehe [Firefox Bug 777060](https://bugzil.la/777060).
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} ist implementiert ([Firefox Bug 904701](https://bugzil.la/904701)).

### Schnittstellen/APIs/DOM

- Das letzte Argument (doctype) für {{domxref("DOMImplementation.createDocument")}} ist jetzt optional ([Firefox Bug 909859](https://bugzil.la/909859)).
- Die neue {{domxref("element.classList")}} Spezifikation, die das Hinzufügen/Entfernen mehrerer Klassen mit einem Aufruf erlaubt, wurde implementiert ([Firefox Bug 814014](https://bugzil.la/814014)).
- Der {{domxref("URL.URL", "URL()")}} Konstruktor wurde in der {{domxref("URL")}} Schnittstelle implementiert ([Firefox Bug 887364](https://bugzil.la/887364)).
- Die Eigenschaften {{domxref("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{domxref("HTMLAnchorElement/password", "URLUtils.password")}}, und {{domxref("HTMLAnchorElement/username", "URLUtils.username")}} sind jetzt für alle Schnittstellen verfügbar, die das `URLUtils` Mixin implementieren: {{domxref("URL")}}, {{domxref("Location")}}, {{domxref("HTMLAnchorElement")}}, und {{domxref("HTMLAreaElement")}} ([Firefox Bug 887364](https://bugzil.la/887364)).
- Die {{domxref("URL")}} Schnittstelle ist jetzt von Web Workers zugänglich ([Firefox Bug 887364](https://bugzil.la/887364)).
- IndexedDB kann jetzt als „optimistischer“ Speicherbereich verwendet werden, sodass keine Aufforderungen erforderlich sind und Daten in einem Pool mit LRU-Auslagerungspolitik gespeichert werden, kurz: temporärer Speicher ([Firefox Bug 785884](https://bugzil.la/785884)).
- Unterstützung für {{domxref("WaveShaperNode.oversample")}} wurde hinzugefügt ([Firefox Bug 875277](https://bugzil.la/875277)).
- Der Pfad für permanenten Speicher wurde von `<profile>/indexedDB` zu `<profile>/storage/persistent` geändert (auf b2g von `/data/local/indexedDB` zu `/data/local/storage/persistent`).
- Die {{domxref("Screen.orientation")}} Eigenschaft und die {{domxref("Screen.lockOrientation()")}} Methode unterstützen nun den `default` Wert, der zu `portrait-primary` oder `landscape-primary` abbildet, abhängig vom Gerät ([Firefox Bug 908058](https://bugzil.la/908058)). Dies funktioniert nur für Firefox OS und Firefox für Android. Firefox Desktop wird nicht unterstützt.
- {{domxref("Event")}} Konstruktoren können in Web Workers verwendet werden ([Firefox Bug 910910](https://bugzil.la/910910)).
- Der Versuch, die {{domxref("Document.domain")}} Eigenschaft auf einer Seite einzustellen, die in einem {{HTMLElement("iframe")}} mit dem `sandbox` Attribut eingebettet ist, löst jetzt einen Sicherheitsfehler aus ([Firefox Bug 907892](https://bugzil.la/907892)).
- Die {{domxref("MessageEvent")}} Schnittstelle wurde aktualisiert, um der neuesten Spezifikation zu entsprechen. Die `initMessageEvent` Methode wurde entfernt, während die Schnittstelle jetzt einen Konstruktor hat ([Firefox Bug 848294](https://bugzil.la/848294)).
- Die HTML5 `MessageChannel` API wurde implementiert, hinter der `dom.messageChannel.enabled` Präferenz ([Firefox Bug 677638](https://bugzil.la/677638)).
- Unterstützung für `VTTCue`, hinter der `media.webvtt.enabled` Präferenz, wie bei allen WebVTT-bezogenen Implementierungen, wurde hinzugefügt ([Firefox Bug 868509](https://bugzil.la/868509)).
- Die [Web Audio API](/de/docs/Web/API/Web_Audio_API) wurde standardmäßig verfügbar gemacht ([Firefox Bug 885505](https://bugzil.la/885505)).

### MathML

- Inkonsistente Darstellungen von {{MathMLElement("mmultiscripts")}}, {{MathMLElement("msub")}}, {{MathMLElement("msup")}} und {{MathMLElement("msubsup")}} wurden vereinheitlicht und die Fehlerbehandlung dieser Elemente wurde verbessert ([Firefox Bug 827713](https://bugzil.la/827713)).

### SVG

- Die Einbeziehung von SVG-Glyphen in OpenType, _SVG-in-OpenType_, wurde aktualisiert, um der aktuellen Version der Spezifikation zu entsprechen ([Firefox Bug 906521](https://bugzil.la/906521)).
- Die `SVGElement.ownerSVGElement()` Methode wirft keine Ausnahme mehr ([Firefox Bug 835048](https://bugzil.la/835048)).

## Entwicklungswerkzeuge

- Der Inspektor ist jetzt fernsteuerbar ([Firefox Bug 805526](https://bugzil.la/805526)).
- Der Text der Webkonsole kann ausgewählt werden, {{cssxref("::before")}} und {{cssxref("::after")}} sind jetzt untersuchbar, Debugger- und Responsive-Design-Funktionen sind für diese Version geplant. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

### Ältere Versionen

{{Firefox_for_developers}}
