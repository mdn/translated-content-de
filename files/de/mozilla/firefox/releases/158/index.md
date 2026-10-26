---
title: Firefox 158 – Versionshinweise für Entwickler
short-title: Firefox 158
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 521fe7795f4dbfa723d800a94884d7608fa0e17e
---

Dieser Artikel informiert über die Änderungen in Firefox 158, die für Entwickler relevant sind.
Firefox 158 wurde am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158) veröffentlicht.

## Änderungen für Webentwickler

### Barrierefreiheit

- Das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) wird jetzt in Firefox für Android unterstützt (auf Desktop-Systemen wird es bereits seit Langem unterstützt). Dieser ARIA-Zustand gibt an, ob ein Element gerade verändert wird. So können assistive Technologien warten, bis Änderungen am Inhalt abgeschlossen sind, bevor sie Nutzer über die Aktualisierung informieren. Beispielsweise kann ein Screenreader warten, bis eine [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) vollständig aktualisiert ist, bevor er die Änderungen ansagt. ([Firefox-Bug 908042](https://bugzil.la/908042)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- [Typisierte Arithmetik in CSS](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) wird jetzt unterstützt. Damit können Funktionen wie {{cssxref("calc()")}} zwei Werte desselben Datentyps dividieren, auch wenn sie unterschiedliche Einheiten verwenden. Die resultierenden einheitenlosen Quotienten lassen sich anschließend in andere Datentypen umwandeln. So können nützliche Beziehungen zwischen verschiedenen Werten auf einer Seite hergestellt werden. ([Firefox-Bug 2067411](https://bugzil.la/2067411)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- Der standardmäßige HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) für Bildanfragen enthält jetzt `image/jxl`, nachdem die Unterstützung für das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) hinzugefügt wurde. Der neue Wert lautet `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (siehe [Liste der standardmäßigen Accept-Werte](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#values_for_an_image)). ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

### APIs

- Die Methode [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt. Sie gibt Statistiken über die zugrunde liegende Verbindung des Transports und dessen Datagramme zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).
- Die statische Eigenschaft [`WebTransport.supportsReliableOnly`](/de/docs/Web/API/WebTransport/supportsReliableOnly_static) wird jetzt unterstützt. Sie gibt an, ob der Browser [WebTransport](/de/docs/Web/API/WebTransport_API)-Sitzungen über ausschließlich zuverlässige Transporte wie HTTP/2 unterstützt. Firefox unterstützt WebTransport über HTTP/2 noch nicht. Daher gibt die Eigenschaft immer `false` zurück. ([Firefox-Bug 2007783](https://bugzil.la/2007783)).
- Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und der Methode [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) wird jetzt unterstützt. Mit dieser Option wird eine URL angegeben, zu der nach einem Klick auf die erzeugte Systembenachrichtigung navigiert wird. Nach dem Erstellen einer Benachrichtigung können Sie die URL über die Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) abrufen. ([Firefox-Bug 2069920](https://bugzil.la/2069920)).
- Das [WebGPU](/de/docs/Web/API/WebGPU_API)-Feature `float32-blendable` wird jetzt unterstützt (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Damit ist [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekten möglich, die für [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) den Wert `r32float`, `rg32float` oder `rgba32float` verwenden. ([Firefox-Bug 1931630](https://bugzil.la/1931630)).
- Das [WebGPU](/de/docs/Web/API/WebGPU_API)-Feature `clip-distances` wird jetzt unter macOS unterstützt (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Damit können Vertex-Shader in WGSL [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) ausgeben. Diese schneiden die Teile eines Dreiecks oder einer Linie ab, die auf einer Seite einer benutzerdefinierten Ebene liegen, während der Rest weiterhin gezeichnet wird. Das ist beispielsweise für Spiegelungen im Wasser oder Schnittansichten in CAD-Anwendungen nützlich. ([Firefox-Bug 1931629](https://bugzil.la/1931629)).
- Die [WebGL](/de/docs/Web/API/WebGL_API)-Erweiterung [`EXT_polygon_offset_clamp`](/de/docs/Web/API/EXT_polygon_offset_clamp) ist jetzt auf kompatiblen Geräten verfügbar. Ihre Methode [`polygonOffsetClampEXT()`](/de/docs/Web/API/EXT_polygon_offset_clamp/polygonOffsetClampEXT) funktioniert wie [`polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset), verfügt jedoch über ein zusätzliches Argument zur Begrenzung des Tiefenversatzes. Das hilft, Löcher in Schatten beim Shadow Mapping zu vermeiden. ([Firefox-Bug 1854003](https://bugzil.la/1854003)).
- Die Eigenschaft [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) wird jetzt unterstützt. Sie gibt an, wie eine Ressource bereitgestellt wurde. Die erste Implementierung unterstützt den Wert `cache`, der angibt, dass die Ressource aus dem Cache stammt. ([Firefox-Bug 1914120](https://bugzil.la/1914120), [Firefox-Bug 2071913](https://bugzil.la/2071913)).

#### DOM

- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt die Eigenschaften `fill` und `stroke` ihres Arguments [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options), wenn sie für {{SVGElement("tspan")}}- und {{SVGElement("textPath")}}-Elemente aufgerufen wird. So können Sie eine Bounding-Box ermitteln, die den Strich eines Textabschnitts einschließt. Für ein vollständiges {{SVGElement("text")}}-Element war dies bereits möglich. ([Firefox-Bug 2072680](https://bugzil.la/2072680)).
- Die Option [`javascriptURLs`](/de/docs/Web/API/SanitizerConfig#javascripturls) der Konfiguration der [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API) und die Methode [`Sanitizer.setJavascriptURLs()`](/de/docs/Web/API/Sanitizer/setJavascriptURLs) werden jetzt unterstützt. Sie legen fest, ob ein Sanitizer Attribute mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript), etwa `<a href="javascript:…">`, entfernt, wenn er mit einer unsicheren Methode wie [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet wird. Sichere Methoden wie [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) entfernen solche Attribute weiterhin immer. Daher entfernen die unsicheren Methoden jetzt `javascript:`-URLs, wenn sie mit dem Standard-Sanitizer oder mit einem Sanitizer verwendet werden, für den [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde. ([Firefox-Bug 2068934](https://bugzil.la/2068934)).

#### Medien, WebRTC und Web Audio

- Beim Senden von H.264- oder AV1-Videos über [WebRTC](/de/docs/Web/API/WebRTC_API) reduziert Firefox jetzt bei Bedarf Auflösung und Bildrate, um innerhalb des mit der Gegenstelle ausgehandelten Codec-Levels zu bleiben. Dieses wird bei [H.264](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#avc_h.264) durch den Parameter `profile-level-id` und bei [AV1](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1) durch `level-idx` festgelegt. Infolgedessen meldet [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo) eine `webrtc`-Konfiguration jetzt auch dann als unterstützt, wenn ihre Auflösung und Bildrate das in `contentType` angegebene Level überschreiten. ([Firefox-Bug 2013936](https://bugzil.la/2013936)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Berechtigungen `camera` und `microphone` können jetzt mit dem Befehl `permissions.setPermission` in WebDriver BiDi und dem Befehl `WebDriver:SetPermission` in Marionette festgelegt werden. So können Tests den Zugriff auf Mediengeräte erlauben oder verweigern, ohne die Nutzer um Erlaubnis zu fragen. ([Firefox-Bug 2070577](https://bugzil.la/2070577)).
- Die Toleranzen für den Beginn und die Bewegung von Berührungen wurden bei der Automatisierung auf null gesetzt. Dadurch beginnen Berührungsaktionen jetzt genau an der Position zu scrollen, an der sie ausgelöst werden, ohne dass kleine anfängliche Bewegungen abgefangen werden. ([Firefox-Bug 2055661](https://bugzil.la/2055661)).

#### WebDriver BiDi

- Der Befehl `browsingContext.captureScreenshot` unterstützt jetzt das Argument `imageSize`. Damit können Clients die maximale Größe des resultierenden Screenshot-Bildes festlegen. ([Firefox-Bug 2069002](https://bugzil.la/2069002)).
- Der Befehl `browsingContext.startScreencast` unterstützt jetzt das Argument `destinationFolder`. Damit können Clients den Ordner auswählen, in dem die aufgezeichnete Videodatei gespeichert wird. ([Firefox-Bug 2072616](https://bugzil.la/2072616)).

#### Marionette

- Der Befehl `WebDriver:TakeScreenshot` wurde korrigiert und gibt jetzt den Fehler `unable to capture screen` zurück, wenn die Breite oder Höhe des aufgenommenen Bildes null beträgt. ([Firefox-Bug 1492357](https://bugzil.la/1492357)).

### Sonstiges

- Die Unterstützung für das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) (`image/jxl`) ist jetzt standardmäßig aktiviert. JPEG XL ist ein lizenzgebührenfreies Rasterbildformat, das verlustbehaftete und verlustfreie Komprimierung, Transparenz, Animationen und HDR unterstützt. Bestehende JPEG-Bilder lassen sich außerdem ohne Qualitätsverlust in JPEG XL umwandeln. ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst bei Übergabe eines ungültigen Hostnamens jetzt einen Fehler aus, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt. Die Methode gibt die im Manifest angegebene Version der Erweiterung zurück. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

## Experimentelle Web-Features

Diese Features sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Funktion `random()`**: `layout.css.random.enabled`

  Die CSS-Funktion {{cssxref("random")}} erzeugt einen Zufallswert innerhalb eines angegebenen Bereichs. Optional können die möglichen Werte auf Schrittweitenintervalle zwischen den Bereichsgrenzen beschränkt werden. Ein optionaler Parameter `<random-key>` steuert, welche `random()`-Funktionen denselben Zufallswert verwenden, beispielsweise über verschiedene Elemente oder Eigenschaften hinweg.
  ([Firefox-Bug 2071165](https://bugzil.la/2071165)).

- **`corner-shape`-Eigenschaften**: `layout.css.corner-shape.enabled`

  Die Kurzschreibweise {{cssxref("corner-shape")}} und ihre zugehörigen Langschreibweisen werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie die Form von Ecken mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
  ([Firefox-Bug 2070927](https://bugzil.la/2070927)).

- **Verzögerte Modulauswertung** (Nightly): `javascript.options.experimental.defer_import_eval`

  Die Deklaration [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) und die Syntax [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer) sind jetzt in Nightly über eine Einstellung verfügbar. Sie laden ein Modul und seine Abhängigkeiten im Voraus, führen den Code des Moduls aber erst aus, wenn zum ersten Mal auf einen seiner Exporte zugegriffen wird. So verlangsamen Module, die nicht sofort benötigt werden, den Start nicht. Module mit einem `await` auf oberster Ebene werden weiterhin sofort ausgeführt. ([Firefox-Bug 1952263](https://bugzil.la/1952263)).

- **Spracherkennung auf dem Gerät**: `media.webspeech.recognition.enable`

  [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Systemen. Damit können Sie die Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser durchführen, statt auf einen Cloud-Dienst angewiesen zu sein.
  ([Firefox-Bug 2069803](https://bugzil.la/2069803)).

- **Speculation Rules: moderate eagerness**: `dom.speculation_rules.enabled`

  Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) bietet einen Mechanismus, um die Leistung künftiger Navigationen zu verbessern. Dazu wird anhand von Faktoren wie dem Nutzerverhalten bei Links festgelegt, welche Ressourcen vorab geladen oder gerendert werden sollen. Firefox 158 Nightly unterstützt jetzt [`moderate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#moderate) eagerness: Das Vorabladen eines passenden Ziels beginnt, sobald der Mauszeiger kurz über einem Link verweilt (standardmäßig 200 Millisekunden).
  ([Firefox-Bug 2061013](https://bugzil.la/2061013)).

- **Streaming von Request-Bodys**: `dom.fetch.streaming_upload`

  Diese Funktion ist nur in Nightly aktiviert. Sie können jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Request-Body festlegen, beispielsweise über den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). Damit können Sie Uploads schrittweise streamen, statt warten zu müssen, bis der gesamte Body verfügbar ist.
  ([Firefox-Bug 1594633](https://bugzil.la/1594633)).

- **`CSSNumericValue.equals()`**: `layout.css.typed-om.enabled`

  Die Methode [`CSSNumericValue.equals()`](/de/docs/Web/API/CSSNumericValue/equals) der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) wird jetzt in Nightly unterstützt. Sie gibt `true` zurück, wenn jeder übergebene Wert mit dem numerischen Wert übereinstimmt, für den sie aufgerufen wird, andernfalls `false`. Werte werden in ihrer geschriebenen Form verglichen, ohne Einheiten umzurechnen. Beispielsweise gelten `1in` und `2.54cm` als unterschiedlich, ebenso `calc(1px + 2px)` und `calc(2px + 1px)`. ([Firefox-Bug 2074503](https://bugzil.la/2074503)).
