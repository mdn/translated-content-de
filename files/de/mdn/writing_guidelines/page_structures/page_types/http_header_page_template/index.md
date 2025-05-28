---
title: HTTP-Header-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: a94222db08ada9dfbbdb880c064df91853204743
---

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem spezifischen Header aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie dies als _NameOfTheHeader header_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header den _title_ `Cache-Control header`.
> - **short-title**
>   - : Ein kurzer Titel, der in Brotkrumen und Seitenleisten verwendet wird. Formatieren Sie dies als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header den _short-title_ `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Reference/Headers/NameOfTheHeader` formatiert. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Slug `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss dies `http-header` sein. Weitere HTTP-`page-type`-Werte finden Sie im [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type`-Frontmatter-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheHeader` durch den Abfrage-String für den Header im [Browser-Kompatiblitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um den Kompatibilitätsabschnitt zu füllen (Ersetzen des `\{{Compat}}`-Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (wie z.B. das automatische Hinzufügen eines Anforderungsheaders zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwortheader).
>     In diesen Fällen entfernen Sie den browser-compat-Schlüssel und Wert.
>
> - **sidebar**
>   - : Dies ist immer `httpsidebar`.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am oberen Seitenrand**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsabschnitts unmittelbar nach dem Seiten-Frontmatter.
> Diese Makros werden automatisch durch das Tooling hinzugefügt, daher vermeiden Sie das Hinzufügen oder Entfernen:
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionalitäten in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — dies generiert ein **Veraltet**-Banner, das angibt, dass die Nutzung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-Standard**-Banner, das angibt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie keine Status-Header-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-Standard**-Banner werden direkt nach diesem Notizabschnitt gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Headertyp) wird in X unter Y Umständen verwendet.

Der 'Headertyp' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anforderungsheader")}}, einen {{Glossary("response_header", "Antwortheader")}} handelt oder ob er beides sein kann.
Der Zusammenfassungsabsatz sollte idealerweise ein oder zwei kurze Sätze umfassen.

In diesem Abschnitt können Sie bemerkenswerte Probleme oder häufige Fallstricke erwähnen und auf Beispiele oder ausführlichere Dokumentationen (Leitfäden usw.) verweisen.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen und wenn es wesentliche Nutzungshinweise gibt, verwenden Sie nachfolgend einen "Beschreibung"-Abschnitt nach "Direktiven".

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        Schließen Sie die Header-Kategorie (oder Kategorien) ein, z.B.
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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted-Antwortheader")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntax-Feld, wie das untenstehende, gemäß den Anleitungen in unserem Artikel zu [Syntax-Abschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, zögern Sie nicht, mehrere Syntax-Felder, Unterabschnitte und Erklärungen aufzunehmen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind groß- und kleinschreibungsempfindlich und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichensyntax verwenden kann.
Mehrere Direktiven werden durch Kommas getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat,
zögern Sie nicht, mehrere Definitionslisten, Unterabschnitte und Erklärungen aufzunehmen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um ihn in den Eröffnungsabsätzen einzuschließen, geben Sie hier so viele Details wie nötig, z.B. Hintergrundinformationen, Nutzungshinweise und Links zur Dokumentation.
Dies ist ein guter Ort, um zu erwähnen, ob reale Muster von dem Abweichen, was spezifiziert ist, wenn weitverbreitete Implementierungen von den in den Spezifikationen beschriebenen abweichen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Ein Beispiel wie "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden zur Hinzufügung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das untenstehende Makro._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Handhabung für den Header hat, entfernen Sie den nachfolgenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragentenintegration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden in Bezug auf den aktuellen HTTP-Header ein.
Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antworte wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status- und Header-Einträge in einem einzigen Listenpunkt zusammenfassen, um Kürze zu gewährleisten.

- link1
- link2
- external_link (year)
