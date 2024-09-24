---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das an {{domxref("CredentialsContainer.get()")}} als Wert der `identity`-Option übergeben wird.

Es wird verwendet, um ein von einem {{glossary("identity provider", "federierten Identitätsprovider")}} bereitgestelltes {{domxref("IdentityCredential")}} anzufordern, das die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanz-Eigenschaften

- `context` {{optional_inline}}

  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen. Mögliche Werte sind:

    - `"continue"`

      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser bieten einen Textstring, ähnlich zu:

        > _Continue to \<page-origin\> with \<IdP\>_

    - `"signin"`

      - : Geeignet für allgemeine Situationen, in denen der Benutzer sich mit einem IdP-Konto anmeldet, das er auf diesem Ursprung bereits verwendet hat. Browser bieten einen Textstring, ähnlich zu:

        > _Sign in to \<page-origin\> with \<IdP\>_

    - `"signup"`

      - : Eine Option für Situationen, in denen der Benutzer sich mit einem neuen IdP-Konto auf dem Ursprung anmeldet, das er hier zuvor nicht verwendet hat. Browser bieten einen Textstring, ähnlich zu:

        > _Sign up to \<page-origin\> with \<IdP\>_

    - `"use"`

      - : Geeignet für Situationen, in denen eine andere Aktion, wie das Validieren einer Zahlung, durchgeführt wird. Browser bieten einen Textstring, ähnlich zu:

        > _Use \<page-origin\> with \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`

  - : Ein Array, das ein einzelnes Objekt enthält, das Details eines IdP spezifiziert, das zur Anmeldung verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Provide a config file](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Client-Identifikation des RP angibt. Diese Information wird vom IdP an das RP in einem separaten, idp-spezifischen Prozess ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser dem Benutzer zur Anmeldung bereitstellen soll. Dies ist nützlich, wenn der Benutzer bereits angemeldet ist und die Website ihn zur erneuten Authentifizierung auffordert. Andernfalls kann der erneute Authentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht erinnern kann, welches er zuvor zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers entnommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der Benutzerdaten zurückgegeben werden, das vom [accounts list endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP zurückgegeben wird.
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der inkludiert werden kann, um sicherzustellen, dass die Antwort spezifisch für diese Anfrage ausgegeben wird und {{glossary("replay attack", "Replay-Angriffe")}} verhindert werden.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzelnen IdP aufgerufen wird, d.h., das `providers`-Array muss eine Länge von 1 haben. Mehrere IdPs müssen über verschiedene `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}
