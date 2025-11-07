---
title: Firefox 5 Versionshinweise für Entwickler
short-title: Firefox 5
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben nun das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7 und UTF-32 [Zeichensätze](https://web.archive.org/web/20210612224236/https://developer.mozilla.org/de/docs/Gecko/Character_sets_supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nun nicht mehr zugunsten nicht leerer übersprungen.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- Aus Sicherheitsgründen [lädt WebGL keine Texturen mehr von Domänen, die nicht von der Herkunftsdomäne stammen](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures). Unterstützung für [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS) soll in Zukunft kommen, um dies sicherer zu ermöglichen.

#### Verbesserungen am Canvas

- Der 2D-Zeichenkontext des {{ HTMLElement("canvas") }}-Elements unterstützt nun die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Abmessungen wie das angegebene Objekt initialisiert wird, jedoch mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies war bereits als implementiert dokumentiert, war es jedoch nicht.
- Die Angabe nicht-finiter Werte beim Hinzufügen von Farbstopps durch einen Aufruf der Methode `addColorStop()` der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) wirft nun korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die Methode `toDataURL()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wandelt den angegebenen MIME-Typ nun korrekt in Kleinbuchstaben um, bevor er abgeglichen wird.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen des Canvas hinausgehen; Pixel außerhalb des Canvas werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln negative Argumente nun gemäß der Spezifikation, indem das Rechteck um die entsprechende Achse gespiegelt wird. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe nicht-finiter Werte bei Aufruf von `createImageData()` wirft nun korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens einen Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius bei Aufruf von `createRadialGradient()` wirft nun korrekt `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bildes bei Aufruf von `createPattern()` oder `drawImage()` wirft nun korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme.
- Ungültige Werte für `globalAlpha` werfen nicht mehr eine `SYNTAX_ERR`-Ausnahme; diese werden nun korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte bei Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Die Einstellung des Wertes von `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` auf einen ungültigen Wert wird nun stillschweigend ignoriert.
- Die Einstellung des Wertes von `rotate` oder `scale` auf einen ungültigen Wert wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt und verwendet vorerst das Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die "Wort"-Auswahlgranularität keine nachgestellten Leerzeichen mehr einschließt; dadurch wird sie konsistenter über Plattformen hinweg und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind nun so geregelt, dass sie nicht mehr als einmal pro Sekunde in inaktiven Tabs ausgeführt werden. Zusätzlich wird die Verschachtelung von Timeouts auf den kleinsten von der HTML5-Spezifikation erlaubten Wert begrenzt: 4 ms (anstatt der bisherigen 10 ms).
- Ähnlich wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs beschränkt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt nun [das `loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschrittslistener. Dies wird nach jedem Enden eines Transfers gesendet (nach dem `abort`-, `error`- oder `load`-Ereignis). Sie können dies verwenden, um Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg eines Transfers ausgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob)- und damit auch der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode wird vorerst `mozSlice()` genannt.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird nun ermittelt, indem der Wert des `Accept-Language`- [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) betrachtet wird.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie es die DOM-Spezifikation erfordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt nun experimentelle Eigenschaften, um Informationen über Videoanzeigestatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als wären sie Funktionen; diese Änderung wurde zusammen mit dem WebKit-Team implementiert, um Kompatibilität zu gewährleisten (siehe [WebKit-Bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte schon lange, wurde aber nie dokumentiert (zumindest hier auf MDC nicht).
- Die Methode `Function.prototype.isGenerator()` wird nun unterstützt; sie ermöglicht es, festzustellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur im strikten Modus als reserviert behandelt; jetzt sind sie immer reserviert: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr den gesandboxten Skripten ausgesetzt werden.
- Der JSON-Parser wurde umgeschrieben, um Geschwindigkeit und Konformität zu verbessern. Dies beinhaltet eine Korrektur für [Firefox Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays angesprochen werden; zudem haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), `SVGPathSegList` und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet das `Keep-Alive` HTTP-Header nicht mehr; es war nicht korrekt formatiert und überflüssig, da wir ohnehin das {{ httpheader("Connection") }} oder `Proxy-Connection`-Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit dem Wiederverwenden von Verbindungen im Persistent-Verbindungspool umzugehen; statt den Pool wie eine [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko nun, den Pool mit Verbindungen mit dem größten [Kongestionsfenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip Time (RTT) von HTTP-Transaktionen verringern, indem das Wachsen der Verbindungsfenster in vielen Fällen vermieden wird.
- Firefox behandelt das `Content-Disposition` HTTP-Antwortheader effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es durchsucht alle bereitgestellten Namen und verwendet den Parameter `filename*`, wenn einer verfügbar ist, selbst wenn zuerst ein `filename`-Parameter enthalten ist. Zuvor würde der erste übereinstimmende Parameter verwendet, was verhinderte, dass ein geeigneterer Name verwendet wird. Siehe [Firefox Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwicklerwerkzeuge

- Das [Konsolenobjekt des Webkonsolen-`Console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat nun eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, siehe [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Einzelheiten finden Sie unter [Binäre Schnittstellen](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](https://web.archive.org/web/20210517202711/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Dict.jsm) Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle ermöglichen. Diese Informationen werden hauptsächlich für Debugging-Zwecke bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) des {{ HTMLElement("canvas") }}-Elements sind nun in IDL als vorzeichenlose Ganzzahlen anstelle von vorzeichenbehafteten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden zu einer einzigen Schnittstelle `nsIAppStartup` zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIDocShell` integriert.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIFocusManager` integriert.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIHTMLEditor` integriert.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](https://web.archive.org/web/20160805223656/https://developer.mozilla.org/de/docs/Archive/Mozilla/Namespace/Mozilla) Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) wurden hinzugefügt, um [`jsdouble`](https://web.archive.org/web/20210512110527/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/jsdouble)-Werte in C-Ganzzahlen und vorzeichenlose Ganzzahlen zu konvertieren.

### Änderungen am Buildsystem

- Sie können nun Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist nun standardmäßig auf "browser" gesetzt. Nachdem Sie den Code heruntergeladen oder abgerufen haben, können Sie `configure && make` (oder `make -f client.mk`) aufrufen, um Firefox zu bauen.
