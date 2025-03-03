---
title: API-Referenzseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diese gesamte Erklärung, bevor Sie sie veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um die "Seitenmetadaten" zu definieren.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die Seite der [Request](/de/docs/Web/API/Request) Schnittstelle den _title_ _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel ist der [Request](/de/docs/Web/API/Request) `slug` "Web/API/Request".
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makrorufen erscheinen am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (kein Hinzufügen/Entfernen erforderlich):
>
> - `\{{SeeCompatTable}}` — dieser erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und sich die Technologie in Firefox hinter einem Pref versteckt, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieser erzeugt ein **Veraltet** Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieser erzeugt ein **Nicht-standardisiert** Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend der unten angegebenen Ratschläge aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dieser erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn nicht, können Sie den Makroaufruf entfernen. Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen auf sichere Kontexte beschränkt](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dieser erzeugt eine **Verfügbar in Workers** Notiz, die anzeigt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn die Technologie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Worker-Kontext oder nur dort verfügbar ist, könnten Sie einen Parameter übergeben müssen, basierend auf ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), möglicherweise müssen Sie auch einen Eintrag dafür in der Seite [Web APIs verfügbar in Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — dieser erzeugt die Referenz-Sidebar auf der linken Seite, die schnelle Referenzlinks anzeigt, die sich auf die aktuelle Seite beziehen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist. Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag in unserem KumaScript GitHub-Repo hinzufügen und den Namen des Eintrags im Makroruf anstelle von _GroupDataName_ einfügen. Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie man das macht.
>
> Status-Kopfzeilen-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Sicherer Kontext**, **Verfügbar in Workers**, **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte Erklärung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginne mit der Benennung der Schnittstelle, sage, zu welcher API sie gehört, und erkläre, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie könnten den größten Teil davon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Landingpage kopieren.

{{InheritanceDiagram}}

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht readonly/experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname1`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname2`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimental/deprecated/non-standard ist, entfernen Sie die zugehörigen Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein für das, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie nur die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
