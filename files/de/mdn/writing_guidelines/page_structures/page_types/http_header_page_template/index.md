---
title: HTTP-Header-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

> **Note:** _Entfernen Sie diese gesamte erläuternde Notiz, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den bestimmten Header entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameDesHeaders
> slug: Web/HTTP/Headers/NameDesHeaders
> page-type: http-header
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameDesHeaders
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird. Formatieren Sie ihn als _NameDesHeaders_. Zum Beispiel hat der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header einen _title_ von `Cache-Control`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/HTTP/Headers/NameDesHeaders` formatiert. Zum Beispiel ist der [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Slug `Web/HTTP/Headers/Cache-Control`.
> - **page-type**
>   - : Für HTTP-Header muss es `http-header` sein. Für andere HTTP-`page-type`-Werte siehe den [HTTP Abschnitt](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) der Dokumentation für den `page-type` Frontmatter-Schlüssel.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>path.to.feature.NameDesHeaders</code> mit der Abfragezeichenfolge für den Header im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Kompatibilitätsabschnitt auszufüllen (ersetzt das `\{{Compat}}`-Makro).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den HTTP-Header in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen, und dass der Eintrag für den Header Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     Browser-Kompatibilität gilt nicht für HTTP-Header, bei denen keine spezifische Implementierung bereitgestellt wird (z. B. das automatische Hinzufügen eines Anforderungsheaders zu einigen Anfragen oder das Ändern des Verhaltens basierend auf Daten in einem Antwortheader).
>     In diesen Fällen entfernen Sie den browser-compat Schlüssel und Wert.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makro-Aufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Diese Technologie ist experimentell**-Banner, das darauf hinweist, dass der Header [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dazu auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{deprecated_header}}` — dies generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung des Headers [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer bestimmten Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachfolgenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{httpsidebar}}` — dies generiert die HTTP-Seitenleiste, die auf jeder HTTP-Referenzseite erscheinen muss.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros dürfen nicht manuell bereitgestellt werden. Verweisen Sie auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht standardisierten** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der erste Satz der Seite muss diesem Format folgen:

> Der HTTP **`header-name`** (header type) wird verwendet, um X in Y Situationen zu benutzen.

Der 'header type' sollte angeben, ob es sich um einen {{Glossary("request_header", "Anforderungs-Header")}}, einen {{Glossary("response_header", "Antwort-Header")}} handelt oder ob es entweder sein kann. Der Zusammenfassungsabsatz sollte idealerweise ein oder zwei kurze Sätze enthalten.

Sie können bemerkenswerte Fallstricke oder häufige Probleme in diesem Abschnitt erwähnen, indem Sie auf Beispiele oder detailliertere Dokumentationen (Leitfäden, etc.) verweisen. Zwei oder drei Absätze in diesem Abschnitt sind angemessen, und wenn es wesentliche Nutzungsnotizen gibt, verwenden Sie einen "Beschreibung"-Abschnitt nach "Direktiven" unten.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        Geben Sie die Headerkategorie (oder Kategorien) an, z.B.
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
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

Verwenden Sie eine Syntax-Box, wie die unten stehende, gemäß den Anleitungen in unserem Artikel [Syntax-Abschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).
Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Syntax-Boxen, Unterabschnitte und Erklärungen nach Bedarf einfügen.

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Die Direktiven sind nicht case-sensitiv und haben ein optionales Argument, das sowohl Token- als auch Anführungszeichen-String-Syntax verwenden kann.
Mehrere Direktiven sind kommagetrennt (löschen Sie Informationen nach Bedarf).

## Direktiven

- `directive1`
  - : Fügen Sie hier eine kurze Beschreibung der Direktive und ihrer Funktion ein.
    Pro Direktive ein Begriff und eine Definition einfügen.
- `directive2`
  - : usw.

Wenn der Header viele verfügbare Direktiven hat, können Sie mehrere Definitionslisten, Unterabschnitte und Erklärungen nach Bedarf einfügen.

## Beschreibung

Wenn im Einleitungsabschnitt zu viel Inhalt enthalten ist, liefern Sie hier so viele Details wie nötig, wie z.B. Hintergrundinformationen, Hinweise zur Nutzung und Links zur Dokumentation.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel **muss** eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
>
> Beispiel von Fetch
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

_Wenn der Browser keine spezifische Handhabung für den Header hat, entfernen Sie das Makro unten._
_Andernfalls, um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

`\{{Compat}}`

_Wenn der Browser eine spezifische Handhabung für den Header hat, entfernen Sie den folgenden Text:_

Dieser Header hat keine spezifikationsdefinierte Benutzeragenten-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um ein anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

Beziehen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen HTTP-Header in Verbindung stehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Stil-Leitfaden_.
Sie können auf relevante Antwortstatus verweisen, wie `\{{HTTPStatus("123", "123 Response Status")}}` und Header wie `\{{HTTPHeader("Header-Name")}}`.
Sie können verwandte Status und Header in einem einzigen Listenelement gruppieren, um die Kürze zu wahren.

- link1
- link2
- external_link (Jahr)
