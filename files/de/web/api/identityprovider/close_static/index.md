---
title: "IdentityProvider: close() statische Methode"
short-title: close()
slug: Web/API/IdentityProvider/close_static
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`close()`** statische Methode des [`IdentityProvider`](/de/docs/Web/API/IdentityProvider)-Interfaces bietet dem Browser ein manuelles Signal, dass ein {{Glossary("Identity_provider", "IdP")}}-Login-Fluss abgeschlossen ist.

`close()` muss aus dem gleichen Ursprung aufgerufen werden wie der Anmelde-Dialog des angegebenen IdP, wie im [IdP-Config](/de/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) definiert.

`close()` wird verwendet, um den IdP-Anmelde-Dialog zu schließen, wenn die Anmeldung vollständig abgeschlossen ist und der IdP das Sammeln von Nutzerdaten beendet hat. Ein primärer Anwendungsfall für `close()` besteht darin, den IdP-Anmelde-Dialog in Fällen zu schließen, in denen [der Browser- und der IdP-Login-Status nicht mehr synchron sind](/de/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), und der Browser einen dynamischen Anmelde-Fluss initiiert, um das Problem zu beheben.

## Syntax

```js-nolint
IdentityProvider.close()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

### Grundlegende Verwendung von `IdentityProvider.close()`

```js
IdentityProvider.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management API](https://privacysandbox.google.com/cookies/fedcm) auf privacysandbox.google.com (2023)
