---
title: Firefox 158 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
l10n:
  sourceCommit: 7b642841e72ef94e8723f26892000383513b550d
---

Dieser Artikel informiert über Änderungen in Firefox 158, die Entwickler betreffen.
Firefox 158 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [13. Oktober 2026](https://whattrainisitnow.com/release/?version=158).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

### Barrierefreiheit

- Das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) wird jetzt in Firefox für Android unterstützt (auf Desktop-Geräten wird es bereits seit Langem unterstützt). Dieser ARIA-Status gibt an, ob ein Element gerade verändert wird. Dadurch können assistive Technologien warten, bis Änderungen am Inhalt abgeschlossen sind, bevor sie Nutzer über die Aktualisierung informieren. Ein Screenreader kann beispielsweise warten, bis die Aktualisierung einer [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) abgeschlossen ist, bevor er die Änderungen ankündigt. ([Firefox-Bug 908042](https://bugzil.la/908042)).

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- [Typisierte Arithmetik in CSS](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic) wird jetzt unterstützt. Damit lassen sich Funktionen wie {{cssxref("calc()")}} verwenden, um zwei Werte desselben Datentyps zu dividieren, auch wenn sie unterschiedliche Einheiten haben. Die resultierenden einheitslosen Quotienten können anschließend in andere Datentypen umgewandelt werden. So lassen sich nützliche Beziehungen zwischen verschiedenen Werten auf einer Seite herstellen. ([Firefox-Bug 2067411](https://bugzil.la/2067411)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

### HTTP

- Der standardmäßige HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) für Bildanfragen enthält jetzt `image/jxl`, da das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) unterstützt wird. Der neue Wert lautet `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` (siehe [Liste der standardmäßigen Accept-Werte](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#values_for_an_image)). ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- [`WebTransport.getStats()`](/de/docs/Web/API/WebTransport/getStats) wird jetzt unterstützt und gibt Statistiken zur zugrunde liegenden Verbindung des Transports und zu dessen Datagrammen zurück. ([Firefox-Bug 2007202](https://bugzil.la/2007202)).
- Die Option `navigate` des Konstruktors [`Notification()`](/de/docs/Web/API/Notification/Notification) und der Methode [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) wird jetzt unterstützt. Mit dieser Option wird eine URL angegeben, zu der navigiert wird, nachdem ein Nutzer auf die erzeugte Systembenachrichtigung geklickt hat. Nach dem Erstellen einer Benachrichtigung können Sie die URL über die Eigenschaft [`Notification.navigate`](/de/docs/Web/API/Notification/navigate) abrufen. ([Firefox-Bug 2069920](https://bugzil.la/2069920)).
- Das [WebGPU](/de/docs/Web/API/WebGPU_API)-Feature `float32-blendable` wird jetzt unterstützt (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Dies ermöglicht das [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekten, die `r32float`, `rg32float` oder `rgba32float` als [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) verwenden. ([Firefox-Bug 1931630](https://bugzil.la/1931630)).

#### DOM

- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt die Eigenschaften `fill` und `stroke` ihres Arguments [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options), wenn sie für {{SVGElement("tspan")}}- und {{SVGElement("textPath")}}-Elemente aufgerufen wird. Dadurch können Sie eine Bounding Box ermitteln, die den Umriss einer Textspanne einschließt, wie dies bereits für ein vollständiges {{SVGElement("text")}}-Element möglich war. ([Firefox-Bug 2072680](https://bugzil.la/2072680)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

### Sonstiges

- Die Unterstützung für das Bildformat [JPEG XL](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_xl_image) (`image/jxl`) ist jetzt standardmäßig aktiviert. JPEG XL ist ein lizenzgebührenfreies Rasterbildformat, das verlustbehaftete und verlustfreie Komprimierung, Transparenz, Animationen und HDR unterstützt. Bestehende JPEG-Bilder lassen sich außerdem verlustfrei in JPEG XL umwandeln. ([Firefox-Bug 2065096](https://bugzil.la/2065096)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} löst bei Übergabe eines ungültigen Hostnamens jetzt einen Fehler aus, statt `false` zurückzugeben. ([Firefox-Bug 2066620](https://bugzil.la/2066620))
- [`runtime.getVersion()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) wurde hinzugefügt, um die im Manifest angegebene Version der Erweiterung zurückzugeben. ([Firefox-Bug 1992418](https://bugzil.la/1992418))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Features sind in Firefox 158 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`corner-shape`-Eigenschaften**: `layout.css.corner-shape.enabled`

  Die Kurzschreibweise {{cssxref("corner-shape")}} und die zugehörigen Einzeleigenschaften werden jetzt in Nightly unterstützt. Mit diesen Eigenschaften können Sie Eckenformen mithilfe eines der Schlüsselwortwerte von {{cssxref("corner-shape-value")}} oder der Funktion {{cssxref("superellipse")}} anpassen.
  ([Firefox-Bug 2070927](https://bugzil.la/2070927)).

- **Spracherkennung auf dem Gerät**: `media.webspeech.recognition.enable`

  [Spracherkennung auf dem Gerät](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) wird jetzt in Nightly unterstützt, allerdings nur auf Desktop-Geräten. Damit können Sie Spracherkennung über die [Web Speech API](/de/docs/Web/API/Web_Speech_API) direkt im Browser durchführen, statt auf einen Cloud-Dienst angewiesen zu sein.
  ([Firefox-Bug 2069803](https://bugzil.la/2069803)).

- **Streaming von Request-Bodys**: `dom.fetch.streaming_upload`

  Diese Funktion ist nur in Nightly aktiviert. Sie können jetzt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) als Request-Body festlegen, beispielsweise über den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) oder die Methode [`Window.fetch()`](/de/docs/Web/API/Window/fetch). So können Sie Uploads schrittweise streamen, statt warten zu müssen, bis der gesamte Request-Body verfügbar ist.
  ([Firefox-Bug 1594633](https://bugzil.la/1594633)).
