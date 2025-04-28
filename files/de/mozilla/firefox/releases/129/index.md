---
title: Firefox 129 für Entwickler
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Regel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Diese erlaubt es Ihnen, Startwerte für Eigenschaften zu definieren, die auf ein Element gesetzt werden, von denen aus Sie eine Transition starten möchten, wenn das Element sein erstes Style-Update erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox Bug 1834876](https://bugzil.la/1834876) und [Firefox Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie festlegen, ob diskrete Eigenschaften, wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Wertes auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) animiert werden können. ([Firefox Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden nun unterstützt, ebenso wie {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und die statische Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere in Anwendungsfällen, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch zu tauschen. ([Firefox Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Fanggruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Disjunktions-Alternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, weil nur eine Alternative in einer Disjunktion übereinstimmt, sodass ein in mehreren Alternativen deklarierter Name nur auf eine gefangene Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im gesamten Muster dennoch eindeutig bleiben. ([Firefox Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können jetzt mit dem DNS-Resolver des Betriebssystems unter Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Nutzung von HTTP/3, ohne den {{httpheader("Alt-Svc")}} Header verwenden zu müssen, und ermöglicht die automatische Umstellung von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass es jetzt die Verwendung der Datenschutzfunktion [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) ermöglicht, auch wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent) Ereignis wird nun unterstützt, was Web-Apps ermöglicht, die veraltete Bibliotheken oder Frameworks verwenden, die auf diese Ereignisse angewiesen sind.
  Das [`beforeinput` event](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden.
  ([Firefox Bug 1901923](https://bugzil.la/1901923).)
- Die Standard `.toJSON()` Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden nun unterstützt und ermöglichen die Serialisierung von `GeolocationCoordinates` und `GeolocationPosition` Objekten mit {{jsxref("JSON.stringify()")}} ([Firefox Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird nun unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — entsprechend der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften offenlegt, anstatt aller Eigenschaften, und löst auch ein Problem, bei dem das Setzen der `Größe` in einer CSS `@page` Regel nicht im `CSSPageRule.style` widergespiegelt wurde. ([Firefox Bug 1890842](https://bugzil.la/1890842), [Firefox Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Dekodierinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien erhalten, was es Anwendungen ermöglicht, im Voraus zu erkennen, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos abspielen und dabei stromsparend sein wird. Zu den Änderungen gehört eine neue Eigenschaft `keySystemConfiguration` am `configuration`-Parameter der Methode, der die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung der Medien verwendet wird, sowie eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt ist, das zum Erstellen von Schlüsseln und Dekodieren des Inhalts zur Wiedergabe verwendet werden kann. ([Firefox Bug 1898344](https://bugzil.la/1898344)).
- Firefox feuert jetzt Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), bevor die Ereignisse für jede laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass, obwohl dies einige Websites beheben sollte, es auch zu Leistungseinbußen auf Websites führen kann, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [file a bug](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätten behoben werden sollen, aber immer noch Probleme aufweist. ([Firefox Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Interface werden nun unterstützt, wobei der Inhaltstyp der abgerufenen Ressource und der HTTP-Antwortstatuscode angezeigt werden, der beim Abrufen der Ressource zurückgegeben wird. ([Firefox Bug 1800443](https://bugzil.la/1800443), [Firefox Bug 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird nun unterstützt. Sie ermöglicht es Ihnen zu prüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn dies unterstützt wird, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox Bug 1653318](https://bugzil.la/1653318), [Firefox Bug 1900037](https://bugzil.la/1900037)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die `remote.active-protocols` Präferenz wieder aktiviert werden. Weitere Informationen hierzu finden Sie im folgenden [Blogeintrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den `network.setCacheBehavior` Befehl hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass der Netzwerk-Cache global oder für eine Reihe von obersten Browsing-Kontexten umgangen wird. ([Firefox Bug 1901032](https://bugzil.la/1901032) und [Firefox Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Prompts vom Typ `beforeUnload` hinzugefügt, die nun auf die gleiche Weise wie andere Benutzer-Prompts behandelt werden können. ([Firefox Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn er in der Phase `beforeRequestSent` verwendet wird, wie z. B. der `body`-Parameter, der es ermöglicht, Mock-Antworten zurückzugeben. ([Firefox Bug 1853882](https://bugzil.la/1853882))
- Das `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den für das Prompt konfigurierten Benutzer-Prompt-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox Bug 1904822](https://bugzil.la/1904822))
- Der `BrowsingContextInfo`-Typ bietet jetzt ein `originalOpener`-Feld, das die Kontext-ID des Browsing-Kontexts "Öffner" ist. Dies wird z. B. gesetzt, wenn der neue Kontext durch die Verwendung eines Links (auch mit `rel=noopener`), `window.open` usw. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Öffner hat, wird das Feld auf null gesetzt. ([Firefox Bug 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox Bug 1805176](https://bugzil.la/1805176))
- Wir haben Unterstützung für das Argument `promptUnload` für `browsingContext.close` hinzugefügt, das es ermöglicht, "beforeunload"-Prompts beim Schließen eines Kontexts über diesen Befehl zu umgehen. ([Firefox Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header festlegen konnten. ([Firefox Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler mit der `unhandledPromptBehavior` Fähigkeit wurde behoben, die nicht mit nur BiDi-Sitzungen verwendet werden konnte. ([Firefox Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` wurde behoben, der unerwartet fehlschlug, wenn kein Marionette-Client verbunden war. ([Firefox Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` wurde behoben, der nicht aufgelöst werden konnte, wenn eine Navigation im selben Dokument mit "beforeunload" begann. ([Firefox Bug 1879163](https://bugzil.la/1879163))
- Der `browser.close` Befehl wurde verbessert, um alle "beforeunload" Prompts beim Schließen der obersten Browsing-Kontexte zu verwerfen. ([Firefox Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im Ereignis `browsingContext.userPromptOpened` wurde behoben, bei dem das `defaultValue`-Feld unerwartet fehlte ([Firefox Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis während der Authentifizierungsflüsse wurde behoben, das im Vergleich zu den Spezifikationen zu oft ausgelöst wurde. Für den gesamten HTTP-Authentifizierungsfluss wird nur ein `responseCompleted` (oder `fetchError`) Ereignis erwartet. ([Firefox Bug 1906106](https://bugzil.la/1906106))
- Der `browser.removeUserContext` Befehl wurde verbessert, um alle "beforeunload" Prompts zu überspringen. ([Firefox Bug 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
