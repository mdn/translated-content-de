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

- Das [`name`](/de/docs/Web/HTML/Element/details#name) Attribut des `<details>` Elements erlaubt nun die Gruppierung von `<details>` Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht die Erstellung eines exklusiven Akkordeons ohne die Verwendung von JavaScript ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die globalen Attribute [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) haben nun eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird jetzt korrekt für die tschechische und slowakische Sprache unterstützt. Unter anderem wird dadurch sichergestellt, dass Wörter nicht mehr in Silben aufgeteilt werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird vom [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den Methoden [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verwendet werden ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Das [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in den Desktop-Versionen unterstützt, was Webentwicklern den Low-Level-Zugriff auf die einzelnen Frames eines Videostreams und Audioabschnitte ermöglicht. Die Unterstützung für Android ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame) und [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) voreilig (ohne Implementierung) veröffentlicht und nun entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind nun standardmäßig vollständig deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, um auf Android den passenden Benutzer-Prompt korrekt auszuwählen ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed` Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` ermöglicht es nun, das Netzwerkcache-Verhalten gleichzeitig global und für einzelne Navigationsziele festzulegen ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden nun ausgelöst, wenn die tatsächliche Anforderung stoppt, wodurch eine Race-Condition eliminiert wird, bei der `browsingContext.domContentLoaded` und `browsingContext.load` Ereignisse vor dem `network.responseCompleted` Ereignis ausgelöst wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anforderungen) werden nun in allen Netzwerkevents vollständig unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired` Ereignis bei jedem Aufruf des `network.continueWithAuth` Befehls mehrfach gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem bei `WebDriver:ElementSendKeys` wurde behoben, sodass das Element nur dann in den Sichtbereich gescrollt wird, wenn es nicht bereits sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options` Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) setzen nun immer den Ursprungs-String der Erweiterung an den Anfang des Pfads, ohne weitere Normalisierung. Bisher, wenn eine absolute URL anstelle einer relativen URL angegeben wurde, wurde die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 130, werden aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die passende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Anfrage für Video-Frame-Callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Compositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie z.B. Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt ein Callback-Handle zurück, das an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren. Beide Methoden sind in der Nightly-Version standardmäßig aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann für die Berichterstattung von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) Verletzungen verwendet werden. Dies umfasst die Unterstützung für [`Report`](/de/docs/Web/API/Report) Objekte, die eine `type` Eigenschaft mit dem Wert `"csp-violation"` und eine `body` Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) Schnittstelle ist, umfassen. Dazu gehören auch die {{CSP("report-to")}} Direktive des {{httpheader('Content-Security-Policy')}} HTTP-Response-Headers sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Response-Header. Diese Funktion ist standardmäßig deaktiviert. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
