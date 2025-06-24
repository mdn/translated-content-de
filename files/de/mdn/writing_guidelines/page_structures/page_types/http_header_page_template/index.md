---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiteninformationen:**
>
> Der Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren. Die Werte sollten entsprechend für den speziellen Header aktualisiert werden.
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
> sidebar: httpsidebar
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _NameOfTheHeader header_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _Titel_ von `Cache-Control header`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Formatieren Sie ihn als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _kurzen Titel_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Reference/Headers/NameOfTheHeader` formatiert. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Slug `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP `page-type` Werte, siehe den [HTTP Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Flaggen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheHeader` mit dem Abfragezeichenfolgewert für den Header im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt auszufüllen (anstelle des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie das zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (z. B. das automatische Hinzufügen eines Anforderungs-Headers zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwort-Header).
>     In diesen Fällen entferne den browser-compat-Schlüssel und Wert.
>
> - **sidebar**
>   - : Dies ist immer `httpsidebar`.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs direkt nach dem Seiten-Frontmatter.
> Diese Makros werden automatisch durch Tooling hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen dieser:
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell ist](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung des Headers [nicht empfohlen wird](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardmäßiges** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Geben Sie keine Status-Header-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standardmäßigen** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Vergessen Sie nicht, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz auf der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird für X in Y-Situationen verwendet.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anforderungs-Header")}}, einen {{Glossary("response_header", "Antwort-Header")}} handelt oder ob er beides sein kann.
Der zusammenfassende Absatz sollte idealerweise ein oder zwei kurze Sätze umfassen.

In diesem Abschnitt können Sie bemerkenswerte Fallstricke oder häufige Fallstricke erwähnen und auf Beispiele oder detailliertere Dokumentationen (Leitfäden, etc.) verlinken.
Zwei oder drei Absätze in diesem Abschnitt sind geeignet, und wenn es wesentliche Anwendungshinweise gibt, verwenden Sie einen Abschnitt "Beschreibung" nach den "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Inklusive Header-Kategorie (oder Kategorien), z.B.
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-Whitelistet-Antwortheader")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntax-Feld aus, wie das untenstehende, entsprechend den Anleitungen in unserem [Syntaxabschnitts-Artikel](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfelder, Unterabschnitte und Erklärungen einfügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl die Token- als auch die Quoted-String-Syntax verwenden kann.
Mehrere Direktiven sind durch Kommata getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie eine kurze Beschreibung der Direktive ein und was sie bewirkt.
    Fügen Sie für jede Direktive einen Begriff und eine Definition ein.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um in den Eröffnungsabsätzen aufgenommen zu werden, geben Sie hier so viele Details wie nötig an, wie z.B. Hintergrundinformationen, Nutzungshinweise und Links zu Dokumentationen.
Dies ist ein guter Ort, um darauf hinzuweisen, ob reale Muster von dem in den Spezifikationen beschriebenen abweichen, wenn weit verbreitete Implementierungen von dem abweichen, was in Spezifikationen beschrieben ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Erstellung von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine letzte H3-Überschrift (`###`) mit dem Text „Mehr Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift „Beispiele“ hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezielle Behandlung für den Header hat, entfernen Sie das Makro unten._
_Falls der Browser eine spezifische Behandlung für den Header hat, entfernen Sie die Backticks und den Backslash in der Markdown-Datei, um dieses Makro zu verwenden._

`\{{Compat}}`

_Wenn der Browser eine spezielle Behandlung für den Header hat, entfernen Sie den Text unten:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration („Browser-Kompatibilität“ gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen.
Für weitere Richtlinien, siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status und Header in einem einzigen Listenelement zusammenfassen, um es kurz zu halten.

- link1
- link2
- external_link (Jahr)
