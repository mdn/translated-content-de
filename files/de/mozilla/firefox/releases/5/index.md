---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben jetzt das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten von nicht-leeren übersprungen, wenn eine Übereinstimmung erfolgt. Siehe die [Gecko-Notizen](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomäne](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung sollte in naher Zukunft kommen, um dies sicherer zu machen.

#### Canvas-Verbesserungen

- Der 2D-Zeichnungskontext des {{ HTMLElement("canvas") }} unterstützt jetzt das Angeben eines `ImageData`-Objekts als Eingabe für die `createImageData()`-Methode; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit denselben Dimensionen wie das angegebene Objekt, jedoch immer noch mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies war dokumentiert, wurde aber nicht umgesetzt.
- Das Angeben nicht-finiten Werten beim Hinzufügen von Farbunterbrechungen durch einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` wirft jetzt korrekt `INDEX_SIZE_ERR` statt `SYNTAX_ERR`.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode `toDataURL()` verwendet jetzt korrekt Kleinbuchstaben für den angegebenen MIME-Typ vor dem Abgleich.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen des Canvas hinausgehen; Pixel außerhalb des Canvas werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem das Rechteck um die geeignete Achse gespiegelt wird. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Das Angeben nicht-finiten Werten beim Aufruf von `createImageData()` wirft jetzt richtig eine `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Das Angeben eines negativen Radius beim Aufruf von `createRadialGradient()` wirft jetzt korrekt `INDEX_SIZE_ERR`.
- Das Angeben eines `null`- oder `undefined`-Bildes beim Aufruf von `createPattern()` oder `drawImage()` wirft jetzt korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme.
- Das Angeben ungültiger Werte für `globalAlpha` wirft keine `SYNTAX_ERR`-Ausnahme mehr; diese werden jetzt korrekt stillschweigend ignoriert.
- Das Angeben ungültiger Werte beim Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Das Festlegen des Wertes von `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.
- Das Festlegen des Wertes von `rotate` oder `scale` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - Unterstützung für CSS-Animationen wurde hinzugefügt, derzeit mit dem `-moz-`-Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde so geändert, dass die Granularität der Wortauswahl keine nachfolgenden Leerzeichen mehr einschließt; dies macht sie plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt begrenzt, um nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs zu senden. Außerdem sind verschachtelte Timeouts jetzt auf den kleinsten Wert begrenzt, der von der HTML5-Spezifikation erlaubt ist: 4 ms (statt der früheren 10 ms).
- Ähnlich sind die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) jetzt auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschitts-Listener. Dieses wird nach jedem Übertragungsende gesendet (d. h. nach dem `abort`-, `error`- oder `load`-Ereignis). Sie können dies verwenden, um alle Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg einer Übertragung durchgeführt werden müssen.
- Die [`slice()`-Methode](/de/docs/Web/API/Blob) der [`Blob`]- und dadurch der [`File`]-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode wird momentan `mozSlice()` genannt.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt bestimmt, indem der Wert des `Accept-Language`-HTTP-Headers betrachtet wird.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist jetzt schreibgeschützt, wie es von der DOM-Spezifikation gefordert wird.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Videomalanzeigen wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als ob sie Funktionen wären; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um die Kompatibilität zu gewährleisten (siehe [Webkit-Fehler 28285](https://webkit.org/b/28285)). Diese Funktion existierte schon lange, war jedoch nie dokumentiert worden (zumindest nicht hier auf MDC).
- Die `Function.prototype.isGenerator()`-Methode wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur im strikten Modus als reserviert betrachtet; jetzt werden sie immer als reserviert betrachtet: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt werden, dürfen nicht mehr an gesandboxte Skripte weitergegeben werden.
- Der JSON-Parser wurde neu geschrieben für verbesserte Geschwindigkeit und Konformität. Dies schließt einen Fix für [Firefox-Fehler 572279](https://bugzil.la/572279) ein.

### SVG

- Das {{ SVGAttr("class") }}-SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indexierbar und können wie Arrays abgefragt werden; zudem haben sie eine `length`-Eigenschaft, die die Anzahl der Einträge in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive`-HTTP-Header nicht mehr; wir formatierten ihn nicht korrekt, und er war redundant, da wir ohnehin den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }}-Header mit dem Wert "keep-alive" versendeten.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um beim erneuten Verwenden von Verbindungen im persistenten Verbindungspool intelligenter zu agieren; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko, den Pool so zu sortieren, dass Verbindungen mit dem größten [congestion window](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst genutzt werden. Dies kann die Round-Trip-Time (RTT) von HTTP-Transaktionen reduzieren, indem in vielen Fällen das Wachsen der Verbindungsfenster vermieden wird.
- Firefox behandelt jetzt den `Content-Disposition`-HTTP-Response-Header effektiver, wenn sowohl `filename` als auch `filename*`-Parameter vorhanden sind; es prüft alle bereitgestellten Namen und verwendet den `filename*`-Parameter, wenn einer verfügbar ist, sogar wenn ein `filename`-Parameter zuerst angegeben wird. Zuvor wurde der erste übereinstimmende Parameter verwendet, was verhinderte, dass ein angemessenerer Name genutzt wurde. Siehe [Firefox-Fehler 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwicklerwerkzeuge

- Das [Webkonsolen-`Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten existierenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, siehe [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass Binärkomponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt jetzt das Angeben der Eingangsquelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich für Debugging-Zwecke bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden jetzt in IDL als unsignierte Ganzzahlen statt als signiert reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden als Implementierungsdetails eingestuft und sind nicht mehr erforderlich:

- `nsICiter` (siehe [Firefox-Fehler 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox-Fehler 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox-Fehler 619996](https://bugzil.la/619996))

### Debug-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E)-Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und unsignierte Ganzzahlen umzuwandeln.

### Änderungen am Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application`-Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) hat jetzt standardmäßig den Wert "browser". Nach dem Herunterladen oder Abrufen des Codes können Sie `configure && make` (oder `make -f client.mk`) ausführen, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
