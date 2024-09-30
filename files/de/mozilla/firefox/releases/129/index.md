---
title: Firefox 129 für Entwickler
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 3b2ad2f025d284f24b4bf46d40988e78f50bc195
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Befehlsregel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Damit können Sie Startwerte für Eigenschaften definieren, die auf ein Element gesetzt sind, von denen Sie ausgehen möchten, wenn das Element sein erstes Stil-Update erhält. Derzeit wird die Animation von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie angeben, ob diskrete Eigenschaften, wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Wertes auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) übergehen können. ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden nun unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision zugunsten des Speicherverbrauchs zu opfern. ([Firefox-Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können nun denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Alternativen der Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Disjunktion übereinstimmt, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im Rest des Musters eindeutig bleiben. ([Firefox-Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können jetzt mit dem DNS-Resolver des Betriebssystems auf Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer dies auf dem Gerät aktiviert hat, auch wenn es im Browser nicht aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3, ohne den {{httpheader("Alt-Svc")}}-Header verwenden zu müssen und ermöglicht das automatische Upgrade von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass die [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello)-Privatsphäre-Funktion jetzt auch verwendet werden kann, wenn DoH nur auf dem Gerät aktiviert ist, nicht im Browser. ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird jetzt unterstützt, wodurch Web-Apps, die auf veraltete Bibliotheken oder Frameworks, die auf diese Ereignisse angewiesen sind, zurückgreifen, aktiviert werden. Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden. ([Firefox-Bug 1901923](https://bugzil.la/1901923).)
- Die Standardmethoden `.toJSON()` [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt, wodurch die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht wird ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — in Übereinstimmung mit der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften freigibt, anstatt alle Eigenschaften, und löst auch ein Problem, bei dem das Setzen der Seite [`size`](/de/docs/Web/CSS/@page#size) in einer CSS-`@page`-Befehlsregel nicht in `CSSPageRule.style` reflektiert wurde. ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann jetzt Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien erhalten, sodass Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos abspielen wird und energieeffizient ist. Änderungen umfassen eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung der Medien verwendet wird, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und den Inhalt zur Wiedergabe zu dekodieren. ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst jetzt Ereignisse für einen synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für einen laufenden asynchronen `XMLHttpRequest` ausgelöst werden. Dies behebt einen lange bestehenden Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass, obwohl dies einige Websites beheben sollte, es auch zu einer Verschlechterung der Leistung auf Websites führen kann, die das alte "nicht blockierende" Verhalten für einen synchronen `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung behoben werden sollte, aber immer noch damit verbundene Probleme aufweist. ([Firefox-Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519)-Algorithmus für digitale Signaturen wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) der [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Schnittstelle werden jetzt unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurück, der beim Abrufen der Ressource zurückgegeben wird, jeweils. ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird jetzt unterstützt. Damit können Sie prüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn dies unterstützt wird, können Sie DTMF-Töne mithilfe von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die Einstellung `remote.active-protocols` wieder aktiviert werden. Weitere Informationen darüber finden Sie im folgenden [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox-Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass der Netzwerkkache entweder global oder für eine Gruppe von Top-Level-Browsing-Kontexten umgangen wird. ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Aufforderungen des Typs `beforeUnload` hinzugefügt, die jetzt wie andere Benutzeraufforderungen behandelt werden können. ([Firefox-Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen nun alle Argumente für den Befehl `network.provideResponse`, wenn er in der Phase `beforeRequestSent` verwendet wird, wie z. B. das `body`-Parameter, das es ermöglicht, Mock-Antworten zurückzugeben. ([Firefox-Bug 1853882](https://bugzil.la/1853882))
- Das `browsingContext.userPromptOpened` umfasst nun das Feld `handler`, das den für die Aufforderung konfigurierten Benutzeraufforderungs-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox-Bug 1904822](https://bugzil.la/1904822))
- Der Typ `BrowsingContextInfo` wird nun ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Öffners" Browsing-Kontexts ist. Dies wird festgelegt, wenn der neue Kontext zum Beispiel durch Klicken auf einen Link (sogar mit `rel=noopener`), `window.open` usw. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Öffner hat, wird das Feld auf null gesetzt. ([Firefox-Bug 1898004](https://bugzil.la/1898004))
- Netzwerkevents (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox-Bug 1805176](https://bugzil.la/1805176))
- Wir haben Unterstützung für das Argument `promptUnload` für `browsingContext.close` hinzugefügt, mit dem "beforeunload"-Aufforderungen umgangen werden, wenn ein Kontext über diesen Befehl geschlossen wird. ([Firefox-Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler im `network.continueRequest`-Befehl wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header festlegen konnten. ([Firefox-Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler in der `unhandledPromptBehavior`-Fähigkeit, der nicht mit BiDi-Only-Sitzungen verwendet werden konnte, wurde behoben. ([Firefox-Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close`, die unerwartet fehlschlugen, wenn kein Marionette-Client verbunden war, wurde behoben. ([Firefox-Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate`, der fehlschlug, aufzulösen, wenn eine gleiche Dokumentennavigation bei "beforeunload" begann, wurde behoben. ([Firefox-Bug 1879163](https://bugzil.la/1879163))
- Der `browser.close`-Befehl wurde verbessert, um alle "beforeunload"-Aufforderungen zu verwerfen, wenn die obersten Browsing-Kontexte geschlossen werden. ([Firefox-Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis, bei dem unerwartet das Feld `defaultValue` fehlte, wurde behoben ([Firefox-Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis während Authentifizierungsprozessen, das zu oft im Vergleich zu den Spezifikationen ausgelöst wurde, wurde behoben. Es wird nur ein `responseCompleted`- (oder `fetchError`-) Ereignis für den gesamten HTTP-Authentifizierungsablauf erwartet. ([Firefox-Bug 1906106](https://bugzil.la/1906106))
- Der `browser.removeUserContext`-Befehl wurde verbessert, um alle "beforeunload"-Aufforderungen zu überspringen. ([Firefox-Bug 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
