---
title: API-Konstruktor-Subseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese ganze Erklärungshinweis, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten oben auf der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() constructor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _title_ von `Request: Request() constructor`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor` formatiert.
>     Beachten Sie, dass der Name der Konstruktor-Funktion im Slug die Klammern weglässt (sie endet mit `NameOfTheConstructor` und nicht `NameOfTheConstructor()`).
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Kennzeichnet den Status dieses Features. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` durch die Abfragezeichenfolge für den Konstruktor im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Anzahl von Makroaufrufen erscheint oben im Inhaltsbereich (direkt unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite mit den [Experimentellen Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standard** Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den unten stehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt ein **Verfügbar in Workern** Hinweis, der anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter dazu übergeben, aufgrund seiner Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Linkmenüleiste auf der linken Seite, die Schnellreferenzen zugehöriger Links zur aktuellen Seite anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag zu unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu tun.
>
> Stellen Sie die Status-Header-Makros nicht manuell bereit. Beziehen Sie sich auf den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sichere Kontext**, **Verfügbar in Workern**, **Experimentelle**, **Veraltete** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese ganze Erklärungshinweis zu entfernen, bevor Sie veröffentlichen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung des Konstruktors und erklären, was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie können den größten Teil davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie eine Syntaxbox aus, gemäß den Anweisungen in unserem [Abschnitt über Syntax](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) Artikel.

### Parameter

- `parameter1` {{optional_inline}}
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion hinzu. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : usw.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewerts des Konstruktors hinzu, einschließlich des Datentyps und dessen, was er darstellt.
Dies ist normalerweise nur "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}` Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen hinzu, die der Konstruktor erzeugen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme hinzu.

- `Exception1`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.
- `Exception2`
  - : Fügen Sie Beschreibungen hinzu, wie die Ausnahme ausgelöst wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- bei Ausnahmen, die `DOMException` Objekte sind, der `name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit dem Namen `IndexSizeError`, eine zweite `DOMException` mit dem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` werfen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie [Codebeispiele hinzugefügt werden](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal werden Sie auf Beispiele verlinken wollen, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele" hinzu, unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch-API
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
