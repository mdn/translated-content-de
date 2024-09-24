---
title: Webauthentifizierungs-Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalitäten, die während der Erstellung von Anmeldeinformationen ({{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}}) oder Authentifizierung ({{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}}) angefordert werden können. Dieser Artikel erklärt, wie WebAuthn-Erweiterungen angefordert werden, wie Informationen über die Antworten auf diese Anfragen abgerufen werden und welche Erweiterungen verfügbar sind – einschließlich Browserunterstützung und erwarteter Eingaben und Ausgaben.

## Verwendung von WebAuthn-Erweiterungen

Beim Aufrufen von {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} oder {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} kann der erforderliche `publicKey` Objektparameter zur Einleitung eines WebAuthn-Ablaufs eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für Erweiterungen sind, die die vertrauende Partei in der von Ihnen aufgerufenen Methode verwenden möchte.

Im Hintergrund werden die Eingaben vom Benutzeragenten und/oder dem Authentifikator verarbeitet.

Zum Beispiel könnten wir in einem `publicKey` Objekt für einen `create()` Aufruf die Verwendung von zwei Erweiterungen anfordern:

1. Die `credProps` Erweiterung. Vertrauende Parteien setzen `credProps`, um den Browser zu bitten, ihnen mitzuteilen, ob das Anmeldeinformationen ansässig/auffindbar ist, nachdem es registriert wurde. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um es anzufordern, müssen Sie auch `publicKey.extensions.credProps = true` festlegen, wenn der Browser eine Anmeldeinformationen erstellt, und je nach verwendetem Authentifikatortyp wird es auffindbar sein (zum Beispiel würde der FIDO2-Authenticator normalerweise auffindbar sein; FIDO1/U2F Sicherheits-Schlüssel wäre nicht auffindbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength` Erweiterung ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators abzufragen. Dazu muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird vom Authentifikator verarbeitet, wobei der Benutzeragent nur dazu dient, die Eingabedaten an ihn weiterzuleiten.

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

Wir können dann das `publicKey` Objekt in einen `create()`-Aufruf übergeben, um den Anmeldeinformations-Erstellungsablauf zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Anforderungsergebnisse von Erweiterungen

Wenn erfolgreich, gibt der `create()`-Aufruf ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("PublicKeyCredential")}} Objekt aufgelöst wird. Sobald die Erweiterungsverarbeitung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort mitgeteilt (obwohl dies nicht in allen Fällen der Fall ist – es ist möglich, dass Erweiterungen keine Ausgabe haben).

```js
navigator.credentials
  .create({ publicKey })
  .then((publicKeyCred) => {
    const myClientExtResults = publicKeyCred.getClientExtensionResults();
    // myClientExtResults enthält die Ausgabe der Verarbeitung
    // der "credProps" Erweiterung

    const authData = publicKeyCred.response.getAuthenticatorData();
    // authData enthält Authentifikator-Daten, die
    // Authentifikator-Erweiterungsverarbeitungsergebnisse umfassen, d.h., minPinLength
  })
  .catch((err) => {
    console.error(err);
  });
```

Wie im obigen Codebeispiel gezeigt, gibt es zwei verschiedene Orte, an denen Sie Ihre Ausgabeergebnisse von Erweiterungen finden können:

1. Sie können die Ergebnisse der clientseitigen (Benutzeragenten) Erweiterungsverarbeitung finden, indem Sie die Methode {{domxref("PublicKeyCredential.getClientExtensionResults()")}} aufrufen. Diese gibt eine {{jsxref("Map", "Map")}} zurück, wobei jeder Eintrag einen Identifizierungsstring einer Erweiterung als Schlüssel und die vom Client verarbeitete Ausgabe der Erweiterung als Wert enthält. Im obigen Beispiel würde das `myClientExtResults` Map-Objekt einen Eintrag enthalten, falls der Browser die `credProps`-Erweiterung unterstützte und diese korrekt verarbeitet wurde, `"credProps"` mit einem Wert von `{ rk: true }`. Dies würde bestätigen, dass das erstellte Anmeldeinformationen tatsächlich auffindbar ist.

2. Sie können die Ergebnisse der Authentifikator-Erweiterungsverarbeitung in den Authentifikatordaten für die Operation finden:

   - Bei `PublicKeyCredential` Objekten, die von erfolgreichen `create()` Aufrufen zurückgegeben werden, kann dies durch einen Aufruf von {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "publicKeyCredential.response.getAuthenticatorData()")}} zurückgegeben werden.
   - Bei `PublicKeyCredential` Objekten, die von erfolgreichen `get()` Aufrufen zurückgegeben werden, kann dies in der {{domxref("AuthenticatorAssertionResponse.authenticatorData", "publicKeyCredential.response.authenticatorData")}} Eigenschaft gefunden werden.

   Authentifikatordaten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Authentifikator-Erweiterungsergebnis-Daten finden sich immer in einem Abschnitt am Ende, als eine [CBOR Map](https://cbor.io/), die die Ergebnisse darstellt. Siehe {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} für eine detaillierte Beschreibung der vollständigen Authentikatordatenstruktur.

   Zurück zu unserem Beispiel: Wenn die vertrauende Partei berechtigt ist, den `minPinLength` Wert zu erhalten, würden die Authentikatordaten eine Darstellung davon in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten stehenden Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Verwendbar bei: Authentifizierung ({{domxref("CredentialsContainer.get()","get()")}})
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer vertrauenden Partei, ein Assertion für ein Anmeldeinformationen anzufordern, das zuvor unter Verwendung der veralteten FIDO U2F JavaScript API registriert wurde, um den Aufwand der Neuregistrierung des Anmeldeinformationen zu vermeiden. Die `appid` ist das Äquivalent dieser API zur `rpId` in WebAuthn (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `extensions` Eigenschaft des `publicKey` muss eine `appid` Eigenschaft enthalten, deren Wert der Anwendungsbezeichner ist, der in der veralteten API verwendet wurde. Zum Beispiel:

```js
extensions: {
  appid: "https://accounts.example.com";
}
```

Sie müssen auch die FIDO U2F Anmeldeinformationen-IDs in der `allowCredentials` Eigenschaft des `publicKey` auflisten, zum Beispiel:

```js
allowCredentials: {
  [
    id: arrayBuffer, // muss die dekodierte binäre Form der ID enthalten
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appid: true` aus, wenn die `appid` erfolgreich für die Assertion verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}})
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Ausschluss-Erweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer vertrauenden Partei, Authentikatoren mit bestimmten Anmeldeinformationen, die zuvor mit der veralteten FIDO U2F JavaScript API registriert wurden, während der Registrierung auszuschließen. Dies ist erforderlich, da standardmäßig der Inhalt des `excludeCredentials` Felds als WebAuthn Anmeldeinformationen angenommen wird. Beim Verwenden dieser Erweiterung können Sie veraltete FIDO U2F Anmeldeinformationen in `excludeCredentials` einfügen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions` Eigenschaft des `publicKey` muss eine `appidExclude` Eigenschaft enthalten, deren Wert der Bezeichner der vertrauenden Partei ist, die verlangt, Authentikatoren durch veraltete FIDO U2F Anmeldeinformationen auszuschließen. Zum Beispiel:

```js
extensions: {
  appidExclude: "https://accounts.example.com";
}
```

Sie können dann FIDO U2F Anmeldeinformationen in der `excludeCredentials` Eigenschaft des `publicKey` auflisten, zum Beispiel:

```js
excludeCredentials: {
  [
    id: arrayBuffer, // muss die dekodierte binäre Form der ID enthalten
    transports: ["nfc", "usb"]
    type: "public-key"
  ]
}
```

#### Ausgabe

Gibt `appidExclude: true` aus, wenn die Erweiterung berücksichtigt wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}})
- Verarbeitet von: Benutzeragent
- Spezifikation: [Anmeldeinformationen-Eigenschaften-Erweiterung (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Anmeldeinformationen anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es werden Informationen angefordert, ob das erstellte Anmeldeinformationen auffindbar ist.

#### Eingabe

Die `extensions` Eigenschaft des `publicKey` muss eine `credProps` Eigenschaft mit einem Wert von `true` enthalten:

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

Gibt Folgendes aus, wenn das registrierte {{domxref("PublicKeyCredential")}} ein client-seitiges auffindbares Anmeldeinformationen ist:

```js
credProps: {
  rk: true;
}
```

Wenn `rk` im Ergebnis auf `false` gesetzt ist, dann ist das Anmeldeinformationen ein serverseitiges Anmeldeinformationen. Wenn `rk` im Ergebnis nicht vorhanden ist, ist es nicht bekannt, ob das Anmeldeinformationen client-seitig auffindbar oder serverseitig ist.

### `credProtect`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}})
- Verarbeitet von: Authentifikator
- Spezifikation: [Anmeldeinformationen-Schutz (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer vertrauenden Partei, beim Erstellen eines Anmeldeinformationen eine Mindestschutzrichtlinie für Anmeldeinformationen festzulegen.

#### Eingabe

Die `extensions` Eigenschaft des `publicKey` muss eine `credentialProtectionPolicy` Eigenschaft enthalten, die das Schutzniveau des zu erstellenden Anmeldeinformationen angibt, und eine boolesche `enforceCredentialProtectionPolicy` Eigenschaft, die angibt, ob der `create()` Aufruf fehlschlagen soll, anstatt ein Anmeldeinformationen zu erstellen, das nicht der angegebenen Richtlinie entspricht:

```js
extensions: {
  credentialProtectionPolicy: "userVerificationOptional",
  enforceCredentialProtectionPolicy: true
}
```

Die verfügbaren `credentialProtectionPolicy` Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Benutzerverifizierung ist optional. Der entsprechende `credProtect` Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerverifizierung ist nur optional, wenn das Anmeldeinformationen auffindbar ist (d.h. es ist client-seitig auffindbar). Der entsprechende `credProtect` Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerverifizierung ist immer erforderlich. Der entsprechende `credProtect` Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` anfordern, je nach Art der Anfrage:
>
> - Chromium wird beim Erstellen eines Anmeldeinformationen ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` anfordern, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird wie `required` behandelt.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht ausreicht, um die Anwesenheit eines auffindbaren Anmeldeinformationen für eine bestimmte `rpId` abzufragen.
> - Wenn `residentKey` `required` ist und `userVerification` bevorzugt ist, wird das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels keinen Anmeldeversuch auf einer Website erlaubt, die keine Benutzerverifizierung erfordert. (Dies bietet keinen vollständigen Schutz; Websites sollten immer noch sorgfältig die Sicherheit ihrer Benutzer evaluieren.)
> - Wenn die Website explizit ein `credProtect` Niveau anfordert, wird dies diese Standardwerte überschreiben. Diese Standards führen niemals dazu, dass das Schutzniveau niedriger ist als das Standardniveau des Sicherheitsschlüssels, falls dieses höher ist.
>
> Wenn der `enforceCredentialProtectionPolicy` Wert `true` ist, wird der `create()`-Aufruf fehlschlagen, wenn die Richtlinie nicht eingehalten werden kann (zum Beispiel wird Benutzerverifizierung erfordert, aber der Authentifikator unterstützt keine Benutzerverifizierung). Wenn sie `false` ist, wird das System den besten Versuch unternehmen, ein Anmeldeinformationen zu erstellen, das der Richtlinie entspricht, es wird jedoch trotzdem eines erstellen, das so nah wie möglich konform ist, falls dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, enthalten die Authentifikatordaten eine Darstellung des `credProtect` Werts, der die festgelegte Richtlinie in folgender Form darstellt:

```js
{ "credProtect": 0x01 }
```

### `largeBlob`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}}) und Authentifizierung ({{domxref("CredentialsContainer.get()","get()")}})
- Verarbeitet von: Benutzeragent
- Spezifikation: [Large Blob Speichererweiterung (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer vertrauenden Partei, Blobs zu speichern, die mit einem Anmeldeinformationen auf dem Authentifikator verbunden sind – beispielsweise könnte sie Zertifikate direkt speichern, anstatt einen zentralisierten Authentifizierungsdienst zu betreiben.

#### Eingabe

Während eines `create()`-Aufrufs muss die `extensions` Eigenschaft des `publicKey` eine `largeBlob` Eigenschaft mit folgender Objektstruktur enthalten:

```js
extensions: {
  largeBlob: {
    support: "required";
  }
}
```

Der Wert der `support` Eigenschaft ist ein String, der einer der folgenden sein kann:

- `"preferred"`: Das Anmeldeinformationen wird mit einem Authentifikator erstellt, der Blobs speichern kann, wenn möglich, es wird jedoch trotzdem eines erstellt, wenn nicht. Die Eigenschaft 'supported' im Ausgabebericht informiert über die Fähigkeit des Authentifikators, Blobs zu speichern.
- `"required"`: Das Anmeldeinformationen wird mit einem Authentifikator erstellt, der Blobs speichern kann. Der `create()` Aufruf wird fehlschlagen, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `extensions` Eigenschaft des `publicKey` eine `largeBlob` Eigenschaft mit einer der beiden Untereigenschaften – `read` oder `write` – enthalten (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read` Eigenschaft ist ein boolean. Ein Wert von `true` gibt an, dass die vertrauende Partei ein zuvor geschriebenes Blob, das mit dem behaupteten Anmeldeinformationen verbunden ist, abrufen möchte:

```js
extensions: {
  largeBlob: {
    read: true;
  }
}
```

Die `write` Eigenschaft nimmt als Wert einen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} an, der ein Blob repräsentiert, das die vertrauende Partei zusammen mit einem vorhandenen Anmeldeinformationen speichern möchte:

```js
extensions: {
  largeBlob: {
    write: arrayBuffer;
  }
}
```

> [!NOTE]
> Damit eine Schreibauthentifizierungsoperation erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das das Anmeldeinformationen repräsentiert, neben dem das Blob gespeichert werden soll.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf gibt die folgende Erweiterungsausgabe, falls das registrierte Anmeldeinformationen Blobs speichern kann:

```js
largeBlob: {
  supported: true; // false, wenn es keine Blobs speichern kann
}
```

Ein `get()` Leseaufruf macht das Blob verfügbar als ein {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe, wenn erfolgreich:

```js
largeBlob: {
  blob: arrayBuffer;
}
```

> [!NOTE]
> Wenn erfolglos, wird das `largeBlob` Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()` Schreibaufruf zeigt mit einem `written` boolean Wert in der Erweiterungsausgabe an, ob die Schreiboperation erfolgreich war. Ein `true` Wert bedeutet, dass es erfolgreich auf dem zugehörigen Authentifikator geschrieben wurde, und `false` bedeutet, dass es erfolglos war.

```js
largeBlob: {
  written: true;
}
```

### `minPinLength`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}})
- Verarbeitet von: Authentifikator
- Spezifikation: [Mindest-PIN-Länge-Erweiterung (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators abzufragen.

#### Eingabe

Die `extensions` Eigenschaft des `publicKey` muss eine `minPinLength` Eigenschaft mit einem Wert von `true` enthalten:

```js
extensions: {
  minPinLength: true;
}
```

#### Ausgabe

Wenn die vertrauende Partei berechtigt ist, den `minPinLength` Wert zu erhalten (falls seine `rpId` auf der vom Authentifikator autorisierten Liste der vertrauenden Parteien vorhanden ist), werden die Authentifikatordaten eine Darstellung davon in folgender Form enthalten:

```js
{"minPinLength": uint}
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert und kein `"minPinLength"` Ausgabe-Wert bereitgestellt.

### `payment`

- Verwendbar bei: Registrierung ({{domxref("CredentialsContainer.create()","create()")}})
- Verarbeitet von: Benutzeragent
- Spezifikation: [Sichere Zahlungsbestätigung](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer vertrauenden Partei, die Erstellung von WebAuthn Anmeldeinformationen anzufordern, die in Kombination mit der Sicheren Zahlungsbestätigung verwendet werden können – von der vertrauenden Partei und anderen Parteien; siehe [Verwendung der Sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment` Erweiterung sind im [AuthenticationExtensionsPaymentInputs Wörterbuch](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert

- `isPayment`
  - : Ein boolean, der angibt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [Relying Party](https://w3c.github.io/webauthn/#relying-party) ID der(s) verwendeten Anmeldeinformationen. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `topOrigin`
  - : Der Ursprung des obersten Rahmens. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `total`
  - : Der dem Benutzer angezeigte Transaktionsbetrag. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung. Der Betrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die dem Benutzer angezeigten Instrumentdetails. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt eine Reihe von Orten, an denen WebAuthn-Erweiterungen spezifiziert sind. IANA's [WebAuthn Erweiterungsidentifikatoren](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bieten ein Register aller Erweiterungen, aber denken Sie daran, dass einige veraltet sein könnten.

Orte, an denen Erweiterungen spezifiziert sind:

- [Web Authentication Level 3, Abschnitt 10: Definierte Erweiterungen](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [Client zu Authentifikator Protokoll (CTAP) 2, Abschnitt 12: Definierte Erweiterungen](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-defined-extensions)

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt — Erweiterungen, die während der Registrierung von Anmeldeinformationen ({{domxref("CredentialsContainer.create()","create()")}}) verwendet werden können, und Erweiterungen, die während der Authentifizierung ({{domxref("CredentialsContainer.get()","get()")}}) verwendet werden können. Einige Erweiterungen sind während beider Operationen verwendbar.

{{Compat}}
