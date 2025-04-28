---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das als Wert der `publicKey`-Option an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird: also bei der Verwendung von `create()`, um ein öffentliches Schlüssel-Zertifikat mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der aufrufenden Partei dafür angibt, wie die Attestierungserklärung (d.h. Bereitstellung überprüfbarer Belege für die Authentizität des Authenticator und seiner Daten) während der Erstellung des Zertifikats übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die aufrufende Partei nicht an einer Authenticator-Attestierung interessiert ist. Dies kann der Fall sein, um zusätzliche Benutzerzustimmungen für Rückrufe zum Server der aufrufenden Partei zur Übermittlung von Identifikationsinformationen oder für Rückrufe zu einer Attestierungs-Zertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA benutzt, um seine Attestierungserklärung zu generieren, wird die Client-App sie durch eine "None"-Attestierungserklärung ersetzen, die anzeigt, dass keine Attestierungserklärung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die aufrufende Partei die Attestierungserklärung erhalten möchte, wie sie vom Authenticator erstellt wurde.

    - `"enterprise"`

      - : Gibt an, dass die aufrufende Partei eine Attestierungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens vorgesehen, bei denen die Organisation die Registrierungen an spezifische Authenticator binden möchte.

    - `"indirect"`
      - : Gibt an, dass die aufrufende Partei eine überprüfbare Attestierungserklärung erhalten möchte, jedoch dem Client erlaubt, zu entscheiden, wie sie empfangen wird. Beispielsweise könnte der Client entscheiden, die Authenticator-Assertions-Erklärung mit einer von einer Anonymisierungs-CA generierten zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, ist der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der aufrufenden Partei für das von den Authenticator verwendete Attestierungs-Format angibt. Die Werte sollten in der Reihenfolge von der höchsten zur niedrigsten Präferenz geordnet sein und werden als Hinweise betrachtet – der Authenticator könnte sich dafür entscheiden, eine Attestierungserklärung in einem anderen Format auszustellen. Eine Liste gültiger Formate findet sich unter [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist der Standardwert von `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien enthalten, die verwendet werden, um potenzielle Authenticator für die Zertifikatserstellungsoperation herauszufiltern. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Befestigungstyp für den gewählten Authenticator zulässig sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn läuft (genannt **Plattform-Authenticator**), daher kommuniziert WebAuthn über ein für diese Plattform verfügbares Transportmittel, etwa eine plattformspezifische API. Ein öffentliches Schlüssel-Zertifikat, das an einen Plattform-Authenticator gebunden ist, wird als **Plattform-Zertifikat** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist kein Teil des Geräts, auf dem WebAuthn läuft (genannt **roaming Authenticator**, da er zwischen verschiedenen Geräten wandern kann), daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein öffentliches Schlüssel-Zertifikat, das an einen roaming Authenticator gebunden ist, wird als **roaming-Zertifikat** bezeichnet.

            Wenn weggelassen, kann jeder Authenticator-Typ, entweder Plattform oder plattformübergreifend, für die Zertifikatserstellungsoperation ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein boolescher Wert. Wenn er auf `true` gesetzt ist, zeigt er an, dass ein Resident-Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar, um die Rückwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, inwieweit die aufrufende Partei daran interessiert ist, ein clientseitiges [entdeckbares Zertifikat](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (also eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die aufrufende Partei keine Zertifikat-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverseitiges Zertifikat**, bei dem die aufrufende Partei Zertifikat-IDs im `get()`-`allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die aufrufende Partei bevorzugt die Erstellung eines serverseitigen Zertifikats, akzeptiert jedoch auch ein clientseitiges entdeckbares Zertifikat.
        - `"preferred"`
          - : Die aufrufende Partei bevorzugt stark die Erstellung eines clientseitigen entdeckbaren Zertifikats, akzeptiert jedoch auch ein serverseitiges Zertifikat. Der Benutzer-Agent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls erforderlich, um ein entdeckbares Zertifikat zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die aufrufende Partei verlangt ein clientseitiges entdeckbares Zertifikat. Wenn keines erstellt werden kann, wird eine `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Weitere Details finden Sie in der [`create()`-Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions).

        Wenn `residentKey` weggelassen wird, ist der Standardwert `"required"`, wenn `requireResidentKey` `true` ist, ansonsten ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der aufrufenden Partei an die Benutzerüberprüfung für den `create()`-Vorgang angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die aufrufende Partei bevorzugt keine Benutzerüberprüfung für den `create()`-Vorgang, um Störungen im Benutzererlebnis zu minimieren.
        - `"preferred"`
          - : Die aufrufende Partei bevorzugt die Benutzerüberprüfung für den `create()`-Vorgang, aber es wird nicht fehlschlagen, wenn eine Benutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die aufrufende Partei verlangt eine Benutzerüberprüfung für den `create()`-Vorgang - wenn eine Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, lautet der Standardwert von `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das vom Server der aufrufenden Partei bereitgestellt wird und als [kryptographische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Zertifikate beschreiben, die bereits diesem Benutzerkonto (wie durch `user.id` identifiziert) zugeordnet sind. Dies wird von der aufrufenden Partei bereitgestellt und vom Benutzeragenten überprüft, um zu vermeiden, ein neues öffentliches Schlüssel-Zertifikat auf einem Authenticator zu erstellen, der bereits ein Zertifikat hat, das dem angegebenen Benutzerkonto zugeordnet ist. Jedes Element sollte folgende Form haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die vorhandene Zertifikat-ID darstellt.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transports darstellen. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann nur der Wert `"public-key"` angenommen werden, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüssel-Zertifikat auf einem Authenticator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Zertifikat mit einem anderen Authenticator zu erstellen, oder es wird fehlschlagen, wenn das nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um spezifische zusätzliche Verarbeitungen durch den Client oder Authenticator während des Zertifikatserstellungsprozesses anzugeben. Beispiele umfassen die Spezifikation, ob ein zurückgegebenes Zertifikat entdeckbar ist, oder ob die aufrufende Partei in der Lage sein wird, große Blob-Daten, die mit einem Zertifikat verbunden sind, zu speichern.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, wird er sie einfach ignorieren. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die von der aufrufenden Partei unterstützten Schlüsseltypen und Signaturalgorithmen angeben, geordnet von am meisten bevorzugt bis am wenigsten bevorzugt. Der Client und der Authenticator werden sich bemühen, ein Zertifikat des am meisten bevorzugten Typs zu erstellen, das möglich ist. Diese Objekte enthalten folgende Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptographischen Algorithmus darstellt, der für diesen Zertifikatstyp verwendet werden soll. Es wird empfohlen, dass aufrufende Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen aufnehmen:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden öffentlichen Schlüssel-Zertifikats definiert. Derzeit kann nur der Wert `"public-key"` angenommen werden, aber in Zukunft könnten weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Zertifikatstypen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die aufrufende Partei beschreibt, die die Zertifikatserstellung angefordert hat. Es kann folgende Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der aufrufenden Partei darstellt. Ein öffentliches Schlüssel-Zertifikat kann nur zur Authentifizierung mit derselben aufrufenden Partei (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf identifiziert) verwendet werden, mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder ein Schema wie ein Standardursprung enthalten, aber das Domänen-Schema muss das `https`-Schema sein. Die `id` muss der effektiven Domäne des Ursprungs entsprechen oder ein Domänensuffix davon sein. Wenn der Ursprung der aufrufenden Partei beispielsweise `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn `id` weggelassen wird, ist der Standardwert die Dokumentursprung — was in dem obigen Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der aufrufenden Partei darstellt (z. B. `"Facebook"`). Dies ist der Name, den der Benutzer angezeigt bekommt, wenn er eine WebAuthn-Operation erstellt oder validiert.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis, in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist zu warten, bis der Erstellungsvorgang abgeschlossen ist. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Zertifikat generiert wird. Es kann folgende Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Anzeigenamen für den Benutzer bereitstellt (Beispiel: `"John Doe"`), der vom Benutzer während der anfänglichen Registrierung bei der aufrufenden Partei festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige für den Benutzer gedacht.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkonto-Kennung (zum Beispiel `"JohnDoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-Benutzeroberfläche der Benutzer-Agent für den Benutzer bereitstellen sollte.

    Die Werte können beliebige der folgenden sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung basiert auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, die potenziell sowohl auf Benutzer- als auch auf Server-Mechanismen beruhen.

## Beispiele

### Erstellen eines Public-Key-Zertifikats

Dieses Beispiel erstellt eine `PublicKeyCredentialCreationOptions`, die nur die erforderlichen Eigenschaften angibt, und verwendet die Standardwerte für den Rest.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues öffentliches Schlüssel-Zertifikat zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, die ein öffentliches Schlüssel-Zertifikat darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-`get()`-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen gewährt, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Zertifikat gespeichert werden — beispielsweise der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transports.

Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
