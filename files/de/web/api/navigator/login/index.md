---
title: "Navigator: login-Eigenschaft"
short-title: login
slug: Web/API/Navigator/login
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`login`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces, die nur lesbar ist, bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers. Ein föderierter Identitätsanbieter (IdP) kann dieses verwenden, um seinen Anmeldestatus zu setzen, wenn ein Benutzer sich beim IdP ein- oder ausloggt.

Weitere Details zur Nutzung finden Sie unter [Anmeldestatus mit der Login-Status-API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Wert

Ein [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt.

## Beispiele

```js
/* Set logged-in status */
navigator.login.setStatus("logged-in");

/* Set logged-out status */
navigator.login.setStatus("logged-out");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
