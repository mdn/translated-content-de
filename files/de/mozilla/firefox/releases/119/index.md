---
title: Firefox 119 für Entwickler
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('input')}}-Element unterstützt das nicht standardmäßige `mozactionhint`-Attribut nicht mehr. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint). (Siehe [Firefox Bug 1735980](https://bugzil.la/1735980) für weitere Details.)

### CSS

- Der Fallback-Wert der {{cssxref("attr")}}-CSS-Funktion wird jetzt unterstützt. Dies ermöglicht das Festlegen eines Fallback-Werts, der verwendet wird, wenn das [Globale Attribut](/de/docs/Web/HTML/Global_attributes) fehlt ([Firefox Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zum Gruppieren der Elemente eines Iterables werden jetzt unterstützt (siehe [Firefox Bug 1792650](https://bugzil.la/1792650) für weitere Details).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können jeweils verwendet werden, um zu prüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [Einzel-Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und einen schlecht geformten String in wohlgeformten Unicode-Text zu überführen. (Siehe [Firefox Bug 1850755](https://bugzil.la/1850755) für weitere Details.)

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Content_type#length)-Wert akzeptieren, unterstützen nun [Level 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem` usw.), Ansichtsfenster (`vh`, `vw`, `vmin` usw.) oder absoluten Längen (`px`, `cm` usw.), z.B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Siehe [Firefox Bug 1287054](https://bugzil.la/1287054) für weitere Details.)

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt und ermöglicht `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern, die sich nicht explizit dafür entschieden haben, jedoch ohne Cookies oder andere Anmeldedaten ([Firefox Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sende-Streams kann jetzt bestimmt werden, indem die `sendOrder`-Eigenschaft innerhalb eines Optionsarguments angegeben wird, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird ([Firefox Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle werden jetzt unterstützt (siehe [Firefox Bug 1816519](https://bugzil.la/1816519) und [Firefox Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, was es Benutzern ermöglicht, abzufragen, ob Anmeldedaten nach der Erstellung/Registrierung auffindbar sind ([Firefox Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm)-Parameter (siehe [Firefox Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden jetzt unterstützt. Diese sind komfortable Methoden, um Objekte, die zur Erstellung und zum Teilen von Anmelde-Objekten verwendet werden, in JSON-Darstellungen zu konvertieren, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird jetzt standardmäßig für Attribute unterstützt, die nicht auf andere Elemente verweisen; nur Nicht-IDREF-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute auf DOM-Elementen direkt über JavaScript-APIs abrufen und setzen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das `mousedown`-Ereignis, das vom zugehörigen HTML-Element gesendet wurde, den Wert der `buttons`-Eigenschaft vertauscht ([Firefox Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion des Typs `wheel` mit einem Ursprung, der auf `pointer` gesetzt ist, wurde fälschlicherweise ein `invalid argument`-Fehler ausgelöst, wohingegen gemäß der aktuellen WebDriver-Spezifikation diese Kombination nicht unterstützt wird ([Firefox Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der Befehl [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder einen Frame, der derzeit innerhalb eines gegebenen Browsing-Kontexts angezeigt wird, neu zu laden ([Firefox Bug 1830859](https://bugzil.la/1830859)).

- Das Ereignis [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzerprompt vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox Bug 1824221](https://bugzil.la/1824221)).

- Das Ereignis [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript-Realms eines gegebenen Browsing-Kontexts zu überwachen. Ein solches Realm ist im Grunde eine isolierte Ausführungsumgebung (`Sandbox`) mit ihrem eigenen, einzigartigen globalen Objekt (Fenster) ([Firefox Bug 1788657](https://bugzil.la/1788657), [Firefox Bug 1788659](https://bugzil.la/1788659)).

- Das Ereignis `browsingContext.userPromptOpened` wurde versehentlich gesendet, wenn ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context`-Feld, das auf `null` gesetzt ist, werden nicht mehr gesendet. Da der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension über den `Addon:Install`-Befehl zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox Bug 1852537](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
