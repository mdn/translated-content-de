---
title: API-Referenzseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die [Request](/de/docs/Web/API/Request) Schnittstellenseite einen _Titel_ von _Request_.
> - **slug**
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird in der Form `Web/API/NameOfTheParentInterface` formatiert. Zum Beispiel ist der Slug von [Request](/de/docs/Web/API/Request) "Web/API/Request".
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Kennzeichnet den Status dieser Funktion. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten der Browser-Kompatibilitätsdaten für die Funktion gesetzt. Sehen Sie ["Wie man Status für Funktionen hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` durch den Abfrage-String für die Methode im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu befüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>
> Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Standardmäßig gibt es fünf Makroaufrufe am oberen Rand eines Templates. Sie sollten sie gemäß den untenstehenden Hinweisen aktualisieren oder löschen.
>
> - `\{{APIRef("<em>GroupDataName</em>")}}` — dies erzeugt die linke Referenz-Seitenleiste, die schnelle Referenzlinks zeigt, die mit der aktuellen Seite zusammenhängen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API weist. Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen GroupData-Eintrag zu unserem KumaScript GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen. Siehe unseren Leitfaden zu [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu.
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie hinter einem Präf in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür in der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltetes** Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiertes** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn das nicht der Fall ist, können Sie den Makroaufruf entfernen. Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür in der Seite [Eingeschränkte Funktionen in sicheren Kontexten](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — dies erzeugt den Hauptteil der Seite (Konstruktor, Eigenschaften, Methoden und Ereignisse).
>
> Status-Header-Makros nicht manuell bereitstellen. Lesen Sie den Abschnitt ["Wie man Status für Funktionen hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Benennen der Schnittstelle, sagen Sie, zu welcher API sie gehört, und was sie tut. Dies sollte idealerweise in ein oder zwei kurzen Sätzen geschehen. Sie könnten das meiste davon aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Landingpage übernehmen.

{{InheritanceDiagram}}

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface` Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Eigenschaft ein.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Eigenschaft und ihrer Funktion ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie einen Begriff und eine Definition für jede Methode ein.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Methode und ihrer Funktion ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner Elterschnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

- [`eventname1`](#)
  - : Wird ausgelöst, wenn (fügen Sie die Beschreibung ein, wann das Ereignis ausgelöst wird).
    Auch über die `oneventname1` Eigenschaft verfügbar.
- [`eventname2`](#)
  - : Wird ausgelöst, wenn _(fügen Sie eine Beschreibung ein, wann das Ereignis ausgelöst wird)_.
    Auch über die `oneventname2` Eigenschaft verfügbar.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
>
> Beispiel von Fetch
>
> ### Mehr Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter dem H2-Titel "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
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
- external_link (Jahr)
