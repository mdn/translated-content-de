---
title: Versionshinweise für Entwickler zu Firefox 158 (Beta)
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 6d9306930989541d7cf502620320b5a01da0961d
---

Dieser Artikel informiert über die Änderungen in Firefox 158, die für Entwickler relevant sind.
Firefox 158 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentarzeichen bei den Überschriften, für die Sie Hinweise verfassen. -->

## Änderungen für Webentwickler

### Barrierefreiheit

- Das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) wird jetzt in Firefox für Android unterstützt (auf Desktop-Systemen wird es bereits seit Langem unterstützt). Dieser ARIA-Status gibt an, ob ein Element gerade geändert wird. So können assistive Technologien warten, bis Änderungen am Inhalt abgeschlossen sind, bevor sie Benutzer über die Aktualisierung informieren. Ein Screenreader kann beispielsweise warten, bis die Aktualisierung einer [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) abgeschlossen ist, bevor er die Änderungen ansagt. ([Firefox-Bug 908042](https://bugzil.la/908042)).

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- [Typisierte Berechnungen in CSS](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) werden jetzt unterstützt. Damit können Sie mit Funktionen wie {{cssxref("calc()")}} zwei Werte desselben Datentyps dividieren, auch wenn sie unterschiedliche Einheiten verwenden. Die resultierenden einheitenlosen Quotienten lassen sich anschließend in andere Datentypen umwandeln. So können Sie Beziehungen zwischen verschiedenen Werten auf einer Seite herstellen. ([Firefox-Bug 2067411](https://bugzil.la/2067411)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

### HTTP

- Der standardmäßige HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) für Bildanfragen enthält jetzt `image/jxl`, nachdem die Unterstützung für das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) hinzugefügt wurde. Der neue Wert lautet `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (siehe [Liste der standardmäßigen Accept-Werte](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#values_for_an_image)). ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methode [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt. Sie gibt Statistiken zur zugrunde liegenden Verbindung des Transports und zu dessen Datagrammen zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).
- Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und der Methode [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) wird jetzt unterstützt. Mit dieser Option geben Sie eine URL an, zu der navigiert wird, nachdem ein Benutzer auf die erzeugte Systembenachrichtigung geklickt hat. Nachdem eine Benachrichtigung erstellt wurde, können Sie die URL über die Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) abrufen. ([Firefox-Bug 2069920](https://bugzil.la/2069920)).
- Das [WebGPU](/de/docs/Web/API/WebGPU_API)-Feature `float32-blendable` wird jetzt unterstützt (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Dies ermöglicht das [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekten, die für [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `r32float`, `rg32float` oder `rgba32float` verwenden. ([Firefox-Bug 1931630](https://bugzil.la/1931630)).
- Die Eigenschaft [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) wird jetzt unterstützt. Sie gibt an, wie eine Ressource bereitgestellt wurde, beispielsweise ob sie aus dem Cache stammt. ([Firefox-Bug 1914120](https://bugzil.la/1914120)).

#### DOM

- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt die Eigenschaften `fill` und `stroke` ihres Arguments [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options), wenn sie für {{SVGElement("tspan")}}- und {{SVGElement("textPath")}}-Elemente aufgerufen wird. Damit können Sie eine Begrenzungsbox ermitteln, die die Kontur eines Textabschnitts einschließt. Für ein vollständiges {{SVGElement("text")}}-Element war dies bereits möglich. ([Firefox-Bug 2072680](https://bugzil.la/2072680)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Berechtigungen `camera` und `microphone` können jetzt mit dem Befehl `permissions.setPermission` in WebDriver BiDi und dem Befehl `WebDriver:SetPermission` in Marionette festgelegt werden. So können Tests den Zugriff auf Mediengeräte erlauben oder verweigern, ohne Benutzer um eine Entscheidung zu bitten. ([Firefox-Bug 2070577](https://bugzil.la/2070577)).
- Die Toleranzen für den Beginn und die Bewegung von Touch-Eingaben wurden in der Automatisierung auf null gesetzt. Dadurch beginnen Touch-Aktionen den Bildlauf jetzt genau an der Position, an der sie ausgelöst werden, ohne dass kleine anfängliche Bewegungen ignoriert werden. ([Firefox-Bug 2055661](https://bugzil.la/2055661)).

#### WebDriver BiDi

- Das Argument `imageSize` wird jetzt für den Befehl `browsingContext.captureScreenshot` unterstützt. Damit können Clients die maximale Größe des erzeugten Screenshot-Bildes angeben. ([Firefox-Bug 2069002](https://bugzil.la/2069002)).
- Das Argument `destinationFolder` wird jetzt für den Befehl `browsingContext.startScreencast` unterstützt. Damit können Clients den Ordner auswählen, in dem die aufgezeichnete Videodatei gespeichert wird. ([Firefox-Bug 2072616](https://bugzil.la/2072616)).

#### Marionette

- Der Befehl `WebDriver:TakeScreenshot` wurde korrigiert und gibt jetzt den Fehler `unable to capture screen` zurück, wenn die Breite oder Höhe des aufgenommenen Bildes null beträgt. ([Firefox-Bug 1492357](https://bugzil.la/1492357)).

### Sonstiges

- Die Unterstützung für das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) (`image/jxl`) ist jetzt standardmäßig aktiviert. JPEG XL ist ein lizenzgebührenfreies Rasterbildformat, das verlustbehaftete und verlustfreie Komprimierung, Transparenz, Animationen und HDR unterstützt. Bestehende JPEG-Bilder lassen sich außerdem verlustfrei in JPEG XL umwandeln. ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst bei einem ungültigen Hostnamen jetzt einen Fehler aus, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt. Die Methode gibt die im Manifest angegebene Version der Erweiterung zurück. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Features sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`corner-shape`-Eigenschaften**: `layout.css.corner-shape.enabled`

  Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Langschreibweisen werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie die Form von Ecken mithilfe eines Schlüsselwortwerts von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
  ([Firefox-Bug 2070927](https://bugzil.la/2070927)).

- **Aufgeschobene Modulauswertung** (Nightly): `javascript.options.experimental.defer_import_eval`

  Die Deklaration [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) und die Syntax [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer) sind jetzt in Nightly verfügbar, wenn die entsprechende Einstellung aktiviert ist. Sie laden ein Modul und seine Abhängigkeiten vorab, führen den Code des Moduls aber erst aus, wenn erstmals auf einen seiner Exporte zugegriffen wird. Dadurch verlangsamen Module, die nicht sofort benötigt werden, den Start nicht. Module mit `await` auf oberster Ebene werden weiterhin sofort ausgeführt. ([Firefox-Bug 1952263](https://bugzil.la/1952263)).

- **Spracherkennung auf dem Gerät**: `media.webspeech.recognition.enable`

  [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Systemen. Damit können Sie Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser durchführen, statt einen Cloud-Dienst zu verwenden.
  ([Firefox-Bug 2069803](https://bugzil.la/2069803)).

- **Streaming von Request-Bodys**: `dom.fetch.streaming_upload`

  Wenn Sie Nightly verwenden, können Sie jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Request-Body festlegen, beispielsweise über den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). So können Sie Uploads schrittweise streamen, statt warten zu müssen, bis der gesamte Body verfügbar ist.
  ([Firefox-Bug 1594633](https://bugzil.la/1594633)).

- **`CSSNumericValue.equals()`**: `layout.css.typed-om.enabled`

  Die Methode [`CSSNumericValue.equals()`](/de/docs/Web/API/CSSNumericValue/equals) der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) wird jetzt in Nightly unterstützt. Sie gibt `true` zurück, wenn jeder übergebene Wert mit dem numerischen Wert übereinstimmt, für den sie aufgerufen wird, andernfalls `false`. Die Werte werden in ihrer angegebenen Form verglichen, ohne Einheiten umzurechnen. Beispielsweise gelten `1in` und `2.54cm` als unterschiedlich, ebenso `calc(1px + 2px)` und `calc(2px + 1px)`. ([Firefox-Bug 2074503](https://bugzil.la/2074503)).
