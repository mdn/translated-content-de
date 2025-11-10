---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 9b77c8c7faabe6fd9fd428e12270290e975b8c39
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer einzigen {{Glossary("credential", "Anmeldedaten")}} erfüllt wird, die dann verwendet werden können, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das folgende Elemente enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert beispielsweise, ob die Seite einen Benutzer stillschweigend mit einer gespeicherten Anmeldedaten anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Typen von Anmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Falls gesetzt, enthalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um eine passende Anmeldedaten des angeforderten Typs zu finden.

Die API wird immer mit einer einzigen Anmeldedaten oder `null` abgeschlossen. Wenn mehrere Anmeldedaten verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, eine einzelne Anmeldedaten auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, ob der Benutzer für jeden Besuch einer Client-App einloggen muss. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Entdeckte Anmeldedaten werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprungsort angezeigt, der Anmeldedaten anfordert. In der Praxis bedeutet dies, dass verfügbare Anmeldedaten automatisch ausgefüllt werden; siehe [Sign in with a passkey through form autofill](https://web.dev/articles/passkey-form-autofill) für weitere Details, wie dies verwendet wird; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`
          - : Falls Anmeldedaten für eine bestimmte Operation ohne Benutzermediation übergeben werden können, werden sie es, wodurch eine automatische, erneute Authentifizierung ohne Benutzermediation ermöglicht wird. Falls Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen Sie zuversichtlich sind, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn er ein Anmeldedialogfeld sieht - zum Beispiel auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf eine „Anmelden/Registrieren“-Schaltfläche geklickt hat.

        - `"required"`
          - : Der Benutzer wird immer zur Authentifizierung aufgefordert. Dieser Wert ist für Situationen gedacht, in denen Sie eine Benutzer-Authentifizierung erzwingen möchten - zum Beispiel, wenn ein Benutzer erneut authentifiziert werden soll, wenn eine sensible Operation ausgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder wenn zwischen Benutzern gewechselt wird.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzeragent wird den Benutzer automatisch erneut authentifizieren und anmelden, falls möglich. Wenn eine Zustimmung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen Sie einen Benutzer automatisch anmelden möchten, wenn er eine Web-App besucht, wenn möglich, aber wenn nicht, möchten Sie ihm kein verwirrendes Anmeldedialogfeld präsentieren. Stattdessen würden Sie darauf warten, dass er ausdrücklich auf eine „Anmelden/Registrieren“-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [föderierten Authentifizierungsanforderung (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen erneuten Authentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschah, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter mitgeteilt, der beim Validieren an den IdP´s `id_assertion_endpoint` gesendet wird, und der Partei, die darauf vertraut (RP), wird dies durch die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt. Dies ist nützlich für Leistungsbewertung, Sicherheitsanforderungen (der IdP kann automatische erneute Authentifizierungsanfragen ablehnen und stets Benutzermediation verlangen) und allgemeines Benutzererlebnis (ein IdP oder RP möchte möglicherweise unterschiedliche Benutzererfahrungen für automatische und nicht-automatische Anmeldungserfahrungen präsentieren).

    - `signal` {{optional_inline}}
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, das es ermöglicht, einen laufenden `get()`-Vorgang abzubrechen. Ein abgebrochener Vorgang kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach Abschluss des Vorgangs eintraf) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [föderierte Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt abzurufen, indem die [Federated Credential Management API](/de/docs/Web/API/FedCM_API) verwendet wird.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [föderierte Identitätsanmeldedaten](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Dieses Interface wird jetzt ersetzt, und Entwickler sollten die `identity`-Option bevorzugen, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Anmeldedaten der föderierten Identitätsanbieter darstellen (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die föderierten Identitätsanbieter der Anmeldedaten darstellen (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmalkennwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, eine [mit der Web Authentication API signierte Assertion](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) auflöst:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [bedingte Mediation](#mediation) im `get()`-Aufruf angegeben wurde, wird das Browser-Benutzeroberflächen-Dialogfeld angezeigt und das Versprechen bleibt schwebend, bis der Benutzer ein Konto zur Anmeldung aus den verfügbaren AutoFill-Vorschlägen auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-Benutzeroberflächen-Dialogfeldes macht, schließt es sich, ohne das Versprechen aufzulösen oder abzulehnen und ohne einen benutzersichtbaren Fehlerzustand zu erzeugen.
- Wenn der Benutzer eine Anmeldedaten auswählt, wird die relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Wenn eine einzelne Anmeldedaten nicht eindeutig erlangt werden kann, wird das Versprechen mit `null` erfüllt.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des [`AbortController`](/de/docs/Web/API/AbortController), die mit der [`signal`](#signal)-Option dieser Methode verbunden ist, abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Bei Anforderung einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) kann die Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validiert werden und wird mit einer Fehlermeldung abgelehnt, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Bei Anforderung einer [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Anmeldedaten waren nicht gültig/gefunden oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Anmeldestatus). Im letzten Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um den Anmeldestatus des IdP nicht der RP preiszugeben.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der Benutzer hat die Anfrage abgebrochen.

    - Die Nutzung dieser API wurde durch eine der folgenden [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert:
      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [transparenter Ursprung](/de/docs/Web/HTTP/Reference/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die aufrufende Domain ist keine gültige Domain.

## Beispiele

### Abrufen einer föderierten Identitätsanmeldedaten

Vertrauen schenkende Parteien können `get()` mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, dass Benutzer sich bei der vertrauen schenkenden Partei über einen Identitätsanbieter (IdP) anmelden, indem Identitätsföderation verwendet wird. Eine typische Anfrage könnte so aussehen:

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

Lesen Sie mehr über [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) für weitere Details, wie dies funktioniert. Dieser Aufruf initiiert den Anmeldevorgang, der im [FedCM sign-in flow](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben wird.

Ein ähnlicher Aufruf, einschließlich der `context`- und `loginHint`-Erweiterungen, würde wie folgt aussehen:

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

Wenn der IdP eine Anfrage an den [ID Assertion Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht validieren kann, wird der Promise, der von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

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

### Abrufen eines Public-Key-Anmeldedatensatzes

Das folgende Snippet zeigt einen typischen `get()`-Aufruf mit der WebAuthn `publicKey`-Option:

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

Ein erfolgreicher `get()`-Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, das eine öffentliche Schlüsselanmeldedaten darstellt, die zuvor über eine WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und jetzt verwendet wurde, um einen Benutzer zu authentifizieren. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen einschließlich der Authenticator-Daten, Signatur und Benutzer-Handle bietet.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — beispielsweise die `signature`, um den Nachweis zu erbringen, dass sich der Authentifikator im Besitz des echten privaten Schlüssels befindet, der zur Erstellung der Anmeldedaten verwendet wurde, und die `userHandle`, um den Benutzer mit der Anmeldedaten, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authenticating a user](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für mehr Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalkennworts

Der untenstehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Erlaubnis erteilt wird, löst sich das Versprechen mit einem `OTPCredential`-Objekt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularelements gesetzt, das dann abgeschickt wird.

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
