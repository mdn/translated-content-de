---
title: Firefox 129 für Entwickler
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Sie ermöglicht es, Startwerte für Eigenschaften zu definieren, die auf einem Element gesetzt werden, von denen aus Sie übergehen möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie angeben, ob diskrete Eigenschaften, wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Wertes auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) übergangsfähig sind. ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision für Speicherverbrauch zu tauschen. ([Firefox-Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Diskjunctions-Alternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da immer nur eine Alternative in einer Diskjunktion übereinstimmt, sodass ein Name, der in mehreren Alternativen deklariert ist, nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im gesamten Rest des Musters weiterhin einzigartig sein. ([Firefox-Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können nun mithilfe des DNS-Resolvers des Betriebssystems auf Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Nutzung von HTTP/3, ohne dass der {{httpheader("Alt-Svc")}}-Header verwendet werden muss, und ermöglicht das automatische Upgrade von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass es jetzt die Nutzung der Datenschutzfunktion [Verschlüsseltes Client-Hallo (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) ermöglicht, auch wenn DoH nur auf dem Gerät aktiviert ist, nicht im Browser. ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird jetzt unterstützt, was es Web-Apps ermöglicht, die veraltete Bibliotheken oder Frameworks verwenden, die auf diesen Ereignissen basieren.
  Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden.
  ([Firefox-Bug 1901923](https://bugzil.la/1901923).)
- Die Standardmethoden `.toJSON()` [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt, was die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — was der aktuellen Spezifikation entspricht.
  Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften freilegt, anstatt aller Eigenschaften, und löst auch ein Problem, bei dem das Festlegen der Seite [`size`](/de/docs/Web/CSS/@page/size) in einer CSS-`@page`-Regel nicht in `CSSPageRule.style` widergespiegelt wurde.
  ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien abrufen, sodass Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt flüssig wiedergeben und energieeffizient sein wird. Änderungen umfassen eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des verwendeten Schlüsselsystems zur Verschlüsselung der Medien definiert, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und den Inhalt zur Wiedergabe zu dekodieren. ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst nun Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für eine laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites beheben sollte, es aber auch zu einer verschlechterten Leistung auf Websites führen kann, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung behoben werden sollte, aber weiterhin verwandte Probleme aufweist. ([Firefox-Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519)-Algorithmus für digitale Signaturen wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden jetzt unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode an. ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird jetzt unterstützt. Sie ermöglicht es Ihnen zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn dies unterstützt wird, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) nun deaktiviert. Es kann über die `remote.active-protocols`-Einstellung reaktiviert werden. Mehr dazu erfahren Sie im folgenden [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox-Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den `network.setCacheBehavior`-Befehl hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass der Netzwerk-Cache entweder global oder für eine Reihe von Top-Level-Browsing-Kontexten umgangen wird. ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Aufforderungen des Typs `beforeUnload` hinzugefügt, die nun auf die gleiche Weise wie andere Benutzeraufforderungen behandelt werden können. ([Firefox-Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den `network.provideResponse`-Befehl, wenn er in der `beforeRequestSent`-Phase verwendet wird, wie z. B. den `body`-Parameter, der es ermöglicht, Mock-Antworten zurückzugeben. ([Firefox-Bug 1853882](https://bugzil.la/1853882))
- Das `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den für die Aufforderung konfigurierten Benutzeraufforderungs-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox-Bug 1904822](https://bugzil.la/1904822))
- Der Typ `BrowsingContextInfo` wird nun ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Öffners" Browsing-Kontextes ist. Dies wird zum Beispiel gesetzt, wenn der neue Kontext durch die Verwendung eines Links (auch mit `rel=noopener`), `window.open` etc. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Öffner hat, wird das Feld auf null gesetzt. ([Firefox-Bug 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen an Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox-Bug 1805176](https://bugzil.la/1805176))
- Wir haben die Unterstützung für das `promptUnload`-Argument für `browsingContext.close` hinzugefügt, das es ermöglicht, "beforeunload"-Aufforderungen beim Schließen eines Kontextes über diesen Befehl zu umgehen. ([Firefox-Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header setzen konnten. ([Firefox-Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler mit der `unhandledPromptBehavior`-Fähigkeit wurde behoben, die in BiDi-Only-Sitzungen nicht verwendet werden konnte. ([Firefox-Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` wurde behoben, der unerwarteterweise fehlschlug, wenn kein Marionette-Client verbunden war. ([Firefox-Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` wurde behoben, der es nicht lösen konnte, wenn eine Navigation im selben Dokument bei "beforeunload" begann. ([Firefox-Bug 1879163](https://bugzil.la/1879163))
- Der Befehl `browser.close` wurde verbessert, um alle "beforeunload"-Aufforderungen beim Schließen der Top-Level-Browsing-Kontexte zu verwerfen. ([Firefox-Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis wurde behoben, bei dem das `defaultValue`-Feld unerwarteterweise fehlte ([Firefox-Bug 1859814](https://bugzil.la/1859814))
- Ein Problem beim `network.responseCompleted`-Ereignis während Authentifizierungsabläufen wurde behoben, das zu oft im Vergleich zu den Spezifikationen emittiert wurde. Nur ein `responseCompleted` (oder `fetchError`)-Ereignis wird für den gesamten HTTP-Authentifizierungsfluss erwartet. ([Firefox-Bug 1906106](https://bugzil.la/1906106))
- Der Befehl `browser.removeUserContext` wurde verbessert, um alle "beforeunload"-Aufforderungen zu umgehen. ([Firefox-Bug 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
