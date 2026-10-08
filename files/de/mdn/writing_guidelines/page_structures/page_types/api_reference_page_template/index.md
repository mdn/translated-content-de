---
title: Vorlage für eine API-Referenzseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte für die jeweilige Schnittstelle an.
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
>   - : Die Überschrift am Anfang der Seite. Sie besteht nur aus dem Namen der Schnittstelle. Die Seite zur Schnittstelle [Request](/de/docs/Web/API/Request) hat beispielsweise den _title_ _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es hat ein Format wie `Web/API/NameOfTheParentInterface`. Der slug von [Request](/de/docs/Web/API/Request) lautet beispielsweise „Web/API/Request“.
> - **page-type**
>   - : Der Schlüssel `page-type` hat für Web/API-Schnittstellen immer den Wert `web-api-interface`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Dieses Array kann einen oder mehrere der folgenden Werte enthalten: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird automatisch anhand der Browser-Kompatibilitätsdaten des Features gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragepfad für die Methode im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu füllen (anstelle der Makros `\{{Compat}}` und `\{{Specifications}}`).
>
> Möglicherweise müssen Sie zunächst einen Eintrag für die API-Methode in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Der Eintrag für die API muss auch Angaben zur Spezifikation enthalten.
>
> Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch eingefügt (Sie müssen sie weder hinzufügen noch entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einen Eintrag dafür ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Aktualisieren oder entfernen Sie die folgenden Makros gemäß den nachstehenden Hinweisen:
>
> - `\{{SecureContext_Header}}` — erzeugt einen Hinweis **Sicherer Kontext**, der anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Wenn dies nicht zutrifft, können Sie den Makroaufruf entfernen. Andernfalls sollten Sie auch auf der Seite [Auf sichere Kontexte beschränkte Features](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) einen Eintrag dafür ergänzen.
> - `\{{AvailableInWorkers}}` — erzeugt einen Hinweis **In Workern verfügbar**, der anzeigt, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Window-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder ausschließlich in einem Worker-Kontext verfügbar ist, müssen Sie dem Makro je nach Verfügbarkeit möglicherweise einen Parameter übergeben (alle möglichen Werte finden Sie im [Quellcode des Makros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)). Möglicherweise müssen Sie auch auf der Seite [In Workern verfügbare Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) einen Eintrag dafür ergänzen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste links mit Links zur Schnellnavigation, die sich auf die aktuelle Seite beziehen. Beispielsweise haben alle Seiten zur [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist. Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag hinzufügen und dessen Namen im Makroaufruf anstelle von _GroupDataName_ angeben. Informationen dazu finden Sie in unserem Leitfaden zu [Seitenleisten für API-Referenzen](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> Fügen Sie Makros für Statushinweise nicht manuell ein. Wie Sie diese Status zur Seite hinzufügen, erfahren Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Sicherer Kontext**, **In Workern verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den zusammenfassenden Absatz mit dem Namen der Schnittstelle. Geben Sie dann an, zu welcher API sie gehört und was sie tut. Idealerweise umfasst der Absatz ein oder zwei kurze Sätze. Sie können dafür den Großteil der Zusammenfassung der Schnittstelle auf der zugehörigen API-Übersichtsseite übernehmen.

Halten Sie den einleitenden Inhalt kurz. Alle weiteren Erläuterungen gehören in den Abschnitt „Beschreibung“ vor dem Abschnitt „Beispiele“.

`\{{InheritanceDiagram}}`

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des Objekts `NameOfTheInterface`.

## Statische Eigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff mit Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff mit Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Statische Methoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff mit Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff mit Definition hinzu.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Ereignisse

_Erbt außerdem Ereignisse von der übergeordneten Schnittstelle `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Reagieren Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie eine Beschreibung hinzu, wann das Ereignis ausgelöst wird).
    Auch über die Eigenschaft `oneventname1` verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie eine Beschreibung hinzu, wann das Ereignis ausgelöst wird).
    Auch über die Eigenschaft `oneventname2` verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Beschreibung

Dieser Abschnitt ist optional. Fügen Sie hier bei Bedarf eine ausführlichere Erklärung der Schnittstelle ein.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Halten Sie die Überschrift kurz. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und danach eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern setzen Sie die Links direkt unter die H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Weitere Hinweise finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- link1
- link2
- external_link (Jahr)
