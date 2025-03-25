---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, das dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options` Argument, welches folgendes beinhalten kann:

- Eine `mediation` Eigenschaft, die angibt, ob und wie der Benutzer an der Operation teilnehmen soll. Diese kontrolliert beispielsweise, ob die Seite einen Benutzer stillschweigend mit einem gespeicherten Credential anmelden kann.
- Eine `signal` Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Credential des angeforderten Typs zu finden.

Die API erfüllt immer mit einem einzelnen Credential oder `null`. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer auffordern, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann folgende Eigenschaften enthalten:

    - `mediation` {{optional_inline}}

      - : Ein String, der angibt, ob der Benutzer bei jedem Besuch einer Client-App zur Anmeldung aufgefordert wird. Der Wert kann einer der folgenden sein:

        - `"conditional"`

          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einer Angabe des Ursprungs, der die Credentials anfordert, präsentiert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Credentials; siehe [Mit einem Zeigeschlüssel durch automatisches Ausfüllen des Formulars anmelden](https://web.dev/articles/passkey-form-autofill) für weitere Details zur Verwendung; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls hilfreiche Informationen.

        - `"optional"`

          - : Wenn Credentials ohne Benutzermediation für eine bestimmte Operation übergeben werden können, wird dies geschehen, was eine automatische Reauthentifizierung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer um Authentifizierung bitten. Dieser Wert ist für Situationen gedacht, in denen Sie mit angemessener Sicherheit davon ausgehen können, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn er ein Login-Dialogfeld sieht — zum Beispiel auf einer Website, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf eine "Login/Anmelden"-Schaltfläche geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen vorgesehen, in denen Sie die Benutzerauthentifizierung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich neu authentifiziert, wenn eine sensible Operation ausgeführt wird (wie das Bestätigen einer Kreditkartenzahlung) oder wenn Benutzer gewechselt werden.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer, wenn möglich, automatisch erneut authentifizieren und anmelden. Wenn Zustimmung erforderlich ist, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer beim Besuch einer Web-App automatisch anmelden möchten, wenn möglich. Wenn nicht, möchten Sie ihm kein verwirrendes Login-Dialogfeld anzeigen. Stattdessen sollten Sie warten, bis er ausdrücklich auf eine "Login/Anmelden"-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Fall einer [federierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API)-Anfrage kann ein `mediation` Wert von `optional` oder `silent` zu einem Versuch der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschehen ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) Parameter mitgeteilt, der während der Validierung an den `id_assertion_endpoint` des IdP gesendet wird, und der vertrauenden Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected) Eigenschaft. Dies ist nützlich für die Leistungsevaluation, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische Reauthentifizierungsanforderungen ablehnen und immer Benutzermediation verlangen) und allgemeine UX (ein IdP oder RP könnte unterschiedliche UX für automatische und nicht-automatische Login-Erfahrungen präsentieren wollen).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt, das es ermöglicht, eine laufende `get()` Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt abzurufen. Es handelt sich um einen booleschen Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt abzurufen, unter Verwendung der [FedCM API](/de/docs/Web/API/FedCM_API).

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions) Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Diese Schnittstelle ist jetzt veraltet, und Entwickler sollten bevorzugt die `identity` Option verwenden, wenn diese verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, das die Protokolle der angeforderten federierten Identitätsanbieter-Credentials repräsentiert (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, das die federierten Identitätsanbieter der Credentials repräsentiert (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmal-Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Behauptung, die unter Verwendung der Web Authentication API signiert wurde](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions), als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [conditionale Mediation](#mediation) im `get()` Aufruf angegeben wurde, wird der Browser-UI-Dialog angezeigt und das Promise bleibt ausstehend, bis der Benutzer ein Konto für die Anmeldung aus den verfügbaren Autovervollständigungsvorschlägen auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt dieser sich, ohne das Promise aufzulösen oder abzulehnen und ohne einen benutzerwahrgenommenen Fehlerzustand zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) dem Aufrufer zurückgegeben.

Wenn kein einzelnes Credential eindeutig abgerufen werden kann, wird das Promise mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des mit dieser Methode assoziierten [`AbortController`](/de/docs/Web/API/AbortController) über die [`signal`](#signal) Option abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Beim Anfordern eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) konnte die Anfrage an den [ID Behauptungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und wird mit einer Fehlermeldung abgelehnt, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Beim Anfordern eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) antwortete der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden, die bereitgestellten Credentials waren ungültig/nicht gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Aktualisieren des Anmeldestatus mit der Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um zu vermeiden, dass der IdP-Anmeldestatus an die RP durchsickert.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird in einer der folgenden Situationen ausgelöst:

    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Verwendung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [undurchsichtiger Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domäne ist keine gültige Domäne.

## Beispiele

### Abrufen eines federierten Identitäts-Credentials

Vertrauensparteien können `get()` mit der `identity` Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer bei der Vertrauenspartei über einen Identitätsanbieter (IdP) anmelden, unter Verwendung einer Identitätsföderation. Eine typische Anfrage könnte so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
        },
      ],
    },
  });
}
```

Sehen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für detailliertere Informationen an. Dieser Aufruf startet den Anmeldevorgang, der im [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, der die `context` und `loginHint` Erweiterungen einschließt, würde so aussehen:

```js
async function signIn() {
  const identityCredential = await navigator.credentials.get({
    identity: {
      context: "signup",
      providers: [
        {
          configURL: "https://accounts.idp.example/config.json",
          clientId: "********",
          nonce: "******",
          loginHint: "user1@example.com",
        },
      ],
    },
  });
}
```

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID Behauptungsendpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird das Promise, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

```js
async function signIn() {
  try {
    const identityCredential = await navigator.credentials.get({
      identity: {
        providers: [
          {
            configURL: "https://accounts.idp.example/config.json",
            clientId: "********",
            nonce: "******",
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

Der folgende Codeausschnitt zeigt einen typischen `get()` Aufruf mit der WebAuthn `publicKey` Option:

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

Ein erfolgreicher `get()` Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, welches ein öffentliches Schlüssel-Credential darstellt, das zuvor über eine WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und jetzt zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, Signatur und Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um nachzuweisen, dass der Authenticator den echten privaten Schlüssel besitzt, der verwendet wird, um das Credential zu erstellen, und die `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Sehen Sie sich [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für weitere Informationen an, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmal-Passworts

Der untenstehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Erlaubnis erteilt wird, wird das Promise mit einem `OTPCredential` Objekt aufgelöst. Der enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements festgelegt, das anschließend übermittelt wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
