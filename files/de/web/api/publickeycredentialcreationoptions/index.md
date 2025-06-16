---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 80d8d79a3eabdcb0f8ed0785166a14e1f66045ea
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: Das heißt, wenn `create()` verwendet wird, um ein öffentliches Schlüsselzeugnis mit dem [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanz-Eigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der vertrauenden Partei dafür angibt, wie die Bescheinigungserklärung (d.h. die Bereitstellung überprüfbarer Nachweise über die Authentizität des Authentifikators und seiner Daten) während der Zeugnis-Erstellung übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die vertrauende Partei nicht an der Bescheinigung des Authentifikators interessiert ist. Dies könnte sein, um zusätzliche Benutzerzustimmungen für Roundtrips zum Server der vertrauenden Partei zu vermeiden, um identifizierende Informationen weiterzuleiten, oder für Roundtrips zu einer Bescheinigung-Zertifikatsbehörde (CA), mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA zur Erstellung seiner Bescheinigungserklärung verwendet, wird die Client-App dies durch eine "None"-Bescheinigungserklärung ersetzen, die anzeigt, dass keine Bescheinigungserklärung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die vertrauende Partei die Bescheinigungserklärung erhalten möchte, wie sie vom Authentifikator generiert wird.

    - `"enterprise"`

      - : Gibt an, dass die vertrauende Partei eine Bescheinigungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, wo die Organisation Registrierungen an spezifische Authentifikatoren binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vertrauende Partei eine überprüfbare Bescheinigungserklärung erhalten möchte, jedoch dem Client erlaubt, zu entscheiden, wie sie empfangen wird. Zum Beispiel könnte der Client wählen, die Assertionserklärung des Authentifikators durch eine von einer anonymisierenden CA erstellte zu ersetzen, um den Schutz der Privatsphäre des Benutzers zu gewährleisten.

    Wenn `attestation` weggelassen wird, wird der Standardwert `"none"` verwendet.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der vertrauenden Partei für das von dem Authentifikator verwendete Format der Bescheinigungserklärung angibt. Die Werte sollten in der Reihenfolge von höchster bis niedrigster Präferenz sortiert sein und sollten als Hinweise betrachtet werden — der Authentifikator kann sich entscheiden, eine Bescheinigungserklärung in einem anderen Format auszugeben. Für eine Liste gültiger Formate siehe [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist der Standardwert für `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien zur Filterung potenzieller Authentifikatoren für die Zeugnis-Erstellungsoperation sind. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Typ von Authentifikator-Anhang für den gewählten Authentifikator zulässig sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **Plattform-Authentifikator** bezeichnet), daher wird WebAuthn über ein für diese Plattform verfügbares Transportmittel, wie eine plattformspezifische API, mit ihm kommunizieren. Ein an einen Plattform-Authentifikator gebundenes öffentliches Schlüsselzeugnis wird als **Plattform-Zeugnis** bezeichnet.
        - `"cross-platform"`

          - : Der Authentifikator ist kein Teil des Geräts, auf dem WebAuthn ausgeführt wird (als **mobiler Authentifikator** bezeichnet, da er zwischen verschiedenen Geräten wechseln kann), daher wird WebAuthn mit ihm über ein geräteübergreifendes Transportprotokoll wie Bluetooth oder NFC kommunizieren. Ein an einen mobilen Authentifikator gebundenes öffentliches Schlüsselzeugnis wird als **mobiles Zeugnis** bezeichnet.

            Wenn weggelassen, kann jeder Typ von Authentifikator, entweder Plattform oder geräteübergreifend, für die Zeugnis-Erstellungsoperation ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, zeigt es an, dass ein residierender Schlüssel erforderlich ist (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch für die Abwärtskompatibilität mit WebAuthn Level 1 verfügbar. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert für `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Umfang die vertrauende Partei wünscht, ein clientseitiges [entdeckbares Zeugnis](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (d.h. eines, das bei Authentifizierungsanfragen verwendet werden kann, bei denen die vertrauende Partei keine Zeugnis-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverseitiges Zeugnis**, wobei die vertrauende Partei Zeugnis-IDs im `get()` `allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt die Erstellung eines serverseitigen Zeugnisses, akzeptiert aber ein clientseitiges entdeckbares Zeugnis.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt stark die Erstellung eines clientseitigen entdeckbaren Zeugnisses, akzeptiert aber ein serverseitiges Zeugnis. Der Benutzeragent sollte den Benutzer bei Bedarf durch die Einrichtung der Benutzerauthentifizierung führen, um ein entdeckbares Zeugnis zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die vertrauende Partei erfordert ein clientseitig entdeckbares Zeugnis. Wenn eines nicht erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Siehe die [`create()`-Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions) für mehr Details.

        Wenn weggelassen, ist der Standardwert für `residentKey` `"required"`, wenn `requireResidentKey` `true` ist, ansonsten ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der vertrauenden Partei an die Benutzerauthentifizierung für die `create()`-Operation angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die vertrauende Partei bevorzugt keine Benutzerauthentifizierung für die `create()`-Operation, um Störungen des Benutzererlebnisses zu minimieren.
        - `"preferred"`
          - : Die vertrauende Partei bevorzugt die Benutzerauthentifizierung für die `create()`-Operation, jedoch schlägt sie nicht fehl, wenn die Benutzerauthentifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vertrauende Partei erfordert die Benutzerauthentifizierung für die `create()`-Operation – wenn die Benutzerauthentifizierung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, ist der Standardwert für `userVerification` `"preferred"`.

- `challenge`

  - : Ein/e {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} bereitgestellt vom Server der vertrauenden Partei und verwendet als [cryptographic challenge](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesendet.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die die bestehenden Zeugnisse beschreiben, die bereits diesem Benutzerkonto (wie durch `user.id` identifiziert) zugeordnet sind. Dies wird von der vertrauenden Partei bereitgestellt und vom Benutzeragenten überprüft, um zu vermeiden, dass ein neues öffentliches Schlüsselzeugnis auf einem Authentifikator erstellt wird, der bereits ein Zeugnis hat, das zu dem angegebenen Benutzerkonto gehört. Jedes Element sollte folgendes Format haben:

    - `id`

      - : Ein/e {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} darstellend die bestehende Zeugnis-ID.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transporte repräsentieren. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für mehr Details).

    - `type`
      - : Ein String, der den zu erstellenden Typ des öffentlichen Schlüsselzeugnisses definiert. Derzeit kann dies einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüsselzeugnis auf einem Authentifikator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Zeugnis mit einem anderen Authentifikator zu erstellen oder fehlschlagen, wenn das nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für angeforderte Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitungen durch den Client oder Authentifikator während des Zeugnis-Erstellungsprozesses zu spezifizieren. Beispiele hierfür sind die Angabe, ob ein zurückgegebenes Zeugnis entdeckbar ist oder ob die vertrauende Partei große Blob-Daten, die mit einem Zeugnis verbunden sind, speichern kann.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Für Informationen über die Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, die die von der vertrauenden Partei unterstützten Schlüsseltypen und Signaturalgorithmen angeben, geordnet von der höchsten Präferenz zur niedrigsten Präferenz. Der Client und der Authentifikator werden nach besten Kräften versuchen, ein Zeugnis des bevorzugtesten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus für diesen Zeugnistyp darstellt. Es wird empfohlen, dass vertrauende Parteien, die ein breites Spektrum von Authentifikatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen einschließen:

        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den zu erstellenden Typ des öffentlichen Schlüsselzeugnisses definiert. Derzeit kann dies einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn keiner der aufgelisteten Zeugnistypen erstellt werden kann, schlägt die `create()`-Operation fehl.

- `rp`

  - : Ein Objekt, das die vertrauende Partei beschreibt, die die Erzeugung des Zeugnisses angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der vertrauenden Partei darstellt. Ein öffentliches Schlüsselzeugnis kann nur für die Authentifizierung mit der vertrauenden Partei (wie durch `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf identifiziert) verwendet werden, mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann weder einen Port noch ein Schema wie ein Standardursprung einschließen, aber das Domänenschema muss das `https`-Schema sein. Die `id` muss der effektiven Domäne des Ursprungs entsprechen oder ein Domänen-Suffix davon sein. So sind zum Beispiel, wenn der Ursprung der vertrauenden Partei `https://login.example.com:1337` ist, die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn weggelassen, ist der Standardwert für `id` der Ursprungsdokument — was `login.example.com` im obigen Beispiel wäre.

    - `name`
      - : Ein String, der den Namen der vertrauenden Partei darstellt (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer bei der Erstellung oder Validierung einer WebAuthn-Operation angezeigt wird.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf die Fertigstellung der Erzeugungsoperation zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Zeugnis generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Anzeigennamen bietet (beispielsweise `"John Doe"`), der bei der erstmaligen Registrierung bei der vertrauenden Partei vom Benutzer festgelegt wurde.

    - `id`

      - : Ein/e {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} darstellend eine eindeutige ID für das Benutzerkonto. Dieser Wert hat eine maximale Länge von 64 Bytes und soll dem Benutzer nicht angezeigt werden.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto bietet, um zwischen verschiedenen Konten mit ähnlichen `displayName` zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkontoidentifikator (zum Beispiel `"JohnDoe667"`) sein.

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf gibt, welche Authentifizierungs-Benutzeroberfläche der Benutzeragent dem Benutzer bereitstellen soll.

    Die Werte können eines der folgenden sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates, spezielles physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination von Autorisierungs-/Authentifizierungsmethoden, möglicherweise unter Einbeziehung sowohl benutzer- als auch serverbasierter Mechanismen.

## Beispiele

### Erstellen eines öffentlichen Schlüsselzeugnisses

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften spezifiziert und Standardwerte für den Rest verwendet.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues öffentliches Schlüsselzeugnis zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt-Instanz aufgelöst wird, das ein öffentliches Schlüsselzeugnis darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get) Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Objekt, das Zugriff auf mehrere nützliche Informationen, einschließlich der Authentifikator-Daten, des öffentlichen Schlüssels, der Transportmechanismen und mehr bietet.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsoperationen gegen dieses Zeugnis gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

Siehe [Erstellen eines Schlüsselpaars und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für mehr Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
