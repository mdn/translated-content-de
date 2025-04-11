---
title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-**`Content-Language`**-{{Glossary("representation_header", "Repräsentations-Header")}} wird verwendet, um die Sprache(n) zu beschreiben, die für das Publikum bestimmt sind, damit Benutzer sie entsprechend ihrer bevorzugten Sprache unterscheiden können.

Zum Beispiel zeigt `Content-Language: de-DE` an, dass das Dokument für Deutschsprachige gedacht ist. Das Dokument kann auf Englisch geschrieben sein, nicht auf Deutsch, als Teil eines Sprachkurses für Deutschsprachige. Um die Sprache anzugeben, in der das Dokument **geschrieben ist**, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.

Wenn kein `Content-Language` angegeben ist, ist die Standardeinstellung, dass der Inhalt für alle Sprachgruppen bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sichere Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte können nur `0-9`, `A-Z`, `a-z`, ein Leerzeichen oder die Zeichen `*,-.;=` sein.

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Direktiven

- `language-tag`
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Abfolge von einem oder mehreren, nicht groß-/kleinschreibungssensitiven Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z. B. `en` = Englisch) und wird optional von einer Reihe von Subtags gefolgt, die den Geltungsbereich dieser Sprache verfeinern oder eingrenzen (z. B. `en-CA` = die englische Variante in Kanada).

> [!NOTE]
> Sprach-Tags sind formell in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die sich auf den [ISO 639](https://en.wikipedia.org/wiki/ISO_639)-Standard stützen (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code), die verwendet werden sollen.

## Beispiele

### Angabe der Sprache, in der ein Dokument geschrieben ist

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder von Teilen davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Dokumentensprache anzugeben, wie unten gezeigt:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Angabe einer Zielgruppe für eine Ressource

Der `Content-Language`-Header wird verwendet, um das **beabsichtigte Publikum der Seite** anzugeben und kann darauf hinweisen, dass dies mehr als eine Sprache ist.

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
- [HTML `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang)
