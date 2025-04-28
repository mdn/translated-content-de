---
title: HTTP-Header-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

> **Hinweis:** _Entfernen Sie diese gesamte erklärende Anmerkung, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiteninformationen" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
>
> ```md
> ---
> title: NameDesHeaders
> slug: Web/HTTP/Headers/NameDesHeaders
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als _NameDesHeaders_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _Titel_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird formatiert wie `Web/HTTP/Headers/NameDesHeaders`. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP `page-type` Werte, siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Metadaten-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Kompatibilitätsdaten des Browsers für das Feature gesetzt. Siehe ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameDesHeaders` mit der Abfragezeichenfolge für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um den Kompatibilitätsabschnitt auszufüllen (Ersetzen des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (z. B. automatisches Hinzufügen eines Anforderungs-Headers zu einigen Anfragen oder Ändern des Verhaltens basierend auf Daten in einem Antwort-Header).
>     Entfernen Sie in diesen Fällen den browser-compat Schlüssel und Wert.
>
> - **sidebar**
>   - : Dies ist immer `httpsidebar`.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich direkt nach den Seiten-Metadaten.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, daher vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag auf der [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) Seite ausfüllen.
> - `\{{deprecated_header}}` — erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Verwendung des Headers [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Status-Header-Makros nicht manuell bereitstellen. Lesen Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung zu entfernen, bevor Sie veröffentlichen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird verwendet für X in Y Umständen.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anforderungs-Header")}}, einen {{Glossary("response_header", "Antwort-Header")}} handelt oder ob es beides sein kann.
Der Zusammenfassungsabschnitt sollte idealerweise ein oder zwei kurze Sätze umfassen.

Sie können bemerkenswerte Fallstricke oder häufige Fehler in diesem Abschnitt erwähnen, indem Sie auf Beispiele oder detailliertere Dokumentationen (Leitfäden usw.) in diesem Abschnitt verweisen.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn umfangreiche Nutzungshinweise eingefügt werden sollen, verwenden Sie einen "Beschreibung"-Abschnitt nach "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Einschließen der Header-Kategorie (oder -Kategorien), z.B.
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, gemäß den Richtlinien in unserem [Syntaxabschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) Artikel.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Wenn der Header viele verfügbare Direktiven hat, zögern Sie nicht, mehrere Syntaxfelder, Unterabschnitte und Erklärungen nach Bedarf einzufügen:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Die Direktiven sind nicht fallabhängig und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichen-Syntax verwenden kann.
Mehrere Direktiven sind kommagetrennt (Informationen nach Bedarf löschen).

## Direktiven

- `directive1`
  - : Geben Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie für jede Direktive einen Begriff und eine Definition hinzu.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat,
zögern Sie nicht, mehrere Definitionslisten, Unterabschnitte und Erklärungen nach Bedarf einzufügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um ihn in den einleitenden Absätzen zu enthalten, stellen Sie hier so viele Details wie nötig bereit, wie Hintergrundinformationen, Hinweise zur Verwendung und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und noch mehr Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Verarbeitung für den Header hat, entfernen Sie das Makro unten._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Verarbeitung für den Header hat, entfernen Sie den Text unten:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen.
Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus verlinken wie `\{{HTTPStatus("123", "123 Reason")}}` und Header wie `\{{HTTPHeader("Header-Name")}}`.
Sie können verwandte Status und Header in einem einzigen Listenelement zusammenfassen, um Kürze zu wahren.

- link1
- link2
- external_link (year)
