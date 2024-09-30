---
title: "IdentityProvider: statische Methode close()"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`close()`**-statische Methode der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle bietet ein manuelles Signal für den Browser, dass ein IdP-Anmeldevorgang abgeschlossen ist.

## Verwendungshinweise

`close()` muss aus dem gleichen Ursprung wie das IdP-Anmeldedialogfeld aufgerufen werden, wie im [IdP-Config](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definiert.

`close()` ist erforderlich, um das IdP-Anmeldedialogfeld zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und das IdP das Sammeln von Benutzerdaten beendet hat. Ein Hauptanwendungsfall für `close()` ist das Schließen des IdP-Anmeldedialogfelds in Fällen, in denen [der Browser- und der IdP-Anmeldestatus nicht synchron sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync) und der Browser einen dynamischen Anmeldevorgang initiiert, um das Problem zu beheben.

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

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) auf developers.google.com (2023)
