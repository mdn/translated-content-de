---
title: Firefox 30 für Entwickler
slug: Mozilla/Firefox/Releases/30
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Ein Box Model Highlighter wurde implementiert ([Firefox Bug 663778](https://bugzil.la/663778)).
- Überall, wo ein DOM-Knoten in der Konsolenausgabe erscheint, wird er hervorgehoben, wenn Sie mit der Maus über diese Konsolenausgabe fahren ([Firefox Bug 757866](https://bugzil.la/757866)). Ebenso werden alle JS-Funktionen und -Objekte in der Konsolenausgabe hervorgehoben ([Firefox Bug 584733](https://bugzil.la/584733)). Mehr Informationen über die Verbesserungen der Konsole finden Sie in diesem [Blogbeitrag](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Unterstützung für {{domxref("console/count_static", "console.count()")}} wurde hinzugefügt ([Firefox Bug 922208](https://bugzil.la/922208)).

### CSS

- Die Eigenschaft {{cssxref("background-blend-mode")}} wurde standardmäßig aktiviert ([Firefox Bug 970600](https://bugzil.la/970600)).
- Die nicht-standardmäßige Eigenschaft `overflow-clip-box` wurde implementiert, jedoch nur zur Verwendung in UA-Stylesheets ([Firefox Bug 966992](https://bugzil.la/966992)).
- Die Eigenschaft {{cssxref("line-height")}} wirkt sich jetzt auf einzeilige Texteingaben (`<input type=text|password|email|search|tel|url|unknown>` Typen) aus, obwohl sie diese nicht unter eine Zeilenhöhe von `1.0` verkleinern kann ([Firefox Bug 349259](https://bugzil.la/349259)).
- Die Eigenschaft {{cssxref("line-height")}} wirkt sich jetzt auch auf `type=button` aus, ohne Einschränkungen ([Firefox Bug 697451](https://bugzil.la/697451)).
- Änderung des Namens von Keyframes wirkt sich nicht auf aktuelle Elemente aus ([Firefox Bug 978648](https://bugzil.la/978648)).
- Positionierte interne Tabelelemente sind nicht abs. pos. enthaltender Block (relative Position für Tabellreihen) ([Firefox Bug 63895](https://bugzil.la/63895)).

### HTML

_Keine Änderung._

### JavaScript

- Neue ES2015-kompatible [Array-Komprensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` und [Generator-Komprensionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` wurden implementiert ([Firefox Bug 979865](https://bugzil.la/979865)).
- [Typisierte Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) sind jetzt erweiterbar und unterstützen neue benannte Eigenschaften ([Firefox Bug 695438](https://bugzil.la/695438)).
- Die {{jsxref("Error.prototype.stack")}}-Eigenschaft enthält jetzt Spaltennummern ([Firefox Bug 762556](https://bugzil.la/762556)) und wurde verbessert [bei Verwendung von `Function()` und `eval()` Aufrufen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#stack_of_evaled_code). Dies kann Ihnen helfen, minifizierten oder generierten JavaScript-Code besser zu debuggen.
- Die Methode `Promise.cast()` wurde in {{jsxref("Promise.resolve()")}} umbenannt ([Firefox Bug 966348](https://bugzil.la/966348)).

### Schnittstellen/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} wurde implementiert, um die Telemetrieerfassung zu erleichtern ([Firefox Bug 936340](https://bugzil.la/936340)).
- Eine `relList`-Eigenschaft, die eine {{domxref("DOMTokenList")}} zurückgibt, wurde zu {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} und {{domxref("HTMLAnchorElement")}} hinzugefügt ([Firefox Bug 968637](https://bugzil.la/968637)).
- Gemäß der neuesten Spezifikation ist das erste Argument von {{domxref("AudioScheduledSourceNode.start")}} und {{domxref("AudioScheduledSourceNode.stop")}} jetzt optional und standardmäßig `0` ([Firefox Bug 982541](https://bugzil.la/982541)).
- Die Methode `Navigator.requestWakeLock()` und das nicht standardisierte `MozWakeLock` sind nicht mehr im Web auf Desktop verfügbar ([Firefox Bug 963366](https://bugzil.la/963366)).
- Die Konstante `DOM_VK_ENTER` wurde aus {{domxref("KeyboardEvent")}} entfernt ([Firefox Bug 969247](https://bugzil.la/969247)).
- Webkomponenten `Document.register()` wurde angepasst, um dem Verhalten zu folgen, das in der neuesten Version der Spezifikation beschrieben ist ([Firefox Bug 856140](https://bugzil.la/856140)).
- Das nicht standardisierte `Blob.mozSlice`, das seit Firefox 15 veraltet ist, wird nicht mehr unterstützt ([Firefox Bug 961804](https://bugzil.la/961804)).
- Die nicht standardisierten `ArchiveReader` und `ArchiveRequest` werden nicht mehr im Web angezeigt ([Firefox Bug 968883](https://bugzil.la/968883)).
- [WebIDL-Konstruktoren](https://searchfox.org/mozilla-central/source/dom/webidl/) können nicht mehr als Funktionen aufgerufen werden. Sie müssen mit dem Schlüsselwort `new` versehen werden. ([Firefox Bug 916644](https://bugzil.la/916644))
- Unterstützung für einen neuen Wert (`alpha`) für den zweiten, optionalen Parameter der Methode {{domxref("HTMLCanvasElement.getContext()")}} hinzugefügt, der festlegt, ob Alphablending für diesen Kontext gespeichert werden muss oder nicht. Wenn nicht, ist der pro-Pixel-Alpha-Wert in diesem Speicher immer `1.0`. Dies erlaubt dem Backend die Implementierung eines Schnellverfahrens. ([Firefox Bug 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` gibt jetzt die reguläre {{domxref("console")}} zurück; `WorkerConsole` wurde entfernt ([Firefox Bug 965860](https://bugzil.la/965860)).
- Die {{domxref("WEBGL_debug_shaders")}} WebGL-Erweiterung wurde implementiert ([Firefox Bug 968374](https://bugzil.la/968374)).

### MathML

_Keine Änderung._

### SVG

- {{SVGElement("feDropShadow")}} und seine Schnittstelle {{domxref("SVGFEDropShadowElement")}} aus dem Filter Effects Module werden jetzt unterstützt ([Firefox Bug 964200](https://bugzil.la/964200)).

### Audio/Video

- Auf Linux wird jetzt Gstreamer 1.0 unterstützt (anstatt 0.10) ([Firefox Bug 806917](https://bugzil.la/806917)).

## Sicherheit

_Keine Änderung._

## Änderungen für Add-on- und Mozilla-Entwickler

- Die Schnittstelle `nsIDOMWindowUtils` unterstützt jetzt das boolesche Attribut `audioMuted` und `audioVolume`, ein Float im Bereich `[0.0 , 1.0]`, das die Steuerung des von einem Fenster produzierten Tons ermöglicht (d. h. jeder Tab oder iframe). Es gibt keine Benutzeroberfläche dafür, aber es steht Add-ons zur Verfügung. ([Firefox Bug 923247](https://bugzil.la/923247))

### Ältere Versionen

{{Firefox_for_developers}}
