---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`** Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `publicKey`-Option übergeben wird: das heißt, wenn `create()` verwendet wird, um ein Public-Key-Credential mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanzeigenschaften

- `attestation` {{optional_inline}}

  - : Ein String, der die Präferenz der relyierenden Partei dafür angibt, wie die Attestierungsanweisung (d.h. die Bereitstellung von überprüfbaren Nachweisen der Authentizität des Authentifikators und seiner Daten) während der Anmeldeerstellung übermittelt wird. Der Wert kann einer der folgenden sein:

    - `"none"`

      - : Gibt an, dass die relyierende Partei nicht an einer Authenticator-Attestierung interessiert ist. Dies könnte sein, um zusätzliche Benutzereinwilligungen für Roundtrips zum Server der relyierenden Partei zur Weiterleitung von Identifizierungsinformationen oder Roundtrips zu einer Attestation Certificate Authority (CA) zu vermeiden, mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA verwendet, um seine Attestierungsanweisung zu generieren, wird die Client-Anwendung diese durch eine "None"-Attestierungsanweisung ersetzen, was darauf hinweist, dass keine Attestierungsanweisung verfügbar ist.

    - `"direct"`

      - : Gibt an, dass die relyierende Partei die Attestierungsanweisung so erhalten möchte, wie sie vom Authentifikator generiert wurde.

    - `"enterprise"`

      - : Gibt an, dass die relyierende Partei eine Attestierungsanweisung erhalten möchte, die möglicherweise eindeutig identifizierbare Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, bei denen die Organisation Registrierungen an bestimmte Authentifikatoren binden möchte.

    - `"indirect"`
      - : Gibt an, dass die relyierende Partei eine überprüfbare Attestierungsanweisung erhalten möchte, aber es dem Client überlässt, zu entscheiden, wie sie empfangen werden soll. Zum Beispiel könnte der Client wählen, die Aussagen des Authentifikators durch eine von einer Anonymisierungs-CA generierte Aussage zu ersetzen, um die Privatsphäre der Nutzer zu schützen.

    Wenn `attestation` weggelassen wird, ist der Standardwert `"none"`.

- `attestationFormats` {{optional_inline}}

  - : Ein Array von Strings, das die Präferenz der relyierenden Partei für das von dem Authentifikator verwendete Attestierungsanweisungsformat angibt. Die Werte sollten von höchster bis niedrigster Präferenz geordnet sein und als Hinweise betrachtet werden — der Authentifikator kann sich entscheiden, eine Attestierungsanweisung in einem anderen Format auszugeben. Eine Liste gültiger Formate finden Sie in den [WebAuthn-Attestationsanweisungsformat-Identifikatoren](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist der Standardwert von `attestationFormats` ein leeres Array.

- `authenticatorSelection` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften Kriterien sind, die verwendet werden, um potenzielle Authentikatoren für die Erstellung von Anmeldedaten zu filtern. Dieses Objekt kann die Eigenschaften enthalten:

    - `authenticatorAttachment` {{optional_inline}}

      - : Ein String, der angibt, welcher Authenticator-Attachment-Typ für den ausgewählten Authentifikator erlaubt sein soll. Mögliche Werte sind:

        - `"platform"`
          - : Der Authenticator ist Teil des Gerätes, auf dem WebAuthn läuft (ein sogenannter **Plattform-Authenticator**), daher wird WebAuthn über einen auf dieser Plattform verfügbaren Transport mit ihm kommunizieren, wie z.B. eine plattformspezifische API. Ein Public-Key-Credential, das an einen Plattform-Authenticator gebunden ist, wird als **Plattform-Credential** bezeichnet.
        - `"cross-platform"`

          - : Der Authenticator ist kein Teil des Gerätes, auf dem WebAuthn läuft (ein sogenannter **Roaming-Authenticator**, da es zwischen verschiedenen Geräten wechseln kann), daher wird WebAuthn über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC mit ihm kommunizieren. Ein Public-Key-Credential, das an einen Roaming-Authenticator gebunden ist, wird als **Roaming-Credential** bezeichnet.

            Wenn weggelassen, kann jeder Authenticator-Typ, entweder Plattform- oder plattformübergreifend, für die Erstellung der Anmeldedaten ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}

      - : Ein Boolean. Wenn `true` gesetzt, zeigt es an, dass ein Resident Key benötigt wird (siehe `residentKey`). Diese Eigenschaft ist veraltet, aber in einigen Implementierungen noch verfügbar, um die Abwärtskompatibilität mit WebAuthn Level 1 zu gewährleisten. Der Wert sollte auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Wenn weggelassen, ist der Standardwert von `requireResidentKey` `false`.

    - `residentKey` {{optional_inline}}

      - : Ein String, der angibt, in welchem Umfang die relyierende Partei wünscht, ein clientseitiges [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) zu erstellen (d.h. eines, das in Authentifizierungsanfragen verwendbar ist, bei denen die relyierende Partei keine Credential-IDs bereitstellt — [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) wird mit einem leeren `allowCredentials`-Wert aufgerufen). Die Alternative ist ein **serverseitiges Credential**, bei dem die relyierende Partei Credential-IDs im `get()`-`allowCredentials`-Wert bereitstellen muss.
        Mögliche Werte sind:

        - `"discouraged"`
          - : Die relyierende Partei bevorzugt die Erstellung eines serverseitigen Credentials, wird aber ein clientseitiges entdeckbares Credential akzeptieren.
        - `"preferred"`
          - : Die relyierende Partei bevorzugt dringend die Erstellung eines clientseitigen entdeckbaren Credentials, wird aber ein serverseitiges Credential akzeptieren. Der Nutzer-Agent sollte den Benutzer bei der Einrichtung der Nutzerüberprüfung unterstützen, falls erforderlich, um ein entdeckbares Credential zu erstellen. Dies hat Vorrang vor der `userVerification`-Einstellung.
        - `"required"`
          - : Die relyierende Partei erfordert ein clientseitiges entdeckbares Credential. Wenn eines nicht erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) geworfen. Siehe die [`create()` Ausnahmenliste](/de/docs/Web/API/CredentialsContainer/create#exceptions) für weitere Details.

        Wenn weggelassen, ist der Standardwert von `residentKey` `"required"`, wenn `requireResidentKey` `true` ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}

      - : Ein String, der die Anforderungen der relyierenden Partei an die Nutzerüberprüfung für den `create()`-Vorgang angibt. Mögliche Werte sind:

        - `"discouraged"`
          - : Die relyierende Partei bevorzugt keine Nutzerüberprüfung für den `create()`-Vorgang, im Interesse der Minimierung von Unterbrechungen in der Benutzererfahrung.
        - `"preferred"`
          - : Die relyierende Partei bevorzugt eine Nutzerüberprüfung für den `create()`-Vorgang, aber es wird nicht fehlschlagen, wenn die Nutzerüberprüfung nicht durchgeführt werden kann.
        - `"required"`
          - : Die relyierende Partei erfordert eine Nutzerüberprüfung für den `create()`-Vorgang — wenn die Nutzerüberprüfung nicht durchgeführt werden kann, wird ein Fehler geworfen.

        Wenn weggelassen, ist der Standardwert von `userVerification` `"preferred"`.

- `challenge`

  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der relyierenden Partei und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgeschickt.

- `excludeCredentials` {{optional_inline}}

  - : Ein {{jsxref("Array")}} von Objekten, die bestehende Anmeldedaten beschreiben, die bereits diesem Benutzerkonto zugeordnet sind (wie durch `user.id` identifiziert). Dies wird von der relyierenden Partei bereitgestellt und vom Nutzer-Agent überprüft, um zu vermeiden, dass ein neues Public-Key-Credential auf einem Authenticator erstellt wird, der bereits ein Credential an das angegebene Benutzerkonto gebunden hat. Jedes Element sollte folgendes Format haben:

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das die bestehende Credential-ID darstellt.

    - `transports` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Strings, die die erlaubten Transports repräsentieren. Mögliche Transports sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public-Key-Credentials definiert. Momentan kann dieser nur einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes Public-Key-Credential auf einem Authenticator zu erzeugen, wird der Nutzer-Agent den Benutzer dazu anleiten, das Credential mit einem anderen Authenticator zu erstellen, oder scheitern, wenn das nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist der Standardwert ein leeres Array.

- `extensions` {{optional_inline}}

  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen repräsentieren. Diese Erweiterungen werden verwendet, um eine spezifische zusätzliche Verarbeitung durch den Client oder Authenticator während des Credential-Erstellungsprozesses zu spezifizieren. Beispiele sind, ob ein zurückgegebenes Credential entdeckbar ist oder ob die relyierende Partei große Blobdaten, die mit einem Credential verbunden sind, speichern kann.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird er sie einfach ignorieren. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `pubKeyCredParams`

  - : Ein {{jsxref("Array")}} von Objekten, das die von der relyierenden Partei unterstützten Schlüsseltypen und Signaturalgorithmen spezifiziert, geordnet von am meisten bevorzugt bis am wenigsten bevorzugt. Der Client und Authenticator werden sich bemühen, ein Credential des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:

    - `alg`

      - : Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für diesen Credential-Typ verwendet werden soll. Es wird empfohlen, dass relyierende Parteien, die eine breite Palette von Authenticatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Auswahlmöglichkeiten verwenden:

        - `-8`: Ed25519
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ des zu erstellenden Public-Key-Credentials definiert. Momentan kann dieser nur einen einzigen Wert annehmen, `"public-key"`, aber in Zukunft können weitere Werte hinzugefügt werden.

    Wenn keine der aufgelisteten Credential-Typen erstellt werden können, schlägt der `create()`-Vorgang fehl.

- `rp`

  - : Ein Objekt, das die relyierende Partei beschreibt, die die Erstellung des Credentials angefordert hat. Es kann die folgenden Eigenschaften enthalten:

    - `id` {{optional_inline}}

      - : Ein String, der die ID der relyierenden Partei darstellt. Ein Public-Key-Credential kann nur für die Authentifizierung mit derselben relyierenden Partei (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf identifiziert) verwendet werden, mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder Schema wie ein Standard-Ursprung enthalten, aber das Domain-Schema muss `https` sein. Die `id` muss der effektiven Domain des Ursprungs entsprechen oder einem Domainsuffix davon. Wenn also der Ursprung der relyierenden Partei `https://login.example.com:1337` ist, sind die folgenden `id`s gültig:

        - `login.example.com`
        - `example.com`

        Aber nicht:

        - `m.login.example.com`
        - `com`

        Wenn weggelassen, ist der Standardwert für `id` der Dokumentursprung — der in obigem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der relyierenden Partei darstellt (z.B., `"Facebook"`). Dies ist der Name, der dem Benutzer bei der Erstellung oder Validierung eines WebAuthn-Vorgangs präsentiert wird.

- `timeout` {{optional_inline}}

  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist zu warten, bis der Erstellungsvorgang abgeschlossen ist. Dieser Hinweis kann durch den Browser überschrieben werden.

- `user`

  - : Ein Objekt, das das Benutzerkonto beschreibt, für das das Credential generiert wird. Es kann die folgenden Eigenschaften enthalten:

    - `displayName`

      - : Ein String, der einen benutzerfreundlichen Anzeigenamen des Benutzers bereitstellt (Beispiel: `"John Doe"`), der vom Benutzer während der anfänglichen Registrierung bei der relyierenden Partei festgelegt wurde.

    - `id`

      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, das eine eindeutige ID für das Benutzerkonto darstellt. Dieser Wert hat eine maximale Länge von 64 Bytes und soll nicht dem Benutzer angezeigt werden.

    - `name`
      - : Ein String, der einen benutzerfreundlichen Bezeichner für das Benutzerkonto bereitstellt, um zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (wie `"john.doe@example.com"`), Telefonnummer (zum Beispiel `"+12345678901"`) oder eine andere Art von Benutzerkontobezeichner sein (zum Beispiel `"johndoe667"`).

- `hints` {{optional_inline}}

  - : Ein Array von Strings, das Hinweise darauf liefert, welche Authentifizierungs-Benutzeroberfläche der Benutzer-Agent für den Benutzer bereitstellen soll.

    Die Werte können einer der folgenden sein:

    - `"security-key"`
      - : Die Authentifizierung erfordert ein separates dediziertes physisches Gerät, um den Schlüssel bereitzustellen.
    - `"client-device"`
      - : Der Benutzer authentifiziert sich mit seinem eigenen Gerät, wie z.B. einem Telefon.
    - `"hybrid"`
      - : Die Authentifizierung beruht auf einer Kombination aus Autorisierungs-/Authentifizierungsmethoden, die möglicherweise sowohl benutzer- als auch serverbasierte Mechanismen einbeziehen.

## Beispiele

### Erstellen eines Public-Key-Credentials

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, das nur die erforderlichen Eigenschaften angibt und für den Rest Standardwerte verwendet.

Es übergibt dann das Objekt an `navigator.credentials.create()`, um ein neues Public-Key-Credential zu erzeugen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, die ein Public-Key-Credential darstellt, das später verwendet werden kann, um einen Benutzer über einen WebAuthn-`get()`-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen wie die Authenticator-Daten, den öffentlichen Schlüssel, die Transportmechanismen und mehr bietet.

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

Einige dieser Daten müssen auf dem Server gespeichert werden, um zukünftige Authentifizierungsvorgänge gegen dieses Credential durchzuführen — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transports.

Weitere Informationen dazu, wie der gesamte Ablauf funktioniert, finden Sie unter [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
