---
title: Warning
slug: Web/HTTP/Headers/Warning
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet erklärt, da er nicht häufig generiert oder den Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der **`Warning`** HTTP-Header enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden.
Jedoch sind einige Warncodes spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        [Response-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Nicht erlaubter Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Direktiven

- \<warn-code>

  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob der `Warning` nach einer Validierung aus einer gespeicherten Antwort gelöscht werden muss.

    - `1xx` Warncodes beschreiben den Frische- oder Validierungszustand der Antwort und werden nach einer erfolgreichen Validierung von einem Cache gelöscht.
    - `2xx` Warncodes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht behoben wird, und werden nicht von einem Cache gelöscht, es sei denn, es wird eine vollständige Antwort gesendet.

- \<warn-agent>
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- \<warn-text>
  - : Ein Hinweistext, der den Fehler beschreibt.
- \<warn-date>
  - : Ein Datum. Dies ist optional. Wenn mehr als ein `Warning`-Header gesendet wird, fügen Sie ein Datum hinzu, das dem {{HTTPHeader("Date")}}-Header entspricht.

## Warncodes

Das [HTTP Warn Codes Register bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warncodes.

| Code | Text                             | Beschreibung                                                                                                                                                                               |
| ---- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablauffrist ist abgelaufen).                                                                     |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, ist aufgrund der Unfähigkeit, den Server zu erreichen, fehlgeschlagen.                                                                  |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                 |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewählt, die größer als 24 Stunden ist, und das Alter der Antwort ist größer als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Nutzer angezeigt oder protokolliert werden sollten.                                                                                                     |
| 214  | Transformation Applied           | Wird von einem Proxy hinzugefügt, wenn er eine Transformation an der Repräsentation vornimmt, wie z.B. die Änderung der content-coding, media-type oder dergleichen.                       |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Nutzer angezeigt oder protokolliert werden sollten. Dieser Warn-Code ist ähnlich wie der Warn-Code 199 und zeigt zusätzlich eine dauerhafte Warnung an. |

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
- [HTTP-Statuscodes](/de/docs/Web/HTTP/Status)
