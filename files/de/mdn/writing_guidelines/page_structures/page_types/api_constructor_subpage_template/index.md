---
title: API-Konstruktor-Teilseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte Erläuterung, bevor Sie veröffentlichen._
>
> ---
>
> **Seite Frontmatter:**
>
> Das Frontmatter am Anfang der Seite dient zur Definition von "Seitenmetadaten".
> Die Werte sollten entsprechend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() constructor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     Beispielsweise hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _title_ von `Request: Request() constructor`.
> - **slug**
>   - : Der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Beachten Sie, dass im Slug der Name der Konstruktorfunktion die Klammern weglässt (es endet mit `NameOfTheConstructor` und nicht mit `NameOfTheConstructor()`).
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` durch den Abfragezeichenfolgewert für den Konstruktor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzen der `\{{Compat}}`- und `\{{Specifications}}`-Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen, und der Eintrag für die API wird Spezifikationsinformationen enthalten müssen.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unterhalb der Seitenfrontmatter).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (Es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [abschätzig](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [In sicheren Kontexten eingeschränkte Funktionen](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linksseitige Referenzleiste, die Schnellzugriffslinks zu verwandten Seiten anzeigt.
>   Beispielsweise hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten der API verweist.
>   Um die richtige Sidebar für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies zu tun ist. Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Vergeben Sie die Statuskopfzeilenmakros nicht manuell. Lesen Sie den Abschnitt [Wie man Feature-Status hinzufügt oder aktualisiert](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) zum Hinzufügen dieser Status auf der Seite.
>
> Beispielformen der **Sicherer Kontext**, **Experimentell**, **Veraltet**, und **Nicht-Standard**-Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte Erläuterung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz — beginnen Sie mit der Benennung des Konstruktors und sagen Sie, was er macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten das meiste davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite übernehmen.

## Syntax

Füllen Sie ein Syntaxfeld aus, gemäß den Anweisungen in unserem Artikel [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und dessen Funktion ein. Fügen Sie einen Begriff und eine Definition für jeden Parameter ein.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}}-Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors ein, einschließlich des Datentyps und was dieser darstellt.
Dies ist normalerweise einfach "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}`-Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die der Konstruktor auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme ein.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (year)
