---
title: Warning header
short-title: Warning
slug: Web/HTTP/Reference/Headers/Warning
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet gekennzeichnet, weil er nicht weit verbreitet erzeugt oder den Nutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/info/rfc9111/#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der HTTP **`Warning`** {{Glossary("request_header", "Anfrage")}} und {{Glossary("response_header", "Antwort-Header")}} enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden.
Einige Warn-Codes sind jedoch spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Eine dreistellige Warnnummer. Die erste Ziffer zeigt an, ob der `Warning` nach der Validierung aus einer gespeicherten Antwort gelöscht werden muss.
    - `1xx`-Warn-Codes beschreiben die Frische oder Validierungsstatus der Antwort und werden von einem Cache nach erfolgreicher Validierung gelöscht.
    - `2xx`-Warn-Codes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht behoben wird, und werden von einem Cache nach der Validierung nicht gelöscht, es sei denn, eine vollständige Antwort wird gesendet.

- `<warn-agent>`
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (kann "-" sein, wenn der Agent unbekannt ist).
- `<warn-text>`
  - : Ein Hinweistext, der den Fehler beschreibt.
- `<warn-date>` {{optional_inline}}
  - : Ein Datum. Wenn mehr als ein `Warning`-Header gesendet wird, fügen Sie ein Datum hinzu, das dem {{HTTPHeader("Date")}}-Header entspricht.

## Warn-Codes

Das [HTTP Warn Codes-Register bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warn-Codes.

| Code | Text                             | Beschreibung                                                                                                                                                                                              |
| ---- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablaufzeit ist abgelaufen).                                                                                     |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, ist gescheitert, weil der Server nicht erreicht werden konnte.                                                                                          |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                                |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frische-Lebensdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt, und das Alter der Antwort ist größer als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten.                                                                                                                |
| 214  | Transformation Applied           | Von einem Proxy hinzugefügt, wenn er eine Transformation an der Repräsentation vornimmt, wie das Ändern der content-coding, des media-type oder Ähnlichem.                                                |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten. Dieser Warn-Code ist ähnlich wie der Warn-Code 199 und zeigt zusätzlich eine dauerhafte Warnung an.            |

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
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
