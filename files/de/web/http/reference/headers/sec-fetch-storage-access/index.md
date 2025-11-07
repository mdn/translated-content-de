---
title: Sec-Fetch-Storage-Access header
short-title: Sec-Fetch-Storage-Access
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Storage-Access
l10n:
  sourceCommit: 4e011ae3e353d5500df26e3ca5af31c3c1cf037b
---

Der HTTP **`Sec-Fetch-Storage-Access`** {{Glossary("fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} stellt den "Storage-Zugriffsstatus" für den aktuellen Abrufkontext bereit.

Der Status kann darauf hinweisen, dass die Berechtigung zum Zugriff auf [unpartitionierte](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) Drittanbieter-Cookies:

- Nicht gewährt wurde.
- Gewährt wurde, aber nicht für den aktuellen Anforderungskontext aktiviert ist.
- Für den aktuellen Anforderungsinhalt gewährt wurde und die Cookies mit der Anforderung gesendet wurden.

Unterstützende Browser müssen diesen Header bei Cross-Site-Anforderungen einschließen, wenn der Anmeldeinformationsmodus der Anforderung [`include`](/de/docs/Web/API/Request/credentials#include) ist. Der Header sollte nicht mit Same-Site-Anforderungen gesendet werden (da diese Anforderungen keine Cross-Site-Cookies beinhalten können) oder wenn der [Anmeldeinformationsmodus](/de/docs/Web/API/Request/credentials) der Anfrage "omit" ist. Die angeforderte Ressource muss außerdem über einen [potenziell vertrauenswürdigen Ursprung](/de/docs/Web/Security/Secure_Contexts#potentially_trustworthy_origins) verfügen.

Wenn eine Storage-Zugriffsberechtigung gewährt, aber nicht aktiviert wurde, kann ein Server mit {{httpheader("Activate-Storage-Access")}} antworten, um die Aktivierung der Berechtigung für den Kontext anzufordern. Weitere Informationen finden Sie unter [Storage Access Headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der Übersicht der [Storage Access API](/de/docs/Web/API/Storage_Access_API).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request Header")}}
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

Ein Wert, der den Storage-Zugriffsstatus für den aktuellen Abrufkontext angibt. Die folgenden Werte sind erlaubt (Server sollten andere Werte ignorieren):

- `none`
  - : Der Kontext hat keine `storage-access`-Berechtigung oder keinen Zugriff auf unpartitionierte Cookies.
- `inactive`
  - : Der Kontext hat die `storage-access`-Berechtigung, hat sich jedoch nicht dafür entschieden, sie zu verwenden (und hat keinen Zugriff auf unpartitionierte Cookies auf andere Weise).
    Wenn dieser Wert festgelegt ist, sollte auch der {{httpheader("Origin")}}-Anforderungsheader gesetzt sein.
- `active`
  - : Der Kontext hat Zugriff auf unpartitionierte Cookies.
    Wenn dieser Wert festgelegt ist, sollte auch der {{httpheader("Origin")}}-Anforderungsheader gesetzt sein.

## Beispiele

Siehe [Beispiele](/de/docs/Web/HTTP/Reference/Headers/Activate-Storage-Access#examples) in {{httpheader("Activate-Storage-Access")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Activate-Storage-Access")}}
- [Storage Access Headers](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in der _Storage Access API_
- [Storage Access Header Sequenzen](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in der _Storage Access API_
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
