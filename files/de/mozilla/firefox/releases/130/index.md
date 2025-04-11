---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut des `<details>`-Elements ermöglicht jetzt die Gruppierung von `<details>`-Elementen, bei der nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht es, ein exklusives Akkordeon ohne Verwendung von JavaScript zu erstellen ([Firefox-Bug 1856460](https://bugzil.la/1856460) und [Firefox-Bug 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) haben jetzt eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox-Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird nun richtig für die tschechische und slowakische Sprache unterstützt. Dies stellt unter anderem sicher, dass Wörter nicht mehr bei Silben getrennt werden ([Firefox-Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Veröffentlichungen unterstützt und gibt Webentwicklern Zugriff auf niedriger Ebene auf die einzelnen Frames eines Videostreams und auf Audiodaten. Die Unterstützung für Android ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox-Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden voreilig in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) veröffentlicht (ohne eine Implementierung) und wurden entfernt ([Firefox-Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox-Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Aufforderungshörer wurde behoben, um auf Android die geeignete Benutzeraufforderung korrekt auszuwählen ([Firefox-Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox-Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` erlaubt jetzt die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigables gleichzeitig ([Firefox-Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden nun ausgelöst, wenn die tatsächliche Anfrage endet, wodurch eine Rennbedingung beseitigt wird, bei der die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` vor dem `network.responseCompleted`-Ereignis ausgelöst wurden ([Firefox-Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt vollständig in allen Netzwerkereignissen unterstützt ([Firefox-Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das Ereignis `network.authRequired` mehrfach bei jedem Aufruf des Befehls `network.continueWithAuth` gesendet wurde ([Firefox-Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass es das Element nur dann in den sichtbaren Bereich scrollt, wenn es nicht bereits sichtbar ist ([Firefox-Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der Parameter `options` von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox-Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) setzen nun immer den Ursprung der Erweiterung an den Pfadanfang, ohne weitere Normalisierung. Bisher wurde, wenn eine absolute URL anstelle einer relativen URL angegeben wurde, die absolute URL zurückgegeben. ([Firefox-Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 130 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Videoframe an den Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie z. B. Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt ein Callback-Handle zurück, das an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage zu stornieren. Beide Methoden sind standardmäßig in der Nightly-Version aktiviert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte mithilfe der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann für das Reporting von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzungen verwendet werden. Dies umfasst Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist, die {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}} HTTP-Response-Headers sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Response-Header. Diese Funktion ist standardmäßig deaktiviert. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
