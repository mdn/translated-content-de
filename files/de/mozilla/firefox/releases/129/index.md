---
title: Firefox 129 für Entwickler
short-title: Firefox 129
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die [@starting-style](/de/docs/Web/CSS/@starting-style) CSS-At-Regel wird unterstützt. Damit können Sie Startwerte für Eigenschaften definieren, die auf ein Element gesetzt wurden, von denen Sie ausgehend eine Transition starten möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox Bug 1834876](https://bugzil.la/1834876) und [Firefox Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie festlegen, ob diskrete Eigenschaften, wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Werts auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) animiert werden können. ([Firefox Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}}-typisierte Arrays werden jetzt unterstützt, ebenso wie {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und die statische Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich für den Datenaustausch mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Genauigkeit zugunsten des Speicherverbrauchs zu opfern. ([Firefox Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Alternativen der Verkettung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Verkettung übereinstimmen wird, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im gesamten restlichen Muster dennoch einzigartig sein. ([Firefox Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können jetzt mithilfe des DNS-Resolvers des Betriebssystems in Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS-over-HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn es auf dem Gerät aktiviert ist, auch wenn es im Browser nicht aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3, ohne den {{httpheader("Alt-Svc")}}-Header verwenden zu müssen, und ermöglicht das automatische Upgrade von HTTP-Anfragen zu HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass die Verwendung der [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello)-Datenschutzfunktion jetzt auch möglich ist, wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird jetzt unterstützt, was es Web-Apps ermöglicht, die auf veraltete Bibliotheken oder Frameworks angewiesen sind, die auf diesen Ereignissen basieren.
  Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden.
  ([Firefox Bug 1901923](https://bugzil.la/1901923).)
- Die Standard-`.toJSON()`-Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt, was die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — in Übereinstimmung mit der aktuellen Spezifikation.
  Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften offenlegt, anstatt alle Eigenschaften, und behebt auch ein Problem, bei dem das Festlegen der Seite [`size`](/de/docs/Web/CSS/@page/size) in einer CSS-`@page`-At-Regel nicht in `CSSPageRule.style` widerspiegelt wurde.
  ([Firefox Bug 1890842](https://bugzil.la/1890842), [Firefox Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann jetzt Dekodierungsinformationen für eine bestimmte _verschlüsselte Medieneinrichtung_ sowie unverschlüsseltes Medium erhalten, sodass Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos wiedergeben und stromsparend sein wird. Zu den Änderungen gehört eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung des Mediums verwendet wird, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt ist, das verwendet werden kann, um Schlüssel zu erzeugen und den Inhalt zur Wiedergabe zu dekodieren. ([Firefox Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst jetzt Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest`-Anfragen ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites verbessern sollte, es aber auch zu Leistungseinbußen auf Websites führen kann, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber weiterhin verwandte Probleme aufweist. ([Firefox Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519)-Digitale-Signatur-Algorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox Bug 1804788](https://bugzil.la/1804788)).
- Die [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus)-Eigenschaften der [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Schnittstelle werden jetzt unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurück, der beim Abrufen der Ressource zurückgegeben wird. ([Firefox Bug 1800443](https://bugzil.la/1800443), [Firefox Bug 1796785](https://bugzil.la/1796785).)
- Die [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF)-Eigenschaft wird jetzt unterstützt. Sie ermöglicht es Ihnen zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn unterstützt, können Sie DTMF-Töne mithilfe von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)-Methode wurde entfernt ([Firefox Bug 1653318](https://bugzil.la/1653318), [Firefox Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die Einstellung `remote.active-protocols` wieder aktiviert werden. Sie können mehr darüber im folgenden [Blogpost](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/) erfahren. ([Firefox Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` hinzugefügt, der es ermöglicht, den Browser zu konfigurieren, um den Netzwerkcache entweder global oder für eine Gruppe von Top-Level-Browsing-Kontexten zu umgehen. ([Firefox Bug 1901032](https://bugzil.la/1901032) und [Firefox Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für `beforeUnload`-Eingabeaufforderungen hinzugefügt, die jetzt auf die gleiche Weise wie andere Benutzereingabeaufforderungen behandelt werden können. ([Firefox Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn dieser in der Phase `beforeRequestSent` verwendet wird, wie den Parameter `body`, der es ermöglicht, simulierte Antworten zurückzugeben. ([Firefox Bug 1853882](https://bugzil.la/1853882))
- Der `browsingContext.userPromptOpened`-Ereignis enthält jetzt das Feld `handler`, das den Benutzereingabeaufforderungs-Handler enthält, der für die Eingabeaufforderung konfiguriert ist, die das Ereignis ausgelöst hat. ([Firefox Bug 1904822](https://bugzil.la/1904822))
- Der `BrowsingContextInfo`-Typ wird jetzt ein Feld `originalOpener` bereitstellen, das die Kontext-ID des "Opener"-Browsing-Kontextes ist. Dies wird beispielsweise gesetzt, wenn der neue Kontext durch die Verwendung eines Links (auch bei `rel=noopener`), `window.open` usw. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Opener hat, wird das Feld auf null gesetzt. ([Firefox Bug 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen an Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgeführt. ([Firefox Bug 1805176](https://bugzil.la/1805176))
- Wir haben Unterstützung für das Argument `promptUnload` für `browsingContext.close` hinzugefügt, das es ermöglicht, "beforeunload"-Eingabeaufforderungen zu umgehen, wenn ein Kontext über diesen Befehl geschlossen wird. ([Firefox Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` behoben, bei dem nicht mehrere Werte für denselben Header gesetzt werden konnten. ([Firefox Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler für die `unhandledPromptBehavior`-Fähigkeit behoben, die nicht mit nur-BiDi-Sitzungen verwendet werden konnte. ([Firefox Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` behoben, die unerwartet fehlschlugen, wenn kein Marionette-Client verbunden war. ([Firefox Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler bei `browsingContext.navigate` behoben, der nicht aufgelöst werden konnte, wenn eine Gleichdokument-Navigation bei "beforeunload" gestartet wurde. ([Firefox Bug 1879163](https://bugzil.la/1879163))
- Den `browser.close`-Befehl verbessert, um alle "beforeunload"-Eingabeaufforderungen zu verwerfen, wenn die Top-Level-Browsing-Kontexte geschlossen werden. ([Firefox Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis behoben, bei dem das `defaultValue`-Feld unerwartet fehlte ([Firefox Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis während Authentifizierungsabläufen behoben, das zu oft im Vergleich zu den Spezifikationen ausgelöst wurde. Nur ein `responseCompleted`- (oder `fetchError`-) Ereignis wird für den gesamten HTTP-Authentifizierungsablauf erwartet. ([Firefox Bug 1906106](https://bugzil.la/1906106))
- Den `browser.removeUserContext`-Befehl verbessert, um alle "beforeunload"-Eingabeaufforderungen zu überspringen. ([Firefox Bug 1876062](https://bugzil.la/1876062))
