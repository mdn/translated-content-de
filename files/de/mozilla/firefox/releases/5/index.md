---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen jetzt über das {{ domxref("HTMLElement/accessKey", "accessKey") }}-Attribut sowie die Methoden {{ domxref("element.blur()", "blur()") }}, {{ domxref("element.click()", "click()") }} und {{ domxref("element.focus()", "focus()") }}. Diese sind in der {{ domxref("HTMLElement") }}-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7- und UTF-32-[Zeichensätze](/de/docs/Character_Sets_Supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nun nicht mehr zugunsten von nicht-leeren Elementen übergangen, wenn sie übereinstimmen. Siehe die [Gecko-Hinweise](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- Aus Sicherheitsgründen [lädt WebGL keine Texturen mehr von anderen Domains als der ursprünglichen Domain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures). Die Unterstützung für [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) sollte in Zukunft verfügbar sein, um dies sicherer zu machen.

#### Canvas-Verbesserungen

- Der {{ HTMLElement("canvas") }} 2D-Zeichenkontext unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die `createImageData()`-Methode; dies [erzeugt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit den gleichen Abmessungen wie das angegebene Objekt initialisiert ist, jedoch mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies war als bereits implementiert dokumentiert, war es jedoch nicht.
- Die Angabe von nicht-finiten Werten bei der Hinzufügung von Farbstopps durch einen Aufruf der {{ domxref("CanvasGradient") }}-Methode `addColorStop()` löst jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR` aus.
- Die {{ domxref("HTMLCanvasElement") }}-Methode `toDataURL()` wandelt den angegebenen MIME-Typ nun vor dem Abgleichen korrekt in Kleinbuchstaben um.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; außerhalb der Leinwand liegende Pixel werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem das Rechteck entlang der entsprechenden Achse umgedreht wird. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe von nicht-finiten Werten bei `createImageData()` führt nun zu einer ordnungsgemäßen `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein kleineres Rechteck als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius bei `createRadialGradient()` führt nun korrekt zu `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bildes bei `createPattern()` oder `drawImage()` löst nun korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme aus.
- Die Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR`-Ausnahme mehr aus; diese werden nun korrekt stillschweigend ignoriert.
- Ungültige Werte bei `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` lösen keine Ausnahme mehr aus; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Festlegen ungültiger Werte für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Festlegen ungültiger Werte für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Die Unterstützung für CSS-Animationen wurde hinzugefügt, aktuell mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des {{ domxref("selection") }}-Objekts wurde geändert, sodass die "word"-Selektionsgranularität keine nachfolgenden Leerzeichen mehr umfasst; dies macht es plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methode {{ domxref("setTimeout()") }} wird nun so reguliert, dass sie in inaktiven Tabs nicht mehr als ein Timeout pro Sekunde sendet. Außerdem wird sie nun auf den kleinsten von der HTML5-Spezifikation erlaubten Wert von 4 ms (anstatt der vorherigen 10 ms) geregelt.
- Ähnlich wird die Methode {{ domxref("setInterval()") }} ebenso reguliert, dass sie in inaktiven Tabs nicht mehr als ein Intervall pro Sekunde auslöst.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Event](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschritts-Listener. Dieses wird gesendet, nachdem ein Übertragungsvorgang abgeschlossen ist (also nach dem `abort`, `error` oder `load`-Event). Sie können dies nutzen, um Aufgaben zu verwalten, die unabhängig vom Erfolg oder Misserfolg einer Übertragung ausgeführt werden müssen.
- Die `slice()`-Methode der {{ domxref("Blob") }}-Objekte und in Erweiterung auch der {{ domxref("File") }}-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode wird vorerst `mozSlice()` genannt.
- Der Wert von {{ domxref("window.navigator.language") }} wird nun durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Headers) bestimmt.
- Die Eigenschaft {{ domxref("Element.prefix") }} ist nun schreibgeschützt, wie von der DOM-Spezifikation gefordert.
- {{ domxref("HTMLVideoElement") }} unterstützt nun experimentelle Eigenschaften, um Informationen über Videodarstellungsstatistiken wie Bildwiederholungsraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr so aufrufbar, als wären sie Funktionen; diese Änderung wurde in Abstimmung mit dem WebKit-Team vorgenommen, um Kompatibilität sicherzustellen (siehe [Webkit-Bug 28285](https://webkit.org/b/28285)). Diese Funktion existierte schon lange, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode [`Function.prototype.isGenerator()`](/de/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) wird jetzt unterstützt; damit können Sie bestimmen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur als reserviert behandelt, wenn sie im Strict-Modus verwendet wurden; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr an gesandkastete Skripte übergeben werden.
- Der JSON-Parser wurde neu geschrieben, um Geschwindigkeit und Konformität zu verbessern. Dazu gehört ein Fix für [Firefox-Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indexierbar und können wie Arrays angesprochen werden; darüber hinaus besitzen sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: {{ domxref("SVGLengthList") }}, {{ domxref("SVGNumberList") }}, {{ domxref("SVGPathSegList") }}, und {{ domxref("SVGPointList") }}.

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; er wurde nicht korrekt formatiert, und es war redundant, da wir ohnehin den {{ httpheader("Connection") }}- oder {{ httpheader("Proxy-Connection") }}-Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um Verbindungen im permanenten Verbindungspool intelligenter wiederzuverwenden; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko nun, den Pool so zu sortieren, dass Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst stehen. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen verkürzen, indem es in vielen Fällen das Wachstum der Fenster von Verbindungen vermeidet.
- Firefox handhabt nun den `Content-Disposition` HTTP-Antwort-Header effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es durchsucht alle bereitgestellten Namen, indem es den `filename*` Parameter verwendet, wenn einer verfügbar ist, selbst wenn zuerst ein `filename`-Parameter enthalten ist. Zuvor wurde der erste passende Parameter verwendet, was verhinderte, dass ein passenderer Name verwendet wurde. Siehe [Firefox-Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [dekorierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwickler-Tools

- Das [Webkonsolen-`Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat nun eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für eine Anleitung zum Aktualisieren Ihres Add-ons für Firefox 5, siehe [Add-ons für Firefox 5 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_5).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, genauso wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Module

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Codemodul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt jetzt die Angabe der Eingangsquelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle verfügt über neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich für Debuggingzwecke bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden nun in IDL als ohne Vorzeichen zurückgegebene Ganzzahlen dargestellt, anstelle von solchen mit Vorzeichen (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup` Schnittstelle integriert.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell`-Schnittstelle integriert.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager`-Schnittstelle integriert.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor`-Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. {{domxref("AnimationEvent")}}

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Die neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E)-Hilfe ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und Ganzzahlen ohne Vorzeichen zu konvertieren.

### Änderungen am Build-System

- Sie können Firefox jetzt ohne eine `mozconfig`-Datei bauen; die Einstellung [`--enable-application`](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) wird nun standardmäßig auf "browser" gesetzt. Nachdem Sie den Code heruntergeladen oder heruntergeladen haben, können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
