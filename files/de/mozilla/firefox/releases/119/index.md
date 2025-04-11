---
title: Firefox 119 für Entwickler
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernungen

- Das {{HTMLElement('input')}}-Element unterstützt nicht mehr das nicht standardisierte `mozactionhint`-Attribut. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Weitere Details finden Sie im [Firefox-Bug 1735980](https://bugzil.la/1735980).)

### CSS

- Die {{cssxref("attr")}} CSS-Funktion unterstützt jetzt einen Fallback-Wert. Dies ermöglicht das Festlegen eines Fallback-Werts, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Firefox-Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zum Gruppieren der Elemente eines Iterables werden jetzt unterstützt (Weitere Details finden Sie im [Firefox-Bug 1792650](https://bugzil.la/1792650).)
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können verwendet werden, um zu prüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [lone surrogates](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen nicht wohlgeformten String zu wohlgeformtem Unicode-Text zu bereinigen. (Weitere Details finden Sie im [Firefox-Bug 1850755](https://bugzil.la/1850755).)

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen jetzt [Stufe 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), dem Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z. B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Weitere Details finden Sie im [Firefox-Bug 1287054](https://bugzil.la/1287054).)

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless)-Anweisung des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt, wodurch `no-cors` Anfragen für Ressourcen auf Cross-Origin-Servern, die sich nicht ausdrücklich dafür entschieden haben, möglich sind, allerdings ohne Cookies oder andere Anmeldeinformationen ([Firefox-Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann jetzt festgelegt werden, indem die Eigenschaft `sendOrder` in einem Optionsargument übergeben wird an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ([Firefox-Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm), und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle werden jetzt unterstützt (siehe [Firefox-Bug 1816519](https://bugzil.la/1816519) und [Firefox-Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, um Nutzern zu ermöglichen, abzufragen, ob Anmeldeinformationen nach der Erstellung/Registrierung auffindbar sind ([Firefox-Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm)-Parameter (siehe [Firefox-Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static), und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden jetzt unterstützt. Diese sind praktische Methoden zum Konvertieren von Objekten, die zur Erstellung und Freigabe von Anmeldeinformationsobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox-Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflexion wird jetzt standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur Nicht-IDREF-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute direkt über JavaScript-APIs an DOM-Elementen abrufen und setzen, statt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox-Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wenn eine `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste ausgeführt wurde, hatte das `mousedown`-Ereignis, das vom zugehörigen HTML-Element gesendet wurde, den Wert der `buttons`-Eigenschaft vertauscht ([Firefox-Bug 1850086](https://bugzil.la/1850086)).

- Bei der Ausführung einer `scroll`-Aktion des Eingabetypes `wheel` mit einem Ursprung auf `pointer` wurde ein `invalid argument`-Fehler unpassenderweise ausgelöst, während gemäß der aktuellen WebDriver-Spezifikation diese Kombination nicht unterstützt wird ([Firefox-Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload)-Befehl wurde hinzugefügt, der es Nutzern ermöglicht, die Seite oder einen Frame, der aktuell in einem bestimmten Browsing-Kontext angezeigt wird, neu zu laden ([Firefox-Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzeraufforderung vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox-Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox-Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Nutzern ermöglichen, die Lebensdauer von JavaScript Realms eines bestimmten Browsing-Kontextes zu überwachen. Ein solches Realm ist im Grunde eine isolierte Ausführungsumgebung (`sandbox`) mit einem eigenen einzigartigen globalen Objekt (window) ([Firefox-Bug 1788657](https://bugzil.la/1788657), [Firefox-Bug 1788659](https://bugzil.la/1788659)).

- Das Ereignis `browsingContext.userPromptOpened` wurde versehentlich gesendet, als ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox-Bug 1853302](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context`-Feld auf `null` werden nicht mehr gesendet. Weil der zugrundeliegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox-Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mit dem `Addon:Install`-Befehl zu installieren, wurde aktualisiert, um die neuesten Fehlercodes von Firefox zu entsprechen ([Firefox-Bug 1852537](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
