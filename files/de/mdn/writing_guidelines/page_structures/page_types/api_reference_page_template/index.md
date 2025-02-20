---
title: API-Referenz-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Note:** _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> page-type: web-api-interface
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die Seite der [Request](/de/docs/Web/API/Request)-Schnittstelle den _Titel_ _Request_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`). Dieser wird wie `Web/API/NameOfTheParentInterface` formatiert. Zum Beispiel ist der Slug von [Request](/de/docs/Web/API/Request) "Web/API/Request".
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch die Abfragezeichenkette der Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet diesen Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzen der `\{{Compat}}`- und `\{{Specifications}}`-Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Mehrere Makroaufrufe erscheinen oben im Inhaltsbereich (direkt unter dem Front Matter der Seite).
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Das ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das angibt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das angibt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Empfehlungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen. Wenn ja, sollten Sie auch einen Eintrag auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt einen **Verfügbar in Worker-Kontexten**-Hinweis, der angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Wenn sie nur im Window-Kontext verfügbar ist, können Sie den Makroaufruf entfernen. Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter dafür übergeben, abhängig von ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Sie sollten auch einen Eintrag auf der Seite [Web APIs available in workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenz-Seitenleiste mit schnellen Referenzlinks, die zur aktuellen Seite gehören. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf andere Seiten der API verweist. Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag in unserem KumaScript GitHub-Repository hinzufügen und den Namen des Eintrags im Makro-Aufruf anstatt _GroupDataName_ einfügen. Siehe unseren [Leitfaden für API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies zu tun ist.
>
> Fügen Sie Statusheader-Makros nicht manuell hinzu. Beziehen Sie sich auf den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Namen der Schnittstelle, sagen Sie, zu welcher API sie gehört, und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie können dies größtenteils von der Zusammenfassung der Schnittstelle auf der entsprechenden API-Übersichtsseite kopieren.

{{InheritanceDiagram}}

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash aus der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese Zeile vollständig.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese Zeile vollständig.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese Zeile vollständig.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese Zeile vollständig.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese Zeile vollständig.)

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Event-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Ebenfalls verfügbar über die Eigenschaft `oneventname1`.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Ebenfalls verfügbar über die Eigenschaft `oneventname2`.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Ein Beispiel wie "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash aus der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash aus der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe die [Sektion "Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing Style Guide_.

- link1
- link2
- external_link (year)
