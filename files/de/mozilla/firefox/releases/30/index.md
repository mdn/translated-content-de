---
title: Firefox 30 für Entwickler
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Box-Modell-Highlighter wurde implementiert ([Firefox Fehler 663778](https://bugzil.la/663778)).
- Überall wo ein DOM-Knoten in der Konsolenausgabe erscheint, wird dieser hervorgehoben, wenn Sie über die Konsolenausgabe schweben ([Firefox Fehler 757866](https://bugzil.la/757866)). Ebenso werden alle JS-Funktionen und -Objekte in der Konsolenausgabe hervorgehoben ([Firefox Fehler 584733](https://bugzil.la/584733)). Mehr Informationen über die Verbesserung der Konsole finden Sie in diesem [Blogbeitrag](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Unterstützung für [`console.count()`](/de/docs/Web/API/Console/count_static) wurde hinzugefügt ([Firefox Fehler 922208](https://bugzil.la/922208)).

### CSS

- Die Eigenschaft {{cssxref("background-blend-mode")}} wurde standardmäßig aktiviert ([Firefox Fehler 970600](https://bugzil.la/970600)).
- Die nicht standardisierte Eigenschaft `overflow-clip-box` wurde implementiert, um nur in UA-Stylesheets verwendet zu werden ([Firefox Fehler 966992](https://bugzil.la/966992)).
- Die Eigenschaft {{cssxref("line-height")}} beeinflusst jetzt einzeilige Texteingaben (`<input type=text|password|email|search|tel|url|unknown>`) obwohl sie diese nicht unter eine Zeilenhöhe von `1.0` verkleinern kann ([Firefox Fehler 349259](https://bugzil.la/349259)).
- Die Eigenschaft {{cssxref("line-height")}} beeinflusst nun auch `type=button`, ohne Einschränkungen ([Firefox Fehler 697451](https://bugzil.la/697451)).
- Eine Änderung im Namen von Keyframes beeinflusst aktuelle Elemente nicht ([Firefox Fehler 978648](https://bugzil.la/978648)).
- Positionierte interne Tabellenelemente sind kein absolut positionierender Block mehr (relative Position für Tabellenzeilen) ([Firefox Fehler 63895](https://bugzil.la/63895)).

### HTML

_Keine Änderung._

### JavaScript

- Neue ES2015-kompatible [Array Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` und [Generator Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` wurden implementiert ([Firefox Fehler 979865](https://bugzil.la/979865)).
- [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) sind jetzt erweiterbar und unterstützen neue benannte Eigenschaften ([Firefox Fehler 695438](https://bugzil.la/695438)).
- Die Eigenschaft {{jsxref("Error.prototype.stack")}} enthält jetzt Spaltennummern ([Firefox Fehler 762556](https://bugzil.la/762556)) und wurde verbessert [bei der Verwendung von `Function()` und `eval()` Aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#stack_of_evaled_code). Dies kann Ihnen helfen, minifizierten oder generierten JavaScript-Code besser zu debuggen.
- Die Methode `Promise.cast()` wurde in {{jsxref("Promise.resolve()")}} umbenannt ([Firefox Fehler 966348](https://bugzil.la/966348)).

### Schnittstellen/APIs/DOM

- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert, um die Sammlung von Telemetriedaten zu erleichtern ([Firefox Fehler 936340](https://bugzil.la/936340)).
- Eine `relList`-Eigenschaft, die eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurückgibt, wurde zu [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) hinzugefügt ([Firefox Fehler 968637](https://bugzil.la/968637)).
- Gemäß der neuesten Spezifikation ist das erste Argument von [`AudioScheduledSourceNode.start`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`AudioScheduledSourceNode.stop`](/de/docs/Web/API/AudioScheduledSourceNode/stop) jetzt optional und standardmäßig `0` ([Firefox Fehler 982541](https://bugzil.la/982541)).
- Die Methode `Navigator.requestWakeLock()` und das nicht standardisierte `MozWakeLock` sind auf dem Desktop nicht mehr im Web verfügbar ([Firefox Fehler 963366](https://bugzil.la/963366)).
- Die Konstante `DOM_VK_ENTER` wurde aus [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) entfernt ([Firefox Fehler 969247](https://bugzil.la/969247)).
- Das `Document.register()` von Webkomponenten wurde angepasst, um dem Verhalten der neuesten Spezifikation zu folgen ([Firefox Fehler 856140](https://bugzil.la/856140)).
- Das nicht standardisierte, und seit Firefox 15 veraltete, `Blob.mozSlice` wird nicht mehr unterstützt ([Firefox Fehler 961804](https://bugzil.la/961804)).
- Der nicht standardisierte `ArchiveReader` und `ArchiveRequest` sind dem Web nicht mehr zugänglich ([Firefox Fehler 968883](https://bugzil.la/968883)).
- [WebIDL-Konstruktoren](https://searchfox.org/mozilla-central/source/dom/webidl/) können nicht mehr als Funktionen aufgerufen werden. Sie müssen dem Schlüsselwort `new` vorangestellt werden. ([Firefox Fehler 916644](https://bugzil.la/916644))
- Unterstützung für einen neuen Wert (`alpha`) für den zweiten, optionalen, Parameter der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) wurde hinzugefügt, um zu definieren, ob Alpha-Blending für diesen Kontext gespeichert werden muss oder nicht. Wenn nicht, ist der pro-Pixel-Alpha-Wert in diesem Speicher immer `1.0`. Dies ermöglicht die Implementierung eines schnellen Pfades im Backend. ([Firefox Fehler 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` gibt jetzt die reguläre [`console`](/de/docs/Web/API/Console) zurück; `WorkerConsole` wurde entfernt ([Firefox Fehler 965860](https://bugzil.la/965860)).
- Die [`WEBGL_debug_shaders`](/de/docs/Web/API/WEBGL_debug_shaders) WebGL-Erweiterung wurde implementiert ([Firefox Fehler 968374](https://bugzil.la/968374)).

### MathML

_Keine Änderung._

### SVG

- {{SVGElement("feDropShadow")}}, und seine Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement), aus dem Filter Effects Module werden jetzt unterstützt ([Firefox Fehler 964200](https://bugzil.la/964200)).

### Audio/Video

- Unter Linux wird jetzt Gstreamer 1.0 unterstützt (anstatt 0.10) ([Firefox Fehler 806917](https://bugzil.la/806917)).

## Sicherheit

_Keine Änderung._

## Änderungen für Add-on- und Mozilla-Entwickler

- Die Schnittstelle `nsIDOMWindowUtils` unterstützt jetzt das boolesche Attribut `audioMuted` und `audioVolume`, eine Fließkommazahl im Bereich `[0.0, 1.0]`, um den Ton, der von einem Fenster (das heißt, einem beliebigen Tab oder iframe) erzeugt wird, zu steuern. Es gibt keine Benutzeroberfläche dafür, aber es ist für Add-ons verfügbar. ([Firefox Fehler 923247](https://bugzil.la/923247))

### Ältere Versionen

{{Firefox_for_developers}}
