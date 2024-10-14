---
title: HTTP-Header Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 5d3e6d0a49be60eeee1895bd0700f65f4bba6b3c
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Headers/NameOfTheHeader` formatiert. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP `page-type` Werte siehe den [HTTP Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung, wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> mit der Abfragezeichenkette für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Das Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (ersetzt das `\{{Compat}}` Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen und der Eintrag für den Header Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (wie z.B. das automatische Hinzufügen eines Anfrage-Headers zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwort-Header).
>     Entfernen Sie in diesen Fällen den browser-compat Schlüssel und Wert.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erstellt einen **Dies ist eine experimentelle Technologie** Banner, der angibt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — dies erzeugt einen **Veraltet** Banner, der angibt, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt einen **Nicht-standard** Banner, der darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend der nachstehenden Hinweise aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — dies erzeugt die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie Status-Header-Makros nicht manuell an. Konsultieren Sie den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet**, und **Nicht-standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Vergessen Sie nicht, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabschnitt — beginnen Sie mit dem Benennen des HTTP-Headers und sagen Sie, was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Geben Sie die Header-Kategorie (oder Kategorien) an, z.B.
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja oder nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>ja oder nein</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie eine Syntax-Box aus, wie die untenstehende, gemäß der Anleitung in unserem Artikel [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).
Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxboxen, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht groß-/klein-schreibungsempfindlich und haben ein optionales Argument, das sowohl Token- als auch Quoted-String-Syntax verwenden kann.
Mehrere Direktiven sind kommagetrennt (löschen Sie Informationen, wie es angemessen ist).

## Direktiven

- `directive1`
  - : Fügen Sie eine kurze Beschreibung der Direktive und ihrer Funktion hier ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen, wie es angemessen ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung nutzen Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden, wie Sie [Code-Beispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) können, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel von Fetch
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

_Wenn der Browser keine spezifische Behandlung für den Header hat, entfernen Sie das Makro unten._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Behandlung für den Header hat, entfernen Sie den untenstehenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten zu ermöglichen.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden im Zusammenhang mit dem aktuellen HTTP-Header ein. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
