---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: Das heißt, wenn `create()` verwendet wird, um ein öffentliches Schlüssel-Zertifikat mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Eine Zeichenfolge, die die Präferenz der vertrauenden Partei dafür angibt, wie die Attestierungsdeklaration (z.B. die Bereitstellung von überprüfbaren Nachweisen der Authentizität des Authentifikators und seiner Daten) während der Erstellung des Zertifikats übermittelt werden soll. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die vertrauende Partei nicht an einer Authentifikatoren-Attestation interessiert ist. Dies könnte sein, um zusätzliche Benutzerzustimmungen für Rundreisen zum Server der vertrauenden Partei zur Weiterleitung von Identifikationsinformationen oder Rundreisen zu einer Attestierungs-Zertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess zu vereinfachen. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA zur Erstellung seiner Attestierungserklärung verwendet, wird die Client-App diese durch eine "None" Attestierungserklärung ersetzen, die anzeigt, dass keine Attestierungserklärung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die vertrauende Partei die Attestierungserklärung wie vom Authentifikator erstellt erhalten möchte.

    - `"enterprise"`

      - : Gibt an, dass die vertrauende Partei eine Attestierungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Implementierungen innerhalb eines Unternehmens gedacht, in denen die Organisation die Registrierungen mit bestimmten Authentifikatoren verknüpfen möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Attestierungserklärung erhalten möchte, jedoch dem Client erlaubt, zu entscheiden, wie sie empfangen wird. Zum Beispiel könnte der Client wählen, die Behauptungserklärung des Authentifikators durch eine von einer Anonymisierungs-CA generierte Erklärung zu ersetzen, um die Privatsphäre der Benutzer zu schützen.

    Wenn `attestation` weggelassen wird, wird es standardmäßig auf `"none"` gesetzt.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Zeichenfolgen, das die Präferenz der vertrauenden Partei für das von dem Authentifikator verwendete Attestierungserklärungsformat angibt. Die Werte sollten von der höchsten zur niedrigsten Präferenz geordnet sein und als Hinweise betrachtet werden - der Authentifikator kann sich entscheiden, eine Attestierungserklärung in einem anderen Format zu erstellen. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn `attestationFormats` weggelassen wird, ist der Standardwert ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien sind, die verwendet werden, um potenzielle Authentifikatoren für den Zertifikatserstellungsprozess herauszufiltern. Dieses Objekt kann die Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Eine Zeichenfolge, die angibt, welcher Authentifikator-Befestigungstyp für den gewählten Authentifikator erlaubt sein sollte. Mögliche Werte sind:

        - `"platform"`
          - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **plattformgebundener Authentifikator** bezeichnet), daher wird WebAuthn mit ihm über einen für diese Plattform verfügbaren Transport kommunizieren, wie eine plattformspezifische API. Ein öffentlicher Schlüsselanhang, der an einen plattformgebundenen Authentifikator gebunden ist, wird als **plattformgebundenes Zertifikat** bezeichnet.
        - `"cross-platform"`

          - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **roaming-authentifizierer** bezeichnet, da er zwischen verschiedenen Geräten wandern kann), daher wird WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC kommunizieren. Ein öffentlicher Schlüsselanhang, der an einen mobilen Authentifikator gebunden ist, wird als **mobiles Zertifikat** bezeichnet.

            Wenn weggelassen, kann jeder Authentifikatortyp, entweder plattformgebunden oder plattformübergreifend, für den Zertifikatserstellungsprozess ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein boolescher Wert. Wenn auf `true` gesetzt, gibt es an, dass ein Resident-Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar, um Abwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Eine Zeichenfolge, die angibt, in welchem Umfang die vertrauende Partei ein **clientseitig auffindbares Zertifikat** erstellen möchte (d.h. eines, das in Authentifizierungsanfragen verwendbar ist, bei denen die vertrauende Partei keine Zertifikats-IDs bereitstellt - [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverspezifisches Zertifikat**, bei dem die vertrauende Partei Zertifikats-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines serverspezifischen Zertifikats, akzeptiert aber ein clientseitig auffindbares Zertifikat.
        - `"preferred"`
          - : Die vertrauende Partei zieht stark die Erstellung eines clientseitig auffindbaren Zertifikats vor, akzeptiert aber ein serverspezifisches Zertifikat. Der Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls nötig, um ein auffindbares Zertifikat zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Partei erfordert ein clientseitig auffindbares Zertifikat. Wenn eines nicht erstellt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, wird `residentKey` standardmäßig auf `"required"` gesetzt, wenn `requireResidentKey` `true` ist, ansonsten ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Eine Zeichenfolge, die die Anforderungen der vertrauenden Partei an die Benutzerüberprüfung für die `create()`-Operation angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt keine Benutzerüberprüfung für die `create()`-Operation, um Störungen der Benutzererfahrung zu minimieren.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerüberprüfung für die `create()`-Operation, aber es wird nicht fehlschlagen, wenn die Benutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei erfordert eine Benutzerüberprüfung für die `create()`-Operation - wenn die Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, wird `userVerification` standardmäßig auf `"preferred"` gesetzt.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das vom Server der vertrauenden Partei bereitgestellt wird und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Zertifikate beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie von `user.id` identifiziert). Dies wird von der vertrauenden Partei bereitgestellt und vom Benutzeragenten überprüft, um zu vermeiden, dass ein neues öffentliches Schlüssel-Zertifikat auf einem Authentifikator erstellt wird, der bereits ein Zertifikat für das angegebene Benutzerkonto zugeordnet hat. für einen bestehenden Benutzer, der bereits einige besitzt. Jedes Element sollte die folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die existierende Zertifikats-ID repräsentiert.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Zeichenfolgen, die die erlaubten Transports repräsentieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für mehr Details).

    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann dieser Wert nur `"public-key"` annehmen, aber in Zukunft könnten mehr Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüssel-Zertifikat auf einem Authentifikator zu erstellen, wird der Benutzeragent den Benutzer führen, das Zertifikat mit einem anderen Authentifikator zu erstellen, oder fehlschlagen, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für beliebig angeforderte Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um spezifische zusätzliche Verarbeitungen durch den Client oder Authentifikator während des Zertifikatserstellungsprozesses zu spezifizieren. Beispiele umfassen die Angabe, ob ein zurückgegebener Nachweis erfahrbar ist oder ob die vertrauende Partei in der Lage sein wird, große Blob-Daten in Verbindung mit einem Nachweis zu speichern.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird er sie einfach ignorieren. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, sehen Sie sich [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) an.

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die vom Relying Party unterstützten Schlüsselktypen und Signaturalgorithmen spezifizieren, geordnet von am bevorzugtesten bis am wenigsten bevorzugt. Der Client und Authentifikator werden sich bemühen, ein Zertifikat des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht, der den kryptografischen Algorithmus für diesen Zertifikatstyp darstellt. Es wird empfohlen, dass vertrauende Parteien, die eine breite Palette an Authentifikatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen aufnehmen:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann dieser Wert nur `"public-key"` annehmen, aber in Zukunft könnten mehr Werte hinzugefügt werden.

    Wenn keiner der aufgeführten Zertifikatstypen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erstellung des Zertifikats angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Eine Zeichenfolge, die die ID der vertrauenden Partei repräsentiert. Ein öffentlicher Schlüsselanhang kann nur zur Authentifizierung mit der gleichen vertrauenden Partei verwendet werden (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert) mit der er registriert wurde — die IDs müssen übereinstimmen.

        Die `id` darf keinen Port oder ein Schema wie ein Standard-Ursprung enthalten, aber das Domainschema muss `https` sein. Die `id` muss der effektiven Domain des Ursprungs oder einem Domain-Suffix davon entsprechen. Beispielsweise, wenn der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn weggelassen, entspricht `id` standardmäßig dem Ursprungsdokument — was im obigen Beispiel `login.example.com` wäre.

    - `name`
      - : Eine Zeichenfolge, die den Namen der vertrauenden Partei repräsentiert (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer beim Erstellen oder Validieren eines WebAuthn-Vorgangs präsentiert wird.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der die Zeit angibt, die die aufrufende Web-App bereit ist, auf den Abschluss des Erstellungsvorgangs zu warten. Dieser Hinweis kann durch den Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Zertifikat generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Eine Zeichenfolge, die einen benutzerfreundlichen Anzeigennamen des Benutzers bereitstellt (Beispiel: `"John Doe"`), der vom Benutzer während der anfänglichen Registrierung mit der vertrauenden Partei festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige für den Benutzer gedacht.

    - `name`
      - : Eine Zeichenfolge, die eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse sein (wie `"john.doe@example.com"`), eine Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art der Benutzerkonto-Kennung (zum Beispiel `"johndoe667"`).

- `hints` {{optional_inline}}

  - : Ein Array von Zeichenfolgen, das Hinweise darauf gibt, welche Authentifizierungs-UI der Benutzer-Agent für den Benutzer bereitstellen sollte.

    Die Werte können eines der folgenden sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl auf Benutzer- als auch auf serverbasierten Mechanismen beruhen.

## Beispiele

### Erstellen eines öffentlichen Schlüsselzertifikats

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`-Objekt, das nur die erforderlichen Eigenschaften spezifiziert und für den Rest Standardwerte verwendet.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, die ein öffentliches Schlüsselzertifikat darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authentifikatordaten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server gespeichert werden, um zukünftige Authentifizierungsvorgänge gegen dieses Zertifikat durchzuführen — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen über den gesamten Ablauf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
