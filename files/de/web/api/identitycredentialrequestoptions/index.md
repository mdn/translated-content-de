---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`** Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `identity`-Option übergeben wird.

Es wird verwendet, um ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) anzufordern, das von einem {{Glossary("identity_provider", "föderierten Identitätsanbieter")}} bereitgestellt wird, der die [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanzeigenschaften

- `context` {{optional_inline}}
  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:
    - `"continue"`
      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zum nächsten Schritt im Ablauf fortzufahren, der eine Anmeldung erfordert. Browser werden einen Textstring ähnlich bereitstellen:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`
      - : Geeignet für allgemeine Situationen, in denen sich der Benutzer mit einem IdP-Konto anmeldet, das er bereits auf diesem Ursprung verwendet hat. Browser werden einen Textstring ähnlich bereitstellen:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`
      - : Eine Option für Situationen, in denen sich der Benutzer mit einem neuen IdP-Konto anmeldet, das er hier zuvor nicht verwendet hat. Browser werden einen Textstring ähnlich bereitstellen:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"use"`
      - : Geeignet für Situationen, in denen eine andere Aktion, wie das Validieren einer Zahlung, ausgeführt wird. Browser werden einen Textstring ähnlich bereitstellen:

        > _Verwenden Sie \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`
  - : Ein Array, das ein einzelnes Objekt enthält, das Details eines IdP spezifiziert, der zur Anmeldung verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Stellen Sie eine Konfigurationsdatei bereit](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der den Client-Identifier des RP angibt. Diese Information wird vom IdP im Rahmen eines separaten, idp-spezifischen Prozesses an den RP ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontenoption(en) liefert, die der Browser dem Benutzer zur Anmeldung anbieten soll. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Seite den Benutzer auffordert, sich erneut zu authentifizieren. Andernfalls kann der erneute Authentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht daran erinnern kann, welches er vorher zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers stammen und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der Benutzerinformationen bereitgestellt werden, die vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP zurückgegeben werden.
    - `nonce` {{optional_inline}}
      - : Eine zufällige Zeichenkette, die enthalten sein kann, um sicherzustellen, dass die Antwort spezifisch für diese Anfrage ausgestellt wird und um {{Glossary("replay_attack", "Wiederholungsangriffe")}} zu verhindern.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur, dass die API mit einem einzigen IdP aufgerufen wird, d.h. das `providers`-Array muss eine Länge von 1 haben. Mehrere IdPs müssen über unterschiedliche `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
