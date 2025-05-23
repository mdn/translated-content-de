---
title: Content-Language header
short-title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Content-Language`**-{{Glossary("representation_header", "Repräsentations-Header")}} wird verwendet, um die Sprache(n) zu beschreiben, die für das Publikum bestimmt sind, damit Benutzer sie gemäß ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel bedeutet `Content-Language: de-DE`, dass das Dokument für deutschsprachige Benutzer bestimmt ist. Das Dokument kann in Englisch verfasst sein, nicht in Deutsch, als Teil eines Sprachkurses für deutschsprachige Benutzer. Um die Sprache anzugeben, in der das Dokument **verfasst ist**, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.

Wenn kein `Content-Language` angegeben ist, wird standardmäßig angenommen, dass der Inhalt für alle Sprachzielgruppen gedacht ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}}
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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren nicht case-sensitiven Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z.B. `en` = Englisch) und optional gefolgt von einer Reihe von Subtags, die das Spektrum dieser Sprache weiter verfeinern oder einschränken (z.B. `en-CA` = die Varietät des Englischen, wie sie in Kanada verwendet wird).

> [!NOTE]
> Sprach-Tags sind formal definiert in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt), die sich auf den [ISO 639](https://de.wikipedia.org/wiki/ISO_639)-Standard (sehr häufig die [ISO 639-1 Code-Liste](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes)) für [Sprachcodes](https://de.wikipedia.org/wiki/Sprachcode) stützen.

## Beispiele

### Angabe der Sprache, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder Teilen davon anzugeben.

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

Der `Content-Language`-Header wird verwendet, um die **vorgesehene Zielgruppe** der Seite zu spezifizieren und kann angeben, dass diese mehr als eine Sprache umfasst.

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
