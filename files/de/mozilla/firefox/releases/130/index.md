---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 0838df3b24b7d81c15c97bdd8d99d7d42c31c518
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut des `<details>`-Elements ermöglicht jetzt die Gruppierung von `<details>`-Elementen, bei der nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht Ihnen, ein exklusives Akkordeon ohne JavaScript zu erstellen ([Firefox Fehler 1856460](https://bugzil.la/1856460) und [Firefox Fehler 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) weisen jetzt eine verbesserte Vererbung auf, einschließlich ihrer Funktionsweise mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Fehler 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird jetzt ordnungsgemäß für die tschechische und slowakische Sprache unterstützt. Dies stellt unter anderem sicher, dass Wörter nicht mehr bei Silben getrennt werden ([Firefox Fehler 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den Methoden von [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Fehler 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Versionen unterstützt, wodurch Webentwickler Zugriff auf einzelne Frames eines Videostreams und Audiosegmente auf niedriger Ebene erhalten. Die Unterstützung für Android ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) ([Firefox Fehler 1908572](https://bugzil.la/1908572)).

#### Entfernung

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) verfrüht (ohne Implementierung) freigegeben und wurden entfernt ([Firefox Fehler 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox Fehler 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, um auf Android das korrekte Benutzer-Prompt auszuwählen ([Firefox Fehler 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das `browsingContext.navigationFailed`-Event hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox Fehler 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` ermöglicht es nun, das Verhalten des Netzwerk-Caches sowohl global als auch für einzelne Navigationsziele gleichzeitig zu definieren ([Firefox Fehler 1905307](https://bugzil.la/1905307)).
- Die Events `network.responseCompleted` und `network.fetchError` werden nun ausgelöst, wenn die eigentliche Anfrage beendet ist, wodurch eine Rennbedingung vermieden wird, bei der die Events `browsingContext.domContentLoaded` und `browsingContext.load` vor dem `network.responseCompleted`-Event ausgelöst wurden ([Firefox Fehler 1882803](https://bugzil.la/1882803)).
- Data-URLs (z.B. für Hintergrundbilder oder Fetch-Anfragen) werden nun vollständig in allen Netzwerk-Events unterstützt ([Firefox Fehler 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Event bei jedem Aufruf des `network.continueWithAuth`-Befehls mehrfach gesendet wurde ([Firefox Fehler 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem wurde in `WebDriver:ElementSendKeys` behoben, sodass das Element nur dann in den sichtbaren Bereich gescrollt wird, wenn es noch nicht sichtbar ist ([Firefox Fehler 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Fehler 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) fügt nun immer den Ursprungsort der Erweiterung zum Pfad hinzu, ohne weitere Normalisierung. Bisher wurde, wenn eine absolute URL anstelle einer relativen URL angegeben wurde, die absolute URL zurückgegeben. ([Firefox Fehler 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 130 eingeführt, sind aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie unter `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request Video Frame Callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie z.B. Videoanalyse, Malen auf einer Leinwand, Synchronisation mit externen Audioquellen und so weiter. Die Methode gibt einen Callback-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anforderung zu stornieren.
  Beide Methoden sind standardmäßig in der Nightly-Build aktiviert. ([Firefox Fehler 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte unter Verwendung der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann zur Meldung von Verstößen gegen die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verwendet werden.
  Dies beinhaltet Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft besitzen, die eine Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist, die {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}}-HTTP-Antwort-Headers sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}} HTTP-Antwort-Header.
  Diese Funktion ist standardmäßig deaktiviert.
  ([Firefox Fehler 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
