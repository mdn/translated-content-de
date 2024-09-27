---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `identity`-Option übergeben wird.

Es wird verwendet, um eine [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) anzufordern, die von einem [föderierten Identitätsanbieter](/de/docs/Glossary/identity_provider) bereitgestellt wird, der die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanzeigenschaften

- `context` {{optional_inline}}

  - : Ein String, der den Kontext angibt, in dem der Benutzer sich mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen. Mögliche Werte sind:

    - `"continue"`

      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser bieten eine Textzeichenfolge ähnlich an:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`

      - : Geeignet für allgemeine Situationen, in denen sich der Benutzer mit einem IdP-Konto anmeldet, das er auf diesem Ursprung bereits verwendet hat. Browser bieten eine Textzeichenfolge ähnlich an:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`

      - : Eine Option für Situationen, in denen sich der Benutzer mit einem neuen IdP-Konto beim Ursprung anmeldet, das er hier noch nicht verwendet hat. Browser bieten eine Textzeichenfolge ähnlich an:

        > _Registrieren bei \<page-origin\> mit \<IdP\>_

    - `"use"`

      - : Geeignet für Situationen, in denen eine andere Aktion, wie z. B. die Validierung einer Zahlung, durchgeführt wird. Browser bieten eine Textzeichenfolge ähnlich an:

        > _Verwenden von \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`

  - : Ein Array, das ein einzelnes Objekt enthält, das Details zu einem IdP spezifiziert, der zum Anmelden verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Bereitstellung einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Client-ID des RP angibt. Diese Informationen werden vom IdP in einem separaten, spezifischen Prozess an das RP ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser dem Benutzer für die Anmeldung bieten sollte. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Seite ihn auffordert, sich erneut zu authentifizieren. Andernfalls kann der Reauthentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht erinnern kann, welches er zuvor zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann von der vorherigen Anmeldung des Benutzers übernommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der vom IdP zurückgegebenen Benutzerinformationen bereitgestellt werden [Accounts List Endpoint](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der eingefügt werden kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgegeben wird und um [Replay-Angriffe](/de/docs/Glossary/replay_attack) zu verhindern.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `providers`-Array muss die Länge 1 haben. Mehrere IdPs müssen über verschiedene `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}
