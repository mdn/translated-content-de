---
title: Firefox 119 Versionshinweise für Entwickler
short-title: Firefox 119
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernung

- Das {{HTMLElement('input')}}-Element unterstützt nicht mehr das nicht-standardmäßige `mozactionhint`-Attribut. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Siehe [Firefox-Bug 1735980](https://bugzil.la/1735980) für weitere Details.)

### CSS

- Der {{cssxref("attr")}} CSS-Funktions-Fallback-Wert wird jetzt unterstützt. Dies ermöglicht das Setzen eines Fallback-Wertes, der verwendet werden soll, wenn das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Firefox-Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die `{{jsxref("Object.groupBy()")}}` und `{{jsxref("Map.groupBy()")}}` statischen Methoden zur Gruppierung der Elemente eines iterierbaren Objekts werden jetzt unterstützt (siehe [Firefox-Bug 1792650](https://bugzil.la/1792650) für weitere Details).
- Die `{{jsxref("String.prototype.isWellFormed()")}}` und `{{jsxref("String.prototype.toWellFormed()")}}` Methoden können jeweils verwendet werden, um zu prüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [einzelnen Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen fehlerhaften String zu wohlgeformtem Unicode-Text zu bereinigen.
  (Siehe [Firefox-Bug 1850755](https://bugzil.la/1850755) für weitere Details).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) Wert akzeptieren, unterstützen jetzt [Level 3](https://drafts.csswg.org/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenbestimmung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem` usw.), Ansichtsfenster (`vh`, `vw`, `vmin` usw.) oder absoluten Längen (`px`, `cm` usw.), z.B., `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Siehe [Firefox-Bug 1287054](https://bugzil.la/1287054) für weitere Details).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless) Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt, was `no-cors` Anfragen für Ressourcen auf Cross-Origin-Servern erlaubt, die nicht ausdrücklich zugestimmt haben, allerdings ohne Cookies oder andere Anmeldedaten ([Firefox-Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann jetzt angegeben werden, indem die `sendOrder`-Eigenschaft innerhalb eines Optionsarguments übergeben wird an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ([Firefox-Bug 1816925](https://bugzil.la/1816925)).
- Die [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) Methoden der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Schnittstelle werden jetzt unterstützt (siehe [Firefox-Bug 1816519](https://bugzil.la/1816519) und [Firefox-Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, wodurch Benutzer abfragen können, ob Anmeldedaten nach Erstellung/Registrierung auffindbar sind ([Firefox-Bug 1844437](https://bugzil.la/1844437)).
- Die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) Methode unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) Algorithmus als Option für ihren [`derivedKeyType`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeytype) Parameter (siehe [Firefox-Bug 1851928](https://bugzil.la/1851928)).
- Die [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) Methoden der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle werden jetzt unterstützt.
  Diese sind Hilfsmethoden zur Umwandlung von Objekten, die für die Erstellung und das Teilen von Anmeldeobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox-Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA) Reflektion wird jetzt standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur nicht-ID-Referenz-Attribute werden reflektiert. Sie können ARIA-Attribute auf DOM-Elementen jetzt direkt über JavaScript-APIs abrufen und setzen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox-Bug 1785412](https://bugzil.la/1785412)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown`-Aktion mit der mittleren oder rechten Maustaste gedrückt, hatte das `mousedown`-Ereignis, das vom zugehörigen HTML-Element ausgegeben wurde, den Wert der `buttons`-Eigenschaft vertauscht ([Firefox-Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion des Eingabetyps `wheel` mit einem Ursprung, der auf `pointer` gesetzt ist, wurde ein `ungültiges Argument`-Fehler unangemessenerweise ausgelöst, obwohl gemäß der aktuellen WebDriver-Spezifikation diese Kombination nicht unterstützt wird ([Firefox-Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder einen Frame neu zu laden, der aktuell innerhalb eines gegebenen Browsing-Kontextes angezeigt wird ([Firefox-Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzerhinweis vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox-Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox-Bug 1756595](https://bugzil.la/1756595)).

- Die `script.realmCreated` und `script.realmDestroyed` Ereignisse wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript Realms eines gegebenen Browsing-Kontextes zu überwachen. Ein solches Realm ist im Grunde eine isolierte Ausführungsumgebung (`Sandbox`) mit seinem eigenen einzigartigen globalen Objekt (Fenster) ([Firefox-Bug 1788657](https://bugzil.la/1788657), [Firefox-Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened` Ereignis wurde versehentlich gesendet, wenn ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox-Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context` Feld auf `null` gesetzt werden nicht mehr ausgegeben. Da der zugrunde liegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox-Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, ein WebExtension mittels des `Addon:Install` Befehls zu installieren, wurde aktualisiert, um die neuesten Fehlercodes von Firefox zu entsprechen ([Firefox-Bug 1852537](https://bugzil.la/1852537)).
