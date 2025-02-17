---
title: Firefox 119 für Entwickler
slug: Mozilla/Firefox/Releases/119
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 119, die Entwickler betreffen. Firefox 119 wurde am 24. Oktober 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

#### Entfernte Funktionen

- Das {{HTMLElement('input')}}-Element unterstützt das nicht standardisierte `mozactionhint`-Attribut nicht mehr. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint). (Weitere Details finden Sie in [Firefox Bug 1735980](https://bugzil.la/1735980)).

### CSS

- Die {{cssxref("attr")}}-Funktion in CSS unterstützt jetzt einen Fallback-Wert. Dadurch kann ein Fallback-Wert definiert werden, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Global_attributes) fehlt ([Firefox Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zur Gruppierung von Elementen eines Iterables werden jetzt unterstützt (weitere Details finden Sie in [Firefox Bug 1792650](https://bugzil.la/1792650)).
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können genutzt werden, um festzustellen, ob ein String korrekt formatierten Unicode-Text enthält (d. h. keine [einsamen Surrogatzeichen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)), und um einen fehlerhaft formatierten String in korrekt formatierten Unicode-Text umzuwandeln. (Weitere Details finden Sie in [Firefox Bug 1850755](https://bugzil.la/1850755)).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Content_type#length)-Wert akzeptieren, unterstützen jetzt die [Level 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}} [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) für alle SVG-Elemente. Dadurch können SVG-Elemente auf Basis von Schriftgrößen (`cap`, `rem`, etc.), Ansichtsfenster (`vh`, `vw`, `vmin`, etc.) oder absoluten Längen (`px`, `cm`, etc.) skaliert werden, z. B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Weitere Details finden Sie in [Firefox Bug 1287054](https://bugzil.la/1287054)).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}}-HTTP-Response-Headers wird nun auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt. Dadurch können `no-cors`-Anfragen für Ressourcen an Cross-Origin-Server gestellt werden, die nicht explizit dafür optiert haben, allerdings ohne Cookies oder andere Anmeldedaten ([Firefox Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann nun angegeben werden, indem die Eigenschaft `sendOrder` innerhalb eines Options-Arguments an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird ([Firefox Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle werden nun unterstützt (siehe [Firefox Bug 1816519](https://bugzil.la/1816519) und [Firefox Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt, sodass Benutzer abfragen können, ob Anmeldedaten nach der Erstellung/Registrierung auffindbar sind ([Firefox Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt jetzt den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für ihren Parameter [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) (Details finden Sie in [Firefox Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden [`parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), [`parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static) und [`toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle werden jetzt unterstützt. Diese Komfortmethoden dienen der Konvertierung von Objekten, die bei der Erstellung und beim Teilen von Zugangsdatenobjekten verwendet werden, in JSON-Darstellungen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (Details in [Firefox Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflektion wird nun standardmäßig für Attribute unterstützt, die nicht auf andere Elemente verweisen; nur nicht-IDREF-Attribute werden reflektiert. Jetzt können ARIA-Attribute direkt über die JavaScript-APIs auf DOM-Elemente angewendet werden, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox Bug 1785412](https://bugzil.la/1785412)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Bei der Ausführung einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das von dem entsprechenden HTML-Element ausgegebene `mousedown`-Ereignis einen vertauschten Wert der `buttons`-Eigenschaft ([Firefox Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion des Eingabetyps `wheel` mit einem Ursprung, der auf `pointer` gesetzt war, wurde fälschlicherweise ein Fehler "ungültiges Argument" ausgelöst, obwohl laut aktueller WebDriver-Spezifikation diese Kombination nicht unterstützt wird ([Firefox Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der Befehl [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) wurde hinzugefügt, der es ermöglicht, eine Seite oder einen Rahmen innerhalb eines angegebenen Browsing-Kontexts neu zu laden ([Firefox Bug 1830859](https://bugzil.la/1830859)).

- Das Ereignis [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) wurde hinzugefügt, das ausgelöst wird, wenn ein Benutzer-Prompt vom Typ `alert`, `confirm` oder `prompt` geschlossen wird ([Firefox Bug 1824221](https://bugzil.la/1824221)).

- Das Ereignis [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es ermöglichen, die Lebensdauer von JavaScript-Realms eines bestimmten Browsing-Kontexts zu überwachen. Ein solches Realm ist im Wesentlichen eine isolierte Ausführungsumgebung (`sandbox`) mit einem eigenen globalen Objekt (window) ([Firefox Bug 1788657](https://bugzil.la/1788657), [Firefox Bug 1788659](https://bugzil.la/1788659)).

- Das Ereignis `browsingContext.userPromptOpened` wurde fälschlicherweise gesendet, wenn ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox Bug 1853302](https://bugzil.la/1853302)).

- Nicht gewünschte Ereignisse mit dem Feld `context`, das auf `null` gesetzt war, werden nicht mehr ausgegeben. Da der zugehörige Browsing-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mit dem Befehl `Addon:Install` zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox Bug 1852537](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
