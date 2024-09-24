---
title: "Navigator: login-Eigenschaft"
short-title: login
slug: Web/API/Navigator/login
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`login`** schreibgeschützte Eigenschaft der {{domxref("Navigator")}}-Schnittstelle bietet Zugriff auf das {{domxref("NavigatorLogin")}}-Objekt des Browsers, welches von einem föderierten Identitätsanbieter (IdP) genutzt werden kann, um den Anmeldestatus festzulegen, wenn sich ein Benutzer beim IdP anmeldet oder abmeldet.

Siehe [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Details zur Verwendung.

## Wert

Ein {{domxref("NavigatorLogin")}}-Objekt.

## Beispiele

```js
/* Anmeldestatus setzen */
navigator.login.setStatus("logged-in");

/* Abmeldestatus setzen */
navigator.login.setStatus("logged-out");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
