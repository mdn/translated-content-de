---
title: Warning header
short-title: Warning
slug: Web/HTTP/Reference/Headers/Warning
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet eingestuft, da er nicht weit verbreitet generiert oder den Benutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern abgeleitet werden, wie z.B. {{httpheader("Age")}}.

Der HTTP **`Warning`** {{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Es können mehrere `Warning`-Header in einer Antwort erscheinen.

Im Allgemeinen können `Warning`-Header-Felder auf jede Nachricht angewendet werden.
Allerdings sind einige Warncodes spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

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

  - : Eine dreistellige Warnnummer. Die erste Ziffer zeigt an, ob der `Warning`-Header nach der Validierung aus einer gespeicherten Antwort gelöscht werden muss.

    - `1xx` Warncodes beschreiben die Frische oder den Validierungsstatus der Antwort und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx` Warncodes beschreiben einen Aspekt der Darstellung, der durch eine Validierung nicht korrigiert wird, und werden nach der Validierung nicht von einem Cache gelöscht, es sei denn, es wird eine vollständige Antwort gesendet.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein hinweisender Text, der den Fehler beschreibt.
- `<warn-date>` {{optional_inline}}
  - : Ein Datum. Wenn mehr als ein `Warning`-Header gesendet wird, fügen Sie ein Datum ein, das mit dem {{HTTPHeader("Date")}} Header übereinstimmt.

## Warncodes

Das [HTTP Warn Codes-Register bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warncodes.

| Code | Text                             | Beschreibung                                                                                                                                                                                               |
| ---- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Antwort ist veraltet (die festgelegte Ablaufzeit für die Antwort ist abgelaufen).                                                                                      |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, schlug aufgrund der Unfähigkeit, den Server zu erreichen, fehl.                                                                                          |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                                 |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frischelebensdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt, und das Alter der Antwort beträgt mehr als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Benutzer angezeigt oder protokolliert werden sollten.                                                                                                                   |
| 214  | Transformation Applied           | Wird von einem Proxy hinzugefügt, wenn es eine Transformation auf die Darstellung anwendet, wie z.B. das Ändern des content-coding, media-type oder Ähnliches.                                             |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Benutzer angezeigt oder protokolliert werden sollten. Dieser Warncode ist dem Warncode 199 ähnlich und zeigt zusätzlich eine anhaltende Warnung an.                     |

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
- [HTTP-Response-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
