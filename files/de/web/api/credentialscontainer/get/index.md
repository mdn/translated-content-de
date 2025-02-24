---
title: "CredentialsContainer: `get()` Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 8b336fd55ed66befedc3d7057c69f41dc85aced9
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode der [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem einzigen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann verwendet werden kann, um einen Benutzer auf einer Website zu authentifizieren.

Die Methode akzeptiert ein einzelnes optionales `options`-Argument, das Folgendes enthalten kann:

- Eine `mediation`-Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll. Dies steuert beispielsweise, ob die Seite einen Benutzer stumm mit einem gespeicherten Credential anmelden kann.
- Eine `signal`-Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein geeignetes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzigen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann die folgenden Eigenschaften enthalten:

    - `mediation` {{optional_inline}}

      - : Ein String, der angibt, ob der Benutzer bei jedem Besuch einer Client-App zur Anmeldung aufgefordert wird. Der Wert kann einer der folgenden sein:

        - `"conditional"`

          - : Erkannte Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einem Hinweis auf den Ursprung, der die Credentials anfordert, präsentiert. In der Praxis bedeutet dies das automatische Ausfüllen verfügbarer Credentials; siehe [Mittels Passkey durch Formulareingaben anmelden](https://web.dev/articles/passkey-form-autofill) für weitere Informationen, wie dies verwendet wird; [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`

          - : Wenn Credentials für eine gegebene Operation ohne Benutzermediation übergeben werden können, wird dies geschehen, was eine automatische Wiederanmeldung ohne Benutzermediation ermöglicht. Wenn Benutzermediation erforderlich ist, wird der Benutzeragent den Benutzer bitten, sich zu authentifizieren. Dieser Wert ist für Situationen vorgesehen, in denen Sie berechtigten Vertrauen haben, dass ein Benutzer nicht überrascht oder verwirrt sein wird, wenn er einen Anmeldedialog sieht — zum Beispiel auf einer Seite, die Benutzer nicht automatisch anmeldet, wenn ein Benutzer gerade auf eine "Anmeldung/Registrieren"-Schaltfläche geklickt hat.

        - `"required"`

          - : Der Benutzer wird immer aufgefordert, sich zu authentifizieren. Dieser Wert ist für Situationen vorgesehen, in denen Sie eine Benutzeranmeldung erzwingen möchten — zum Beispiel, wenn Sie möchten, dass ein Benutzer sich erneut anmeldet, wenn eine sensible Operation durchgeführt wird (wie die Bestätigung einer Kreditkartenzahlung) oder wenn der Benutzer wechselt.

        - `"silent"`
          - : Der Benutzer wird nicht aufgefordert, sich zu authentifizieren. Der Benutzeragent wird den Benutzer, wenn möglich, automatisch erneut authentifizieren und anmelden. Wenn eine Zustimmung erforderlich ist, wird das Promise mit `null` erfüllt. Dieser Wert ist für Situationen vorgesehen, bei denen Sie einen Benutzer automatisch anmelden möchten, wenn er eine Web-App besucht, jedoch, falls dies nicht möglich ist, ihm nicht einen verwirrenden Anmeldedialog präsentieren möchten. Stattdessen möchten Sie darauf warten, dass der Benutzer explizit auf eine "Anmeldung/Registrieren"-Schaltfläche klickt.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Falle einer [federierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API)-Anfrage kann ein `mediation`-Wert von `optional` oder `silent` zu einem Versuch der [automatischen Wiederanmeldung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies tatsächlich erfolgte, wird dem Identitätsanbieter (IdP) über den [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected)-Parameter, welcher beim `id_assertion_endpoint` des IdP während der Validierung gesendet wird, und der abhängigen Partei (RP) über die [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected)-Eigenschaft mitgeteilt. Dies ist nützlich für Leistungsauswertungen, Sicherheitsanforderungen (der IdP möchte möglicherweise automatische Wiederanfragen verweigern und stets eine Benutzermediation verlangen) und allgemeine UX (ein IdP oder RP möchten möglicherweise unterschiedliche UX für auto- und nicht-automatische Login-Erfahrungen präsentieren).

    - `signal` {{optional_inline}}

      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt-Instanz, die es ermöglicht, eine laufende `get()`-Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (in der Regel, wenn der Abbruch nach Abschluss der Operation einging) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Password](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt abzurufen. Es ist ein boolescher Wert.
    - `identity` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federated identity credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt unter Nutzung der [Federated Credential Management API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions)-Objekt, das Details der spezifischen Identitätsanbieter enthält, die die Website verwenden möchte.

    - `federated` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [federated identity credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt abzurufen. Diese Schnittstelle ist mittlerweile überholt, und Entwickler sollten die Verwendung der `identity`-Option bevorzugen, falls verfügbar.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:

        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Credentials der föderierten Identitätsanbieter repräsentieren (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die Credentials der föderierten Identitätsanbieter repräsentieren (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}

      - : Diese Option fordert den Browser auf, ein [Einmalpasswort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential)-Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das ausschließlich den String `"sms"` enthalten kann.

    - `publicKey` {{optional_inline}}

      - : Diese Option fordert den Browser auf, eine [mit der Web Authentication API signierte assertion](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [konditionale Mediation](#mediation) in dem `get()`-Aufruf angegeben wurde, wird das Browser-Dialogfenster angezeigt und das Promise bleibt schwebend, bis der Benutzer ein Konto zum Einloggen aus verfügbaren Autocomplete-Vorschlägen auswählt:

- Wenn der Benutzer dann eine Aktion außerhalb des Browser-Dialogfensters ausführt, schließt es sich, ohne den Promise zu lösen oder abzulehnen und ohne eine für den Benutzer sichtbare Fehlermeldung.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig erlangt werden kann, löst sich das Promise mit `null`.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort)-Methode des mit dieser Methode verbundenen [`AbortController`](/de/docs/Web/API/AbortController) mit der Option [`signal`](#signal) abgebrochen.

- `IdentityCredentialError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird, und die Anfrage an den [ID assertion endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) die Authentifizierung nicht validieren kann, wird sie mit einer Fehlermeldung, die Informationen über den Grund enthält, abgelehnt.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wenn ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) angefordert wird und der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden antwortet, die bereitgestellten Credentials nicht gültig/gefunden werden oder der Anmeldestatus des Browsers für den IdP auf `"logged-out"` gesetzt ist (siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Login-Status) wird in letzterem Fall mit einer Verzögerung abgelehnt, um zu vermeiden, dass der IdP-Login-Status an den RP weitergegeben wird.

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird in einer der folgenden Situationen ausgelöst:

    - Die Nutzung dieser API wurde durch eine der folgenden [Erlaubnisrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) blockiert:

      - {{HTTPHeader("Permissions-Policy/identity-credentials-get","identity-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/publickey-credentials-get","publickey-credentials-get")}}
      - {{HTTPHeader("Permissions-Policy/otp-credentials","otp-credentials")}}

    - Der aufrufende Ursprung ist ein [unsteter Ursprung](/de/docs/Web/HTTP/Headers/Origin#null).

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die aufrufende Domäne ist keine gültige Domäne.

## Beispiele

### Abrufen eines föderierten Identitätsnachweises

Abhängige Parteien können die `get()`-Methode mit der `identity`-Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) unter Verwendung der Identitätsföderation bei der abhängigen Partei anmelden. Eine typische Anfrage sieht so aus:

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

Schauen Sie sich die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) an, um weitere Details darüber zu erfahren, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, der im [FedCM-Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben ist.

Ein ähnlicher Aufruf, der die `context`- und `loginHint`-Erweiterungen enthält, könnte so aussehen:

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID assertion endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird das Promise, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

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

### Abrufen eines öffentlichen Schlüsselnachweises

Das folgende Snippet zeigt einen typischen `get()`-Aufruf mit der WebAuthn-`publicKey`-Option:

```js
const publicKey = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "acme.com",
  allowCredentials: [{
    type: "public-key",
    id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
  }],
  userVerification: "required",
}

navigator.credentials.get({ publicKey })
```

Ein erfolgreicher `get()`-Aufruf gibt ein Promise zurück, das mit einer [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objektinstanz aufgelöst wird, welche ein öffentliches Schlüsselnachweis darstellt, der zuvor über einen WebAuthn-[`create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und nun zur Authentifizierung eines Benutzers verwendet wird. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse)-Objekt, das Zugriff auf mehrere nützliche Informationen bietet, einschließlich der Authenticator-Daten, der Signatur und der Benutzerkennung.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — zum Beispiel die `signature`, um den Nachweis zu erbringen, dass der Authenticator den echten privaten Schlüssel besitzt, der zur Erstellung des Credentials verwendet wurde, und die `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user), um mehr darüber zu erfahren, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmalpassworts

Der untenstehende Code löst den Berechtigungsfluss des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Berechtigung erteilt wird, wird das Promise mit einem `OTPCredential`-Objekt erfüllt. Der enthaltene `code`-Wert wird dann als Wert eines {{htmlelement("input")}}-Formularfeldes gesetzt, das dann übermittelt wird.

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
