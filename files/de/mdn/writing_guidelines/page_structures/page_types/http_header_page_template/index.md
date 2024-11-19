---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Note vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den jeweiligen Header entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheHeader
> slug: Web/HTTP/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> ---
> ```
>
> - **title**
>   - : Titel, der oben auf der Seite angezeigt wird. Formatieren Sie es als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Headers/NameOfTheHeader` formatiert. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP `page-type` Werte, siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Metadaten-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> mit dem Abfragezeichenfolgenwert für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um den Kompatibilitätsbereich zu füllen (ersetzt das `\{{Compat}}` Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen oder aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (wie das automatische Hinzufügen eines Anfrageheaders zu bestimmten Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwortheader).
>     In solchen Fällen entfernen Sie den browser-compat Schlüssel und den Wert.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter den Seiten-Metadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Präferenzwert in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) erstellen.
> - `\{{deprecated_header}}` — dies erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert** Banner, das anzeigt, dass dieses Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — dies erzeugt die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Note vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss dem folgenden Format folgen:

> Der HTTP **`header-name`** (header type) wird für X unter Y Umständen verwendet.

Der 'header type' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anfrageheader")}}, einen {{Glossary("response_header", "Antwortheader")}} handelt oder ob er beides sein kann.
Der zusammenfassende Absatz sollte idealerweise ein oder zwei kurze Sätze umfassen.

Sie können bemerkenswerte Fallstricke oder häufige Stolpersteine in diesem Abschnitt erwähnen, mit Links zu Beispielen oder detaillierteren Dokumenten (Leitfäden usw.) in diesem Abschnitt.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es umfangreiche Nutzungshinweise gibt, verwenden Sie einen "Beschreibung" Abschnitt nach "Anweisungen" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Beinhaltet die Header-Kategorie (oder Kategorien), z.B.
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld nach den Anleitungen in unserem Artikel [Syntax-Bereiche](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus, wie das untenstehende.
Wenn der Header viele verfügbare Anweisungen hat, können Sie je nach Bedarf mehrere Syntaxfelder, Unterabschnitte und Erklärungen einfügen.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Anweisungen sind nicht groß- und kleinschreibungssensitiv und haben ein optionales Argument, das sowohl die Token- als auch die Quotestring-Syntax verwenden kann.
Mehrere Anweisungen sind durch Kommas getrennt (löschen Sie Informationen nach Bedarf).

## Anweisungen

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Anweisung und ihrer Funktion ein.
    Fügen Sie für jede Anweisung einen Begriff und eine Definition hinzu.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Anweisungen hat,
können Sie nach Belieben mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um ihn in den Einführungsabsätzen unterzubringen, geben Sie hier die notwendigen Details an, wie Hintergrundinformationen, Hinweise zur Nutzung und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Eine Überschrift wie "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel von Fetch
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Verarbeitung für den Header hat, entfernen Sie das untenstehende Makro._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Verarbeitung für den Header hat, entfernen Sie den Text unten:_

Dieser Header hat keine spezifikationsdefinierte Nutzer-Agent-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen HTTP-Header in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus verlinken wie `\{{HTTPStatus("123", "123 Response Status")}}` und Header wie `\{{HTTPHeader("Header-Name")}}`.
Sie können verwandte Status und Header in einem einzigen Listenelement zusammenfassen, um Kürze zu erreichen.

- link1
- link2
- external_link (Jahr)
