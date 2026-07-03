---
title: "CredentialsContainer: get()-Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, welches Folgendes enthalten kann:

- Eine Eigenschaft `mediation`, die angibt, wie und ob der Benutzer an der Operation teilnehmen soll. Dies steuert beispielsweise, ob die Seite einen Benutzer ohne sein Wissen mit einem gespeicherten Credential anmelden kann.
- Eine Eigenschaft `signal`, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Credential des angeforderten Typs zu finden.

Das API erfüllt immer mit einem einzigen Credential oder `null`. Wenn mehrere Credentials verfügbar sind und eine Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, wie der Benutzer in die Abrufung des Credentials eingebunden wird. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Gefundene Credentials werden dem Benutzer in einem nicht modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung, der die Credentials anfordert, angezeigt. In der Praxis bedeutet dies, dass verfügbare Credentials automatisch ausgefüllt werden; siehe [Autofill-UI](/de/docs/Web/API/Web_Authentication_API#autofill_ui) für weitere Details zur Nutzung.

        - `"optional"`
          - : Wenn Credentials ohne Benutzermediation für eine gegebene Operation übergeben werden können, wird dies geschehen und die automatische Re-Authentifizierung ermöglicht, ohne dass eine Benutzermediation erforderlich ist. Wenn eine Benutzermediation erforderlich ist, wird der Benutzer-Agent den Benutzer zur Authentifizierung bitten. Dieser Wert ist für Situationen gedacht, in denen Sie mit vertretbarem Vertrauen davon ausgehen können, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn er ein Anmeldedialogfeld sieht — zum Beispiel auf einer Website, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf einen "Login/Signup"-Button geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie die Benutzer-Authentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass sich ein Benutzer erneut authentifiziert, wenn eine sensible Operation ausgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder wenn der Benutzer gewechselt wird.

        - `"silent"`
          - : Der Benutzer wird nicht aufgefordert, sich zu authentifizieren. Der Benutzer-Agent wird den Benutzer automatisch erneut authentifizieren und ihn wenn möglich einloggen. Wenn eine Zustimmung erforderlich ist, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer beim Besuch einer Web-App automatisch anmelden möchten, wenn möglich, jedoch falls nicht, möchten Sie ihm kein verwirrendes Anmeldedialogfeld präsentieren. Stattdessen möchten Sie warten, bis der Benutzer explizit auf einen "Login/Signup"-Button klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [föderierten Authentifizierungsanfrage (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Re-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP gesendet wird, sowie der relying party (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft. Dies ist nützlich für Leistungsbewertungen, Sicherheitsanforderungen (der IdP könnte automatische Re-Authentifizierungsanfragen ablehnen und immer eine Benutzermediation verlangen) und allgemeine UX (ein IdP oder RP könnte verschiedene UX für automatische und nicht-automatische Login-Erlebnisse präsentieren wollen).

    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal beendet werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation eingegangen ist) oder mit dem Grund des Signals abgelehnt werden (dies ist standardmäßig ein `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) oder ein benutzerdefinierter Wert, wenn ein solcher bei Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) angegeben wurde).

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es handelt sich um einen booleschen Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätscredential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, unter Verwendung der [Federated Credential Management API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitätscredential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Dieses Interface ist jetzt veraltet, und Entwickler sollten bevorzugen, die `identity`-Option zu verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten föderierten Identitätsanbieter-Credentials darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die föderierten Identitätsanbieter der Credentials darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, welches nur den Stringwert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [Signatur mit der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) auflöst:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) im `get()`-Aufruf angegeben wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt ausstehend, bis der Benutzer ein Konto zum Anmelden von den verfügbaren automatischen Ausfüllvorschlägen auswählt:

- Falls der Nutzer dann außerhalb des Browser-UI-Dialogs eine Geste macht, schließt er sich, ohne das Promise zu erfüllen oder abzulehnen, und ohne einen für den Nutzer sichtbaren Fehlerzustand zu verursachen.
- Wenn der Nutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) dem Aufrufer zurückgegeben.

Wenn kein einzelnes Credential eindeutig gefunden werden kann, löst sich das Promise mit `null` auf.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anforderung wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des zugehörigen [`signal`](#signal)-Options des [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen.
    Beachten Sie, dass, wenn der Aufrufer von `abort()` ein `reason`-Argument bereitgestellt hat, dann wird `get()` mit dem Wert von `reason` statt mit einer `AbortController`-Ausnahme abgelehnt.

- `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde automatisch aufgrund eines durch das Aufrufen von [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) gesetzten Timeout abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Wenn eine Anfrage für ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) gestellt wird, kann die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und lehnt ab mit einer Fehlermeldung, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "identity provider")}} (IdP) innerhalb von 60 Sekunden nicht geantwortet, die bereitgestellten Anmeldeinformationen waren nicht gültig oder wurden nicht gefunden, oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Aktualisierung des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es zu einer Verzögerung der Ablehnung kommen, um ein Lecken des IdP-Anmeldestatus gegenüber der RP zu vermeiden.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst in einer der folgenden Situationen:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domain ist nicht gültig.

## Beispiele

### Abrufen eines föderierten Identitätscredentials

Relying-Partien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, bei der sich Benutzer über einen Identitätsanbieter (IdP) bei der Relying-Partei anmelden, indem sie die Identitätsföderation verwenden. Eine typische Anfrage wäre wie folgt:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
        },
      ],
    },
  });
}
```

Für weitere Details, wie dies funktioniert, schauen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) an. Dieser Aufruf startet den in [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschriebenen Anmeldefluss.

Ein ähnlicher Aufruf einschließlich der Erweiterungen `context` und `loginHint` würde wie folgt aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {/* IdP-specific parameters */},
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validieren kann, lehnt er das von `CredentialsContainer.get()` zurückgegebene Promise ab:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            params: {/* IdP-specific parameters */},
          },
        ],
      },
    });
  } catch (e) {
    // Handle the error in some way, for example provide information
    // to help the user succeed in a future sign-in attempt
    console.error(e);
  }
}
```

### Abrufen eines Public-Key-Credentials

Der folgende Ausschnitt zeigt einen typischen `get()`-Aufruf mit der WebAuthn-`publicKey`-Option:

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* ,… */]),
  rpId: "acme.com",
  allowCredentials: [
    {
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* ,… */]),
    },
  ],
  userVerification: "required",
};

navigator.credentials.get({ publicKey });
```

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz erfüllt wird, die ein zuvor erstelltes Public-Key-Credential über einen WebAuthn-`create()`-Aufruf darstellt, das jetzt zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, der Signatur und des Benutzerhandles.

```js
navigator.credentials.get({ publicKey }).then((publicKeyCredential) => {
  const response = publicKeyCredential.response;

  // Access authenticator data ArrayBuffer
  const authenticatorData = response.authenticatorData;

  // Access client JSON
  const clientJSON = response.clientDataJSON;

  // Access signature ArrayBuffer
  const signature = response.signature;

  // Access userHandle ArrayBuffer
  const userHandle = response.userHandle;
});
```

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Beweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der verwendet wurde, um das Credential zu erstellen, und der `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, welches dann übermittelt wird.

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

### Implementierung eines Timeouts

In diesem Beispiel verwenden wir [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static), um die Anfrage automatisch abzubrechen, falls sie länger als 10 Sekunden dauert.

```js
async function authenticateUser() {
  const publicKey = {
    challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* ,… */]),
    rpId: "acme.com",
    allowCredentials: [
      {
        type: "public-key",
        id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* ,… */]),
      },
    ],
    userVerification: "required",
  };

  try {
    const credential = await navigator.credentials.get({
      publicKey,
      signal: AbortSignal.timeout(10000), // Abort after 10 seconds
    });
    console.log("Authentication successful:", credential);
  } catch (err) {
    if (err.name === "TimeoutError") {
      console.error("The authentication request timed out.");
    } else if (err.name === "AbortError") {
      console.log("The request was cancelled by the user.");
    } else {
      console.error("An unexpected error occurred:", err);
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
