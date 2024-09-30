---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: Das heißt, wenn `create()` verwendet wird, um berechtigte öffentliche Schlüssel mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der vertrauenden Partei spezifiziert, wie die Attestierungsanweisung (d.h. die Bereitstellung überprüfbarer Nachweise über die Echtheit des Authentifikators und seiner Daten) während der Erstellung des Schlüssels vermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die vertrauende Partei sich nicht für die Authentifikator-Attestierung interessiert. Dies könnte dazu dienen, zusätzliche Benutzerzustimmungen für Rückreisen zum Server der vertrauenden Partei zur Übermittlung von Identifikationsinformationen oder Rückreisen zu einer Attestierungszertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA zur Erstellung seiner Attestierungsanweisung verwendet, wird die Client-App dies durch eine "Keine"-Attestierungsanweisung ersetzen, was anzeigt, dass keine Attestierungsanweisung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die vertrauende Partei die von dem Authentifikator generierte Attestierungsanweisung erhalten möchte.

    - `"enterprise"`

      - : Gibt an, dass die vertrauende Partei eine Attestierungsanweisung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, bei denen die Organisation Registrierungen mit bestimmten Authentifikatoren verknüpfen möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Attestierungsanweisung erhalten möchte, jedoch dem Client erlaubt, zu entscheiden, wie diese empfangen werden soll. Der Client könnte beispielsweise die Authentifikator-Aussage durch eine von einer Anonymisierungs-CA erzeugte ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` nicht angegeben wird, lautet der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der vertrauenden Partei für das Format der von dem Authentifikator verwendeten Attestierungsanweisung spezifiziert. Die Werte sollten in der Reihenfolge von der höchsten zur niedrigsten Präferenz geordnet sein und als Hinweise betrachtet werden — der Authentifikator kann sich entscheiden, eine Attestierungsanweisung in einem anderen Format zu verwenden. Eine Liste gültiger Formate finden Sie unter [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Falls nicht angegeben, hat `attestationFormats` standardmäßig ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien für die Auswahl potenzieller Authenticatoren für die Schlüssel-Erstellungsoperation festlegen. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Typ für den gewählten Authenticator zulässig sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn ausgeführt wird (ein **plattformgebundener Authenticator**), daher wird WebAuthn mit ihm über ein für diese Plattform verfügbares Transportmittel, wie z.B. eine plattformspezifische API, kommunizieren. Ein öffentlicher Schlüssel, der an einen plattformgebundenen Authenticator gebunden ist, wird als **plattformgebundener Schlüssel** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist kein Teil des Geräts, auf dem WebAuthn ausgeführt wird (ein **mobiler Authenticator**, da er zwischen verschiedenen Geräten wechseln kann), daher wird WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC kommunizieren. Ein öffentlicher Schlüssel, der an einen mobilen Authenticator gebunden ist, wird als **mobiler Schlüssel** bezeichnet.

            Falls nicht angegeben, kann für die Schlüssel-Erstellungsoperation jeder Typ von Authenticator gewählt werden, entweder plattform- oder plattformübergreifend.

    - `requireResidentKey` {{optional_inline}}

      - : Ein boolean. Wenn auf `true` gesetzt, zeigt es an, dass ein residentes Schlüssel erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar, um die Abwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Falls nicht angegeben, beträgt der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Umfang die vertrauende Partei wünscht, ein **client-seitig erkennbares Anmeldedaten** zu erstellen (d.h. eines, das in Authentifizierungsanfragen verwendet wird, bei denen die vertrauende Partei keine Anmeldedaten-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **server-seitiges Anmeldedaten**, bei dem die vertrauende Partei Anmeldedaten-IDs im `get()`-`allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines server-seitigen Anmeldedatensatzes, akzeptiert jedoch auch eine client-seitig erkennbare Anmeldedatendaten.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt stark die Erstellung eines client-seitig erkennbaren Anmeldedatensatzes, akzeptiert jedoch auch ein server-seitiges Anmeldedaten. Der Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls erforderlich, um ein erkennbares Anmeldedaten zu erstellen. Dies hat Vorrang vor der Einstellung `userVerification`.
        - `"required"`
          - : Die vertrauende Partei verlangt ein client-seitig erkennbares Anmeldedaten. Wenn eins nicht erstellt werden kann, wird ein Fehler ausgelöst.

        Falls nicht angegeben, lautet der Standardwert von `residentKey` `"required"`, wenn `requireResidentKey` `true` ist; andernfalls lautet der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der vertrauenden Partei an die Benutzerüberprüfung für die `create()`-Operation angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt keine Benutzerüberprüfung für die `create()`-Operation, um die Benutzererfahrung möglichst wenig zu stören.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerüberprüfung für die `create()`-Operation, es wird jedoch nicht fehlschlagen, wenn die Benutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei verlangt die Benutzerüberprüfung für die `create()`-Operation - wenn die Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Falls nicht angegeben, lautet der Standardwert von `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der vom Server der vertrauenden Partei bereitgestellt und als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Anmeldedaten beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie durch `user.id` identifiziert). Dies wird von der vertrauenden Partei bereitgestellt und vom Benutzeragenten überprüft, um zu vermeiden, dass neue öffentliche Schlüssel-Anmeldedaten auf einem Authenticator erstellt werden, der bereits Anmeldedaten für das angegebene Benutzerkonto hat. jeder, der bereits über welche verfügt. Jedes Element sollte die folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die vorhandene Anmeldedaten-ID darstellt.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transportmittel darstellen. Mögliche Transportmittel sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ der zu erstellenden öffentlichen Schlüssel-Anmeldedaten definiert. Dies kann derzeit nur einen Wert annehmen, `"public-key"`, es können jedoch in Zukunft weitere Werte hinzugefügt werden.

    Versucht der `create()`-Aufruf, doppelte öffentliche Schlüssel-Anmeldedaten auf einem Authenticator zu erstellen, führt der Benutzeragent den Benutzer dazu, die Anmeldedaten mit einem anderen Authenticator zu erstellen oder schlägt fehl, wenn das nicht möglich ist.

    Falls `excludeCredentials` nicht angegeben ist, beträgt der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authenticator während des Erstellungsprozesses des Anmeldedaten zu spezifizieren. Beispiele umfassen die Angabe, ob ein zurückgegebener Anmeldedatensatz erkennbar ist, oder ob die vertrauende Partei in der Lage sein wird, große Blob-Daten, die mit einem Anmeldedatensatz verbunden sind, zu speichern.

    Erweiterungen sind optional und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird diese einfach ignoriert. Weitere Informationen zur Verwendung von Erweiterungen und welche in welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die von der vertrauenden Partei unterstützten Schlüsseltypen und Signaturalgorithmen spezifizieren, geordnet von der am meisten bis zur am wenigsten bevorzugten. Der Client und der Authenticator werden sich bemühen, Anmeldedaten des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus repräsentiert, der für diesen Anmeldedatensatztyp verwendet werden soll. Es wird empfohlen, dass vertrauende Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen enthalten:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ der zu erstellenden öffentlichen Schlüssel-Anmeldedaten definiert. Dies kann derzeit nur einen Wert annehmen, `"public-key"`, es können jedoch in Zukunft weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Anmeldedatentypen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erstellung des Anmeldedatensatzes angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der vertrauenden Partei darstellt. Ein öffentlicher Schlüssel-Anmeldedatensatz kann nur zur Authentifizierung mit derselben vertrauenden Partei verwendet werden (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert), mit der er registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder ein Schema wie einen Standard-Ursprung enthalten, aber das Domänenschema muss `https`-Schema sein. Die `id` muss dem effektiven Domain des Ursprungs oder einem Domain-Suffix davon entsprechen. Beispielsweise sind, wenn der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Falls nicht angegeben, ist der Standardwert der `id` der Ursprungs-URL des Dokuments — das wäre `login.example.com` im obigen Beispiel.

    - `name`
      - : Ein String, der den Namen der vertrauenden Partei darstellt (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer bei der Erstellung oder Validierung einer WebAuthn-Operation präsentiert wird.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf den Abschluss der Erstellung zu warten. Dieser Hinweis kann von dem Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für welches die Anmeldedaten generiert werden. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Benutzernamen bietet (Beispiel: `"John Doe"`), der während der Erstregistrierung bei der vertrauenden Partei vom Benutzer festgelegt wird.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzerkonto darstellt. Diese ID hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige für den Benutzer bestimmt.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse sein (wie `"john.doe@example.com"`), eine Telefonnummer (zum Beispiel `"+12345678901"`), oder eine andere Art von Benutzerkonto-Kennung (zum Beispiel `"johndoe667"`).

- `hints` {{optional_inline}}

  - : Ein Array von Strings, die Hinweise darauf geben, welche Authentifizierungs-UI vom Benutzeragenten für den Benutzer bereitgestellt werden soll.

    Die Werte können wie folgt sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates, dediziertes physisches Gerät zur Bereitstellung des Schlüssels.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl auf Benutzer- als auch auf serverbasierte Mechanismen zurückgreifen.

## Beispiele

### Erstellen eines öffentlichen Schlüssel-Anmeldedatensatzes

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, mit nur den erforderlichen Eigenschaften und verwendet für den Rest die Standardwerte.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um einen neuen öffentlichen Schlüssel-Anmeldedatensatz zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt aufgelöst wird, welches einen öffentlichen Schlüssel-Anmeldedatensatz darstellt, der später zur Authentifizierung eines Benutzers über einen WebAuthn-`get()`-Aufruf verwendet werden kann. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf verschiedene nützliche Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server gespeichert werden, um zukünftige Authentifizierungsoperationen gegen diese Anmeldedaten durchzuführen - zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transports.

Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
