---
title: API-Referenzseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der speziellen Eigenschaft aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die [Request](/de/docs/Web/API/Request) Interface-Seite einen _title_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel ist der [Request](/de/docs/Web/API/Request) Slug "Web/API/Request".
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Kompatibilitätsdaten des Browsers für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragezeichenfolgewert der Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikation zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API wird Spezifikationsinformationen enthalten müssen.
>
> Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am oberen Rand der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen am oberen Rand des Inhaltsbereichs (unmittelbar unter dem Seiten-Frontmatter).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) Seite ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Wenn nicht, können Sie den Makroaufruf entfernen. Wenn doch, sollten Sie auch einen Eintrag dafür auf der [Features restricted to secure contexts](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) Seite ausfüllen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt eine **Verfügbar in Workern**-Notiz, die anzeigt, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter hinzufügen, da sie aufgrund ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte) möglicherweise auf der [Web APIs available in workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) Seite einen Eintrag ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linke Referenz-Sidebar mit schnellen Referenzlinks, die mit der aktuellen Seite zusammenhängen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist. Um die richtige Sidebar für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ eintragen. Siehe unsere [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Anleitung für Informationen, wie dies zu tun ist.
>
> Stellen Sie Statusheader-Makros nicht manuell bereit. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie damit, die Schnittstelle zu benennen, anzugeben, zu welchem API sie gehört, und zu sagen, was sie macht. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie können den größten Teil hiervon von der Zusammenfassung der Schnittstelle auf der entsprechenden API-Übersichtsseite übernehmen.

`\{{InheritanceDiagram}}`

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt außerdem Eigenschaften von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt außerdem Eigenschaften von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt außerdem Methoden von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt außerdem Methoden von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt außerdem Ereignisse von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört oder indem ein Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname1`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname2`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit einem Namen für das Beispiel haben. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unsere Anleitung, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
