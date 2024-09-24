---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Die Frontmatter am Anfang der Seite wird zur Definition von "Seitenmetadaten" verwendet.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/HTTP/Headers/NameOfTheHeader` formatiert. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` sein. Für andere HTTP-`page-type`-Werte siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browserkompatibilitätsdaten für das Feature gesetzt. Siehe ["So fügen Sie Feature-Status hinzu oder aktualisieren sie"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> mit der Abfragezeichenfolge für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolkette verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (ersetzt das `\{{Compat}}`-Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen und der Eintrag für den Header Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am oberen Rand des Inhaltsbereichs (unmittelbar unter der Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolkette hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — dies generiert ein **Veraltet**-Banner, das angibt, dass die Nutzung des Headers [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht standardisiert**-Banner, das angibt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — dies generiert die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite vorhanden sein muss.
>   Denken Sie daran, das Makro `\{{MDNSidebar}}` zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Status-Header-Makros manuell an. Beziehen Sie sich auf den Abschnitt ["Feature-Status hinzufügen oder aktualisieren"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabschnitt — beginnen Sie, indem Sie den HTTP-Header benennen und beschreiben, was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Geben Sie die Header-Kategorie (oder Kategorien) an, z. B.
        {{Glossary("Request header")}},
        {{Glossary("Response header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja oder nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>ja oder nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, gemäß den Anweisungen in unserem Artikel [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).
Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfelder, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichen-Syntax verwenden kann.
Mehrere Direktiven sind durch Kommas getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

## Beispiele

Bitte beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Lesen Sie unseren Leitfaden zur Hinzufügung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispielsweise:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Anleitungen hinzu, die mit dem aktuellen HTTP-Header zusammenhängen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (year)
