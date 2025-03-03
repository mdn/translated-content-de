---
title: Vorlage für HTTP-Header-Seiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diese ganze erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Der Frontmatter-Bereich oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend dem spezifischen Header aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheHeader
> slug: Web/HTTP/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _NameOfTheHeader_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTTP/Headers/NameOfTheHeader`. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss `http-header` verwendet werden. Für andere HTTP `page-type` Werte, siehe den [HTTP-Bereich](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameOfTheHeader</code> durch die Abfragezeichenfolge für den Header im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um den Kompatibilitätsabschnitt zu füllen (Ersetzen des `\{{Compat}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, für die keine spezielle Implementierung bereitgestellt wird (z.B. das automatische Hinzufügen eines Anforderungsheaders zu einigen Anfragen oder das Ändern von Verhalten basierend auf Daten in einem Antwortheader).
>     In diesen Fällen entfernen Sie den browser-compat Schlüssel und Wert.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — dies generiert ein **Veraltet** Banner, das anzeigt, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standardisiertes** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — dies generiert die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Stellen Sie Status-Header-Makros nicht manuell bereit. Verweisen Sie auf den Abschnitt ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> _Denken Sie daran, diese ganze erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird für X in Y Situationen verwendet.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("Request_header", "Request-Header")}}, einen {{Glossary("Response_header", "Response-Header")}} handelt oder ob er beides sein kann.
Der Zusammenfassungsabsatz sollte idealerweise ein oder zwei kurze Sätze umfassen.

Sie können bemerkenswerte Fallstricke oder häufige Fehler in diesem Abschnitt erwähnen und auf Beispiele oder ausführlichere Dokumentation (Leitfäden, etc.) in diesem Abschnitt verlinken. Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Verwendungshinweise gibt, verwenden Sie einen "Beschreibung" Abschnitt nach "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Einschließlich Header-Kategorie (oder -Kategorien), z.B.
        {{Glossary("Request_header", "Request Header")}},
        {{Glossary("Response_header", "Response Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwortheader")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie eine Syntax-Box aus, wie die unten stehende, gemäß den Anleitungen in unserem [Syntax-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) Artikel.
Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Syntax-Boxen, Unterabschnitte und Erklärungen nach Bedarf einfügen.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichen-Syntax verwenden kann.
Mehrere Direktiven sind durch Kommas getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktionalität ein.
    Fügen Sie einen Begriff und eine Definition für jede Direktive ein.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Definitionslisten, Unterabschnitte und Erklärungen nach Bedarf einfügen.

## Beschreibung

Falls es zu viel Inhalt gibt, um ihn in die einleitenden Absätze aufzunehmen, geben Sie hier so viele Details wie nötig an, wie Hintergrundinformationen, Nutzungshinweise und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3 Überschrift (`###`) mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3 Überschrift (`###`) hinzu und dann eine abschließende H3 Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung des Fetch-APIs
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
> Fügen Sie keine H3 Überschriften hinzu; fügen Sie die Links direkt unter der H2 Überschrift "Beispiele" hinzu. Zum Beispiel:
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

_Wenn der Browser keine spezifische Behandlung für den Header hat, entfernen Sie das Makro unten._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Behandlung für den Header hat, entfernen Sie den folgenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mittels `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Response Status")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status und Header in einem einzigen Listeneintrag zusammenfassen, um Kürze zu erreichen.

- link1
- link2
- external_link (year)
