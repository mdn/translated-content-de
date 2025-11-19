---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
l10n:
  sourceCommit: 1889aacdd5cb4dd3e6e5a5ef2f305fda0985c89b
---

{{SeeCompatTable}}

Der HTTP-**`Sec-Fetch-Storage-Access`**-{{Glossary("fetch_metadata_request_header", "Abruf-Metadatenanforderungs-Header")}} stellt den "Speicherzugriffsstatus" für den aktuellen Abrufkontext bereit.

Der Status kann anzeigen, dass die Berechtigung zum Zugriff auf [unpartitionierte](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) Drittanbieter-Cookies:

- Nicht erteilt wurde.
- Erteilt wurde, aber nicht für den aktuellen Anfragekontext aktiviert ist.
- Für den aktuellen Anfrageninhalt erteilt wurde und die Cookies mit der Anfrage gesendet wurden.

Unterstützende Browser müssen diesen Header bei standortübergreifenden Anfragen einschließen, wenn der Anmeldeinformationsmodus der Anfrage [`include`](/de/docs/Web/API/Request/credentials#include) ist. Der Header sollte nicht mit gleichseitigen Anfragen gesendet werden (da diese Anfragen keine standortübergreifenden Cookies einbeziehen können) oder wenn der Anmeldeinformationsmodus der Anfrage "omit" ist. Die angeforderte Ressource muss außerdem einen [potenziell vertrauenswürdigen Ursprung](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) haben.

Wenn eine Speicherzugriffsberechtigung erteilt wurde, aber nicht aktiviert ist, kann ein Server mit {{httpheader("Activate-Storage-Access")}} antworten, um die Aktivierung der Berechtigung für den Kontext zu beantragen. Weitere Informationen finden Sie unter [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der Übersicht der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadatenanforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher aufgelisteter Anforderungs-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Fetch-Storage-Access: none
Sec-Fetch-Storage-Access: inactive
Sec-Fetch-Storage-Access: active
```

## Direktiven

Ein Wert, der den Speicherzugriffsstatus für den aktuellen Abrufkontext angibt. Die folgenden Werte sind zulässig (Server sollten andere Werte ignorieren):

- `none`
  - : Der Kontext hat keine `storage-access`-Berechtigung oder Zugriff auf unpartitionierte Cookies.
- `inactive`
  - : Der Kontext hat die `storage-access`-Berechtigung, hat sich jedoch nicht dazu entschieden, diese zu verwenden (und hat keinen Zugriff auf unpartitionierte Cookies auf andere Weise).
    Wenn dieser Wert gesetzt ist, sollte auch der {{httpheader("Origin")}}-Anforderungs-Header gesetzt werden.
- `active`
  - : Der Kontext hat Zugriff auf unpartitionierte Cookies.
    Wenn dieser Wert gesetzt ist, sollte auch der {{httpheader("Origin")}}-Anforderungs-Header gesetzt werden.

## Beispiele

Siehe [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#examples) in {{httpheader("Activate-Storage-Access")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Activate-Storage-Access")}}
- [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der _Storage Access API_
- [Sequenzen der Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in der _Storage Access API_
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
