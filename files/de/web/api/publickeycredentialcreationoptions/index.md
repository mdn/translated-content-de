---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der Option `publicKey` übergeben wird: Das heißt, beim Verwenden von `create()` zur Erstellung eines Public Key Credentials mithilfe der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API).

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der vertrauenden Partei dafür spezifiziert, wie die Attestation-Statement (d.h. der Nachweis der Authentizität des Authenticators und seiner Daten) während der Erstellung des Credentials übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die vertrauende Partei nicht an der Authenticator-Attestation interessiert ist. Dies könnte sein, um zusätzliche Benutzerzustimmungen für Rundreisen zum Server der vertrauenden Partei, um identifizierende Informationen weiterzuleiten, oder Rundreisen zu einer Attestation-Zertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA zur Erstellung seiner Attestation-Statement verwendet, wird die Client-App es durch eine "None"-Attestation-Statement ersetzen, was anzeigt, dass keine Attestation-Statement verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die vertrauende Partei die von dem Authenticator generierte Attestation-Statement erhalten möchte.

    - `"enterprise"`

      - : Gibt an, dass die vertrauende Partei eine Attestation-Statement erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, bei denen die Organisation Registrierungen an bestimmte Authenticatoren binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Attestation-Statement erhalten möchte, jedoch dem Client erlaubt, zu entscheiden, wie er sie erhält. Zum Beispiel könnte der Client wählen, die Assertion-Statement des Authenticators durch eine von einer Anonymisierungs-CA erzeugte zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wird `attestation` weggelassen, ist der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, die die Präferenz der vertrauenden Partei für das von dem Authenticator verwendete Attestation-Statement-Format spezifizieren. Die Werte sollten von höchster zu niedrigster Präferenz sortiert sein und stellen Hinweise dar — der Authenticator kann wählen, ein Attestation-Statement in einem anderen Format auszustellen. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist der Standardwert für `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien sind, die verwendet werden, um potenzielle Authenticatoren für die Erstellung des Credentials auszufiltern. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Anhangstyp für den gewählten Authenticator erlaubt sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **Plattform-Authenticator**), daher kommuniziert WebAuthn mit ihm über einen Transport, der auf dieser Plattform verfügbar ist, wie z. B. eine plattformspezifische API. Ein Public Key Credential, das an einen Plattform-Authenticator gebunden ist, wird als **Plattform-Credential** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist kein Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **Roaming-Authenticator**, da es zwischen verschiedenen Geräten wandern kann), daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein Public Key Credential, das an einen Roaming-Authenticator gebunden ist, wird als **Roaming-Credential** bezeichnet.

            Bei Nichtangabe kann jeder Authenticator-Typ, entweder Plattform oder plattformübergreifend, für die Erstellung des Credentials ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, gibt es an, dass ein Resident-Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch für die Rückwärtskompatibilität mit WebAuthn Level 1 verfügbar. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Bei Nichtangabe ist der Standardwert für `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Ausmaß die vertrauende Partei wünscht, ein Client-seitiges [Discoverable Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (das heißt, eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die vertrauende Partei keine Credential-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **Server-seitiges Credential**, bei dem die vertrauende Partei Credential-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines Server-seitigen Credentials, akzeptiert aber ein Client-seitiges Discoverable Credential.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt stark die Erstellung eines Client-seitigen Discoverable Credentials, akzeptiert jedoch ein Server-seitiges Credential. Der User-Agent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls erforderlich, um ein Discoverable Credential zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Partei erfordert ein Client-seitiges Discoverable Credential. Wenn keines erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Siehe die [`create()` Exceptions-Liste](/de/docs/Web/API/CredentialsContainer/create#exceptions) für weitere Details.

        Wenn weggelassen, ist der Standardwert für `residentKey` `"required"`, wenn `requireResidentKey` `true` ist, ansonsten ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der vertrauenden Partei für die Benutzerverifizierung bei der `create()`-Operation angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt keine Benutzerverifizierung für die `create()`-Operation, um die Benutzererfahrung möglichst wenig zu stören.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerverifizierung für die `create()`-Operation, aber es wird nicht fehlschlagen, wenn die Benutzerverifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei erfordert die Benutzerverifizierung für die `create()`-Operation — wenn die Benutzerverifizierung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Bei Nichtangabe ist der Standardwert für `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} wird vom Server der vertrauenden Partei bereitgestellt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesandt.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Credentials beschreiben, die bereits zu diesem Benutzerkonto (identifiziert durch `user.id`) zugeordnet sind. Dies wird von der vertrauenden Partei bereitgestellt und vom User-Agent überprüft, um zu vermeiden, dass ein neues Public Key Credential auf einem Authenticator erstellt wird, der bereits ein Credential für das angegebene Benutzerkonto zugeordnet hat. Jedes Element sollte folgendes Format haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} stellt die vorhandene Credential-ID dar.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transports repräsentieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Derzeit kann dieser nur den Wert `"public-key"` annehmen, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes Public Key Credential auf einem Authenticator zu erstellen, wird der User-Agent den Benutzer anleiten, das Credential mit einem anderen Authenticator zu erstellen, oder scheitern, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authenticator während des Credential-Erstellungsprozesses anzugeben. Beispiele umfassen die Angabe, ob ein zurückgegebenes Credential auffindbar ist, oder ob die vertrauende Partei in der Lage sein wird, große Blob-Daten im Zusammenhang mit einem Credential zu speichern.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird sie einfach ignoriert. Für Informationen zur Verwendung von Erweiterungen und zu den von welchen Browsern unterstützten Erweiterungen siehe [Web-Authentifizierungs-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die unterstützten Schlüsselsignaturalgorithmen der vertrauenden Partei spezifizieren, geordnet von der am meisten bis zur am wenigsten bevorzugten. Der Client und der Authenticator werden sich bemühen, ein Credential vom bevorzugtesten Typ zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus für diesen Credential-Typ darstellt. Es wird empfohlen, dass vertrauende Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen einschließen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Derzeit kann dieser nur den Wert `"public-key"` annehmen, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Credential-Typen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erstellung des Credentials angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der vertrauenden Partei darstellt. Ein Public Key Credential kann nur zur Authentifizierung bei derselben vertrauenden Partei (wie durch `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert) verwendet werden, mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder Schema wie ein Standard-Ursprung enthalten, aber das Domain-Schema muss `https` Schema sein. Die `id` muss dem effektiven Domain-Ursprung entsprechen oder ein Domain-Suffix davon sein. Zum Beispiel, wenn der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn weggelassen, entspricht der Standardwert der `id` dem Ursprungsdokument — was in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der vertrauenden Partei darstellt (z. B. `"Facebook"`). Dies ist der Name, der dem Benutzer angezeigt wird, wenn er eine WebAuthn-Operation erstellt oder validiert.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf die Fertigstellung der Erstellung zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Benutzernamen anzeigt (Beispiel: `"John Doe"`), der vom Benutzer während der anfänglichen Registrierung bei der vertrauenden Partei festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} repräsentiert eine eindeutige ID für das Benutzerkonto. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige an den Benutzer bestimmt.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zu helfen, zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`), oder eine andere Art von Benutzerkontokennung (zum Beispiel `"JohnDoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-UI der User-Agent für den Benutzer bereitstellen sollte.

    Die Werte können im Folgenden liegen:

    - `"security-key"`
      - : Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl den Benutzer als auch serverbasierte Mechanismen einbeziehen.

## Beispiele

### Erstellung eines Public Key Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften angibt und für den Rest Standardwerte verwendet.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues Public Key Credential zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein `Promise` zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, das ein Public Key Credential repräsentiert, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-`get()`-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugang zu mehreren nützlichen Informationsstücken bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsoperationen gegen dieses Credential gespeichert werden — beispielsweise der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transports.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
