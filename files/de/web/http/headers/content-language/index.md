---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Content-Language`** [Repräsentations-Header](/de/docs/Glossary/representation_header) wird verwendet, um **die Sprache(n), die für das Publikum bestimmt sind, zu beschreiben**, sodass Benutzer sie entsprechend ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel, wenn `Content-Language: de-DE` gesetzt ist, bedeutet das, dass das Dokument für deutschsprachige Personen bestimmt ist (allerdings weist es nicht darauf hin, dass das Dokument auf Deutsch verfasst ist. Beispielsweise könnte es auf Englisch geschrieben sein als Teil eines Sprachkurses für deutschsprachige Personen. Wenn Sie angeben möchten, in welcher Sprache das Dokument verfasst ist, verwenden Sie stattdessen das [`lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang)).

Wenn kein `Content-Language` angegeben ist, ist der Standard, dass der Inhalt für alle Sprachzielgruppen bestimmt ist. Mehrere Sprachkennzeichnungen sind ebenfalls möglich, genauso wie die Anwendung des `Content-Language` Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentations-Header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Response-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Request-Header](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass die Werte nur
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
  - : Mehrere Sprachkennzeichnungen werden durch ein Komma getrennt. Jede Sprachkennzeichnung ist eine Sequenz von einem oder mehreren Groß-/Kleinschreibung-unabhängigen Unterkennzeichnungen, die jeweils durch ein Bindestrich-Zeichen (`-`) getrennt sind. In den meisten Fällen besteht eine Sprachkennzeichnung aus einer primären Sprachunterkennzeichnung, die eine breite Familie verwandter Sprachen identifiziert (z. B. `en` = Englisch) und wird optional von einer Reihe von Unterkennzeichnungen gefolgt, die den Bereich dieser Sprache verfeinern oder eingrenzen (z. B. `en-CA` = die in Kanada verwendete Variante des Englischen).

> [!NOTE]
> Sprachkennzeichnungen sind formell in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, das sich auf den [ISO 639](https://de.wikipedia.org/wiki/ISO_639)-Standard (häufig die [ISO 639-1-Code-Liste](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes)) für [Sprachcodes](https://de.wikipedia.org/wiki/Sprachcode) stützt.

## Beispiele

### Die Sprache angeben, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut wird bei HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder Teile davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um eine Dokumentensprache anzugeben:

```html example-bad
<!-- ⚠️ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### Eine Zielgruppe für eine Ressource angeben

Der `Content-Language` Header wird verwendet, um die **beabsichtigte Zielgruppe der Seite** anzugeben und kann darauf hinweisen, dass es sich um mehr als eine Sprache handelt.

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
