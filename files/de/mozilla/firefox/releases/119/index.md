---
title: Firefox 119 für Entwickler
short-title: Firefox 119
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernt

- Das {{HTMLElement('input')}}-Element unterstützt nicht mehr das nicht standardmäßige `mozactionhint`-Attribut. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Weitere Details finden Sie im [Firefox-Bug 1735980](https://bugzil.la/1735980)).

### CSS

- Der {{cssxref("attr")}} CSS-Funktions-Fallbackwert wird jetzt unterstützt. Dies ermöglicht das Setzen eines Fallback-Wertes, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Firefox-Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zur Gruppierung der Elemente eines Iterablen werden jetzt unterstützt (Weitere Details finden Sie im [Firefox-Bug 1792650](https://bugzil.la/1792650)).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können jeweils verwendet werden, um zu prüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [einsamen Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen schlecht geformten String in wohlgeformten Unicode-Text zu bereinigen.
  (Weitere Details siehe [Firefox-Bug 1850755](https://bugzil.la/1850755)).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen jetzt [Level 3](https://drafts.csswg.org/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z.B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Weitere Details finden Sie im [Firefox-Bug 1287054](https://bugzil.la/1287054)).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt, wodurch `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern gestellt werden können, die nicht explizit zugestimmt haben, ohne jedoch Cookies oder andere Anmeldeinformationen ([Firefox-Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann jetzt durch Einbeziehung der `sendOrder`-Eigenschaft innerhalb eines Optionsarguments, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird, spezifiziert werden ([Firefox-Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der Schnittstelle [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) werden jetzt unterstützt (siehe [Firefox-Bug 1816519](https://bugzil.la/1816519) und [Firefox-Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass Benutzer abfragen können, ob Anmeldedaten nach der Erstellung/Registrierung auffindbar sind ([Firefox-Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyType`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeytype)-Parameter (siehe [Firefox-Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) werden jetzt unterstützt.
  Diese sind praktische Methoden zum Konvertieren von Objekten, die zur Erstellung und gemeinsamen Nutzung von Anmeldungsobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox-Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird jetzt standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur Attribute ohne ID-Referenz werden reflektiert. Sie können jetzt ARIA-Attribute direkt über JavaScript-APIs für DOM-Elemente festlegen und abrufen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox-Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das durch das zugehörige HTML-Element ausgesendete `mousedown`-Ereignis den Wert der `buttons`-Eigenschaft vertauscht ([Firefox-Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion des Eingabetyps `wheel` mit Ursprung auf `pointer` wurde fälschlicherweise ein `invalid argument`-Fehler ausgelöst, obwohl diese Kombination gemäß der aktuellen WebDriver-Spezifikation nicht unterstützt wird ([Firefox-Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload)-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder ein Frame neu zu laden, das/die momentan in einem gegebenen Browsing-Kontext angezeigt wird ([Firefox-Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzereingabeaufforderung vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox-Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox-Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript-Realms eines gegebenen Browsing-Kontexts zu überwachen. Ein solches Realm ist im Grunde eine isolierte Ausführungsumgebung (`Sandbox`) mit ihrem eigenen einzigartigen globalen Objekt (Fenster) ([Firefox-Bug 1788657](https://bugzil.la/1788657), [Firefox-Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened`-Ereignis wurde versehentlich gesendet, wenn ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox-Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem auf `null` gesetzten `context`-Feld werden nicht mehr ausgesendet. Da der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox-Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mit dem `Addon:Install`-Befehl zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox-Bug 1852537](https://bugzil.la/1852537)).
