---
title: Set-Login header
short-title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Set-Login`** {{Glossary("response_header", "Antwort-Header")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um seinen Login-Status festzulegen und anzugeben, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht. Dieser wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen zu reduzieren, die an den IdP gesendet werden. Der Browser muss keine Konten anfragen, wenn keine Benutzer beim IdP angemeldet sind. Dies mildert auch [potentielle Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann in jeder Antwort gesetzt werden, die aus einer Top-Level-Navigation oder einer gleichherkunftsgebundenen Subresource-Anfrage auf der Ursprungsseite des IdP resultiert. Jede Interaktion mit der IdP-Site kann dazu führen, dass dieser Header gesetzt wird und der Login-Status vom Browser gespeichert wird.

Siehe [Aktualisieren des Login-Status mit der Login-Status-API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) für weitere Informationen über den FedCM-Login-Status.

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

## Direktiven

- `<status>`

  - : Ein String, der den Login-Status für den IdP festlegt. Mögliche Werte sind:

    - `logged-in`: Der IdP hat mindestens ein Benutzerkonto angemeldet.
    - `logged-out`: Alle Benutzerkonten des IdP sind derzeit abgemeldet.

    > [!NOTE]
    > Browser ignorieren diesen Header, wenn er andere Werte enthält.

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
