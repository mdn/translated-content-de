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

- Das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut des `<details>`-Elements ermöglicht jetzt die Gruppierung von `<details>`-Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht es, ein exklusives Akkordeon zu erstellen, ohne JavaScript zu verwenden ([Firefox-Bug 1856460](https://bugzil.la/1856460) und [Firefox-Bug 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) haben jetzt eine verbesserte Vererbung einschließlich ihrer Funktionsweise mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox-Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird nun korrekt für die tschechische und slowakische Sprache unterstützt. Dies stellt unter anderem sicher, dass Wörter nicht mehr an Silben aufgeteilt werden ([Firefox-Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der digitale Signaturalgorithmus [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den {{domxref("SubtleCrypto")}}-Methoden verwendet werden: {{domxref("SubtleCrypto.deriveKey()", "deriveKey()")}}, {{domxref("SubtleCrypto.deriveBits()", "deriveBits()")}}, {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, {{domxref("SubtleCrypto.importKey()", "importKey()")}} und {{domxref("SubtleCrypto.exportKey()", "exportKey()")}} ([Firefox-Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Veröffentlichungen unterstützt, was Webentwicklern einen Low-Level-Zugang zu den einzelnen Frames eines Videostreams und Audiostücken ermöglicht. Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame) und [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace). ([Firefox-Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) voreilig freigegeben (ohne Implementierung) und wurden entfernt ([Firefox-Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox-Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, um auf Android den entsprechenden Benutzerprompt korrekt auszuwählen ([Firefox-Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das Ereignis `browsingContext.navigationFailed` hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox-Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` ermöglicht jetzt die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigables gleichzeitig ([Firefox-Bug 1905307](https://bugzil.la/1905307)).
- Die Ereignisse `network.responseCompleted` und `network.fetchError` werden jetzt ausgegeben, wenn die eigentliche Anfrage stoppt, womit ein Wettlaufproblem beseitigt wird, bei dem `browsingContext.domContentLoaded` und `browsingContext.load`-Ereignisse vor dem `network.responseCompleted`-Ereignis ausgegeben wurden ([Firefox-Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt vollständig über alle Netzwerkereignisse unterstützt ([Firefox-Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis mit jedem Aufruf des `network.continueWithAuth`-Befehls mehrfach gesendet wurde ([Firefox-Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass es das Element nur dann in den Blick scrollt, wenn es nicht bereits sichtbar ist ([Firefox-Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox-Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) stellen jetzt immer den Ursprung der Erweiterung an den Pfad voran, ohne weitere Normalisierung. Zuvor wurde bei Bereitstellung einer absoluten URL, anstelle einer relativen URL, die absolute URL zurückgegeben. ([Firefox-Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 130 eingeführt worden, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen können auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) gefunden werden.

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} der {{domxref('HTMLVideoElement')}}-Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Videoframe an den Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen an jedem Videoframe durchzuführen, wie z. B. Videoanalyse, Malen auf eine Leinwand, Synchronisation mit externen Audioquellen usw. Die Methode gibt einen Callback-Handle zurück, der an {{domxref('HTMLVideoElement.cancelVideoFrameCallback()')}} übergeben werden kann, um die ausstehende Callback-Anfrage zu stornieren.
  Beide Methoden sind in der Nightly-Version standardmäßig aktiviert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)).

- **CSP violation reports using the Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann zum Melden von [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verstößen verwendet werden.
  Dies beinhaltet Unterstützung für {{domxref('Report')}}-Objekte, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft aufweisen, die eine Instanz der {{domxref('CSPViolationReportBody')}}-Schnittstelle ist, der {{CSP("report-to")}}-Direktive des {{httpheader('Content-Security-Policy')}}-HTTP-Antwort-Headers sowie der HTTP-Antwort-Header {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}}.
  Diese Funktion ist standardmäßig deaktiviert.
  ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
