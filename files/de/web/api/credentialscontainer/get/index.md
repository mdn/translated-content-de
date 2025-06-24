---
title: "CredentialsContainer: get()-Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert beispielsweise, ob die Seite einen Benutzer ohne weiteres mit einem gespeicherten Credential anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, den Vorgang mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Typen von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Credential des gewünschten Typs zu finden.

Die API wird immer mit einem einzelnen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer auffordern, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:

    - `mediation` {{optional_inline}}

      - : Ein String, der angibt, ob der Benutzer für jeden Besuch einer Client-App eingeloggt werden muss. Der Wert kann einer der folgenden sein:

        - `"conditional"`

          - : Entdeckte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung vorgelegt, der die Credentials anfordert. In der Praxis bedeutet dies, dass verfügbare Credentials automatisch ausgefüllt werden. Weitere Details zur Nutzung finden Sie unter [Anmeldung mit einem Passkey über Formular-Autovervollständigung](https://web.dev/articles/passkey-form-autofill); [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`

          - : Wenn Credentials ohne Benutzermediation für einen bestimmten Vorgang übergeben werden können, werden sie das, wodurch eine automatische Wieder-Authentifizierung ohne Benutzermediation ermöglicht wird. Ist eine Benutzermediation erforderlich, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie sicher sind, dass ein Benutzer nicht überrascht oder verwirrt ist, ein Anmeldedialogfeld zu sehen — z. B. auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf einen "Anmelden/Registrieren"-Button geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer zur Authentifizierung aufgefordert. Dieser Wert ist für Situationen vorgesehen, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten — z. B. wenn ein Benutzer für eine sensible Operation (wie die Bestätigung einer Kreditkartenzahlung) erneut authentifiziert werden soll oder wenn Benutzer gewechselt werden.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent authentifiziert den Benutzer automatisch erneut und meldet ihn an, wenn möglich. Ist eine Zustimmung erforderlich, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer beim Besuch einer Web-App automatisch anmelden möchten, wenn möglich, aber nicht, wenn nicht, ohne sie mit einem verwirrenden Anmeldedialog zu konfrontieren. Stattdessen möchten Sie warten, bis sie explizit auf einen "Anmelden/Registrieren"-Button klicken.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Fall einer [Föderierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API)-Anfrage kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Wieder-Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies passiert ist, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter bei der Validierung an das `id_assertion_endpoint` des IdP und der relying party (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt. Dies ist nützlich für die Leistungsevaluation, Sicherheitsanforderungen (der IdP könnte automatische Wieder-Authentifizierungsanfragen ablehnen und immer eine Benutzermediation erfordern) und allgemeine UX (ein IdP oder RP könnte unterschiedliche UX für automatische und nicht-automatische Login-Erfahrungen präsentieren wollen).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektexemplar, das es ermöglicht, einen laufenden `get()`-Vorgang abzubrechen. Ein abgebrochener Vorgang kann normal abgeschlossen werden (im Allgemeinen, wenn der Abbruch nach Abschluss des Vorgangs empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es handelt sich um einen booleschen Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt abzurufen, indem die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) verwendet wird.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Dieses Interface ist jetzt überholt, und Entwickler sollten die `identity`-Option bevorzugen, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, die die Protokolle der federierten Identitätsanbieter der angeforderten Credentials darstellen (z. B. `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die federierten Identitätsanbieter der Credentials darstellen (z. B. `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, welcher nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [Erklärung, signiert mit der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) erfüllt wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn in dem `get()`-Aufruf [Bedarfs-Vermittlung](#mediation) angegeben wurde, wird der Dialog der Browser-Benutzeroberfläche angezeigt und das Promise bleibt anhängig, bis der Benutzer ein Konto aus verfügbaren Autovervollständigungsvorschlägen auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs macht, schließt sich dieser, ohne das Promise zu erfüllen oder abzulehnen und ohne eine benutzer-sichtbare Fehlermeldung zu erzeugen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück an den Aufrufer gegeben.

Kann ein einzelnes Credential nicht eindeutig ermittelt werden, wird das Promise mit `null` erfüllt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen, der mit der `signal`-Option dieser Methode verbunden ist.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) konnte die Anfrage an den [ID-Aussage-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Bei der Anforderung eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/nicht gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM-Anmeldestatus). Im letzteren Fall kann es eine gewisse Verzögerung bei der Ablehnung geben, um den IdP-Anmeldestatus nicht an die RP zu leaken.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : In einer der folgenden Situationen ausgelöst:

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

Relying Parties können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu machen, damit sich Benutzer über einen Identitätsanbieter (IdP) bei der Relying Party mithilfe der Identitätsföderation anmelden. Eine typische Anfrage würde so aussehen:

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

Schauen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für mehr Details an, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf einschließlich der `context`- und `loginHint`-Erweiterungen würde so aussehen:

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

Wenn der IdP bei einer Anfrage an den [ID-Aussage-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) diese nicht validieren kann, wird das von `CredentialsContainer.get()` zurückgegebene Promise abgelehnt:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektexemplar erfüllt wird, das ein öffentliches Schlüssel-Credential darstellt, das zuvor über ein WebAuthn-`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und nun verwendet wurde, um einen Benutzer zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, der Signatur und des Benutzer-Handle.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — beispielsweise die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Credentials verwendet wurde, und das `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Sehen Sie [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für mehr Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der unten stehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eintrifft. Wenn die Berechtigung erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene Wert `code` wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das dann übermittelt wird.

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
