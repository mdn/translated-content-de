---
title: Versionshinweise für Entwickler von Firefox 129
short-title: Firefox 129
slug: Mozilla/Firefox/Releases/129
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 129, die Entwickler betreffen. Firefox 129 wurde am [6. August 2024](https://whattrainisitnow.com/release/?version=129) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Diese ermöglicht es, Startwerte für Eigenschaften zu definieren, die bei einem Element festgelegt werden, von denen Sie aus animieren möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox-Bug 1834876](https://bugzil.la/1834876) und [Firefox-Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Sie ermöglicht das Festlegen, ob diskrete Eigenschaften, wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}}, durch Setzen des Werts auf [`allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) übergeleitet werden können. ([Firefox-Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der Standard-Eigenschaft {{cssxref("font-feature-settings")}} implementiert ([Firefox-Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} getypte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere in Anwendungsfällen, in denen es sinnvoll ist, auf Präzision zugunsten des Speicherverbrauchs zu verzichten. ([Firefox-Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können nun denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Disjunktions-Alternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Disjunktion übereinstimmen wird, sodass ein Name, der in mehreren Alternativen deklariert ist, nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen innerhalb einer bestimmten Alternative und im restlichen Muster immer noch eindeutig sein. ([Firefox-Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können nun mithilfe des DNS-Resolvers des Betriebssystems unter Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es nicht im Browser aktiviert ist. Diese Funktion ermöglicht die Nutzung von HTTP/3, ohne den {{httpheader("Alt-Svc")}} Header verwenden zu müssen, und ermöglicht sogar automatische Upgrades von HTTP-Anfragen auf HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass es nun die Verwendung der [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) Datenschutzfunktion ermöglicht, selbst wenn DoH nur auf dem Gerät aktiviert ist, nicht im Browser. ([Firefox-Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete [`textInput`](/de/docs/Web/API/TextEvent) Ereignis wird nun unterstützt, wodurch Web-Apps, die ältere Bibliotheken oder Frameworks verwenden, die auf diese Ereignisse angewiesen sind, laufen können.
  Das [`beforeinput` event](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte von neuen Anwendungen immer verwendet werden. ([Firefox-Bug 1901923](https://bugzil.la/1901923).)
- Die standardmäßigen `.toJSON()` Methoden [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) und [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON) werden nun unterstützt, was die Serialisierung von `GeolocationCoordinates` und `GeolocationPosition` Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox-Bug 1890706](https://bugzil.la/1890706)).
- [`CSSPageDescriptors`](/de/docs/Web/API/CSSPageDescriptors) wird nun unterstützt und wird als Typ für [`CSSPageRule.style`](/de/docs/Web/API/CSSPageRule/style) anstelle von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) verwendet — entsprechend der aktuellen Spezifikation.
  Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page` bezogenen Eigenschaften offenlegt, statt aller Eigenschaften, und löst auch ein Problem, bei dem das Setzen der Seite [`size`](/de/docs/Web/CSS/@page/size) in einer CSS `@page` At-Regel nicht in `CSSPageRule.style` widergespiegelt wurde.
  ([Firefox-Bug 1890842](https://bugzil.la/1890842), [Firefox-Bug 1867106](https://bugzil.la/1867106).)
- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) kann nun Decodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien abrufen, sodass Anwendungen im Voraus erkennen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos abspielen und energieeffizient sein wird. Zu den Änderungen gehört eine neue Eigenschaft `keySystemConfiguration` im `configuration`-Argument der Methode, die die Eigenschaften des Schlüsselsystems definiert, das zum Verschlüsseln der Medien verwendet wird, sowie eine neue Eigenschaft `keySystemAccess` im zurückgegebenen Objekt, das ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt ist, das zum Erstellen von Schlüsseln und Decodieren der Inhalte für die Wiedergabe verwendet werden kann. ([Firefox-Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst nun Ereignisse für ein synchrones [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), bevor die Ereignisse für ein laufendes asynchrones `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass dies zwar einige Websites beheben sollte, es jedoch auch zu einer Verschlechterung der Leistung auf Websites führen kann, die das alte „nicht blockierende“ Verhalten für ein synchrones `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber weiterhin verwandte Probleme aufweist. ([Firefox-Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Methoden verwendet werden: [`sign()`](/de/docs/Web/API/SubtleCrypto/sign), [`verify()`](/de/docs/Web/API/SubtleCrypto/verify), [`generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey), [`importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`exportKey()`](/de/docs/Web/API/SubtleCrypto/exportKey) ([Firefox-Bug 1804788](https://bugzil.la/1804788)).
- Die [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) und [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) Eigenschaften der [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle werden nun unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurück, der bei der Abfrage der Ressource zurückgegeben wurde. ([Firefox-Bug 1800443](https://bugzil.la/1800443), [Firefox-Bug 1796785](https://bugzil.la/1796785).)
- Die [`RTCDTMFSender.canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) Eigenschaft wird nun unterstützt. Sie ermöglicht es, zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn unterstützt, können Sie DTMF-Töne einfügen, indem Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) verwenden. ([Firefox-Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) Methode wurde entfernt ([Firefox-Bug 1653318](https://bugzil.la/1653318), [Firefox-Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die `remote.active-protocols`-Einstellung wieder aktiviert werden. Weitere Informationen dazu finden Sie im folgenden [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox-Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass der Netzwerk-Cache entweder global oder für eine Gruppe von obersten Browser-Kontexten umgangen wird. ([Firefox-Bug 1901032](https://bugzil.la/1901032) und [Firefox-Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Aufforderungen vom Typ `beforeUnload` hinzugefügt, die nun auf die gleiche Weise wie andere Benutzeraufforderungen behandelt werden können. ([Firefox-Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen nun alle Argumente für den `network.provideResponse` Befehl, wenn dieser in der Phase `beforeRequestSent` verwendet wird, wie z.B. den `body` Parameter, der es ermöglicht, gefälschte Antworten zurückzugeben. ([Firefox-Bug 1853882](https://bugzil.la/1853882))
- `browsingContext.userPromptOpened` enthält nun das `handler` Feld, das den für die Aufforderung konfigurierten Benutzeraufforderungs-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox-Bug 1904822](https://bugzil.la/1904822))
- Der `BrowsingContextInfo` Typ wird jetzt ein `originalOpener` Feld bereitstellen, das die Kontext-ID des "Öffners" Browsing-Kontexts ist. Dies wird z.B. gesetzt, wenn der neue Kontext durch ein Link (auch mit `rel=noopener`), `window.open` etc. erstellt wurde. Wenn der neue Browsing-Kontext keinen relevanten Öffner hat, wird das Feld auf null gesetzt. ([Firefox-Bug 1898004](https://bugzil.la/1898004))
- Netzwerkevents (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden nun für Anfragen zu Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanforderungen aufgelistet. ([Firefox-Bug 1805176](https://bugzil.la/1805176))
- Wir haben die Unterstützung für das Argument `promptUnload` bei `browsingContext.close` hinzugefügt, das es ermöglicht, „unbeforeunload“-Aufforderungen zu umgehen, wenn Sie einen Kontext über diesen Befehl schließen. ([Firefox-Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` wurde behoben, bei dem Sie nicht mehrere Werte für denselben Header einstellen konnten. ([Firefox-Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler bei der `unhandledPromptBehavior` Fähigkeit wurde behoben, die nicht mit ausschließlich BiDi-Sitzungen verwendet werden konnte. ([Firefox-Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` wurde behoben, die unerwartet fehlschlagen würden, wenn kein Marionette-Client verbunden war. ([Firefox-Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` wurde behoben, der nicht gelöst werden konnte, wenn eine gleichseitige Navigation bei „unload“ begann. ([Firefox-Bug 1879163](https://bugzil.la/1879163))
- Der `browser.close` Befehl wurde verbessert, um alle „unbeforeunload“-Aufforderungen beim Schließen der obersten Browsing-Kontexte zu verwerfen. ([Firefox-Bug 1873196](https://bugzil.la/1873196))
- Ein Fehler im `browsingContext.userPromptOpened` Ereignis wurde behoben, bei dem das `defaultValue` Feld unerwartet fehlte ([Firefox-Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted` Ereignis während Authentifizierungsabläufen wurde behoben, das zu oft im Vergleich zu den Spezifikationen ausgegeben wurde. Nur ein `responseCompleted` (oder `fetchError`) Ereignis wird für den gesamten HTTP-Authentifizierungsablauf erwartet. ([Firefox-Bug 1906106](https://bugzil.la/1906106))
- Der `browser.removeUserContext` Befehl wurde verbessert, um alle „unbeforeunload“-Aufforderungen zu überspringen. ([Firefox-Bug 1876062](https://bugzil.la/1876062))
