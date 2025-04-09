---
title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: 57b01b603385ca121240d52d542adfa60da0f92e
---

{{HTTPSidebar}}

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um dessen Anmeldestatus festzulegen, und zeigt an, ob derzeit Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht. Dieser wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Konten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind. Es mindert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann in jeder Antwort gesetzt werden, die aus einer Navigation der obersten Ebene oder einer Subressourcenanfrage gleichen Ursprungs auf der Ursprungsseite des IdP resultiert. Jede Interaktion mit der IdP-Seite kann dazu führen, dass dieser Header gesetzt wird, und der Anmeldestatus wird vom Browser gespeichert.

Siehe [Aktualisierung des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen zum FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungs-Header")}}</th>
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

  - : Ein String, der den Anmeldestatus für den IdP darstellt. Mögliche Werte sind:

    - `logged-in`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
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
