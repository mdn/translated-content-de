---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut des `<details>`-Elements ermöglicht nun die Gruppierung von `<details>`-Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht es Ihnen, ein exklusives Akkordeon ohne den Einsatz von JavaScript zu erstellen ([Firefox Fehler 1856460](https://bugzil.la/1856460) und [Firefox Fehler 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) haben nun eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Fehler 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird nun korrekt für die Sprachen Tschechisch und Slowakisch unterstützt. Unter anderem wird dadurch sichergestellt, dass Wörter nicht mehr an Silben getrennt werden ([Firefox Fehler 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Fehler 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Versionen unterstützt und bietet Webentwicklern einen Low-Level-Zugriff auf die einzelnen Frames eines Video-Streams und Audio-Chunks. Die Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Fehler 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) vorzeitig veröffentlicht (ohne Implementierung) und wurden entfernt ([Firefox Fehler 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind nun standardmäßig vollständig deaktiviert ([Firefox Fehler 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Aufforderungs-Hörer wurde behoben, um das passende Benutzer-Eingabefeld auf Android korrekt auszuwählen ([Firefox Fehler 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox Fehler 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` erlaubt nun die gleichzeitige Festlegung des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigationsziele ([Firefox Fehler 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden nun ausgegeben, wenn die tatsächliche Anfrage stoppt, wodurch ein Wettlaufproblem gelöst wird, bei dem `browsingContext.domContentLoaded`- und `browsingContext.load`-Ereignisse vor dem `network.responseCompleted`-Ereignis ausgegeben wurden ([Firefox Fehler 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z.B. für Hintergrundbilder oder Fetch-Anfragen) werden nun vollständig über alle Netzwerkereignisse hinweg unterstützt ([Firefox Fehler 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis bei jedem Aufruf des `network.continueWithAuth`-Befehls mehrfach gesendet wurde ([Firefox Fehler 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass das Element nur in den Ansichtsbereich gescrollt wird, wenn es noch nicht sichtbar ist ([Firefox Fehler 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist nun optional ([Firefox Fehler 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und die veraltete {{WebExtAPIRef("extension.getURL")}}) setzt nun immer den Ursprung der Erweiterung an den Pfadanfang, ohne weitere Normalisierung. Zuvor, wenn eine absolute URL anstelle einer relativen URL bereitgestellt wurde, wurde die absolute URL zurückgegeben. ([Firefox Fehler 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 130, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Anfrage für Videoframe-Rückrufe:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neues Videoframe an den Compositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie Videoanalyse, Malen auf einer Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt einen Rückruf-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Rückrufanforderung zu stornieren. Beide Methoden sind standardmäßig im Nightly Build aktiviert. ([Firefox Fehler 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann zur Meldung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen verwendet werden. Dies umfasst Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist, die {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}} HTTP-Response-Headers sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Response-Headers. Diese Funktion ist standardmäßig deaktiviert. ([Firefox Fehler 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
