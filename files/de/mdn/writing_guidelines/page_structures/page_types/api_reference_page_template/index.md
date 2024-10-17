---
title: API-Referenzseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seitenmetadaten:**
>
> Der Front-Matter-Block oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die entsprechende Eigenschaft aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die [Request](/de/docs/Web/API/Request) Schnittstellenseite einen _Titel_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel ist der [Request](/de/docs/Web/API/Request) Slug "Web/API/Request".
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit dem Abfragestring für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (die `\{{Compat}}` und `\{{Specifications}}` Makros ersetzen).
>
> Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden dazu, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seitenmetadatenblock).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standard** Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen. Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Auf sichere Kontexte beschränkte Funktionen](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt einen **Verfügbar in Workern** Hinweis, der darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen. Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter dafür übergeben, aufgrund ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenz-Sidebar, die schnelle Referenzlinks zeigt, die mit der aktuellen Seite verknüpft sind. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist. Um die korrekte Sidebar für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag in unser KumaScript GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen. Siehe unseren [Leitfaden zu API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie dies zu tun ist.
>
> Statusheader-Makros nicht manuell bereitstellen. Siehe den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Benennen der Schnittstelle, sagen Sie, zu welcher API sie gehört und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein. Sie könnten den größten Teil davon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Landingpage kopieren.

{{InheritanceDiagram}}

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den untenstehenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion hinzu. Wenn die Eigenschaft nicht readonly/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion hinzu. Wenn die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese ganze Zeile.)

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname1`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname2`-Eigenschaft verfügbar.
    Wenn das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die entsprechenden Makroaufrufe.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API verknüpft sind. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
