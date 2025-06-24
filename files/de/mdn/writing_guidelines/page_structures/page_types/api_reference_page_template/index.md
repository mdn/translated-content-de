---
title: Vorlagen für API-Referenzseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seitendaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für das jeweilige Merkmal entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> page-type: web-api-interface
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die Seite der Schnittstelle [Request](/de/docs/Web/API/Request) einen _Titel_ von _Request_.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dieser wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel hat [Request](/de/docs/Web/API/Request) den Slug "Web/API/Request".
> - **page-type**
>   - : Der Schlüssel `page-type` für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Merkmals beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Merkmal gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>
> Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (direkt unter den Seitendaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dieses generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses generiert ein **Veraltet** Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses generiert ein **Nicht-standard** Banner, das anzeigt, dass das Merkmal nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dieses generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen. Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dieses generiert eine **Verfügbar in Arbeitern**-Notiz, die anzeigt, dass die Technologie im [Arbeiter-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fenster-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im oder nur im Arbeiter-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter dafür übergeben, basierend auf ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dieses generiert die linke Referenz-Sidebar, die schnelle Referenzlinks anzeigt, die sich auf die aktuelle Seite beziehen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist. Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen. Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen dazu, wie dies zu tun ist.
>
> Statusheader-Makros sollten nicht manuell bereitgestellt werden. Informieren Sie sich im Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Anmerkungsblock dargestellt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie, indem Sie die Schnittstelle benennen, sagen, zu welcher API sie gehört, und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie könnten den größten Teil davon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Übersichtsseite kopieren.

`\{{InheritanceDiagram}}`

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktionen hinzu. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktionen hinzu. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktionen hinzu. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktionen hinzu. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktionen hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktionen hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktionen hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktionen hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Events

_Erbt auch Events von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie auf diese Events, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Event-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (Beschreibung des Ereignisses einfügen).
    Ebenfalls verfügbar über die `oneventname1` Eigenschaft.
    Wenn das Event nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (Beschreibung des Ereignisses einfügen).
    Ebenfalls verfügbar über die `oneventname2` Eigenschaft.
    Wenn das Event nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel bezeichnet. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
