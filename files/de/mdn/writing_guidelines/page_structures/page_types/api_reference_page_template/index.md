---
title: API-Referenzseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung._
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren. Die Werte sollten entsprechend der spezifischen Eigenschaft aktualisiert werden.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird. Dies ist nur der Name der Schnittstelle. Zum Beispiel hat die [Request](/de/docs/Web/API/Request)-Schnittstellenseite einen _title_ von _Request_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/API/NameOfTheParentInterface`. Zum Beispiel hat der [Request](/de/docs/Web/API/Request) den Slug "Web/API/Request".
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Schnittstellen ist immer `web-api-interface`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Einträge enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browserkompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Status von Features hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheMethod` mit der Abfragezeichenfolge für die Methode im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (ersetzt die `\{{Compat}}`- und `\{{Specifications}}`-Makros).
>
> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Methode in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>
> Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Standardmäßig gibt es fünf Makroaufrufe oben in einer Vorlage. Sie sollten diese gemäß den folgenden Ratschlägen aktualisieren oder löschen.
>
> - `\{{APIRef("<em>GroupDataName</em>")}}` — dies erzeugt die referenzierende Seitenleiste auf der linken Seite, die schnelle Referenzlinks anzeigt, die sich auf die aktuelle Seite beziehen. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist. Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen GroupData-Eintrag in unserem KumaScript-GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen. Siehe unseren [API-Referenzseitenleitfaden](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen, wie man dies tut.
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) erstellen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltetes**-Banner, das anzeigt, dass die Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiertes**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist. Wenn nicht, können Sie den Makroaufruf entfernen. Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — dies erzeugt den Hauptteil der Seite (Konstruktor, Eigenschaften, Methoden und Ereignisse).
>
> Bereitstellen von Status-Header-Makros nicht manuell. Beachten Sie den Abschnitt ["Wie man Status von Features hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherheit im Kontext**, **Experimentell**, **Veraltet** und **Nicht-standardisiert**-Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit der Benennung der Schnittstelle, sagen Sie, zu welcher API sie gehört und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Sie können den Großteil dieser Informationen aus der Zusammenfassung der Schnittstelle auf der entsprechenden API-Startseite kopieren.

{{InheritanceDiagram}}

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) in den folgenden Abschnitten zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Konstruktor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Erstellt eine neue Instanz des `NameOfTheInterface`-Objekts.

## Statische Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Eigenschaft einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Fügen Sie eine kurze Beschreibung der Eigenschaft und ihrer Funktion hier ein. Wenn die Eigenschaft nicht schreibgeschützt/experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Statische Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Fügen Sie für jede Methode einen Begriff und eine Definition ein.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Fügen Sie eine kurze Beschreibung der Methode und ihrer Funktion hier ein. Wenn die Methode nicht experimentell/veraltet ist, entfernen Sie die zugehörigen Makroaufrufe.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, `\{{DOMxRef("NameOfParentInterface")}}`._ (Hinweis: Wenn die Schnittstelle nicht von einer anderen Schnittstelle erbt, entfernen Sie diese gesamte Zeile.)

Hören Sie diese Ereignisse mit {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`eventname1`](#)
  - : Ausgelöst, wenn (fügen Sie die Beschreibung hinzu, wann das Ereignis ausgelöst wird).
    Auch verfügbar über die `oneventname1`-Eigenschaft.
- [`eventname2`](#)
  - : Ausgelöst, wenn _(fügen Sie eine Beschreibung hinzu, wann das Ereignis ausgelöst wird)_.
    Auch verfügbar über die `oneventname2`-Eigenschaft.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gezeigt werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) ein und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Benutzung der Fetch-API
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browserkompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
