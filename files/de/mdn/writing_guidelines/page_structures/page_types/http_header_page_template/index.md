---
title: HTTP-Header-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte Erklärung, bevor Sie veröffentlichen_
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als _NameOfTheHeader_. Beispielsweise hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert als `Web/HTTP/Headers/NameOfTheHeader`. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss dies `http-header` sein. Für andere HTTP-`page-type`-Werte siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Schlüssel.
> - **status**
>   - : Kennzeichen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion festgelegt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> mit der Abfragezeichenkette für den Header im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (Ersatz des `\{{Compat}}` Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Einstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) erstellen.
> - `\{{deprecated_header}}` — Dies erzeugt ein **Veraltet** Banner, das darauf hinweist, dass die Nutzung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht standardisiert** Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — Dies erzeugt die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros nicht manuell bereitstellen. Beachten Sie den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) zum Hinzufügen dieser Status zur Seite.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner werden direkt nach diesem Erklärungstext angezeigt.
>
> _Vergessen Sie nicht, diese gesamte Erklärung zu entfernen, bevor Sie veröffentlichen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie, indem Sie den HTTP-Header benennen und erklären, was er macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Geben Sie die Header-Kategorie (oder Kategorien) an, z.B.
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja oder nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-Safelisted Response Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja oder nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das unten stehende, gemäß den Anweisungen in unserem [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) Artikel.
Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfelder, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl Token- als auch Quoted-String-Syntax verwenden kann.
Mehrere Direktiven sind mit Kommas getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Stil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
