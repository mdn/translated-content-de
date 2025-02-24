---
title: Warning
slug: Web/HTTP/Headers/Warning
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet markiert, da er nicht weit verbreitet generiert oder den Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der HTTP **`Warning`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} enthält Informationen über mögliche Probleme mit dem Status der Nachricht. Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden. Allerdings sind einige Warncodes spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Direktiven

- `<warn-code>`

  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob die `Warning` nach der Validierung aus einer gespeicherten Antwort gelöscht werden muss.

    - `1xx`-Warncodes beschreiben den Frische- oder Validierungsstatus der Antwort und werden nach erfolgreicher Validierung von einem Cache gelöscht.
    - `2xx`-Warncodes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht behoben wird und nach der Validierung nicht gelöscht wird, es sei denn, es wird eine vollständige Antwort gesendet.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein erklärender Text, der den Fehler beschreibt.
- `<warn-date>` {{optional_inline}}
  - : Ein Datum. Wenn mehr als ein `Warning`-Header gesendet wird, geben Sie ein Datum an, das mit dem {{HTTPHeader("Date")}}-Header übereinstimmt.

## Warncodes

Das [HTTP Warn Codes Registry bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warncodes.

| Code | Text                             | Beschreibung                                                                                                                                                                                      |
| ---- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die Antwort, die von einem Cache bereitgestellt wird, ist veraltet (die festgelegte Ablaufzeit für die Antwort ist überschritten).                                                                |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, ist gescheitert, da der Server nicht erreichbar war.                                                                                            |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                        |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frischelebenszeit](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt und das Alter der Antwort beträgt mehr als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Nutzer angezeigt oder protokolliert werden sollten.                                                                                                            |
| 214  | Transformation Applied           | Von einem Proxy hinzugefügt, wenn er eine Transformation an der Repräsentation vornimmt, wie z. B. das Ändern der Content-Coding, des Medientyps oder dergleichen.                                |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Nutzer angezeigt oder protokolliert werden sollten. Dieser Warncode ist ähnlich wie der Warncode 199 und weist zusätzlich auf eine dauerhafte Warnung hin.     |

## Beispiele

```http
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Date")}}
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
