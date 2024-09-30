---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

Der **`Content-Language`** [Repräsentations-Header](/de/docs/Glossary/representation_header) wird verwendet, um **die Sprache(n), die für das Publikum vorgesehen sind, zu beschreiben**, sodass Benutzer diese entsprechend ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel, wenn `Content-Language: de-DE` gesetzt ist, sagt das, dass das Dokument für deutschsprachige Leser bestimmt ist (jedoch zeigt es nicht an, dass das Dokument auf Deutsch geschrieben ist. Es könnte zum Beispiel auf Englisch geschrieben sein, als Teil eines Sprachkurses für Deutschsprachige. Wenn Sie angeben möchten, in welcher Sprache das Dokument verfasst ist, verwenden Sie stattdessen das [`lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang)).

Wenn kein `Content-Language` angegeben ist, ist der Standard, dass der Inhalt für alle Sprachgruppen gedacht ist. Mehrere Sprach-Tags sind ebenfalls möglich, genauso wie die Anwendung des `Content-Language` Headers auf verschiedene Medientypen und nicht nur auf Textdokumente.

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
        [CORS-gesicherter Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-gesicherter Anforderungs-Header](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        ja, mit der zusätzlichen Einschränkung, dass die Werte nur aus
        <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, Leerzeichen oder
        <code>*,-.;=</code> bestehen dürfen.
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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren nicht case-sensitiven Subtags, die jeweils durch ein Bindestrichzeichen (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Subtag, der eine breite Familie verwandter Sprachen identifiziert (z.B. `en` = Englisch) und optional von einer Reihe von Subtags gefolgt wird, die den Bereich dieser Sprache verfeinern oder einschränken (z.B. `en-CA` = die Variante des Englischen, wie sie in Kanada verwendet wird).

> [!NOTE]
> Sprach-Tags sind formell in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, das sich auf den [ISO 639](https://en.wikipedia.org/wiki/ISO_639) Standard stützt (häufig die [ISO 639-1 Code-Liste](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) für [Sprachcodes](https://en.wikipedia.org/wiki/Language_code).

## Beispiele

### Angabe der Sprache, in der ein Dokument geschrieben ist

Das globale [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder einzelner Teile davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie dieses Meta-Element **nicht** auf diese Weise, um die Sprachangabe eines Dokuments vorzunehmen:

```html example-bad
<!-- ⚠️ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### Zielpublikum für eine Ressource angeben

Der `Content-Language` Header wird verwendet, um das **beabsichtigte Publikum der Seite** anzugeben und kann angeben, dass dies mehr als eine Sprache umfasst.

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
