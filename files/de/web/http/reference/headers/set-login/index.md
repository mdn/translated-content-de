---
title: Set-Login header
short-title: Set-Login
slug: Web/HTTP/Reference/Headers/Set-Login
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Set-Login`**-{{Glossary("response_header", "Antwortheader")}} wird von einem föderierten Identitätsanbieter (IdP) gesendet, um dessen Anmeldestatus festzulegen, und zeigt an, ob Benutzer in diesem Browser beim IdP angemeldet sind oder nicht. Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet, um die Anzahl der Anfragen an den IdP zu reduzieren, da der Browser keine Konten anfordern muss, wenn keine Benutzer beim IdP angemeldet sind. Es mindert auch [mögliche Timing-Angriffe](https://github.com/w3c-fedid/FedCM/issues/447).

Der Header kann in jeder Antwort gesetzt werden, die aus einer Navigation auf der obersten Ebene oder einer Subressourcenanfrage des gleichen Ursprungs auf der Origin-Site des IdP resultiert. Jegliche Interaktion mit der IdP-Site kann dazu führen, dass dieser Header gesetzt wird und der Anmeldestatus vom Browser gespeichert wird.

Weitere Informationen zum FedCM-Anmeldestatus finden Sie unter [Aktualisieren des Anmeldestatus mit der Login Status API](/de/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

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
