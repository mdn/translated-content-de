---
title: HTTP Header Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Diesen gesamten erläuternden Hinweis vor der Veröffentlichung entfernen_
>
> ---
>
> **Seitentitel:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheHeader header
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie es als _NameOfTheHeader header_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _title_ von `Cache-Control header`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Formatieren Sie es als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _short-title_ von `Cache-Control`.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTTP/Reference/Headers/NameOfTheHeader`. Zum Beispiel ist das [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Slug `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP `page-type` Werte siehe den [HTTP Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Schlüssel im Frontmatter.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Kompatibilitätsdaten des Browsers für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheHeader` durch den Abfragezeichenfolgenwert für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Abschnitt zur Kompatibilität auszufüllen (die `\{{Compat}}`-Makro zu ersetzen).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (z. B. das automatische Hinzufügen eines Anforderungsheaders zu einigen Anforderungen oder das Ändern des Verhaltens basierend auf Daten in einem Antwortheader).
>     In diesen Fällen entfernen Sie den Schlüssel und den Wert für die browser-compat.
> - **sidebar**
>   - : Dies ist immer `http`.
>     Siehe [Seitenstruktur: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs unmittelbar nach dem Seiten-Frontmatter.
> Diese Makros werden automatisch durch Tooling hinzugefügt, daher sollten Sie sie nicht hinzufügen oder entfernen:
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es sich um eine experimentelle Technologie handelt, die in Firefox hinter einem Pref versteckt ist, sollten Sie auch dafür einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standard**-Banner, das anzeigt, dass das Feature Teil keiner Spezifikation ist.
>
> Status-Header-Makros nicht manuell bereitstellen. Um diese Status zur Seite hinzuzufügen, siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standard**-Banner werden direkt nach diesem Hinweisteil gezeigt.
>
> _Diesen gesamten erläuternden Hinweis vor der Veröffentlichung entfernen_

{{SeeCompatTable}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird verwendet für X unter Y Umständen.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anforderungsheader")}}, einen {{Glossary("response_header", "Antwortheader")}} handelt oder ob er beides sein kann.
Der Zusammenfassungsabsatz sollte idealerweise ein oder zwei kurze Sätze enthalten.

Sie können in diesem Abschnitt auf bemerkenswerte Haken oder häufige Fallstricke hinweisen, indem Sie auf Beispiele oder detailliertere Dokumentation (Leitfäden usw.) verlinken.
Zwei oder drei Absätze in diesem Abschnitt sind angebracht, und wenn es umfangreiche Anmerkungen zur Verwendung gibt, verwenden Sie einen "Beschreibung"-Abschnitt nach den "Direktiven" weiter unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Einschließlich der Header-Kategorie (oder Kategorien), z.B.
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwortheader")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld wie das untenstehende gemäß den Anweisungen in unserem Artikel [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Syntaxfelder, Unterabschnitte und Erklärungen entsprechend einfügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht unterscheidend in Bezug auf Groß-/Kleinschreibung und haben ein optionales Argument, das sowohl die Token- als auch die Zitat-String-Syntax verwenden kann.
Mehrere Direktiven sind durch Kommas getrennt (Informationen nach Bedarf löschen).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie für jede Direktive einen Begriff und eine Definition hinzu.
- `directive2`
  - : usw.

Falls der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen entsprechend einfügen.

## Beschreibung

Wenn es zu viel Inhalt für die Einführung gibt, geben Sie hier so viele Details wie nötig an, wie z.B. Hintergrundinformationen, Hinweise zur Verwendung und Links zur Dokumentation.
Dies ist ein guter Ort, um darauf hinzuweisen, ob reale Muster von dem abweichen, was in den Spezifikationen festgelegt ist, wenn weit verbreitete Implementierungen von dem abweichen, was in den Spezifikationen beschrieben ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel beschreibt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen können, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine finale H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
>
> Beispiel für Fetch
>
> ### Mehr Beispiele
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
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das unten stehende Makro._
_Wenn der Browser spezifische Handhabung für den Header hat, entfernen Sie den Text unten:_

Dieses Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" trifft nicht zu).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten zu bieten.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen.
Für weitere Richtlinien, siehe den Abschnitt [See also section](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.
Sie können auf relevante Antwortstatus verweisen wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}`.
Sie können verwandte Status und Header in einem einzigen Listeneintrag gruppieren, um die Übersichtlichkeit zu erhöhen.

- link1
- link2
- external_link (Jahr)
