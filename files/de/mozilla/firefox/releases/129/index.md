---
title: Firefox 129 Release Notes für Entwickler
short-title: Firefox 129
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/Reference/At-rules/@starting-style) wird unterstützt. Damit können Sie für ein Element Anfangswerte für Eigenschaften definieren, von denen Sie eine Transition durchführen möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die CSS-Eigenschaft {{CSSXRef("transition-behavior")}} wird unterstützt. Damit können Sie angeben, ob diskrete Eigenschaften wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}} durch Setzen auf den Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) übergehen können ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} Typisierte Arrays werden nun unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen ([Firefox-Bug 1903329](https://bugzil.la/1903329)).
- Reguläre Ausdrücke können nun denselben Namen für [benannte Gruppenerfassungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in unterschiedlichen [Alternativen der Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Disjunktion übereinstimmt, sodass ein Name, der in mehreren Alternativen deklariert ist, nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen immer noch eindeutig innerhalb einer bestimmten Alternative und im gesamten restlichen Muster sein ([Firefox-Bug 1903288](https://bugzil.la/1903288)).

### HTTP

- HTTPS-DNS-Einträge können nun auf Windows 11, Linux und Android 10+ mit dem DNS-Resolver des Betriebssystems aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es im Browser nicht aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3, ohne den {{httpheader("Alt-Svc")}}-Header verwenden zu müssen, und ermöglicht ein automatisches Upgrade von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass die Verwendung der Datenschutzfunktion [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) nun auch dann möglich ist, wenn DoH nur auf dem Gerät aktiviert ist, nicht im Browser ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird nun unterstützt, wodurch Web-Apps, die auf veraltete Bibliotheken oder Frameworks angewiesen sind, die diese Ereignisse nutzen, wieder voll funktionsfähig sind. Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden ([Firefox-Bug 1901923](https://bugzil.la/1901923)).
- Die Standardmethoden `.toJSON()` [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden nun unterstützt und ermöglichen die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird nun unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — entsprechend der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften offenlegt, anstatt aller Eigenschaften, und behebt auch ein Problem, bei dem das Setzen der Seite [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size) in einer CSS-`@page`-At-Regel nicht in `CSSPageRule.style` reflektiert wurde ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106)).
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien abrufen, sodass Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob die Inhalte reibungslos abgespielt und stromsparend sein werden. Zu den Änderungen gehört eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zur Verschlüsselung der Medien verwendet wird, sowie eine neue Eigenschaft `keySystemAccess` im zurückgegebenen Objekt, die ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt ist, mit dem Schlüssel erstellt und der Inhalt zur Wiedergabe dekodiert werden kann ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst nun Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Seiten reparieren sollte, auf Seiten, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten, jedoch auch die Leistung beeinträchtigen kann. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, jedoch immer noch verwandte Probleme aufweist ([Firefox-Bug 697151](https://bugzil.la/697151)).
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519)-Algorithmus für digitale Signaturen wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces werden nun unterstützt und zeigen den Inhaltstyp der abgerufenen Ressource sowie den HTTP-Antwortstatuscode an, der beim Abrufen der Ressource zurückgegeben wurde ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785)).
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird nun unterstützt. Sie ermöglicht Ihnen zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Falls unterstützt, können Sie DTMF-Töne mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) nun deaktiviert. Es kann über die `remote.active-protocols`-Einstellung wieder aktiviert werden. Mehr darüber erfahren Sie im folgenden [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/) ([Firefox-Bug 1882089](https://bugzil.la/1882089)).

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` wurde hinzugefügt, mit dem Sie den Browser so konfigurieren können, dass der Netzwerk-Cache entweder global oder für eine Reihe von obersten Browserkontexten umgangen wird ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100)).
- Unterstützung für Eingabeaufforderungen des Typs `beforeUnload` wurde hinzugefügt, die nun auf die gleiche Weise wie andere Benutzereingabeaufforderungen behandelt werden können ([Firefox-Bug 1824220](https://bugzil.la/1824220)).
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn er in der Phase `beforeRequestSent` verwendet wird, wie z. B. das `body`-Parameter, das Ihnen ermöglicht, Mock-Antworten zurückzugeben ([Firefox-Bug 1853882](https://bugzil.la/1853882)).
- Der `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den Benutzereingabeaufforderungs-Handler enthält, der für die Eingabeaufforderung konfiguriert wurde, die das Ereignis ausgelöst hat ([Firefox-Bug 1904822](https://bugzil.la/1904822)).
- Der Typ `BrowsingContextInfo` wird jetzt ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Opener"-Browsing-Kontexts ist. Dies wird z. B. gesetzt, wenn der neue Kontext durch Verwenden eines Links (auch mit `rel=noopener`), `window.open` usw. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Opener hat, wird das Feld auf null gesetzt ([Firefox-Bug 1898004](https://bugzil.la/1898004)).
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden nun für Anfragen an Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet ([Firefox-Bug 1805176](https://bugzil.la/1805176)).
- Wir haben Unterstützung für das `promptUnload`-Argument für `browsingContext.close` hinzugefügt, das Ihnen ermöglicht, "beforeunload"-Eingabeaufforderungen zu umgehen, wenn Sie einen Kontext über diesen Befehl schließen ([Firefox-Bug 1862380](https://bugzil.la/1862380)).
- Ein Fehler in `network.continueRequest` wurde behoben, bei dem Sie keine mehrfachen Werte für denselben Header setzen konnten ([Firefox-Bug 1904379](https://bugzil.la/1904379)).
- Ein Fehler für die `unhandledPromptBehavior`-Fähigkeit wurde behoben, der nicht mit ausschließlich BiDi-Sitzungen verwendet werden konnte ([Firefox-Bug 1907935](https://bugzil.la/1907935)).
- Ein Fehler mit `session.end` und `browser.close` wurde behoben, der unerwartet fehlschlug, wenn kein Marionette-Client verbunden war ([Firefox-Bug 1890091](https://bugzil.la/1890091)).
- Ein Fehler mit `browsingContext.navigate` wurde behoben, der zu einer nicht auflösbaren Antwort führte, wenn eine same-document-Navigation auf "beforeunload" begann ([Firefox-Bug 1879163](https://bugzil.la/1879163)).
- Der `browser.close`-Befehl wurde verbessert, um alle "beforeunload"-Eingabeaufforderungen zu verwerfen, wenn die obersten Browsing-Kontexte geschlossen werden ([Firefox-Bug 1873196](https://bugzil.la/1873196)).
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis wurde behoben, bei dem unerwartet das `defaultValue`-Feld fehlte ([Firefox-Bug 1859814](https://bugzil.la/1859814)).
- Ein Problem mit dem `network.responseCompleted`-Ereignis während der Authentifizierungsflüsse wurde behoben, bei dem es zu oft im Vergleich zu den Spezifikationen ausgelöst wurde. Es wird nur ein `responseCompleted`- (oder `fetchError`-)Ereignis für den gesamten HTTP-Authentifizierungsfluss erwartet ([Firefox-Bug 1906106](https://bugzil.la/1906106)).
- Der `browser.removeUserContext`-Befehl wurde verbessert, um alle "beforeunload"-Eingabeaufforderungen zu überspringen ([Firefox-Bug 1876062](https://bugzil.la/1876062)).
