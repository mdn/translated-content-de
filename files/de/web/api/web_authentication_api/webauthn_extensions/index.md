---
title: Web Authentication Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalitäten, die während der Erstellung von Berechtigungsnachweisen ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierung ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie WebAuthn-Erweiterungen angefordert werden, wie Informationen über die Antworten auf diese Anfragen abgerufen werden und welche Erweiterungen verfügbar sind – einschließlich der Browser-Unterstützung und der erwarteten Ein- und Ausgaben.

## Anleitung zur Verwendung von WebAuthn-Erweiterungen

Beim Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das `publicKey`-Objekt, das erforderlich ist, um einen WebAuthn-Fluss einzuleiten, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, die die vertrauende Partei in der aufgerufenen Methode verwenden möchte.

Hinter den Kulissen werden die Eingaben vom Benutzeragenten und/oder Authentifikator verarbeitet.

Zum Beispiel möchten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Verwendung von zwei Erweiterungen anfordern:

1. Die `credProps`-Erweiterung. Vertrauende Parteien setzen `credProps`, um zu verlangen, dass der Browser der vertrauenden Partei mitteilt, ob das Berechtigungsnachweis nach der Registrierung ansässig/auffindbar ist. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Um dies anzufordern, müssen Sie auch `publicKey.extensions.credProps = true` setzen, wenn der Browser einen Berechtigungsnachweis erstellt, und je nach verwendetem Authentifikator-Typ wird dieser auffindbar sein (zum Beispiel würde der FIDO2-Authentifikator ihn typischerweise auffindbar machen; ein FIDO1/U2F-Sicherheitsschlüssel wäre nicht auffindbar). `credProps` wird nur vom Benutzeragenten verarbeitet.
2. Die `minPinLength`-Erweiterung ermöglicht es vertrauenden Parteien, die Mindestlänge der PIN des Authentifikators abzufragen. Dies erfordert, dass `extensions.minPinLength` auf `true` gesetzt wird. `minPinLength` wird vom Authentifikator verarbeitet, wobei der Benutzeragent nur dient, um die Eingabedaten weiterzugeben.

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

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Berechtigungsnachweis-Erstellungsfluss zu starten:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse der Erweiterungsanforderung

Wenn erfolgreich, gibt der `create()`-Aufruf ein {{jsxref("Promise")}} zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt aufgelöst wird. Sobald die Erweiterungsverarbeitung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort kommuniziert (obwohl dies nicht in allen Fällen der Fall ist – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie das obige Code-Snippet zeigt, gibt es zwei verschiedene Stellen, an denen Sie die Ergebnisse Ihrer Erweiterungsausgabe finden können:

1. Sie können die Ergebnisse der Client- (Benutzeragenten-) Erweiterungsverarbeitung abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Dies gibt eine {{jsxref("Map", "map")}} zurück, wobei jeder Eintrag ein Erweiterungskennzeichen-String als Schlüssel und die Ausgabe von der Verarbeitung der Erweiterung durch den Client als Wert ist. Im obigen Beispiel, wenn der Browser die `credProps`-Erweiterung unterstützt und sie korrekt verarbeitet wurde, würde das `myClientExtResults` Map-Objekt einen Eintrag `"credProps"` mit einem Wert von `{ rk: true }` enthalten. Dies würde bestätigen, dass das erstellte Berechtigungsnachweis tatsächlich auffindbar ist.

2. Sie können die Ergebnisse der Authentifikatorerweiterungsverarbeitung in den Authentifikatordaten für die Operation finden:

   - Bei `PublicKeyCredential`s, die von erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Bei `PublicKeyCredential`s, die von erfolgreichen `get()`-Aufrufen zurückgegeben werden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Eigenschaft gefunden werden.

   Authentifikatordaten haben die Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur – siehe [authentifizierte Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Authentikor-Erweiterungsergebnisse werden immer in einem Abschnitt am Ende gefunden, als ein [CBOR-Map](https://cbor.io/), der die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der vollständigen Authentifikatordatenstruktur.

   Zurück zu unserem Beispiel: Wenn die vertrauende Partei autorisiert ist, den Wert `minPinLength` zu erhalten, würden die Authentifikatordaten eine Darstellung davon in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die unten aufgeführten Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Verwendbar bei: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Extension (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Ermöglicht es einer vertrauenden Partei, eine Bestätigung für ein zuvor registriertes Berechtigungsnachweis unter Verwendung der Legacy-FIDO U2F JavaScript-API anzufordern, um die Neu-Registrierung des Berechtigungsnachweises zu vermeiden. Das `appid` ist das Äquivalent zu `rpId` in WebAuthn (aber bedenken Sie, dass `appid`s in Form von URLs und `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `publicKey`'s `extensions` Eigenschaft muss eine `appid` Eigenschaft enthalten, deren Wert der Anwendungsbezeichner ist, der in der Legacy-API verwendet wurde. Zum Beispiel:

```js
extensions: {
  appid: "https://accounts.example.com";
}
```

Sie müssen auch die FIDO U2F-Berechtigungsnachweis-IDs in der `publicKey`'s `allowCredentials`-Eigenschaft auflisten, zum Beispiel:

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

Gibt `appid: true` aus, wenn `appid` für die Bestätigung erfolgreich verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [FIDO AppID Exclusion Extension (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Ermöglicht es einer vertrauenden Partei, Authentifikatoren auszuschließen, die bestimmte zuvor unter Verwendung der Legacy-FIDO U2F JavaScript-API registrierte Berechtigungsnachweise enthalten, während der Registrierung. Dies ist erforderlich, da standardmäßig der Inhalt des `excludeCredentials`-Feldes als WebAuthn-Berechtigungsnachweise angesehen wird. Beim Verwenden dieser Erweiterung können Sie Legacy-FIDO U2F-Berechtigungsnachweise innerhalb von `excludeCredentials` einfügen, und sie werden als solche erkannt.

#### Eingabe

Die `publicKey`'s `extensions`-Eigenschaft muss eine `appidExclude`-Eigenschaft enthalten, dessen Wert der Bezeichner der vertrauenden Partei ist, die die Authentifikatoren durch Legacy-FIDO U2F-Berechtigungsnachweise ausschließen möchte. Zum Beispiel:

```js
extensions: {
  appidExclude: "https://accounts.example.com";
}
```

Sie können dann die FIDO U2F-Berechtigungsnachweise in der `publicKey`'s `excludeCredentials`-Eigenschaft auflisten, zum Beispiel:

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

Gibt `appidExclude: true` aus, wenn die Erweiterung durchgeführt wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Credential Properties Extension (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über das erstellte Berechtigungsnachweis anzufordern. Dies ist derzeit nur nützlich beim Aufrufen von `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"`; es fordert Informationen an, ob das erstellte Berechtigungsnachweis auffindbar ist.

#### Eingabe

Die `publicKey`'s `extensions`-Eigenschaft muss eine `credProps`-Eigenschaft mit einem Wert von `true` enthalten:

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

Gibt Folgendes aus, wenn das registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) ein clientseitig auffindbares Berechtigungsnachweis ist:

```js
credProps: {
  rk: true;
}
```

Wenn `rk` im Output auf `false` gesetzt ist, handelt es sich um ein serverseitiges Berechtigungsnachweis. Wenn `rk` im Output nicht vorhanden ist, ist nicht bekannt, ob das Berechtigungsnachweis clientseitig auffindbar oder serverseitig ist.

### `credProtect`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Credential Protection (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Ermöglicht es einer vertrauenden Partei, bei der Erstellung eines Berechtigungsnachweises eine minimale Berechtigungsschutzrichtlinie anzugeben.

#### Eingabe

Die `publicKey`'s `extensions`-Eigenschaft muss eine `credentialProtectionPolicy`-Eigenschaft enthalten, die das Schutzniveau des zu erstellenden Berechtigungsnachweises angibt, und eine boolesche `enforceCredentialProtectionPolicy`-Eigenschaft, die angibt, ob der `create()`-Aufruf fehlschlagen soll, anstatt ein Berechtigungsnachweis zu erstellen, das nicht den angegebenen Richtlinien entspricht:

```js
extensions: {
  credentialProtectionPolicy: "userVerificationOptional",
  enforceCredentialProtectionPolicy: true
}
```

Die verfügbaren `credentialProtectionPolicy`-Werte sind wie folgt:

- `"userVerificationOptional"` {{Experimental_Inline}}
  - : Die Benutzerüberprüfung ist optional. Der äquivalente `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Die Benutzerüberprüfung ist nur optional, wenn das Berechtigungsnachweis auffindbar ist (d.h. es ist clientseitig auffindbar). Der äquivalente `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Die Benutzerüberprüfung ist immer erforderlich. Der äquivalente `credProtect`-Wert, der an den Authentifikator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium verwendet standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired`, abhängig von der Art der Anforderung:
>
> - Chromium fordert bei der Erstellung eines Berechtigungsnachweises ein Schutzniveau von `userVerificationOptionalWithCredentialIDList` an, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Das Setzen von `requireResidentKey` wird genauso behandelt wie required.) Dies stellt sicher, dass der einfache Besitz eines Sicherheitsschlüssels nicht die Anwesenheit eines auffindbaren Berechtigungsnachweises für ein angegebenes `rpId` abfragt.
> - Zusätzlich, wenn `residentKey` `required` ist und `userVerification` bevorzugt wird, wird das Schutzniveau auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels nicht das Einloggen auf einer Seite zulässt, die keine Benutzerüberprüfung erfordert. (Dies ist nicht vollständiger Schutz; Websites sollten dennoch sorgfältig über die Sicherheit ihrer Nutzer nachdenken.)
> - Wenn die Seite ein explizites `credProtect`-Niveau anfordert, wird dies diese Voreinstellungen überschreiben. Diese Voreinstellungen werden niemals dazu führen, dass das Schutzniveau niedriger ist als der Standard des Sicherheitsschlüssels, falls dieser höher ist.
>
> Angenommen, der Wert `enforceCredentialProtectionPolicy` ist `true`. In diesem Fall schlägt der `create()`-Aufruf fehl, wenn die Richtlinie nicht eingehalten werden kann (zum Beispiel, sie erfordert eine Benutzerüberprüfung, aber der Authentifikator unterstützt keine Benutzerüberprüfung). Wenn es `false` ist, wird das System den besten Versuch unternehmen, ein Berechtigungsnachweis zu erstellen, das den Richtlinien entspricht, aber es wird immer noch eines erstellen, das so nah wie möglich daran entspricht, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, werden die Authentifikatordaten eine Darstellung des `credProtect`-Werts enthalten, der die festgelegte Richtlinie in folgender Form darstellt:

```js
{ "credProtect": 0x01 }
```

### `largeBlob`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Großblob-Speichererweiterung (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Ermöglicht es einer vertrauenden Partei, Blobs im Zusammenhang mit einem Berechtigungsnachweis auf dem Authentifikator zu speichern – zum Beispiel könnte sie wünschen, Zertifikate direkt zu speichern, anstatt einen zentralen Authentifizierungsdienst auszuführen.

#### Eingabe

Während eines `create()`-Aufrufs muss die `publicKey`'s `extensions`-Eigenschaft eine `largeBlob`-Eigenschaft mit der folgenden Objektstruktur enthalten:

```js
extensions: {
  largeBlob: {
    support: "required";
  }
}
```

Der Wert der `support`-Eigenschaft ist ein String, der einer der folgenden sein kann:

- `"preferred"`: Das Berechtigungsnachweis wird mit einem Authentifikator erstellt, der Blobs speichern kann, wenn möglich, aber es wird immer noch eines erstellt, wenn nicht. Die Ausgabe-Eigenschaft „supported“ berichtet über die Fähigkeit des Authentifikators, Blobs zu speichern.
- `"required"`: Das Berechtigungsnachweis wird mit einem Authentifikator erstellt, um Blobs zu speichern. Der `create()`-Aufruf schlägt fehl, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `publicKey`'s `extensions`-Eigenschaft eine `largeBlob`-Eigenschaft enthalten, die eine von zwei Untereigenschaften entweder `read` oder `write` enthält (`get()` schlägt fehl, wenn beide vorhanden sind):

Die `read`-Eigenschaft ist ein boolescher Wert. Ein Wert von `true` gibt an, dass die vertrauende Partei ein zuvor geschriebenes Blob abrufen möchte, das mit dem behaupteten Berechtigungsnachweis verknüpft ist:

```js
extensions: {
  largeBlob: {
    read: true;
  }
}
```

Die `write`-Eigenschaft nimmt einen Wert eines {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} an, der ein Blob darstellt, das die vertrauende Partei alongside einem bestehenden Berechtigungsnachweis speichern möchte:

```js
extensions: {
  largeBlob: {
    write: arrayBuffer;
  }
}
```

> [!NOTE]
> Für einen erfolgreichen Schreibauthentifizierungsbetrieb muss `publicKey.allowCredentials` nur ein einzelnes Element enthalten, das das Berechtigungsnachweis darstellt, welches das Blob alongside gespeichert werden soll.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn das registrierte Berechtigungsnachweis in der Lage ist, Blobs zu speichern:

```js
largeBlob: {
  supported: true; // false if it cannot store blobs
}
```

Ein `get()`-Leseaufruf macht das Blob im Erweiterungsausgang als ein {{jsxref("ArrayBuffer")}} verfügbar, wenn erfolgreich:

```js
largeBlob: {
  blob: arrayBuffer;
}
```

> [!NOTE]
> Wenn nicht erfolgreich, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreibaufruf gibt an, ob der Schreibvorgang erfolgreich war, mit einem `written` booleschen Wert in der Erweiterungsausgabe. Ein Wert von `true` bedeutet, dass es erfolgreich auf den zugehörigen Authentifikator geschrieben wurde, und `false` bedeutet, dass es nicht erfolgreich war.

```js
largeBlob: {
  written: true;
}
```

### `minPinLength`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authentifikator
- Spezifikation: [Minimum PIN Length Extension (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Ermöglicht es vertrauenden Parteien, die Mindest-PIN-Länge des Authentifikators abzufragen.

#### Eingabe

Die `publicKey`'s `extensions`-Eigenschaft muss eine `minPinLength`-Eigenschaft mit einem Wert von `true` enthalten:

```js
extensions: {
  minPinLength: true;
}
```

#### Ausgabe

Wenn die vertrauende Partei autorisiert ist, den Wert `minPinLength` zu erhalten (wenn ihr `rpId` in der autorisierten vertrauenden Parteienliste des Authentifikators vorhanden ist), werden die Authentikatordaten eine Darstellung davon in folgender Form enthalten:

```js
{"minPinLength": uint}
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert und kein `"minPinLength"`-Outputwert bereitgestellt.

### `payment`

- Verwendbar bei: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Benutzeragent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Ermöglicht es einer vertrauenden Partei, die Erstellung eines WebAuthn-Berechtigungsnachweises anzufordern, der möglicherweise – sowohl von der vertrauenden Partei als auch von anderen Parteien – mit der Secure Payment Confirmation genutzt werden kann; siehe [Secure Payment Confirmation verwenden](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs Wörterbuch](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert.

- `isPayment`
  - : Ein boolescher Wert, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [Vertrauende Partei](https://w3c.github.io/webauthn/#relying-party)-ID des zu verwendenden Berechtigungsnachweises. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `topOrigin`
  - : Der Ursprung des Top-Level-Frames. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeName`
  - : Der Name des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlungsempfängers, falls vorhanden, der dem Benutzer angezeigt wurde. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung.
- `total`
  - : Der Transaktionsbetrag, der dem Benutzer angezeigt wurde. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung. Der Gesamtbetrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die Instrumentendetails, die dem Benutzer angezeigt wurden. Nur bei der Authentifizierung verwendet; nicht bei der Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt mehrere Orte, an denen WebAuthn-Erweiterungen spezifiziert sind. IANA's [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, aber beachten Sie, dass einige möglicherweise veraltet sind.

Orte, an denen Erweiterungen spezifiziert sind:

- [Web Authentication Level 3, Section 10: Defined extensions](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [Client to Authenticator Protocol (CTAP) 2, Section 12: Defined Extensions](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-defined-extensions)

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen aufgeteilt – Erweiterungen, die während der Registrierung von Berechtigungsnachweisen ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen sind bei beiden Vorgängen nutzbar.

{{Compat}}
