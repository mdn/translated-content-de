---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das Dictionary **`PublicKeyCredentialCreationOptions`** repräsentiert das Objekt, das als Wert der Option `publicKey` an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird: also wenn `create()` verwendet wird, um mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ein Public-Key-Credential zu erstellen.

## Instanzeigenschaften

- `attestation` {{optional_inline}}
  - : Ein String, der die Präferenz der Relying Party dafür angibt, wie die Attestation-Anweisung (d.h. die Bereitstellung überprüfbarer Nachweise für die Authentizität des Authenticators und seiner Daten) während der Credential-Erstellung übermittelt wird. Der Wert kann einer der folgenden sein:
    - `"none"`
      - : Gibt an, dass die Relying Party nicht an der Authenticator-Attestation interessiert ist. Dies kann geschehen, um zusätzliche Nutzereinwilligungen für Roundtrips zum Relying-Party-Server zur Weiterleitung identifizierender Informationen oder Roundtrips zu einer Attestation-Zertifizierungsstelle (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert ausgewählt ist und der Authenticator signalisiert, dass er eine CA verwendet, um seine Attestation-Anweisung zu generieren, ersetzt die Client-App diese durch eine „None“-Attestation-Anweisung, die angibt, dass keine Attestation-Anweisung verfügbar ist.

    - `"direct"`
      - : Gibt an, dass die Relying Party die vom Authenticator generierte Attestation-Anweisung erhalten möchte.

    - `"enterprise"`
      - : Gibt an, dass die Relying Party eine Attestation-Anweisung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens vorgesehen, bei denen die Organisation Registrierungen an bestimmte Authenticators binden möchte.

    - `"indirect"`
      - : Gibt an, dass die Relying Party eine überprüfbare Attestation-Anweisung erhalten möchte, dem Client jedoch die Entscheidung überlässt, wie sie empfangen wird. Beispielsweise könnte der Client die Assertion-Anweisung des Authenticators durch eine von einer Anonymization CA generierte Anweisung ersetzen, um die Privatsphäre der Benutzer zu schützen.

    Wenn `attestation` weggelassen wird, ist der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}
  - : Ein Array von Strings, das die Präferenz der Relying Party für das vom Authenticator verwendete Format der Attestation-Anweisung angibt. Die Werte sollten von der höchsten zur niedrigsten Präferenz sortiert sein und als Hinweise betrachtet werden — der Authenticator kann eine Attestation-Anweisung in einem anderen Format ausgeben. Eine Liste gültiger Formate finden Sie unter [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn#webauthn-attestation-statement-format-ids).

    Wenn `attestationFormats` weggelassen wird, ist der Standardwert ein leeres Array.

- `authenticatorSelection` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften Kriterien darstellen, die verwendet werden, um mögliche Authenticators für den Credential-Erstellungsvorgang auszufiltern. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `authenticatorAttachment` {{optional_inline}}
      - : Ein String, der angibt, welcher Authenticator-Anbindungstyp für den ausgewählten Authenticator zulässig sein soll. Mögliche Werte sind:
        - `"platform"`
          - : Der Authenticator ist Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **Platform Authenticator** bezeichnet); daher kommuniziert WebAuthn über einen für diese Plattform verfügbaren Transport mit ihm, beispielsweise über eine plattformspezifische API. Ein an einen Platform Authenticator gebundenes Public-Key-Credential wird als **Platform Credential** bezeichnet.
        - `"cross-platform"`
          - : Der Authenticator ist kein Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **Roaming Authenticator** bezeichnet, da er zwischen verschiedenen Geräten wechseln kann); daher kommuniziert WebAuthn über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC mit ihm. Ein an einen Roaming Authenticator gebundenes Public-Key-Credential wird als **Roaming Credential** bezeichnet.

            Wenn die Eigenschaft weggelassen wird, kann für den Credential-Erstellungsvorgang jeder Authenticator-Typ ausgewählt werden, entweder Platform oder Cross-Platform.

    - `requireResidentKey` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, gibt dies an, dass die Relying Party ein [discoverable credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) erstellen möchte.

        Diese Option wird nur aus Gründen der Abwärtskompatibilität beibehalten: Aufrufer sollten stattdessen die Option [`residentKey`](#residentkey) verwenden. Wenn `residentKey` angegeben wird und unterstützt wird, wird `requireResidentKey` ignoriert. Die Option `requireResidentKey` sollte genau dann auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Der Standardwert ist `false`.

    - `residentKey` {{optional_inline}}
      - : Ein String, der festlegt, in welchem Umfang die Relying Party ein [discoverable credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) erstellen möchte.
        Mögliche Werte sind:
        - `"discouraged"`
          - : Die Relying Party bevorzugt die Erstellung eines serverseitigen Credentials, akzeptiert jedoch ein clientseitiges discoverable credential.
        - `"preferred"`
          - : Die Relying Party bevorzugt nachdrücklich die Erstellung eines discoverable credential, akzeptiert jedoch ein nicht-discoverable Credential. Der User Agent sollte den Benutzer bei Bedarf durch die Einrichtung der Benutzerverifizierung führen, um ein discoverable credential zu erstellen. Dies hat Vorrang vor der Einstellung `userVerification`.
        - `"required"`
          - : Die Relying Party verlangt ein discoverable credential. Wenn keines erstellt werden kann, wird eine `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Weitere Details finden Sie in der [Liste der `create()`-Ausnahmen](/de/docs/Web/API/CredentialsContainer/create#exceptions).

        Wenn `residentKey` weggelassen wird, ist der Standardwert `"required"`, wenn `requireResidentKey` `true` ist; andernfalls lautet der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}
      - : Ein String, der die Anforderungen der Relying Party an die Benutzerverifizierung für den Vorgang `create()` festlegt. Mögliche Werte sind:
        - `"discouraged"`
          - : Die Relying Party bevorzugt keine Benutzerverifizierung für den Vorgang `create()`, um Beeinträchtigungen der Benutzererfahrung möglichst gering zu halten.
        - `"preferred"`
          - : Die Relying Party bevorzugt Benutzerverifizierung für den Vorgang `create()`, der Vorgang schlägt jedoch nicht fehl, wenn keine Benutzerverifizierung durchgeführt werden kann.
        - `"required"`
          - : Die Relying Party verlangt Benutzerverifizierung für den Vorgang `create()` — wenn keine Benutzerverifizierung durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn `userVerification` weggelassen wird, ist der Standardwert `"preferred"`.

- `challenge`
  - : Ein von dem Server der Relying Party bereitgestelltes {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das als [kryptografische Challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) verwendet wird. Dieser Wert wird vom Authenticator signiert und die Signatur wird als Teil von [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Credentials beschreiben, die diesem Benutzerkonto bereits zugeordnet sind (wie durch `user.id` identifiziert). Es wird von der Relying Party bereitgestellt und vom User Agent überprüft, um zu vermeiden, dass auf einem Authenticator, der bereits ein dem angegebenen Benutzerkonto zugeordnetes Credential besitzt, ein neues Public-Key-Credential erstellt wird. Jedes Element sollte die folgende Form haben:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das die ID des vorhandenen Credentials repräsentiert.

    - `transports` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Strings, die zulässige Transports repräsentieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"` und `"usb"` (weitere Details finden Sie unter [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)).

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public-Key-Credentials definiert. Dieser kann derzeit nur den Wert `"public-key"` annehmen, zukünftig könnten jedoch weitere Werte hinzugefügt werden.

    Wenn der Aufruf von `create()` versucht, ein doppeltes Public-Key-Credential auf einem Authenticator zu erstellen, führt der User Agent den Benutzer dazu, das Credential mit einem anderen Authenticator zu erstellen, oder schlägt fehl, wenn dies nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}
  - : Ein Objekt mit Eigenschaften, die die Eingabewerte für angeforderte Extensions repräsentieren. Diese Extensions werden für bestimmte zusätzliche Verarbeitungen durch den Client oder Authenticator während des Credential-Erstellungsprozesses verwendet. Beispiele umfassen die Angabe, ob ein zurückgegebenes Credential discoverable ist oder ob die Relying Party große Blob-Daten speichern kann, die einem Credential zugeordnet sind.

    Extensions sind optional, und verschiedene Browser können unterschiedliche Extensions erkennen. Die Verarbeitung von Extensions ist für den Client immer optional: Wenn ein Browser eine bestimmte Extension nicht erkennt, ignoriert er sie einfach. Informationen zur Verwendung von Extensions und dazu, welche davon von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser dem Benutzer zum Erstellen eines Public-Key-Credentials bereitstellen sollte.

    Die Strings können einer der folgenden sein:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte die Verwendung eines separaten physischen Sicherheitsschlüssels (z. B. eines YubiKey) zur Erstellung des Credentials empfehlen.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte die Verwendung eines Authenticators empfehlen, der auf demselben Gerät verfügbar ist, das für den Zugriff auf den RP-Client verwendet wird, um das Credential zu erstellen. Dies entspricht dem Wert [`platform`](#platform) von `authenticatorAttachment`.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte die Verwendung eines universellen Authenticators, beispielsweise einer Smartphone-basierten Authenticator-App, zur Erstellung des Credentials empfehlen. Dies begünstigt einen geräteübergreifenden Ansatz zur Verarbeitung der Authentifizierung, der sich beispielsweise auf eine Kombination aus Laptop und Smartphone stützt.

    Der Wert [`cross-platform`](#cross-platform) von `authenticatorAttachment` ist im Wesentlichen eine Kombination der Werte `security-key` und `hybrid` der Option `hints` — wenn ein Gerät kein Bluetooth hat und eine RP `attachment: "cross-platform"` angibt, wird die resultierende Benutzeroberfläche wahrscheinlich der Benutzeroberfläche für `hints: "security-key"` ähneln.

    Wenn mehrere Strings im Array enthalten sind, kennzeichnet ihre Reihenfolge die Präferenzreihenfolge von hoch nach niedrig. Unterstützende Browser, die die Hinweise berücksichtigen, sollten den ersten ihnen bekannten Hinweis verwenden.

    Die Option `hints` bietet eine flexiblere Möglichkeit, Präferenzen für die Benutzeroberfläche zur Erstellung eines Credentials festzulegen, als die Option [`authenticatorAttachment`](#authenticatorattachment), welche die nicht ausgewählte Option vollständig ausblendet. Mit `hints` kann auch eine Präferenz für Sicherheitsschlüssel oder hybrid angegeben werden, was mit `authenticatorAttachment` nicht möglich ist.

    Angegebene `hints` können Hinweisen widersprechen, die in der Option `authenticatorAttachment` bereitgestellt werden. Wenn die bereitgestellten `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können vom Browser unter bestimmten Umständen auch ignoriert werden, beispielsweise wenn ein angedeuteter Authenticator-Typ auf dem Gerät des Benutzers nicht verwendbar ist.

    Spezifische Code- und Benutzeroberflächenbeispiele finden Sie unter [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `pubKeyCredParams`
  - : Ein {{jsxref("Array")}} von Objekten, die die Schlüsseltypen und Signaturalgorithmen angeben, welche die Relying Party unterstützt, sortiert von der höchsten zur niedrigsten Präferenz. Der Client und der Authenticator unternehmen nach bestem Bemühen den Versuch, ein Credential des am stärksten bevorzugten möglichen Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:
    - `alg`
      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose#algorithms) entspricht und den für diesen Credential-Typ zu verwendenden kryptografischen Algorithmus repräsentiert. Es wird empfohlen, dass Relying Parties, die eine breite Palette von Authenticators unterstützen möchten, mindestens die folgenden Werte in die bereitgestellten Auswahlmöglichkeiten aufnehmen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public-Key-Credentials definiert. Dieser kann derzeit nur den Wert `"public-key"` annehmen, zukünftig könnten jedoch weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Credential-Typen erstellt werden kann, schlägt der Vorgang `create()` fehl.

- `rp`
  - : Ein Objekt, das die Relying Party beschreibt, welche die Credential-Erstellung angefordert hat. Es kann die folgenden Eigenschaften enthalten:
    - `id` {{optional_inline}}
      - : Ein String, der die ID der Relying Party repräsentiert. Ein Public-Key-Credential kann nur zur Authentifizierung bei derselben Relying Party verwendet werden (wie durch `publicKey.rpId` in einem Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) identifiziert), bei der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` darf keinen Port oder kein Scheme wie eine Standard-Origin enthalten, aber das Domain-Scheme muss das `https`-Scheme sein. Die `id` muss der effektiven Domain der Origin oder einem Domain-Suffix davon entsprechen. Wenn die Origin der Relying Party beispielsweise `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:
        - `login.example.com`
        - `example.com`

        Nicht jedoch:
        - `m.login.example.com`
        - `com`

        Wenn `id` weggelassen wird, ist der Standardwert die Dokument-Origin — im obigen Beispiel wäre dies `login.example.com`.

    - `name`
      - : Ein String, der den Namen der Relying Party repräsentiert (z. B. `"Facebook"`). Dies ist der Name, der dem Benutzer beim Erstellen oder Validieren eines WebAuthn-Vorgangs angezeigt wird.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf den Abschluss des Erstellungsvorgangs zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`
  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann die folgenden Eigenschaften enthalten:
    - `displayName`
      - : Ein String mit einem benutzerfreundlichen Anzeigenamen (Beispiel: `"Maria Sanchez"`), der vom Benutzer bei der ursprünglichen Registrierung bei der Relying Party festgelegt wurde.

    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das eine eindeutige ID für das Benutzerkonto repräsentiert. Dieser Wert hat eine maximale Länge von 64 Byte und ist nicht zur Anzeige für den Benutzer bestimmt.

    - `name`
      - : Ein String mit einer benutzerfreundlichen Kennung für das Benutzerkonto, die bei der Unterscheidung verschiedener Konten mit ähnlichen `displayName`s hilft. Dies kann eine E-Mail-Adresse (z. B. `"elaina.sanchez@example.com"`), Telefonnummer (z. B. `"+12345678901"`) oder eine andere Art von Benutzerkonto-Kennung (z. B. `"ElainaSanchez667"`) sein.

## Beispiele

### Erstellen eines Public-Key-Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions` und gibt nur die erforderlichen Eigenschaften an; für die übrigen werden die Standardwerte verwendet.

Anschließend wird das Objekt an `navigator.credentials.create()` übergeben, um ein neues Public-Key-Credential zu erstellen.

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

Ein erfolgreicher Aufruf von `create()` gibt ein Promise zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz erfüllt wird. Diese repräsentiert ein Public-Key-Credential, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-Aufruf von [`get()`](/de/docs/Web/API/CredentialsContainer/get) zu authentifizieren. Seine Eigenschaft [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, darunter die Authenticator-Daten, den Public Key, Transportmechanismen und weitere Daten.

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

Ein Teil dieser Daten muss für zukünftige Authentifizierungsvorgänge mit diesem Credential auf dem Server gespeichert werden — beispielsweise der Public Key, der verwendete Algorithmus und die zulässigen Transports.

Weitere Informationen darüber, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaars und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
