---
title: HTTP Header Seitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Diesen gesamten erklärenden Hinweis vor der Veröffentlichung entfernen_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie es als _NameOfTheHeader_. Beispielsweise hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header ein _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird im Format `Web/HTTP/Headers/NameOfTheHeader` formatiert. Beispielsweise ist der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` verwendet werden. Für andere HTTP `page-type` Werte siehe den [HTTP Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion eingestellt. Siehe ["Wie man Funktionsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> mit dem Abfragestring für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (Ersetzung des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Das ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell und die Technologie in Firefox hinter einer Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) eintragen.
> - `\{{deprecated_header}}` — Dies erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-standardisiert** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Empfehlungen aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — Dies erzeugt die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Statusheader-Makros sollten nicht manuell bereitgestellt werden. Verweisen Sie auf den Abschnitt ["Wie man Funktionsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner sind direkt nach diesem Hinweisblock zu sehen.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der einleitende Absatz — beginnen Sie mit der Nennung des HTTP-Headers und seiner Funktion.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Kategorie des Headers angeben (oder Kategorien), z.B.
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
        [CORS-sichergestellter Antwortheader](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja oder nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfeld aus, wie das untenstehende, entsprechend der Anleitung in unserem Artikel zu [Syntaxsektionen](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).
Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfelder, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl die token- als auch die quoted-string Syntax verwenden kann.
Mehrere Direktiven sind durch Kommas getrennt (entsprechende Informationen löschen).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Fügen Sie für jede Direktive einen Begriff und eine Definition hinzu.
- `directive2`
  - : usw.

Falls der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen hinzufügen, wie es geeignet ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen HTTP-Header zu tun haben. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
