---
title: Firefox 129 Versionshinweise für Entwickler
short-title: Firefox 129
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/Reference/At-rules/@starting-style) wird unterstützt. Damit können Sie Startwerte für Eigenschaften definieren, die an einem Element gesetzt sind, von denen aus Sie eine Übergangsanimation beginnen möchten, wenn das Element sein erstes Style-Update erhält. Momentan wird das Animieren von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie angeben, ob diskrete Eigenschaften wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}} durch Übergänge mit dem Wert [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) animiert werden können. ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}} und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox-Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Verknüpfungsalternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Verknüpfung übereinstimmen wird, sodass ein Name, der in mehreren Alternativen deklariert ist, nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im gesamten restlichen Muster dennoch eindeutig sein. ([Firefox-Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können jetzt mithilfe des DNS-Resolvers des Betriebssystems auf Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Verwendung von HTTP/3 ohne die Notwendigkeit, den {{httpheader("Alt-Svc")}}-Header zu verwenden und ermöglicht die automatische Aktualisierung von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass es jetzt die Verwendung der Datenschutzfunktion [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) ermöglicht, auch wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent)-Ereignis wird jetzt unterstützt, was es Webanwendungen ermöglicht, die auf veraltete Bibliotheken oder Frameworks setzen, die auf diese Ereignisse angewiesen sind. Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden. ([Firefox-Bug 1901923](https://bugzil.la/1901923).)
- Die Standard-`.toJSON()`-Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden jetzt unterstützt, was die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird jetzt unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — entsprechend der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften bereitstellt, anstatt alle Eigenschaften, und löst auch ein Problem, bei dem das Setzen der Seite [`size`](/de/docs/Web/CSS/Reference/At-rules/@page/size) in einer CSS-`@page`-At-Regel nicht in `CSSPageRule.style` widergespiegelt wurde. ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann jetzt Entkodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien erhalten, sodass Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos abspielen und energieeffizient sein wird. Änderungen beinhalten eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselverwaltungssystems definiert, das verwendet wird, um das Medium zu verschlüsseln, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und den Inhalt zur Wiedergabe zu dekodieren. ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst jetzt Ereignisse für eine synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) aus, bevor die Ereignisse für jede laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites reparieren sollte, aber möglicherweise auch die Leistung auf Websites verschlechtert, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber immer noch verwandte Probleme aufweist. ([Firefox-Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den Methoden [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die Eigenschaften [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) des Interfaces [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) werden jetzt unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurück, der bei der Abfrage der Ressource zurückgegeben wurde. ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785).)
- Die Eigenschaft [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) wird jetzt unterstützt. Damit können Sie überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn unterstützt, können Sie DTMF-Töne durch Nutzung von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) einfügen. ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die `remote.active-protocols`-Einstellung wieder aktiviert werden. Sie können mehr dazu im folgenden [Blog-Beitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/) erfahren. ([Firefox-Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den `network.setCacheBehavior`-Befehl wurde hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass entweder global oder für eine Reihe von obersten Browsing-Kontexten der Netzwerk-Cache umgangen wird. ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Eingabeaufforderungen des Typs `beforeUnload` wurde hinzugefügt, die jetzt auf die gleiche Weise behandelt werden können wie andere Eingabeaufforderungen. ([Firefox-Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den `network.provideResponse`-Befehl, wenn er in der Phase `beforeRequestSent` verwendet wird, wie den `body`-Parameter, der es ermöglicht, simulierte Antworten zurückzugeben. ([Firefox-Bug 1853882](https://bugzil.la/1853882))
- Das `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den Benutzereingabeaufforderungs-Handler enthält, der für die Eingabeaufforderung konfiguriert ist, die das Ereignis ausgelöst hat. ([Firefox-Bug 1904822](https://bugzil.la/1904822))
- Der Typ `BrowsingContextInfo` wird jetzt ein `originalOpener`-Feld bereitstellen, das die Kontext-ID des "Opener"-Browsing-Kontexts ist. Dies wird zum Beispiel gesetzt, wenn der neue Kontext durch Anklicken eines Links erstellt wurde (selbst mit `rel=noopener`), `window.open` usw. Wenn der neue Browsing-Kontext keinen relevanten Opener hat, wird das Feld auf null gesetzt. ([Firefox-Bug 1898004](https://bugzil.la/1898004))
- Netzwerkevents (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox-Bug 1805176](https://bugzil.la/1805176))
- Unterstützung für das `promptUnload`-Argument für `browsingContext.close` wurde hinzugefügt, das es ermöglicht, "beforeunload"-Ereignisse zu umgehen, wenn ein Kontext über diesen Befehl geschlossen wird. ([Firefox-Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler im `network.continueRequest` wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header setzen konnten. ([Firefox-Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler in der Fähigkeit `unhandledPromptBehavior` wurde behoben, der bei reinen BiDi-Sitzungen nicht verwendet werden konnte. ([Firefox-Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler in `session.end` und `browser.close` wurde behoben, bei dem es unerwartet fehlschlug, wenn kein Marionette-Client verbunden war. ([Firefox-Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler bei `browsingContext.navigate` wurde behoben, der fehlschlug, wenn eine gleiche Dokumentnavigation bei "beforeunload" begann. ([Firefox-Bug 1879163](https://bugzil.la/1879163))
- Der `browser.close`-Befehl wurde verbessert, um alle "beforeunload"-Ereignisse beim Schließen der obersten Browsing-Kontexte zu verwerfen. ([Firefox-Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened`-Ereignis wurde behoben, bei dem das `defaultValue`-Feld unerwartet fehlte ([Firefox-Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis bei Authentifizierungsabläufen wurde behoben, das zu oft im Vergleich zu den Spezifikationen ausgelöst wurde. Für den gesamten HTTP-Authentifizierungsfluss wird nur ein einziges `responseCompleted`- (oder `fetchError`-)Ereignis erwartet. ([Firefox-Bug 1906106](https://bugzil.la/1906106))
- Der `browser.removeUserContext`-Befehl wurde verbessert, um alle "beforeunload"-Ereignisse zu überspringen. ([Firefox-Bug 1876062](https://bugzil.la/1876062))
