---
title: Warning header
short-title: Warning
slug: Web/HTTP/Reference/Headers/Warning
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

> [!NOTE]
> Der Header wurde als veraltet eingestuft, da er nicht häufig erzeugt oder Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/info/rfc9111/#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der HTTP-**`Warning`**-{{Glossary("request_header", "Request")}}- und {{Glossary("response_header", "Response-Header")}} enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
In einer Response können mehrere `Warning`-Header vorkommen.

`Warning`-Headerfelder können im Allgemeinen auf jede Nachricht angewendet werden.
Einige Warn-Codes sind jedoch spezifisch für Caches und können nur auf Response-Nachrichten angewendet werden.

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
  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob die `Warning` nach der Validierung aus einer gespeicherten Response gelöscht werden muss.
    - `1xx`-Warn-Codes beschreiben den Aktualitäts- oder Validierungsstatus der Response und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx`-Warn-Codes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht behoben wird, und werden von einem Cache nach der Validierung nicht gelöscht, sofern keine vollständige Response gesendet wird.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann `-` sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein Hinweistext, der den Fehler beschreibt.
- `<warn-date>` {{optional_inline}}
  - : Ein Datum. Wenn mehr als ein `Warning`-Header gesendet wird, schließen Sie ein Datum ein, das dem {{HTTPHeader("Date")}}-Header entspricht.

## Warning-Codes

Die [HTTP Warn Codes Registry auf iana.org](https://www.iana.org/assignments/http-warn-codes) definiert den Namensraum für Warning-Codes.

| Code | Text                             | Beschreibung                                                                                                                                                                                              |
| ---- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Response ist veraltet (die für die Response festgelegte Ablaufzeit ist überschritten).                                                                                |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Response zu validieren, schlug fehl, weil der Server nicht erreicht werden konnte.                                                                                             |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                                |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Gültigkeitsdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt, und das Alter der Response beträgt mehr als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Nutzer präsentiert oder protokolliert werden sollten.                                                                                                                  |
| 214  | Transformation Applied           | Wird von einem Proxy hinzugefügt, wenn er eine Transformation auf die Repräsentation anwendet, etwa eine Änderung der Content-Codierung, des Medientyps oder Ähnlichem.                                   |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Nutzer präsentiert oder protokolliert werden sollten. Dieser Warn-Code ähnelt dem Warn-Code 199 und weist zusätzlich auf eine dauerhafte Warnung hin.                  |

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
