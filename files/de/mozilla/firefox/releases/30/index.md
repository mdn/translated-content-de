---
title: Firefox 30 Versionshinweise für Entwickler
short-title: Firefox 30
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 30 wurde am [10. Juni 2014](https://whattrainisitnow.com/release/?version=30) veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Box Model Highlighter wurde implementiert ([Firefox Bug 663778](https://bugzil.la/663778)).
- Überall dort, wo ein DOM-Knoten in der Konsolenausgabe erscheint, wird er hervorgehoben, wenn Sie mit der Maus über diese Konsolenausgabe fahren ([Firefox Bug 757866](https://bugzil.la/757866)). Ebenso werden alle JS-Funktionen und -Objekte in der Konsolenausgabe hervorgehoben ([Firefox Bug 584733](https://bugzil.la/584733)). Weitere Informationen zur Verbesserung der Konsole finden Sie in diesem [Blogbeitrag](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Unterstützung für [`console.count()`](/de/docs/Web/API/console/count_static) wurde hinzugefügt ([Firefox Bug 922208](https://bugzil.la/922208)).

### CSS

- Die Eigenschaft {{cssxref("background-blend-mode")}} wurde standardmäßig aktiviert ([Firefox Bug 970600](https://bugzil.la/970600)).
- Die nicht standardisierte `overflow-clip-box` Eigenschaft wurde implementiert, um nur in UA-Stylesheets verwendet zu werden ([Firefox Bug 966992](https://bugzil.la/966992)).
- Die {{cssxref("line-height")}} Eigenschaft wirkt sich jetzt auf einzeilige Texteingabefelder (`<input type=text|password|email|search|tel|url|unknown>` Typen) aus, obwohl sie nicht kleiner als eine Zeilenhöhe von `1.0` eingestellt werden können ([Firefox Bug 349259](https://bugzil.la/349259)).
- Die {{cssxref("line-height")}} Eigenschaft wirkt sich nun auch auf `type=button` aus, ohne Einschränkungen ([Firefox Bug 697451](https://bugzil.la/697451)).
- Änderung des Keyframe-Namens wirkt sich nicht auf aktuelle Elemente aus ([Firefox Bug 978648](https://bugzil.la/978648)).
- Positionierte interne Tabellenelemente sind nicht abs. pos enthaltenen Block (relative Position für Tabellenzeilen) ([Firefox Bug 63895](https://bugzil.la/63895)).

### HTML

_Keine Änderung._

### JavaScript

- Neue, ES2015-kompatible [Array Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` und [Generator Comprehensions](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` wurden implementiert ([Firefox Bug 979865](https://bugzil.la/979865)).
- [Typed Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) sind jetzt erweiterbar und unterstützen neue benannte Eigenschaften ([Firefox Bug 695438](https://bugzil.la/695438)).
- Die {{jsxref("Error.prototype.stack")}} Eigenschaft enthält nun Spaltennummern ([Firefox Bug 762556](https://bugzil.la/762556)) und wurde verbessert [bei Verwendung von `Function()` und `eval()` Aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#description). Dies kann Ihnen helfen, minifizierten oder generierten JavaScript-Code besser zu debuggen.
- Die Methode `Promise.cast()` wurde in {{jsxref("Promise.resolve()")}} umbenannt ([Firefox Bug 966348](https://bugzil.la/966348)).

### Schnittstellen/APIs/DOM

- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) wurde implementiert, um die Sammlung von Telemetriedaten zu erleichtern ([Firefox Bug 936340](https://bugzil.la/936340)).
- Eine `relList` Eigenschaft, die ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurückgibt, wurde zu [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) hinzugefügt ([Firefox Bug 968637](https://bugzil.la/968637)).
- Gemäß der neuesten Spezifikation ist das erste Argument von [`AudioScheduledSourceNode.start`](/de/docs/Web/API/AudioScheduledSourceNode/start) und [`AudioScheduledSourceNode.stop`](/de/docs/Web/API/AudioScheduledSourceNode/stop) jetzt optional und standardmäßig auf `0` gesetzt ([Firefox Bug 982541](https://bugzil.la/982541)).
- Die Methode `Navigator.requestWakeLock()` und der nicht standardisierte `MozWakeLock` sind nicht mehr im Web auf Desktops verfügbar ([Firefox Bug 963366](https://bugzil.la/963366)).
- Die `DOM_VK_ENTER` Konstante wurde aus [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) entfernt ([Firefox Bug 969247](https://bugzil.la/969247)).
- Die `Document.register()` für Webkomponenten wurde angepasst, um dem Verhalten in der neuesten Spezifikationsversion zu entsprechen ([Firefox Bug 856140](https://bugzil.la/856140)).
- Das nicht standardisierte und seit Firefox 15 veraltete `Blob.mozSlice` wird nicht länger unterstützt ([Firefox Bug 961804](https://bugzil.la/961804)).
- Der nicht standardisierte `ArchiveReader` und `ArchiveRequest` sind nicht länger im Web verfügbar ([Firefox Bug 968883](https://bugzil.la/968883)).
- [WebIDL Konstruktoren](https://searchfox.org/firefox-main/source/dom/webidl/) können nicht mehr als Funktionen aufgerufen werden. Sie müssen dem Schlüsselwort `new` vorangestellt werden. ([Firefox Bug 916644](https://bugzil.la/916644))
- Unterstützung für einen neuen Wert (`alpha`) für den zweiten, optionalen Parameter der Methode [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), der es Ihnen erlaubt zu definieren, ob Alpha-Blending für diesen Kontext gespeichert werden muss oder nicht. Wenn nicht, ist der Pixel-Alpha-Wert in diesem Speicher immer `1.0`. Dies erlaubt dem Backend, einen schnellen Weg umzusetzen. ([Firefox Bug 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` gibt jetzt die reguläre [`console`](/de/docs/Web/API/console) zurück; `WorkerConsole` wurde entfernt ([Firefox Bug 965860](https://bugzil.la/965860)).
- Die [`WEBGL_debug_shaders`](/de/docs/Web/API/WEBGL_debug_shaders) WebGL-Erweiterung wurde implementiert ([Firefox Bug 968374](https://bugzil.la/968374)).

### MathML

_Keine Änderung._

### SVG

- {{SVGElement("feDropShadow")}}, und seine Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement), aus dem Filter Effects Module werden jetzt unterstützt ([Firefox Bug 964200](https://bugzil.la/964200)).

### Audio/Video

- Unter Linux wird jetzt GStreamer 1.0 unterstützt (anstelle von 0.10) ([Firefox Bug 806917](https://bugzil.la/806917)).

## Sicherheit

- `<form autocomplete="off">` verhindert nicht länger, dass Passwörter gespeichert werden. Weitere Informationen finden Sie unter [Autofill-Verwaltung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields). ([Firefox Bug 956906](https://bugzil.la/956906)).

## Änderungen für Add-on- und Mozilla-Entwickler

- Die Schnittstelle `nsIDOMWindowUtils` unterstützt nun das Boolesche Attribut `audioMuted` und `audioVolume`, einen Float im Bereich `[0.0 , 1.0]`, was Ihnen die Kontrolle über den Klang ermöglicht, der von einem Fenster (also jedem Tab oder iframe) erzeugt wird. Es gibt keine Benutzeroberfläche dafür, aber es steht Add-ons zur Verfügung. ([Firefox Bug 923247](https://bugzil.la/923247))
