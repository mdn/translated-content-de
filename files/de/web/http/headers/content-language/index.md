---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Content-Language`** {{Glossary("representation header")}} wird verwendet, um **die für das Publikum vorgesehene(n) Sprache(n) zu beschreiben**, damit Benutzer sie nach ihrer eigenen bevorzugten Sprache unterscheiden können.

Wenn beispielsweise `Content-Language: de-DE` festgelegt ist, bedeutet dies, dass das Dokument für deutschsprachige Benutzer bestimmt ist (es wird jedoch nicht angegeben, dass das Dokument auf Deutsch verfasst ist. Es könnte zum Beispiel auf Englisch als Teil eines Sprachkurses für deutschsprachige Lerner verfasst sein. Wenn Sie angeben möchten, in welcher Sprache das Dokument verfasst ist, verwenden Sie stattdessen das [`lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang)).

Wenn kein `Content-Language` angegeben wird, ist die Standardannahme, dass der Inhalt für alle Sprachgruppen bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language` Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Abfolge von einem oder mehreren fallunempfindlichen Subtags, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z. B. `en` = Englisch) und eventuell gefolgt von einer Reihe von Subtags, die die Sprachreichweite verfeinern oder einschränken (z. B. `en-CA` = die in Kanada gesprochene Variante des Englischen).

> [!NOTE]
> Sprach-Tags sind formell in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die auf dem [ISO 639](https://en.wikipedia.org/wiki/ISO_639) Standard (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code) basieren, die verwendet werden sollen.

## Beispiele

### Die Sprache angeben, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML) Dokuments oder Teilen davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie dieses Meta-Element **nicht** auf diese Weise, um die Sprache eines Dokuments anzugeben:

```html example-bad
<!-- ⚠️ Dies ist eine schlechte Praxis -->
<meta http-equiv="content-language" content="de" />
```

### Angabe einer Zielgruppe für eine Ressource

Der `Content-Language` Header wird verwendet, um die **beabsichtigte Zielgruppe** einer Seite anzugeben und kann darauf hinweisen, dass diese mehr als eine Sprache umfasst.

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
