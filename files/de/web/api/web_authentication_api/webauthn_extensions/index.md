---
title: Web Authentication-Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalität, die während der Erstellung von Anmeldedaten ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder bei Authentifizierungsvorgängen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden kann. Dieser Artikel erläutert, wie Sie WebAuthn-Erweiterungen anfordern, Informationen über die Antworten auf diese Anfragen abrufen und welche Erweiterungen verfügbar sind – einschließlich Browser-Unterstützung sowie erwarteter Eingaben und Ausgaben.

## Verwendung von WebAuthn-Erweiterungen

Beim Aufrufen von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann der zum Starten eines WebAuthn-Ablaufs erforderliche Objektparameter `publicKey` eine Eigenschaft `extensions` enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, deren Verwendung die relying party in der aufgerufenen Methode anfordern möchte.

Im Hintergrund werden die Eingaben durch den User Agent und/oder den Authenticator verarbeitet.

In einem `publicKey`-Objekt für einen `create()`-Aufruf möchten wir beispielsweise möglicherweise die Verwendung von zwei Erweiterungen anfordern:

1. Die Erweiterung `credProps`. Relying parties setzen `credProps`, um anzufordern, dass der Browser ihnen mitteilt, ob die Anmeldedaten nach der Registrierung resident/discoverable sind. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, müssen Sie außerdem `publicKey.extensions.credProps = true` setzen. Wenn der Browser Anmeldedaten erstellt, sind diese abhängig vom verwendeten Authenticator-Typ discoverable (beispielsweise erstellt ein FIDO2-Authenticator sie typischerweise als discoverable; ein FIDO1/U2F-Sicherheitsschlüssel erstellt sie als nicht discoverable). `credProps` wird nur durch den User Agent verarbeitet.
2. Die Erweiterung `minPinLength` ermöglicht es relying parties, die minimale PIN-Länge des Authenticators anzufordern. Hierfür muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird durch den Authenticator verarbeitet, wobei der User Agent lediglich die Eingabedaten an ihn weiterleitet.

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241 /* … */]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe",
  },
  pubKeyCredParams: [{ type: "public-key", alg: -7 }],
  authenticatorSelection: {
    residentKey: "preferred",
  },
  extensions: {
    credProps: true,
    minPinLength: true,
  },
};
```

Anschließend können wir das Objekt `publicKey` an einen `create()`-Aufruf übergeben, um den Ablauf zur Erstellung der Anmeldedaten zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Ergebnisse von Erweiterungsanfragen abrufen

Bei Erfolg gibt der Aufruf `create()` ein {{jsxref("Promise")}} zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt erfüllt wird. Sobald die Verarbeitung der Erweiterung abgeschlossen ist, werden die Verarbeitungsergebnisse in der Antwort übermittelt (jedoch nicht in allen Fällen – Erweiterungen können keine Ausgabe haben).

```js
navigator.credentials
  .create({ publicKey })
  .then((publicKeyCred) => {
    const myClientExtResults = publicKeyCred.getClientExtensionResults();
    // myClientExtResults will contain the output of processing
    // the "credProps" extension

    const authData = publicKeyCred.response.getAuthenticatorData();
    // authData will contain authenticator data, which will include
    // authenticator extension processing results, i.e., minPinLength
  })
  .catch((err) => {
    console.error(err);
  });
```

Wie der obige Codeausschnitt zeigt, gibt es zwei verschiedene Stellen, an denen Sie die Ergebnisse Ihrer Ausgabeerweiterung finden können:

1. Sie können die Ergebnisse der Verarbeitung von Client-Erweiterungen (User Agent) durch Aufrufen der Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) ermitteln. Diese gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag die Kennzeichnerzeichenfolge einer Erweiterung als Schlüssel und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert enthält. Im obigen Beispiel würde das Map-Objekt `myClientExtResults` einen Eintrag, `"credProps"`, mit dem Wert `{ rk: true }` enthalten, wenn der Browser die Erweiterung `credProps` unterstützte und sie korrekt verarbeitet wurde. Dies würde bestätigen, dass die erstellten Anmeldedaten tatsächlich discoverable sind.

2. Sie können die Ergebnisse der Verarbeitung von Authenticator-Erweiterungen in den Authenticator-Daten des Vorgangs finden:
   - Bei `PublicKeyCredential`s, die von erfolgreichen `create()`-Aufrufen zurückgegeben werden, können diese über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Bei `PublicKeyCredential`s, die von erfolgreichen `get()`-Aufrufen zurückgegeben werden, finden Sie diese in der Eigenschaft [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData).

   Authenticator-Daten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Ergebnisdaten der Authenticator-Erweiterung befinden sich immer in einem Abschnitt am Ende, als [CBOR-Map](https://cbor.io/), die die Ergebnisse darstellt. Eine ausführliche Beschreibung der vollständigen Authenticator-Datenstruktur finden Sie unter [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData).

   Zurück zu unserem Beispiel: Wenn die relying party berechtigt ist, den Wert `minPinLength` zu erhalten, enthalten die Authenticator-Daten eine Darstellung davon in folgender Form: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die folgenden Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns dafür entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert sind und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Verwendbar bei: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet durch: User Agent
- Spezifikation: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht einer relying party, eine Assertion für Anmeldedaten anzufordern, die zuvor mithilfe der veralteten FIDO-U2F-JavaScript-API registriert wurden, wodurch eine erneute Registrierung der Anmeldedaten vermieden wird. Die `appid` ist das Äquivalent dieser API zu `rpId` in WebAuthn (beachten Sie jedoch, dass `appid`s die Form von URLs haben, während `rpId`s die Form von Domains haben).

#### Eingabe

Die Eigenschaft `extensions` von `publicKey` muss eine Eigenschaft `appid` enthalten, deren Wert der in der veralteten API verwendete Anwendungskennzeichner ist. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen außerdem die FIDO-U2F-Anmeldedaten-IDs in der Eigenschaft `allowCredentials` von `publicKey` aufführen, zum Beispiel:

```js
({
  allowCredentials: [
    {
      id: arrayBuffer, // needs to contain decoded binary form of id
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### Ausgabe

Gibt `appid: true` aus, wenn die `appid` erfolgreich für die Assertion verwendet wurde, andernfalls `appid: false`.

### `appidExclude`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet durch: User Agent
- Spezifikation: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht einer relying party, während der Registrierung Authenticators auszuschließen, die bestimmte Anmeldedaten enthalten, welche zuvor mithilfe der veralteten FIDO-U2F-JavaScript-API registriert wurden. Dies ist erforderlich, da der Inhalt des Felds `excludeCredentials` standardmäßig als WebAuthn-Anmeldedaten angenommen wird. Bei Verwendung dieser Erweiterung können Sie veraltete FIDO-U2F-Anmeldedaten in `excludeCredentials` einschließen, und sie werden als solche erkannt.

#### Eingabe

Die Eigenschaft `extensions` von `publicKey` muss eine Eigenschaft `appidExclude` enthalten, deren Wert der Kennzeichner der relying party ist, die Authenticators anhand veralteter FIDO-U2F-Anmeldedaten ausschließen möchte. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Anschließend können Sie FIDO-U2F-Anmeldedaten in der Eigenschaft `excludeCredentials` von `publicKey` aufführen, zum Beispiel:

```js
({
  excludeCredentials: [
    {
      id: arrayBuffer, // needs to contain decoded binary form of id
      transports: ["nfc", "usb"],
      type: "public-key",
    },
  ],
});
```

#### Ausgabe

Gibt `appidExclude: true` aus, wenn die Erweiterung ausgeführt wurde, andernfalls `appidExclude: false`.

### `credProps`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet durch: User Agent
- Spezifikation: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht einer relying party, zusätzliche Informationen/Eigenschaften über die erstellten Anmeldedaten anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob die erstellten Anmeldedaten discoverable sind.

#### Eingabe

Die Eigenschaft `extensions` von `publicKey` muss eine Eigenschaft `credProps` mit dem Wert `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen außerdem `authenticatorSelection.requireResidentKey` auf `true` setzen, was angibt, dass ein resident key erforderlich ist.

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### Ausgabe

Gibt Folgendes aus, wenn die registrierten [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Anmeldedaten clientseitig discoverable sind:

```js
({
  credProps: {
    rk: true,
  },
});
```

Wenn `rk` in der Ausgabe auf `false` gesetzt ist, handelt es sich bei den Anmeldedaten um serverseitige Anmeldedaten. Wenn `rk` in der Ausgabe nicht vorhanden ist, ist nicht bekannt, ob die Anmeldedaten clientseitig discoverable oder serverseitig sind.

### `credProtect`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet durch: Authenticator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht einer relying party, beim Erstellen von Anmeldedaten eine minimale Schutzrichtlinie für Anmeldedaten festzulegen.

#### Eingabe

Die Eigenschaft `extensions` von `publicKey` muss eine Eigenschaft `credentialProtectionPolicy` enthalten, die die Schutzstufe der zu erstellenden Anmeldedaten festlegt, sowie eine boolesche Eigenschaft `enforceCredentialProtectionPolicy`, die angibt, ob der Aufruf `create()` fehlschlagen soll, anstatt Anmeldedaten zu erstellen, die nicht der angegebenen Richtlinie entsprechen:

```js
({
  extensions: {
    credentialProtectionPolicy: "userVerificationOptional",
    enforceCredentialProtectionPolicy: true,
  },
});
```

Die verfügbaren Werte für `credentialProtectionPolicy` sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Die Benutzerverifizierung ist optional. Der äquivalente Wert `credProtect`, der zur Verarbeitung an den Authenticator gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Die Benutzerverifizierung ist nur optional, wenn die Anmeldedaten discoverable sind (d.h. clientseitig discoverable). Der äquivalente Wert `credProtect`, der zur Verarbeitung an den Authenticator gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Die Benutzerverifizierung ist immer erforderlich. Der äquivalente Wert `credProtect`, der zur Verarbeitung an den Authenticator gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium verwendet abhängig von der Art der Anfrage standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired`:
>
> - Chromium fordert beim Erstellen von Anmeldedaten die Schutzstufe `userVerificationOptionalWithCredentialIDList` an, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird wie `required` behandelt.) Dadurch wird sichergestellt, dass der bloße physische Besitz eines Sicherheitsschlüssels nicht ermöglicht, das Vorhandensein von discoverable Anmeldedaten für eine bestimmte `rpId` abzufragen.
> - Wenn `residentKey` auf `required` gesetzt und `userVerification` bevorzugt wird, wird die Schutzstufe außerdem auf `userVerificationRequired` erhöht. Dadurch wird sichergestellt, dass der physische Besitz eines Sicherheitsschlüssels keine Anmeldung bei einer Website ermöglicht, die keine Benutzerverifizierung erfordert. (Dies ist kein vollständiger Schutz; Websites sollten die Sicherheit ihrer Benutzer weiterhin sorgfältig berücksichtigen.)
> - Wenn die Website eine explizite Stufe für `credProtect` anfordert, überschreibt diese diese Standardwerte. Diese Standardwerte führen niemals dazu, dass die Schutzstufe niedriger ist als der Standardwert des Sicherheitsschlüssels, sofern dieser höher ist.
>
> Angenommen, der Wert von `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall schlägt der Aufruf `create()` fehl, wenn die Richtlinie nicht eingehalten werden kann (beispielsweise wenn sie eine Benutzerverifizierung erfordert, der Authenticator jedoch keine Benutzerverifizierung unterstützt). Wenn er `false` ist, unternimmt das System den bestmöglichen Versuch, Anmeldedaten zu erstellen, die der Richtlinie entsprechen, erstellt jedoch weiterhin Anmeldedaten, die ihr möglichst weitgehend entsprechen, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der Aufruf `create()` erfolgreich ist, enthalten die Authenticator-Daten eine Darstellung des Werts `credProtect`, der die festgelegte Richtlinie repräsentiert, in folgender Form:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet durch: User Agent
- Spezifikation: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht einer relying party, mit Anmeldedaten verknüpfte Blobs auf dem Authenticator zu speichern – beispielsweise kann sie Zertifikate direkt speichern wollen, anstatt einen zentralisierten Authentifizierungsdienst zu betreiben.

#### Eingabe

Während eines `create()`-Aufrufs muss die Eigenschaft `extensions` von `publicKey` eine Eigenschaft `largeBlob` mit der folgenden Objektstruktur enthalten:

```js
({
  extensions: {
    largeBlob: {
      support: "required",
    },
  },
});
```

Der Wert der Eigenschaft `support` ist eine Zeichenfolge, die einer der folgenden Werte sein kann:

- `"preferred"`: Die Anmeldedaten werden nach Möglichkeit mit einem Authenticator erstellt, der Blobs speichern kann; falls dies nicht möglich ist, werden sie dennoch erstellt. Die Eigenschaft `supported` der Ausgabe meldet die Fähigkeit des Authenticators, Blobs zu speichern.
- `"required"`: Die Anmeldedaten werden mit einem Authenticator zum Speichern von Blobs erstellt. Der Aufruf `create()` schlägt fehl, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die Eigenschaft `extensions` von `publicKey` eine Eigenschaft `largeBlob` mit einer von zwei Untereigenschaften enthalten – `read` oder `write` (`get()` schlägt fehl, wenn beide vorhanden sind):

Die Eigenschaft `read` ist ein boolescher Wert. Ein Wert von `true` gibt an, dass die relying party einen zuvor geschriebenen Blob abrufen möchte, der mit den behaupteten Anmeldedaten verknüpft ist:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die Eigenschaft `write` akzeptiert als Wert ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, das einen Blob darstellt, den die relying party zusammen mit vorhandenen Anmeldedaten speichern möchte:

```js
({
  extensions: {
    largeBlob: {
      write: arrayBuffer,
    },
  },
});
```

> [!NOTE]
> Damit ein schreibender Authentifizierungsvorgang erfolgreich ist, darf `publicKey.allowCredentials` nur ein einzelnes Element enthalten, das die Anmeldedaten darstellt, zusammen mit denen Sie den Blob speichern möchten.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierten Anmeldedaten Blobs speichern können:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Leseaufruf stellt den Blob bei Erfolg als {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe bereit:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Bei einem Fehlschlag wird das Objekt `largeBlob` zurückgegeben, `blob` ist jedoch nicht vorhanden.

Ein `get()`-Schreibaufruf gibt mithilfe eines booleschen Werts `written` in der Erweiterungsausgabe an, ob der Schreibvorgang erfolgreich war. Ein Wert von `true` bedeutet, dass der Wert erfolgreich in den zugehörigen Authenticator geschrieben wurde, und `false` bedeutet, dass der Vorgang nicht erfolgreich war.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet durch: Authenticator
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht relying parties, die minimale PIN-Länge des Authenticators anzufordern.

#### Eingabe

Die Eigenschaft `extensions` von `publicKey` muss eine Eigenschaft `minPinLength` mit dem Wert `true` enthalten:

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### Ausgabe

Wenn die relying party berechtigt ist, den Wert `minPinLength` zu erhalten (wenn ihre `rpId` in der Liste autorisierter relying parties des Authenticators vorhanden ist), enthalten die Authenticator-Daten eine Darstellung davon in folgender Form:

```js
({ minPinLength: uint });
```

Wenn die relying party nicht berechtigt ist, wird die Erweiterung ignoriert und kein Ausgabewert `"minPinLength"` bereitgestellt.

### `payment`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet durch: User Agent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht einer relying party, die Erstellung von WebAuthn-Anmeldedaten anzufordern, die – sowohl von der Relying Party als auch von anderen Parteien – mit Secure Payment Confirmation verwendet werden können; siehe [Verwendung von Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die Erweiterung `payment` sind im [Wörterbuch AuthenticationExtensionsPaymentInputs](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert.

- `isPayment`
  - : Ein boolescher Wert, der angibt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die ID der [Relying Party](https://w3c.github.io/webauthn/#relying-party) der verwendeten Anmeldedaten. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung.
- `topOrigin`
  - : Der Ursprung des Frames der obersten Ebene. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, sofern vorhanden, der dem Benutzer angezeigt wurde. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, sofern vorhanden, der dem Benutzer angezeigt wurde. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung.
- `total`
  - : Der Transaktionsbetrag, der dem Benutzer angezeigt wurde. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung. Der Gesamtbetrag hat den Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die Instrumentdetails, die dem Benutzer angezeigt wurden. Wird nur zum Zeitpunkt der Authentifizierung verwendet, nicht bei der Registrierung. Das Instrument hat den Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

### `prf`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet durch: User Agent
- Spezifikation: [Pseudo-random function extension (prf)](https://w3c.github.io/webauthn/#prf-extension)

Ermöglicht einer relying party, Ausgaben für eine oder zwei Eingaben einer pseudozufälligen Funktion (PRF) zu erhalten, die mit Anmeldedaten verknüpft ist.
Eine PRF ist im Wesentlichen ein [Random Oracle](https://en.wikipedia.org/wiki/Random_oracle) – eine Funktion, die für jede gegebene Eingabe einen zufälligen Wert zurückgibt, aber für dieselbe Eingabe immer denselben Wert zurückgibt.

Die Möglichkeit, eine mit den Anmeldedaten eines Benutzers verknüpfte Zufallszahl zu erzeugen, ist in einer Reihe kryptografischer Anwendungen nützlich.
Sie kann beispielsweise verwendet werden, um einen symmetrischen Schlüssel für die Verschlüsselung sensibler Daten zu erzeugen, die nur von einem Benutzer entschlüsselt werden können, der über den Seed und den zugehörigen Authenticator verfügt.
Ebenso könnte sie verwendet werden, um einen symmetrischen Schlüssel für Ende-zu-Ende-Verschlüsselung zu erstellen, der mit einem Wert vom Server initialisiert wird und für diese Anmeldedaten und Sitzung eindeutig ist.

Die Erweiterung ermöglicht Ihnen, Pufferwerte vom Typ {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} an den Authenticator zu übergeben, der das Ergebnis der Auswertung des Werts mit der PRF der zugehörigen Anmeldedaten zurückgibt.
Dies kann in einer Assertion als Teil des Authentifizierungsablaufs erfolgen, wobei die Anmeldedaten oder Anmeldedaten angegeben werden, für die das Ergebnis ausgewertet werden soll.
Dies kann auch beim Erstellen von Anmeldedaten erfolgen; allerdings unterstützen weniger Authenticators die Erzeugung von Ausgaben beim Erstellen von Anmeldedaten.

#### Eingabe

Während eines `create()`-Aufrufs kann die Eigenschaft `extensions` von `publicKey` eine Eigenschaft `prf` enthalten, die ein Objekt `eval` mit der Eigenschaft `first` und der optionalen Eigenschaft `second` enthält.
Bei diesen Eigenschaften handelt es sich entweder um Instanzen von {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}}, die die Werte enthalten, die für die Anmeldedaten an die PRF übergeben werden sollen.

Die folgende Definition könnte beispielsweise beim Erstellen neuer Anmeldedaten verwendet werden, um aus einem vom Server bereitgestellten Geheimnis einen neuen symmetrischen Schlüssel zu erstellen.

```js
({
  extensions: {
    prf: {
      eval: { first: new TextEncoder().encode("Salt for new symmetric key") },
    },
  },
});
```

Die optionale Eigenschaft `second` kann verwendet werden, wenn zwei Zufallswerte für Anmeldedaten erstellt werden müssen, beispielsweise in einem Ablauf, bei dem der Verschlüsselungsschlüssel bei jeder Sitzung rotiert wird.
Als Beispiel für einen solchen Ablauf übergeben Sie in jeder Sitzung zwei Salze: Das Salz `first` gibt einen Wert zurück, mit dem die Daten der vorherigen Sitzung entschlüsselt werden können, während das Salz `second` einen Wert zurückgibt, mit dem die Daten dieser Sitzung verschlüsselt werden können.
In nachfolgenden Sitzungen wird das Salz `second` an die Position des Salzes `first` verschoben, sodass die Zeitspanne begrenzt ist, in der ein bestimmtes Salz sinnvoll kompromittiert werden kann.

```js
({
  extensions: {
    prf: {
      eval: {
        first: currentSessionKey, // salt for current session
        second: nextSessionKey, // salt for next session
      },
    },
  },
});
```

Der Aufruf `create()` kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - Der Schlüssel `evalByCredential` ist im Objekt `eval` vorhanden.

Beachten Sie, dass die Auswertung einer PRF beim Erstellen von Anmeldedaten möglicherweise nicht unterstützt wird; dies wird in der Ausgabe gemeldet.
Sie können dennoch versuchen, die PRF in einer Assertion auszuwerten, wie unten gezeigt.

Während eines `get()`-Aufrufs kann die Eigenschaft `extensions` von `publicKey` eine Eigenschaft `prf` mit der Untereigenschaft `evalByCredential` enthalten.
Dies ist ein Objekt, das {{Glossary("Base64", "Base64")}}-URL-kodierte Anmeldedaten-IDs Auswertungsobjekten zuordnet, die dieselbe oben dargestellte Form haben.
Mit anderen Worten ermöglicht dies Ihnen, Werte zur Auswertung für verschiedene Anmeldedaten anzugeben.

```js
({
  extensions: {
    prf: {
      evalByCredential: {
        "<credentialId>": { first: bufferOne, second: bufferTwo },
        // …
        "<credentialId2>": {
          first: anotherBufferOne,
          second: anotherBufferTwo,
        },
      },
    },
  },
});
```

Der Aufruf `get()` kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wenn `eval` das Objekt `prf` ist oder wenn `allowCredentials` leer ist, während `evalByCredential` nicht leer ist.
- `SyntaxError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Ein beliebiger Schlüssel in `evalByCredential` ist die leere Zeichenfolge oder keine gültige Base64-URL-Kodierung oder stimmt nicht mit der ID eines Elements in [`publicKey.allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) überein.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierten Anmeldedaten die Verwendung der PRF beim Erstellen von Anmeldedaten unterstützen.

```js
({
  prf: {
    enabled: true, // PRF can be used when creating credentials.
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Die Eigenschaft `enabled` gibt an, ob die PRF beim Erstellen von Anmeldedaten verwendet werden kann.
Die Eigenschaften `first` und `second` enthalten das Ergebnis der Auswertung von `first` beziehungsweise `second` für die Eingabe; `second` wird ausgelassen, wenn die entsprechende Eingabe nicht angegeben wurde.

Wenn der Authenticator die Verwendung der PRF bei der Erstellung nicht unterstützt, sieht die Ausgabe von `create()` folgendermaßen aus:

```js
({
  prf: {
    enabled: false, // PRF cannot be used when creating credentials.
  },
});
```

Ein `get()` gibt dasselbe Objekt `prf` mit derselben Struktur wie `create()` zurück, lässt jedoch den Schlüssel `enabled` aus.
Das Objekt enthält PRF-Werte, die den Eingaben für die Anmeldedaten entsprechen, welche vom Benutzer ausgewählt wurden.

```js
({
  prf: {
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Beachten Sie, dass `enabled` nur als Ausgabe für `create()` vorhanden ist und angibt, ob PRF vom Authenticator beim Erstellen von Anmeldedaten unterstützt wird.
Wenn der Authenticator PRF überhaupt nicht unterstützt, lautet das Ergebnis für den Aufruf `get()`:

```js
({
  prf: {},
});
```

## Spezifikationen

WebAuthn-Erweiterungen werden an mehreren Stellen spezifiziert. Die [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn#webauthn-extension-ids) der IANA stellen ein Register aller Erweiterungen bereit. Beachten Sie jedoch, dass einige veraltet sein können.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt – Erweiterungen, die bei der Registrierung von Anmeldedaten ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die bei der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen können bei beiden Vorgängen verwendet werden.

{{Compat}}
