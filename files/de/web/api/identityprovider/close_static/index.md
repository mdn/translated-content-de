---
title: "IdentityProvider: close() statische Methode"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`close()`** statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle bietet dem Browser ein manuelles Signal, dass ein IdP-Anmeldevorgang abgeschlossen ist.

## Verwendungshinweise

`close()` muss aus demselben Ursprung wie das IdP-Anmeldedialogfeld aufgerufen werden, wie im [IdP-Konfigurationsfile](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definiert.

`close()` wird benötigt, um das IdP-Anmeldedialogfeld zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und das IdP Daten vom Benutzer gesammelt hat. Ein Hauptanwendungsfall für `close()` ist das Schließen des IdP-Anmeldedialogfelds in Fällen, in denen [der Browser- und der IdP-Anmeldestatus nicht synchronisiert sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), und der Browser einen dynamischen Anmeldevorgang initiiert, um das Problem zu beheben.

## Syntax

```js-nolint
IdentityProvider.close()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

```js
IdentityProvider.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
