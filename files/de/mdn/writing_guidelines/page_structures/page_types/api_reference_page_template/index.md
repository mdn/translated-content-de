---
title: Vorlage für API-Referenzseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 743d7644188577789b102fd41c6ab75bae49f8ab
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Dies ist lediglich der Name des Interface. Beispielsweise hat die Interface-Seite [Request](/de/docs/Web/API/Request) den _title_ _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dieses wird wie `Web/API/NameOfTheParentInterface` formatiert. Beispielsweise lautet der Slug von [Request](/de/docs/Web/API/Request) „Web/API/Request“.
> - **page-type**
>   - : Der Schlüssel `page-type` für Web/API-Interfaces lautet immer `web-api-interface`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfragestring für die Methode im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
> Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die API-Methode in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>
> Lesen Sie dazu unseren [Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (direkt unter dem Frontmatter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein Banner **This is an experimental technology**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Falls sie experimentell ist und die Technologie in Firefox durch eine Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein Banner **Non-standard**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein Banner **Secure context**, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Falls dies nicht der Fall ist, können Sie den Makroaufruf entfernen. Falls doch, sollten Sie auch einen Eintrag dafür auf der Seite [Auf sichere Kontexte beschränkte Features](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt einen Hinweis **Available In Workers**, der darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Falls sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Falls sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie ihm aufgrund seiner Verfügbarkeit möglicherweise auch einen Parameter übergeben (siehe den [Quellcode des Makros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Möglicherweise müssen Sie auch einen Eintrag dafür auf der Seite [In Workern verfügbare Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die Referenzseitenleiste auf der linken Seite, die Links zur Schnellreferenz enthält, die mit der aktuellen Seite zusammenhängen. Beispielsweise hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist. Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag hinzufügen und den Namen des Eintrags anstelle von _GroupDataName_ in den Makroaufruf aufnehmen. Informationen dazu finden Sie in unserem Leitfaden zu [Seitenleisten für API-Referenzen](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Secure context**, **Available in workers**, **Experimental**, **Deprecated** und **Non-standard** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie damit, das Interface zu nennen, anzugeben, zu welcher API es gehört, und zu beschreiben, was es tut. Idealerweise sollte dies aus einem oder zwei kurzen Sätzen bestehen. Sie können den Großteil davon aus der Zusammenfassung des Interface auf der entsprechenden API-Einstiegsseite übernehmen.

Halten Sie den einleitenden Inhalt kurz. Alle weiteren Erklärungen sollten im Abschnitt „Beschreibung“ vor dem Abschnitt „Beispiele“ enthalten sein.

`\{{InheritanceDiagram}}`

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Falls das Interface nicht von einem anderen Interface erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Falls die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Falls die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Falls das Interface nicht von einem anderen Interface erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Falls die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Falls die Eigenschaft nicht schreibgeschützt/experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Falls das Interface nicht von einem anderen Interface erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Falls die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Falls die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Falls das Interface nicht von einem anderen Interface erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Falls die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Falls die Methode nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Falls das Interface nicht von einem anderen Interface erbt, entfernen Sie diese gesamte Zeile.)

Überwachen Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie der Eigenschaft `oneventname` dieses Interface einen Event-Listener zuweisen.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die Eigenschaft `oneventname1` verfügbar.
    Falls das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die Eigenschaft `oneventname2` verfügbar.
    Falls das Ereignis nicht experimentell/veraltet/nicht standardisiert ist, entfernen Sie die zugehörigen Makroaufrufe.

## Beschreibung

Dies ist ein optionaler Abschnitt. Fügen Sie hier bei Bedarf eine ausführlichere Erklärung des Interface ein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) und anschließend eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“ ein, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu, sondern fügen Sie die Links direkt unter der H2-Überschrift „Beispiele“ ein. Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- external_link (Jahr)
