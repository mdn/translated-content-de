---
title: HTTP Header-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz, bevor Sie die Veröffentlichung vornehmen_
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
>
> ```md
> ---
> title: NameDesHeaders
> slug: Web/HTTP/Reference/Headers/NameDesHeaders
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameDesHeaders
> sidebar: httpsidebar
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _NameDesHeaders_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird wie folgt formatiert: `Web/HTTP/Reference/Headers/NameDesHeaders`. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Slug `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` verwendet werden. Für andere HTTP-`page-type`-Werte siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type`-Schlüssel im Frontmatter.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das ein oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilität-Daten für die Funktion festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameDesHeaders` mit der Abfragezeichenfolge für den Header im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (wodurch das `\{{Compat}}`-Makro ersetzt wird).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren und der Eintrag für den Header Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Die Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (z. B. wenn automatisch ein Anforderungsheader zu einigen Anfragen hinzugefügt wird oder sich das Verhalten basierend auf Daten in einem Antwortheader ändert).
>     In diesen Fällen entfernen Sie den browser-compat-Schlüssel und -Wert.
>
> - **sidebar**
>   - : Dies ist immer `httpsidebar`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Anzahl von Makros erscheint direkt nach dem Frontmatter der Seite oben im Inhaltsbereich.
> Diese Makros werden automatisch durch die Toolchain hinzugefügt, daher sollten Sie das Hinzufügen oder Entfernen vermeiden:
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Verwendung des Headers [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Status-Header-Makros sollten nicht manuell bereitgestellt werden. Siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header Typ) wird verwendet für X unter Y Umständen.

Der 'header type' sollte angeben, ob es sich um einen {{Glossary("request_header", "Request-Header")}}, einen {{Glossary("response_header", "Response-Header")}} handelt oder ob er beides sein kann.
Der zusammenfassende Absatz sollte idealerweise ein oder zwei kurze Sätze sein.

Sie können bemerkenswerte Stolpersteine oder häufige Fallstricke in diesem Abschnitt erwähnen und auf Beispiele oder detailliertere Dokumentationen (Leitfäden usw.) verlinken.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Nutzungshinweise gibt, um sie einzuschließen, verwenden Sie einen "Beschreibung"-Abschnitt nach "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header Typ</th>
      <td>
        Header-Kategorie (oder -Kategorien) einschließen, z. B.
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
        {{Glossary("CORS-safelisted_response_header", "CORS-Safelisted Antwort-Header")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, gemäß den Anleitungen in unserem Artikel [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, fühlen Sie sich frei, mehrere Syntaxfelder, Unterabschnitte und Erklärungen nach Bedarf einzufügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht case-sensitive und haben ein optionales Argument, das sowohl Token- als auch Zitatzeichenfolgen-Syntax verwenden kann.
Mehrere Direktiven sind durch Kommas getrennt (löschen Sie Informationen, falls zutreffend).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktionen ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat,
fühlen Sie sich frei, mehrere Definitionslisten, Unterabschnitte und Erklärungen nach Bedarf einzufügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, den man in den Eröffnungsabsätzen einfügen könnte, geben Sie hier so viele Details wie nötig an, wie Hintergrundinformationen, Hinweise zur Verwendung und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein und erklären, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie Sie [Codebeispiele hinzufügen können](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das folgende Makro._
_Andernfalls entfernen Sie die Backticks und den Backslash in der Markdown-Datei, um dieses Makro zu verwenden._

`\{{Compat}}`

_Wenn der Browser eine spezifische Handhabung für den Header hat, entfernen Sie den folgenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf den aktuellen HTTP-Header beziehen.
Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status und Header in einem einzelnen Listeneintrag zusammenfassen, um Kürze zu erreichen.

- link1
- link2
- external_link (Jahr)
