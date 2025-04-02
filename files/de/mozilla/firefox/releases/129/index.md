---
title: Firefox 129 für Entwickler
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Diese ermöglicht es, Anfangswerte für Eigenschaften zu definieren, die auf einem Element festgelegt sind und von denen aus Sie eine Transition starten möchten, wenn das Element sein erstes Style-Update erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox-Fehler 1834876](https://bugzil.la/1834876) und [Firefox-Fehler 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie festlegen, ob diskrete Eigenschaften wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}} durch Setzen des Werts auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) übergegangen werden können. ([Firefox-Fehler 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der standardmäßigen {{cssxref("font-feature-settings")}} Eigenschaft implementiert ([Firefox-Fehler 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Festlegen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch einzutauschen. ([Firefox-Fehler 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Alternativen der Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, weil nur eine Alternative in einer Disjunktion übereinstimmen wird, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen nach wie vor innerhalb einer bestimmten Alternative und im gesamten Muster eindeutig sein. ([Firefox-Fehler 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS DNS-Einträge können jetzt mithilfe des DNS-Resolvers des Betriebssystems unter Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3 ohne die {{httpheader("Alt-Svc")}}-Header zu verwenden und ermöglicht das automatische Upgrade von HTTP-Anforderungen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass es jetzt möglich ist, die Datenschutzfunktion [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) zu verwenden, auch wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox-Fehler 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird jetzt unterstützt und ermöglicht Web-Apps, die veraltete Bibliotheken oder Frameworks verwenden, die auf diese Ereignisse angewiesen sind.
  Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte von neuen Anwendungen immer verwendet werden.
  ([Firefox-Fehler 1901923](https://bugzil.la/1901923).)
- Die Standard-Methoden `.toJSON()` [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt und ermöglichen die Serialisierung von `GeolocationCoordinates` und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ([Firefox-Fehler 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) verwendet — entsprechend der aktuellen Spezifikation.
  Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften exponiert, anstatt aller Eigenschaften, und behebt auch ein Problem, bei dem das Festlegen der Seitengröße [`size`](/de/docs/Web/CSS/@page/size) in einer CSS-`@page`-At-Regel nicht in `CSSPageRule.style` widergespiegelt wurde.
  ([Firefox-Fehler 1890842](https://bugzil.la/1890842), [Firefox-Fehler 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann jetzt Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien abrufen, was es Anwendungen ermöglicht, im Voraus zu wissen, ob die Konfiguration unterstützt wird und ob die Inhalte flüssig abgespielt werden und stromsparend sind. Zu den Änderungen gehört eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung der Medien verwendet wird, sowie eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und die Inhalte zur Wiedergabe zu dekodieren. ([Firefox-Fehler 1898344](https://bugzil.la/1898344)).
- Firefox löst jetzt Ereignisse für ein synchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass diese Änderung zwar einige Seiten beheben sollte, aber auch zu einer verschlechterten Leistung auf Seiten führen kann, die das alte "nicht blockierende" Verhalten für ein synchrones `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung behoben werden sollte, aber immer noch verwandte Probleme aufweist. ([Firefox-Fehler 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Fehler 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden jetzt unterstützt und zeigen den Inhaltstyp der abgerufenen Ressource sowie den HTTP-Antwortstatuscode an, der beim Abrufen der Ressource zurückgegeben wurde. ([Firefox-Fehler 1800443](https://bugzil.la/1800443), [Firefox-Fehler 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird jetzt unterstützt. Sie ermöglicht es Ihnen zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn es unterstützt wird, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox-Fehler 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Fehler 1653318](https://bugzil.la/1653318), [Firefox-Fehler 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die Einstellung `remote.active-protocols` wieder aktiviert werden. Weitere Informationen finden Sie in diesem [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox-Fehler 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass der Netzwerkcache entweder global oder für eine Reihe von obersten Web-Kontexten umgangen wird. ([Firefox-Fehler 1901032](https://bugzil.la/1901032) und [Firefox-Fehler 1906100](https://bugzil.la/1906100))
- Unterstützung für Eingabeaufforderungen vom Typ `beforeUnload` hinzugefügt, die jetzt wie andere Benutzereingabeaufforderungen behandelt werden können. ([Firefox-Fehler 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn er in der Phase `beforeRequestSent` verwendet wird, z. B. den Parameter `body`, der es ermöglicht, simulierte Antworten zurückzugeben. ([Firefox-Fehler 1853882](https://bugzil.la/1853882))
- `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den Benutzereingabeaufforderungshandler enthält, der für die Eingabeaufforderung konfiguriert ist, die das Ereignis ausgelöst hat. ([Firefox-Fehler 1904822](https://bugzil.la/1904822))
- Der Typ `BrowsingContextInfo` wird jetzt ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Opener"-Browserkontexts ist. Dies wird zum Beispiel gesetzt, wenn der neue Kontext durch die Verwendung eines Links (auch mit `rel=noopener`), `window.open` usw. erstellt wurde. Wenn der neue Browserkontext keinen relevanten Opener hat, wird das Feld auf null gesetzt. ([Firefox-Fehler 1898004](https://bugzil.la/1898004))
- Netzwerkevents (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox-Fehler 1805176](https://bugzil.la/1805176))
- Wir haben Unterstützung für das `promptUnload`-Argument in `browsingContext.close` hinzugefügt, das es ermöglicht, "beforeunload"-Eingabeaufforderungen zu umgehen, wenn ein Kontext über diesen Befehl geschlossen wird. ([Firefox-Fehler 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header festlegen konnten. ([Firefox-Fehler 1904379](https://bugzil.la/1904379))
- Ein Fehler in der `unhandledPromptBehavior`-Fähigkeit wurde behoben, der nicht mit BiDi-only-Sitzungen verwendet werden konnte. ([Firefox-Fehler 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` wurde behoben, bei dem es unerwartet fehlschlug, wenn kein Marionette-Client verbunden war. ([Firefox-Fehler 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` wurde behoben, der sich nicht auflösen ließ, wenn eine Navigation im gleichen Dokument bei "beforeunload" startete. ([Firefox-Fehler 1879163](https://bugzil.la/1879163))
- Der Befehl `browser.close` wurde verbessert, um alle "beforeunload"-Eingabeaufforderungen zu verwerfen, wenn die obersten Browserkontexte geschlossen werden. ([Firefox-Fehler 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis wurde behoben, das unerwartet das `defaultValue`-Feld vermissen ließ ([Firefox-Fehler 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted` Ereignis während Authentifizierungsflüssen wurde behoben, das zu oft im Vergleich zu den Spezifikationen ausgelöst wurde. Es wird nur ein `responseCompleted`- (oder `fetchError`-)Ereignis für den gesamten HTTP-Authentifizierungsfluss erwartet. ([Firefox-Fehler 1906106](https://bugzil.la/1906106))
- Der Befehl `browser.removeUserContext` wurde verbessert, um alle "beforeunload"-Eingabeaufforderungen zu überspringen. ([Firefox-Fehler 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
