---
title: Warning
slug: Web/HTTP/Headers/Warning
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet markiert, weil er nicht weit verbreitet erzeugt oder Benutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der **`Warning`** HTTP-Header enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden.
Einige Warncodes sind jedoch spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Direktiven

- `<warn-code>`

  - : Eine dreistellige Warnnummer. Die erste Ziffer zeigt an, ob der `Warning` nach der Validierung aus einer gespeicherten Antwort gelöscht werden muss.

    - `1xx`-Warncodes beschreiben den Frische- oder Validierungsstatus der Antwort und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx`-Warncodes beschreiben einen Aspekt der Darstellung, der durch eine Validierung nicht behoben wird, und werden von einem Cache nach der Validierung nicht gelöscht, es sei denn, eine vollständige Antwort wird gesendet.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzugefügt hat (kann "-" sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein Beratungs-Text, der den Fehler beschreibt.
- `<warn-date>`
  - : Ein Datum. Dies ist optional. Wenn mehr als ein `Warning`-Header gesendet wird, fügen Sie ein Datum ein, das zum {{HTTPHeader("Date")}}-Header passt.

## Warncodes

Das [HTTP Warn Codes-Register bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warncodes.

| Code | Text                            | Beschreibung                                                                                                                                                                                             |
| ---- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Antwort ist veraltet            | Die vom Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablaufzeit ist abgelaufen).                                                                                          |
| 111  | Revalidierung fehlgeschlagen    | Ein Versucht, die veraltete Antwort zu validieren, ist aufgrund von Unerreichbarkeit des Servers fehlgeschlagen.                                                                                         |
| 112  | Getrennte Operation             | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                               |
| 113  | Heuristische Ablauf             | Ein Cache hat heuristisch eine [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewählt, die länger als 24 Stunden ist, und das Alter der Antwort ist größer als 24 Stunden. |
| 199  | Verschiedene Warnung            | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten.                                                                                                               |
| 214  | Transformation angewandt        | Hinzugefügt von einem Proxy, wenn er eine Transformation an der Darstellung vornimmt, wie zum Beispiel das Ändern der Content-Coding, des Medientyps oder Ähnlichem.                                     |
| 299  | Verschiedene dauerhafte Warnung | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten. Dieser Warncode ähnelt dem Warncode 199 und zeigt zusätzlich eine dauerhafte Warnung an.                      |

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
