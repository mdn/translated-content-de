---
title: HTTP-Header-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

> **Hinweis:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metaangaben:**
>
> Die Metaangaben oben auf der Seite dienen zur Definition von "Seiten-Metadaten". Die Werte sollten entsprechend für den jeweiligen Header aktualisiert werden.
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
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird. Formatieren Sie es als _NameDesHeaders_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTTP/Headers/NameDesHeaders`. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss dieser `http-header` sein. Für andere HTTP `page-type` Werte siehe den [HTTP-Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation bezüglich des Schlüssels `page-type` bei den Metaangaben.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameDesHeaders</code> durch den Abfrage-String für den Header im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um den Kompatibilitätsabschnitt zu füllen (anstatt das `\{{Compat}}`-Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header im <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repo</a> erstellen/aktualisieren müssen, und der Eintrag für den Header muss spezifische Informationen enthalten.
>     Siehe unser [Leitfaden zum Erstellen dieses Eintrags](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung vorhanden ist (wie zum Beispiel das automatische Hinzufügen eines Anfrage-Headers zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwort-Header).
>     In diesen Fällen entfernen Sie den Schlüssel und Wert von browser-compat.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheinen oben im Inhaltsbereich (direkt unter den Seiten-Metaangaben).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen **Dies ist eine experimentelle Technologie**-Banner, der anzeigt, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn er experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — erzeugt einen **Veraltet**-Banner, der anzeigt, dass die Verwendung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt einen **Nicht-standardisiert**-Banner, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Beratung aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — erzeugt die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie die Status-Header-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Experimentellen**, **Veralteten** und **Nicht-standardisierten** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (Header-Typ) wird für X in Y Situationen verwendet.

Der 'Header-Typ' sollte angeben, ob es sich um einen {{Glossary("Request_header", "Anfrage-Header")}}, einen {{Glossary("Response_header", "Antwort-Header")}} handelt oder ob er beides sein kann.
Der Zusammenfassungsabschnitt sollte idealerweise ein oder zwei kurze Sätze umfassen.

Sie können in diesem Abschnitt bemerkenswerte Stolperfallen oder häufige Fehler erwähnen, indem Sie auf Beispiele oder detailliertere Dokumentation (Leitfäden etc.) verlinken.
Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Nutzungsanmerkungen gibt, verwenden Sie einen "Beschreibung"-Abschnitt nach den "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        Fügen Sie die Header-Kategorie (oder Kategorien) ein, z.B.
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>"Ja" oder "Nein"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gelisteter Antwort-Header")}}
      </th>
      <td>"Ja" oder "Nein"</td>
    </tr>
  </tbody>
</table>

## Syntax

Füllen Sie ein Syntaxfenster wie das folgende gemäß der Anleitung in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.
Wenn der Header viele verfügbare Direktiven hat, können Sie gerne mehrere Syntaxfenster, Unterabschnitte und Erklärungen einfügen.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht großgeschrieben und haben ein optionales Argument, das sowohl Token- als auch Quoted-String-Syntax verwenden kann.
Mehrere Direktiven sind durch Komma getrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Geben Sie einen Begriff und eine Definition für jede Direktive an.
- `directive2`
  - : etc.

Wenn der Header viele verfügbare Direktiven hat,
können Sie gerne mehrere Definitionslisten, Unterabschnitte und Erklärungen einfügen.

## Beschreibung

Wenn es zu viel Inhalt gibt, um ihn in die einleitenden Absätze aufzunehmen, geben Sie hier so viele Details wie nötig an, z. B. Hintergrundinformationen, Hinweise zur Nutzung und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; sondern fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das folgende Makro._
_Andernfalls entfernen Sie zum Verwenden dieses Makros die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Handhabung für den Header hat, entfernen Sie den untenstehenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzer-Integration ("Browser-Kompatibilität" gilt nicht).
Entwickler können HTTP-Header mit `fetch()` setzen und holen, um anwendungsspezifisches Implementierungsverhalten zu bieten.

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen HTTP-Header beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.
Sie können auf relevante Antwortstatus wie `\{{HTTPStatus("123", "123 Response Status")}}` und Header wie `\{{HTTPHeader("Header-Name")}}` verlinken.
Sie können verwandte Status und Header in einem einzelnen Listenelement für eine bessere Übersichtlichkeit gruppieren.

- link1
- link2
- external_link (year)
