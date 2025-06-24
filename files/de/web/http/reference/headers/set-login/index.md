---
title: Set-Login header
short-title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um dessen Anmeldestatus festzulegen. Er zeigt an, ob in diesem Browser derzeit Benutzer beim IdP angemeldet sind oder nicht. Dieser Status wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Konten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind. Zudem werden [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447) abgemildert.

Der Header kann auf jede Antwort gesetzt werden, die sich aus einer Navigation auf oberster Ebene oder einer Same-Origin-Subressourcenanforderung auf der Ursprungswebsite des IdP ergibt. Jede Interaktion mit der IdP-Website kann dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus vom Browser gespeichert wird.

Weitere Informationen zum FedCM-Anmeldestatus finden Sie unter [Aktualisieren des Anmeldestatus über die Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: <status>
```

## Direktiven

- `<status>`

  - : Ein String, der den Anmeldestatus für den IdP festlegt. Mögliche Werte sind:

    - `logged-in`: Der IdP hat mindestens ein angemeldetes Benutzerkonto.
    - `logged-out`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

    > [!NOTE]
    > Browser ignorieren diesen Header, wenn er einen anderen Wert enthält.

## Beispiele

```http
Set-Login: logged-in

Set-Login: logged-out
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Federated Credential Management (FedCM) API](/de/docs/Web/API/FedCM_API)
