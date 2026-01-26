---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

Der HTTP **`Sec-Fetch-Storage-Access`** {{Glossary("fetch_metadata_request_header", "fetch metadata request header")}} liefert den "Speicherzugriffstatus" für den aktuellen `fetch`-Kontext.

Der Status kann anzeigen, dass die Berechtigung zum Zugriff auf [nicht partitionierte](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) Drittanbieter-Cookies:

- Nicht erteilt wurde.
- Erteilt wurde, aber nicht für den aktuellen Anfragekontext aktiviert ist.
- Für den aktuellen Anfrageinhalt erteilt wurde und die Cookies mit der Anfrage gesendet wurden.

Unterstützende Browser müssen diesen Header bei Anfragen über Domains hinweg einfügen, wenn der Anmeldeinformationsmodus der Anfrage [`include`](/de/docs/Web/API/Request/credentials#include) ist.
Der Header sollte nicht mit gleichen Domain-Anfragen gesendet werden (da diese Anfragen keine Drittanbieter-Cookies beinhalten können) oder wenn der [Anmeldeinformationsmodus](/de/docs/Web/API/Request/credentials) der Anfrage "omit" ist.
Die angeforderte Ressource muss außerdem einen [potenziell vertrauenswürdigen Ursprung](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_origins) haben.

Wurde eine Zugriffsberechtigung auf den Speicher erteilt, aber nicht aktiviert, kann ein Server mit {{httpheader("Activate-Storage-Access")}} antworten, um die Aktivierung der Berechtigung für den Kontext anzufordern.
Für weitere Informationen siehe [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der Übersicht der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Unzulässiger Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungsheader")}}
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

Ein Wert, der den Speicherzugriffstatus für den aktuellen `fetch`-Kontext angibt.
Die folgenden Werte sind zulässig (Server sollten andere Werte ignorieren):

- `none`
  - : Der Kontext hat nicht die Berechtigung `storage-access` oder Zugriff auf nicht partitionierte Cookies.
- `inactive`
  - : Der Kontext hat die Berechtigung `storage-access`, hat sich aber nicht für deren Nutzung entschieden (und hat keinen Zugang zu nicht partitionierten Cookies auf anderem Wege).
    Ist dieser Wert gesetzt, sollte auch der {{httpheader("Origin")}} Anforderungsheader gesetzt werden.
- `active`
  - : Der Kontext hat Zugriff auf nicht partitionierte Cookies.
    Ist dieser Wert gesetzt, sollte auch der {{httpheader("Origin")}} Anforderungsheader gesetzt werden.

## Beispiele

Siehe [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#examples) in {{httpheader("Activate-Storage-Access")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Activate-Storage-Access")}}
- [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der _Storage Access API_
- [Speicherzugriffs-Header-Sequenzen](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in der _Storage Access API_
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
