---
title: Firefox 130 für Entwickler
short-title: Firefox 130
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name) Attribut des `<details>` Elements erlaubt nun die Gruppierung von `<details>` Elementen, wobei innerhalb einer Gruppe nur ein Element gleichzeitig geöffnet sein kann. Dies ermöglicht die Erstellung eines exklusiven Akkordeons ohne Verwendung von JavaScript ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) haben jetzt eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die [`hyphens`](/de/docs/Web/CSS/hyphens) CSS-Eigenschaft wird nun ordnungsgemäß für die tschechische und slowakische Sprache unterstützt.
  Unter anderem sorgt dies dafür, dass Wörter nicht mehr in Silben aufgeteilt werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) digitale Signaturalgorithmus wird jetzt von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Versionen unterstützt, was Webentwicklern Low-Level-Zugriff auf die einzelnen Frames eines Videostreams und Audioschnipsel ermöglicht. Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden vorzeitig (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) freigegeben und wurden entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind standardmäßig jetzt komplett deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Eine Problembehebung bei der internen Prompt-Listener-Routine sorgt dafür, dass der angemessene Benutzer-Prompt auf Android korrekt ausgewählt wird ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen wird ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der `network.setCacheBehavior`-Befehl ermöglicht jetzt die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne navigierbare Elemente gleichzeitig ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden jetzt emittiert, wenn die eigentliche Anfrage endet, wodurch eine Rennbedingung beseitigt wird, bei der die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` vor dem `network.responseCompleted`-Ereignis emittiert wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z.B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt in allen Netzwerkereignissen vollständig unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis mit jedem Aufruf des `network.continueWithAuth`-Befehls mehrfach gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass das Element nur dann in das Sichtfeld gescrollt wird, wenn es nicht bereits sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-On-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und die veraltete {{WebExtAPIRef("extension.getURL")}}) fügt jetzt immer den Ursprungs-Pfad der Erweiterung vor dem Pfad hinzu, ohne weitere Normalisierung. Bisher wurde, wenn eine absolute URL angegeben wurde, anstatt einer relativen URL, die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 130 neu integriert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Videorahmen zum Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen bei jedem Videorahmen durchzuführen, wie z.B. Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt einen Callback-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage zu stornieren.
  Beide Methoden sind standardmäßig im Nightly-Build aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verstoßmeldungen mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann verwendet werden, um Verstöße gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) zu melden.
  Dies umfasst die Unterstützung für [`Report`](/de/docs/Web/API/Report) Objekte, die eine `type` Eigenschaft mit dem Wert `"csp-violation"` und eine `body` Eigenschaft haben, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist, die {{CSP("report-to")}} Direktive des {{httpheader('Content-Security-Policy')}} HTTP-Antwort-Headers und die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Antwort-Header.
  Diese Funktion ist standardmäßig deaktiviert.
  ([Firefox Bug 1391243](https://bugzil.la/1391243)).
