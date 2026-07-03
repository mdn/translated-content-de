---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Die Frontmatter am Anfang der Seite wird zur Definition von "Seitenmetadaten" verwendet.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheHeader-Header
> short-title: NameOfTheHeader
> slug: Web/HTTP/Reference/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> sidebar: http
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als _NameOfTheHeader-Header_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header einen _title_ von `Cache-Control-Header`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Formatieren Sie als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header einen _short-title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTTP/Reference/Headers/NameOfTheHeader`. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header einen _slug_ von `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` sein. Für andere HTTP `page-type`-Werte siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type`-Frontmatter-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden, sondern wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheHeader` durch den Abfragezeichenfolgen des Headers im [Browser-Kompatibilitäts-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsbereich auszufüllen (Ersetzen des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitäts-Daten-Repo</a> erstellen/aktualisieren müssen und dass der Eintrag für den Header Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden zum Hinzufügen solcher Einträge](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (wie automatisch einem Anfrage-Header zu einigen Anfragen hinzufügen oder Verhaltensänderungen basierend auf Daten in einem Antwort-Header). Für diese Fälle entfernen Sie den `browser-compat`-Schlüssel und Wert.
> - **sidebar**
>   - : Dies ist immer `http`.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Oben-auf-der-Seite-Makros**
>
> Eine Reihe von Makros erscheint oben im Inhaltsteil unmittelbar nach der Seiten-Frontmatter.
> Diese Makros werden automatisch durch Tooling hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen von ihnen:
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn er experimentell ist und die Technologie hinter einem Flag in Firefox verborgen ist, sollten Sie auch einen Eintrag für sie auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) füllen.
> - `\{{deprecated_header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-Standard**-Banner, das darauf hinweist, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentelle**, **Veraltete** und **Nicht-Standard** Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird in X unter Y Umständen verwendet.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anfrage-Header")}}, einen {{Glossary("response_header", "Antwort-Header")}} handelt oder ob er beides sein kann.
Der zusammenfassende Absatz sollte idealerweise ein oder zwei kurze Sätze sein.

Sie können in diesem Abschnitt bemerkenswerte Stolpersteine oder häufige Fallstricke erwähnen und auf Beispiele oder detailliertere Dokumentationen (Leitfäden, usw.) verlinken.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Hinweise zur Nutzung gibt, verwenden Sie nachfolgend einen "Beschreibung"-Abschnitt nach den "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Fügen Sie die Header-Kategorie (oder Kategorien) ein, z.B.
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Antwort-Header")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, entsprechend den Anweisungen in unserem Artikel [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Syntax-Felder, Unterabschnitte und Erklärungen nach Bedarf einfügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl die Token- als auch die Zeichenfolgen-Syntax verwenden kann.
Mehrere Direktiven werden durch Kommas getrennt (löschen Sie ggf. nicht zutreffende Informationen).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Definitionslisten, Unterabschnitte und Erklärungen nach Bedarf einfügen.

## Beschreibung

Wenn im Eröffnungsabschnitt zu viel Inhalt enthalten wäre, geben Sie hier so viele Details wie nötig an, z.B. Hintergrundinformationen, Hinweise zur Nutzung und Links zur Dokumentation.
Dies ist ein guter Ort, um zu erwähnen, ob reale Muster von dem abweichen, was laut Spezifikationen vorgesehen ist, wenn weit verbreitete Implementierungen von dem beschriebenen abweichen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das folgende Makro._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

`\{{Compat}}`

_Wenn der Browser eine spezifische Handhabung für den Header hat, entfernen Sie den folgenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzerintegration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden im Zusammenhang mit dem aktuellen HTTP-Header hinzu.
Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status und Header in einem einzigen Listeneintrag gruppieren, um Kürze zu erreichen.

- link1
- link2
- external_link (Jahr)
