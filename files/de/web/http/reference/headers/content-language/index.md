---
title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Content-Language`** {{Glossary("representation_header", "Darstellungsheader")}} wird verwendet, um die Sprache(n) zu beschreiben, die für das Zielpublikum bestimmt sind, damit Benutzer sie gemäß ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel zeigt `Content-Language: de-DE` an, dass das Dokument für deutschsprachige Leser bestimmt ist. Das Dokument kann auf Englisch geschrieben sein, nicht auf Deutsch, als Teil eines Sprachkurses für Deutschsprachige. Um die Sprache anzugeben, in der das Dokument **geschrieben ist**, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut.

Wenn kein `Content-Language` angegeben ist, wird standardmäßig angenommen, dass der Inhalt für alle Sprachgruppen bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language` Headers auf verschiedene Medientypen und nicht nur auf textuelle Dokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwortheader")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrageheader")}}
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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Sequenz von einem oder mehreren nicht case-sensitiven Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine allgemeine Familie verwandter Sprachen identifiziert (z.B. `en` = Englisch) und wird optional gefolgt von einer Reihe von Subtags, die den Bereich dieser Sprache verfeinern oder einschränken (z.B. `en-CA` = die Variante des Englischen, wie sie in Kanada verwendet wird).

> [!NOTE]
> Sprach-Tags sind formal in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die sich auf den [ISO 639](https://en.wikipedia.org/wiki/ISO_639) Standard (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code) stützen.

## Beispiele

### Die Sprache eines Dokuments angeben

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML) Dokuments oder Teilen davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Dokumentensprache anzugeben, wie unten gezeigt:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Ein Zielpublikum für eine Ressource angeben

Der `Content-Language` Header wird verwendet, um das **beabsichtigte Publikum** einer Seite zu spezifizieren und kann angeben, dass dies mehr als eine Sprache umfasst.

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
