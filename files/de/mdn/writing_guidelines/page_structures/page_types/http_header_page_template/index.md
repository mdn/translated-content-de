---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

> [!NOTE]
> _Entfernen Sie diese ganze erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seitenvorbemerkungen:**
>
> Die Vorbemerkungen am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheHeader Header
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als _NameOfTheHeader Header_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _title_ von `Cache-Control Header`.
> - **short-title**
>   - : Kurztitel, der in Brotkrümeln und Seitenleisten verwendet wird. Formatieren Sie als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _short-title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Reference/Headers/NameOfTheHeader` formatiert. Zum Beispiel ist der Slug des [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Headers `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` verwendet werden. Für andere HTTP `page-type` Werte siehe den [HTTP-Bereich](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Vorbemerkungsschlüssel.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheHeader` mit der Abfragezeichenfolge für den Header im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um den Kompatibilitätsbereich zu füllen (Ersetzen des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (wie das automatische Hinzufügen eines Anforderungsheaders zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwortheader).
>     In diesen Fällen entfernen Sie den browser-compat Schlüssel und Wert.
>
> - **sidebar**
>   - : Dies ist immer `http`.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Top-der-Seite Makros**
>
> Eine Reihe von Makros erscheinen oben im Inhaltsbereich unmittelbar nach den Seitenvorbemerkungen.
> Diese Makros werden automatisch durch Tools hinzugefügt, daher vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dieses generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Einstellung in Firefox versteckt ist, sollten Sie dafür auch einen Eintrag auf der [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) Seite ausfüllen.
> - `\{{deprecated_header}}` — dieses generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dieses generiert ein **Nicht-standardisiert** Banner, das anzeigt, dass das Feature zu keiner Spezifikation gehört.
>
> Stellen Sie keine Statusheader-Makros manuell bereit. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentelle**, **Veraltete** und **Nicht-standardisierte** Banner werden direkt nach diesem Anmerkungsblock angezeigt.
>
> _Denken Sie daran, diese ganze erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Headertyp) wird für X in Y Umständen verwendet.

Der 'Headertyp' sollte angeben, ob es sich um einen {{Glossary("request_header", "Request-Header")}}, einen {{Glossary("response_header", "Response-Header")}} handelt, oder ob es sich um beide handeln kann.
Der Zusammenfassungsabschnitt sollte idealerweise ein oder zwei kurze Sätze umfassen.

Sie können bemerkenswerte Fallen oder häufige Stolpersteine in diesem Abschnitt erwähnen, mit Links zu Beispielen oder detaillierteren Dokumentationen (Leitfäden, etc.) in diesem Abschnitt.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Nutzungshinweise gibt, verwenden Sie einen "Beschreibung"-Abschnitt nach den "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        Fügen Sie die Headerkategorie (oder Kategorien) ein, z.B.
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweise</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-befreiter Antwortheader")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, gemäß den Richtlinien in unserem Artikel zu den [Syntax-Abschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfelder, Unterabschnitte und Erklärungen je nach Bedarf einfügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht groß- und kleinschreibungssensitiv und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichen-Syntax verwenden kann.
Mehrere Direktiven werden durch Kommas getrennt (löschen Sie Informationen, je nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion hinzu.
    Fügen Sie für jedes Direktive einen Begriff und eine Definition ein.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen je nach Bedarf einfügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um ihn in die einleitenden Absätze aufzunehmen, geben Sie hier so viele Details wie nötig an, wie Hintergrundinformationen, Hinweise zur Nutzung und Links zur Dokumentation.
Hier ist auch ein guter Platz, um darauf hinzuweisen, ob reale Muster von den spezifizierten abweichen, wenn weit verbreitete Implementierungen von dem abweichen, was in den Spezifikationen beschrieben ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele einfügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel der Fetch-Nutzung
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften ein; fügen Sie nur die Links direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich im Markdown-Dokument._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Verarbeitung für den Header hat, entfernen Sie das folgende Makro._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich im Markdown-Dokument._

`\{{Compat}}`

_Wenn der Browser spezifische Verarbeitung für den Header hat, entfernen Sie den untenstehenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragent-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen.
Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verweisen.
Sie können verwandte Status und Header in einem einzigen Listeneintrag zur Kürze gruppieren.

- link1
- link2
- external_link (year)
