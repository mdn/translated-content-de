---
title: Firefox 130 Versionshinweise für Entwickler
short-title: Firefox 130
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Reference/Elements/details#name)-Attribut des `<details>`-Elements ermöglicht nun die Gruppierung von `<details>`-Elementen, bei der nur ein Element innerhalb einer Gruppe geöffnet sein kann. Dies erlaubt die Erstellung eines exklusiven Akkordeons ohne Verwendung von JavaScript ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-[Globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) haben jetzt eine verbesserte Vererbung, einschließlich ihrer Funktion mit [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die [`hyphens`](/de/docs/Web/CSS/Reference/Properties/hyphens)-CSS-Eigenschaft wird nun für die tschechische und slowakische Sprache korrekt unterstützt. Unter anderem wird sichergestellt, dass Wörter nicht mehr bei Silben getrennt werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird auf Desktop-Versionen unterstützt und gibt Webentwicklern Zugriff auf die einzelnen Frames eines Videostreams und Audio-Chunks. Die Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden voreilig veröffentlicht (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) und wurden entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig komplett deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Es wurde ein Problem mit dem internen Eingabeaufforderungs-Listener behoben, um die geeignete Benutzereingabeaufforderung auf Android korrekt auszuwählen ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch fehlschlägt ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` erlaubt jetzt die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigables gleichzeitig ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden jetzt ausgelöst, wenn die tatsächliche Anfrage gestoppt wird, wodurch eine Rennbedingung beseitigt wird, bei der die Ereignisse `browsingContext.domContentLoaded` und `browsingContext.load` vor dem Ereignis `network.responseCompleted` ausgelöst wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt in allen Netzwerkereignissen vollständig unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Es wurde ein Problem behoben, bei dem das Ereignis `network.authRequired` mehrfach mit jedem Aufruf des Befehls `network.continueWithAuth` gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem im `WebDriver:ElementSendKeys` wurde behoben, sodass es das Element nur in den sichtbaren Bereich scrollt, wenn es noch nicht sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Entwickler von Add-ons

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) fügt jetzt immer den Ursprungsort der Erweiterung zum Pfad hinzu, ohne weitere Normalisierung. Früher, wenn eine absolute URL angegeben wurde, anstatt einer relativen URL, wurde die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 130 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie das entsprechende Präferenzfeld auf der `about:config`-Seite und setzen Sie es auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie Videobearbeitung, Malen auf eine Leinwand, Synchronisierung mit externen Audioquellen und so weiter. Die Methode gibt einen Rückruf-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Rückrufanforderung zu stornieren. Beide Methoden sind standardmäßig im Nightly-Build aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP Verstoßberichte mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) Verstößen verwendet werden. Dies schließt die Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte ein, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist, die {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}}-HTTP-Response-Headers, und die HTTP-Response-Header {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}}. Diese Funktion ist standardmäßig deaktiviert. ([Firefox Bug 1391243](https://bugzil.la/1391243)).
