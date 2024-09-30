---
title: NavigatorLogin
slug: Web/API/NavigatorLogin
l10n:
  sourceCommit: 7f1ce551464bcf12aa4fd038be3cc5b332ee2ad5
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Das **`NavigatorLogin`** Interface der [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API) definiert die Anmeldefunktionalität für föderierte Identitätsanbieter (IdPs). Es ermöglicht insbesondere einem föderierten Identitätsanbieter (IdP), seinen Anmeldestatus festzulegen, wenn sich ein Benutzer beim IdP an- oder abmeldet.

Siehe [Aktualisierung des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Details zur Verwendung.

`NavigatorLogin` wird über die [`Navigator.login`](/de/docs/Web/API/Navigator/login) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setStatus()`](/de/docs/Web/API/NavigatorLogin/setStatus) {{Experimental_Inline}}
  - : Setzt den Anmeldestatus eines föderierten Identitätsanbieters (IdP), wenn es vom Ursprung des IdP aufgerufen wird. Mit "Anmeldestatus" meinen wir "ob Benutzer im derzeitigen Browser beim IdP angemeldet sind oder nicht".

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
