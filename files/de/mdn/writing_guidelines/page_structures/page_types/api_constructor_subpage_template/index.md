---
title: API-Konstruktor-Subpage-Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiteneinstellungen:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten passend für den Konstruktor aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() Konstruktor
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
>     Formatieren Sie sie als `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     Zum Beispiel hat der [Request()](/de/docs/Web/API/Request/Request) Konstruktor einen _title_ von `Request: Request() constructor`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Beachten Sie, dass der Name der Konstruktorfunktion im Slug die Klammern weglässt (er endet mit `NameOfTheConstructor` und nicht mit `NameOfTheConstructor()`).
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Konstruktoren ist immer `web-api-constructor`.
> - **status**
>   - : Markierungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheConstructor` durch den Abfragestring für den Konstruktor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain nutzt den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den API-Konstruktor in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen oben im Inhaltsbereich (unmittelbar unter der Seiten-Frontmatter).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keine Notwendigkeit zum Hinzufügen/Entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Präferenzschalter versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standardisiertes** Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Verfügbar in Arbeitern** Notiz, die anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben aufgrund ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag in der Seite [Web API verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linke Referenz-Seitenleiste mit Schnellverweisen, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unser GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Siehe unser [Leitfaden für API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für weitere Informationen darüber, wie dies zu tun ist.
>
> Geben Sie keine Statuskopfzeilen-Makros manuell an. Beziehen Sie sich auf den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner sind direkt nach diesem Notizblock zu sehen.
>
> _Vergessen Sie nicht, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung des Konstruktors und beschreiben Sie, was er tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten das meiste davon aus der Zusammenfassung des Konstruktors auf der entsprechenden API-Referenzseite kopieren.

## Syntax

Füllen Sie einen Syntaxkasten aus, gemäß der Anleitung in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parameter

- `parameter1` {{optional_inline}}
  - : Eine kurze Beschreibung des Parameters und was er macht hier einfügen. Fügen Sie einen Begriff und eine Definition für jeden Parameter ein.
    Wenn der Parameter nicht optional ist, entfernen Sie den \\{{optional_inline}} Makroaufruf.
- `parameter2`
  - : etc.

### Rückgabewert

Fügen Sie eine Beschreibung des Rückgabewertes des Konstruktors ein, einschließlich des Datentyps und was er darstellt.
Dies ist normalerweise nur "Eine Instanz des `\{{domxref("NameOfTheParentInterface")}}` Objekts."

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

### Ausnahmen

Fügen Sie eine Liste aller Ausnahmen ein, die der Konstruktor auslösen kann. Fügen Sie einen Begriff und eine Definition für jede Ausnahme ein.

- `Exception1`
  - : Beschreibungen darüber einfügen, wie die Ausnahme hervorgerufen wird.
- `Exception2`
  - : Beschreibungen darüber einfügen, wie die Ausnahme hervorgerufen wird.

Beachten Sie, dass wir zwei Arten von Ausnahmen haben: [`DOMException`](/de/docs/Web/API/DOMException) Objekte und reguläre JavaScript-Ausnahmen, wie {{jsxref("TypeError")}} und {{jsxref("RangeError")}}. Ein Webentwickler muss wissen:

- welches Objekt geworfen wird
- für Ausnahmen, die `DOMException` Objekte sind, der `Name` der Ausnahme.

Hier ist ein Beispiel, bei dem eine Methode eine `DOMException` mit einem Namen `IndexSizeError`, eine zweite `DOMException` mit einem Namen `InvalidNodeTypeError` und eine JavaScript-Ausnahme vom Typ `TypeError` auslösen kann:

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- `InvalidNodeTypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Geworfen …
- {{jsxref("TypeError")}}
  - : Geworfen …

## Beispiele

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele" hinzu, unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel Fetch
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
