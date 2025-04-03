---
title: NavigatorLogin
slug: Web/API/NavigatorLogin
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{securecontext_header}}{{APIRef("FedCM API")}}

Das **`NavigatorLogin`**-Interface der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) definiert die Anmeldefunktionalität für föderierte Identitätsanbieter (IdPs). Insbesondere ermöglicht es einem föderierten Identitätsanbieter (IdP), seinen Anmeldestatus festzulegen, wenn sich ein Benutzer beim IdP an- oder abmeldet.

Weitere Details zur Nutzung finden Sie unter [Anmeldestatus mit der Login-Status-API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

`NavigatorLogin` kann über die [`Navigator.login`](/de/docs/Web/API/Navigator/login)-Eigenschaft aufgerufen werden.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus)
  - : Setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn er vom Ursprung des IdP aufgerufen wird. Mit "Anmeldestatus" ist gemeint, "ob Benutzer beim aktuellen Browser beim IdP angemeldet sind oder nicht".

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
