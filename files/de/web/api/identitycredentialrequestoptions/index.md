---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`** Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der `identity`-Option übergeben wird.

Es wird verwendet, um ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) von einem {{Glossary("identity_provider", "föderierten Identitätsanbieter")}} anzufordern, der die [Föderierte Anmeldeverwaltung (FedCM) API](/de/docs/Web/API/FedCM_API) unterstützt.

## Instanz-Eigenschaften

- `context` {{optional_inline}}

  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:

    - `"continue"`

      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser liefern einen Textstring ähnlich:

        > _Weiter zu \<page-origin\> mit \<IdP\>_

    - `"signin"`

      - : Geeignet für allgemeine Situationen, in denen der Benutzer sich mit einem IdP-Konto anmeldet, das er bereits auf diesem Ursprung verwendet hat. Browser liefern einen Textstring ähnlich:

        > _Anmelden bei \<page-origin\> mit \<IdP\>_

    - `"signup"`

      - : Eine Option für Situationen, in denen der Benutzer sich mit einem neuen IdP-Konto bei dem Ursprung anmeldet, das er hier zuvor nicht verwendet hat. Browser liefern einen Textstring ähnlich:

        > _Registrieren bei \<page-origin\> mit \<IdP\>_

    - `"use"`

      - : Geeignet für Situationen, in denen eine andere Aktion, wie z.B. die Validierung einer Zahlung, durchgeführt wird. Browser liefern einen Textstring ähnlich:

        > _Verwenden von \<page-origin\> mit \<IdP\>_

    Der Standardwert ist `"signin"`.

- `providers`

  - : Ein Array, das ein einzelnes Objekt enthält, das Details eines IdP spezifiziert, der zum Anmelden verwendet werden soll. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Bereitstellen einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der die Clientkennung des RP angibt. Diese Information wird vom IdP an das RP in einem separaten, idp-spezifischen Prozess ausgegeben.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser für die Anmeldung des Benutzers bereitstellen soll. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Seite ihn auffordert, sich erneut zu authentifizieren. Andernfalls kann der Reauthentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht erinnern kann, welches er zuvor zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers übernommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der Benutzerinformation zurückgegeben werden, das vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP zurückgegeben wird.
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der enthalten sein kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert.

    > [!NOTE]
    > Derzeit erlaubt FedCM nur die API mit einem einzelnen IdP aufzurufen, d.h. das `providers`-Array muss eine Länge von 1 haben. Mehrere IdPs müssen über verschiedene `get()`-Aufrufe unterstützt werden.

## Spezifikationen

{{Specifications}}
