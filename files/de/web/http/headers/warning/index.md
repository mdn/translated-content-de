---
title: Warnung
slug: Web/HTTP/Headers/Warning
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet markiert, da er weder häufig generiert noch den Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern, wie {{httpheader("Age")}}, abgeleitet werden.

Der **`Warning`** HTTP-Header enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Headerfelder können im Allgemeinen auf jede Nachricht angewendet werden.
Jedoch sind einige Warn-Codes spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob das `Warning` nach der Validierung aus einer gespeicherten Antwort gelöscht werden muss.

    - `1xx` Warn-Codes beschreiben die Frische oder den Validierungsstatus der Antwort und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx` Warn-Codes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht behoben wird und nicht durch einen Cache nach der Validierung gelöscht wird, es sei denn, es wird eine vollständige Antwort gesendet.

- \<warn-agent>
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- \<warn-text>
  - : Ein Beratungstext, der den Fehler beschreibt.
- \<warn-date>
  - : Ein Datum. Dies ist optional. Wenn mehr als ein `Warning`-Header gesendet wird, geben Sie ein Datum an, das dem {{HTTPHeader("Date")}}-Header entspricht.

## Warnungscodes

Das [HTTP Warn Codes-Register bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warnungscodes.

| Code | Text                                | Beschreibung                                                                                                                                                                               |
| ---- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 110  | Response is Stale                   | Die vom Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablaufzeit ist abgelaufen).                                                                            |
| 111  | Revalidation Failed                 | Der Versuch, die veraltete Antwort zu validieren, ist aufgrund der Unfähigkeit, den Server zu erreichen, fehlgeschlagen.                                                                   |
| 112  | Disconnected Operation              | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                 |
| 113  | Heuristic Expiration                | Ein Cache hat heuristisch eine [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt und das Alter der Antwort ist größer als 24 Stunden. |
| 199  | Miscellaneous Warning               | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten.                                                                                                 |
| 214  | Transformation Applied              | Von einem Proxy hinzugefügt, wenn es eine Transformation an der Repräsentation vornimmt, wie z.B. das Ändern der Content-Coding, des Medientyps oder ähnliches.                             |
| 299  | Miscellaneous Persistent Warning    | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten. Dieser Warn-Code ist dem Warn-Code 199 ähnlich und zeigt zusätzlich eine dauerhafte Warnung an.  |

## Beispiele

```http
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Date")}}
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
