---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 2cca85442dcfa50e82bffb7e2c0dbae4c5158256
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut des `<details>`-Elements ermöglicht jetzt die Gruppierung von `<details>`-Elementen, bei der innerhalb einer Gruppe nur ein Element gleichzeitig geöffnet sein kann. Dies erlaubt Ihnen, ein exklusives Akkordeon ohne die Verwendung von JavaScript zu erstellen ([Firefox-Bug 1856460](https://bugzil.la/1856460) und [Firefox-Bug 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) haben nun verbesserte Vererbung, einschließlich ihrer Funktionsweise mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox-Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird jetzt für die tschechische und slowakische Sprache ordnungsgemäß unterstützt. Unter anderem wird sichergestellt, dass Wörter nicht mehr bei Silben getrennt werden ([Firefox-Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den Methoden von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in den Desktop-Versionen unterstützt und gibt Webentwicklern Zugriff auf niedrige Ebenen der einzelnen Frames eines Video-Streams und Audio-Chunks. Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame) und [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace). ([Firefox-Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden verfrüht (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) veröffentlicht und wurden entfernt ([Firefox-Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox-Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, um den korrekten Benutzer-Prompt auf Android auszuwählen ([Firefox-Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox-Bug 1846601](https://bugzil.la/1846601)).
- Der `network.setCacheBehavior`-Befehl ermöglicht jetzt das Definieren des Netzwerk-Cache-Verhaltens global und für einzelne Navigationsobjekte gleichzeitig ([Firefox-Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden jetzt ausgegeben, wenn die tatsächliche Anfrage stoppt, wodurch eine Race-Condition eliminiert wird, bei der `browsingContext.domContentLoaded` und `browsingContext.load`-Ereignisse vor dem `network.responseCompleted`-Ereignis ausgegeben wurden ([Firefox-Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z.B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt vollständig in allen Netzwerkereignissen unterstützt ([Firefox-Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis mehrfach mit jedem Aufruf des `network.continueWithAuth`-Befehls gesendet wurde ([Firefox-Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass das Element nur dann in das Sichtfeld gescrollt wird, wenn es nicht bereits sichtbar ist ([Firefox-Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox-Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) fügt jetzt immer den Ursprungs-Teil der Erweiterung dem Pfad voran, ohne weitere Normalisierung. Zuvor wurde eine absolute URL zurückgegeben, wenn eine absolute URL anstelle einer relativen URL bereitgestellt wurde. ([Firefox-Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 130, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimentelle_Features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Videoframe an den Compositor gesendet wird. Dies ermöglicht Entwicklern effiziente Operationen auf jedem Videoframe durchzuführen, wie Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt ein Callback-Handle zurück, das an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. Beide Methoden sind in der Nightly-Build standardmäßig aktiviert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte über die Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann für das Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verletzungen verwendet werden. Dies umfasst Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist, die {{CSP("report-to")}}-Direktive der {{httpheader('Content-Security-Policy')}} HTTP-Antwort-Header, sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Antwort-Header. Diese Funktion ist standardmäßig deaktiviert. ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
