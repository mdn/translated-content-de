---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut des `<details>`-Elements ermöglicht nun die Gruppierung von `<details>`-Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies erlaubt es, ein exklusives Akkordeon zu erstellen, ohne JavaScript zu verwenden ([Firefox-Bug 1856460](https://bugzil.la/1856460) und [Firefox-Bug 1909613](https://bugzil.la/1909613)).
- Die [`dir`](/de/docs/Web/HTML/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-[globale Attribute](/de/docs/Web/HTML/Global_attributes) haben nun eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox-Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die [`hyphens`](/de/docs/Web/CSS/hyphens)-CSS-Eigenschaft wird jetzt korrekt für die Sprachen Tschechisch und Slowakisch unterstützt.
  Unter anderem wird dadurch sichergestellt, dass Wörter nicht mehr auf Silben getrennt werden ([Firefox-Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der [X25519-Algorithmus](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519) für digitale Signaturen wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in Desktop-Versionen unterstützt, was Webentwicklern den Zugriff auf einzelne Frames eines Videostreams und Audioblöcke auf niedriger Ebene ermöglicht. Die Unterstützung für Android ist in der Nightly-Version aktiviert. Neue Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) ([Firefox-Bug 1908572](https://bugzil.la/1908572)).

#### Entfernung von Funktionen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) vorzeitig ohne Implementierung veröffentlicht und wurden entfernt ([Firefox-Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox-Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Prompt-Listener wurde behoben, sodass der entsprechende Benutzerprompt auf Android korrekt ausgewählt wird ([Firefox-Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Unterstützung für das Event `browsingContext.navigationFailed`, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann, wurde hinzugefügt ([Firefox-Bug 1846601](https://bugzil.la/1846601)).
- Der Befehl `network.setCacheBehavior` ermöglicht nun die Definition des Netzwerk-Cache-Verhaltens sowohl global als auch für einzelne Navigables gleichzeitig ([Firefox-Bug 1905307](https://bugzil.la/1905307)).
- Die Events `network.responseCompleted` und `network.fetchError` werden jetzt ausgelöst, wenn die eigentliche Anfrage stoppt, wodurch eine Race Bedingung vermieden wird, bei der `browsingContext.domContentLoaded`- und `browsingContext.load`-Events vor dem Event `network.responseCompleted` ausgelöst wurden ([Firefox-Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt vollständig in allen Netzwerk-Events unterstützt ([Firefox-Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das Event `network.authRequired` mehrfach mit jedem Aufruf des Befehls `network.continueWithAuth` gesendet wurde ([Firefox-Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem im Befehl `WebDriver:ElementSendKeys` wurde behoben, sodass das Element nur in das Sichtfeld gescrollt wird, wenn es nicht bereits sichtbar ist ([Firefox-Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der Parameter `options` von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox-Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und die veraltete {{WebExtAPIRef("extension.getURL")}}) fügt jetzt immer den Ursprungsstring der Erweiterung zum Pfad hinzu, ohne weitere Normalisierung. Zuvor wurde bei Angabe einer absoluten URL statt einer relativen URL die absolute URL zurückgegeben ([Firefox-Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 130, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen sie auf `true`. Weitere experimentelle Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request video frame callback:** `media.rvfc.enabled`.

  Die Methode [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an das Compositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen, wie z. B. Videoanalyse, Malen auf eine Leinwand, Synchronisierung mit externen Audioquellen und mehr. Die Methode gibt einen Callback-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Anforderung zu stornieren.
  Beide Methoden sind standardmäßig in der Nightly-Version aktiviert ([Firefox-Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsberichte mit der Reporting-API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann für Berichte über [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzungen verwendet werden.
  Dies umfasst die Unterstützung für [`Report`](/de/docs/Web/API/Report)-Objekte, die eine Eigenschaft `type` mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft haben, die eine Instanz des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist, die {{CSP("report-to")}}-Anweisung des HTTP-Antwort-Headers {{httpheader('Content-Security-Policy')}} sowie die HTTP-Antwort-Header {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}}.
  Diese Funktion ist standardmäßig deaktiviert.
  ([Firefox-Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
