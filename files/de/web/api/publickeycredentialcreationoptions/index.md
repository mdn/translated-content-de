---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`** Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der Option `publicKey` übergeben wird: das heißt, wenn `create()` verwendet wird, um ein öffentliches Schlüssel-Zertifikat mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz des vertrauenden Dritten dafür angibt, wie die Attestierungserklärung (d. h. die Erbringung überprüfbarer Nachweise über die Authentizität des Authentifikators und seiner Daten) während der Zertifikatserstellung übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass sich der vertrauende Dritte nicht für die Attestierung des Authentifikators interessiert. Dies könnte dazu dienen, zusätzliche Benutzerzustimmungen für Rundreisen zum Server des vertrauenden Dritten zu vermeiden, um identifizierende Informationen weiterzuleiten, oder für Rundreisen zu einer Attestierungszertifizierungsstelle (CA), mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA verwendet, um seine Attestierungserklärung zu generieren, ersetzt die Client-App diese durch eine "None"-Attestierungserklärung, die anzeigt, dass keine Attestierungserklärung vorliegt.

    - `"direct"`

      - : Gibt an, dass der vertrauende Dritte die Attestierungserklärung erhalten möchte, wie sie vom Authentifikator generiert wurde.

    - `"enterprise"`

      - : Gibt an, dass der vertrauende Dritte eine Attestierungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, wo die Organisation Registrierungen mit bestimmten Authentifikatoren verbinden möchte.

    - `"indirect"`
      - : Gibt an, dass der vertrauende Dritte eine überprüfbare Attestierungserklärung erhalten möchte, aber dem Client erlaubt, zu entscheiden, wie diese empfangen werden soll. Zum Beispiel könnte der Client wählen, die Aussage des Authentifikators durch eine von einer Anonymisierungs-CA generierte Aussage zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, wird der Standardwert `"none"` verwendet.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz des vertrauenden Dritten für das Format der von dem Authentifikator verwendeten Attestierungserklärung angibt. Die Werte sollten in der Reihenfolge von höchster zu niedrigster Präferenz angeordnet sein und als Hinweise betrachtet werden — der Authentifikator kann sich entscheiden, eine Attestierungserklärung in einem anderen Format auszustellen. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist der Standardwert von `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien sind, um die potenziellen Authentifikatoren für den Vorgang der Zertifikatserstellung zu filtern. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Typ von Authentifikator-Anhang für den ausgewählten Authentifikator erlaubt sein sollte. Mögliche Werte sind:

        - `"platform"`
          - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (genannt **Plattform-Authentifikator**), daher wird WebAuthn mit ihm unter Verwendung eines für die Plattform verfügbaren Transports kommunizieren, z. B. einer plattformspezifischen API. Ein öffentliches Schlüsselzertifikat, das an einen Plattform-Authentifikator gebunden ist, wird als **Plattform-Zertifikat** bezeichnet.
        - `"cross-platform"`

          - : Der Authentifikator ist kein Teil des Geräts, auf dem WebAuthn läuft (genannt **Roaming-Authentifikator**, da er zwischen verschiedenen Geräten umhergehen kann), daher wird WebAuthn mit ihm unter Verwendung eines plattformübergreifenden Transportprotokolls wie Bluetooth oder NFC kommunizieren. Ein öffentliches Schlüsselzertifikat, das an einen Roaming-Authentifikator gebunden ist, wird als **Roaming-Zertifikat** bezeichnet.

            Wenn weggelassen, kann jeder Typ von Authentifikator, entweder Plattform- oder plattformübergreifend, für den Vorgang der Zertifikatserstellung ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein boolean. Wenn auf `true` gesetzt, gibt es an, dass ein Resident-Schlüssel erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar, um die Abwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Umfang der vertrauende Dritte wünscht, ein **client-seitig entdeckbares Zertifikat** zu erstellen (d. h. ein Zertifikat, das in Authentifizierungsanfragen verwendet werden kann, bei denen der vertrauende Dritte keine Zertifikat-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **server-seitiges Zertifikat**, bei dem der vertrauende Dritte Zertifikat-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Der vertrauende Dritte bevorzugt die Erstellung eines server-seitigen Zertifikats, wird jedoch ein client-seitig entdeckbares Zertifikat akzeptieren.
        - `"preferred"`
          - : Der vertrauende Dritte bevorzugt stark die Erstellung eines client-seitig entdeckbaren Zertifikats, wird jedoch ein server-seitiges Zertifikat akzeptieren. Das Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, wenn nötig, um ein entdeckbares Zertifikat zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Der vertrauende Dritte verlangt ein client-seitig entdeckbares Zertifikat. Wenn eines nicht erstellt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, ist der Standardwert von `residentKey` `"required"`, wenn `requireResidentKey` `true` ist, ansonsten ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen des vertrauenden Dritten an die Benutzerverifizierung für den `create()`-Vorgang angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Der vertrauende Dritte bevorzugt keine Benutzerverifizierung für den `create()`-Vorgang, um Störungen in der Benutzererfahrung zu minimieren.
        - `"preferred"`
          - : Der vertrauende Dritte bevorzugt die Benutzerverifizierung für den `create()`-Vorgang, aber es wird nicht fehlschlagen, wenn die Benutzerverifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Der vertrauende Dritte verlangt die Benutzerverifizierung für den `create()`-Vorgang — wenn die Benutzerverifizierung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, ist der Standardwert von `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das vom Server des vertrauenden Dritten bereitgestellt wird und als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) dient. Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Zertifikate beschreiben, die bereits diesem Benutzerkonto (wie durch `user.id` identifiziert) zugeordnet sind. Dies wird vom vertrauenden Dritten bereitgestellt und vom Benutzeragenten überprüft, um zu vermeiden, dass ein neues öffentliches Schlüssel-Zertifikat auf einem Authentifikator erstellt wird, der bereits ein Zertifikat für das angegebene Benutzerkonto zugeordnet hat. Jedes Element sollte die folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die vorhandene Zertifikats-ID darstellt.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transports darstellen. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann dieser nur den Wert `"public-key"` annehmen, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüssel-Zertifikat auf einem Authentifikator zu erstellen, wird der Benutzeragent den Benutzer dazu anleiten, das Zertifikat mit einem anderen Authentifikator zu erstellen, oder es wird fehlschlagen, wenn das nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitung durch den Client oder Authentifikator während des Zertifikatserstellungsvorgangs zu spezifizieren. Beispiele beinhalten die Angabe, ob ein zurückgegebenes Zertifikat entdeckbar ist, oder ob der vertrauende Dritte in der Lage sein wird, große Blob-Daten zu einem Zertifikat zu speichern.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist immer optional für den Client: wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Für Informationen zur Verwendung von Erweiterungen und welche Erweiterungen von welchen Browsern unterstützt werden, siehe [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die von dem vertrauenden Dritten unterstützten Schlüsseltypen und Signatur-Algorithmen spezifizieren, in der Reihenfolge von am meisten bevorzugt bis am wenigsten bevorzugt. Der Client und der Authentifikator werden nach besten Kräften versuchen, ein Zertifikat des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptographischen Algorithmus darstellt, der für diesen Zertifikatstyp verwendet werden soll. Es wird empfohlen, dass vertrauende Dritte, die eine große Bandbreite an Authentifikatoren unterstützen möchten, mindestens die folgenden Werte in die bereitgestellten Auswahlmöglichkeiten aufnehmen:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann dieser nur den Wert `"public-key"` annehmen, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn keiner der aufgeführten Zertifikatstypen erstellt werden kann, schlägt der `create()`-Vorgang fehl.

- `rp`

  - : Ein Objekt, das den vertrauenden Dritten beschreibt, der die Zertifikatserstellung angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID des vertrauenden Dritten darstellt. Ein öffentliches Schlüssel-Zertifikat kann nur für die Authentifizierung mit demselben vertrauenden Dritten (wie durch `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf identifiziert) verwendet werden, bei dem es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` darf keinen Port oder Schema wie ein standardmäßiger Ursprung enthalten, aber das Domain-Schema muss das `https`-Schema sein. Die `id` muss der effektiven Domain des Ursprungs oder einem Domainsuffix davon entsprechen. So ist beispielsweise, wenn der Ursprung des vertrauenden Dritten `https://login.example.com:1337` ist, Folgendes als `id` gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn weggelassen, ist der Standardwert von `id` der Dokumentursprung — was in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen des vertrauenden Dritten darstellt (z. B. `"Facebook"`). Dies ist der Name, der dem Benutzer bei Erstellung oder Validierung eines WebAuthn-Vorgangs angezeigt wird.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der die Zeit angibt, die die aufrufende Webanwendung bereit ist, auf den Abschluss des Erstellungsprozesses zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Zertifikat generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Anzeigenamen des Benutzers angibt (Beispiel: `"John Doe"`), der vom Benutzer während der anfänglichen Registrierung beim vertrauenden Dritten festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige an den Benutzer gedacht.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (zum Beispiel `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkonto-Kennung (zum Beispiel `"johndoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-UI der Benutzeragent für den Benutzer bereitstellen sollte.

    Die Werte können wie folgt sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie zum Beispiel einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination aus Autorisierungs-/Authentifizierungsmethoden und stützt sich möglicherweise sowohl auf benutzergestützte als auch serverbasierte Mechanismen.

## Beispiele

### Erstellen eines öffentlichen Schlüssel-Zertifikats

Dieses Beispiel erstellt eine `PublicKeyCredentialCreationOptions`, die nur die erforderlichen Eigenschaften spezifiziert und für den Rest die Standardwerte verwendet.

Anschließend wird das Objekt in `navigator.credentials.create()` übergeben, um ein neues öffentliches Schlüssel-Zertifikat zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das sich mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt instanziiert, das ein öffentliches Schlüssel-Zertifikat darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-[`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen wie die Authentifikator-Daten, den öffentlichen Schlüssel, Transportmechanismen und mehr bietet.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Zertifikat gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die erlaubten Transporte.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
