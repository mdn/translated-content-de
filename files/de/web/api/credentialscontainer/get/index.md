---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann zur Authentifizierung eines Benutzers auf einer Website verwendet werden kann.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert beispielsweise, ob die Website einen Benutzer ohne eine sichtbare Aufforderung mit einem gespeicherten Credential anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Typen des angeforderten Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben. Wenn sie festgelegt sind, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein entsprechendes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzelnen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und die Benutzermediation erlaubt ist, wird der Browser den Benutzer auffordern, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften umfassen:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, wie der Benutzer an der Abholung des Credentials beteiligt ist. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprungsort der Anfragen präsentiert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Credentials; siehe [Autofill-Benutzeroberfläche](/de/docs/Web/API/Web_Authentication_API#autofill_ui) für weitere Details zur Nutzung.

        - `"optional"`
          - : Wenn Credentials für einen bestimmten Vorgang ohne Benutzermediation übergeben werden können, werden sie dies, was automatische Re-Authentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie zuversichtlich sind, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er ein Anmeldedialogfeld sieht — zum Beispiel auf einer Website, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf einen "Login/Registrieren"-Button geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen Sie die Benutzerautorisierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich erneut authentifiziert, wenn eine sensible Operation durchgeführt wird (wie die Bestätigung einer Kreditkartenzahlung), oder beim Benutzerwechsel.

        - `"silent"`
          - : Der Benutzer wird nicht aufgefordert, sich zu authentifizieren. Der Benutzeragent wird den Benutzer automatisch wieder authentifizieren und anmelden, wenn möglich. Wenn eine Zustimmung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer automatisch anmelden möchten, wenn er eine Webanwendung besucht, aber nicht, wenn das nicht möglich ist, ihn mit einem verwirrenden Anmeldedialogfeld zu konfrontieren. Stattdessen möchten Sie warten, bis er explizit auf einen "Login/Registrieren"-Button klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [föderierten Authentifizierungsanfrage (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Re-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter an den Identitätsanbieter (IdP) übermitteltt, der an den `id_assertion_endpoint` des IdP während der Validierung gesendet wird, und an die vertrauende Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft. Dies ist nützlich zur Leistungsbewertung, für Sicherheitsanforderungen (der IdP kann automatische Re-Authentifizierungsanfragen ablehnen und immer Benutzermediation verlangen) und für das allgemeine Nutzererlebnis (ein IdP oder RP kann unterschiedliche Benutzererfahrungen für automatische und nicht-automatische Anmeldeerfahrungen darstellen möchten).

    - `signal` {{optional_inline}}
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach dem Abschluss der Operation empfangen wird) oder mit dem Grund des Signals abgelehnt werden (welcher standardmäßig ein `AbortError`-[`DOMException`](/de/docs/Web/API/DOMException) ist, oder ein benutzerdefinierter Wert, wenn einer bei Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) bereitgestellt wurde).

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein Boolean-Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, unter Verwendung der [Föderierten Credential Management API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Diese Schnittstelle ist jetzt veraltet und Entwickler sollten bevorzugt die `identity`-Option verwenden, wenn verfügbar.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten föderierten Identitätsanbieter-Credentials darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die föderierten Identitätsanbieter-Credentials darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmal-Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [Behauptung signiert durch die Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) abgeschlossen wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) im `get()`-Aufruf angegeben wurde, wird das Browser-UI-Dialogfeld angezeigt und das Versprechen bleibt so lange ausstehend, bis der Benutzer ein Konto aus den verfügbaren Autofill-Vorschlägen auswählt, um sich damit anzumelden:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs ausführt, schließt es sich ohne Erfüllung oder Ablehnung des Versprechens und ohne eine für den Benutzer sichtbare Fehlerbedingung zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Anrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig ermittelt werden kann, wird das Versprechen mit `null` erfüllt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des mit dieser Methode verknüpften [`signal`](#signal)-Option [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen.
    Beachten Sie, dass, wenn der Aufrufer von `abort()` ein `reason`-Argument bereitgestellt hat, `get()` mit dem Wert von `reason` abgelehnt wird, anstatt mit einer `AbortController`-Ausnahme.

- `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde aufgrund eines automatisch abgelaufenen Zeitlimits durch [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren und lehnt mit einer Fehlerantwort ab, die Informationen zum Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Bei Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren ungültig/nicht gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, dass der Anmeldestatus des IdP dem RP offengelegt wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst in einer der folgenden Situationen:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen eines föderierten Identitäts-Credentials

Vertrauenswürdige Parteien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage an Benutzer zu stellen, sich über einen Identitätsanbieter (IdP) mittels Identitätsföderation bei der vertrauenden Partei anzumelden. Eine typische Anfrage würde folgendermaßen aussehen:

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

Weitere Details zur Funktionsweise finden Sie in der [Föderierten Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API). Dieser Aufruf startet den Anmeldevorgang, der im [FedCM-Anmeldevorgang](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, der die `context`- und `loginHint`-Erweiterungen einschließt, würde wie folgt aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird das von `CredentialsContainer.get()` zurückgegebene Versprechen abgelehnt:

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

### Abrufen eines öffentlichen Schlüssel-Credentials

Das folgende Snippet zeigt einen typischen `get()`-Aufruf mit der `publicKey`-Option von WebAuthn:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Versprechen zurück, das mit einer Instanz eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekt erfüllt wird, das ein zuvor über ein WebAuthn-`create()` erstelltes öffentliches Schlüssel-Credential darstellt und jetzt zur Authentifizierung eines Benutzers verwendet wurde. Dessen [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugang zu mehreren nützlichen Informationen bietet, einschließlich der Authenticator-Daten, der Signatur und der Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `Signatur`, um den Nachweis zu erbringen, dass der Authenticator über den echten privaten Schlüssel verfügt, der zur Erstellung des Credentials verwendet wurde, und die `userHandle`, um den Benutzer mit dem Credential, Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der Gesamtfluss funktioniert.

### Abrufen eines Einmal-Passwortes

Der folgende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Versprechen mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements festgelegt, das dann übermittelt wird.

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

### Implementieren eines Zeitlimits

In diesem Beispiel verwenden wir [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static), um die Anfrage automatisch abzubrechen, wenn sie länger als 10 Sekunden dauert.

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
