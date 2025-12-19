---
title: "CredentialsContainer: get() Methode"
short-title: get()
slug: Web/API/CredentialsContainer/get
l10n:
  sourceCommit: 798f5efbce403e2366323afea025e5729b902e46
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`get()`** Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem einzelnen {{Glossary("credential", "Credential")}} erfüllt wird, welches dann zur Authentifizierung eines Benutzers auf einer Website verwendet werden kann.

Die Methode akzeptiert ein einzelnes optionales Argument `options`, welches folgende Punkte enthalten kann:

- Eine `mediation` Eigenschaft, die angibt, wie und ob der Benutzer zur Teilnahme an der Operation aufgefordert werden soll.
  Dies steuert zum Beispiel, ob die Seite einen Benutzer stillschweigend mit einem gespeicherten Credential anmelden kann.
- Eine `signal` Eigenschaft, die es ermöglicht, die Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
- Eine oder mehrere Eigenschaften — `password`, `federated`, `identity`, `otp`, `publicKey` — die die [Arten von Credentials](/de/docs/Web/API/Credential_Management_API/Credential_types) angeben, die angefordert werden. Wenn gesetzt, beinhalten die Werte dieser Eigenschaften alle Parameter, die der Browser benötigt, um ein entsprechendes Credential des angeforderten Typs zu finden.

Die API wird immer mit einem einzelnen Credential oder `null` erfüllt. Wenn mehrere Credentials verfügbar sind und Benutzermediation erlaubt ist, wird der Browser den Benutzer bitten, ein einzelnes Credential auszuwählen.

## Syntax

```js-nolint
get()
get(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Anfrage enthält. Es kann folgende Eigenschaften beinhalten:
    - `mediation` {{optional_inline}}
      - : Ein String, der angibt, ob der Benutzer bei jedem Besuch einer Client-App zur Anmeldung aufgefordert wird. Der Wert kann einer der folgenden sein:
        - `"conditional"`
          - : Gefundene Credentials werden dem Benutzer in einem nicht-modalen Dialogfeld zusammen mit einer Angabe des Ursprungs, der die Credentials anfordert, präsentiert. Praktisch bedeutet dies das automatische Ausfüllen verfügbarer Credentials; weitere Details zur Verwendung finden Sie unter [Anmeldung mit einem Passkey über Formular-Autofill](https://web.dev/articles/passkey-form-autofill); [`PublicKeyCredential.isConditionalMediationAvailable()`](/de/docs/Web/API/PublicKeyCredential/isConditionalMediationAvailable_static) bietet ebenfalls nützliche Informationen.

        - `"optional"`
          - : Wenn Credentials für eine gegebene Operation ohne Benutzermediation übergeben werden können, wird dies ermöglicht, sodass eine automatische Reauthentifizierung ohne Benutzermediation erfolgen kann. Wenn Benutzermediation erforderlich ist, wird der Benutzer-Agent den Benutzer zur Authentifizierung auffordern. Dieser Wert ist für Situationen gedacht, in denen man mit hoher Wahrscheinlichkeit davon ausgehen kann, dass ein Benutzer nicht überrascht oder verwirrt ist, wenn er einen Anmeldedialog sieht — beispielsweise auf einer Website, die Benutzer nicht automatisch anmeldet, wenn der Benutzer gerade eine "Anmelden/Registrieren"-Schaltfläche angeklickt hat.

        - `"required"`
          - : Der Benutzer wird immer zur Authentifizierung aufgefordert. Dieser Wert ist für Situationen gedacht, in denen man eine Benutzer-Authentifizierung erzwingen möchte — beispielsweise wenn man möchte, dass sich ein Benutzer erneut authentifiziert, wenn eine sensible Operation durchgeführt wird (wie das Bestätigen einer Kreditkartenzahlung) oder beim Wechsel von Benutzern.

        - `"silent"`
          - : Der Benutzer wird nicht zur Authentifizierung aufgefordert. Der Benutzer-Agent authentifiziert den Benutzer automatisch erneut und meldet ihn, wenn möglich, an. Wenn eine Zustimmung erforderlich ist, wird das Versprechen mit `null` erfüllt. Dieser Wert ist für Situationen gedacht, in denen man einen Benutzer automatisch bei einem Besuch einer Web-App anmelden möchte, wenn möglich, aber wenn nicht, man dem Benutzer keinen verwirrenden Anmeldedialog anzeigen möchte. Stattdessen möchte man darauf warten, dass sie explizit eine "Anmelden/Registrieren"-Schaltfläche klicken.

        Der Standardwert ist `"optional"`.

        > [!NOTE]
        > Im Fall einer Anfrage zur [föderierten Authentifizierung (FedCM API)](/de/docs/Web/API/FedCM_API) kann ein `mediation` Wert von `optional` oder `silent` zu einem Versuch der [automatischen Reauthentifizierung](/de/docs/Web/API/FedCM_API/RP_sign-in#auto-reauthentication) führen. Ob dies geschah, wird dem Identitätsanbieter (IdP) über den Parameter [`is_auto_selected`](/de/docs/Web/API/FedCM_API/IDP_integration#is_auto_selected) mitgeteilt, der an den `id_assertion_endpoint` des IdP während der Validierung gesendet wird und dem relying party (RP) über die Eigenschaft [`IdentityCredential.isAutoSelected`](/de/docs/Web/API/IdentityCredential/isAutoSelected). Dies ist nützlich für die Leistungsauswertung, Sicherheitsanforderungen (der IdP könnte automatische Reauthentifizierungsanfragen ablehnen und immer eine Benutzermediation verlangen) und das allgemeine UX (ein IdP oder RP könnte eine andere UX für automatische und nicht-automatische Anmeldeerlebnisse präsentieren).

    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, eine laufende `get()` Operation abzubrechen. Eine abgebrochene Operation kann normal abgeschlossen werden (im Allgemeinen wenn der Abbruch nach dem Abschluss der Operation empfangen wurde) oder mit einem `AbortError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt werden.

    - `password` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein gespeichertes [Passwort](/de/docs/Web/API/Credential_Management_API/Credential_types#passwords) als [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt abzurufen. Es ist ein boolean Wert.
    - `identity` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) Objekt mithilfe der [Federated Credential Management API](/de/docs/Web/API/FedCM_API) abzurufen.

        Der Wert dieser Option ist ein [`IdentityCredentialRequestOptions`](/de/docs/Web/API/IdentityCredentialRequestOptions) Objekt, das Details der spezifischen Identitätsanbieter beinhaltet, die die Website verwenden möchte.

    - `federated` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [föderiertes Identitäts-Credential](/de/docs/Web/API/Credential_Management_API/Credential_types#federated_identity_credentials) als ein [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt abzurufen. Diese Schnittstelle ist mittlerweile überholt, und Entwickler sollten bevorzugt die `identity` Option verwenden, wenn sie verfügbar ist.

        Der Wert dieser Option ist ein Objekt mit den folgenden Eigenschaften:
        - `protocols`
          - : Ein Array von Strings, die die Protokolle der angeforderten Credentials der föderierten Identitätsanbieter repräsentieren (zum Beispiel `"openidconnect"`).
        - `providers`
          - : Ein Array von Strings, die die Credentials der föderierten Identitätsanbieter repräsentieren (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

    - `otp` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Einmal-Passwort (OTP)](/de/docs/Web/API/Credential_Management_API/Credential_types#one-time_passwords) als ein [`OTPCredential`](/de/docs/Web/API/OTPCredential) Objekt abzurufen.

        Der Wert dieser Option ist ein Array von Strings, das nur den String-Wert `"sms"` enthalten darf.

    - `publicKey` {{optional_inline}}
      - : Diese Option fordert den Browser auf, ein [Assertion signiert mit der Web Authentication API](/de/docs/Web/API/Credential_Management_API/Credential_types#web_authentication_assertions) als ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) abzurufen.

        Der Wert dieser Option ist ein [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Objekt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer der folgenden Unterklassen von [`Credential`](/de/docs/Web/API/Credential) aufgelöst wird:

- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)

Wenn [bedingte Mediation](#mediation) in dem `get()` Aufruf angegeben wurde, wird der Browser-UI-Dialog angezeigt und das Versprechen bleibt ausstehend, bis der Benutzer ein Konto zur Anmeldung aus verfügbaren Autofill-Vorschlägen auswählt:

- Wenn der Benutzer dann eine Geste außerhalb des Browser-UI-Dialogs ausführt, schließt sich dieser ohne das Versprechen aufzulösen oder abzulehnen und ohne eine für den Benutzer sichtbare Fehlermeldung zu verursachen.
- Wenn der Benutzer ein Credential auswählt, wird das relevante [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) an den Aufrufer zurückgegeben.

Wenn ein einzelnes Credential nicht eindeutig abgerufen werden kann, wird das Versprechen mit `null` aufgelöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde durch einen Aufruf der [`abort()`](/de/docs/Web/API/AbortController/abort) Methode des [`AbortController`](/de/docs/Web/API/AbortController), der mit der [`signal`](#signal) Option dieser Methode verbunden ist, abgebrochen.

- [`IdentityCredentialError`](/de/docs/Web/API/IdentityCredentialError)
  - : Bei der Anfrage eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) ist die Anfrage an den [ID-Assertion-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) nicht in der Lage, die Authentifizierung zu validieren, und lehnt mit einer Fehlermeldung ab, die Informationen über den Grund enthält.

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Bei der Anfrage eines [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) hat der {{Glossary("identity_provider", "Identitätsanbieter")}} (IdP) nicht innerhalb von 60 Sekunden geantwortet, die bereitgestellten Credentials waren nicht gültig/gefunden, oder der Anmeldestatus des Browsers für den IdP ist auf `"logged-out"` gesetzt (siehe [Anmeldestatus mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM Anmeldestatus). Im letztgenannten Fall kann es zu einer Verzögerung bei der Ablehnung kommen, um den Anmeldestatus des IdP nicht an den RP weiterzugeben.

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

Reliance-Parties können `get()` mit der `identity` Option aufrufen, um eine Anfrage zu stellen, damit sich Benutzer über einen Identitätsanbieter (IdP) mittels Identitätsföderation bei der Reliance-Party anmelden. Eine typische Anfrage würde so aussehen:

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

Sehen Sie sich [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) an, um weitere Details zu erfahren, wie dies funktioniert. Dieser Aufruf startet den Anmeldefluss, wie in [FedCM Anmeldefluss](/de/docs/Web/API/FedCM_API/RP_sign-in#fedcm_sign-in_flow) beschrieben.

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

Wenn der IdP nicht in der Lage ist, eine Anfrage an den [ID-Assertion-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_id_assertion_endpoint) zu validieren, wird das Versprechen, das von `CredentialsContainer.get()` zurückgegeben wird, abgelehnt:

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

### Abrufen eines öffentlichen Schlüssel-Credentials

Das folgende Snippet zeigt einen typischen `get()` Aufruf mit der WebAuthn `publicKey` Option:

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

Ein erfolgreicher `get()` Aufruf gibt ein Versprechen zurück, das mit einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objektinstanz aufgelöst wird, das ein zuvor über eine WebAuthn [`create()`](/de/docs/Web/API/CredentialsContainer/create) erstelltes öffentliches Schlüssel-Credential darstellt, das jetzt zur Authentifizierung eines Benutzers verwendet wurde. Seine [`PublicKeyCredential.response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft enthält ein [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) Objekt, das Zugriff auf mehrere nützliche Informationen bietet, darunter die Authentifizierungsdaten, die Signatur und den Benutzerhandle.

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

Einige dieser Daten müssen auf dem Server gespeichert werden — z. B. die `signature`, um zu beweisen, dass der Authentifizierer den echten privaten Schlüssel, der zur Erstellung des Credentials verwendet wurde, besitzt, und der `userHandle`, um den Benutzer mit dem Credential, dem Anmeldeversuch und anderen Daten zu verknüpfen.

Siehe [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) für mehr Informationen darüber, wie der gesamte Ablauf funktioniert.

### Abrufen eines Einmal-Passworts

Der unten stehende Code löst den Berechtigungsablauf des Browsers aus, wenn eine SMS-Nachricht eingeht. Wenn die Berechtigung erteilt wird, wird das Versprechen mit einem `OTPCredential` Objekt aufgelöst. Der enthaltene `code` Wert wird dann als Wert eines {{htmlelement("input")}} Formularelements gesetzt und dann abgesendet.

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
