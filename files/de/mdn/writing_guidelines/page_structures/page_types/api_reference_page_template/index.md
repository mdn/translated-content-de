---
title: API-Referenzseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Attribut aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die Seite der [Request](/de/docs/Web/API/Request) Schnittstelle einen _title_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel ist der Slug von [Request](/de/docs/Web/API/Request) „Web/API/Request“.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragestring für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikation zu füllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makroaufrufen erscheint am oberen Rand des Inhaltsbereichs (direkt unter dem Seiten-Frontmatter).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt/entfernt werden):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) Seite ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltetes**-Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den unten stehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn es nicht ist, können Sie den Makroaufruf entfernen. Wenn es ist, sollten Sie auch einen Eintrag dafür auf der [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) Seite ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Verfügbar in Workern**-Notiz, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch im Arbeiterkontext verfügbar oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund seiner Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der [Web APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) Seite ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linke Referenz-Seitenleiste, die schnelle Referenzlinks zeigt, die sich auf die aktuelle Seite beziehen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API verweist. Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen. Siehe unseren [Leitfaden für API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu.
>
> Geben Sie keine Status-Header-Makros manuell an. Beziehen Sie sich auf den Abschnitt [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Benennung der Schnittstelle, geben Sie an, zu welcher API sie gehört, und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie könnten den größten Teil hiervon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Startseite kopieren.

`\{{InheritanceDiagram}}`

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Eltern-Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Eltern-Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Eltern-Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Eltern-Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner Eltern-Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnen eines Ereignislisteners zur `oneventname` Eigenschaft dieser Schnittstelle.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (Beschreibung hinzufügen, wann das Ereignis ausgelöst wird).
    Auch verfügbar über die `oneventname1` Eigenschaft.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (Beschreibung hinzufügen, wann das Ereignis ausgelöst wird).
    Auch verfügbar über die `oneventname2` Eigenschaft.
    Wenn das Ereignis nicht experimentell/veraltet/nicht-standard ist, entfernen Sie die entsprechenden Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift „Beispiele“ hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
