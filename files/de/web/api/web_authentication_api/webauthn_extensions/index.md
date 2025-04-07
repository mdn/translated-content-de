---
title: Erweiterungen zur Web-Authentifizierung
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalitäten, die während der Erstellung von Anmeldeinformationen ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder bei Authentifizierungsoperationen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie man WebAuthn-Erweiterungen anfordert, Informationen über die Antworten auf diese Anfragen erhält und welche Erweiterungen verfügbar sind – einschließlich Browser-Unterstützung und erwarteten Eingaben und Ausgaben.

## Anleitung zur Nutzung von WebAuthn-Erweiterungen

Beim Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das `publicKey`-Objekt, das erforderlich ist, um einen WebAuthn-Prozess zu initiieren, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen darstellen, deren Verwendung der vertrauende Dritte in der Methode, die Sie aufrufen, anfordern möchte.

Im Hintergrund werden die Eingaben vom Benutzeragenten und/oder vom Authentifikator verarbeitet.

Zum Beispiel könnte in einem `publicKey`-Objekt für einen `create()`-Aufruf die Nutzung von zwei Erweiterungen angefordert werden:

1. Die `credProps`-Erweiterung. Vertrauende Dritte setzen `credProps`, um den Browser zu bitten, dem vertrauenden Dritten mitzuteilen, ob die Anmeldeinformationen nach der Registrierung ansässig/auffindbar sind. Dies ist hilfreich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, muss auch `publicKey.extensions.credProps = true` gesetzt werden, wenn der Browser ein Anmeldedatum erstellt, und je nach Art des verwendeten Authentifikators wird es auffindbar sein (zum Beispiel würde der FIDO2-Authenticator es typischerweise auffindbar machen; FIDO1/U2F-Sicherheitsschlüssel wären nicht auffindbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung ermöglicht es den vertrauenden Parteien, die minimale PIN-Länge des Authentifikators anzufordern. Dazu muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird durch den Authentifikator verarbeitet, wobei der Benutzeragent nur dazu dient, die Eingabedaten an diesen weiterzuleiten.

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

Anschließend können wir das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Anmeldeinformations-Erstellungsablauf zu initiieren:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse von Erweiterungsanforderungen

Wenn erfolgreich, gibt der `create()`-Aufruf ein {{jsxref("Promise")}} zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekt erfüllt wird. Nach Abschluss der Erweiterungsverarbeitung werden die Verarbeitungsergebnisse in der Antwort mitgeteilt (obwohl dies nicht in allen Fällen zutrifft – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie im obigen Codebeispiel gezeigt, gibt es zwei verschiedene Orte, um Ihre Ergebniserweiterungsergebnisse zu finden:

1. Sie können die Ergebnisse der Client-Erweiterungsverarbeitung (Benutzeragent) abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Diese gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag eine Erweiterungskennzeichnungszeichenfolge als Schlüssel und die Ausgabe der Erweiterungsverarbeitung durch den Client als Wert hat. Im obigen Beispiel würde, falls der Browser die `credProps`-Erweiterung unterstützt und diese korrekt verarbeitet wurde, das `myClientExtResults`-Kartenobjekt einen Eintrag `"credProps"` mit einem Wert von `{ rk: true }` enthalten. Dies würde bestätigen, dass die erstellte Anmeldeinformation tatsächlich auffindbar ist.

2. Sie können die Ergebnisse der Authentifikator-Erweiterungsverarbeitung in den Authentifikatordaten für die Operation finden:

   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die von erfolgreichen `get()`-Aufrufen zurückgegeben werden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Eigenschaft gefunden werden.

   Authentifikatordaten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Authentifikator-Erweiterungsergebnisdaten befinden sich immer in einem Abschnitt am Ende, als ein [CBOR map](https://cbor.io/), der die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine ausführliche Beschreibung der vollständigen Authentifikator-Datenstruktur.

   In unserem Beispiel, falls der vertrauende Dritte berechtigt ist, den `minPinLength`-Wert zu erhalten, würden die Authentifikatordaten eine Darstellung dessen in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen stellen keine erschöpfende Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, diejenigen Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert sind und von mindestens einem Rendering-Engine unterstützt werden.

### `appid`

- Nutzbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einem vertrauenden Dritten, eine Bestätigung für eine zuvor registrierte Anmeldeinformation mit der alten FIDO U2F JavaScript API anzufordern, wodurch die mühsame Neuregistrierung der Anmeldeinformationen vermieden wird. Das `appid` ist das Äquivalent zu `rpId` in WebAuthn (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domänen vorliegen).

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appid`-Eigenschaft enthalten, deren Wert der in der alten API verwendete Anwendungsbezeichner ist. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen auch die FIDO U2F-Anmeldekennungen in der `allowCredentials`-Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appid: true` aus, wenn das `appid` erfolgreich für die Aussage verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einem vertrauenden Dritten, Authentifikatoren mit spezifischen, zuvor mit der alten FIDO U2F JavaScript API registrierten Anmeldeinformationen während der Registrierung auszuschließen. Dies ist erforderlich, da standardmäßig angenommen wird, dass der Inhalt des Feldes `excludeCredentials` WebAuthn-Anmeldeinformationen sind. Bei Verwendung dieser Erweiterung können Sie alte FIDO U2F-Anmeldeinformationen in `excludeCredentials` aufnehmen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appidExclude`-Eigenschaft enthalten, deren Wert der Bezeichner des vertrauenden Dritten ist, der den Ausschluss von Authentifikatoren durch alte FIDO U2F-Anmeldeinformationen anfordert. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Sie können dann FIDO U2F-Anmeldeinformationen in der `excludeCredentials`-Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appidExclude: true` aus, wenn die Erweiterung berücksichtigt wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einem vertrauenden Dritten, zusätzliche Informationen/Eigenschaften über die erstellte Anmeldeinformation anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob die erstellte Anmeldeinformation auffindbar ist.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credProps`-Eigenschaft mit einem Wert von `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen außerdem `authenticatorSelection.requireResidentKey` auf `true` setzen, was anzeigt, dass ein Residenten-Schlüssel erforderlich ist.

```js
({
  authenticatorSelection: {
    requireResidentKey: true,
  },
});
```

#### Ausgabe

Gibt das Folgende aus, wenn die registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) eine clientseitig auffindbare Anmeldeinformation ist:

```js
({
  credProps: {
    rk: true,
  },
});
```

Ist `rk` in der Ausgabe auf `false` gesetzt, handelt es sich um eine serverseitige Anmeldeinformation. Ist `rk` in der Ausgabe nicht vorhanden, ist nicht bekannt, ob die Anmeldeinformation clientseitig auffindbar oder serverseitig ist.

### `credProtect`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einem vertrauenden Dritten, beim Erstellen einer Anmeldeinformation eine minimale Schutzrichtlinie für Anmeldeinformationen festzulegen.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credentialProtectionPolicy`-Eigenschaft mit der Angabe des Schutzniveaus der zu erstellenden Anmeldeinformation und eine boolesche `enforceCredentialProtectionPolicy`-Eigenschaft enthalten, die angibt, ob der `create()`-Aufruf fehlschlagen sollte, anstatt eine Anmeldeinformation zu erstellen, die nicht der angegebenen Richtlinie entspricht:

```js
({
  extensions: {
    credentialProtectionPolicy: "userVerificationOptional",
    enforceCredentialProtectionPolicy: true,
  },
});
```

Die verfügbaren `credentialProtectionPolicy`-Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Die Benutzerüberprüfung ist optional. Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Die Benutzerüberprüfung ist nur optional, wenn die Anmeldeinformation auffindbar ist (d.h. sie ist clientseitig auffindbar). Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Die Benutzerüberprüfung ist immer erforderlich. Der entsprechende `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig zu `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired`, abhängig von der Art der Anfrage:
>
> - Chromium fordert ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` an, wenn es eine Anmeldeinformation erstellt, wenn `residentKey` auf `preferred` oder `required` eingestellt ist. (Die Einstellung `requireResidentKey` wird wie erforderlich behandelt.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht die Abfrage der Anwesenheit einer auffindbaren Anmeldeinformation für eine gegebene `rpId` ermöglicht.
> - Ist `residentKey` zusätzlich `required` und `userVerification` gefällt, wird das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels nicht die Anmeldung bei einer Site ermöglicht, die keine Benutzerüberprüfung erfordert. (Dies ist kein vollständiger Schutz; Sites sollten die Sicherheit ihrer Benutzer dennoch sorgfältig prüfen.)
> - Wenn die Site ein explizites `credProtect`-Niveau anfordert, wird dies diese Standardeinstellungen überschreiben. Diese Standardeinstellungen führen niemals dazu, dass das Schutzniveau niedriger ist als der Standardschutz durch den Sicherheitsschlüssel, wenn dieser höher ist.
>
> Nehmen wir an, der Wert von `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall wird der `create()`-Aufruf fehlschlagen, wenn die Richtlinie nicht eingehalten werden kann (zum Beispiel, es wird eine Benutzerüberprüfung benötigt, der Authentifikator unterstützt jedoch keine Benutzerüberprüfung). Ist er `false`, wird das System den besten Versuch unternehmen, eine Anmeldeinformation zu erstellen, die der Richtlinie entspricht, aber es wird dennoch eine erstellen, die so nah wie möglich konform ist, falls dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, enthalten die Authentifikatordaten eine Darstellung des `credProtect`-Werts, der die festgelegte Richtlinie in folgender Form darstellt:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large blob storage extension (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einem vertrauenden Dritten, Blobs, die mit einer Anmeldeinformation in Verbindung stehen, auf dem Authentifikator zu speichern – zum Beispiel kann es direkt Zertifikate speichern, anstatt einen zentralen Authentifizierungsdienst zu betreiben.

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

- `"preferred"`: Die Anmeldeinformation wird, wenn möglich, mit einem Authentifikator erstellt, der Blobs speichern kann, aber es wird dennoch eine erstellt, wenn nicht. Der ausgegebene `supported`-Wert gibt die Fähigkeit des Authentifikators zum Speichern von Blobs an.
- `"required"`: Die Anmeldeinformation wird mit einem Authentifikator erstellt werden, der Blobs speichern kann. Der `create()`-Aufruf wird fehlschlagen, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit einem der beiden Untereigenschaften enthalten – `read` oder `write` (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist eine boolesche Angabe. Ein Wert von `true` gibt an, dass die vertrauende Partei ein zuvor geschriebenes Blob abrufen möchte, das mit der behaupteten Anmeldeinformation verknüpft ist:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die `write`-Eigenschaft nimmt als Wert ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der Blob darstellt, den die vertrauende Partei neben einer vorhandenen Anmeldeinformation speichern möchte:

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
> Damit ein Schreibauthentifizierungsvorgang erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das die Anmeldeinformation, mit der das Blob gespeichert werden soll, darstellt.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf gibt die folgende Erweiterungsausgabe aus, wenn die registrierte Anmeldeinformation in der Lage ist, Blobs zu speichern:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Lesenaufruf macht das Blob in der Erweiterungsausgabe als {{jsxref("ArrayBuffer")}} verfügbar, wenn erfolgreich:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Bei Misserfolg wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreibaufruf gibt an, ob der Schreibvorgang erfolgreich war, mit einem `written`-booleschen Wert in der Erweiterungsausgabe. Ein `true`-Wert bedeutet, dass es erfolgreich auf den zugeordneten Authentifikator geschrieben wurde, und `false` bedeutet, dass es erfolglos war.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es den vertrauenden Parteien, die minimale PIN-Länge des Authentifikators anzufordern.

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

Wenn die vertrauende Partei berechtigt ist, den `minPinLength`-Wert zu erhalten (wenn ihre `rpId` auf der autorisierten vertrauenden Parteienliste des Authentikators vorhanden ist), enthalten die Authentifikatordaten eine Darstellung davon in folgender Form:

```js
({ minPinLength: uint });
```

Falls die vertrauende Partei nicht berechtigt ist, wird die Erweiterung ignoriert, und es wird kein `"minPinLength"`-Ausgabewert bereitgestellt.

### `payment`

- Nutzbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einem vertrauenden Dritten, die Erstellung einer WebAuthn-Anmeldeinformation zu verlangen, die sowohl von der vertrauenden Partei als auch von anderen mit Secure Payment Confirmation verwendet werden kann; siehe [Verwendung der sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs-Dictionary](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert

- `isPayment`
  - : Ein boolescher Wert, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [vertrauende Partei](https://w3c.github.io/webauthn/#relying-party) der verwendeten Anmeldeinformationen. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `topOrigin`
  - : Der Ursprung des obersten Rahmens. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `total`
  - : Der Transaktionsbetrag, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Der Betrag hat den Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die dem Benutzer angezeigten Instrumentendetails. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Das Instrument hat den Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt mehrere Orte, an denen WebAuthn-Erweiterungen spezifiziert werden. IANA's [WebAuthn-Erweiterungskennungen](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, beachten Sie jedoch, dass einige möglicherweise veraltet sind.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt — Erweiterungen, die während der Anmelderegistrierung verwendet werden können ([`create()`](/de/docs/Web/API/CredentialsContainer/create)), und Erweiterungen, die während der Authentifizierung verwendet werden können ([`get()`](/de/docs/Web/API/CredentialsContainer/get)). Einige Erweiterungen sind während beider Operationen verwendbar.

{{Compat}}
