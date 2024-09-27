---
title: Web Authentication-Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionen, die bei der Erstellung von Anmeldedaten ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierungsoperationen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie Sie WebAuthn-Erweiterungen anfordern, Informationen über die Antworten auf diese Anfragen abrufen und welche Erweiterungen verfügbar sind – einschließlich der Browser-Unterstützung und der erwarteten Eingaben und Ausgaben.

## Anleitung zur Verwendung von WebAuthn-Erweiterungen

Beim Aufrufen von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das erforderliche `publicKey`-Objektparameter, um einen WebAuthn-Ablauf zu initiieren, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, die die vertrauende Partei in der von Ihnen aufgerufenen Methode anfordern möchte.

Hinter den Kulissen werden die Eingaben vom Benutzeragenten und/oder dem Authentifikator verarbeitet.

Zum Beispiel könnten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Verwendung von zwei Erweiterungen anfordern:

1. Die `credProps`-Erweiterung. Vertrauende Parteien setzen `credProps`, um die Nutzung der Erweiterung durch den Browser mitzuteilen, ob das Anmeldedaten nach der Registrierung ansässig/entdeckbar ist. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, müssen Sie auch `publicKey.extensions.credProps = true` setzen, wenn der Browser ein Anmeldedaten erstellt, und je nach Art des verwendeten Authentifikators wird es entdeckbar sein (zum Beispiel typischerweise der FIDO2-Authentifikator; FIDO1/U2F-Sicherheitsschlüssel wäre nicht entdeckbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators anzufordern. Dies erfordert, dass `extensions.minPinLength` auf `true` gesetzt wird. `minPinLength` wird vom Authentifikator verarbeitet, wobei der Benutzeragent nur zur Weitergabe der Eingabedaten dient.

```js
const publicKey = {
  challenge: new Uint8Array([117, 61, 252, 231, 191, 241, ...]),
  rp: { id: "acme.com", name: "ACME Corporation" },
  user: {
    id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
    name: "jamiedoe",
    displayName: "Jamie Doe"
  },
  pubKeyCredParams: [ {type: "public-key", alg: -7} ],
  authenticatorSelection: {
    residentKey: "preferred"
  },
  extensions: {
    credProps: true,
    minPinLength: true
  }
}
```

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Anmeldedaten-Erstellungsprozess zu initiieren:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse von Erweiterungsanforderungen

Wenn erfolgreich, wird der `create()`-Aufruf ein {{jsxref("Promise")}} zurückgeben, das sich mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt auflöst. Sobald die Verarbeitung der Erweiterung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort mitgeteilt (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie das obige Codebeispiel zeigt, gibt es zwei verschiedene Orte, an denen Sie Ihre Ausgabenergebnisse von Erweiterungen finden können:

1. Sie können die Ergebnisse der Erweiterungsverarbeitung durch den Client (Benutzeragenten) abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Diese gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag eine Zeichenfolge mit dem Bezeichner der Erweiterung als Schlüssel ist und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert enthält. Im obigen Beispiel würde das `myClientExtResults` Karte-Objekt einen Eintrag, `"credProps"`, mit einem Wert von `{ rk: true }` enthalten, wenn der Browser die `credProps`-Erweiterung unterstützte und ordnungsgemäß verarbeitet wurde. Dies würde bestätigen, dass das erstellte Anmeldedaten tatsächlich entdeckbar ist.

2. Sie können die Ergebnisse der Erweiterungsverarbeitung durch den Authentifikator in den Authentifikatordaten für die Operation finden:

   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies durch einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `get()`-Aufrufen zurückgegeben werden, kann dies in der Eigenschaft [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) gefunden werden.

   Authentifikatordaten liegen in Form eines {{jsxref("ArrayBuffer")}} mit einer einheitlichen Struktur vor – siehe [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Daten der Authentifikator-Erweiterungsergebnisse befinden sich immer in einem Abschnitt am Ende, als eine [CBOR-Karte](https://cbor.io/), die die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der vollständigen Authentifikatordatenstruktur.

   Zurück zu unserem Beispiel: Wenn die vertrauende Partei berechtigt ist, den `minPinLength`-Wert zu erhalten, würden die Authentifikatordaten eine Darstellung davon in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen sind nicht vollständig und umfassen alle verfügbaren Erweiterungen. Wir haben uns entschieden, Erweiterungen zu dokumentieren, die unserer Kenntnis nach standardisiert und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer vertrauenden Partei, eine Bestätigung für ein Anmeldedatum anzufordern, das zuvor unter Verwendung der veralteten FIDO U2F JavaScript-API registriert wurde, und somit den Aufwand der erneuten Registrierung der Anmeldedaten zu vermeiden. Der `appid` entspricht dem `rpId` in WebAuthn, obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorkommen.

#### Eingabe

Die `extensions`-Eigenschaft von `publicKey` muss eine `appid`-Eigenschaft enthalten, deren Wert der Anwendungsbezeichner ist, der in der veralteten API verwendet wurde. Zum Beispiel:

```js
extensions: {
  appid: "https://accounts.example.com";
}
```

Sie müssen auch die FIDO U2F Anmeldedaten-IDs in der `allowCredentials`-Eigenschaft von `publicKey` auflisten, zum Beispiel:

```js
allowCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appid: true` aus, wenn der `appid` erfolgreich für die Bestätigung verwendet wurde, oder `appid: false`, falls nicht.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer vertrauenden Partei, Authenticatoren auszuschließen, die angegebene Anmeldedaten enthalten, die zuvor unter Verwendung der veralteten FIDO U2F JavaScript-API während der Registrierung registriert wurden. Dies ist erforderlich, da standardmäßig der Inhalt des `excludeCredentials`-Feldes als WebAuthn-Anmeldedaten angesehen wird. Bei der Verwendung dieser Erweiterung können Sie veraltete FIDO U2F Anmeldedaten in `excludeCredentials` einfügen und sie werden entsprechend erkannt.

#### Eingabe

Die `extensions`-Eigenschaft von `publicKey` muss eine `appidExclude`-Eigenschaft enthalten, deren Wert der Bezeichner der vertrauenden Partei ist, die beantragt, Authenticatoren nach veralteten FIDO U2F Anmeldedaten auszuschließen. Zum Beispiel:

```js
extensions: {
  appidExclude: "https://accounts.example.com";
}
```

Sie können dann FIDO U2F Anmeldedaten in der `excludeCredentials`-Eigenschaft von `publicKey` auflisten, zum Beispiel:

```js
excludeCredentials: {
  [
    id: arrayBuffer, // needs to contain decoded binary form of id
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appidExclude: true` aus, wenn die Erweiterung umgesetzt wurde, oder `appidExclude: false`, falls nicht.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Anmeldedatum anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob das erstellte Anmeldedatum entdeckbar ist.

#### Eingabe

Die `extensions`-Eigenschaft von `publicKey` muss eine `credProps`-Eigenschaft mit einem Wert von `true` enthalten:

```js
extensions: {
  credProps: true;
}
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was anzeigt, dass ein ansässiger Schlüssel erforderlich ist.

```js
authenticatorSelection: {
  requireResidentKey: true;
}
```

#### Ausgabe

Gibt die folgenden Informationen aus, wenn das registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) ein clientseitig entdeckbares Anmeldedaten ist:

```js
credProps: {
  rk: true;
}
```

Wenn `rk` im Output auf `false` gesetzt ist, handelt es sich um ein serverseitiges Anmeldedatum. Wenn `rk` im Output nicht vorhanden ist, ist nicht bekannt, ob das Anmeldedatum clientseitig entdeckbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer vertrauenden Partei, eine Mindestschutzrichtlinie für Anmeldedaten bei der Erstellung eines Anmeldedatums festzulegen.

#### Eingabe

Die `extensions`-Eigenschaft von `publicKey` muss eine `credentialProtectionPolicy`-Eigenschaft enthalten, die das Schutzniveau des zu erstellenden Anmeldedatums spezifiziert, und eine boolesche `enforceCredentialProtectionPolicy`-Eigenschaft, die angibt, ob der `create()`-Aufruf fehlschlagen sollte, anstatt ein Anmeldedatum zu erstellen, das nicht der angegebenen Richtlinie entspricht:

```js
extensions: {
  credentialProtectionPolicy: "userVerificationOptional",
  enforceCredentialProtectionPolicy: true
}
```

Die verfügbaren `credentialProtectionPolicy`-Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Die Benutzerüberprüfung ist optional. Der äquivalente `credProtect`-Wert, der dem Authentifikator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Die Benutzerüberprüfung ist nur optional, wenn das Anmeldedatum entdeckbar ist (d. h., es ist clientseitig entdeckbar). Der äquivalente `credProtect`-Wert, der dem Authentifikator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Die Benutzerüberprüfung ist immer erforderlich. Der äquivalente `credProtect`-Wert, der dem Authentifikator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` anfordern, je nach Art der Anfrage:
>
> - Chromium fordert beim Erstellen eines Anmeldedatums ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` an, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird als erforderlich behandelt.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht erlaubt, die Existenz eines entdeckbaren Anmeldedatums für eine gegebene `rpId` abzufragen.
> - Zusätzlich wird das Schutzniveau auf `userVerificationRequired` erhöht, wenn `residentKey` `required` ist und `userVerification` bevorzugt wird. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels keinen Zugriff auf Websites ermöglicht, die keine Benutzerüberprüfung erfordern. (Dies ist kein vollständiger Schutz; Websites sollten dennoch die Sicherheit ihrer Nutzer sorgfältig berücksichtigen.)
> - Wenn die Seite einen expliziten `credProtect`-Wert anfordert, wird dieser diese Standardwerte überschreiben. Diese Standardwerte führen nie zu einem niedrigeren Schutzniveau als dem vom Sicherheitsschlüssel voreingestellten, falls es höher ist.
>
> Angenommen, der Wert von `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall wird der `create()`-Aufruf fehlschlagen, wenn die Richtlinie nicht eingehalten werden kann (z. B. wenn eine Benutzerüberprüfung erforderlich ist, der Authentifikator jedoch keine Benutzerüberprüfung unterstützt). Ist er `false`, wird das System versuchen, ein Anmeldedatum zu erstellen, das soweit möglich der Richtlinie entspricht, es wird aber immer noch eines erstellen, das so gut wie möglich der Richtlinie entspricht, selbst wenn dies nicht vollständig möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, enthalten die Authentifikatordaten eine Darstellung des `credProtect`-Werts, der die festgelegte Richtlinie in folgender Form darstellt:

```js
{ "credProtect": 0x01 }
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer vertrauenden Partei, Blobs zu speichern, die mit einem Anmeldedatum auf dem Authentifikator verbunden sind – beispielsweise könnte sie Zertifikate direkt speichern wollen, anstatt einen zentralen Authentifizierungsdienst zu betreiben.

#### Eingabe

Bei einem `create()`-Aufruf muss die `extensions`-Eigenschaft von `publicKey` die `largeBlob`-Eigenschaft mit der folgenden Objektstruktur enthalten:

```js
extensions: {
  largeBlob: {
    support: "required";
  }
}
```

Der Wert der `support`-Eigenschaft ist eine Zeichenkette, die eine der folgenden Möglichkeiten sein kann:

- `"preferred"`: Das Anmeldedatum wird mit einem Authentifikator erstellt, der Blobs speichern kann, falls möglich, aber es wird dennoch eines erstellen, falls nicht. Die unterstützte´s`-Eigenschaft des Outputs gibt die Fähigkeit des Authentifikators an, Blobs zu speichern.
- `"required"`: Das Anmeldedatum wird mit einem Authentifikator erstellt, um Blobs zu speichern. Der `create()`-Aufruf wird fehlschlagen, wenn dies nicht möglich ist.

Bei einem `get()`-Aufruf muss die `extensions`-Eigenschaft von `publicKey` eine `largeBlob`-Eigenschaft enthalten, die eine von zwei Untereigenschaften hat – `read` oder `write` (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist ein Boolescher Wert. Ein Wert von `true` zeigt an, dass die vertrauende Partei ein zuvor geschriebenes Blob abrufen möchte, das mit dem bestätigten Anmeldedatum verknüpft ist:

```js
extensions: {
  largeBlob: {
    read: true;
  }
}
```

Die `write`-Eigenschaft nimmt als Wert einen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, der ein Blob darstellt, das die vertrauende Partei neben einem vorhandenen Anmeldedatum speichern möchte:

```js
extensions: {
  largeBlob: {
    write: arrayBuffer;
  }
}
```

> [!NOTE]
> Damit ein Schreib-Authentifizierungsvorgang erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das das Anmeldedatum repräsentiert, neben dem das Blob gespeichert werden soll.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf gibt die folgende Erweiterungsausgabe, wenn das registrierte Anmeldedatum in der Lage ist, Blobs zu speichern:

```js
largeBlob: {
  supported: true; // false if it cannot store blobs
}
```

Ein `get()`-Lese-Aufruf macht das Blob als {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe verfügbar, wenn es erfolgreich ist:

```js
largeBlob: {
  blob: arrayBuffer;
}
```

> [!NOTE]
> Wenn nicht erfolgreich, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreib-Aufruf gibt an, ob der Schreibvorgang erfolgreich war, mit einem `geschriebenen` Booleschen Wert in der Erweiterungsausgabe. Ein Wert von `true` bedeutet, dass es erfolgreich auf den zugehörigen Authentifikator geschrieben wurde, und `false` bedeutet, dass es nicht erfolgreich war.

```js
largeBlob: {
  written: true;
}
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators anzufordern.

#### Eingabe

Die `extensions`-Eigenschaft von `publicKey` muss eine `minPinLength`-Eigenschaft enthalten, deren Wert `true` ist:

```js
extensions: {
  minPinLength: true;
}
```

#### Ausgabe

Wenn die vertrauende Partei berechtigt ist, den Wert `minPinLength` zu erhalten (wenn ihre `rpId` auf der autorisierten vertrauenden Parteiliste des Authentifikators vorhanden ist), enthalten die Authentifikatordaten eine Darstellung davon in folgender Form:

```js
{"minPinLength": uint}
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert und es wird kein `"minPinLength"` Ausgabe-Wert bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer vertrauenden Partei, die Erstellung eines WebAuthn-Anmeldedatums anzufordern, das – sowohl von der vertrauenden Partei als auch von anderen Parteien – mit Secure Payment Confirmation verwendet werden kann; siehe [Using Secure Payment Confirmation](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs dictionary](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert.

- `isPayment`
  - : Ein boolescher Wert, der angibt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [vertrauende Partei](https://w3c.github.io/webauthn/#relying-party) ID der verwendeten Anmeldedaten. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `topOrigin`
  - : Der Ursprung des Top-Level-Rahmens. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `total`
  - : Der Transaktionsbetrag, der dem Benutzer angezeigt wurde. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Der Gesamtbetrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die Instrumentendetails, die dem Benutzer angezeigt wurden. Nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt eine Reihe von Orten, an denen WebAuthn-Erweiterungen spezifiziert sind. IANAs [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bieten ein Register aller Erweiterungen, beachten Sie jedoch, dass einige veraltet sein können.

Orte, an denen Erweiterungen spezifiziert sind:

- [Web Authentication Level 3, Abschnitt 10: Definierte Erweiterungen](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [Client to Authenticator Protocol (CTAP) 2, Abschnitt 12: Definierte Erweiterungen](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-defined-extensions)

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt — Erweiterungen, die während der Registrierung von Anmeldedaten ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen können während beider Operationen verwendet werden.

{{Compat}}
