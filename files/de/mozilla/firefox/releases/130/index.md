---
title: Versionshinweise zu Firefox 130 für Entwickler
short-title: Firefox 130
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name) Attribut des `<details>` Elements erlaubt nun die Gruppierung von `<details>` Elementen, wobei innerhalb einer Gruppe nur ein Element gleichzeitig geöffnet sein kann. Dies ermöglicht das Erstellen eines exklusiven Akkordeons ohne Verwendung von JavaScript ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) haben nun eine verbesserte Vererbung, einschließlich ihrer Funktion im Zusammenhang mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die [`hyphens`](/de/docs/Web/CSS/hyphens) CSS-Eigenschaft wird nun ordnungsgemäß für die tschechische und slowakische Sprache unterstützt. Unter anderem wird dadurch sichergestellt, dass Wörter nicht mehr an Silben geteilt werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Versionen unterstützt und bietet Webentwicklern niedrigstufigen Zugriff auf die einzelnen Frames eines Videostreams und Audiopakete. Die Unterstützung für Android ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden verfrüht (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) veröffentlicht und wurden entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Eingabeaufforderungslistener wurde behoben, um die passende Benutzereingabeaufforderung auf Android korrekt auszuwählen ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed` Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen wird ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der `network.setCacheBehavior` Befehl ermöglicht nun die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigationssichel gleichzeitig ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden nun ausgelöst, wenn die tatsächliche Anfrage stoppt, was ein Rennen behebt, bei dem `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse vor dem `network.responseCompleted` Ereignis ausgelöst wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z.B. für Hintergrundbilder oder Fetch-Anfragen) werden nun vollumfänglich bei allen Netzwerkereignissen unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired` Ereignis mehrfach bei jedem Aufruf des `network.continueWithAuth` Befehls gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass es das Element nur in den sichtbaren Bereich scrollt, wenn es nicht bereits sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options` Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist nun optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) setzen nun immer den Ursprungsort der Erweiterung vor den Pfad, ohne weitere Normalisierung. Zuvor wurde, wenn eine absolute URL angegeben wurde, statt einer relativen URL die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 130 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Anfrage für Video-Frame-Callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Compositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Video-Frame durchzuführen, wie z.B. Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen und so weiter. Die Methode gibt ein Callback-Handle zurück, das an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage zu stornieren. Beide Methoden sind in der Nightly-Version standardmäßig aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verstoßberichte mit der Reporting-API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann für das Melden von Verstößen gegen die [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwendet werden.
  Dazu gehört die Unterstützung für [`Report`](/de/docs/Web/API/Report) Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist, die {{CSP("report-to")}} Direktive des {{httpheader('Content-Security-Policy')}} HTTP-Antwort-Headers und die {{httpheader('Reporting-Endpoints')}} sowie {{httpheader('Report-To')}} HTTP-Antwort-Header.
  Dieses Feature ist standardmäßig deaktiviert.
  ([Firefox Bug 1391243](https://bugzil.la/1391243)).
