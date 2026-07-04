---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch repräsentiert das Objekt, das als Wert der `identity`-Option an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird.

Wenn eine `identity`-Option in einem `get()`-Aufruf auf einer {{Glossary("Relying_party", "relying party")}} (RP)-Website bereitgestellt wird, wird dem Nutzer eine Liste von {{Glossary("identity_provider", "föderierten Identitätsanbietern")}} (IdPs) als Anmeldeoptionen angeboten. Sobald sich der Nutzer erfolgreich mit einer dieser Optionen anmeldet, gibt das durch den `get()`-Aufruf zurückgegebene Promise ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt zurück.

## Instanzeigenschaften

- `context` {{optional_inline}}
  - : Ein String, der den Kontext angibt, in dem sich der Nutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:
    - `"continue"`
      - : Geeignet für Situationen, in denen der Nutzer eine Identität auswählt, um zum nächsten Schritt im Ablauf fortzufahren, der eine Anmeldung erfordert. Browser werden eine Textzeile ähnlich der folgenden bereitstellen:

        > _Continue to \<page-origin\> with \<IdP\>_

    - `"signin"`
      - : Geeignet für allgemeine Situationen, in denen der Nutzer sich mit einem IdP-Konto anmeldet, das er bereits auf diesem Ursprung verwendet hat. Browser werden eine Textzeile ähnlich der folgenden bereitstellen:

        > _Sign in to \<page-origin\> with \<IdP\>_

    - `"signup"`
      - : Eine Option für Situationen, in denen der Nutzer sich mit einem neuen IdP-Konto am Ursprung anmeldet, das er hier zuvor nicht verwendet hat. Browser werden eine Textzeile ähnlich der folgenden bereitstellen:

        > _Sign up to \<page-origin\> with \<IdP\>_

    - `"use"`
      - : Geeignet für Situationen, in denen eine andere Aktion, wie zum Beispiel die Validierung einer Zahlung, durchgeführt wird. Browser werden eine Textzeile ähnlich der folgenden bereitstellen:

        > _Use \<page-origin\> with \<IdP\>_

    Der Standardwert ist `"signin"`.

- `mode` {{optional_inline}}
  - : Ein String, der den UI-Modus für den Anmeldevorgang festlegt. Mögliche Werte sind:
    - `active`
      - : Der Anmeldevorgang muss durch eine Nutzeraktion wie das Klicken auf eine Schaltfläche gestartet werden. Wenn `mode` auf `active` gesetzt ist, kann `providers` nur eine Länge von `1` haben, andernfalls wird das `get()`-Promise abgelehnt.
    - `passive`
      - : Der Anmeldevorgang kann ohne direkte Nutzerinteraktion gestartet werden. Dies ist der Standardwert.

    Siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für weitere Details zu den Unterschieden zwischen den beiden Modi.

- `providers`
  - : Ein Array von Objekten, das Details zu den IdPs spezifiziert, die dem Nutzer als Anmeldeoptionen präsentiert werden sollen. Diese Objekte können die folgenden Eigenschaften enthalten:
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Weitere Informationen finden Sie unter [Bereitstellung einer Konfigurationsdatei](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).
    - `clientId`
      - : Ein String, der den RP-Client-Identifier angibt. Diese Information wird vom IdP in einem separaten, spezifischen Prozess an den RP ausgegeben.
    - `domainHint` {{optional_inline}}
      - : Ein String, der auf die Domäne der Konten hinweist, an denen der RP interessiert ist. Wenn angegeben, zeigt der Benutzeragent nur Konten an, die den in dem `domain_hints`-Array angegebenen Domänenhinweiswerten entsprechen. Wenn `"any"` angegeben ist, wird der RP jedes Konto anzeigen, das mit mindestens einem Domänenhinweis verknüpft ist.
    - `fields` {{optional_inline}}
      - : Ein Array von Strings, das die Benutzerinformationen spezifiziert, die der RP vom IdP im Anmeldeprozess erhalten möchte. Die genauen Strings variieren je nach IdP, tendieren jedoch ähnlich zu `"name"`, `"email"` oder `"profile-picture-url"` zu sein.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) gibt, die der Browser als Anmeldemöglichkeit für den Nutzer bereitstellen soll. Dies ist nützlich in Fällen, in denen der Nutzer bereits angemeldet ist und die Seite von ihm verlangt, sich erneut zu authentifizieren. Andernfalls kann der Reauthentifizierungsprozess verwirrend sein, wenn ein Nutzer mehrere Konten hat und sich nicht daran erinnert, welches er zuvor zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Nutzers entnommen werden und wird mit den `login_hints`-Werten abgeglichen, die der IdP im zurückgegebene Array von Benutzerinformationen aus dem [Konto-Listen-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) bereitstellt.
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der eingeschlossen werden kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird, um {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

        > [!NOTE]
        > Diese Eigenschaft wurde aus der Spezifikation entfernt, da nicht alle Protokolle, die die FedCM API verwenden, einen `nonce` benötigen. Wenn der RP einen `nonce` einfügen muss, sollte dieser in der [`params`](#params)-Eigenschaft bereitgestellt werden.

    - `params` {{optional_inline}}
      - : Alle zusätzlichen Parameter, die der RP an den IdP übermitteln muss.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
