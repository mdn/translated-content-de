---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 798f5efbce403e2366323afea025e5729b902e46
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) als Wert der Option `identity` übergeben wird.

Wenn auf einer Website eines {{Glossary("Relying_party", "vertrauenden Diensteanbieters")}} (RP) eine `identity`-Option in einem `get()`-Aufruf bereitgestellt wird, wird dem Benutzer eine Liste von {{Glossary("identity_provider", "föderierten Identitätsanbietern")}} (IdPs) als Anmeldeoptionen angeboten. Sobald sich der Benutzer erfolgreich mit einer dieser Optionen anmeldet, gibt das Versprechen, das von dem `get()`-Aufruf zurückgegeben wird, ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt zurück.

## Instanz-Eigenschaften

- `context` {{optional_inline}}
  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:
    - `"continue"`
      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser bieten eine ähnliche Textzeile an:

        > _Continue to \<page-origin\> with \<IdP\>_

    - `"signin"`
      - : Geeignet für allgemeine Situationen, in denen sich der Benutzer mit einem IdP-Konto anmeldet, das er auf dieser Herkunft bereits genutzt hat. Browser bieten eine ähnliche Textzeile an:

        > _Sign in to \<page-origin\> with \<IdP\>_

    - `"signup"`
      - : Eine Option für Situationen, in denen sich der Benutzer mit einem neuen IdP-Konto anmeldet, das er hier bisher nicht verwendet hat. Browser bieten eine ähnliche Textzeile an:

        > _Sign up to \<page-origin\> with \<IdP\>_

    - `"use"`
      - : Geeignet für Situationen, in denen eine andere Aktion, wie die Validierung einer Zahlung, durchgeführt wird. Browser bieten eine ähnliche Textzeile an:

        > _Use \<page-origin\> with \<IdP\>_

    Der Standardwert ist `"signin"`.

- `mode` {{optional_inline}}
  - : Ein String, der den UI-Modus für den Anmeldeablauf angibt. Mögliche Werte sind:
    - `active`
      - : Der Anmeldeablauf muss über eine Benutzeraktion, wie das Klicken eines Buttons, eingeleitet werden. Wenn `mode` auf `active` gesetzt ist, kann `providers` nur eine Länge von `1` haben, andernfalls wird das `get()`-Versprechen abgelehnt.
    - `passive`
      - : Der Anmeldeablauf kann ohne direkte Benutzerinteraktion eingeleitet werden. Dies ist der Standardwert.

    Siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für mehr Details über den Unterschied zwischen den beiden Modi.

- `providers`
  - : Ein Array von Objekten, das Details der IdPs angibt, die dem Benutzer als Optionen für die Anmeldung angezeigt werden sollen. Diese Objekte können die folgenden Eigenschaften enthalten:
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Siehe [Bereitstellen einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für weitere Informationen.
    - `clientId`
      - : Ein String, der den RP-Client-Identifikator angibt. Diese Information wird vom IdP an den RP in einem separaten, IdP-spezifischen Verfahren ausgestellt.
    - `domainHint` {{optional_inline}}
      - : Ein String, der auf die Domain der Konten hinweist, an denen der RP interessiert ist. Wenn bereitgestellt, zeigt der Benutzeragent nur Konten an, die den Domain-Hinweiswert in ihrem [`domain_hints`](/de/docs/Web/API/FedCM_API/IDP_integration#domain_hints)-Array enthalten. Wenn `"any"` angegeben ist, zeigt der RP jedes Konto an, das mit mindestens einem Domain-Hinweis verknüpft ist.
    - `fields` {{optional_inline}}
      - : Ein Array von Strings, die Benutzerinformationen angeben, die der RP vom IdP für den Anmeldeprozess erhalten möchte. Die genauen Strings variieren je nach IdP, sind jedoch ähnlich zu `"name"`, `"email"` oder `"profile-picture-url"`.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooptionen gibt, die der Browser dem Benutzer zur Anmeldung vorschlagen soll. Dies ist nützlich in Fällen, in denen sich der Benutzer bereits angemeldet hat und die Website verlangt, dass er sich erneut authentifiziert. Andernfalls kann der erneute Authentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und sich nicht erinnern kann, welches er zuvor verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann von der vorherigen Anmeldung des Benutzers übernommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP im Array der vom IdP zurückgegebenen Benutzerinformationen bereitgestellt werden [Konto-Liste-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint).
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der eingefügt werden kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

        > [!NOTE]
        > Diese Eigenschaft wurde aus der Spezifikation entfernt, da nicht alle Protokolle, die die FedCM API verwenden, einen `nonce` benötigen. Wenn der RP einen `nonce` einschließen muss, sollte er in der [`params`](#params)-Eigenschaft bereitgestellt werden.

    - `params` {{optional_inline}}
      - : Alle zusätzlichen Parameter, die der RP an den IdP übergeben muss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
