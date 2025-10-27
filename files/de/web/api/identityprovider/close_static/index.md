---
title: "IdentityProvider: close() statische Methode"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die statische Methode **`close()`** der [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Schnittstelle bietet ein manuelles Signal an den Browser, dass ein Anmeldevorgang eines {{Glossary("Identity_provider", "IdP")}} abgeschlossen ist.

`close()` muss vom gleichen Ursprung aufgerufen werden wie das im [IdP-Config](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definierte Anmeldedialogfenster des IdP.

`close()` wird verwendet, um das Anmeldedialogfenster des IdP zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP die Datensammlung vom Benutzer beendet hat. Ein Hauptanwendungsfall für `close()` ist das Schließen des Anmeldedialogfensters des IdP in Fällen, in denen [der Browser- und der IdP-Anmeldestatus nicht mehr synchron sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), und der Browser einen dynamischen Anmeldevorgang startet, um das Problem zu beheben.

## Syntax

```js-nolint
IdentityProvider.close()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Grundlegende Nutzung von `IdentityProvider.close()`

```js
IdentityProvider.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://developer.chrome.com/docs/identity/fedcm/overview) auf developer.chrome.com (2023)
