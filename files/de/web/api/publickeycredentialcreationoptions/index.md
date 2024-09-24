---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`** Dictionary repräsentiert das Objekt, das als Wert der `publicKey`-Option an {{domxref("CredentialsContainer.create()")}} übergeben wird: das heißt, wenn `create()` verwendet wird, um mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ein Public Key Credential zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der Relying Party angibt, wie die Attestationsaussage (d. h. Bereitstellung überprüfbarer Beweise über die Authentizität des Authentifikators und seiner Daten) während der Erstellung des Credentials vermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die Relying Party nicht an einer Authenticator-Attestation interessiert ist. Dies könnte dazu dienen, zusätzliche Benutzerzustimmungen für Roundtrips zum Relying-Party-Server zur Weiterleitung von Identifikationsinformationen oder für Roundtrips zu einer Attestierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess zu vereinfachen. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA verwendet, um seine Attestationsaussage zu generieren, wird die Client-App diese mit einer "None" Attestationsaussage ersetzen, die angibt, dass keine Attestationsaussage verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die Relying Party die von dem Authenticator generierte Attestationsaussage erhalten möchte.

    - `"enterprise"`

      - : Gibt an, dass die Relying Party eine Attestationsaussage erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Implementierungen innerhalb eines Unternehmens gedacht, in denen die Organisation die Registrierung mit bestimmten Authenticatoren verknüpfen möchte.

    - `"indirect"`
      - : Gibt an, dass die Relying Party eine überprüfbare Attestationsaussage erhalten möchte, dem Client jedoch erlaubt, zu entscheiden, wie diese empfangen werden soll. Zum Beispiel könnte der Client wählen, die Authenticator-Aussage durch eine von einer Anonymisierungs-CA generierte zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, wird es standardmäßig auf `"none"` gesetzt.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der Relying Party für das Attestationsaussagenformat angibt, das vom Authenticator verwendet werden soll. Werte sollten von höchster bis niedrigster Präferenz geordnet werden und sind als Hinweise zu verstehen — der Authenticator kann sich entscheiden, eine Attestationsaussage in einem anderen Format auszustellen. Für eine Liste gültiger Formate, siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn es weggelassen wird, wird `attestationFormats` standardmäßig auf ein leeres Array gesetzt.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien sind, um die potenziellen Authenticatoren für die Erstellung des Credentials zu filtern. Dieses Objekt kann die Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Anhangstyp für den gewählten Authenticator erlaubt sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn läuft (ein **plattformspezifischer Authenticator**), daher kommuniziert WebAuthn mit ihm über einen für diese Plattform verfügbaren Transport, wie z.B. eine plattformspezifische API. Ein an einen plattformspezifischen Authenticator gebundenes Public Key Credential wird als **plattformgebundenes Credential** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist nicht Teil des Geräts, auf dem WebAuthn läuft (ein **roaming Authenticator**, da er zwischen verschiedenen Geräten wandern kann), daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein an einen roaming Authenticator gebundenes Public Key Credential wird als **roaming Credential** bezeichnet.

            Wenn es weggelassen wird, kann jeder Authenticator-Typ, entweder Plattform oder plattformübergreifend, für den Credential-Erstellungsvorgang ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, bedeutet es, dass ein Resident-Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar für die Rückwärtskompatibilität mit WebAuthn Level 1. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn es weggelassen wird, wird `requireResidentKey` standardmäßig auf `false` gesetzt.

    - `residentKey` {{optional_inline}}

      - : Ein String, der das Ausmaß angibt, in dem die Relying Party ein **clientseitig entdeckbares Credential** (d.h., eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die Relying Party keine Credential-IDs bereitstellt — {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} wird mit einem leeren `allowCredentials`-Wert aufgerufen) erstellen möchte. Die Alternative ist ein **serverseitiges Credential**, bei dem die Relying Party Credential-IDs im `get()`-Wert `allowCredentials` bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die Relying Party bevorzugt die Erstellung eines serverseitigen Credentials, akzeptiert jedoch ein clientseitig entdeckbares Credential.
        - `"preferred"`
          - : Die Relying Party bevorzugt stark die Erstellung eines clientseitig entdeckbaren Credentials, akzeptiert jedoch ein serverseitiges Credential. Der Nutzer-Agent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, wenn nötig, um ein entdeckbares Credential zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die Relying Party erfordert ein clientseitig entdeckbares Credential. Wenn eines nicht erstellt werden kann, wird ein Fehler ausgelöst.

        Wenn `residentKey` weggelassen wird, lautet der Standardwert `"required"`, wenn `requireResidentKey` auf `true` gesetzt ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der Relying Party an die Benutzerüberprüfung für die `create()`-Operation angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die Relying Party bevorzugt keine Benutzerüberprüfung für die `create()`-Operation, um Störungen in der Benutzererfahrung zu minimieren.
        - `"preferred"`
          - : Die Relying Party bevorzugt Benutzerüberprüfung für die `create()`-Operation, aber es wird nicht fehlschlagen, wenn keine Benutzerüberprüfung durchgeführt werden kann.
        - `"required"`
          - : Die Relying Party erfordert die Benutzerüberprüfung für die `create()`-Operation — wenn die Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn es weggelassen wird, wird `userVerification` standardmäßig auf `"preferred"` gesetzt.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der Relying Party und als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil von {{domxref("AuthenticatorAttestationResponse.attestationObject")}} zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Credentials beschreiben, die bereits diesem Benutzerkonto (wie durch `user.id` identifiziert) zugeordnet sind. Dies wird von der Relying Party bereitgestellt und vom Benutzeragenten überprüft, um zu verhindern, dass ein neues Public Key Credential auf einem Authenticator erstellt wird, der bereits ein Credential hat, das dem angegebenen Benutzerkonto zugeordnet ist. für einen bestehenden Benutzer, der bereits einige hat. Jedes Element sollte die folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die bestehende Credential-ID repräsentiert.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transports darstellen. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe {{domxref("AuthenticatorAttestationResponse.getTransports", "getTransports()")}} für mehr Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Dieser kann derzeit einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes Public Key Credential auf einem Authenticator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Credential mit einem anderen Authenticator zu erstellen, oder fehlschlagen, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, wird es standardmäßig auf ein leeres Array gesetzt.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um eine spezifische zusätzliche Verarbeitung durch den Client oder Authenticator während des Credential-Erstellungsprozesses anzugeben. Beispiele sind die Festlegung, ob ein zurückgegebenes Credential entdeckbar ist, oder ob die Relying Party große Blob-Daten, die mit einem Credential verbunden sind, speichern kann.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird er sie einfach ignorieren. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die Schlüsseltypen und Signaturalgorithmen spezifizieren, die die Relying Party unterstützt, geordnet von am meisten bevorzugt bis am wenigsten bevorzugt. Der Client und der Authenticator werden sich bemühen, ein Credential vom höchstmöglich bevorzugten Typ zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE-Algorithmus-ID](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptographischen Algorithmus repräsentiert, der für diesen Credential-Typ verwendet wird. Es wird empfohlen, dass Relying Parties, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Auswahlmöglichkeiten aufnehmen:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Dieser kann derzeit einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn keiner der aufgeführten Credential-Typen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die Relying Party beschreibt, die die Credential-Erstellung angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der Relying Party repräsentiert. Ein Public Key Credential kann nur zur Authentifizierung bei der gleichen Relying Party (wie durch die `publicKey.rpId` in einem {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} Aufruf identifiziert) verwendet werden, bei der es registriert wurde — die IDs müssen übereinstimmen.

        Der `id` kann keinen Port oder ein Schema wie ein Standard-Ursprung enthalten, aber das Domänenschema muss das `https`-Schema sein. Der `id` muss der effektiven Domäne des Ursprungs entsprechen oder ein Domänensuffix davon sein. Wenn zum Beispiel der Ursprung der Relying Party `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn es weggelassen wird, wird `id` standardmäßig auf den Dokumentursprung gesetzt — was in diesem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der Relying Party repräsentiert (z.B. `"Facebook"`). Dies ist der Name, den der Benutzer bei der Erstellung oder Validierung einer WebAuthn-Operation präsentiert bekommt.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der die Zeit angibt, die die aufrufende Web-App bereit ist, auf den Abschluss der Erstellung zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der ein benutzerfreundlicher Benutzeranzeigename bereitstellt (Beispiel: `"John Doe"`), der vom Benutzer während der Erstregistrierung bei der Relying Party festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert darf maximal 64 Bytes lang sein und ist nicht zur Anzeige für den Benutzer gedacht.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkontokennung (zum Beispiel `"johndoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-Benutzeroberfläche der Benutzeragent bereitstellen soll.

    Die Werte können folgende sein:

    - `"security-key"`
      - : Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, beispielsweise einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die sich möglicherweise sowohl auf benutzer- als auch auf serverbasierte Mechanismen stützen.

## Beispiele

### Erstellung eines Public Key Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften angibt und für den Rest die Standardeinstellungen verwendet.

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

Ein erfolgreicher `create()`-Aufruf gibt einen Promise zurück, der mit einem {{domxref("PublicKeyCredential")}}-Objekt aufgelöst wird, das ein Public Key Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-{{domxref("CredentialsContainer.get()", "get()")}}-Aufruf zu authentifizieren. Seine {{domxref("PublicKeyCredential.response")}}-Eigenschaft enthält ein {{domxref("AuthenticatorAttestationResponse")}}-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des Public Key, der Transportmechanismen und mehr.

```js
navigator.credentials.create({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Zugriff auf attestationObject ArrayBuffer
  const attestationObj = response.attestationObject;

  // Zugriff auf client JSON
  const clientJSON = response.clientDataJSON;

  // Authenticator-Daten ArrayBuffer zurückgeben
  const authenticatorData = response.getAuthenticatorData();

  // Public Key ArrayBuffer zurückgeben
  const pk = response.getPublicKey();

  // Public Key-Algorithmus-ID zurückgeben
  const pkAlgo = response.getPublicKeyAlgorithm();

  // Erlaubte Transports-Array zurückgeben
  const transports = response.getTransports();
});
```

Einige dieser Daten müssen auf dem Server gespeichert werden, um künftige Authentifizierungsoperationen gegen dieses Credential durchzuführen — zum Beispiel der Public Key, der verwendete Algorithmus und die erlaubten Transports.

Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellung eines Schlüsselpaares und Registrierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
