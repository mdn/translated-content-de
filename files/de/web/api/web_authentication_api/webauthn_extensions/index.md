---
title: Web Authentication Erweiterungen
slug: Web/API/Web_Authentication_API/WebAuthn_extensions
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{DefaultAPISidebar("Web Authentication API")}}

Die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verfügt über ein System von Erweiterungen – zusätzliche Funktionalitäten, die während der Erzeugung von Anmeldedaten ([`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)) oder Authentifizierungsoperationen ([`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) angefordert werden können. Dieser Artikel erklärt, wie WebAuthn-Erweiterungen angefordert und Informationen über die Antworten dieser Anfragen abgerufen werden können, sowie die verfügbaren Erweiterungen – einschließlich Browser-Kompatibilität und erwarteter Eingaben und Ausgaben.

## Anleitung zur Nutzung von WebAuthn-Erweiterungen

Bei der Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) kann das `publicKey`-Objektparameter, das erforderlich ist, um einen WebAuthn-Fluss zu initiieren, eine `extensions`-Eigenschaft enthalten. Der Wert von `extensions` ist selbst ein Objekt, dessen Eigenschaften die Eingabewerte für alle Erweiterungen sind, die die vertrauende Partei in der aufgerufenen Methode anfordern möchte.

Im Hintergrund werden die Eingaben vom User-Agent und/oder dem Authentifikator verarbeitet.

Zum Beispiel könnten wir in einem `publicKey`-Objekt für einen `create()`-Aufruf die Verwendung zweier Erweiterungen anfordern:

1. Die `credProps` Erweiterung. Vertrauende Parteien setzen `credProps` ein, um den Browser zu veranlassen, der vertrauenden Partei zu melden, ob die Anmeldedaten nach der Registrierung ortsansässig/auffindbar sind. Dies ist nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird. Hierfür muss auch `publicKey.extensions.credProps = true` gesetzt werden, wodurch die Anmeldedaten, je nach verwendeter Authentifikatortyp, auffindbar werden (beispielsweise würde ein FIDO2-Authenticator sie typischerweise auffindbar machen; FIDO1/U2F-Sicherheitsschlüssel wären nicht auffindbar). `credProps` wird nur vom User-Agent verarbeitet.
2. Die `minPinLength`-Erweiterung erlaubt es vertrauenden Parteien, die minimale PIN-Länge des Authenticator anzufordern. Dafür muss `extensions.minPinLength` auf `true` gesetzt werden. `minPinLength` wird vom Authenticator verarbeitet, wobei der User-Agent nur die Eingabedaten an ihn weiterleitet.

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

Wir können dann das `publicKey`-Objekt in einen `create()`-Aufruf übergeben, um den Fluss zur Erstellung von Anmeldedaten zu initiieren:

```js
navigator.credentials.create({ publicKey });
```

## Abrufen der Ergebnisse von Erweiterungsanfragen

Wenn erfolgreich, wird der `create()`-Aufruf ein {{jsxref("Promise")}} zurückgeben, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt aufgelöst wird. Sobald die Erweiterungsverarbeitung abgeschlossen ist, werden die Ergebnisse der Verarbeitung in der Antwort mitgeteilt (obwohl nicht in allen Fällen – es ist möglich, dass Erweiterungen keine Ausgabe haben).

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

Wie im obigen Code-Snippet gezeigt, gibt es zwei verschiedene Orte, an denen Sie Ihre Ausgabeerweiterungsergebnisse finden können:

1. Sie können die Ergebnisse der clientbasierten (User-Agent) Erweiterungsverarbeitung abrufen, indem Sie die Methode [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) aufrufen. Dies gibt eine {{jsxref("Map", "Karte")}} zurück, mit jedem Eintrag als Erweiterungsbezeichner-String als Schlüssel und der Ausgabe der Erweiterungsverarbeitung durch den Client als Wert. Im obigen Beispiel würde, wenn der Browser die `credProps`-Erweiterung unterstützt und diese korrekt verarbeitet wurde, das `myClientExtResults` Kartenobjekt einen Eintrag, `"credProps"`, mit einem Wert von `{ rk: true }` enthalten. Dies würde bestätigen, dass die erstellten Anmeldedaten tatsächlich auffindbar sind.

2. Sie können die Ergebnisse der Authenticator-Erweiterungsverarbeitung in den Authentifikationsdaten für die Operation finden:

   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `create()`-Aufrufen zurückgegeben werden, kann dies über einen Aufruf von [`publicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegeben werden.
   - Im Fall von `PublicKeyCredential`s, die aus erfolgreichen `get()`-Aufrufen zurückgegeben werden, kann dies in der [`publicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Eigenschaft gefunden werden.

   Authenticator-Daten liegen in Form eines {{jsxref("ArrayBuffer")}} mit einer konsistenten Struktur vor – siehe [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data). Die Authenticator-Erweiterungsergebnissedaten befinden sich immer in einem Abschnitt am Ende, dargestellt als eine [CBOR-Karte](https://cbor.io/), die die Ergebnisse darstellt. Siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) für eine detaillierte Beschreibung der kompletten Authenticator-Datenstruktur.

   Zurück zu unserem Beispiel: Wenn die vertrauende Partei berechtigt ist, den `minPinLength` Wert zu erhalten, würden die Authenticator-Daten eine Darstellung davon in folgender Form enthalten: `"minPinLength": uint`.

## Verfügbare Erweiterungen

Die untenstehenden Erweiterungen stellen keine vollständige Liste aller verfügbaren Erweiterungen dar. Wir haben uns dazu entschieden, Erweiterungen zu dokumentieren, von denen wir wissen, dass sie standardisiert und von mindestens einer Rendering-Engine unterstützt werden.

### `appid`

- Verwendbar in: Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: User-Agent
- Spezifikation: [FIDO AppID Erweiterung (appid)](https://w3c.github.io/webauthn/#sctn-appid-extension)

Erlaubt es einer vertrauenden Partei, einen Nachweis für eine Anmeldedaten zu erstellen, die zuvor mit der veralteten FIDO U2F JavaScript API registriert wurden, um die Neuerstellung der Anmeldedaten zu vermeiden. Das `appid` ist das Äquivalent zu `rpId` in WebAuthn (obwohl zu beachten ist, dass `appid`s in Form von URLs vorliegen, während `rpId`s in Form von Domains vorliegen).

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appid` Eigenschaft enthalten, deren Wert der Anwendungsidentifikator ist, der in der veralteten API verwendet wurde. Zum Beispiel:

```js
({
  extensions: {
    appid: "https://accounts.example.com",
  },
});
```

Sie müssen auch die FIDO U2F Anmeldedaten-IDs in der `allowCredentials` Eigenschaft des `publicKey` auflisten, zum Beispiel:

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

Gibt `appid: true` zurück, wenn `appid` erfolgreich für die Behauptung verwendet wurde, oder `appid: false` andernfalls.

### `appidExclude`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: User-Agent
- Spezifikation: [FIDO AppID Ausschluss Erweiterung (appidExclude)](https://w3c.github.io/webauthn/#sctn-appid-exclude-extension)

Erlaubt es einer vertrauenden Partei, Authenticatoren auszuschließen, die bestimmte Anmeldedaten enthalten, die zuvor mit der veralteten FIDO U2F JavaScript API registriert wurden. Dies ist notwendig, da standardmäßig der Inhalt des `excludeCredentials`-Feldes als WebAuthn-Anmeldedaten angesehen wird. Wenn diese Erweiterung verwendet wird, können Sie veraltete FIDO U2F Anmeldedaten in `excludeCredentials` aufnehmen, und sie werden als solche erkannt.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `appidExclude` Eigenschaft enthalten, deren Wert der Identifikator der vertrauenden Partei ist, die den Ausschluss von Authenticatoren durch veraltete FIDO U2F-Anmeldedaten anfordert. Zum Beispiel:

```js
({
  extensions: {
    appidExclude: "https://accounts.example.com",
  },
});
```

Sie können dann FIDO U2F Anmeldedaten in der Eigenschaft `excludeCredentials` des `publicKey` auflisten, zum Beispiel:

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

Gibt `appidExclude: true` zurück, wenn die Erweiterung angewendet wurde, oder `appidExclude: false` andernfalls.

### `credProps`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: User-Agent
- Spezifikation: [Anmeldedaten Eigenschaften Erweiterung (credProps)](https://w3c.github.io/webauthn/#sctn-authenticator-credential-properties-extension)

Ermöglicht es einer vertrauenden Partei, zusätzliche Informationen/Eigenschaften über die erstellte Anmeldedaten anzufordern. Dies ist derzeit nur nützlich, wenn `create()` mit `publicKey.authenticatorSelection.residentKey = "preferred"` aufgerufen wird; es fordert Informationen darüber an, ob die erstellte Anmeldedaten auffindbar sind.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credProps` Eigenschaft mit dem Wert `true` enthalten:

```js
({
  extensions: {
    credProps: true,
  },
});
```

Sie müssen auch `authenticatorSelection.requireResidentKey` auf `true` setzen, was anzeigt, dass ein ortsansässiger Schlüssel erforderlich ist.

```js
{(authenticatorSelection: {
  requireResidentKey: true
})}
```

#### Ausgabe

Gibt Folgendes zurück, wenn die registrierte [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) eine clientseitig auffindbare Anmeldedaten ist:

```js
({
  credProps: {
    rk: true,
  },
});
```

Wenn `rk` auf `false` in der Ausgabe gesetzt ist, handelt es sich um eine serverseitige Anmeldedaten. Wenn `rk` nicht in der Ausgabe vorhanden ist, ist nicht bekannt, ob die Anmeldedaten clientseitig auffindbar oder serverseitig ist.

### `credProtect`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Anmeldedaten Schutz (credProtect)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-credProtect-extension)

Erlaubt es einer vertrauenden Partei, eine minimale Anmeldedatenschutzrichtlinie beim Erstellen einer Anmeldedaten festzulegen.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `credentialProtectionPolicy` Eigenschaft enthalten, die das Schutzniveau der zu erstellenden Anmeldedaten angibt, und eine boolesche `enforceCredentialProtectionPolicy` Eigenschaft, die angibt, ob der `create()` Aufruf scheitern soll, anstatt eine Anmeldedaten zu erstellen, die nicht der angegebenen Richtlinie entspricht:

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
  - : Benutzerüberprüfung ist optional. Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x01`.
- `"userVerificationOptionalWithCredentialIDList"`
  - : Benutzerüberprüfung ist nur optional, wenn die Anmeldedaten auffindbar sind (d.h. sie sind clientseitig auffindbar). Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x02`.
- `"userVerificationRequired"`
  - : Benutzerüberprüfung ist immer erforderlich. Der entsprechende `credProtect`-Wert, der an den Authenticator zur Verarbeitung gesendet wird, ist `0x03`.

> [!NOTE]
> Chromium wird standardmäßig `userVerificationOptionalWithCredentialIDList` oder `userVerificationRequired` anfordern, abhängig von der Anforderungsart:
>
> - Chromium wird beim Erstellen einer Anmeldedaten einen Schutzgrad von `userVerificationOptionalWithCredentialIDList` anfordern, wenn `residentKey` auf `preferred` oder `required` gesetzt ist. (Die Einstellung `requireResidentKey` wird als erforderlich behandelt.) Dies stellt sicher, dass der einfache physische Besitz eines Sicherheitsschlüssels nicht die Abfrage der Anwesenheit einer auffindbaren Anmeldedaten für eine bestimmte `rpId` ermöglicht.
> - Wenn `residentKey` zudem `required` ist und `userVerification` bevorzugt wird, wird der Schutzgrad auf `userVerificationRequired` erhöht. Dies stellt sicher, dass der physische Besitz eines Sicherheitsschlüssels keinen Anmeldungen bei einer Seite erlaubt, die keine Benutzerüberprüfung benötigt. (Dies ist kein vollständiger Schutz; Seiten sollten immer noch sorgfältig die Sicherheit ihrer Benutzer berücksichtigen.)
> - Wenn die Seite ein explizites `credProtect`-Niveau anfordert, wird dieser Wert diese Standardwerte überschreiben. Diese Standardwerte senken nie den Schutzgrad unter den Standardwert des Sicherheitsschlüssels, wenn dieser höher ist.
>
> Wenn der Wert von `enforceCredentialProtectionPolicy` auf `true` gesetzt ist, wird der `create()`-Aufruf fehlschlagen, wenn die Richtlinie nicht eingehalten werden kann (z.B. erfordert sie Benutzerüberprüfung, aber der Authenticator unterstützt keine Benutzerüberprüfung). Wenn er `false` ist, wird das System sein Bestes tun, um eine Anmeldedaten zu erstellen, die der Richtlinie entspricht, aber es wird dennoch eine erstellen, die so gut es geht der Richtlinie entspricht, wenn dies nicht möglich ist.

#### Ausgabe

Wenn der `create()`-Aufruf erfolgreich ist, werden die Authenticator-Daten eine Darstellung des `credProtect`-Wertes enthalten, der die festgelegte Richtlinie in folgender Form darstellt:

```js
({ credProtect: 0x01 });
```

### `largeBlob`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) und Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get))
- Verarbeitet von: User-Agent
- Spezifikation: [Große Blob-Speicher-Erweiterung (largeBlob)](https://w3c.github.io/webauthn/#sctn-large-blob-extension)

Erlaubt es einer vertrauenden Partei, Blobs, die mit einer Anmeldedaten verknüpft sind, auf dem Authenticator zu speichern – beispielsweise könnte sie Zertifikate direkt speichern wollen, anstatt einen zentralisierten Authentifizierungsdienst zu betreiben.

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

Der Wert der `support`-Eigenschaft ist ein String, der einer der folgenden sein kann:

- `"preferred"`: Das Anmeldedaten wird nach Möglichkeit mit einem Authenticator erstellt, der Blobs speichern kann, aber es wird immer noch eines erstellt, wenn nicht. Die Eigenschaft `supported` in der Ausgabe berichtet über die Fähigkeit des Authenticators, Blobs zu speichern.
- `"required"`: Die Anmeldedaten werden mit einem Authenticator erstellt, um Blobs zu speichern. Der `create()`-Aufruf wird scheitern, wenn dies nicht möglich ist.

Während eines `get()`-Aufrufs muss die `extensions`-Eigenschaft des `publicKey` eine `largeBlob`-Eigenschaft mit einer der beiden Untereigenschaften — `read` oder `write` (`get()` schlägt fehl, wenn beide vorhanden sind) enthalten:

Die `read`-Eigenschaft ist ein boolescher Wert. Ein Wert von `true` zeigt an, dass die vertrauende Partei ein zuvor geschriebenes Blob abrufen möchte, das mit der geltend gemachten Anmeldedaten verknüpft ist:

```js
({
  extensions: {
    largeBlob: {
      read: true,
    },
  },
});
```

Die `write`-Eigenschaft nimmt als Wert einen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}}, der einem Blob entspricht, den die vertrauende Partei zusammen mit einer vorhandenen Anmeldedaten speichern möchte:

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
> Damit ein Schreib-Authentifizierungsvorgang erfolgreich ist, muss `publicKey.allowCredentials` nur ein einziges Element enthalten, das die Anmeldedaten darstellt, neben dem Sie das Blob speichern möchten.

#### Ausgabe

Ein erfolgreicher `create()`-Aufruf liefert die folgende Erweiterungsausgabe, wenn die registrierten Anmeldedaten in der Lage sind, Blobs zu speichern:

```js
({
  largeBlob: {
    supported: true, // false if it cannot store blobs
  },
});
```

Ein `get()`-Leseruf macht das Blob als {{jsxref("ArrayBuffer")}} in der Erweiterungsausgabe verfügbar, wenn erfolgreich:

```js
({
  largeBlob: {
    blob: arrayBuffer,
  },
});
```

> [!NOTE]
> Wenn nicht erfolgreich, wird das `largeBlob`-Objekt zurückgegeben, aber `blob` wird nicht vorhanden sein.

Ein `get()`-Schreibruf gibt an, ob die Schreiboperation erfolgreich war, mit einem `written`-booleschen Wert in der Erweiterungsausgabe. Ein Wert von `true` bedeutet, dass es erfolgreich beim zugehörigen Authenticator geschrieben wurde, und `false` bedeutet, es war nicht erfolgreich.

```js
({
  largeBlob: {
    written: true,
  },
});
```

### `minPinLength`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: Authenticator
- Spezifikation: [Minimale PIN-Länge Erweiterung (minPinLength)](https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension)

Erlaubt es vertrauenden Parteien, die minimale PIN-Länge des Authenticators anzufordern.

#### Eingabe

Die `extensions`-Eigenschaft des `publicKey` muss eine `minPinLength`-Eigenschaft mit dem Wert `true` enthalten:

```js
({
  extensions: {
    minPinLength: true,
  },
});
```

#### Ausgabe

Wenn die vertrauende Partei berechtigt ist, den `minPinLength` Wert zu empfangen (wenn seine `rpId` auf der autorisierten Reliant-Party-Liste des Authenticators vorhanden ist), werden die Authenticator-Daten eine Darstellung davon in folgender Form enthalten:

```js
({ minPinLength: uint });
```

Wenn die vertrauende Partei nicht autorisiert ist, wird die Erweiterung ignoriert, und kein `"minPinLength"`-Ausgabewert wird bereitgestellt.

### `payment`

- Verwendbar in: Registrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create))
- Verarbeitet von: User-Agent
- Spezifikation: [Secure Payment Confirmation](https://w3c.github.io/secure-payment-confirmation/)

Erlaubt es einer vertrauenden Partei, die Erstellung einer WebAuthn-Anmeldedaten zu beantragen, die – sowohl von der vertrauenden Partei als auch von anderen Parteien – mit der sicheren Zahlungsbestätigung verwendet werden kann; siehe [Verwendung der sicheren Zahlungsbestätigung](/de/docs/Web/API/Payment_Request_API/Using_secure_payment_confirmation).

#### Eingabe

Die Eingaben für die `payment`-Erweiterung sind im [AuthenticationExtensionsPaymentInputs dictionary](https://w3c.github.io/secure-payment-confirmation/#dictdef-authenticationextensionspaymentinputs) definiert

- `isPayment`
  - : Ein boolescher Wert, der anzeigt, dass die Erweiterung aktiv ist.
- `rpID`
  - : Die [Reliant-Party](https://w3c.github.io/webauthn/#relying-party) ID der Anmeldedaten, die verwendet werden. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `topOrigin`
  - : Der Ursprung des oberen Frames. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeName`
  - : Der Name des Zahlenden, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `payeeOrigin`
  - : Der Ursprung des Zahlenden, falls vorhanden, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung.
- `total`
  - : Der Transaktionsbetrag, der dem Benutzer angezeigt wurde. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Der Totalbetrag ist vom Typ [PaymentCurrencyAmount](https://w3c.github.io/payment-request/#dom-paymentcurrencyamount).
- `instrument`
  - : Die Instrumentdetails, die dem Benutzer angezeigt wurden. Wird nur zur Authentifizierungszeit verwendet; nicht zur Registrierung. Das Instrument ist vom Typ [PaymentCredentialInstrument](https://w3c.github.io/secure-payment-confirmation/#dictdef-paymentcredentialinstrument).

#### Ausgabe

Keine

## Spezifikationen

Es gibt mehrere Stellen, an denen WebAuthn-Erweiterungen spezifiziert sind. IANAs [WebAuthn Extension Identifiers](https://www.iana.org/assignments/webauthn/webauthn.xhtml#webauthn-extension-ids) bietet ein Register aller Erweiterungen, aber beachten Sie, dass einige möglicherweise veraltet sein können.

{{Specifications}}

## Browser-Kompatibilität

Die Kompatibilitätsdaten für WebAuthn-Erweiterungen wurden in zwei Tabellen unterteilt – Erweiterungen, die während der Anmeldedatenregistrierung ([`create()`](/de/docs/Web/API/CredentialsContainer/create)) verwendet werden können, und Erweiterungen, die während der Authentifizierung ([`get()`](/de/docs/Web/API/CredentialsContainer/get)) verwendet werden können. Einige Erweiterungen können bei beiden Vorgängen verwendet werden.

{{Compat}}
