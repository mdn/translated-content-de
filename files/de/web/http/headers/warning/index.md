---
title: Warnung
slug: Web/HTTP/Headers/Warning
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{deprecated_header}}

> [!NOTE]
> Der Header wurde als veraltet markiert, da er nicht weit verbreitet generiert oder Benutzern angezeigt wird (siehe [RFC9111](https://www.rfc-editor.org/rfc/rfc9111#field.warning)).
> Einige der Informationen können aus anderen Headern wie {{httpheader("Age")}} abgeleitet werden.

Der **`Warning`** HTTP-Header enthält Informationen über mögliche Probleme mit dem Status der Nachricht.
Mehr als ein `Warning`-Header kann in einer Antwort erscheinen.

`Warning`-Header-Felder können im Allgemeinen auf jede Nachricht angewendet werden.
Einige Warn-Codes sind jedoch spezifisch für Caches und können nur auf Antwortnachrichten angewendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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

## Anweisungen

- \<warn-code>

  - : Eine dreistellige Warnnummer. Die erste Ziffer gibt an, ob das `Warning` aus einer gespeicherten Antwort nach der Validierung gelöscht werden muss.

    - `1xx`-Warn-Codes beschreiben die Frische oder den Validierungsstatus der Antwort und werden nach erfolgreicher Validierung von einem Cache gelöscht.
    - `2xx`-Warn-Codes beschreiben einen Aspekt der Repräsentation, der durch eine Validierung nicht berichtigt wird und nicht von einem Cache nach der Validierung gelöscht wird, es sei denn, eine vollständige Antwort wird gesendet.

- \<warn-agent>
  - : Der Name oder das Pseudonym des Servers oder der Software, die den `Warning`-Header hinzufügt (dies kann "-" sein, wenn der Agent unbekannt ist).
- \<warn-text>
  - : Ein hinweisender Text, der den Fehler beschreibt.
- \<warn-date>
  - : Ein Datum. Dies ist optional. Wenn mehr als ein `Warning`-Header gesendet wird, schließen Sie ein Datum ein, das mit dem {{HTTPHeader("Date")}}-Header übereinstimmt.

## Warnungscodes

Das [HTTP Warn Codes-Bestandsverzeichnis bei iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) definiert den Namensraum für Warn-Codes.

| Code | Text                             | Beschreibung                                                                                                                                                                                        |
| ---- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | Die von einem Cache bereitgestellte Antwort ist veraltet (die für die Antwort festgelegte Ablaufzeit ist überschritten).                                                                            |
| 111  | Revalidation Failed              | Ein Versuch, die veraltete Antwort zu validieren, ist fehlgeschlagen, da der Server nicht erreicht werden konnte.                                                                                   |
| 112  | Disconnected Operation           | Der Cache ist absichtlich vom Rest des Netzwerks getrennt.                                                                                                                                          |
| 113  | Heuristic Expiration             | Ein Cache hat heuristisch eine [Frische Lebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) von mehr als 24 Stunden gewählt und das Alter der Antwort beträgt mehr als 24 Stunden. |
| 199  | Miscellaneous Warning            | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten.                                                                                                          |
| 214  | Transformation Applied           | Von einem Proxy hinzugefügt, wenn es eine Transformation der Repräsentation anwendet, wie z.B. Änderung der Content-Coding, des Medien-Typs oder Ähnliches.                                         |
| 299  | Miscellaneous Persistent Warning | Beliebige Informationen, die einem Benutzer präsentiert oder protokolliert werden sollten. Dieser Warn-Code ähnelt dem Warn-Code 199 und zeigt zusätzlich eine persistente Warnung an.              |

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
