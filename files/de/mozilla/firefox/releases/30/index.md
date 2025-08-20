---
title: Firefox 30 für Entwickler
short-title: Firefox 30
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Ein Box Model Highlighter wurde implementiert ([Firefox Bug 663778](https://bugzil.la/663778)).
- Überall, wo ein DOM-Knoten in der Konsolenausgabe erscheint, wird er hervorgehoben, wenn Sie über diese Konsolenausgabe schweben ([Firefox Bug 757866](https://bugzil.la/757866)). Ebenso werden alle JS-Funktionen und Objekte in der Konsolenausgabe hervorgehoben ([Firefox Bug 584733](https://bugzil.la/584733)). Mehr Informationen über die Verbesserung der Konsole finden Sie in diesem [Blogbeitrag](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Unterstützung für [`console.count()`](/de/docs/Web/API/console/count_static) wurde hinzugefügt ([Firefox Bug 922208](https://bugzil.la/922208)).

### CSS

- Die Eigenschaft {{cssxref("background-blend-mode")}} wurde standardmäßig aktiviert ([Firefox Bug 970600](https://bugzil.la/970600)).
- Die nicht standardisierte Eigenschaft `overflow-clip-box` wurde implementiert, jedoch nur für die Verwendung in UA-Stylesheets ([Firefox Bug 966992](https://bugzil.la/966992)).
- Die {{cssxref("line-height")}}-Eigenschaft beeinflusst jetzt einzeilige Texteingaben (`<input type=text|password|email|search|tel|url|unknown>` Typen), obwohl sie nicht auf eine Zeilenhöhe von weniger als `1.0` verkleinert werden können ([Firefox Bug 349259](https://bugzil.la/349259)).
- Die {{cssxref("line-height")}}-Eigenschaft betrifft jetzt auch `type=button` ohne Einschränkungen ([Firefox Bug 697451](https://bugzil.la/697451)).
- Änderungen am Namen von Keyframes beeinflussen keine aktuellen Elemente ([Firefox Bug 978648](https://bugzil.la/978648)).
- positionierte interne Tabellenelemente sind nicht abs pos Enthaltene Blöcke (relative Position für Tabellenzeilen) ([Firefox Bug 63895](https://bugzil.la/63895)).

### HTML

_Keine Änderungen._

### JavaScript

- Neue ES2015-kompatible [Array-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` und [Generator-Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` wurden implementiert ([Firefox Bug 979865](https://bugzil.la/979865)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) sind jetzt erweiterbar und unterstützen neue benannte Eigenschaften ([Firefox Bug 695438](https://bugzil.la/695438)).
- Die Eigenschaft {{jsxref("Error.prototype.stack")}} enthält jetzt Spaltennummern ([Firefox Bug 762556](https://bugzil.la/762556)) und wurde [bei Verwendung von `Function()` und `eval()`-Aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#description) verbessert. Dies kann Ihnen helfen, minimierten oder generierten JavaScript-Code besser zu debuggen.
- Die Methode `Promise.cast()` wurde in {{jsxref("Promise.resolve()")}} umbenannt ([Firefox Bug 966348](https://bugzil.la/966348)).

### Schnittstellen/APIs/DOM

- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert, um die Telemetriesammlung zu erleichtern ([Firefox Bug 936340](https://bugzil.la/936340)).
- Eine `relList`-Eigenschaft wurde hinzugefügt, die eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zu [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) zurückgibt ([Firefox Bug 968637](https://bugzil.la/968637)).
- Gemäß der neuesten Spezifikation ist das erste Argument von [`AudioScheduledSourceNode.start`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`AudioScheduledSourceNode.stop`](/de/docs/Web/API/AudioScheduledSourceNode/stop) jetzt optional und standardmäßig `0` ([Firefox Bug 982541](https://bugzil.la/982541)).
- Die Methode `Navigator.requestWakeLock()` und das nicht standardisierte `MozWakeLock` sind auf Desktop nicht mehr aus dem Web verfügbar ([Firefox Bug 963366](https://bugzil.la/963366)).
- Die Konstante `DOM_VK_ENTER` wurde aus [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) entfernt ([Firefox Bug 969247](https://bugzil.la/969247)).
- Das `Document.register()` von Webkomponenten wurde angepasst, um das Verhalten zu befolgen, das in der neuesten Version der Spezifikation beschrieben wird ([Firefox Bug 856140](https://bugzil.la/856140)).
- Die seit Firefox 15 nicht standardisierte und abgekündigte Methode `Blob.mozSlice` wird nicht mehr unterstützt ([Firefox Bug 961804](https://bugzil.la/961804)).
- Der nicht standardisierte `ArchiveReader` und `ArchiveRequest` werden nicht mehr im Web bereitgestellt ([Firefox Bug 968883](https://bugzil.la/968883)).
- [WebIDL-Konstruktoren](https://searchfox.org/firefox-main/source/dom/webidl/) können nicht mehr als Funktionen aufgerufen werden. Sie müssen durch das Schlüsselwort `new` eingeleitet werden. ([Firefox Bug 916644](https://bugzil.la/916644))
- Unterstützung für einen neuen Wert (`alpha`) für den zweiten optionalen Parameter der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt, der ermöglicht, ob Alpha-Blending für diesen Kontext gespeichert werden muss oder nicht. Wenn nicht, ist der pro-Pixel-Alphawert in diesem Speicher immer `1.0`. Dies ermöglicht dem Backend, eine Schnellspur zu implementieren. ([Firefox Bug 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` gibt jetzt die reguläre [`console`](/de/docs/Web/API/console) zurück; `WorkerConsole` wurde entfernt ([Firefox Bug 965860](https://bugzil.la/965860)).
- Die [`WEBGL_debug_shaders`](/de/docs/Web/API/WEBGL_debug_shaders) WebGL-Erweiterung wurde implementiert ([Firefox Bug 968374](https://bugzil.la/968374)).

### MathML

_Keine Änderungen._

### SVG

- {{SVGElement("feDropShadow")}} und seine Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement) aus dem Filter Effects Module werden jetzt unterstützt ([Firefox Bug 964200](https://bugzil.la/964200)).

### Audio/Video

- Unter Linux wird jetzt GStreamer 1.0 unterstützt (anstatt 0.10) ([Firefox Bug 806917](https://bugzil.la/806917)).

## Sicherheit

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

- Die Schnittstelle `nsIDOMWindowUtils` unterstützt jetzt das boolesche Attribut `audioMuted` und `audioVolume`, einen Float im Bereich `[0.0 , 1.0]`, um den von einem Fenster (d.h. einem Tab oder iframe) erzeugten Ton zu steuern. Es gibt keine Benutzeroberfläche dafür, aber es steht Add-ons zur Verfügung. ([Firefox Bug 923247](https://bugzil.la/923247))
