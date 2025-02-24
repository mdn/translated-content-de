---
title: Set-Login
slug: Web/HTTP/Headers/Set-Login
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`Set-Login`**-{{Glossary("response_header", "Antwortheader")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um dessen Anmeldestatus festzulegen, und zeigt an, ob im aktuellen Browser Benutzer beim IdP angemeldet sind oder nicht.
Dies wird vom Browser gespeichert und vom [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren. Der Browser muss keine Konten anfordern, wenn keine Benutzer beim IdP angemeldet sind.
Es mindert auch [potenzielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann für jede Antwort gesetzt werden, die aus einer Top-Level-Navigation oder einer Samme-Origin-Subressourcenanfrage auf der Ursprungsseite des IdP resultiert.
Jede Interaktion mit der IdP-Seite kann dazu führen, dass dieser Header gesetzt wird, und der Anmeldestatus wird vom Browser gespeichert.

Siehe [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen zum FedCM-Anmeldestatus.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
