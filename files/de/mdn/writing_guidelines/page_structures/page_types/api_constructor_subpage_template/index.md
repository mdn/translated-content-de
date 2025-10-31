---
title: API-Konstruktor Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiteninhalte:**
>
> Der Kopfbereich der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameVonElternInterface: NameDesKonstruktors() Konstruktor
> slug: Web/API/NameVonElternInterface/NameDesKonstruktors
> page-type: web-api-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: pfad.zum.feature.NameDesKonstruktors
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie es als `NameVonElternInterface: NameDesKonstruktors() Konstruktor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _Titel_ von `Request: Request() constructor`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameVonElternInterface/NameDesKonstruktors`.
>     Beachten Sie, dass der Name der Konstruktorfunktion im Slug die Klammern weglässt (er endet in `NameDesKonstruktors` und nicht `NameDesKonstruktors()`).
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `pfad.zum.feature.NameDesKonstruktors` mit dem Abfrage-String für den Konstruktor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain nutzt den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API wird Spezifikationsinformationen enthalten müssen.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Kopfbereich).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keine Notwendigkeit, diese hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür in der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-Standard** Banner, das anzeigt, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros nach dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür in der Seite [Features beschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — generiert eine **Verfügbar in Workern** Notiz, die anzeigt, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fenster-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Worker-Kontext oder nur im Worker-Kontext verfügbar ist, könnte es notwendig sein, einen Parameter hinzuzufügen, um ihre Verfügbarkeit anzugeben (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie könnten auch einen Eintrag dafür in der Seite [Verfügbare Web APIs in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) hinzufügen müssen.
> - `\{{APIRef("GroupDataName")}}` — generiert die Linke-Hand Referenz-Sidebar, die schnelle Referenzlinks zeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel zeigt jede Seite im [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten der API verweist.
>   Um die korrekte Sidebar für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu machen ist.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-Standard** Banner sind direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie mit dem Namen des Konstruktors und was er macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie können davon den größten Teil aus dem Zusammenfassungstext des Konstruktors in der entsprechenden API-Referenzseite kopieren.

## Syntax

Ergänzen Sie eine Syntax-Box, entsprechend der Anleitung in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors ein, einschließlich des Datentyps und dessen, was er repräsentiert.
Dies ist normalerweise nur "Eine Instanz des `\{{domxref("NameVonElternInterface")}}` Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die der Konstruktor auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen ein, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen `IndexSizeError`, eine zweite `DOMException` mit einem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst …
- {{jsxref("TypeError")}}
  - : Ausgelöst …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden darüber, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Für Beispiele zu dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinien-Leitfaden_.

- link1
- link2
- extern_link (Jahr)
