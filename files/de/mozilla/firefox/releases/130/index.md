---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut des `<details>`-Elements erlaubt nun die Gruppierung von `<details>`-Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht es, ein exklusives Akkordeon ohne JavaScript zu erstellen ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) haben nun verbesserte Vererbung, einschließlich ihrer Funktionsweise mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird nun für die tschechische und slowakische Sprache korrekt unterstützt. Dies stellt u.a. sicher, dass Wörter nicht mehr auf Silben gespalten werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird vom [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in den Desktop-Versionen unterstützt und gibt Webentwicklern Low-Level-Zugriff auf die einzelnen Frames eines Videostreams und Audioclips. Unterstützung für Android ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden vorschnell (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) veröffentlicht und wurden entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, um auf Android das passende Benutzer-Prompt korrekt auszuwählen ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen wird ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` ermöglicht jetzt die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigationsvorgänge gleichzeitig ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden nun ausgelöst, wenn die eigentliche Anfrage stoppt, was eine Rennbedingung beseitigt, bei der `browsingContext.domContentLoaded` und `browsingContext.load`-Ereignisse vor dem `network.responseCompleted`-Ereignis ausgelöst wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z.B. für Hintergrundbilder oder Abrufanforderungen) werden nun vollständig über alle Netzwerkereignisse unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis mehrfach bei jedem Aufruf des `network.continueWithAuth`-Befehls gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem wurde in `WebDriver:ElementSendKeys` behoben, sodass es das Element nur in den Sichtbereich scrollt, wenn es nicht bereits sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) hat jetzt immer den Ursprung der Erweiterung an den Pfad vorangestellt, ohne weitere Normalisierung. Zuvor wurde bei einer absoluten URL, statt einer relativen URL, die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 130, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen an jedem Videobild durchzuführen, wie Videobildanalysen, das Zeichnen auf eine Leinwand, Synchronisation mit externen Audioquellen und so weiter. Die Methode gibt einen Callback-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen.
  Beide Methoden sind standardmäßig im Nightly-Build aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann zur Berichterstellung über [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen verwendet werden.
  Dies umfasst die Unterstützung von [`Report`](/de/docs/Web/API/Report)-Objekten, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist, die {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}}-HTTP-Response-Headers, sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}}-HTTP-Response-Header.
  Diese Funktion ist standardmäßig deaktiviert.
  ([Firefox Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
