---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Content-Language`** {{Glossary("representation_header", "Repräsentations-Header")}} wird verwendet, um die für die Zielgruppe vorgesehenen Sprache(n) zu beschreiben, sodass Benutzer sie entsprechend ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel zeigt `Content-Language: de-DE` an, dass das Dokument für deutschsprachige Nutzer gedacht ist. Das Dokument kann in Englisch verfasst sein, nicht auf Deutsch, als Teil eines Sprachkurses für deutschsprachige Teilnehmer. Um die Sprache anzugeben, in der das Dokument **verfasst ist**, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut.

Wenn kein `Content-Language` angegeben ist, wird standardmäßig davon ausgegangen, dass der Inhalt für alle Sprachzielgruppen gedacht ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen nur `0-9`, `A-Z`, `a-z`, ein Leerzeichen oder die Zeichen `*,-.;=` sein.

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Direktiven

- `language-tag`
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Sequenz von einem oder mehreren gross-/kleinunabhängigen Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z. B. `en` = Englisch) und wird optional von einer Reihe von Subtags gefolgt, die die Reichweite dieser Sprache verfeinern oder einschränken (z. B. `en-CA` = die Variante des Englisch, wie sie in Kanada gesprochen wird).

> [!NOTE]
> Sprach-Tags sind formal in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die auf den [ISO 639](https://en.wikipedia.org/wiki/ISO_639)-Standard (oft die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code) angewiesen sind.

## Beispiele

### Die Sprache angeben, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder von Teilen davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Dokumentsprache anzugeben, wie unten gezeigt:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Eine Zielgruppe für eine Ressource angeben

Der `Content-Language`-Header wird verwendet, um die **vorgesehene Zielgruppe der Seite** zu spezifizieren und kann angeben, dass dies mehr als eine Sprache ist.

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
- [HTML `lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang)
