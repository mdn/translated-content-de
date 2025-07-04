---
title: Warning header
short-title: Warning
slug: Web/HTTP/Reference/Headers/Warning
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet eingestuft, weil er nicht häufig generiert oder den Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige Informationen können aus anderen Headers wie {{httpheader("Age")}} abgeleitet werden.

Der HTTP **`Warning`** {{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Es können mehr als ein `Warning`-Header in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden.
Einige Warncodes sind jedoch spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob die `Warning` aus einer gespeicherten Antwort nach der Validierung gelöscht werden muss.
    - `1xx`-Warncodes beschreiben den Frische- oder Validierungsstatus der Antwort und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx`-Warncodes beschreiben einen Aspekt der Darstellung, der durch eine Validierung nicht behoben wird und nicht von einem Cache nach der Validierung gelöscht wird, es sei denn, es wird eine vollständige Antwort gesendet.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein Hinweistext, der den Fehler beschreibt.
- `<warn-date>` {{optional_inline}}
  - : Ein Datum. Wenn mehr als ein `Warning`-Header gesendet wird, fügen Sie ein Datum hinzu, das mit dem {{HTTPHeader("Date")}}-Header übereinstimmt.

## Warnungscodes

Das [HTTP Warn Codes Registry bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namespace für Warncodes.

| Code | Text                             | Beschreibung                                                                                                                                                                                            |
| ---- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablauffrist ist abgelaufen).                                                                                  |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, scheiterte aufgrund der Unfähigkeit, den Server zu erreichen.                                                                                         |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                              |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frischelebenszeit](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt, und das Alter der Antwort ist größer als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten.                                                                                                              |
| 214  | Transformation Applied           | Hinzugefügt von einem Proxy, wenn er eine beliebige Transformation an der Darstellung vornimmt, wie etwa die Änderung der Inhaltscodierung, des Medientyps oder ähnlichem.                              |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten. Dieser Warncode ist ähnlich wie der Warncode 199 und zeigt zusätzlich eine anhaltende Warnung an.            |

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
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
