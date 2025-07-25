---
title: IdentityCredentialRequestOptions
slug: Web/API/IdentityCredentialRequestOptions
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`IdentityCredentialRequestOptions`**-Wörterbuch stellt das Objekt dar, das als Wert der `identity`-Option an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird.

Wenn eine `identity`-Option in einem `get()`-Aufruf auf einer {{Glossary("Relying_party", "Reliant Party")}} (RP)-Website bereitgestellt wird, erhält der Benutzer eine Liste von {{Glossary("identity_provider", "identitätsbasierten Anbietern")}} (IdPs) als Anmeldeoptionen. Sobald der Benutzer sich erfolgreich mit einer dieser Optionen anmeldet, gibt das zurückgegebene Versprechen des `get()`-Aufrufs ein [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Objekt zurück.

## Instanzeigenschaften

- `context` {{optional_inline}}
  - : Ein String, der den Kontext angibt, in dem sich der Benutzer mit FedCM authentifiziert. Der Browser verwendet diesen Wert, um den Text in seiner FedCM-Benutzeroberfläche besser an den Kontext anzupassen. Mögliche Werte sind:
    - `"continue"`
      - : Geeignet für Situationen, in denen der Benutzer eine Identität auswählt, um zur nächsten Seite im Ablauf zu gelangen, die eine Anmeldung erfordert. Browser bieten einen Textstring, der ähnlich ist wie:

        > _Continue to \<page-origin\> with \<IdP\>_

    - `"signin"`
      - : Geeignet für allgemeine Situationen, in denen der Benutzer sich mit einem IdP-Konto anmeldet, das er bereits auf diesem Herkunftsort verwendet hat. Browser bieten einen Textstring, der ähnlich ist wie:

        > _Sign in to \<page-origin\> with \<IdP\>_

    - `"signup"`
      - : Eine Option für Situationen, in denen der Benutzer sich mit einem neuen IdP-Konto anmeldet, das er hier zuvor nicht verwendet hat. Browser bieten einen Textstring, der ähnlich ist wie:

        > _Sign up to \<page-origin\> with \<IdP\>_

    - `"use"`
      - : Geeignet für Situationen, in denen eine andere Aktion durchgeführt wird, wie z. B. die Validierung einer Zahlung. Browser bieten einen Textstring, der ähnlich ist wie:

        > _Use \<page-origin\> with \<IdP\>_

    Der Standardwert ist `"signin"`.

- `mode` {{optional_inline}}
  - : Ein String, der den UI-Modus für den Anmeldeablauf angibt. Mögliche Werte sind:
    - `active`
      - : Der Anmeldeablauf muss über eine Benutzeraktion wie das Klicken auf eine Schaltfläche initiiert werden. Wenn `mode` auf `active` gesetzt ist, kann `providers` nur eine Länge von `1` haben, ansonsten wird das Versprechen des `get()`-Aufrufs abgelehnt.
    - `passive`
      - : Der Anmeldeablauf kann ohne direkte Benutzerinteraktion initiiert werden. Dies ist der Standardwert.

    Siehe [Aktiver versus passiver Modus](/de/docs/Web/API/FedCM_API/RP_sign-in#active_versus_passive_mode) für mehr Details zu den Unterschieden zwischen den beiden Modi.

- `providers`
  - : Ein Array von Objekten, das Details zu den IdPs angibt, die dem Benutzer als Optionen zur Anmeldung präsentiert werden sollten. Diese Objekte können die folgenden Eigenschaften enthalten:
    - `configURL`
      - : Ein String, der die URL der Konfigurationsdatei des IdP angibt. Siehe [Konfigurationsdatei bereitstellen](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) für mehr Informationen.
    - `clientId`
      - : Ein String, der die RP-Client-Kennung angibt. Diese Informationen werden dem RP in einem separaten, spezifischen Prozess vom IdP zugewiesen.
    - `domainHint` {{optional_inline}}
      - : Ein String, der auf die Domain der Konten hinweist, die für den RP von Interesse sind. Wenn bereitgestellt, zeigt der Benutzeragent nur Konten an, die mit dem `domainHint`-Wert in ihrem [`domain_hints`](/de/docs/Web/API/FedCM_API/IDP_integration#domain_hints)-Array übereinstimmen. Wenn `"any"` angegeben ist, wird der RP jedes Konto anzeigen, das mit mindestens einem Domain-Hinweis assoziiert ist.
    - `fields` {{optional_inline}}
      - : Ein Array von Strings, das Benutzerinformationen spezifiziert, die der RP vom IdP für den Anmeldeprozess erhalten möchte. Die genauen Strings variieren je nach IdP, sind aber tendenziell ähnlich wie `"name"`, `"email"` oder `"profile-picture-url"`.
    - `loginHint` {{optional_inline}}
      - : Ein String, der einen Hinweis auf die Kontooption(en) liefert, die dem Benutzer zur Anmeldung bereitgestellt werden sollen. Dies ist nützlich in Fällen, in denen der Benutzer bereits angemeldet ist und die Website ihn auffordert, sich erneut zu authentifizieren. Andernfalls kann der Reauthentifizierungsprozess verwirrend sein, wenn ein Benutzer mehrere Konten hat und nicht weiß, welches er ursprünglich zur Anmeldung verwendet hat. Der Wert für die `loginHint`-Eigenschaft kann aus der vorherigen Anmeldung des Benutzers entnommen werden und wird mit den `login_hints`-Werten abgeglichen, die vom IdP in dem Array von Benutzerinformationen zurückgegeben werden, das vom [Kontenlisten-Endpunkt](/de/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) des IdP bereitgestellt wird.
    - `nonce` {{optional_inline}}
      - : Ein zufälliger String, der eingefügt werden kann, um sicherzustellen, dass die Antwort speziell für diese Anfrage ausgestellt wird und {{Glossary("replay_attack", "Replay-Angriffe")}} verhindert.
    - `params` {{optional_inline}}
      - : Ein benutzerdefiniertes Objekt, das verwendet wird, um zusätzliche Schlüssel-Wert-Parameter anzugeben, die RP an den IdP senden muss. Dies variiert je nach IdP und könnte zum Beispiel zusätzliche Berechtigungsanforderungen wie `admin: true` oder `calendar: "readonly"` umfassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
