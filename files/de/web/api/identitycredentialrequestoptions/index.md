---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das als Wert der `identity`-Option an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird.

Es wird verwendet, um ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) von einem {{Glossary("identity_provider", "federierten Identitätsanbieter")}} anzufordern, der die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanz-Eigenschaften

- `context` {{optional_inline}}

  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:

    - `"continue"`

      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser werden eine Textzeichenfolge bereitstellen, die ähnlich ist wie:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`

      - : Geeignet für allgemeine Situationen, in denen sich der Benutzer mit einem IdP-Konto anmeldet, das er bereits auf diesem Ursprung genutzt hat. Browser werden eine Textzeichenfolge bereitstellen, die ähnlich ist wie:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`

      - : Eine Option für Situationen, in denen der Benutzer sich mit einem neuen IdP-Konto anmeldet, das er hier noch nicht verwendet hat. Browser werden eine Textzeichenfolge bereitstellen, die ähnlich ist wie:

        > _Registrieren bei \<page-origin\> mit \<IdP\>_

    - `"use"`

      - : Geeignet für Situationen, in denen eine andere Aktion, wie z.B. die Validierung einer Zahlung, durchgeführt wird. Browser werden eine Textzeichenfolge bereitstellen, die ähnlich ist wie:

        > _Verwenden von \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`

  - : Ein Array, das ein einzelnes Objekt enthält, das Details eines zu verwendenden IdPs zur Anmeldung spezifiziert. Dieses Objekt kann folgende Eigenschaften enthalten:

    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Bereitstellung einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Client-Identifikationsnummer des RP angibt. Diese Information wird vom IdP in einem separaten Prozess, der spezifisch für den IdP ist, an das RP ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser dem Benutzer zur Anmeldung bereitstellen soll. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Seite ihn auffordert, sich erneut zu authentifizieren. Andernfalls kann der Reauthentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht erinnern kann, welches er zuvor zur Anmeldung verwendet hat. Der Wert der `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers entnommen und mit den `login_hints`-Werten abgeglichen werden, die der IdP in dem von den [Kontolisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) zurückgegebenen Nutzerinformationsarray bereitstellt.
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der enthalten sein kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzelnen IdP aufgerufen wird, d.h. das `providers`-Array muss eine Länge von 1 haben. Mehrere IdPs müssen über unterschiedliche `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}
