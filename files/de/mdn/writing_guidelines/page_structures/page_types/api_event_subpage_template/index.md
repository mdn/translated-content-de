---
title: Vorlage für eine API-Ereignis-Unterseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 88e4ba556d3a475dc4d60937f7db5178b2a1d54b
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite dient dazu, die „Seitenmetadaten“ festzulegen.
> Die Werte sollten für das jeweilige Ereignis entsprechend angepasst werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Verwenden Sie das Format „_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**“.
>     Beispielsweise hat das Ereignis [animationcancel](/de/docs/Web/API/Element/animationcancel_event) des Interfaces [Window](/de/docs/Web/API/Window) den _title_ `Window: animationcancel event`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Es hat das Format `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : Der Schlüssel `page-type` hat für Web/API-Ereignisse immer den Wert `web-api-event`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheEvent_event` durch den Abfragestring für das Ereignis im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu befüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Ereignis in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Dieser Eintrag muss Informationen zur Spezifikation enthalten.
>     Lesen Sie unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (direkt unter dem Frontmatter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Die folgenden Makros sollten Sie gemäß den nachstehenden Hinweisen aktualisieren oder entfernen:
>
> - `\{{SecureContext_Header}}` — erzeugt einen Hinweis **Sicherer Kontext**, der anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Falls das nicht zutrifft, können Sie den Makroaufruf entfernen.
>   Falls es zutrifft, sollten Sie auch einen Eintrag dafür auf der Seite [Auf sichere Kontexte beschränkte Features](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ergänzen.
> - `\{{AvailableInWorkers}}` — erzeugt einen Hinweis **In Workern verfügbar**, der anzeigt, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur in einem Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder ausschließlich in einem Worker-Kontext verfügbar ist, müssen Sie je nach Verfügbarkeit möglicherweise einen Parameter übergeben (alle verfügbaren Werte finden Sie im [Quellcode des Makros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)). Möglicherweise müssen Sie auch einen Eintrag dafür auf der Seite [In Workern verfügbare Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ergänzen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste links mit Schnelllinks zur aktuellen Seite.
>   Beispielsweise haben alle Seiten zur [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie in unserem GitHub-Repository einen `GroupData`-Eintrag hinzufügen und dessen Namen anstelle von _GroupDataName_ im Makroaufruf angeben.
>   Informationen dazu finden Sie in unserem Leitfaden zu [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Sicherer Kontext**, **In Workern verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> ---
>
> **Link zum übergeordneten Objekt**
>
> Fügen Sie im Abschnitt _Ereignisse_ des übergeordneten Objekts einen Link zu dieser neuen Seite hinzu.
> Beispielsweise ist [Element: wheel event](/de/docs/Web/API/Element/wheel_event) unter den [Ereignissen von `Element`](/de/docs/Web/API/Element#events) verlinkt.
>
> Wenn das übergeordnete Objekt keinen Abschnitt _Ereignisse_ hat, fügen Sie einen hinzu.
> Wenn es sich um eine neue „Klasse“ von Ereignissen handelt, sollten Sie im Leitfaden zu [DOM-Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#event_index) einen Link zu diesem Abschnitt des übergeordneten Objekts hinzufügen.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz: Nennen Sie zuerst das Ereignis und beschreiben Sie dann, zu welchem Interface es gehört und was es bewirkt.
Idealerweise genügen dafür ein oder zwei kurze Sätze.
Sie können dafür einen Großteil der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite übernehmen.

## Syntax

Verwenden Sie den Namen des Ereignisses in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onNameOfTheEvent = (event) => { }
```

## Ereignistyp

Wenn das Ereignis einen speziellen Typ hat, nennen Sie ihn zusammen mit seiner Vererbung. Geben Sie andernfalls an, dass es sich um ein generisches Ereignis handelt:

_Ein generisches [`Event`](/de/docs/Web/API/Event)._

Oder beispielsweise:

_Ein [`XRSessionEvent`](/de/docs/Web/API/XRSessionEvent). Erbt von [`Event`](/de/docs/Web/API/Event)._

{{InheritanceDiagram("XRSessionEvent")}}

## Beschreibung

Wenn Sie zusätzliche Informationen angeben möchten, die für die Zusammenfassung zu lang sind, fügen Sie einen Abschnitt „Beschreibung“ hinzu.
Er kann die Überschriften

### Auslöser

und

### Anwendungsfälle

enthalten, unter denen Sie weitere Informationen angeben können.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel benötigt eine H3-Überschrift (`###`), die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

Wenn Sie sowohl `addEventListener` als auch `onEvent` demonstrieren möchten, vermeiden Sie die Behauptung oder den Eindruck, die beiden Beispiele seien gleichwertig. Fügen Sie idealerweise immer ausdrücklich einen Hinweis in Klammern hinzu: „Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onEvent` hinzugefügte Event-Listener ersetzt werden.“

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verweisen.
>
> **Szenario 1:** Sie haben einige Beispiele auf dieser Seite und weitere auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und anschließend eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Sie haben _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite:
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

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Weitere Hinweise finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- Link 1
- Link 2
- externer Link (Jahr)
