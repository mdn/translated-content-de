---
title: API-Eigenschaften-Vorlagenseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Note:** _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiteneigenschaften (Front Matter):**
>
> Die Front Matter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty property"
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie sie als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities)-Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **slug**
>
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug ein `_static`-Suffix enthalten, z. B.: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies erlaubt uns, Instanz- und statische Eigenschaften mit demselben Namen zu unterstützen.
>
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Eigenschaften ist entweder `web-api-instance-property` (für Instanzeigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (die die `\{{Compat}}`- und `\{{Specifications}}`-Makros ersetzen).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsabschnitt (direkt unter den Seiteneigenschaften).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das angibt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-Standard**-Banner, das angibt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Falls doch, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — generiert eine **Verfügbar in Workern**-Notiz, die angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Falls sie auch oder ausschließlich im Worker-Kontext verfügbar ist, könnten Sie auch Parameter angeben müssen, basierend auf ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}}-Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Möglicherweise müssen Sie auch einen Eintrag auf der Seite [Web-APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — generiert die linke Referenz-Seitenleiste mit schnellen Referenzlinks in Bezug auf die aktuelle Seite.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros sollten nicht manuell bereitgestellt werden. Lesen Sie den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-Standard** werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung der Eigenschaft, erwähnen Sie, zu welcher Schnittstelle sie gehört, und beschreiben Sie, was sie macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie können die meisten Informationen aus der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren. Geben Sie an, ob sie schreibgeschützt ist oder nicht.

## Wert

Fügen Sie eine Beschreibung des Eigenschaftswertes hinzu, einschließlich des Datentyps und was er repräsentiert. Dies sollte die Form haben: "A [name of the property type] representing ...". Zum Beispiel:

> A string representing...

Beachten Sie, dass einige Eigenschaftsseiten in der Form "Returns a [name of the property type] representing..." geschrieben sind, dies jedoch nicht die empfohlene Form ist.
Einige WebIDL-Erweiterungsattribute mit spezifischen Bedeutungen können auch mit dem Typ assoziiert sein. Es gibt standardisierte Wege, sie zu dokumentieren; konsultieren Sie [Informationen in einer WebIDL-Datei](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für weitere Informationen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel ist "Ein einfaches Beispiel" keine gute Überschrift, da sie nichts aussagt. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Lesen Sie unseren Leitfaden dazu, [Code-Beispiele hinzuzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" ein. Beispielsweise:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
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
- external_link (Jahr)
