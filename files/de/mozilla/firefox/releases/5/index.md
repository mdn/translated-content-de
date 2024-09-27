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

- Alle HTML-Elemente haben jetzt das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey) Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/Element/blur), [`click()`](/de/docs/Web/API/Element/click) und [`focus()`](/de/docs/Web/API/Element/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle spezifiziert.
- Zur Einhaltung der HTML5-Spezifikation wurde die Unterstützung für die UTF-7 und UTF-32 [Zeichensätze](/de/docs/Character_Sets_Supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s beim Abgleich nicht mehr zugunsten von nicht-leeren ignoriert. Siehe die [Gecko Anmerkungen](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }} Element für Details.
- Firefox mobil auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprung](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures), als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) Unterstützung sollte in naher Zukunft kommen, um dies sicherer zu ermöglichen.

#### Canvas-Verbesserungen

- Der {{ HTMLElement("canvas") }} 2D-Zeichnungskontext unterstützt jetzt die Angabe eines `ImageData` Objekts als Eingabe für die `createImageData()` Methode; dies [erzeugt ein neues `ImageData` Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit den gleichen Abmessungen wie das angegebene Objekt, jedoch immer noch mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies war bereits dokumentiert, aber nicht implementiert.
- Die Angabe von nicht-finiten Werten beim Hinzufügen von Farbverläufen durch einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) Methode `addColorStop()` wirft jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Methode `toDataURL()` setzt jetzt korrekt den angegebenen MIME-Typ in Kleinbuchstaben, bevor er übereinstimmt.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente in Übereinstimmung mit der Spezifikation, indem das Rechteck um die entsprechende Achse gedreht wird. **Wir benötigen einen Artikel über [CSS-Größe](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Das Angeben von nicht-finiten Werten beim Aufrufen von `createImageData()` wirft jetzt ordnungsgemäß eine `NOT_SUPPORTED_ERR` Ausnahme.
- `createImageData()` und `getImageData()` geben jetzt korrekt mindestens einen Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius beim Aufruf von `createRadialGradient()` wirft jetzt korrekt `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bildes beim Aufruf von `createPattern()` oder `drawImage()` wirft jetzt korrekt eine `TYPE_MISMATCH_ERR` Ausnahme.
- Die Angabe ungültiger Werte für `globalAlpha` wirft nicht mehr `SYNTAX_ERR` Ausnahme; diese werden jetzt korrekt stillschweigend ignoriert.
- Ungültige Werte bei den Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, oder `arc()` werfen keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Die Einstellung des Werts von `shadowOffsetX`, `shadowOffsetY`, oder `shadowBlur` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.
- Das Setzen des Werts von `rotate` oder `scale` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, wobei vorerst das `-moz-` Präfix verwendet wird.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`selection`](/de/docs/Web/API/Selection) Objekts wurde so geändert, dass die Granularität der "Wort"-Auswahl keine nachfolgenden Leerzeichen mehr einschließt; dies macht es plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die [`setTimeout()`](/de/docs/Web/API/SetTimeout) Methode begrenzt jetzt, dass nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs gesendet wird. Zusätzlich begrenzt sie jetzt verschachtelte Timeouts auf den kleinsten Wert, der von der HTML5-Spezifikation erlaubt ist: 4 ms (anstelle der 10 ms, die sie früher begrenzte).
- Ähnlich heißt es, dass die [`setInterval()`](/de/docs/Web/API/SetInterval) Methode jetzt nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt [das `loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschrittsüberwacher. Dies wird gesendet, nachdem ein Transfer beendet ist (d.h. nach dem `abort`, `error`, oder `load` Ereignis). Sie können dies verwenden, um Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die `slice()` Methode der [`Blob`](/de/docs/Web/API/Blob) und, in Erweiterung, der [`File`](/de/docs/Web/API/File) Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`window.navigator.language`](/de/docs/Web/API/Window/navigator/language) wird jetzt ermittelt, indem der Wert des `Accept-Language` [HTTP Headers](/de/docs/Web/HTTP/Headers) betrachtet wird.
- Die [`Element.prefix`](/de/docs/Web/API/Element/prefix) Eigenschaft ist jetzt schreibgeschützt, wie es die DOM-Spezifikation erfordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Videodarstellungsstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr als Funktionen aufrufbar; diese Änderung wurde gemeinsam mit dem WebKit-Team vorgenommen, um die Kompatibilität sicherzustellen (siehe [Webkit Fehler 28285](https://webkit.org/b/28285)). Dieses Feature existierte schon lange, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die [`Function.prototype.isGenerator()`](/de/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) Methode wird jetzt unterstützt; diese ermöglicht es, zu bestimmen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden vorher nur im Strict Mode als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import`, und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr in sandkastenartigen Skripten exponiert werden.
- Der JSON-Parser wurde neu geschrieben, um Geschwindigkeit und Konformität zu verbessern. Dies schließt eine Korrektur für [Firefox Fehler 572279](https://bugzil.la/572279) ein.

### SVG

- Das {{ SVGAttr("class") }} SVG Attribut kann jetzt animiert werden.
- Die folgenden SVG-verwandten DOM-Schnittstellen, die Listen von Objekten repräsentieren, sind jetzt indizierbar und können wie Arrays zugegriffen werden; zusätzlich haben sie eine `length` Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP Header nicht mehr; wir haben ihn nicht korrekt formatiert und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter beim Wiederverwenden von Verbindungen im persistenten Verbindungspool zu sein; anstatt den Pool wie eine [FIFO](https://en.wikipedia.org/wiki/FIFO) Warteschlange zu behandeln, versucht Necko jetzt, den Pool mit den Verbindungen mit dem größten [Congestion Window](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen verringern, indem in vielen Fällen das Wachstum der Fenster von Verbindungen vermieden wird.
- Firefox behandelt den `Content-Disposition` HTTP Antwort-Header jetzt effektiver, wenn sowohl die `filename` als auch die `filename*` Parameter angegeben sind; es durchsucht alle bereitgestellten Namen und verwendet den `filename*` Parameter, wenn einer verfügbar ist, selbst wenn ein `filename` Parameter zuerst enthalten ist. Zuvor würde der erste übereinstimmende Parameter verwendet, wodurch verhindert wurde, dass ein passenderer Name verwendet wird. Siehe [Firefox Fehler 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwickler-Tools

- Das [Webkonsolen `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) verfügt jetzt über eine `debug()` Methode, die ein Alias für seine `log()` Methode ist; dies verbessert die Kompatibilität mit bestimmten existierenden Seiten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, siehe [Add-ons für Firefox 5 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_5).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm) Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()` Methode unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal` Schnittstelle hat neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{ HTMLElement("canvas") }} Elements werden jetzt in IDL als unsignierte Ganzzahlen und nicht als signierte reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` Schnittstellen wurden in die `nsIAppStartup` Schnittstelle zusammengeführt.
- Die `nsIDocShell_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIDocShell` Schnittstelle zusammengeführt.
- Die `nsIFocusManager_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIFocusManager` Schnittstelle zusammengeführt.
- Die `nsIHTMLEditor_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIHTMLEditor` Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Fehler 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Fehler 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Fehler 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble) Werte in C-Ganzzahlen und unsignierte Ganzzahlen umzuwandeln.

### Änderungen im Build-System

- Sie können jetzt Firefox ohne eine `mozconfig` Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist standardmäßig auf "browser" eingestellt. Nach dem Herunterladen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
