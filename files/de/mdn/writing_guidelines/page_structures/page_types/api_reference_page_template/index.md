---
title: Vorlage für eine API-Referenzseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten Erklärungshinweis, bevor Sie veröffentlichen._
>
> ---
>
> **Seiten-Front-Matter:**
>
> Das Front-Matter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der jeweiligen Eigenschaft aktualisiert werden.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die Seite der [Request](/de/docs/Web/API/Request) Schnittstelle einen _title_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel hat [Request](/de/docs/Web/API/Request) den Slug "Web/API/Request".
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für die Funktion gesetzt. Siehe ["Wie Funktionsstatuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch die Abfragezeichenkette für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Werkzeugkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Front-Matter der Seite).
>
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es gibt keine Notwendigkeit, sie hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet** Banner, das darauf hinweist, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standard** Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Hinweise aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Wenn es nicht ist, können Sie den Makro-Aufruf entfernen. Wenn es ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies erzeugt eine **Verfügbar in Workern** Notiz, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makro-Aufruf entfernen.
>   Wenn es auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise aufgrund seiner Verfügbarkeit einen Parameter übergeben (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linke Referenzleiste, die schnelle Referenzlinks anzeigt, die sich auf die aktuelle Seite beziehen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist. Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag hinzufügen und den Namen des Eintrags im Makro-Aufruf anstelle von _GroupDataName_ einfügen. Siehe unseren [Leitfaden zu API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie man dies macht.
>
> Stellen Sie Statuskopfzeilen-Makros nicht manuell bereit. Beziehen Sie sich auf den Abschnitt ["Wie Funktionsstatuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet**, und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> _Vergessen Sie nicht, diesen gesamten Erklärungshinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Nennen der Schnittstelle, sagen Sie, zu welcher API sie gehört und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie könnten den Großteil davon von der Zusammenfassung der Schnittstelle auf der entsprechenden API-Landeseite kopieren.

`\{{InheritanceDiagram}}`

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) in den untenstehenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Constructor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch verfügbar über die `oneventname1` Eigenschaft.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch verfügbar über die `oneventname2` Eigenschaft.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Ein beschreibender Titel

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter welcher Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Beispiele zu dieser API finden Sie auf [der Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für Schreibstil_.

- link1
- link2
- external_link (Jahr)
