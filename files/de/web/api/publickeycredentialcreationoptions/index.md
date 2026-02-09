---
title: PublicKeyCredentialCreationOptions
slug: Web/API/PublicKeyCredentialCreationOptions
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`PublicKeyCredentialCreationOptions`** Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der Option `publicKey` übergeben wird: also, wenn `create()` verwendet wird, um ein öffentliches Schlüssel-Anmeldedaten mit der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu erstellen.

## Instanzeigenschaften

- `attestation` {{optional_inline}}
  - : Ein String, der die Präferenz der vorhergehenden Instanz (relying party) angibt, wie die Attestierungserklärung (d.h. die Bereitstellung nachweisbarer Beweise für die Authentizität des Authentifizierers und seiner Daten) während der Erstellung der Anmeldedaten übermittelt wird. Der Wert kann einer der folgenden sein:
    - `"none"`
      - : Gibt an, dass die vorhergehende Instanz nicht an Authentifikator-Attestierung interessiert ist. Dies könnte dazu dienen, zusätzliche Benutzerzustimmungen für Rückreisen zum Server der vorhergehenden Instanz zu vermeiden, um identifizierende Informationen weiterzuleiten, oder Rückreisen zu einer Attestierungszertifizierungsstelle (CA), mit dem Ziel, den Authentifizierungsprozess reibungsloser zu gestalten. Wenn `"none"` als `attestation`-Wert gewählt wird und der Authentifikator signalisiert, dass er eine CA verwendet, um seine Attestierungserklärung zu generieren, ersetzt die Client-App diese mit einer "None" Attestierungserklärung, was anzeigt, dass keine Attestierungserklärung verfügbar ist.

    - `"direct"`
      - : Gibt an, dass die vorhergehende Instanz die Attestierungserklärung erhalten möchte, wie sie vom Authentifikator generiert wurde.

    - `"enterprise"`
      - : Gibt an, dass die vorhergehende Instanz eine Attestierungserklärung erhalten möchte, die möglicherweise eindeutig identifizierende Informationen enthält. Dies ist für kontrollierte Bereitstellungen innerhalb eines Unternehmens gedacht, wo die Organisation Registrierungen an bestimmte Authentifikatoren binden möchte.

    - `"indirect"`
      - : Gibt an, dass die vorhergehende Instanz eine verifizierbare Attestierungserklärung erhalten möchte, dem Client jedoch erlaubt, zu entscheiden, wie er sie erhält. Der Client könnte beispielsweise wählen, die Assertionserklärung des Authentifikators durch eine von einer Anonymisierungs-CA generierte zu ersetzen, um die Privatsphäre des Benutzers zu schützen.

    Wenn `attestation` weggelassen wird, wird es standardmäßig auf `"none"` gesetzt.

- `attestationFormats` {{optional_inline}}
  - : Ein Array von Strings, das die Präferenz der vorhergehenden Instanz für das von Authentifikator verwendete Attestierungsformat angibt. Werte sollten von höchster zu niedrigster Präferenz geordnet sein und sollten als Hinweise betrachtet werden — der Authentifikator kann wählen, eine Attestierungserklärung in einem anderen Format auszustellen. Eine Liste gültiger Formate finden Sie unter [WebAuthn Attestation Statement Format Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-attestation-statement-format-ids).

    Wenn weggelassen, ist `attestationFormats` standardmäßig ein leeres Array.

- `authenticatorSelection` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften Kriterien sind, um die potenziellen Authentifikatoren für den Anmeldedatenerstellungsvorgang herauszufiltern. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `authenticatorAttachment` {{optional_inline}}
      - : Ein String, der angibt, welcher Typ von Authentifikator-Anhang für den gewählten Authentifikator zulässig sein soll. Mögliche Werte sind:
        - `"platform"`
          - : Der Authentifikator ist Teil des Geräts, auf dem WebAuthn läuft (als **Plattformauthentifikator** bezeichnet), und daher wird WebAuthn mit ihm über ein auf dieser Plattform verfügbares Transportmittel kommunizieren, wie eine plattformspezifische API. Ein öffentliches Schlüssel-Anmeldedaten gebunden an einen Plattformauthentifikator wird als **Plattform-Anmeldedaten** bezeichnet.
        - `"cross-platform"`
          - : Der Authentifikator ist nicht Teil des Geräts, auf dem WebAuthn läuft (als **beweglicher Authentifikator** bezeichnet, da er zwischen verschiedenen Geräten wechseln kann), und daher wird WebAuthn mit ihm über ein plattformübergreifendes Transportprotokoll wie Bluetooth oder NFC kommunizieren. Ein öffentliches Schlüssel-Anmeldedaten gebunden an einen beweglichen Authentifikator wird als **bewegliche Anmeldedaten** bezeichnet.

            Wenn weggelassen, kann für den Anmeldedatenerstellungsvorgang jeder Typ von Authentifikator, entweder Plattform oder plattformübergreifend, ausgewählt werden.

    - `requireResidentKey` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, zeigt es an, dass die vorhergehende Instanz ein [ermittelbares Anmeldedatum](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) erstellen möchte.

        Diese Option wird nur aus Gründen der Abwärtskompatibilität beibehalten: Anrufer sollten stattdessen die [`residentKey`](#residentkey) Option verwenden. Wenn `residentKey` angegeben ist und unterstützt wird, wird `requireResidentKey` ignoriert. Die `requireResidentKey` Option sollte nur dann auf `true` gesetzt werden, wenn `residentKey` auf `"required"` gesetzt ist.

        Standard ist `false`.

    - `residentKey` {{optional_inline}}
      - : Ein String, der angibt, in welchem Umfang die vorhergehende Instanz ein [ermittelbares Anmeldedatum](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) erstellen möchte.
        Mögliche Werte sind:
        - `"discouraged"`
          - : Die vorhergehende Instanz zieht die Erstellung eines serverseitigen Anmeldedatums vor, akzeptiert jedoch auch ein clientseitig ermittelbares Anmeldedatum.
        - `"preferred"`
          - : Die vorhergehende Instanz zieht es dringend vor, ein ermittelbares Anmeldedatum zu erstellen, akzeptiert jedoch auch ein nicht ermittelbares Anmeldedatum. Der Benutzeragent sollte den Benutzer durch die Einrichtung der Benutzerverifizierung führen, falls erforderlich, um ein ermittelbares Anmeldedatum zu erstellen. Dies hat Vorrang vor der `userVerification` Einstellung.
        - `"required"`
          - : Die vorhergehende Instanz erfordert ein ermittelbares Anmeldedatum. Wenn eines nicht erstellt werden kann, wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst. Siehe die [`create()` Ausnahmeliste](/de/docs/Web/API/CredentialsContainer/create#exceptions) für weitere Details.

        Wenn weggelassen, ist `residentKey` standardmäßig auf `"required"` gesetzt, wenn `requireResidentKey` `true` ist, andernfalls ist der Standardwert `"discouraged"`.

    - `userVerification` {{optional_inline}}
      - : Ein String, der die Anforderungen der vorhergehenden Instanz für die Benutzerverifizierung für den `create()`-Vorgang angibt. Mögliche Werte sind:
        - `"discouraged"`
          - : Die vorhergehende Instanz zieht keine Benutzerverifizierung für den `create()`-Vorgang vor, um die Benutzererfahrung so wenig wie möglich zu stören.
        - `"preferred"`
          - : Die vorhergehende Instanz bevorzugt Benutzerverifizierung für den `create()`-Vorgang, schlägt jedoch nicht fehl, wenn die Benutzerverifizierung nicht durchgeführt werden kann.
        - `"required"`
          - : Die vorhergehende Instanz erfordert Benutzerverifizierung für den `create()`-Vorgang — wenn die Benutzerverifizierung nicht durchgeführt werden kann, wird ein Fehler ausgelöst.

        Wenn weggelassen, ist `userVerification` standardmäßig auf `"preferred"` gesetzt.

- `challenge`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, bereitgestellt vom Server der vorhergehenden Instanz und verwendet als [kryptografische Herausforderung](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication). Dieser Wert wird vom Authentifikator signiert und die Signatur wird als Teil des [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) zurückgesandt.

- `excludeCredentials` {{optional_inline}}
  - : Ein {{jsxref("Array")}} von Objekten, die vorhandene Anmeldedaten beschreiben, die bereits diesem Benutzerkonto (wie durch `user.id` identifiziert) zugeordnet sind. Dies wird von der vorhergehenden Instanz bereitgestellt und vom Benutzeragent überprüft, um die Erstellung eines neuen öffentlichen Schlüssel-Anmeldedatums auf einem Authentifikator zu vermeiden, der bereits eine Anmeldedaten mit dem angegebenen Benutzerkonto zugeordnet hat. Jedes Element sollte die folgende Form haben:
    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} repräsentiert die ID des vorhandenen Anmeldedaten.

    - `transports` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Strings, die erlaubte Transporte repräsentieren. Mögliche Transporte sind: `"ble"`, `"hybrid"`, `"internal"`, `"nfc"`, und `"usb"` (siehe [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) für weitere Details).

    - `type`
      - : Ein String, der den Typ der zu erstellenden öffentlichen Schlüssel-Anmeldedaten definiert. Dies kann derzeit einen einzigen Wert aufnehmen, `"public-key"`, aber in Zukunft könnten mehr Werte hinzugefügt werden.

    Wenn der `create()`-Aufruf versucht, ein doppeltes öffentliches Schlüssel-Anmeldedatum auf einem Authentifikator zu erstellen, wird der Benutzeragent den Benutzer anleiten, das Anmeldedatum mit einem anderen Authentifikator zu erstellen oder zu scheitern, wenn das nicht möglich ist.

    Wenn `excludeCredentials` weggelassen wird, ist es standardmäßig ein leeres Array.

- `extensions` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften enthält, die die Eingabewerte für alle angeforderten Erweiterungen darstellen. Diese Erweiterungen werden verwendet, um zusätzliche Verarbeitungen durch den Client oder Authentifikator während des Anmeldedatenerstellungsvorgangs zu spezifizieren. Beispiele umfassen die Angabe, ob ein zurückgegebenes Anmeldedatum ermittelbar ist oder ob die vorhergehende Instanz große Blobdaten speichern können soll, die einem Anmeldedatum zugeordnet sind.

    Erweiterungen sind optional und verschiedene Browser können verschiedene Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

- `hints` {{optional_inline}} {{experimental_inline}}
  - : Ein Array von Strings, das Hinweise darauf gibt, welche Benutzeroberfläche der Browser bieten sollte, um ein öffentliches Schlüssel Anmeldedatum zu erstellen.

    Die Strings können einer der folgenden sein:
    - `"security-key"`
      - : Die Benutzeroberfläche sollte empfehlen, einen separaten physischen Sicherheitsschlüssel (wie einen YubiKey) zu verwenden, um das Anmeldedatum zu erstellen.
    - `"client-device"`
      - : Die Benutzeroberfläche sollte empfehlen, einen Authentifikator zu verwenden, der auf dem gleichen Gerät verfügbar ist, das sie verwenden, um auf den RP-Client zuzugreifen, um das Anmeldedatum zu erstellen. Es ist analog zum `authenticatorAttachment` [`platform`](#platform) Wert.
    - `"hybrid"`
      - : Die Benutzeroberfläche sollte empfehlen, einen allgemeinen Authentifikator, wie eine Smartphone-basierte Authentifikator-App, zu verwenden, um das Anmeldedatum zu erstellen. Dies bevorzugt einen geräteübergreifenden Ansatz zur Handhabung von Authentifizierung und setzt auf eine Kombination aus Laptop und Smartphone, zum Beispiel.

    Der `authenticatorAttachment` [`cross-platform`](#cross-platform) Wert ist im Wesentlichen eine Kombination aus den `hints` Optionen `security-key` und `hybrid` Werten — wenn ein Gerät kein Bluetooth hat und ein RP `attachment: "cross-platform"` angibt, wird die resultierende Benutzeroberfläche wahrscheinlich ähnlich der `hints: "security-key"` Benutzeroberfläche sein.

    Wenn mehrere Strings im Array enthalten sind, gibt ihre Reihenfolge die Präferenzreihenfolge von hoch zu niedrig an. Unterstützende Browser, die die Hinweise respektieren, sollten den ersten verwenden, den sie verstehen.

    Die `hints` Option bietet eine flexiblere Möglichkeit, Benutzeroberflächenpräferenzen für die Erstellung eines Anmeldedatums anzugeben als die [`authenticatorAttachment`](#authenticatorattachment) Option, die die nicht gewählte Option vollständig verbirgt. `hints` ermöglichen es auch, eine Präferenz für entweder Sicherheitsschlüssel oder Hybrid anzugeben, was mit `authenticatorAttachment` nicht möglich ist.

    Angegebene `hints` können im Widerspruch zu Hinweisen stehen, die in der `authenticatorAttachment` Option bereitgestellt wurden. Wenn die angegebenen `hints` dieser Option widersprechen, haben die `hints` Vorrang. `hints` können auch vom Browser unter bestimmten Umständen ignoriert werden, zum Beispiel wenn ein angedeuteter Authentifikatortyp auf dem Gerät des Benutzers nicht verwendbar ist.

    Für einige spezifische Code- und UI-Beispiele siehe [Introducing hints, Related Origin Requests and JSON serialization for WebAuthn in Chrome](https://developer.chrome.com/blog/passkeys-updates-chrome-129#hints).

- `pubKeyCredParams`
  - : Ein {{jsxref("Array")}} von Objekten, die die Schlüsseltpyen und Signaturalgorithmen spezifizieren, die die vorhergehende Instanz unterstützt, geordnet von der bevorzugtesten bis zur am wenigsten bevorzugten. Der Client und der Authentifikator werden sich bemühen, ein Anmeldedatum des am meisten bevorzugten Typs zu erstellen. Diese Objekte enthalten die folgenden Eigenschaften:
    - `alg`
      - : Eine Zahl, die einem [COSE-Algorithmus-Identifikator](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für diesen Anmeldedatentyp verwendet werden soll. Es wird empfohlen, dass vorhergehende Instanzen, die eine breite Palette von Authentifikatoren unterstützen möchten, mindestens die folgenden Werte in den bereitgestellten Optionen einschließen:
        - `-8`: EdDSA
        - `-7`: ES256
        - `-257`: RS256

    - `type`
      - : Ein String, der den Typ der zu erstellenden öffentlichen Schlüssel-Anmeldedaten definiert. Dies kann derzeit einen einzigen Wert aufnehmen, `"public-key"`, aber in Zukunft könnten mehr Werte hinzugefügt werden.

    Wenn keiner der angegebenen Anmeldedatentypen erstellt werden kann, schlägt der `create()`-Vorgang fehl.

- `rp`
  - : Ein Objekt, das die vorhergehende Instanz beschreibt, die die Erstellung der Anmeldedaten angefordert hat. Es kann die folgenden Eigenschaften enthalten:
    - `id` {{optional_inline}}
      - : Ein String, der die ID der vorhergehenden Instanz repräsentiert. Ein öffentliches Schlüssel-Anmeldedaten kann nur zur Authentifizierung mit der gleichen vorhergehenden Instanz verwendet werden (wie durch die `publicKey.rpId` in einem [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf identifiziert), mit der es registriert wurde — die IDs müssen übereinstimmen.

        Die `id` kann keinen Port oder Schema wie ein standardmäßiger Ursprung einschließen, aber das Domainschema muss `https` sein. Die `id` muss der effektiven Domäne des Ursprungs entsprechen oder ein Domain-Suffix davon sein. Zum Beispiel, wenn der Ursprung der vorhergehenden Instanz `https://login.example.com:1337` ist, sind die folgenden `ids` gültig:
        - `login.example.com`
        - `example.com`

        Aber nicht:
        - `m.login.example.com`
        - `com`

        Wenn weggelassen, wird `id` standardmäßig auf den Dokumenten-Ursprung gesetzt — was in diesem Beispiel `login.example.com` wäre.

    - `name`
      - : Ein String, der den Namen der vorhergehenden Instanz repräsentiert (z.B. `"Facebook"`). Dies ist der Name, der dem Benutzer angezeigt wird, wenn er eine WebAuthn-Operation erstellt oder validiert.

- `timeout` {{optional_inline}}
  - : Ein numerischer Hinweis in Millisekunden, der angibt, wie lange die aufrufende Web-App bereit ist, auf den Abschluss des Erstellvorgangs zu warten. Dieser Hinweis kann vom Browser überschrieben werden.

- `user`
  - : Ein Objekt, das das Benutzerkonto beschreibt, für welches das Anmeldedatum generiert wird. Es kann die folgenden Eigenschaften enthalten:
    - `displayName`
      - : Ein String, der einen benutzerfreundlichen Anzeigemamen (Beispiel: `"Maria Sanchez"`) bereitstellt, den der Benutzer während der anfänglichen Registrierung bei der vorhergehenden Instanz festgelegt haben wird.

    - `id`
      - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} repräsentiert eine eindeutige ID für das Benutzerkonto. Dieser Wert hat eine maximale Länge von 64 Bytes und ist nicht für die Anzeige für den Benutzer vorgesehen.

    - `name`
      - : Ein String, der eine benutzerfreundliche Kennung für das Benutzerkonto des Benutzers bereitstellt, um dabei zu helfen, zwischen verschiedenen Konten mit ähnlichen `displayName`s zu unterscheiden. Dies könnte eine E-Mail-Adresse (z.B. `"elaina.sanchez@example.com"`), Telefonnummer (z.B. `"+12345678901"`), oder eine andere Art von Benutzerkonto-Kennung (z.B. `"ElainaSanchez667"`) sein.

## Beispiele

### Erstellen eines öffentlichen Schlüssel-Anmeldedatums

Dieses Beispiel erstellt ein `PublicKeyCredentialCreationOptions`, indem nur die erforderlichen Eigenschaften angegeben und die Standards für den Rest verwendet werden.

Dann wird das Objekt in `navigator.credentials.create()` übergeben, um ein neues öffentliches Schlüssel-Anmeldedatum zu erstellen.

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

Ein erfolgreicher `create()`-Aufruf gibt ein Versprechen zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz auflöst, die ein öffentliches Schlüssel-Anmeldedatum repräsentiert, das später verwendet werden kann, um einen Benutzer über einen WebAuthn [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authentifikatordaten, öffentlicher Schlüssel, Transportmechanismen und mehr.

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

Einige dieser Daten müssen auf dem Server für zukünftige Authentifizierungsvorgänge gegen dieses Anmeldedatum gespeichert werden — zum Beispiel der öffentliche Schlüssel, der verwendete Algorithmus und die zulässigen Transporte.

Siehe [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
