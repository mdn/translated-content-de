---
title: Content-Language header
short-title: Content-Language
slug: Web/HTTP/Reference/Headers/Content-Language
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Content-Language`**-{{Glossary("representation_header", "Darstellungs-Header")}} wird verwendet, um die Sprache(n) zu beschreiben, die für das Publikum vorgesehen sind, sodass Benutzer sie entsprechend ihrer eigenen bevorzugten Sprache unterscheiden können.

Zum Beispiel gibt `Content-Language: de-DE` an, dass das Dokument für deutschsprachige Nutzer bestimmt ist. Das Dokument kann auf Englisch und nicht auf Deutsch verfasst sein, als Teil eines Sprachkurses für Deutschsprachige. Um die Sprache anzugeben, in der das Dokument **geschrieben ist**, verwenden Sie stattdessen das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut.

Wenn kein `Content-Language` angegeben ist, ist der Standard, dass der Inhalt für alle Sprachpublika bestimmt ist. Mehrere Sprach-Tags sind ebenfalls möglich, ebenso wie die Anwendung des `Content-Language`-Headers auf verschiedene Medientypen und nicht nur auf schriftliche Dokumente.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anforderungs-Header")}}
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
  - : Mehrere Sprach-Tags werden durch ein Komma getrennt. Jedes Sprach-Tag ist eine Folge von einem oder mehreren Groß-/Kleinschreibungskontext-unabhängigen Untertags, die jeweils durch einen Bindestrich (`-`) getrennt sind. In den meisten Fällen besteht ein Sprach-Tag aus einem primären Sprach-Untertag, der eine breite Familie verwandter Sprachen identifiziert (z.B. `en` = Englisch), und wird optional von einer Reihe von Untertags gefolgt, die den Bereich dieser Sprache präzisieren oder einschränken (z.B. `en-CA` = die Variante des Englischen, wie sie in Kanada verwendet wird).

> [!NOTE]
> Sprach-Tags sind formal in [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) definiert, die sich auf den [ISO 639](https://de.wikipedia.org/wiki/ISO_639)-Standard stützen (häufig die [ISO-639-1-Codeliste](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes)) für [Sprach-Codes](https://de.wikipedia.org/wiki/Sprachcode) zur Verwendung.

## Beispiele

### Angabe der Sprache, in der ein Dokument verfasst ist

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird auf HTML-Elementen verwendet, um die Sprache eines gesamten [HTML](/de/docs/Web/HTML)-Dokuments oder Teile davon anzugeben.

```html
<html lang="de">
  …
</html>
```

Verwenden Sie **nicht** dieses Meta-Element, um die Sprache des Dokuments anzugeben, wie unten gezeigt:

```html example-bad
<meta http-equiv="content-language" content="de" />
```

### Angabe einer Zielgruppe für eine Ressource

Der `Content-Language`-Header wird verwendet, um das **beabsichtigte Publikum der Seite** anzugeben und kann darauf hinweisen, dass es sich um mehr als eine Sprache handelt.

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
- [HTML `lang` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang)
