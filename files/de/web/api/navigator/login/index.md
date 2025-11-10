---
title: "Navigator: login-Eigenschaft"
short-title: login
slug: Web/API/Navigator/login
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{securecontext_header}}{{APIRef("FedCM API")}}

Die **`login`**-Schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces bietet Zugriff auf das [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Objekt des Browsers, das ein föderierter Identitätsanbieter (IdP) verwenden kann, um seinen Anmeldestatus zu setzen, wenn ein Benutzer sich beim IdP an- oder abmeldet.

Siehe [Aktualisieren des Anmeldestatus mit der Login Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Details zur Verwendung.

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
