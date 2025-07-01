---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: also bei der Verwendung von `create()`, um ein öffentliches Schlüssel-Anmeldeobjekt unter Verwendung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}
  - : Ein String, der die Präferenz der vertrauenden Instanz (Relying Party) angibt, wie die Attestierungsdaten (d.h. die Bereitstellung überprüfbarer Nachweise der Authentizität des Authentifikators und seiner Daten) während der Erstellung des Anmeldedatensatzes übermittelt werden. Der Wert kann einer der folgenden sein:
    - `"none"`
      - : Gibt an, dass die vertrauende Instanz kein Interesse an der Authentifikator-Attestierung hat. Dies könnte sein, um zusätzliche Nutzerzustimmungen für Hin- und Rückfahrten zum vertrauenden Instanz-Server zu vermeiden, um identifizierende Informationen zu übermitteln, oder für Fahrten zu einer Attestierungs-Zertifizierungsstelle (CA), mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA verwendet, um seine Attestierung auszustellen, wird die Client-App diese durch eine "None"-Attestierung ersetzen, was bedeutet, dass keine Attestierung verfügbar ist.

    - `"direct"`
      - : Gibt an, dass die vertrauende Instanz die Attestierung so erhalten möchte, wie sie vom Authentifikator generiert wurde.

    - `"enterprise"`
      - : Gibt an, dass die vertrauende Instanz eine Attestierung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Implementierungen innerhalb eines Unternehmens gedacht, wo die Organisation Registrierungen an bestimmte Authentifikatoren binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Instanz eine überprüfbare Attestierung erhalten möchte, die Entscheidung über die Art und Weise der Empfangnahme jedoch dem Client überlässt. Zum Beispiel könnte der Client wählen, die Behauptung des Authentifikators durch eine von einer Anonymisierungs-CA generierte zu ersetzen, um die Privatsphäre des Nutzers zu schützen.

    Wenn `attestation` weggelassen wird, ist der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}
  - : Ein Array von Strings, das die Präferenz der vertrauenden Instanz für das Format der vom Authentifikator verwendeten Attestierung angibt. Die Werte sollten von höchster zu niedrigster Präferenz geordnet werden und sollten als Hinweise gesehen werden — der Authentifikator kann sich entscheiden, eine Attestierung in einem anderen Format auszustellen. Eine Liste gültiger Formate finden Sie unter [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist `attestationFormats` standardmäßig ein leeres Array.

- `authenticatorSelection` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften Kriterien enthalten, die verwendet werden, um die möglichen Authentifikatoren für den Anmeldevorgang zu filtern. Dieses Objekt kann die Eigenschaften enthalten:
    - `authenticatorAttachment` {{optional_inline}}
      - : Ein String, der angibt, welche Art der Authentifikator-Befestigung für den gewählten Authentifikator erlaubt sein soll. Mögliche Werte sind:
        - `"platform"`
          - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (genannt ein **Platform-Authenticator**), daher kommuniziert WebAuthn über einen transportierenden Kanal, der für diese Plattform verfügbar ist, wie z. B. eine plattformspezifische API. Ein öffentliches Schlüssel-Anmeldeobjekt, das an einen Platform-Authenticator gebunden ist, wird als **Platform-Credential** bezeichnet.
        - `"cross-platform"`
          - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn läuft (genannt ein **Roaming-Authenticator**, da er zwischen verschiedenen Geräten wechseln kann), daher kommuniziert WebAuthn über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein öffentliches Schlüssel-Anmeldeobjekt, das an einen Roaming-Authenticator gebunden ist, wird als **Roaming-Credential** bezeichnet.

            Wenn weggelassen, kann jede Art von Authentifikator, entweder Plattform oder plattformübergreifend, für die Erstellung des Anmeldeobjekts ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, gibt es an, dass ein Resident Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber weiterhin in einigen Implementierungen verfügbar, um die Abwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert für `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}
      - : Ein String, der das Ausmaß spezifiziert, in dem die vertrauende Instanz wünscht, ein client-seitiges [entdeckbares Anmeldeobjekt](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (das heißt, eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die vertrauende Instanz keine Anmeldeobjekt-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **server-seitiges Anmeldeobjekt**, bei dem die vertrauende Instanz Anmeldeobjekt-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:
        - `"discouraged"`
          - : Die vertrauende Instanz bevorzugt die Erstellung eines server-seitigen Anmeldeobjekts, wird jedoch ein client-seitiges entdeckbares Anmeldeobjekt akzeptieren.
        - `"preferred"`
          - : Die vertrauende Instanz bevorzugt stark die Erstellung eines client-seitigen entdeckbaren Anmeldeobjekts, wird jedoch ein server-seitiges Anmeldeobjekt akzeptieren. Der Benutzeragent sollte den Nutzer, falls erforderlich, durch die Einrichtung der Nutzerauthentifizierung führen, um ein entdeckbares Anmeldeobjekt zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Instanz erfordert ein client-seitiges entdeckbares Anmeldeobjekt. Wenn keines erstellt werden kann, wird eine `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Siehe die [`create()`-Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions) für weitere Details.

        Wenn weggelassen, ist `residentKey` standardmäßig `"required"`, wenn `requireResidentKey` `true` ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}
      - : Ein String, der die Anforderungen der vertrauenden Instanz an die Nutzerauthentifizierung für den `create()`-Vorgang spezifiziert. Mögliche Werte sind:
        - `"discouraged"`
          - : Die vertrauende Instanz bevorzugt keine Nutzerauthentifizierung für den `create()`-Vorgang, um die Beeinträchtigung der Benutzererfahrung zu minimieren.
        - `"preferred"`
          - : Die vertrauende Instanz bevorzugt Nutzerauthentifizierung für den `create()`-Vorgang, wird jedoch nicht fehlschlagen, wenn die Nutzerauthentifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Instanz erfordert Nutzerauthentifizierung für den `create()`-Vorgang — wenn die Nutzerauthentifizierung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, ist der Standardwert für `userVerification` `"preferred"`.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} bereitgestellt vom Server der vertrauenden Instanz und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Anmeldeobjekte beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (identifiziert durch `user.id`). Dies wird von der vertrauenden Instanz bereitgestellt und vom Benutzeragenten überprüft, um die Erstellung eines neuen öffentlichen Schlüssel-Anmeldeobjekts auf einem Authentifikator zu vermeiden, der bereits ein Anmeldeobjekt für das angegebene Benutzerkonto zugeordnet hat. Jedes Element sollte die folgende Form haben:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} repräsentiert die bestehende Anmeldeobjekt-ID.

    - `transports` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transporte repräsentieren. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Anmeldeobjekts definiert. Derzeit kann dies einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft könnten weitere hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüssel-Anmeldeobjekt auf einem Authentifikator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Anmeldeobjekt mit einem anderen Authentifikator zu erstellen oder fehlschlagen, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standard ein leeres Array.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um spezifische zusätzliche Verarbeitungen durch den Client oder Authentifikator während des Anmeldeerstellungsprozesses anzugeben. Beispiele hierfür sind die Spezifizierung, ob ein zurückgegebenes Anmeldeobjekt entdeckbar ist oder ob die vertrauende Instanz große Blob-Daten, die mit einem Anmeldeobjekt verknüpft sind, speichern kann.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Das Verarbeiten von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`
  - : Ein {{jsxref("Array")}} von Objekten, die die von der vertrauenden Instanz unterstützten Schlüsselt-Typen und Signaturalgorithmen angeben, geordnet von am meisten bis am wenigsten bevorzugt. Der Client und der Authentifikator werden sich bemühen, ein Anmeldeobjekt des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:
    - `alg`
      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus repräsentiert, der für diesen Anmeldetyp verwendet werden soll. Es wird empfohlen, dass vertrauende Instanzen, die eine breite Palette von Authentifikatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Auswahlmöglichkeiten einschließen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Anmeldeobjekts definiert. Derzeit kann dies einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft könnten weitere hinzugefügt werden.

    Wenn keiner der aufgelisteten Anmeldetypen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`
  - : Ein Objekt, das die vertrauende Instanz beschreibt, die die Anmeldeerstellung angefordert hat. Es kann die folgenden Eigenschaften enthalten:
    - `id` {{optional_inline}}
      - : Ein String, der die ID der vertrauenden Instanz repräsentiert. Ein öffentliches Schlüssel-Anmeldeobjekt kann nur zur Authentifizierung mit der gleichen vertrauenden Instanz verwendet werden (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert), mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder ein Schema wie ein Standard-Original enthalten, aber das Domain-Schema muss `https` sein. Die `id` muss gleich der effektiven Domain des Ursprungs oder einem Domain-Suffix davon sein. Wenn beispielsweise der Ursprung der vertrauenden Instanz `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:
        - `login.example.com`
        - `example.com`

        Aber nicht:
        - `m.login.example.com`
        - `com`

        Wenn weggelassen, ist der Standardwert für `id` der Dokumenten-Ursprung — was in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der vertrauenden Instanz repräsentiert (z. B. `"Facebook"`). Das ist der Name, den der Benutzer bei der Erstellung oder Validierung einer WebAuthn-Operation angezeigt bekommt.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf das Abschluss des Erstellungsprozesses zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`
  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Anmeldeobjekt generiert wird. Es kann die folgenden Eigenschaften enthalten:
    - `displayName`
      - : Ein String, der einen benutzerfreundlichen Namen zum Anzeigen (Beispiel: `"Maria Sanchez"`) bereitstellt, der während der anfänglichen Registrierung durch den Benutzer bei der vertrauenden Instanz festgelegt wurde.

    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzeraccount repräsentiert. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige an den Benutzer gedacht.

    - `name`
      - : Ein String, der einen benutzerfreundlichen Bezeichner für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"elaina.sanchez@example.com"`), eine Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkonto-Bezeichner (zum Beispiel `"ElainaSanchez667"`) sein.

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, die Hinweise darauf geben, welche Authentifizierungs-UI der Benutzeragent dem Benutzer bereitstellen sollte.

    Die Werte können einer der folgenden sein:
    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsverfahren, möglicherweise abhängig von sowohl benutzer- als auch serverbasierten Mechanismen.

## Beispiele

### Erstellen eines öffentlichen Schlüssel-Anmeldeobjekts

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften spezifiziert und für den Rest die Standardwerte verwendet.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues öffentliches Schlüssel-Anmeldeobjekt zu erstellen.

```js
const publicKey = {
  challenge: challengeFromServer,
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
};

const publicKeyCredential = await navigator.credentials.create({ publicKey });
```

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das bei Erfolg mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekten aufgelöst wird, welches ein öffentliches Schlüssel-Anmeldeobjekt repräsentiert, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf verschiedene nützliche Informationen bietet, einschließlich der Authentifikatordaten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access attestationObject ArrayBuffer
  const attestationObj = response.attestationObject;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Return authenticator data ArrayBuffer
  const authenticatorData = response.getAuthenticatorData();

  // Return public key ArrayBuffer
  const pk = response.getPublicKey();

  // Return public key algorithm identifier
  const pkAlgo = response.getPublicKeyAlgorithm();

  // Return permissible transports array
  const transports = response.getTransports();
});
```

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Anmeldeobjekt gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transports.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
