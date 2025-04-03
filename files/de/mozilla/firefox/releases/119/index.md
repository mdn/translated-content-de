---
title: Firefox 119 für Entwickler
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('input')}}-Element unterstützt nicht mehr das nicht standardisierte `mozactionhint`-Attribut. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint). (Weitere Details finden Sie im [Firefox-Bug 1735980](https://bugzil.la/1735980).)

### CSS

- Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt einen Fallback-Wert. Dies ermöglicht das Setzen eines Fallback-Wertes, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Global_attributes) fehlt ([Firefox-Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zur Gruppierung der Elemente eines Iterables werden nun unterstützt (Weitere Details finden Sie im [Firefox-Bug 1792650](https://bugzil.la/1792650).)
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können verwendet werden, um zu prüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [Einzelsurrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen schlecht geformten String in wohlgeformten Unicode-Text umzuwandeln.
  (Weitere Details finden Sie im [Firefox-Bug 1850755](https://bugzil.la/1850755).)

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen nun [Level 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z.B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Weitere Details finden Sie im [Firefox-Bug 1287054](https://bugzil.la/1287054).)

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt. Sie erlaubt `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern, die nicht explizit zugestimmt haben, jedoch ohne Cookies oder andere Anmeldeinformationen ([Firefox Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendestreams kann nun festgelegt werden, indem die Eigenschaft `sendOrder` in einem Optionsargument angegeben wird, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird ([Firefox Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der Schnittstelle [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) werden jetzt unterstützt (siehe [Firefox Bug 1816519](https://bugzil.la/1816519) und [Firefox Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und ermöglicht Benutzern die Abfrage, ob Anmeldedaten nach Erzeugung/Registrierung auffindbar sind ([Firefox-Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) Parameter (siehe [Firefox Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden jetzt unterstützt. Diese sind bequeme Methoden zur Umwandlung von Objekten, die zur Erstellung und gemeinsamen Nutzung von Anmeldeobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- Die [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird jetzt standardmäßig für Attribute unterstützt, die keine anderen Elemente referenzieren; nur Nicht-IDREF-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute direkt über JavaScript-APIs an DOM-Elementen abrufen und setzen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox-Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Bei der Durchführung einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das `mousedown`-Ereignis, das vom zugehörigen HTML-Element emittiert wurde, den Wert der `buttons`-Eigenschaft vertauscht ([Firefox-Bug 1850086](https://bugzil.la/1850086)).

- Bei der Durchführung einer `scroll`-Aktion des Eingabetyps `wheel` mit einem Ursprung, der auf `pointer` gesetzt war, wurde fälschlicherweise ein `ungültiges Argument`-Fehler ausgelöst, obwohl gemäß der aktuellen WebDriver-Spezifikation diese Kombination nicht unterstützt wird ([Firefox-Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload)-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder ein aktuell innerhalb eines bestimmten Browsing-Kontextes angezeigtes Frame neu zu laden ([Firefox-Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed)-Ereignis wurde hinzugefügt, das emittiert wird, wenn ein Benutzer-Prompt des Typs `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox-Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted)-Ereignis wurde hinzugefügt, das emittiert wird, wenn eine neue Navigation durch Firefox gestartet wird ([Firefox-Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript-Realms in einem bestimmten Browsing-Kontext zu überwachen. Ein solcher Realm ist im Wesentlichen eine isolierte Ausführungsumgebung (`sandbox`) mit ihrem eigenen einzigartigen globalen Objekt (window) ([Firefox-Bug 1788657](https://bugzil.la/1788657), [Firefox-Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened`-Ereignis wurde versehentlich gesendet, als ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox-Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context`-Feld auf `null` gesetzt werden nicht mehr emittiert. Da der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox-Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mit dem `Addon:Install`-Befehl zu installieren, wurde aktualisiert, um die neuesten Fehlercodes von Firefox zu entsprechen ([Firefox-Bug 1852537](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
