---
title: NavigatorLogin
slug: Web/API/NavigatorLogin
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`NavigatorLogin`**-Schnittstelle der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) definiert die Login-Funktionalität für föderierte Identitätsanbieter (IdPs). Insbesondere ermöglicht sie einem föderierten Identitätsanbieter (IdP), den Login-Status zu setzen, wenn sich ein Benutzer beim IdP ein- oder ausloggt.

Weitere Details zur Nutzung finden Sie unter [Login-Status mit der Login Status API aktualisieren](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

Auf `NavigatorLogin` wird über die {{domxref("Navigator.login")}}-Eigenschaft zugegriffen.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("NavigatorLogin.setStatus", "setStatus()")}} {{Experimental_Inline}}
  - : Setzt den Login-Status eines föderierten Identitätsanbieters (IdP), wenn sie vom Ursprung des IdP aufgerufen wird. Mit "Login-Status" ist gemeint, "ob derzeit Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht".

## Beispiele

```js
/* Setzt Anmeldestatus auf eingeloggt */
navigator.login.setStatus("logged-in");

/* Setzt Anmeldestatus auf ausgeloggt */
navigator.login.setStatus("logged-out");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
