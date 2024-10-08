---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`** Dictionary stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `identity` Option übergeben wird.

Es wird verwendet, um ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) anzufordern, das von einem {{Glossary("identity_provider", "föderierten Identitätsanbieter")}} bereitgestellt wird, der die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanz-Eigenschaften

- `context` {{optional_inline}}

  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Oberfläche besser an den Kontext anzupassen. Mögliche Werte sind:

    - `"continue"`

      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zum nächsten Schritt im Ablauf zu gelangen, der eine Anmeldung erfordert. Browser bieten eine Textzeichenfolge ähnlich:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`

      - : Geeignet für allgemeine Situationen, in denen der Benutzer sich mit einem IdP-Konto anmeldet, das er bereits auf diesem Ursprungsserver verwendet hat. Browser bieten eine Textzeichenfolge ähnlich:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`

      - : Eine Option für Situationen, in denen der Benutzer sich mit einem neuen IdP-Konto anmeldet, das er hier zuvor nicht verwendet hat. Browser bieten eine Textzeichenfolge ähnlich:

        > _Registrieren bei \<page-origin\> mit \<IdP\>_

    - `"use"`

      - : Geeignet für Situationen, in denen eine andere Aktion, wie z.B. die Validierung einer Zahlung, durchgeführt wird. Browser bieten eine Textzeichenfolge ähnlich:

        > _Verwenden Sie \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`

  - : Ein Array, das ein einzelnes Objekt enthält, das Details eines IdP spezifiziert, der zur Anmeldung verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Konfigurationsdatei bereitstellen](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Client-ID des RP angibt. Diese Information wird vom IdP in einem separaten, idp-spezifischen Prozess an das RP ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser dem Benutzer zur Anmeldung bieten soll. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Seite ihn auffordert, sich erneut zu authentifizieren. Andernfalls kann der erneute Authentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht daran erinnern kann, welches er bei der vorherigen Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann von der vorherigen Anmeldung des Benutzers übernommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der vom IdP zurückgegebenen Benutzerinformationswerte bereitgestellt werden, das vom [Accounts-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitgestellt wird.
    - `nonce` {{optional_inline}}
      - : Eine zufällige Zeichenfolge, die eingefügt werden kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `providers`-Array muss die Länge 1 haben. Mehrere IdPs müssen über verschiedene `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}
