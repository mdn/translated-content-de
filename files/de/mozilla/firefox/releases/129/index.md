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

- Die CSS-At-Regel [@starting-style](/de/docs/Web/CSS/@starting-style) wird unterstützt. Diese ermöglicht es Ihnen, Startwerte für Eigenschaften zu definieren, die an einem Element gesetzt werden sollen, von dem aus Sie eine Transition starten möchten, wenn das Element seine erste Stilaktualisierung erhält. Derzeit wird das Animieren von `display: none;` nicht unterstützt ([Firefox Bug 1834876](https://bugzil.la/1834876) und [Firefox Bug 1834877](https://bugzil.la/1834877)).
- Die {{CSSXRef("transition-behavior")}} CSS-Eigenschaft wird unterstützt. Damit können Sie angeben, ob diskrete Eigenschaften wie {{CSSXRef("display")}} und {{CSSXRef("overlay")}} durch Festlegen des Wertes auf [`allow-discrete`](/de/docs/Web/CSS/transition-behavior#allow-discrete) animiert werden können. ([Firefox Bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` wurde als Alias der standardmäßigen {{cssxref("font-feature-settings")}}-Eigenschaft implementiert ([Firefox Bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bits zu runden. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch auszutauschen. ([Firefox Bug 1903329](https://bugzil.la/1903329).)
- Reguläre Ausdrücke können jetzt denselben Namen für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in verschiedenen [Disjunktionsalternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Dies ist erlaubt, da nur eine Alternative in einer Disjunktion übereinstimmen wird, sodass ein in mehreren Alternativen deklarierter Name nur auf eine erfasste Gruppe verweisen kann. Die Namen müssen dennoch innerhalb einer bestimmten Alternative und im restlichen Muster eindeutig sein. ([Firefox Bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS-DNS-Einträge können jetzt mithilfe des DNS-Resolvers des Betriebssystems auf Windows 11, Linux und Android 10+ aufgelöst werden. Dies stellt sicher, dass [DNS über HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) verwendet wird, wenn ein Benutzer es auf dem Gerät aktiviert hat, auch wenn es im Browser nicht aktiviert ist. Diese Funktion ermöglicht die Nutzung von HTTP/3, ohne den {{httpheader("Alt-Svc")}}-Header zu verwenden, und ermöglicht ein automatisches Upgrade von HTTP-Anfragen zu HTTPS, wenn der HTTPS-DNS-Eintrag vorhanden ist. Am wichtigsten ist, dass sie jetzt die Verwendung des Datenschutzfeatures [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) ermöglicht, auch wenn DoH nur auf dem Gerät und nicht im Browser aktiviert ist. ([Firefox Bug 1906239](https://bugzil.la/1906239)).

### APIs

- Das veraltete {{domxref("TextEvent", "textInput")}}-Ereignis wird jetzt unterstützt, wodurch Web-Apps, die auf veralteten Bibliotheken oder Frameworks basieren, die diese Ereignisse verwenden, lauffähig bleiben. Das [`beforeinput`-Ereignis](/de/docs/Web/API/Element/beforeinput_event) ersetzt `textInput` und sollte immer von neuen Anwendungen verwendet werden. ([Firefox Bug 1901923](https://bugzil.la/1901923).)
- Die Standardmethoden `.toJSON()` {{domxref("GeolocationCoordinates.toJSON()")}} und {{domxref("GeolocationPosition.toJSON()")}} werden jetzt unterstützt, was die Serialisierung von `GeolocationCoordinates`- und `GeolocationPosition`-Objekten mit {{jsxref("JSON.stringify()")}} ermöglicht ([Firefox Bug 1890706](https://bugzil.la/1890706)).
- {{domxref("CSSPageDescriptors")}} wird jetzt unterstützt und wird als Typ für {{domxref("CSSPageRule.style")}} anstelle von {{domxref("CSSStyleDeclaration")}} verwendet – entsprechend der aktuellen Spezifikation. Dies stellt sicher, dass `CSSPageDescriptors` nur die `@page`-bezogenen Eigenschaften offenbart, anstatt alle Eigenschaften, und löst auch ein Problem, bei dem das Setzen der Seitengröße [`size`](/de/docs/Web/CSS/@page#size) in einer CSS-`@page`-At-Regel nicht in `CSSPageRule.style` reflektiert wurde. ([Firefox Bug 1890842](https://bugzil.la/1890842), [Firefox Bug 1867106](https://bugzil.la/1867106).)
- {{domxref('MediaCapabilities.decodingInfo()')}} kann nun Dekodierungsinformationen für eine bestimmte _verschlüsselte Medien_-Konfiguration sowie unverschlüsselte Medien erhalten, wodurch Anwendungen im Voraus feststellen können, ob die Konfiguration unterstützt wird und ob sie den Inhalt reibungslos und energieeffizient wiedergeben kann. Die Änderungen umfassen eine neue Eigenschaft `keySystemConfiguration` im Konfigurationsargument der Methode, die die Eigenschaften des zur Verschlüsselung des Mediums verwendeten Schlüsselsystems definiert, und eine neue `keySystemAccess`-Eigenschaft im zurückgegebenen Objekt, die ein {{domxref('MediaKeySystemAccess')}}-Objekt ist, das verwendet werden kann, um Schlüssel zu erstellen und den Inhalt für die Wiedergabe zu dekodieren. ([Firefox Bug 1898344](https://bugzil.la/1898344)).
- Firefox löst jetzt Ereignisse für eine synchrone {{domxref("XMLHttpRequest")}} aus, bevor die Ereignisse für laufende asynchrone `XMLHttpRequest` ausgelöst werden. Dies behebt einen langjährigen Verhaltensunterschied zu anderen Browsern. Beachten Sie, dass während dies einige Websites reparieren sollte, es auch zu Leistungseinbußen auf Websites führen kann, die das alte "nicht blockierende" Verhalten für eine synchrone `XMLHttpRequest` erwarten. Bitte [melden Sie einen Fehler](https://bugzil.la/), wenn Ihre Website durch diese Änderung hätte behoben werden sollen, aber immer noch damit verbundene Probleme aufweist. ([Firefox Bug 697151](https://bugzil.la/697151).)
- Der [Ed25519](/de/docs/Web/API/SubtleCrypto/sign#ed25519) Digitale Signaturalgorithmus wird von der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) unterstützt und kann in den {{domxref("SubtleCrypto")}}-Methoden verwendet werden: {{domxref("SubtleCrypto.sign()", "sign()")}}, {{domxref("SubtleCrypto.verify()", "verify()")}}, {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, {{domxref("SubtleCrypto.importKey()", "importKey()")}} und {{domxref("SubtleCrypto.exportKey()", "exportKey()")}} ([Firefox Bug 1804788](https://bugzil.la/1804788)).
- Die {{domxref("PerformanceResourceTiming.contentType","contentType")}}- und {{domxref("PerformanceResourceTiming.responseStatus","responseStatus")}}-Eigenschaften der {{domxref("PerformanceResourceTiming")}}-Schnittstelle werden jetzt unterstützt und geben den Inhaltstyp der abgerufenen Ressource und den HTTP-Antwortstatuscode zurück, der beim Abrufen der Ressource zurückgegeben wurde. ([Firefox Bug 1800443](https://bugzil.la/1800443), [Firefox Bug 1796785](https://bugzil.la/1796785).)
- Die {{domxref("RTCDTMFSender.canInsertDTMF")}}-Eigenschaft wird nun unterstützt. Diese ermöglicht es Ihnen, zu überprüfen, ob ein WebRTC-Sender DTMF-Töne in die ausgehende Verbindung einfügen kann. Wenn unterstützt, können Sie DTMF-Töne mit {{domxref("RTCDTMFSender.insertDTMF()")}} einfügen. ([Firefox Bug 1623193](https://bugzil.la/1623193)).

#### Entfernungen

- Die Methode {{domxref('Navigator.vibrate()')}} wurde entfernt ([Firefox Bug 1653318](https://bugzil.la/1653318), [Firefox Bug 1900037](https://bugzil.la/1900037)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Entfernungen

- Standardmäßig ist das CDP (Chrome DevTools Protocol) jetzt deaktiviert. Es kann über die Einstellung `remote.active-protocols` wieder aktiviert werden. Mehr darüber erfahren Sie in diesem [Blogbeitrag](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox Bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Unterstützung für den Befehl `network.setCacheBehavior` hinzugefügt, der es ermöglicht, den Browser so zu konfigurieren, dass er den Netzwerkcache entweder global oder für eine Reihe von obersten Browsing-Kontexten umgeht. ([Firefox Bug 1901032](https://bugzil.la/1901032) und [Firefox Bug 1906100](https://bugzil.la/1906100))
- Unterstützung für Aufforderungen des Typs `beforeUnload` hinzugefügt, die nun auf die gleiche Weise wie andere Benutzeraufforderungen behandelt werden können. ([Firefox Bug 1824220](https://bugzil.la/1824220))
- Wir unterstützen jetzt alle Argumente für den Befehl `network.provideResponse`, wenn dieser in der Phase `beforeRequestSent` verwendet wird, wie z. B. den `body`-Parameter, der es erlaubt, gefälschte Antworten zurückzugeben. ([Firefox Bug 1853882](https://bugzil.la/1853882))
- Die `browsingContext.userPromptOpened` enthält jetzt das `handler`-Feld, das den für die Aufforderung konfigurierten Benutzeraufforderungs-Handler enthält, der das Ereignis ausgelöst hat. ([Firefox Bug 1904822](https://bugzil.la/1904822))
- Der `BrowsingContextInfo`-Typ liefert nun ein `originalOpener`-Feld, das die Kontext-ID des "öffnenden" Browsing-Kontexts ist. Dies wird gesetzt, wenn der neue Kontext zum Beispiel durch die Verwendung eines Links (auch mit `rel=noopener`), `window.open` usw. erstellt wurde. Hat der neue Browsing-Kontext keinen relevanten Öffner, wird das Feld auf null gesetzt. ([Firefox Bug 1898004](https://bugzil.la/1898004))
- Netzwerkereignisse (`beforeRequestSent`, `responseStarted` und `responseCompleted`) werden jetzt für Anfragen an Daten-URLs erstellt. In Firefox 129 werden nur Navigationsanfragen aufgelistet. ([Firefox Bug 1805176](https://bugzil.la/1805176))
- Wir haben Unterstützung für das Argument `promptUnload` für `browsingContext.close` hinzugefügt, das es erlaubt, "beforeunload"-Aufforderungen beim Schließen eines Kontextes über diesen Befehl zu umgehen. ([Firefox Bug 1862380](https://bugzil.la/1862380))
- Ein Fehler in `network.continueRequest` behoben, bei dem Sie nicht mehrere Werte für denselben Header setzen konnten. ([Firefox Bug 1904379](https://bugzil.la/1904379))
- Ein Fehler in Bezug auf die `unhandledPromptBehavior`-Fähigkeit behoben, die nicht mit ausschließlich BiDi-Sitzungen verwendet werden konnte. ([Firefox Bug 1907935](https://bugzil.la/1907935))
- Ein Fehler mit `session.end` und `browser.close` behoben, die unerwartet fehlschlagen würden, wenn kein Marionette-Client verbunden war. ([Firefox Bug 1890091](https://bugzil.la/1890091))
- Ein Fehler mit `browsingContext.navigate` behoben, der nicht aufgelöst werden konnte, wenn eine gleiche Dokumentnavigation beim "beforeunload" begann. ([Firefox Bug 1879163](https://bugzil.la/1879163))
- Den Befehl `browser.close` verbessert, um alle "beforeunload"-Aufforderungen beim Schließen des obersten Browsing-Kontextes zu verwerfen. ([Firefox Bug 1873196](https://bugzil.la/1873196))
- Einen Fehler im Ereignis `browsingContext.userPromptOpened` behoben, bei dem das `defaultValue`-Feld unerwartet fehlen würde ([Firefox Bug 1859814](https://bugzil.la/1859814))
- Ein Problem mit dem `network.responseCompleted`-Ereignis während Authentifizierungsabläufen behoben, welches zu oft im Vergleich zu den Spezifikationen gesendet wurde. Nur ein `responseCompleted`- (oder `fetchError`-)Ereignis wird für den gesamten HTTP-Authentifizierungsablauf erwartet. ([Firefox Bug 1906106](https://bugzil.la/1906106))
- Den Befehl `browser.removeUserContext` verbessert, um alle "beforeunload"-Aufforderungen zu überspringen. ([Firefox Bug 1876062](https://bugzil.la/1876062))

## Ältere Versionen

{{Firefox_for_developers}}
