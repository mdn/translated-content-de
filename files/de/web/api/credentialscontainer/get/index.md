---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann genutzt werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einziges optionales `options` Argument, das Folgendes enthalten kann:

- Eine `mediation` Eigenschaft, die anzeigt, wie und ob der Benutzer gebeten werden soll, an der Operation teilzunehmen. Dies steuert beispielsweise, ob die Website einen Benutzer ohne Sichtkontakt mit einem gespeicherten Anmeldeinformationen anmelden kann.
- Eine `signal` Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Anmeldeinformationen](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Sind sie gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um eine passende Anmeldeinformation des angeforderten Typs zu finden.

Die API wird immer mit einer einzigen Anmeldeinformation oder `null` erfüllt. Wenn mehrere Anmeldeinformationen verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, eine einzige Anmeldeinformation auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, wie der Benutzer in die Wiedererlangung der Anmeldeinformation eingebunden wird. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Entdeckte Anmeldeinformationen werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprungsort der Anmeldeanforderung präsentiert. Praktisch bedeutet dies das automatische Ausfüllen verfügbarer Anmeldeinformationen; sehen Sie sich [Autofill UI](/de/docs/Web/API/Web_Authentication_API#autofill_ui) für weitere Details an, wie dies verwendet wird.

        - `"optional"`
          - : Wenn Anmeldeinformationen für einen bestimmten Vorgang ohne Benutzermediation übergeben werden können, werden sie dies tun, was eine automatische Wiederverifizierung ohne Benutzermediation ermöglicht. Ist eine Benutzermediation erforderlich, wird der Benutzeragent den Benutzer um Authentifizierung bitten. Dieser Wert ist für Situationen gedacht, in denen man vernünftigerweise sicher sein kann, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn er ein Anmeldedialogfeld sieht — z.B. auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf einen „Login/Signup“-Button geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer gebeten, sich zu authentifizieren. Dieser Wert ist für Situationen gedacht, in denen man die Benutzerauthentifizierung erzwingen möchte — z.B. wenn man möchte, dass sich ein Benutzer bei einer sensiblen Operation erneut authentifiziert (wie z.B. Bestätigen einer Kreditkartenzahlung) oder beim Wechseln von Benutzern.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung gebeten. Der Benutzeragent wird den Benutzer automatisch wiederverifizieren und wenn möglich anmelden. Ist eine Zustimmung erforderlich, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen man einen Benutzer beim Besuch einer Web-App automatisch anmelden möchte, wenn möglich, aber wenn nicht, möchte man ihnen kein verwirrendes Anmeldedialogfeld präsentieren. Stattdessen wartet man darauf, dass sie explizit auf einen „Login/Signup“-Button klicken.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer Anfrage zur [federierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation` Wert von `optional` oder `silent` zu einem Versuch der [automatischen Wiederverifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) Parameter mitgeteilt, der während der Validierung an den IdP gesendet wird, und der vertrauenden Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft. Dies ist nützlich für Leistungsbewertung, Sicherheitsanforderungen (der IdP kann automatische Wiederverifizierungsanforderungen ablehnen und immer Benutzermediation erfordern) und allgemeines UX (ein IdP oder RP kann unterschiedliche UX für automatische und nicht-automatische Anmeldungserlebnisse präsentieren wollen).

    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die eine laufende `get()` Operation abbrechen lässt. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit dem Grund des Signals (was standardmäßig ein `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) ist, oder ein benutzerdefinierter Wert, wenn einer beim Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) angegeben wurde) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option bittet den Browser, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt abzurufen. Es handelt sich um einen booleschen Wert.
    - `identity` {{optional_inline}}
      - : Diese Option bittet den Browser, eine [federierte Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt abzurufen, unter Verwendung der [Federated Credential Management API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions) Objekt, das Details zu den spezifischen Identitätsanbietern enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option bittet den Browser, eine [federierte Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Dieses Interface ist nun überholt, und Entwickler sollten die Option `identity` bevorzugen, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Anmeldedaten der federierten Identitätsanbieter darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die Anmeldedaten der federierten Identitätsanbieter darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option bittet den Browser, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option bittet den Browser, eine [Signatur unter Verwendung der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) im `get()` Aufruf angegeben wurde, wird das Browser-UI-Dialog angezeigt und das Versprechen bleibt ausstehend, bis der Benutzer ein Konto aus den verfügbaren AutoFill-Vorschlägen auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt sich dieser, ohne das Versprechen aufzulösen oder abzulehnen und ohne eine benutzersichtbare Fehlerbedingung zu verursachen.
- Wenn der Benutzer eine Anmeldeinformation wählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Wenn keine einzelne Anmeldeinformation eindeutig erlangt werden kann, wird das Versprechen mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des mit dieser Methode verknüpften [`signal`](#signal) Option [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen. Beachten Sie, dass, wenn der Anrufer von `abort()` ein `reason` Argument übergeben hat, dann wird `get()` mit dem Wert von `reason` abgelehnt, anstelle einer `AbortController` Ausnahme.

- `TimeoutError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde automatisch aufgrund eines über [`AbortSignal.timeout()`](/de/docs/Web/API/AbortSignal/timeout_static) eingestellten Zeitlimits abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Wenn eine [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, ist die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlerantwort ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wenn eine [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) innerhalb von 60 Sekunden nicht geantwortet, die bereitgestellten Anmeldeinformationen waren nicht gültig/gefunden, oder der Anmeldestatus im Browser für den IdP ist auf `"logged-out"` gesetzt (sehen Sie [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM Anmeldestatus). Im letzteren Fall kann es eine gewisse Verzögerung bei der Ablehnung geben, um den Anmeldestatus des IdP nicht an die RP weiterzugeben.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [opaker Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen einer federierten Identitätsanmeldedaten

Vertrauende Parteien können `get()` mit der `identity` Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer bei der vertrauenden Partei über einen Identitätsanbieter (IdP) unter Verwendung der Identitätsföderation anmelden. Ein typischer Antrag könnte so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
        },
      ],
    },
  });
}
```

Schauen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details an, wie dies funktioniert. Dieser Aufruf wird den Anmeldevorgang starten, der im [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, einschließlich der `context` und `loginHint` Erweiterungen, würde so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          params: {
            /* IdP-specific parameters */
          },
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validieren kann, wird das Versprechen, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            params: {
              /* IdP-specific parameters */
            },
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

### Abrufen einer öffentlichen Schlüssel-Anmeldedaten

Der folgende Ausschnitt zeigt einen typischen `get()` Aufruf mit der WebAuthn `publicKey` Option:

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

Ein erfolgreicher `get()` Aufruf gibt ein Versprechen zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, die eine zuvor über ein WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellte öffentliche Schlüssel-Anmeldedaten darstellt, die nun zur Authentifizierung eines Benutzers verwendet wurde. Die [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich Authenticator-Daten, Signatur und Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Anmeldedatensatzes verwendet wurde, und der `userHandle`, um den Benutzer mit dem Anmeldedatensatz, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen darüber, wie der Gesamtfluss funktioniert.

### Abrufen eines Einmalpassworts

Der folgende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Versprechen mit einem `OTPCredential` Objekt aufgelöst. Der enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt, das anschließend übermittelt wird.

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

### Implementieren eines Timeouts

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
