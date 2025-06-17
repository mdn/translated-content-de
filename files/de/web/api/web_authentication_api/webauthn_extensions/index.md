---
title: Erweiterungen zur Web-Authentifizierung
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionen, die während der Erstellung von Anmeldedaten ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierungsoperationen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie Sie WebAuthn-Erweiterungen anfordern, Informationen über die Antworten auf diese Anfragen abrufen und welche Erweiterungen verfügbar sind – einschließlich Browser-Unterstützung sowie erwartete Eingaben und Ausgaben.

## Anleitung zur Nutzung von WebAuthn-Erweiterungen

Wenn Sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) aufrufen, kann das `publicKey`-Objekt, das erforderlich ist, um einen WebAuthn-Fluss zu starten, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, deren Nutzung die vertrauende Partei bei dem von Ihnen aufgerufenen Verfahren anfordern möchte.

Im Hintergrund werden die Eingaben vom Benutzeragenten und/oder dem Authentifikator verarbeitet.

Zum Beispiel könnten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Nutzung zweier Erweiterungen anfordern wollen:

1. Die `credProps`-Erweiterung. Vertrauende Parteien setzen `credProps`, um anzufordern, dass der Browser der vertrauenden Partei mitteilt, ob das Anmeldedatum nach der Registrierung resident/entdeckbar ist. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, müssen Sie auch `publicKey.extensions.credProps = true` festlegen, wenn der Browser Anmeldedaten erstellt, und je nach dem verwendeten Authentifikatortyp wird es entdeckbar sein (beispielsweise würde der FIDO2-Authenticator es typischerweise entdeckbar machen; der FIDO1/U2F-Sicherheitsschlüssel wäre nicht entdeckbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators anzufordern. Dies erfordert, dass `extensions.minPinLength` auf `true` gesetzt wird. `minPinLength` wird vom Authentifikator verarbeitet, während der Benutzeragent lediglich dazu dient, die Eingabedaten weiterzuleiten.

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

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Anmeldedatenerstellungsprozess zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse von Erweiterungsanfragen

Bei Erfolg wird der `create()`-Aufruf ein {{jsxref("Promise")}} zurückgeben, das sich mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt auflöst. Sobald die Erweiterungsverarbeitung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort kommuniziert (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie im obigen Codeausschnitt gezeigt, gibt es zwei verschiedene Stellen, an denen Sie Ihre Ausgabe für Erweiterungsergebnisse finden können:

1. Sie können die Ergebnisse der Client-(Benutzeragent-)Erweiterungsverarbeitung abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Dies gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag eine Erweiterungs-Identifikatorzeichenkette als Schlüssel und die Ausgabe der Erweiterungsverarbeitung durch den Client als Wert hat. In dem oben genannten Beispiel, wenn der Browser die `credProps`-Erweiterung unterstützt und sie korrekt verarbeitet wurde, würde das `myClientExtResults`-Map-Objekt einen Eintrag, `"credProps"`, mit dem Wert `{ rk: true }` enthalten. Dies würde bestätigen, dass die erstellten Anmeldedaten tatsächlich entdeckbar sind.

2. Sie können die Ergebnisse der Authenticator-Erweiterungsverarbeitung in den Authenticator-Daten für den Vorgang finden:

   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `create()`-Aufrufen zurückgegeben wurden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `get()`-Aufrufen zurückgegeben wurden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Eigenschaft gefunden werden.

   Authenticator-Daten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Authenticator-Erweiterungsergebnisdaten befinden sich immer in einem Abschnitt am Ende, als [CBOR-Karte](https://cbor.io/), die die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der kompletten Authenticator-Datenstruktur.

   Um auf unser Beispiel zurückzukommen, wenn die vertrauende Partei berechtigt ist, den `minPinLength`-Wert zu erhalten, würden die Authenticator-Daten eine Darstellung davon in der folgenden Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert und von mindestens einem Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID-Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer vertrauenden Partei, einen Registrierungsnachweis für eine zuvor mit der veralteten FIDO U2F JavaScript-API registrierten Anmeldedaten anzufordern, um den Aufwand der Neuregistrierung der Anmeldedaten zu vermeiden. Das `appid` ist das entsprechende Äquivalent zur `rpId` in WebAuthn (obwohl beachtet werden muss, dass `appid`s in Form von URLs sind, während `rpId`s in Form von Domains sind).

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appid`-Eigenschaft enthalten, deren Wert der Anwendungsbezeichner aus der veralteten API ist. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen auch die FIDO U2F-Credential-IDs in der `allowCredentials` Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appid: true` zurück, wenn das `appid` erfolgreich für die Bestätigung verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Ausschluss-Erweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer vertrauenden Partei, Authenticatoren auszuschließen, die speziell gespeicherte Anmeldedaten enthalten, die zuvor mit der veralteten FIDO U2F JavaScript API während der Registrierung registriert wurden. Dies ist erforderlich, da standardmäßig der Inhalt des `excludeCredentials`-Feldes als WebAuthn-Anmeldedaten angenommen wird. Bei Verwendung dieser Erweiterung können Sie veraltete FIDO U2F-Anmeldedaten in `excludeCredentials` aufnehmen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appidExclude`-Eigenschaft enthalten, deren Wert der Bezeichner der vertrauenden Partei ist, die anfordert, Authenticatoren durch veraltete FIDO U2F-Anmeldedaten auszuschließen. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Sie können dann FIDO U2F-Anmeldedaten in der `excludeCredentials` Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appidExclude: true` zurück, wenn die Erweiterung tätig wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential-Eigenschaften-Erweiterung (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Anmeldedatum anzufordern. Dies ist derzeit nur dann nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob das erstellte Anmeldedatum entdeckbar ist.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credProps`-Eigenschaft mit dem Wert `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was darauf hinweist, dass ein wohnhafter Schlüssel erforderlich ist.

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### Ausgabe

Gibt das Folgende zurück, wenn die registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) ein clientseitig entdeckbares Anmeldedatum ist:

```js
({
  credProps: {
    rk: true,
  },
});
```

Wenn `rk` in der Ausgabe auf `false` gesetzt ist, handelt es sich um ein serverseitiges Anmeldedatum. Wenn `rk` in der Ausgabe nicht vorhanden ist, ist es nicht bekannt, ob das Anmeldedatum clientseitig entdeckbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Anmeldedatenschutz (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer vertrauenden Partei, eine minimale Anmeldeschutzrichtlinie bei der Erstellung einer Anmeldedatum festzulegen.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credentialProtectionPolicy`-Eigenschaft enthalten, die das Schutzniveau des zu erstellenden Anmeldedatums angibt, und eine boolesche `enforceCredentialProtectionPolicy`-Eigenschaft, die angibt, ob der `create()`-Aufruf fehlschlagen soll, anstatt ein Anmeldedatum zu erstellen, das nicht der angegebenen Richtlinie entspricht:

```js
({
  extensions: {
    credentialProtectionPolicy: "userVerificationOptional",
    enforceCredentialProtectionPolicy: true,
  },
});
```

Die verfügbaren `credentialProtectionPolicy`-Werte lauten wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Benutzerüberprüfung ist optional. Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerüberprüfung ist nur dann optional, wenn das Anmeldedatum entdeckbar ist (d.h. es ist clientseitig entdeckbar). Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerüberprüfung ist immer erforderlich. Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` anfordern, abhängig vom Typ der Anforderung:
>
> - Chromium wird ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` anfordern, wenn beim Erstellen eines Anmeldedatums `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird als gleichbedeutend mit erforderlich betrachtet.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht ausreicht, um die Präsenz eines entdeckbaren Anmeldedatums für eine bestimmte `rpId` abzufragen.
> - Zusätzlich wird, wenn `residentKey` `required` und `userVerification` bevorzugt ist, das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels eine Anmeldung bei einer Website, die keine Benutzerüberprüfung benötigt, nicht ermöglicht. (Dies ist kein vollständiger Schutz; Websites sollten weiterhin sorgfältig die Sicherheit ihrer Benutzer in Betracht ziehen.)
> - Wenn die Website ein explizites `credProtect`-Niveau anfordert, wird dies die Standardeinstellungen überschreiben. Diese Standardeinstellungen bewirken niemals, dass das Schutzniveau niedriger als der Standard des Sicherheitsschlüssels ist, wenn dieser höher ist.
>
> Angenommen, der Wert von `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall schlägt der `create()`-Aufruf fehl, wenn die Richtlinie nicht eingehalten werden kann (beispielsweise erfordert sie eine Benutzerüberprüfung, aber der Authenticator unterstützt keine Benutzerüberprüfung). Wenn er `false` ist, wird das System den besten Versuch unternehmen, ein Anmeldedatum zu erstellen, das der Richtlinie entspricht, aber dennoch eines erstellen, das so nah wie möglich daran konform ist, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, enthalten die Authenticator-Daten eine Darstellung des `credProtect`-Werts, der die festgelegte Richtlinie in der folgenden Form darstellt:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large Blob Storage-Erweiterung (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer vertrauenden Partei, Blobs zu speichern, die mit einem Anmeldedatum auf dem Authenticator verknüpft sind — zum Beispiel könnte er Zertifikate direkt speichern wollen, anstatt einen zentralen Authentifizierungsdienst zu betreiben.

#### Eingabe

Während eines `create()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit der folgenden Objektstruktur enthalten:

```js
({
  extensions: {
    largeBlob: {
      support: "required",
    },
  },
});
```

Der Wert der `support`-Eigenschaft ist eine Zeichenkette, die eine der folgenden sein kann:

- `"preferred"`: Das Anmeldedatum wird bei einem Authenticator erstellt, der Blobs speichern kann, wenn möglich, aber es wird dennoch eines erstellt, falls nicht. Die ausgegebene 'supported'-Eigenschaft gibt die Fähigkeit des Authenticators zur Speicherung von Blobs an.
- `"required"`: Das Anmeldedatum wird mit einem Authenticator erstellt, um Blobs zu speichern. Der `create()`-Aufruf schlägt fehl, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit entweder einer `read`- oder `write`-Untereigenschaft enthalten (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist ein Boolescher Wert. Ein Wert von `true` zeigt an, dass die vertrauende Partei ein zuvor geschriebenes Blob abrufen möchte, das mit dem bestätigten Anmeldedatum verknüpft ist:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die `write`-Eigenschaft nimmt als Wert einen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, der ein Blob darstellt, das die vertrauende Partei zusammen mit einem bestehenden Anmeldedatum speichern möchte:

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
> Damit eine Schreib-Authentifizierungsoperation erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das das Anmeldedatum repräsentiert, neben dem das Blob gespeichert werden soll.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn das registrierte Anmeldedatum in der Lage ist, Blobs zu speichern:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Leseaufruf macht das Blob in der Erweiterungsausgabe als {{jsxref("ArrayBuffer")}} verfügbar, wenn er erfolgreich ist:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Wenn er nicht erfolgreich ist, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreibaufruf zeigt, ob der Schreibvorgang mit einem `written`-Booleschen Wert in der Erweiterungsausgabe erfolgreich war. Ein `true`-Wert bedeutet, dass es erfolgreich in den zugehörigen Authenticator geschrieben wurde, und `false` bedeutet, dass es nicht erfolgreich war.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Mindest-PIN-Länge-Erweiterung (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authenticators anzufordern.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `minPinLength`-Eigenschaft mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### Ausgabe

Wenn die vertrauende Partei berechtigt ist, den `minPinLength`-Wert zu erhalten (wenn ihre `rpId` auf der autorisierten vertrauenden Parteienliste des Authenticators vorhanden ist), werden die Authenticator-Daten eine Darstellung davon in der folgenden Form enthalten:

```js
({ minPinLength: uint });
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert und es wird kein `"minPinLength"`-Ausgabewert bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Sicherheitszahlung Bestätigung](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer vertrauenden Partei, die Erstellung eines WebAuthn-Anmeldedatums anzufordern, das – sowohl von der vertrauenden Partei als auch anderen Parteien – mit Secure Payment Confirmation genutzt werden kann; siehe [Verwendung der sicheren Zahlung Bestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs-Wörterbuch](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert

- `isPayment`
  - : Ein Boolescher Wert, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [vertrauende Parteien-Id](https://w3c.github.io/webauthn/#relying-party) der Anmeldedaten, die verwendet werden. Nur während der Authentifizierung verwendet; nicht bei der Registrierung.
- `topOrigin`
  - : Der Ursprung des Top-Level-Frames. Nur während der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeName`
  - : Der, wenn vorhanden, dem Benutzer angezeigte Zahlungsnehmername. Nur während der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeOrigin`
  - : Der, wenn vorhanden, dem Benutzer angezeigte Zahlungsnehmerursprung. Nur während der Authentifizierung verwendet; nicht bei der Registrierung.
- `total`
  - : Der dem Benutzer angezeigte Transaktionsbetrag. Nur während der Authentifizierung verwendet; nicht bei der Registrierung. Der gesamte Betrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die dem Benutzer angezeigten Instrumentendetails. Nur während der Authentifizierung verwendet; nicht bei der Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

### `prf`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Pseudozufallsfunktion-Erweiterung (prf)](https://w3c.github.io/webauthn/#prf-extension)

Ermöglicht es einer vertrauenden Partei, Ausgaben für entweder eine oder zwei Eingaben von einer pseudozufälligen Funktion (PRF), die mit einem Anmeldedatum verknüpft ist, zu erhalten.
Eine PRF ist effektiv ein [Zufallsorakel](https://en.wikipedia.org/wiki/Random_oracle) — eine Funktion, die für jede gegebene Eingabe einen Zufallswert zurückgibt, jedoch immer denselben Wert für dieselbe Eingabe zurückgeben wird.

Die Fähigkeit, eine zufällige Zahl zu generieren, die mit einem Benutzerdatum verknüpft ist, ist in verschiedenen kryptographischen Anwendungen nützlich.
Zum Beispiel kann sie verwendet werden, um einen symmetrischen Schlüssel zu generieren, mit dem sensible Daten verschlüsselt werden können, und der nur von einem Benutzer entschlüsselt werden kann, der den Samen und den zugehörigen Authenticator hat.
Ebenso könnte sie verwendet werden, um einen symmetrischen Schlüssel für die End-zu-End-Verschlüsselung zu erstellen, der mit einem Serverwert gesät ist und für dieses Anmeldedatum sowie diese Sitzung einzigartig ist.

Die Erweiterung ermöglicht es Ihnen, Pufferwerte vom Typ {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} an den Authenticator zu übergeben, der das Ergebnis der Bewertung des Werts mit dem PRF der zugehörigen Anmeldedaten zurückgibt.
Dies kann in einer Bestätigung, als Teil des Authentifizierungsworkflows, durchgeführt werden - durch Angabe des Anmeldedatums oder der Anmeldedaten, für die das Ergebnis ausgewertet werden soll.
Es kann auch bei der Erstellung eines Anmeldedatums durchgeführt werden; jedoch unterstützen weniger Authenticatoren die Generierung von Ausgaben bei der Erstellung von Anmeldedaten.

#### Eingabe

Während eines `create()`-Aufrufs kann die `extensions`-Eigenschaft des `publicKey` eine `prf`-Eigenschaft enthalten, die ein `eval`-Objekt mit der Eigenschaft `first` und optionaler Eigenschaft `second` hat.
Diese Eigenschaften sind entweder {{jsxref("ArrayBuffer")}} oder {{jsxref("TypedArray")}} Instanzen, die die Werte enthalten, die dem PRF für das Anmeldedatum übergeben werden sollen.

Zum Beispiel kann die folgende Definition verwendet werden, um bei der Erstellung eines neuen Anmeldedatums, einen neuen symmetrischen Schlüssel aus einem serverbereitgestellten Geheimnis zu erstellen.

```js
({
  extensions: {
    prf: {
      eval: { first: new TextEncoder().encode("Salt for new symmetric key") },
    },
  },
});
```

Die optionale `second`-Eigenschaft kann verwendet werden, wenn zwei Zufallswerte für ein Anmeldedatum erstellt werden müssen, wie in einem Workflow, bei dem der Verschlüsselungsschlüssel bei jeder Sitzung rotiert wird.
Ein Beispiel für einen solchen Workflow ist, dass Sie in jeder Sitzung zwei Salze übergeben: Das `first`-Salz gibt einen Wert zurück, der verwendet werden kann, um die Daten der vorherigen Sitzung zu entschlüsseln, während das `second`-Salz einen Wert zurückgibt, der verwendet werden kann, um die Daten dieser Sitzung zu verschlüsseln.
In nachfolgenden Sitzungen wird das `second`-Salz auf die Position des `first`-Salzes verschoben, sodass die Lebensdauer, während der ein bestimmtes Salz sinnvoll kompromittiert werden kann, begrenzt ist.

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

Der `create()`-Aufruf kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - Der `evalByCredential` Schlüssel ist im `eval`-Objekt vorhanden.

Bitte beachten Sie, dass die Bewertung eines PRF bei der Erstellung eines Anmeldedatums möglicherweise nicht unterstützt wird und dies in der Ausgabe gemeldet wird.
Sie können dennoch versuchen, das PRF in einem Assertion wie unten gezeigt auszuwerten.

Während eines `get()`-Aufrufs kann die `extensions`-Eigenschaft des `publicKey` eine `prf`-Eigenschaft mit der `evalByCredential`-Untereigenschaft enthalten.
Dies ist ein Objekt, das {{Glossary("Base64", "Base64")}} URL-kodierte Anmeldedaten-IDs zu Bewertungsobjekten mit der gleichen Form wie oben gezeigt zuordnet.
Mit anderen Worten, dies ermöglicht es Ihnen, Werte zur Bewertung für verschiedene Anmeldedaten anzugeben.

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

Der `get()`-Aufruf kann mit den folgenden Ausnahmen abgelehnt werden:

- `NotSupportedError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wenn `eval` das `prf`-Objekt ist oder wenn `allowCredentials` leer ist, während `evalByCredential` nicht leer ist.
- `SyntaxError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Jeder Schlüssel in `evalByCredential` ist die leere Zeichenkette oder ist keine gültige Base64 URL-Kodierung oder stimmt nicht mit der ID eines Elements mit [`publicKey.allowCredentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#allowcredentials) überein.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierten Anmeldedaten unterstützen, den PRF beim Erstellen von Anmeldedaten zu verwenden.

```js
({
  prf: {
    enabled: true, // PRF can be used when creating credentials.
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Die `enabled`-Eigenschaft gibt an, ob der PRF bei der Erstellung von Anmeldedaten verwendet werden kann.
Die `first`- und `second`-Eigenschaften enthalten das Ergebnis der Bewertung von `first` und `second` auf der Eingabe, und `second` wird weggelassen, wenn die entsprechende Eingabe nicht angegeben wurde.

Wenn der Authenticator die Verwendung des PRF bei der Erstellung nicht unterstützt, sieht die Ausgabe bei `create()` folgendermaßen aus:

```js
({
  prf: {
    enabled: false, // PRF cannot be used when creating credentials.
  },
});
```

Ein `get()` liefert dasselbe `prf`-Objekt mit derselben Struktur wie `create()`, mit Ausnahme, dass der `enabled`-Schlüssel weggelassen wird.
Das Objekt enthält PRF-Werte, die den Eingaben für das Anmeldedatum entsprechen, das vom Benutzer ausgewählt wurde.

```js
({
  prf: {
    results: { first: outputBuffer1, second: outputBuffer2 },
  },
});
```

Bitte beachten Sie, dass `enabled` nur in einer Ausgabe für `create()` vorhanden ist und angibt, ob PRF vom Authenticator unterstützt wird, wenn ein Anmeldedatum erstellt wird.
Wenn der Authenticator PRF überhaupt nicht unterstützt, sieht das Ergebnis für den `get()`-Aufruf so aus:

```js
({
  prf: {},
});
```

## Spezifikationen

Es gibt eine Reihe von Stellen, an denen WebAuthn-Erweiterungen spezifiziert sind. IANAs [WebAuthn Erweiterungsbezeichner](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Verzeichnis aller Erweiterungen, aber beachten Sie, dass einige veraltet sein können.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt – Erweiterungen, die während der Anmeldung-Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen sind während beider Operationen verwendbar.

{{Compat}}
