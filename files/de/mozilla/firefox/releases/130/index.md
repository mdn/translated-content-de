---
title: Firefox 130 für Entwickler
slug: Mozilla/Firefox/Releases/130
l10n:
  sourceCommit: 1e644cd5cb121738c6dbe04bdcef3812709d25f9
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 130, die Entwickler betreffen. Firefox 130 wurde am [3. September 2024](https://whattrainisitnow.com/release/?version=130) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das [`name`](/de/docs/Web/HTML/Element/details#name)-Attribut des `<details>`-Elements erlaubt jetzt die Gruppierung von `<details>`-Elementen, wobei nur ein Element innerhalb einer Gruppe gleichzeitig geöffnet sein kann. Dies ermöglicht es Ihnen, ein exklusives Akkordeon ohne die Verwendung von JavaScript zu erstellen ([Firefox Bug 1856460](https://bugzil.la/1856460) und [Firefox Bug 1909613](https://bugzil.la/1909613)).
- Die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) haben jetzt eine verbesserte Vererbung, einschließlich ihrer Funktionsweise mit dem [shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#attribute_inheritance) ([Firefox Bug 1876163](https://bugzil.la/1876163)).

### CSS

- Die CSS-Eigenschaft [`hyphens`](/de/docs/Web/CSS/hyphens) wird jetzt ordnungsgemäß für die tschechische und slowakische Sprache unterstützt. Dies sorgt unter anderem dafür, dass Wörter nicht mehr auf Silben aufgeteilt werden ([Firefox Bug 1908931](https://bugzil.la/1908931)).

### APIs

- Der [X25519](/de/docs/Web/API/SubtleCrypto/deriveKey#x25519)-digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den Methoden [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey), [`deriveBits()`](/de/docs/Web/API/SubtleCrypto/deriveBits), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) der [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verwendet werden ([Firefox Bug 1904836](https://bugzil.la/1904836)).
- Die [Web Codecs API](/de/docs/Web/API/WebCodecs_API) wird in den Desktop-Versionen unterstützt und gibt Webentwicklern Zugriff auf die einzelnen Frames eines Videostreams und Audioschnipsel. Android-Unterstützung ist in der Nightly-Version aktiviert. Die neuen Schnittstellen umfassen: [`VideoEncoder`](/de/docs/Web/API/VideoEncoder), [`VideoDecoder`](/de/docs/Web/API/VideoDecoder), [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk), [`VideoFrame`](/de/docs/Web/API/VideoFrame), [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace), [`AudioEncoder`](/de/docs/Web/API/AudioEncoder), [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk), [`AudioData`](/de/docs/Web/API/AudioData) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder). ([Firefox Bug 1908572](https://bugzil.la/1908572)).

#### Entfernungen

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) wurden fälschlicherweise (ohne Implementierung) in [Firefox 127](/de/docs/Mozilla/Firefox/Releases/127) veröffentlicht und wurden entfernt ([Firefox Bug 1909559](https://bugzil.la/1909559)).

### WebAssembly

#### Allgemein

- System-Add-ons sind jetzt standardmäßig vollständig deaktiviert ([Firefox Bug 1904310](https://bugzil.la/1904310)).
- Ein Problem mit dem internen Eingabeaufforderungs-Listener wurde behoben, um auf Android die richtige Benutzereingabeaufforderung korrekt auszuwählen ([Firefox Bug 1902264](https://bugzil.la/1902264)).

#### WebDriver BiDi

- Es wurde Unterstützung für das `browsingContext.navigationFailed`-Ereignis hinzugefügt, das ausgelöst wird, wenn ein Navigationsversuch nicht abgeschlossen werden kann ([Firefox Bug 1846601](https://bugzil.la/1846601)).
- Der `network.setCacheBehavior`-Befehl ermöglicht es jetzt, das Netzwerk-Cache-Verhalten sowohl global als auch für einzelne Navigables gleichzeitig zu definieren ([Firefox Bug 1905307](https://bugzil.la/1905307)).
- Die `network.responseCompleted`- und `network.fetchError`-Ereignisse werden jetzt ausgelöst, wenn die eigentliche Anfrage beendet wird, was ein Race-Condition-Problem behebt, bei dem `browsingContext.domContentLoaded`- und `browsingContext.load`-Ereignisse vor dem `network.responseCompleted`-Ereignis ausgelöst wurden ([Firefox Bug 1882803](https://bugzil.la/1882803)).
- Daten-URLs (z. B. für Hintergrundbilder oder Fetch-Anfragen) werden jetzt vollständig über alle Netzwerkereignisse unterstützt ([Firefox Bug 1904343](https://bugzil.la/1904343)).
- Ein Problem wurde behoben, bei dem das `network.authRequired`-Ereignis mehrfach mit jedem Aufruf des `network.continueWithAuth`-Befehls gesendet wurde ([Firefox Bug 1899711](https://bugzil.la/1899711)).

#### Marionette

- Ein Problem in `WebDriver:ElementSendKeys` wurde behoben, sodass es das Element nur dann in den sichtbaren Bereich scrollt, wenn es nicht bereits sichtbar ist ([Firefox Bug 1906095](https://bugzil.la/1906095)).

## Änderungen für Add-on-Entwickler

- Der `options`-Parameter von {{WebExtAPIRef("webRequest.getSecurityInfo")}} ist jetzt optional ([Firefox Bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (und das veraltete {{WebExtAPIRef("extension.getURL")}}) setzt jetzt immer den Erweiterungsursprung an den Pfadanfang, ohne weitere Normalisierung. Bisher wurde bei Angabe einer absoluten URL, anstatt einer relativen URL, die absolute URL zurückgegeben. ([Firefox Bug 1795082](https://bugzil.la/1795082)).

## Experimentelle Web-Funktionalitäten

Diese Funktionen sind neu in Firefox 130 eingeführt worden, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite für [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Request Video Frame Callback:** `media.rvfc.enabled`.

  Die [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)-Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Dies ermöglicht Entwicklern effiziente Operationen auf jedem Videoframe, wie Videoanalysen, das Malen auf eine Leinwand, die Synchronisierung mit externen Audioquellen usw. durchzuführen. Die Methode gibt einen Callback-Handle zurück, der an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. Beide Methoden sind standardmäßig im Nightly-Build aktiviert. ([Firefox Bug 1800882](https://bugzil.la/1800882)).

- **CSP-Verletzungsreports mit der Reporting API:** `dom.reporting.enabled`.

  Die [Reporting API](/de/docs/Web/API/Reporting_API) kann verwendet werden, um [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzungen zu melden. Dies umfasst die Unterstützung von [`Report`](/de/docs/Web/API/Report)-Objekten, die eine `type`-Eigenschaft mit dem Wert `"csp-violation"` und eine `body`-Eigenschaft, die eine Instanz der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist, die {{CSP("report-to")}}-Anweisung des {{httpheader('Content-Security-Policy')}}-HTTP-Antwort-Headers sowie die {{httpheader('Reporting-Endpoints')}} und {{httpheader('Report-To')}}-HTTP-Antwort-Header. Diese Funktion ist standardmäßig deaktiviert. ([Firefox Bug 1391243](https://bugzil.la/1391243)).

## Ältere Versionen

{{Firefox_for_developers}}
