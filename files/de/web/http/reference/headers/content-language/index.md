---
title: Content-Language header
short-title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der HTTP **`Content-Language`** {{Glossary("representation_header", "Darstellungs-Header")}} wird verwendet, um die Sprache(n) für das beabsichtigte Publikum zu beschreiben, damit Benutzer dies entsprechend ihrer bevorzugten Sprache unterscheiden können.

Zum Beispiel zeigt `Content-Language: de-DE` an, dass das Dokument für deutschsprachige Personen gedacht ist. Das Dokument kann als Teil eines Sprachkurses für deutsche Sprecher auf Englisch verfasst sein, nicht auf Deutsch. Um die Sprache anzugeben, in der das Dokument **geschrieben** ist, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.

Falls kein `Content-Language` angegeben ist, wird standardmäßig angenommen, dass der Inhalt für alle Sprachzielgruppen bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen, nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safe-gelisteter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safe-gelisteter Anforderungs-Header")}}
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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren nicht-empfindlichen Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z. B. `en` = Englisch) und optional von einer Reihe von Subtags gefolgt wird, die den Bereich dieser Sprache verfeinern oder eingrenzen (z. B. `en-CA` = die Variante des in Kanada kommunizierten Englischs).

> [!NOTE]
> Sprachen werden unter Verwendung von {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} spezifiziert, die auf dem [ISO 639](https://en.wikipedia.org/wiki/ISO_639)-Standard basieren (häufig die [ISO 639-1-Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code).

## Beispiele

### Angabe der Sprache, in der ein Dokument geschrieben ist

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder dessen Teilen anzugeben.

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

Der `Content-Language`-Header wird verwendet, um die **beabsichtigte Zielgruppe** einer Seite anzugeben und kann bedeuten, dass dies mehr als eine Sprache ist.

```http
Content-Language: de, en
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Language")}}
- [HTTP Headers, Meta-Elemente und Sprachinformationen](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang)
