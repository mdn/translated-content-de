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

- Das {{HTMLElement('input')}}-Element unterstützt das nicht standardisierte `mozactionhint`-Attribut nicht mehr. Verwenden Sie stattdessen [`enterkeyhint`](/de/docs/Web/HTML/Global_attributes/enterkeyhint). (Siehe [Firefox-Bug 1735980](https://bugzil.la/1735980) für weitere Details.)

### CSS

- Der Fallback-Wert der {{cssxref("attr")}}-CSS-Funktion wird jetzt unterstützt. Dies ermöglicht das Setzen eines Fallback-Wertes, der verwendet wird, wenn das [globale Attribut](/de/docs/Web/HTML/Global_attributes) fehlt ([Firefox-Bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- Die statischen Methoden {{jsxref("Object.groupBy()")}} und {{jsxref("Map.groupBy()")}} zur Gruppierung der Elemente eines Iterables werden nun unterstützt (Siehe [Firefox-Bug 1792650](https://bugzil.la/1792650) für weitere Details.)
- Die Methoden {{jsxref("String.prototype.isWellFormed()")}} und {{jsxref("String.prototype.toWellFormed()")}} können jeweils verwendet werden, um zu überprüfen, ob ein String wohlgeformten Unicode-Text enthält (d.h. keine [alleinstehenden Surrogate](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält) und um einen schlecht geformten String in wohlgeformten Unicode-Text zu bereinigen.
  (Siehe [Firefox-Bug 1850755](https://bugzil.la/1850755) für weitere Details).

### SVG

- Die [SVG-Attribute](/de/docs/Web/SVG/Attribute), die einen [`<length>`](/de/docs/Web/SVG/Content_type#length)-Wert akzeptieren, unterstützen nun [Level 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}}- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types) für alle SVG-Elemente. Dies ermöglicht die Größenänderung von SVG-Elementen basierend auf Schriftgrößen (`cap`, `rem` usw.), Anzeigefenster (`vh`, `vw`, `vmin` usw.) oder absoluten Längen (`px`, `cm` usw.), z.B. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (Siehe [Firefox-Bug 1287054](https://bugzil.la/1287054) für weitere Details).

### HTTP

- Die [`credentialless`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless)-Direktive des {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP-Response-Headers wird jetzt auf Desktop-Plattformen (und mobilen Plattformen außer Android) unterstützt, wodurch `no-cors`-Anfragen für Ressourcen auf Cross-Origin-Servern gestellt werden können, die nicht explizit zugestimmt haben, allerdings ohne Cookies oder andere Anmeldeinformationen ([Firefox-Bug 1851467](https://bugzil.la/1851467)).

### APIs

- Die relative Priorität für Sendeströme kann jetzt durch Einfügen der `sendOrder`-Eigenschaft in ein Optionsargument, das an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben wird, angegeben werden ([Firefox-Bug 1816925](https://bugzil.la/1816925)).
- Die Methoden [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) und [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) der Schnittstelle [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) werden jetzt unterstützt (siehe [Firefox-Bug 1816519](https://bugzil.la/1816519) und [Firefox-Bug 1816520](https://bugzil.la/1816520)).
- Die [Credential Properties Extension (`credProps`)](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) wird unterstützt und ermöglicht es Benutzern zu prüfen, ob Anmeldedaten nach der Erstellung/Registrierung auffindbar sind ([Firefox-Bug 1844437](https://bugzil.la/1844437)).
- Die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützt nun den [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus als Option für seinen Parameter [`derivedKeyAlgorithm`](/de/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) (siehe [Firefox-Bug 1851928](https://bugzil.la/1851928)).
- Die Methoden {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}, {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}} und {{domxref("PublicKeyCredential.toJSON", "toJSON()")}} der Schnittstelle {{domxref("PublicKeyCredential")}} werden jetzt unterstützt.
  Dies sind Komfortmethoden zum Umwandeln von Objekten, die zur Erstellung und zum Teilen von Anmeldeinformationen in JSON-Repräsentationen, die serialisiert/deserialisiert und mit einem Server geteilt werden können (siehe [Firefox-Bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/de/docs/Web/Accessibility/ARIA)-Reflektion wird nun standardmäßig für Attribute unterstützt, die sich nicht auf andere Elemente beziehen; nur Nicht-IDREF-Attribute werden reflektiert. Sie können nun ARIA-Attribute direkt über JavaScript-APIs auf DOM-Elementen abrufen und setzen, anstatt `setAttribute` und `getAttribute` zu verwenden. Zum Beispiel wird `buttonElement.ariaPressed = "true";` jetzt zusätzlich zu `buttonElement.setAttribute("aria-pressed", "true");` unterstützt ([Firefox-Bug 1785412](https://bugzil.la/1785412)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Beim Ausführen einer `pointerDown`-Aktion mit gedrückter mittlerer oder rechter Maustaste hatte das von dem betreffenden HTML-Element emittierte `mousedown`-Ereignis den Wert der `buttons`-Eigenschaft vertauscht ([Firefox-Bug 1850086](https://bugzil.la/1850086)).

- Beim Ausführen einer `scroll`-Aktion vom Eingabetyp `wheel` mit einem Ursprung, der auf `pointer` gesetzt war, wurde fälschlicherweise ein `invalid argument`-Fehler angezeigt, während diese Kombination laut aktueller WebDriver-Spezifikation nicht unterstützt wird ([Firefox-Bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Der [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload)-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Seite oder einen Frame, der innerhalb eines bestimmten Browsing-Kontextes angezeigt wird, neu zu laden ([Firefox-Bug 1830859](https://bugzil.la/1830859)).

- Das [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzereingabeaufforderung des Typs `alert`, `confirm` oder `prompt` geschlossen wurde ([Firefox-Bug 1824221](https://bugzil.la/1824221)).

- Das [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine neue Navigation von Firefox gestartet wird ([Firefox-Bug 1756595](https://bugzil.la/1756595)).

- Die Ereignisse [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) und [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) wurden hinzugefügt, die es Benutzern ermöglichen, die Lebensdauer von JavaScript-Reichen in einem bestimmten Browsing-Kontext zu überwachen. Ein solcher Bereich ist im Grunde eine isolierte Ausführungsumgebung (`sandbox`) mit einem eigenen einzigartigen globalen Objekt (Window) ([Firefox-Bug 1788657](https://bugzil.la/1788657), [Firefox-Bug 1788659](https://bugzil.la/1788659)).

- Das `browsingContext.userPromptOpened`-Ereignis wurde versehentlich gesendet, als ein HTTP-Authentifizierungsdialog geöffnet wurde ([Firefox-Bug 1853302](https://bugzil.la/1853302)).

- Ungewollte Ereignisse mit einem auf `null` gesetzten `context`-Feld werden nicht mehr ausgegeben. Da der zugrundeliegende Browser-Kontext geschlossen wurde, sind solche Ereignisse nicht mehr gültig ([Firefox-Bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- Die Liste der möglichen Fehlercodes beim Versuch, eine WebExtension mithilfe des `Addon:Install`-Befehls zu installieren, wurde aktualisiert, um den neuesten Fehlercodes von Firefox zu entsprechen ([Firefox-Bug 1852537](https://bugzil.la/1852537)).

## Ältere Versionen

{{Firefox_for_developers}}
