---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 0ee2e4af1d885177820a8fc27131caa5d800a0bd
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`** Dictionary stellt das Objekt dar, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: das heißt, wenn `create()` verwendet wird, um ein Public Key Credential mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}
  - : Ein String, der die Vorliebe der vertrauenden Partei für die Art und Weise angibt, wie die Attestationsaussage (d.h. die Bereitstellung überprüfbarer Nachweise der Authentizität des Authenticators und seiner Daten) während der Erstellung des Credentials übermittelt wird. Der Wert kann einer der folgenden sein:
    - `"none"`
      - : Gibt an, dass die vertrauende Partei nicht an einem Authenticator-Attestation interessiert ist. Dies könnte dazu dienen, zusätzliche Benutzerzustimmungen für Roundtrips zum vertrauenden Parteiserver zu vermeiden, um identifizierende Informationen zu übermitteln, oder Roundtrips zu einer Attestation-Zertifizierungsstelle (CA), um den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA verwendet, um seine Attestationsaussage zu generieren, ersetzt die Client-App sie durch eine "None"-Attestationsaussage, die anzeigt, dass keine Attestationsaussage verfügbar ist.

    - `"direct"`
      - : Gibt an, dass die vertrauende Partei die von dem Authenticator generierte Attestationsaussage erhalten möchte.

    - `"enterprise"`
      - : Gibt an, dass die vertrauende Partei eine Attestationsaussage erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, in denen die Organisation Registrierungen an bestimmte Authenticator binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Attestationsaussage erhalten möchte, aber dem Client überlassen wird, wie sie empfangen wird. Zum Beispiel könnte der Client wählen, die Assertion-Aussage des Authenticators durch eine von einer Anonymisierungs-CA zu ersetzende, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, ist der Standard `none`.

- `attestationFormats` {{optional_inline}}
  - : Ein Array von Strings, das die Präferenz der vertrauenden Partei für das von dem Authenticator verwendete Format der Attestationsaussage angibt. Die Werte sollten von höchster bis niedrigster Präferenz geordnet sein und als Hinweise betrachtet werden – der Authenticator kann wählen, eine Attestationsaussage in einem anderen Format auszustellen. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist `attestationFormats` standardmäßig ein leeres Array.

- `authenticatorSelection` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften Kriterien sind, die potenzielle Authenticator für den Credential-Erstellungsvorgang filtern. Dieses Objekt kann folgende Eigenschaften enthalten:
    - `authenticatorAttachment` {{optional_inline}}
      - : Ein String, der angibt, welcher Authenticator-Anschlusstyp für den gewählten Authenticator zulässig sein soll. Mögliche Werte sind:
        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **Plattformauthenticator**), daher kommuniziert WebAuthn mit ihm über einen transport, der auf dieser Plattform verfügbar ist, wie eine plattformspezifische API. Ein an einen Plattformauthenticator gebundenes Public Key Credential wird als **Plattformcredential** bezeichnet.
        - `"cross-platform"`
          - : Der Authenticator ist nicht Teil des Geräts, auf dem WebAuthn läuft (ein sogenannter **mobiler Authenticator**, da er zwischen verschiedenen Geräten wandern kann), daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein an einen mobilen Authenticator gebundenes Public Key Credential wird als **mobiles Credential** bezeichnet.

            Wenn weggelassen, kann jeder Typ von Authenticator, entweder Plattform oder plattformübergreifend, für den Credential-Erstellungsvorgang ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}
      - : Ein boolescher Wert. Wenn auf `true` gesetzt, bedeutet dies, dass ein Resident Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen für die Rückwärtskompatibilität mit WebAuthn Level 1 noch verfügbar. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist `requireResidentKey` standardmäßig `false`.

    - `residentKey` {{optional_inline}}
      - : Ein String, der angibt, in welchem Maße die vertrauende Partei wünscht, ein client-seitiges [Discoverable Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (also eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die vertrauende Partei keine Credential-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **Server-seitiges Credential**, bei dem die vertrauende Partei Credential-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:
        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines Server-seitigen Credentials, akzeptiert jedoch ein client-seitiges Discoverable Credential.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt stark die Erstellung eines client-seitigen Discoverable Credentials, akzeptiert jedoch ein Server-seitiges Credential. Der Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerverifizierung führen, falls erforderlich, um ein Discoverable Credential zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Partei erfordert ein client-seitiges Discoverable Credential. Wenn eines nicht erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) geworfen. Weitere Details siehe die [`create()` Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions).

        Wenn weggelassen, ist `residentKey` standardmäßig `"required"`, wenn `requireResidentKey` `true` ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}
      - : Ein String, der die Anforderungen der vertrauenden Partei an die Benutzerverifizierung für den `create()`-Vorgang angibt. Mögliche Werte sind:
        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt keine Benutzerverifizierung für den `create()`-Vorgang, um Störungen des Benutzererlebnisses zu minimieren.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerverifizierung für den `create()`-Vorgang, aber es wird nicht fehlschlagen, wenn die Benutzerverifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei erfordert die Benutzerverifizierung für den `create()`-Vorgang — wenn die Benutzerverifizierung nicht ausgeführt werden kann, wird ein Fehler geworfen.

        Wenn weggelassen, ist `userVerification` standardmäßig `"preferred"`.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt durch den Server der vertrauenden Partei und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authenticator unterschrieben und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Credentials beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie durch `user.id` identifiziert). Dies wird von der vertrauenden Partei bereitgestellt und vom Benutzeragenten überprüft, um die Erstellung eines neuen Public Key Credentials auf einem Authenticator zu vermeiden, der bereits ein Credential zu dem angegebenen Benutzerkonto zugeordnet hat. Jedes Element sollte die folgende Form haben:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die bestehende Credential-ID darstellt.

    - `transports` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transports repräsentieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für mehr Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Dies kann derzeit einen einzelnen Wert haben, `"public-key"`, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn der `create()` Aufruf versucht, ein doppeltes Public Key Credential auf einem Authenticator zu erstellen, wird der Benutzeragent den Benutzer dazu leiten, das Credential mit einem anderen Authenticator zu erstellen, oder er scheitert, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um spezifische zusätzliche Verarbeitung durch den Client oder Authenticator während des Credential-Erstellungsvorgangs zu spezifizieren. Beispiele beinhalten die Angabe, ob ein zurückgegebenes Credential auffindbar ist, oder ob die vertrauende Partei große Blobs von Daten, die mit einem Credential verbunden sind, speichern kann.

    Erweiterungen sind optional und unterschiedliche Browser können verschiedene Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`
  - : Ein {{jsxref("Array")}} von Objekten, die die Schlüsselt-Typen und Signatur-Algorithmen spezifizieren, die die vertrauende Partei unterstützt, geordnet von der bevorzugtesten bis zur am wenigsten bevorzugten. Der Client und der Authenticator werden sich bemühen, ein Credential des bevorzugtesten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:
    - `alg`
      - : Eine Zahl, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus für diesen Credential-Typ darstellt. Es wird empfohlen, dass vertrauende Parteien, die eine große Bandbreite an Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen einschließen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Dies kann derzeit einen einzelnen Wert haben, `"public-key"`, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Credential-Typen erstellt werden kann, schlägt der `create()`-Vorgang fehl.

- `rp`
  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erstellung des Credentials angefordert hat. Es kann die folgenden Eigenschaften enthalten:
    - `id` {{optional_inline}}
      - : Ein String, der die ID der vertrauenden Partei repräsentiert. Ein Public Key Credential kann nur zur Authentifizierung mit der gleichen vertrauenden Partei (wie durch `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert) verwendet werden, mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder Scheme wie ein standardmäßiger Ursprung enthalten, aber das Schema der Domäne muss das `https` Schema sein. Die `id` muss der effektiven Domäne des Ursprungs entsprechen oder ein Domainsuffix davon sein. So sind zum Beispiel, wenn der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, folgende `id`s gültig:
        - `login.example.com`
        - `example.com`

        Aber nicht:
        - `m.login.example.com`
        - `com`

        Wenn weggelassen, ist `id` standardmäßig der Dokumentenursprung — was in diesem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der vertrauenden Partei repräsentiert (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer bei der Erstellung oder Validierung eines WebAuthn-Vorgangs angezeigt wird.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf die Fertigstellung des Erstellungsvorgangs zu warten. Dieser Hinweis kann durch den Browser überschrieben werden.

- `user`
  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann folgende Eigenschaften enthalten:
    - `displayName`
      - : Ein String, der einen benutzerfreundlichen Anzeigenamen bereitstellt (Beispiel: `"John Doe"`), der vom Benutzer bei der erstmaligen Registrierung mit der vertrauenden Partei festgelegt wird.

    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht dafür gedacht, dem Benutzer angezeigt zu werden.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`), oder eine andere Art von Benutzerkonto-Kennung (zum Beispiel `"JohnDoe667"`) sein.

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, das Hinweise darauf liefert, welche Authentifizierung-UI der Benutzeragent dem Benutzer bereitstellen sollte.

    Die Werte können folgende sein:
    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates, dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, möglicherweise sowohl auf Benutzer- als auch auf serverbasierten Mechanismen.

## Beispiele

### Erstellen eines Public Key Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, spezifiziert nur die erforderlichen Eigenschaften und verwendet Standardwerte für den Rest.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, das ein Public Key Credential repräsentiert, das später über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zur Authentifizierung eines Benutzers verwendet werden kann. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Objekt, das Zugriff auf mehrere nützliche Informationen, darunter Authenticator-Daten, Public Key, Transportmechanismen und mehr, bietet.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Credential gespeichert werden — zum Beispiel der Public Key, der verwendete Algorithmus und die erlaubten Transportmittel.

Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
