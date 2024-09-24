---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 4163a227e2c4b42139056a3474b146fe90876cbf
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen nun über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung der Zeichensätze UTF-7 und UTF-32 [Character Sets](/de/docs/Character_Sets_Supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}-Elemente nicht mehr zugunsten nicht leerer Elemente übersprungen, wenn eine Übereinstimmung stattfindet. Siehe die [Gecko-Hinweise](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der ursprünglichen Domain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. Unterstützung für [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) wird in Zukunft erwartet, um dies sicherer zu gestalten.

#### Canvas-Verbesserungen

- Der 2D-Zeichnungskontext von {{ HTMLElement("canvas") }} unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit denselben Abmessungen wie das angegebene Objekt, jedoch sind alle Pixel weiterhin auf transparentes Schwarz voreingestellt. Dies war als bereits implementiert dokumentiert, es war jedoch nicht so.
- Die Angabe von nicht-endlichen Werten beim Hinzufügen von Farbverläufen über einen Aufruf der `addColorStop()`-Methode des [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) führt nun korrekt zu einem `INDEX_SIZE_ERR` anstelle eines `SYNTAX_ERR`.
- Die Methode `toDataURL()` von [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) verwendet nun korrekt kleingeschriebene MIME-Typen, bevor sie sie abgleicht.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem das Rechteck um die entsprechende Achse gespiegelt wird. **Wir benötigen einen Artikel über [CSS-Sizing](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe von nicht-endlichen Werten bei einem Aufruf von `createImageData()` führt nun korrekt zu einer `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` liefern jetzt korrekt mindestens einen Pixel an Bilddaten, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius bei einem Aufruf von `createRadialGradient()` führt nun korrekt zu einem `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bildes bei einem Aufruf von `createPattern()` oder `drawImage()` führt nun korrekt zu einer `TYPE_MISMATCH_ERR`-Ausnahme.
- Ungültige Werte für `globalAlpha` lösen keine `SYNTAX_ERR`-Ausnahme mehr aus; diese werden nun korrekt stillschweigend ignoriert.
- Ungültige Werte beim Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` lösen keine Ausnahme mehr aus; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Die Einstellung eines ungültigen Werts für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Die Einstellung eines ungültigen Werts für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, so dass die "word"-Granularität der Auswahl keine nachfolgenden Leerzeichen mehr einschließt; dies macht sie plattformübergreifend konsistenter und entspricht dem Verhalten von WebKit.
- Die Methode [`setTimeout()`](/de/docs/Web/API/SetTimeout) wurde geändert, sodass nicht mehr als einmal pro Sekunde ein Timeout in inaktiven Tabs gesendet wird. Außerdem wird jetzt das kleinste vom HTML5-Spezifikation erlaubte Intervall verwendet: 4 ms (anstatt der früheren 10 ms).
- Ebenso wird die Methode [`setInterval()`](/de/docs/Web/API/SetInterval) nun auf maximal ein Intervall pro Sekunde in inaktiven Tabs begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`](en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition)-Ereignis für Fortschrittslistener. Dieses wird nach Abschluss eines Datenübertragungsversuchs (das heißt, nach dem `abort`-, `error`- oder `load`-Ereignis) gesendet. Sie können dies verwenden, um Aufgaben zu behandeln, die unabhängig vom Erfolg oder Misserfolg einer Übertragung ausgeführt werden müssen.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)- und damit auch der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie es die DOM-Spezifikation verlangt.
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Video-Wiedergabestatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr als Funktionen aufrufbar; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team durchgeführt, um die Kompatibilität zu gewährleisten (siehe [Webkit-Bug 28285](https://webkit.org/b/28285)). Diese Funktion existierte seit langem, wurde jedoch nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur im strikten Modus als reserviert behandelt; nun werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die in Chrome-Code erstellt wurden, dürfen nicht mehr für gesandboxte Skripte zugänglich gemacht werden.
- Der JSON-Parser wurde neu geschrieben, um die Geschwindigkeit und Konformität zu verbessern. Dies beinhaltet eine Fehlerbehebung für [Firefox-Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indexierbar und können ähnlich wie Arrays zugegriffen werden; zusätzlich haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in der Liste angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war überflüssig, da wir ohnehin den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }}-Header mit dem Wert „keep-alive“ gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit der Wiederverwendung von Verbindungen im Persistent-Connection-Pool umzugehen; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko, den Pool so zu sortieren, dass Verbindungen mit dem größten [Staufenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst bearbeitet werden. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen verkürzen, indem vermieden wird, dass in vielen Fällen die Fenster von Verbindungen erhöht werden müssen.
- Firefox arbeitet nun effektiver mit dem HTTP-Antwortheader `Content-Disposition`, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es durchsucht alle bereitgestellten Namen und verwendet den Parameter `filename*`, sofern vorhanden, selbst wenn ein `filename`-Parameter zuerst enthalten ist. Zuvor wurde der erste passende Parameter verwendet, wodurch die Verwendung eines geeigneteren Namens verhindert wurde. Siehe [Firefox-Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verschönte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwicklerwerkzeuge

- Das [`Console`-Objekt der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5 lesen Sie bitte [Add-ons für Firefox 5 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass Binärkomponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Siehe [Binärschnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher mit Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt nun die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich für Debugging-Zwecke bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden jetzt in IDL als vorzeichenlose Ganzzahlen anstelle von vorzeichenbehafteten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox-Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox-Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox-Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue Helfer [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und vorzeichenlose Ganzzahlen zu konvertieren.

### Änderungen am Build-System

- Sie können Firefox jetzt ohne eine `mozconfig`-Datei erstellen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist jetzt standardmäßig auf "browser" eingestellt. Nach dem Herunterladen oder Abrufen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
