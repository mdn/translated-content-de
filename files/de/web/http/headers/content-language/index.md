---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Language`** {{Glossary("representation_header", "Representation-Header")}} wird verwendet, um die Sprache(n) zu beschreiben, die für das Publikum bestimmt sind, sodass Benutzer sie entsprechend ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel gibt `Content-Language: de-DE` an, dass das Dokument für deutschsprachige Benutzer vorgesehen ist. Das Dokument kann in Englisch und nicht in Deutsch geschrieben sein, als Teil eines Sprachkurses für Deutschsprecher. Um die Sprache anzugeben, in der das Dokument **geschrieben ist**, verwenden Sie stattdessen das Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang).

Wenn kein `Content-Language` angegeben ist, ist der Standard, dass der Inhalt für alle Sprachzielgruppen vorgesehen ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Representation_header", "Representation-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Die Werte können nur `0-9`, `A-Z`, `a-z`, ein Leerzeichen oder die Zeichen `*,-.;=` sein.

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Direktiven

- `language-tag`
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren Groß-/Kleinschreibung-unempfindlichen Subtags, die jeweils durch einen Bindestrich (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z.B. `en` = Englisch), und wird optional von einer Serie von Subtags gefolgt, die den Bereich der Sprache verfeinern oder einschränken (z.B. `en-CA` = die Variante des Englischen, wie sie in Kanada gesprochen wird).

> [!NOTE]
> Sprach-Tags sind formell in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, welche auf dem [ISO 639](https://en.wikipedia.org/wiki/ISO_639)-Standard basieren (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code) zur Verwendung.

## Beispiele

### Die Sprache angeben, in der ein Dokument geschrieben ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder Teile davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Sprache des Dokuments anzugeben, wie unten gezeigt:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Ein Zielpublikum für eine Ressource angeben

Der `Content-Language`-Header wird verwendet, um das **beabsichtigte Publikum der Seite** festzulegen und kann angeben, dass dies mehr als eine Sprache ist.

```http
Content-Language: de, en
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Language")}}
- [HTTP-Header, Meta-Elemente und Sprachinformationen](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang)
