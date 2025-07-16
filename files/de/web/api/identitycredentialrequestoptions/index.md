---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 1c4e44b9e52afd2dee773171ca67c37ee9d91f37
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `identity`-Option übergeben wird.

Es wird verwendet, um ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) von einem {{Glossary("identity_provider", "föderierten Identitätsanbieter")}} anzufordern, der die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanz-Eigenschaften

- `context` {{optional_inline}}
  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche an den Kontext anzupassen. Mögliche Werte sind:
    - `"continue"`
      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zum nächsten Schritt im Ablauf zu gelangen, der eine Anmeldung erfordert. Browser werden einen Text bereitstellen, der ähnlich ist wie:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`
      - : Geeignet für allgemeine Situationen, in denen sich der Benutzer mit einem IdP-Konto anmeldet, das er bereits für diesen Ursprung verwendet hat. Browser werden einen Text bereitstellen, der ähnlich ist wie:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`
      - : Eine Option für Situationen, in denen sich der Benutzer mit einem neuen IdP-Konto bei dem Ursprung anmeldet, das er hier vorher noch nicht verwendet hat. Browser werden einen Text bereitstellen, der ähnlich ist wie:

        > _Registrieren bei \<page-origin\> mit \<IdP\>_

    - `"use"`
      - : Geeignet für Situationen, in denen eine andere Aktion, wie z.B. die Validierung einer Zahlung, durchgeführt wird. Browser werden einen Text bereitstellen, der ähnlich ist wie:

        > _Verwenden Sie \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`
  - : Ein Array, das ein einzelnes Objekt enthält, das die Details eines IdP angibt, der zur Anmeldung verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Eine Konfigurationsdatei bereitstellen](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Client-ID des RP angibt. Diese Informationen werden vom IdP in einem separaten, IdP-spezifischen Prozess an das RP ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) bietet, die der Browser dem Benutzer zur Anmeldung bereitstellen soll. Dies ist nützlich, wenn der Benutzer bereits angemeldet ist und die Website sie zur erneuten Authentifizierung auffordert. Andernfalls kann der erneute Authentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht daran erinnern kann, welches er zuvor verwendet hat. Der Wert der `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers übernommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der Benutzerinformationen zurückgegeben werden, das vom [Accounts-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP bereitgestellt wird.
    - `nonce` {{optional_inline}}
      - : Eine zufällige Zeichenfolge, die enthalten sein kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert werden.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzelnen IdP aufgerufen wird, d.h. das `providers`-Array muss eine Länge von 1 haben. Mehrere IdPs müssen über verschiedene `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
