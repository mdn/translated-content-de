---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird, also wenn `create()` verwendet wird, um ein öffentliches Schlüsselzertifikat mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der vertrauenden Partei dafür angibt, wie die Attestierungserklärung (d.h. die Bereitstellung von überprüfbaren Beweisen für die Authentizität des Authentikators und seiner Daten) während der Erstellung des Zertifikats übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die vertrauende Partei nicht an der Authenticator-Attestierung interessiert ist. Dies könnte geschehen, um zusätzliche Benutzerzustimmungen für Rückwege zum Server der vertrauenden Partei zur Übermittlung von identifizierenden Informationen oder Rückwege zu einer Attestierungs-Zertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess zu vereinfachen. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA für die Erstellung seiner Attestierungserklärung verwendet, ersetzt die Client-App dies durch eine "None"-Attestierungserklärung, die anzeigt, dass keine Attestierungserklärung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die vertrauende Partei die Attestierungserklärung erhalten möchte, wie sie vom Authenticator generiert wurde.

    - `"enterprise"`

      - : Gibt an, dass die vertrauende Partei eine Attestierungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, bei denen die Organisation Registrierungen an bestimmte Authenticator binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Attestierungserklärung erhalten möchte, aber dem Client ermöglichen wird, zu entscheiden, wie sie erhalten wird. Zum Beispiel könnte der Client wählen, die Assertion-Erklärung des Authenticators durch eine von einer Anonymisierungs-CA generierte zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` ausgelassen wird, wird der Standardwert `"none"` verwendet.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der vertrauenden Partei für das von dem Authenticator verwendete Attestierungserklärungsformat angibt. Die Werte sollten von höchster bis niedrigster Präferenz angeordnet sein und als Hinweise betrachtet werden — der Authenticator kann wählen, eine Attestierungserklärung in einem anderen Format zu erstellen. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn ausgelassen, ist der Standardwert von `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien enthalten, um potenzielle Authenticatoren für den Zertifikatserstellungsvorgang zu filtern. Dieses Objekt kann folgende Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Befestigungstyp für den ausgewählten Authenticator erlaubt sein sollte. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn läuft (genannt ein **Platform-Authenticator**); daher kommuniziert WebAuthn mit ihm über eine auf dieser Plattform verfügbare Kommunikation wie eine plattformspezifische API. Ein an einen Platform-Authenticator gebundenes öffentliches Schlüsselzertifikat wird als **Platform Credential** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist nicht Teil des Geräts, auf dem WebAuthn läuft (bezeichnet als **Roaming Authenticator**, da er zwischen verschiedenen Geräten umherwandern kann); daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein an einen Roaming Authenticator gebundenes öffentliches Schlüsselzertifikat wird als **Roaming Credential** bezeichnet.

            Wenn ausgelassen, kann jeder Typ von Authenticator, entweder Platform oder Cross-Platform, für den Zertifikatserstellungsvorgang ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, zeigt er an, dass ein Resident Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen immer noch verfügbar, um die Rückwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn ausgelassen, ist der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Maße die vertrauende Partei wünscht, ein clientseitiges [entdeckbares Zertifikat](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (d.h. eines, das in Authentifizierungsanfragen verwendbar ist, bei denen die vertrauende Partei keine Zertifikats-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverseitiges Zertifikat**, bei dem die vertrauende Partei Zertifikats-IDs im `get()`-Wert `allowCredentials` bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines serverseitigen Zertifikats, akzeptiert aber ein clientseitiges entdeckbares Zertifikat.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt stark die Erstellung eines clientseitigen entdeckbaren Zertifikats, akzeptiert aber ein serverseitiges Zertifikat. Der Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls erforderlich, um ein entdeckbares Zertifikat zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Partei erfordert ein clientseitiges entdeckbares Zertifikat. Wenn eines nicht erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Weitere Details finden Sie in der [`create()` Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions).

        Wenn ausgelassen, ist der Standardwert von `residentKey` `"required"`, wenn `requireResidentKey` `true` ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der vertrauenden Partei für die Benutzerüberprüfung für den `create()`-Vorgang angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei möchte keine Benutzerüberprüfung für den `create()`-Vorgang, um Störungen der Benutzererfahrung zu minimieren.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerüberprüfung für den `create()`-Vorgang, aber es wird nicht fehlschlagen, wenn die Benutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei erfordert die Benutzerüberprüfung für den `create()`-Vorgang — wenn die Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn ausgelassen, ist der Standardwert von `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} bereitgestellt durch den Server der vertrauenden Partei und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Zertifikate beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie durch `user.id` identifiziert). Dies wird von der vertrauenden Partei bereitgestellt und vom Benutzeragent geprüft, um die Erstellung eines neuen öffentlichen Schlüsselzertifikats auf einem Authenticator zu vermeiden, der bereits ein Zertifikat für das angegebene Benutzerkonto hat. Jedes Element sollte die folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die bestehende Zertifikats-ID darstellt.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transporte repräsentieren. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüsselzertifikats definiert. Dieser kann derzeit einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüsselzertifikat auf einem Authenticator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Zertifikat mit einem anderen Authenticator zu erstellen, oder fehlschlagen, wenn das nicht möglich ist.

    Wenn `excludeCredentials` ausgelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authenticator während des Zertifikatserstellungsprozesses anzugeben. Beispiele beinhalten die Spezifizierung, ob ein zurückgegebenes Zertifikat entdeckbar ist oder ob die vertrauende Partei in der Lage sein wird, große Blob-Daten zu speichern, die mit einem Zertifikat verbunden sind.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird er sie einfach ignorieren. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication Extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die von der vertrauenden Partei unterstützten Schlüsseltypen und Signaturalgorithmen spezifizieren, geordnet von am meisten bis am wenigsten bevorzugt. Der Client und der Authenticator werden ihr Bestes tun, um ein Zertifikat des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht, der den kryptografischen Algorithmus darstellt, der für diesen Zertifikatstyp verwendet werden soll. Es wird empfohlen, dass vertrauende Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen einbeziehen:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüsselzertifikats definiert. Dieser kann derzeit einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Zertifikatstypen erstellt werden kann, schlägt der `create()`-Vorgang fehl.

- `rp`

  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erstellung des Zertifikats angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der vertrauenden Partei repräsentiert. Ein öffentliches Schlüsselzertifikat kann nur zur Authentifizierung mit der gleichen vertrauenden Partei verwendet werden (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert), mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder ein Schema wie ein Standard-Ursprung enthalten, aber das Domain-Schema muss ein `https`-Schema sein. Die `id` muss der effektiven Domain des Ursprungs gleich sein oder ein Domain-Suffix davon. Wenn zum Beispiel der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn ausgelassen, ist der Standardwert der `id` der Dokumentenursprung — der in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der vertrauenden Partei repräsentiert (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer präsentiert wird, wenn er eine WebAuthn-Operation erstellt oder validiert.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der anzeigt, wie lange die aufrufende Web-App bereit ist, auf den Abschluss des Erstellungsvorgangs zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Zertifikat generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Anzeigennamen für den Benutzer bietet (Beispiel: `"John Doe"`), der bei der ersten Registrierung bei der vertrauenden Partei vom Benutzer festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige für den Benutzer gedacht.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto liefert, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (z.B. `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkontokennung (zum Beispiel `"johndoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf liefert, welche Authentifizierungs-UI der Benutzeragent für den Benutzer bereitstellen sollte.

    Die Werte können eine der folgenden sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie z.B. einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die potenziell sowohl auf Benutzer- als auch auf serverbasierte Mechanismen zurückgreifen.

## Beispiele

### Erstellen eines öffentlichen Schlüsselzertifikats

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften spezifiziert und für den Rest Standardwerte verwendet.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues öffentliches Schlüsselzertifikat zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Promise zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, die ein öffentliches Schlüsselzertifikat repräsentiert, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-`get()`-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationsstücke bietet, einschließlich Authenticator-Daten, öffentlicher Schlüssel, Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Zertifikat gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
