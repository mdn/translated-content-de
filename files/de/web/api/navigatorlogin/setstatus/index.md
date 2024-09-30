---
title: "NavigatorLogin: setStatus() Methode"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

Die **`setStatus()`**-Methode der [`NavigatorLogin`](/de/docs/Web/API/NavigatorLogin)-Schnittstelle setzt den Login-Status eines föderierten Identitätsanbieters (IdP), wenn sie von der Ursprungs-Domain des IdP aufgerufen wird. Damit meinen wir, "ob irgendwelche Benutzer im aktuellen Browser beim IdP eingeloggt sind oder nicht". Diese Methode sollte von der IdP-Website nach einem Benutzer-Login oder -Logout aufgerufen werden.

Der Browser speichert diesen Zustand für jeden IdP; die [FedCM API](/de/docs/Web/API/FedCM_API) API verwendet ihn dann, um die Anzahl der Anfragen an den IdP zu reduzieren (da sie keine Zeit mit Anfragen nach Konten verschwenden muss, wenn keine Benutzer beim IdP eingeloggt sind). Sie mildert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447) ab.

Siehe [Update login status using the Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Login-Status.

## Syntax

```js-nolint
setStatus(status)
```

### Parameter

- `status`
  - : Ein String, der den Login-Status darstellt, der für den IdP gesetzt werden soll. Mögliche Werte sind:
    - `"logged-in"`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `"logged-out"`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die aufrufende Domain sich nicht in einem Frame befindet, dessen gesamte Verschachtelungshierarchie gleich-Origin ist. Unabhängig davon, ob es aus dem Hauptframe, einem im Hauptframe eingebetteten {{htmlelement("iframe")}} oder einem anderen `<iframe>`, das eine oder mehrere Ebenen tief in das erste `<iframe>` eingebettet ist, aufgerufen wird, müssen _alle_ Ebenen der Verschachtelungshierarchie gleich-Origin sein, damit der Aufruf erfolgreich ist.

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
