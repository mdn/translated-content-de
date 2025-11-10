---
title: Firefox 119 Versionshinweise für Entwickler
short-title: Firefox 119
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernt

- Das {{HTMLElement('input')}}-Element unterstützt das nicht standardisierte `mozactionhint`-Attribut nicht mehr. Benutzen Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Siehe [Firefox Bug 1735980](https://bugzil.la/1735980) für weitere Details.)

### CSS

- Der {{cssxref("attr")}} CSS-Funktions-Fallback-Wert wird jetzt unterstützt. Dies ermöglicht das Setzen eines Fallback-Wertes, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Firefox Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zum Gruppieren der Elemente eines iterierbaren Objekts werden jetzt unterstützt (siehe [Firefox Bug 1792650](https://bugzil.la/1792650) für weitere Details).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können verwendet werden, um zu prüfen, ob ein String gut geformten Unicode-Text enthält (d.h. keine [alleinstehenden Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen schlecht geformten String in gut geformten Unicode-Text zu bereinigen. (Siehe [Firefox Bug 1850755](https://bugzil.la/1850755) für weitere Details).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen jetzt [Level 3](https://drafts.csswg.org/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) für alle SVG-Elemente. Dies ermöglicht die Größenbestimmung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z.B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Siehe [Firefox Bug 1287054](https://bugzil.la/1287054) für weitere Details).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt. Dies erlaubt `no-cors`-Anfragen an ressourcenübergreifende Server, die nicht explizit dem zugestimmt haben, jedoch ohne Cookies oder andere Anmeldeinformationen ([Firefox Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann jetzt angegeben werden, indem die `sendOrder`-Eigenschaft in einem Optionsargument zu [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) hinzugefügt wird ([Firefox Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle werden jetzt unterstützt (siehe [Firefox Bug 1816519](https://bugzil.la/1816519) und [Firefox Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, wodurch Benutzer abfragen können, ob Anmeldedaten nach der Erstellung/Registrierung auffindbar sind ([Firefox Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyType`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeytype)-Parameter (siehe [Firefox Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden jetzt unterstützt. Diese sind Komfortmethoden, um Objekte für das Erstellen und Teilen von Anmelde-Objekten in JSON-Repräsentationen zu konvertieren, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird jetzt standardmäßig für Attribute unterstützt, die nicht auf andere Elemente verweisen; nur nicht-ID-Referenz-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute auf DOM-Elementen direkt über JavaScript-APIs abrufen und einstellen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel `buttonElement.ariaPressed = "true";` wird jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown`-Aktion mit der mittleren oder rechten Maustaste wurde das `mousedown`-Ereignis, das vom zugehörigen HTML-Element gesendet wurde, mit einem vertauschten Wert der `buttons`-Eigenschaft ausgegeben ([Firefox Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion des Eingabetyps `wheel` mit einem Ursprung, der auf `pointer` gesetzt ist, wurde fälschlicherweise ein `invalid argument`-Fehler ausgelöst. Gemäß der aktuellen WebDriver-Spezifikation wird diese Kombination nicht unterstützt ([Firefox Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der Befehl [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) wurde hinzugefügt, der es Nutzern ermöglicht, die Seite oder ein innerhalb eines gegebenen Browsing-Kontexts angezeigtes Frame neu zu laden ([Firefox Bug 1830859](https://bugzil.la/1830859)).

- Das Ereignis [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) wurde hinzugefügt, das ausgegeben wird, wenn ein Benutzeraufforderungstyp `alert`, `confirm` oder `prompt` geschlossen wird ([Firefox Bug 1824221](https://bugzil.la/1824221)).

- Das Ereignis [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) wurde hinzugefügt, das ausgegeben wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, um Benutzern die Überwachung der Lebensdauer von JavaScript-Reichen eines gegebenen Browsing-Kontexts zu ermöglichen. Ein solches Reich ist im Wesentlichen eine isolierte Ausführungsumgebung (`sandbox`) mit ihrem eigenen, einzigartigen globalen Objekt (Fenster) ([Firefox Bug 1788657](https://bugzil.la/1788657), [Firefox Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened`-Ereignis wurde versehentlich gesendet, wenn ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context`-Feld auf `null` gesetzt, werden nicht mehr gesendet. Da der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mithilfe des `Addon:Install`-Befehls zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox Bug 1852537](https://bugzil.la/1852537)).
