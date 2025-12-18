---
title: Firefox 30 Versionshinweise für Entwickler
short-title: Firefox 30
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 30 wurde am [10. Juni 2014](https://whattrainisitnow.com/release/?version=30) veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-On-Entwickler.

## Änderungen für Webentwickler

### Entwickler-Tools

- Ein Boxmodell-Hervorheber wurde implementiert ([Firefox-Bug 663778](https://bugzil.la/663778)).
- Überall dort, wo ein DOM-Knoten in der Konsolenausgabe erscheint, wird er hervorgehoben, wenn Sie mit der Maus über diese Ausgabe fahren ([Firefox-Bug 757866](https://bugzil.la/757866)). Ebenso werden alle JS-Funktionen und -Objekte in der Konsolenausgabe hervorgehoben ([Firefox-Bug 584733](https://bugzil.la/584733)). Weitere Informationen zur Verbesserung der Konsole finden Sie in diesem [Blogpost](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Unterstützung für [`console.count()`](/de/docs/Web/API/console/count_static) wurde hinzugefügt ([Firefox-Bug 922208](https://bugzil.la/922208)).

### CSS

- Die Eigenschaft {{cssxref("background-blend-mode")}} wurde standardmäßig aktiviert ([Firefox-Bug 970600](https://bugzil.la/970600)).
- Die nicht standardmäßige Eigenschaft `overflow-clip-box` wurde implementiert, jedoch nur zur Verwendung in UA-Stylesheets ([Firefox-Bug 966992](https://bugzil.la/966992)).
- Die {{cssxref("line-height")}}-Eigenschaft beeinflusst jetzt einzeilige Texteingaben (`<input type=text|password|email|search|tel|url|unknown>` Typen), obwohl sie sie nicht unter eine Zeilenhöhe von `1.0` verkleinern kann ([Firefox-Bug 349259](https://bugzil.la/349259)).
- Die {{cssxref("line-height")}}-Eigenschaft beeinflusst jetzt auch `type=button` ohne Einschränkungen ([Firefox-Bug 697451](https://bugzil.la/697451)).
- Änderungen am Namen von Keyframes beeinflussen keine aktuellen Elemente ([Firefox-Bug 978648](https://bugzil.la/978648)).
- positionierte interne Tabellenelemente sind kein absolut positioniertes Enthaltungsblock (relative Position für Tabellenzeilen) ([Firefox-Bug 63895](https://bugzil.la/63895)).

### HTML

_Keine Änderung._

### JavaScript

- Neue ES2015-kompatible [Array Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` und [Generator Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` wurden implementiert ([Firefox-Bug 979865](https://bugzil.la/979865)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) sind jetzt erweiterbar und unterstützen neue benannte Eigenschaften ([Firefox-Bug 695438](https://bugzil.la/695438)).
- Die {{jsxref("Error.prototype.stack")}}-Eigenschaft enthält jetzt Spaltennummern ([Firefox-Bug 762556](https://bugzil.la/762556)) und wurde verbessert [bei der Verwendung von `Function()` und `eval()` Aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#description). Dies kann Ihnen helfen, minifizierten oder generierten JavaScript-Code besser zu debuggen.
- Die Methode `Promise.cast()` wurde in {{jsxref("Promise.resolve()")}} umbenannt ([Firefox-Bug 966348](https://bugzil.la/966348)).

### Schnittstellen/APIs/DOM

- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert, um die Erfassung von Telemetriedaten zu erleichtern ([Firefox-Bug 936340](https://bugzil.la/936340)).
- Eine `relList`-Eigenschaft, die eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurückgibt, wurde zu [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) hinzugefügt ([Firefox-Bug 968637](https://bugzil.la/968637)).
- Gemäß der neuesten Spezifikation ist das erste Argument von [`AudioScheduledSourceNode.start`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`AudioScheduledSourceNode.stop`](/de/docs/Web/API/AudioScheduledSourceNode/stop) jetzt optional und hat standardmäßig den Wert `0` ([Firefox-Bug 982541](https://bugzil.la/982541)).
- Die Methode `Navigator.requestWakeLock()` und der nicht standardisierte `MozWakeLock` sind im Web auf dem Desktop nicht mehr verfügbar ([Firefox-Bug 963366](https://bugzil.la/963366)).
- Die Konstante `DOM_VK_ENTER` wurde aus [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) entfernt ([Firefox-Bug 969247](https://bugzil.la/969247)).
- Das `Document.register()` der Webkomponenten wurde an das Verhalten angepasst, das im neuesten Spezifikationsentwurf beschrieben ist ([Firefox-Bug 856140](https://bugzil.la/856140)).
- Das nicht standardmäßige und seit Firefox 15 veraltete `Blob.mozSlice` wird nicht mehr unterstützt ([Firefox-Bug 961804](https://bugzil.la/961804)).
- Der nicht standardisierte `ArchiveReader` und `ArchiveRequest` werden nicht mehr im Web bereitgestellt ([Firefox-Bug 968883](https://bugzil.la/968883)).
- [WebIDL-Konstruktoren](https://searchfox.org/firefox-main/source/dom/webidl/) können nicht mehr als Funktionen aufgerufen werden. Sie müssen durch das Schlüsselwort `new` eingeleitet werden. ([Firefox-Bug 916644](https://bugzil.la/916644))
- Unterstützung für einen neuen Wert (`alpha`) für den zweiten, optionalen, Parameter der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt, um zu definieren, ob das Alpha-Mischen für diesen Kontext gespeichert werden muss oder nicht. Wenn nicht, hat der Alpha-Wert pro Pixel in diesem Speicher immer `1.0`. Dadurch kann das Backend einen Schnellpfad implementieren. ([Firefox-Bug 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` gibt jetzt die reguläre [`console`](/de/docs/Web/API/console) zurück; `WorkerConsole` wurde entfernt ([Firefox-Bug 965860](https://bugzil.la/965860)).
- Die [`WEBGL_debug_shaders`](/de/docs/Web/API/WEBGL_debug_shaders) WebGL-Erweiterung wurde implementiert ([Firefox-Bug 968374](https://bugzil.la/968374)).

### MathML

_Keine Änderung._

### SVG

- {{SVGElement("feDropShadow")}}, und seine Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement), aus dem Filter Effects Module werden jetzt unterstützt ([Firefox-Bug 964200](https://bugzil.la/964200)).

### Audio/Video

- Unter Linux wird jetzt GStreamer 1.0 unterstützt (anstatt 0.10) ([Firefox-Bug 806917](https://bugzil.la/806917)).

## Sicherheit

- `<form autocomplete="off">` verhindert nicht länger, dass Passwörter gespeichert werden. Weitere Informationen finden Sie unter [Verwaltung des automatischen Ausfüllens von Login-Feldern](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields). ([Firefox-Bug 956906](https://bugzil.la/956906)).

## Änderungen für Add-On- und Mozilla-Entwickler

- Die Schnittstelle `nsIDOMWindowUtils` unterstützt jetzt das boolesche Attribut `audioMuted` und `audioVolume`, einen Float im Bereich `[0.0 , 1.0]`, um den durch ein Fenster (d.h. jeden Tab oder iframe) erzeugten Sound zu steuern. Es gibt keine Benutzeroberfläche dafür, aber es ist für Add-Ons verfügbar. ([Firefox-Bug 923247](https://bugzil.la/923247))
