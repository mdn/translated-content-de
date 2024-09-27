---
title: Firefox 129 für Entwickler
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 3b2ad2f025d284f24b4bf46d40988e78f50bc195
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Veränderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die [@starting-style](/de/docs/Web/CSS/@starting-style) CSS-Regel wird unterstützt. Diese ermöglicht es, Startwerte für Eigenschaften festzulegen, die an einem Element festgelegt sind, von denen es ausgehend eine Transition geben soll, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox Fehler 1834876](https://bugzil.la/1834876) und [Firefox Fehler 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Diese ermöglicht es, festzulegen, ob diskrete Eigenschaften, wie etwa {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Wertes auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) transitioned werden können. ([Firefox Fehler 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der standardmäßigen {{cssxref("font-feature-settings")}} Eigenschaft implementiert ([Firefox Fehler 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und der {{jsxref("Math.f16round()")}} statischen Methode, die zum Runden von Zahlen auf 16 Bits verwendet werden kann. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox Fehler 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können nun denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Alternativen innerhalb von Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Disjunktion übereinstimmen wird, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im übrigen Muster immer noch eindeutig sein. ([Firefox Fehler 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können nun mithilfe des DNS-Resolvers des Betriebssystems auf Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Nutzung von HTTP/3 ohne Verwendung des {{httpheader("Alt-Svc")}} Headers und ermöglicht die automatische Umstellung von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass nun die Nutzung der [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) Datenschutzfunktion möglich ist, selbst wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox Fehler 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent) Ereignis wird jetzt unterstützt, was es Webanwendungen ermöglicht, die veraltete Bibliotheken oder Frameworks verwenden, die auf diesen Ereignissen beruhen.
  Das [`beforeinput` Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte von neuen Anwendungen immer verwendet werden.
  ([Firefox Fehler 1901923](https://bugzil.la/1901923).)
- Die Standard `.toJSON()` Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt, was die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox Fehler 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — entsprechend der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften freilegt, anstatt alle Eigenschaften, und behebt auch ein Problem, bei dem das Setzen der Seite [`size`](/de/docs/Web/CSS/@page#size) in einer CSS `@page`-Regel nicht in `CSSPageRule.style` widergespiegelt wurde. ([Firefox Fehler 1890842](https://bugzil.la/1890842), [Firefox Fehler 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie für unverschlüsselte Medien abrufen, sodass Anwendungen im Voraus erkennen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos und energieeffizient abspielen wird. Änderungen umfassen eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung der Medien verwendet wird, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, welches ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und den Inhalt für die Wiedergabe zu dekodieren. ([Firefox Fehler 1898344](https://bugzil.la/1898344)).
- Firefox löst nun Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest`s ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites beheben sollte, es aber auch zu einer verschlechterten Leistung auf Websites führen kann, die das alte, "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber immer noch damit zusammenhängende Probleme aufweist. ([Firefox Fehler 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) Algorithmus für digitale Signaturen wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Fehler 1804788](https://bugzil.la/1804788)).
- Die [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) Eigenschaften der [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle werden jetzt unterstützt, die den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurückgeben, der beim Abrufen der Ressource zurückgegeben wurde. ([Firefox Fehler 1800443](https://bugzil.la/1800443), [Firefox Fehler 1796785](https://bugzil.la/1796785).)
- Die [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) Eigenschaft wird jetzt unterstützt. Sie ermöglicht es, zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn unterstützt, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox Fehler 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)-Methode wurde entfernt ([Firefox Fehler 1653318](https://bugzil.la/1653318), [Firefox Fehler 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die `remote.active-protocols`-Einstellung wieder aktiviert werden. Mehr dazu erfahren Sie in diesem [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox Fehler 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den `network.setCacheBehavior`-Befehl hinzugefügt, der es erlaubt, den Browser so zu konfigurieren, dass der Netzwerkcache entweder global oder für eine Reihe von Top-Level-Browsing-Kontexten umgangen wird. ([Firefox Fehler 1901032](https://bugzil.la/1901032) und [Firefox Fehler 1906100](https://bugzil.la/1906100))
- Unterstützung für Prompts vom Typ `beforeUnload` hinzugefügt, die jetzt auf die gleiche Weise wie andere Benutzer-Prompts behandelt werden können. ([Firefox Fehler 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den `network.provideResponse`-Befehl, wenn dieser in der `beforeRequestSent`-Phase verwendet wird, wie z.B. den `body`-Parameter, der das Zurückgeben von Mock-Antworten erlaubt. ([Firefox Fehler 1853882](https://bugzil.la/1853882))
- Der `browsingContext.userPromptOpened` enthält nun das `handler`-Feld, das den für das Prompt konfigurierten Benutzer-Prompt-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox Fehler 1904822](https://bugzil.la/1904822))
- Der `BrowsingContextInfo`-Typ wird jetzt ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Öffners"-Browsing-Kontexts ist. Dies wird gesetzt, z.B. wenn der neue Kontext durch die Benutzung eines Links (auch mit `rel=noopener`) oder `window.open` erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Opener hat, wird das Feld auf null gesetzt. ([Firefox Fehler 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox Fehler 1805176](https://bugzil.la/1805176))
- Unterstützung für das `promptUnload`-Argument für `browsingContext.close` hinzugefügt, das es erlaubt, "beforeunload"-Prompts zu umgehen, wenn ein Kontext über diesen Befehl geschlossen wird. ([Firefox Fehler 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` behoben, bei dem Sie nicht mehrere Werte für denselben Header setzen konnten. ([Firefox Fehler 1904379](https://bugzil.la/1904379))
- Ein Fehler in der `unhandledPromptBehavior`-Fähigkeit behoben, die nicht mit BiDi-only-Sitzungen verwendet werden konnte. ([Firefox Fehler 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` behoben, die unerwartet fehlschlugen, wenn kein Marionette-Client verbunden war. ([Firefox Fehler 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` behoben, der fehlte, sich zu lösen, wenn eine gleich-Dokument-Navigation auf "beforeunload" begann. ([Firefox Fehler 1879163](https://bugzil.la/1879163))
- Den `browser.close`-Befehl verbessert, um alle "beforeunload"-Prompts beim Schließen der Top-Level-Browsing-Kontexte zu verwerfen. ([Firefox Fehler 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis behoben, bei dem unerwartet das `defaultValue`-Feld fehlte ([Firefox Fehler 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis während Authentifizierungsflüssen behoben, das zu viele Male im Vergleich zu den Spezifikationen gesendet wurde. Nur ein `responseCompleted` (oder `fetchError`)-Ereignis wird für den gesamten HTTP-Authentifizierungsfluss erwartet. ([Firefox Fehler 1906106](https://bugzil.la/1906106))
- Den `browser.removeUserContext`-Befehl verbessert, um alle "beforeunload"-Prompts zu überspringen. ([Firefox Fehler 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
