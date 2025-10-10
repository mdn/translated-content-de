---
title: Firefox 119 für Entwickler
short-title: Firefox 119
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('input')}}-Element unterstützt das nicht standardmäßige `mozactionhint`-Attribut nicht mehr. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Siehe [Firefox Bug 1735980](https://bugzil.la/1735980) für weitere Details.)

### CSS

- Die Fallback-Werte der {{cssxref("attr")}} CSS-Funktion werden nun unterstützt. Dies ermöglicht die Angabe eines Fallback-Wertes, der verwendet wird, wenn das [Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Firefox Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zum Gruppieren der Elemente eines Iterables werden nun unterstützt (siehe [Firefox Bug 1792650](https://bugzil.la/1792650) für weitere Details).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können verwendet werden, um zu überprüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [alleinstehenden Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)) und einen nicht wohlgeformten String in wohlgeformten Unicode-Text zu sanieren. (Siehe [Firefox Bug 1850755](https://bugzil.la/1850755) für weitere Details).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen nun [Level 3](https://drafts.csswg.org/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z. B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Siehe [Firefox Bug 1287054](https://bugzil.la/1287054) für weitere Details).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt. Sie ermöglicht `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern, die dem nicht ausdrücklich zugestimmt haben, allerdings ohne Cookies oder andere Anmeldeinformationen ([Firefox Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendestreams kann nun durch das Einfügen der `sendOrder`-Eigenschaft in ein Optionsargument, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird, spezifiziert werden ([Firefox Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle werden nun unterstützt (siehe [Firefox Bug 1816519](https://bugzil.la/1816519) und [Firefox Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass Benutzer abfragen können, ob Anmeldedaten nach der Erstellung/Registrierung erkennbar sind ([Firefox Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt nun den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyType`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeytype)-Parameter (siehe [Firefox Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden nun unterstützt.
  Diese sind Komfortmethoden zur Konvertierung von Objekten, die zur Erstellung und zum Teilen von Anmeldeinformationsobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- Die [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird nun standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur Nicht-ID-Referenz-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute direkt über JavaScript-APIs in DOM-Elementen abrufen und setzen, anstatt `setAttribute` und `getAttribute` zu verwenden. Beispiel: `buttonElement.ariaPressed = "true";` wird jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Bei der Ausführung einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das von dem zugehörigen HTML-Element ausgegebene `mousedown`-Ereignis den Wert der `buttons`-Eigenschaft vertauscht ([Firefox Bug 1850086](https://bugzil.la/1850086)).

- Bei der Ausführung einer `scroll`-Aktion des Eingabetyps `wheel` mit einem auf `pointer` gesetzten Ursprung wurde fälschlicherweise ein `invalid argument`-Fehler ausgelöst, obwohl diese Kombination gemäß der aktuellen WebDriver-Spezifikation nicht unterstützt wird ([Firefox Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload)-Befehl wurde hinzugefügt, der den Benutzern ermöglicht, die Seite oder ein aktuell angezeigtes Frame in einem bestimmten Browsing-Kontext neu zu laden ([Firefox Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzer-Prompt vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox Bug 1756595](https://bugzil.la/1756595)).

- Die [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated)- und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed)-Ereignisse wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript Realms eines bestimmten Browsing-Kontexts zu überwachen. Ein solches Realm ist im Wesentlichen eine isolierte Ausführungsumgebung (`sandbox`) mit ihrem eigenen einzigartigen globalen Objekt (window) ([Firefox Bug 1788657](https://bugzil.la/1788657), [Firefox Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened`-Ereignis wurde irrtümlich ausgelöst, als ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context`-Feld auf `null` gesetzt, werden nicht mehr ausgegeben. Weil der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, ein WebExtension mit dem `Addon:Install`-Befehl zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox Bug 1852537](https://bugzil.la/1852537)).
