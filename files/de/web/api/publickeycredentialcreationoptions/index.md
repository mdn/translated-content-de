---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 8c426a99972c23906699bce5d4a73e9aef646ee7
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch repräsentiert das Objekt, das als Wert der `publicKey`-Option an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird: das heißt, wenn `create()` verwendet wird, um ein Public Key Credential mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}
  - : Ein String, der die Präferenz der abhängigen Partei angibt, wie die Attestationserklärung (d.h. die Bereitstellung überprüfbarer Beweise für die Authentizität des Authenticator und seiner Daten) während der Credential-Erstellung übermittelt wird. Der Wert kann einer der folgenden sein:
    - `"none"`
      - : Gibt an, dass die abhängige Partei nicht an der Authenticator-Attestation interessiert ist. Dies könnte dazu dienen, zusätzliche Benutzereinwilligungen für Rundreisen zum Server der abhängigen Partei zu vermeiden, um identifizierende Informationen weiterzugeben, oder Rundfahrten zu einer Attestation Certificate Authority (CA), mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authenticator signalisiert, dass er eine CA verwendet, um seine Attestationserklärung zu erstellen, wird die Client-App diese durch eine "None"-Attestationserklärung ersetzen, was darauf hinweist, dass keine Attestationerklärung verfügbar ist.

    - `"direct"`
      - : Gibt an, dass die abhängige Partei die von dem Authenticator generierte Attestationserklärung erhalten möchte.

    - `"enterprise"`
      - : Gibt an, dass die abhängige Partei eine Attestationserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens vorgesehen, bei denen die Organisation Registrierungen mit bestimmten Authenticatoren verbinden möchte.

    - `"indirect"`
      - : Gibt an, dass die abhängige Partei eine überprüfbare Attestationserklärung erhalten möchte, es dem Client jedoch überlassen wird, wie sie diese erhält. Der Client könnte zum Beispiel wählen, die Behauptungserklärung des Authenticator durch eine von einer Anonymisierungs-CA generierte Erklärung zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, wird es standardmäßig auf `"none"` gesetzt.

- `attestationFormats` {{optional_inline}}
  - : Ein Array von Strings, das die Präferenz der abhängigen Partei für das von dem Authenticator verwendete Attestationserklärungsformat angibt. Die Werte sollten in der Reihenfolge von höchster zu niedrigster Präferenz angegeben werden und sollten als Hinweise betrachtet werden — der Authenticator kann sich entscheiden, eine Attestationserklärung in einem anderen Format auszugeben. Für eine Liste der gültigen Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, standardisiert `attestationFormats` auf ein leeres Array.

- `authenticatorSelection` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften Kriterien sind, die verwendet werden, um potenzielle Authenticatoren für die Credential-Erstellungsoperation herauszufiltern. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `authenticatorAttachment` {{optional_inline}}
      - : Ein String, der angibt, welcher Authenticator-Typ für den ausgewählten Authenticator zulässig sein soll. Mögliche Werte sind:
        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn ausgeführt wird (genannt **Plattformauthenticator**), daher kommuniziert WebAuthn mit ihm über einen für diese Plattform verfügbaren Transport, wie eine plattformspezifische API. Ein Public Key Credential, das an einen Plattformauthenticator gebunden ist, wird als **Plattform-Credential** bezeichnet.
        - `"cross-platform"`
          - : Der Authenticator ist nicht Teil des Geräts, auf dem WebAuthn ausgeführt wird (genannt **roaming Authenticator**, da er zwischen verschiedenen Geräten wechseln kann), daher kommuniziert WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC. Ein Public Key Credential, das an einen roaming Authenticator gebunden ist, wird als **roaming Credential** bezeichnet.

            Wird weggelassen, kann jeder Typ von Authenticator, entweder Plattform oder plattformübergreifend, für die Credential-Erstellungsoperation ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, gibt dies an, dass ein Resident Key erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch für die Rückwärtskompatibilität mit WebAuthn Level 1 verfügbar. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, standardisiert `requireResidentKey` auf `false`.

    - `residentKey` {{optional_inline}}
      - : Ein String, der angibt, in welchem Maße die abhängige Partei wünscht, ein clientseitiges [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (das heißt, eines, das in Authentifizierungsanfragen verwendet werden kann, bei denen die abhängige Partei keine Credential-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverseitiges Credential**, bei dem die abhängige Partei Credential-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:
        - `"discouraged"`
          - : Die abhängige Partei zieht die Erstellung eines serverseitigen Credentials vor, akzeptiert jedoch auch ein clientseitiges entdeckbares Credential.
        - `"preferred"`
          - : Die abhängige Partei zieht die Erstellung eines clientseitigen entdeckbaren Credentials stark vor, akzeptiert jedoch auch ein serverseitiges Credential. Der Benutzer-Agent sollte den Benutzer durch die Einrichtung der Benutzerüberprüfung führen, falls erforderlich, um ein entdeckbares Credential zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die abhängige Partei erfordert ein clientseitiges entdeckbares Credential. Falls eines nicht erstellt werden kann, wird eine `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Siehe die [Liste der Ausnahmen für `create()`](/de/docs/Web/API/CredentialsContainer/create#exceptions) für weitere Details.

        Wenn weggelassen, standardisiert `residentKey` auf `"required"`, wenn `requireResidentKey` `true` ist; andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}
      - : Ein String, der die Anforderungen der abhängigen Partei für die Benutzerüberprüfung für die `create()`-Operation angibt. Mögliche Werte sind:
        - `"discouraged"`
          - : Die abhängige Partei bevorzugt keine Benutzerüberprüfung für die `create()`-Operation, um Störungen des Benutzererlebnisses zu minimieren.
        - `"preferred"`
          - : Die abhängige Partei bevorzugt eine Benutzerüberprüfung für die `create()`-Operation, es wird jedoch nicht fehlschlagen, falls eine Benutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die abhängige Partei erfordert eine Benutzerüberprüfung für die `create()`-Operation — falls eine Benutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, standardisiert `userVerification` auf `"preferred"`.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} bereitgestellt von dem Server der abhängigen Partei und verwendet als eine [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Credentials beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie durch `user.id` identifiziert). Dies wird von der abhängigen Partei bereitgestellt und vom Benutzer-Agent überprüft, um zu vermeiden, dass ein neues Public Key Credential auf einem Authenticator erstellt wird, der bereits ein Credential für das angegebene Benutzerkonto zugewiesen hat. Jedes Element sollte folgende Form haben:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die vorhandene Credential-ID darstellt.

    - `transports` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transporte darstellen. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für mehr Details).

    - `type`
      - : Ein String, der den Typ des Public Key Credentials definiert, das erstellt werden soll. Dieser kann derzeit einen einzigen Wert, `"public-key"`, annehmen, es können aber in der Zukunft weitere hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes Public Key Credential auf einem Authenticator zu erstellen, wird der Benutzer-Agent den Benutzer anleiten, das Credential mit einem anderen Authenticator zu erstellen oder fehlschlagen, falls das nicht möglich ist.

    Falls `excludeCredentials` weggelassen wird, standardisiert es auf ein leeres Array.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitungsanforderungen entweder durch den Client oder den Authenticator während des Credential-Erstellungsprozesses zu spezifizieren. Beispiele einschließlich der Angabe, ob ein zurückgegebenes Credential entdeckbar ist oder ob die abhängige Partei große Blob-Daten im Zusammenhang mit einem Credential speichern kann.

    Erweiterungen sind optional und verschiedene Browser können verschiedene Erweiterungen erkennen. Das Verarbeiten von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine gegebene Erweiterung nicht erkennt, ignoriert er sie einfach. Weitere Informationen zur Verwendung von Erweiterungen und zu den von welchen Browsern unterstützten finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bereitstellen sollte, damit der Benutzer ein Public Key Credential erstellen kann.

    Die Strings können eines der folgenden sein:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, einen separaten physischen Sicherheitsschlüssel (wie einen YubiKey) zu verwenden, um das Credential zu erstellen.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, einen Authenticator zu verwenden, der auf demselben Gerät verfügbar ist, das sie verwenden, um auf den RP-Client zuzugreifen, um das Credential zu erstellen. Es ist analog zum `authenticatorAttachment`-Wert [`platform`](#platform).
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, einen allgemeinen Authenticator zu verwenden, wie eine Smartphone-basierte Authenticator-App, um das Credential zu erstellen. Dies bevorzugt die Verwendung eines geräteübergreifenden Ansatzes zur Handhabung der Authentifizierung, was sich auf eine Kombination von Laptop und Smartphone stützt, zum Beispiel.

    Der `authenticatorAttachment` [`cross-platform`](#cross-platform) Wert ist im Wesentlichen eine Kombination aus den `hints`-Optionen `security-key` und `hybrid` Werten — wenn ein Gerät kein Bluetooth hat und ein RP `attachment: "cross-platform"` angibt, wird die resultierende Benutzeroberfläche wahrscheinlich ähnlich wie die `hints: "security-key"` Benutzeroberfläche sein.

    Wenn mehrere Strings im Array enthalten sind, gibt ihre Reihenfolge die Präferenzreihenfolge von hoch zu niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten verwenden, den sie verstehen.

    Die `hints`-Option bietet eine flexiblere Möglichkeit, Bereitstellungsvorlieben für die Erstellung eines Credentials zu spezifizieren als die [`authenticatorAttachment`](#authenticatorattachment) Option, die die nicht gewählte Option vollständig verbirgt. `hints` erlauben es auch, eine Präferenz entweder für Sicherheitsschlüssel oder Hybrid anzugeben, was mit `authenticatorAttachment` nicht möglich ist.

    Angegebene `hints` können den in der `authenticatorAttachment` Option bereitgestellten Hinweisen widersprechen. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können von dem Browser auch unter bestimmten Umständen ignoriert werden, zum Beispiel, wenn ein angedeuteter Authenticator-Typ auf dem Gerät des Benutzers nicht verwendbar ist.

    Für einige spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `pubKeyCredParams`
  - : Ein {{jsxref("Array")}} von Objekten, die die Schlüsseltypen und Signaturalgorithmen spezifizieren, die die abhängige Partei unterstützt, in der Reihenfolge von am meisten bevorzugt zu am wenigsten bevorzugt. Der Client und der Authenticator werden sich bemühen, ein Credential des möglichst bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:
    - `alg`
      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht, der den kryptografischen Algorithmus darstellt, der für diesen Credential-Typ verwendet werden soll. Es wird empfohlen, dass die abhängigen Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Auswahlmöglichkeiten einschließen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public Key Credentials definiert. Dieser kann derzeit einen einzigen Wert, `"public-key"`, annehmen, es können aber in der Zukunft weitere hinzugefügt werden.

    Wenn keiner der aufgelisteten Credential-Typen erstellt werden kann, schlägt der `create()`-Vorgang fehl.

- `rp`
  - : Ein Objekt, das die abhängige Partei beschreibt, die die Credential-Erstellung angefordert hat. Es kann die folgenden Eigenschaften enthalten:
    - `id` {{optional_inline}}
      - : Ein String, der die ID der abhängigen Partei darstellt. Ein Public Key Credential kann nur zur Authentifizierung bei derselben abhängigen Partei verwendet werden (wie durch das `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf identifiziert), mit der es registriert wurde — die IDs müssen übereinstimmen.

        Das `id` kann keinen Port oder ein Schema wie ein Standard-Ursprung enthalten, aber das Domain-Schema muss ein `https`-Schema sein. Das `id` muss der effektiven Domain des Ursprungs entsprechen oder ein Domain-Suffix davon sein. Wenn beispielsweise der Ursprung der abhängigen Partei `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:
        - `login.example.com`
        - `example.com`

        Aber nicht:
        - `m.login.example.com`
        - `com`

        Falls weggelassen, standardisiert `id` auf den Dokumentursprung — was in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der abhängigen Partei darstellt (z. B. `"Facebook"`). Dies ist der Name, der dem Benutzer bei der Erstellung oder Validierung einer WebAuthn-Operation präsentiert wird.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis in Millisekunden, der die Zeit angibt, die die aufrufende Web-App bereit ist, auf die Fertigstellung der Erstellungsoperation zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`
  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann die folgenden Eigenschaften enthalten:
    - `displayName`
      - : Ein String, der einen benutzerfreundlichen Benutzernamen bietet (Beispiel: `"Maria Sanchez"`), der vom Benutzer während der Erstregistrierung bei der abhängigen Partei festgelegt wurde.

    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} repräsentiert eine eindeutige ID für das Benutzerkonto. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht zur Anzeige an den Benutzer bestimmt.

    - `name`
      - : Ein String, der einen benutzerfreundlichen Bezeichner für das Benutzerkonto des Nutzers bietet, um zu helfen, zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"elaina.sanchez@example.com"`), eine Telefonnummer (zum Beispiel `"+12345678901"`), oder eine andere Art von Benutzerkonto-Bezeichner (zum Beispiel `"ElainaSanchez667"`) sein.

## Beispiele

### Erstellen eines Public Key Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, indem nur die erforderlichen Eigenschaften spezifiziert und die Standardwerte für den Rest verwendet werden.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt aufgelöst wird, das ein Public Key Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-[`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Credential gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
