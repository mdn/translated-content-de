---
title: Firefox-129-Release-Notes für Entwickler
short-title: Firefox 129
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 129, die sich auf Entwickler auswirken. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/Reference/At-rules/@starting-style) wird unterstützt. Damit können Sie Anfangswerte für Eigenschaften definieren, die für ein Element festgelegt sind und von denen aus Sie einen Übergang durchführen möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird die Animation ausgehend von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die CSS-Eigenschaft {{CSSXRef("transition-behavior")}} wird unterstützt. Damit können Sie festlegen, ob diskrete Eigenschaften wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}} durch Festlegen des Werts auf [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) übergeleitet werden können. ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standardeigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- Typisierte {{jsxref("Float16Array")}}-Arrays werden nun unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die zum Runden von Zahlen auf 16 Bit verwendet werden kann. Der neue Typ ist für die gemeinsame Nutzung von Daten mit einer GPU nützlich, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox-Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können nun denselben Namen für [benannte Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Disjunktionsalternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist zulässig, weil nur eine Alternative in einer Disjunktion übereinstimmt, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im übrigen Muster weiterhin eindeutig sein. ([Firefox-Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können nun unter Windows 11, Linux und Android 10+ mithilfe des DNS-Resolvers des Betriebssystems aufgelöst werden. Dadurch wird sichergestellt, dass [DNS over HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3, ohne den Header {{httpheader("Alt-Svc")}} verwenden zu müssen, und aktiviert die automatische Aktualisierung von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Besonders wichtig ist, dass dadurch die Datenschutzfunktion [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) auch dann verwendet werden kann, wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete Ereignis [`textInput`](/de/docs/Web/API/TextEvent) wird nun unterstützt, wodurch Web-Apps aktiviert werden, die Legacy-Bibliotheken oder Frameworks verwenden, welche von diesen Ereignissen abhängen.
  Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte stets von neuen Anwendungen verwendet werden.
  ([Firefox-Bug 1901923](https://bugzil.la/1901923).)
- Die standardmäßigen `.toJSON()`-Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden nun unterstützt. Sie ermöglichen die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird nun unterstützt und wird statt [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) verwendet — entsprechend der aktuellen Spezifikation.
  Dadurch stellt `CSSPageDescriptors` nur die mit `@page` verbundenen Eigenschaften bereit, anstatt aller Eigenschaften, und es wird außerdem ein Problem behoben, bei dem das Festlegen der Seitengröße [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size) in einer CSS-At-Regel `@page` nicht in `CSSPageRule.style` widergespiegelt wurde.
  ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Dekodierungsinformationen für eine bestimmte Konfiguration _verschlüsselter Medien_ sowie für unverschlüsselte Medien abrufen. Dadurch können Anwendungen im Voraus feststellen, ob die Konfiguration unterstützt wird und ob sie die Inhalte reibungslos sowie energieeffizient wiedergibt. Zu den Änderungen gehören eine neue Eigenschaft `keySystemConfiguration` im Argument `configuration` der Methode, welche die Eigenschaften des zur Verschlüsselung der Medien verwendeten Schlüsselsystems definiert, sowie eine neue Eigenschaft `keySystemAccess` im zurückgegebenen Objekt. Diese ist ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das zum Erstellen von Schlüsseln und zum Dekodieren der Inhalte für die Wiedergabe verwendet werden kann. ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst nun Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites beheben sollte, aber auch zu einer schlechteren Leistung auf Websites führen kann, die das alte „nicht blockierende“ Verhalten einer synchronen `XMLHttpRequest` erwarten. Bitte [melden Sie einen Bug](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber weiterhin entsprechende Probleme aufweist. ([Firefox-Bug 697151](https://bugzil.la/697151).)
- Der digitale Signaturalgorithmus [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) verwendet werden ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) werden nun unterstützt. Sie geben jeweils den Inhaltstyp der abgerufenen Ressource und den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode an. ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird nun unterstützt. Sie ermöglicht Ihnen zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Falls dies unterstützt wird, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernte Funktionen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernte Funktionen

- CDP (Chrome DevTools Protocol) ist jetzt standardmäßig deaktiviert. Es kann über die Einstellung `remote.active-protocols` wieder aktiviert werden. Weitere Informationen dazu finden Sie im folgenden [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox-Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` wurde hinzugefügt. Er ermöglicht Ihnen, den Browser so zu konfigurieren, dass der Netzwerk-Cache entweder global oder für eine Gruppe von Browsing-Kontexten der obersten Ebene umgangen wird. ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Prompts vom Typ `beforeUnload` wurde hinzugefügt, die nun auf dieselbe Weise wie andere Benutzer-Prompts behandelt werden können. ([Firefox-Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn er in der Phase `beforeRequestSent` verwendet wird, beispielsweise den Parameter `body`, mit dem Sie Mock-Antworten zurückgeben können. ([Firefox-Bug 1853882](https://bugzil.la/1853882))
- `browsingContext.userPromptOpened` enthält nun das Feld `handler`, das den für den Prompt konfigurierten Benutzer-Prompt-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox-Bug 1904822](https://bugzil.la/1904822))
- Der Typ `BrowsingContextInfo` stellt nun ein Feld `originalOpener` bereit, das die Kontext-ID des Browsing-Kontexts „opener“ ist. Dieses wird beispielsweise gesetzt, wenn der neue Kontext über einen Link erstellt wurde, auch mit `rel=noopener`, durch `window.open` usw. Falls der neue Browsing-Kontext keinen relevanten Opener hat, wird das Feld auf null gesetzt. ([Firefox-Bug 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden nun für Anfragen an Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgeführt. ([Firefox-Bug 1805176](https://bugzil.la/1805176))
- Unterstützung für das Argument `promptUnload` für `browsingContext.close` wurde hinzugefügt. Damit können Sie „beforeunload“-Prompts umgehen, wenn Sie einen Kontext über diesen Befehl schließen. ([Firefox-Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` wurde behoben, durch den Sie nicht mehrere Werte für denselben Header festlegen konnten. ([Firefox-Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler für die Capability `unhandledPromptBehavior` wurde behoben, die nicht mit reinen BiDi-Sitzungen verwendet werden konnte. ([Firefox-Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler bei `session.end` und `browser.close` wurde behoben, durch den diese unerwartet fehlschlugen, wenn kein Marionette-Client verbunden war. ([Firefox-Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler bei `browsingContext.navigate` wurde behoben, durch den der Vorgang nicht aufgelöst wurde, wenn eine Same-Document-Navigation bei „beforeunload“ begann. ([Firefox-Bug 1879163](https://bugzil.la/1879163))
- Der Befehl `browser.close` wurde verbessert, um beim Schließen von Browsing-Kontexten der obersten Ebene alle „beforeunload“-Prompts zu verwerfen. ([Firefox-Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im Ereignis `browsingContext.userPromptOpened` wurde behoben, bei dem das Feld `defaultValue` unerwartet fehlte ([Firefox-Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem Ereignis `network.responseCompleted` während Authentifizierungsabläufen wurde behoben, bei dem dieses im Vergleich zu den Spezifikationen zu oft ausgelöst wurde. Für den gesamten HTTP-Authentifizierungsablauf wird nur ein Ereignis `responseCompleted` (oder `fetchError`) erwartet. ([Firefox-Bug 1906106](https://bugzil.la/1906106))
- Der Befehl `browser.removeUserContext` wurde verbessert, um alle „beforeunload“-Prompts zu überspringen. ([Firefox-Bug 1876062](https://bugzil.la/1876062))
