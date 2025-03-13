---
title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um den Anmeldestatus festzulegen und anzugeben, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
Dieser wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Benutzerkonten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind.
Es mildert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447) ab.

Der Header kann auf jede Antwort gesetzt werden, die aus einer Navigation auf oberster Ebene oder einer gleichursprünglichen Unterressourcenanforderung auf der Ursprungsseite des IdP resultiert.
Jede Interaktion mit der IdP-Site kann dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus vom Browser gespeichert wird.

Siehe [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für mehr Informationen über den FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Login: <status>
```

## Richtlinien

- `<status>`

  - : Ein String, der den Anmeldestatus darstellt, der für den IdP festgelegt werden soll. Mögliche Werte sind:

    - `logged-in`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `logged-out`: Alle IdP-Benutzerkonten sind derzeit abgemeldet.

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
