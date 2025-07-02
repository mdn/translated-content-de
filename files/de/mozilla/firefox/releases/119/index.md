---
title: Firefox 119 für Entwickler
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernte Funktionalitäten

- Das {{HTMLElement('input')}}-Element unterstützt nicht mehr das nicht standardisierte `mozactionhint` Attribut. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Reference/Global_attributes/enterkeyhint). (Weitere Details finden Sie im [Fehlerbericht 1735980 von Firefox](https://bugzil.la/1735980)).

### CSS

- Der Rückfallwert der {{cssxref("attr")}} CSS-Funktion wird jetzt unterstützt. Dies ermöglicht das Festlegen eines Standardwerts, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) fehlt ([Fehlerbericht 1448248 von Firefox](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zum Gruppieren der Elemente eines Iterables werden jetzt unterstützt (Weitere Details finden Sie im [Fehlerbericht 1792650 von Firefox](https://bugzil.la/1792650)).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können jeweils verwendet werden, um zu überprüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [einsamen Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen schlecht geformten String in wohlgeformten Unicode-Text zu bereinigen. (Weitere Details finden Sie im [Fehlerbericht 1850755 von Firefox](https://bugzil.la/1850755)).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Reference/Attribute), die einen [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-Wert akzeptieren, unterstützen jetzt [Level 3](https://drafts.csswg.org/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) für alle SVG-Elemente. Dies ermöglicht die Größenanpassung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.), z.B., `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Weitere Details finden Sie im [Fehlerbericht 1287054 von Firefox](https://bugzil.la/1287054)).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy#credentialless) Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Antwort-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt, was es ermöglicht, `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern zu machen, die nicht explizit eingewilligt haben, allerdings ohne Cookies oder andere Berechtigungsnachweise ([Fehlerbericht 1851467 von Firefox](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sende-Streams kann jetzt durch Einfügen der `sendOrder` Eigenschaft in ein Optionen-Argument, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird, spezifiziert werden ([Fehlerbericht 1816925 von Firefox](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Schnittstelle werden jetzt unterstützt (siehe [Fehlerbericht 1816519 von Firefox](https://bugzil.la/1816519) und [Fehlerbericht 1816520 von Firefox](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass Benutzer abfragen können, ob Anmeldedaten nach Erstellung/Registrierung auffindbar sind ([Fehlerbericht 1844437 von Firefox](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf) Algorithmus als Option für ihren [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) Parameter (siehe [Fehlerbericht 1851928 von Firefox](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle werden jetzt unterstützt. Dies sind praktische Methoden zur Konvertierung von Objekten, die zur Erstellung und Freigabe von Anmeldeobjekten verwendet werden, in JSON-Repräsentationen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Fehlerbericht 1823782 von Firefox](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA) Reflektion wird jetzt standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur Nicht-ID-Referenz-Attribute werden reflektiert. Sie können jetzt ARIA-Attribute direkt auf DOM-Elementen über JavaScript APIs setzen und abrufen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt neben `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Fehlerbericht 1785412 von Firefox](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown` Aktion mit gedrückt gehaltenem mittleren oder rechten Maustaste wurde das `mousedown` Ereignis, wie es durch das zugehörige HTML-Element emittiert wurde, mit vertauschten Werten der `buttons` Eigenschaft ausgegeben ([Fehlerbericht 1850086 von Firefox](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll` Aktion des Eingabetyps `wheel` mit einem Ursprung, der auf `pointer` gesetzt wurde, wurde fälschlicherweise ein `invalid argument` Fehler ausgelöst, obwohl diese Kombination gemäß der aktuellen WebDriver-Spezifikation nicht unterstützt wird ([Fehlerbericht 1850166 von Firefox](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder ein Frame neu zu laden, das derzeit innerhalb eines gegebenen Browsing-Kontextes angezeigt wird ([Fehlerbericht 1830859 von Firefox](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzerdialog vom Typ `alert`, `confirm` oder `prompt` geschlossen wurde ([Fehlerbericht 1824221 von Firefox](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn von Firefox eine neue Navigation gestartet wird ([Fehlerbericht 1756595 von Firefox](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript Realms eines gegebenen Browsing-Kontextes zu überwachen. Ein solches Realm ist im Wesentlichen eine isolierte Ausführungsumgebung (`sandbox`) mit seinem eigenen einzigartigen globalen Objekt (window) ([Fehlerbericht 1788657 von Firefox](https://bugzil.la/1788657), [Fehlerbericht 1788659 von Firefox](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened` Ereignis wurde versehentlich gesendet, als ein HTTP-Authentifizierungsdialog geöffnet wurde ([Fehlerbericht 1853302 von Firefox](https://bugzil.la/1853302)).

- Unerwünschte Ereignisse mit dem `context` Feld, das auf `null` gesetzt ist, werden nicht mehr gesendet. Da der zugrundeliegende Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Fehlerbericht 1847563 von Firefox](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension über den `Addon:Install` Befehl zu installieren, wurde aktualisiert, um die neuesten Fehlercodes von Firefox zu berücksichtigen ([Fehlerbericht 1852537 von Firefox](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
