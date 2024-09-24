---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Content-Language`** {{Glossary("representation header")}} wird verwendet, um **die Sprache(n) zu beschreiben, die für das Publikum bestimmt sind**, damit Benutzer sie gemäß ihrer eigenen bevorzugten Sprache unterscheiden können.

Wenn zum Beispiel "`Content-Language: de-DE`" eingestellt ist, bedeutet das, dass das Dokument für deutschsprachige Personen gedacht ist (es zeigt jedoch nicht an, dass das Dokument auf Deutsch verfasst ist. Es könnte beispielsweise in Englisch geschrieben sein als Teil eines Sprachkurses für Deutschsprachige. Wenn Sie angeben möchten, in welcher Sprache das Dokument verfasst ist, verwenden Sie stattdessen das [`lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang)).

Wenn kein `Content-Language` angegeben ist, ist die Standardeinstellung, dass der Inhalt für alle Sprachgruppen bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language` Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass Werte nur
        <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, Leerzeichen oder
        <code>*,-.;=</code> sein können.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Direktiven

- `language-tag`
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren nicht case-sensitiven Subtags, die jeweils durch ein Bindestrich-Zeichen ("`-`", `%x2D`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z. B. "`en`" = Englisch) und optional gefolgt von einer Reihe von Subtags, die den Bereich dieser Sprache verfeinern oder eingrenzen (z. B. "`en-CA`" = die Variante des Englischen, wie sie in Kanada gesprochen wird).

> [!NOTE]
> Sprach-Tags werden formal in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die auf dem [ISO 639](https://en.wikipedia.org/wiki/ISO_639) Standard beruhen (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)), um [Sprachcodes](https://en.wikipedia.org/wiki/Language_code) zu verwenden.

## Beispiele

### Angabe der Sprache, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder Teile davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Sprache eines Dokuments anzugeben:

```html example-bad
<!-- ⚠️ Dies ist eine schlechte Praxis -->
<meta http-equiv="content-language" content="de" />
```

### Angabe einer Zielgruppe für eine Ressource

Der `Content-Language` Header wird verwendet, um das **beabsichtigte Publikum der Seite** anzugeben und kann darauf hinweisen, dass dies mehr als eine Sprache umfasst.

```http
Content-Language: de, en
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang)
