---
title: Vorlage für API-Property-Unterseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diese gesamte Erklärung, bevor Sie sie veröffentlichen._
>
> ---
>
> **Front-Matter der Seite:**
>
> Das Front-Matter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Property aktualisiert werden.
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
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/API/NameOfTheParentInterface/NameOfTheProperty` formatiert.
>
>     Wenn die Property statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies ermöglicht es uns, Instanz- und statische Eigenschaften mit demselben Namen zu unterstützen.
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Eigenschaften ist entweder `web-api-instance-property` (für Instanzeigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Status von Funktionen"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` durch den Abfrage-String für die Eigenschaft im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Sehen Sie sich unser [Leitfaden zur Erstellung dieser Einträge](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) an.
>
> ---
>
> **Top-of-page Makros**
>
> Eine Reihe von Makroaufrufen erscheint am oberen Rand des Inhaltsbereichs (unmittelbar unterhalb des Front-Matters der Seite).
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einer Präferenz in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht standardisiertes** Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem folgenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn sie es nicht ist, können Sie den Makroaufruf entfernen.
>   Wenn sie es ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — generiert einen Hinweis **Verfügbar in Workern**, der anzeigt, dass die Technologie in [Worker-Kontexten](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fenster-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund ihrer Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API#supported_web_apis) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — generiert die Referenz-Sidebar auf der linken Seite, die schnelle Referenzlinks zeigt, die mit der aktuellen Seite zusammenhängen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unser GitHub-Repository hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ angeben.
>   Siehe unser [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen darüber, wie Sie dies tun können.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie die Status-Header-Makros nicht manuell an. Verweisen Sie auf den Abschnitt ["Wie man Status von Funktionen hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standarisiert** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Erinnern Sie sich daran, diese gesamte Erklärung zu entfernen, bevor Sie veröffentlichen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Abschnitt — beginnen Sie mit der Nennung der Eigenschaft, sagen Sie, zu welchem Interface sie gehört, und was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.
Sie könnten den größten Teil davon aus der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren. Geben Sie an, ob sie schreibgeschützt ist oder nicht.

## Wert

Fügen Sie eine Beschreibung des Wertes der Eigenschaft hinzu, einschließlich des Datentyps und was dieser repräsentiert. Dies sollte in der Form sein: "Ein [Name des Eigenschaftentyps], der ... repräsentiert". Zum Beispiel:

> Ein String, der...

Beachten Sie, dass einige Eigenschaftsseiten in der Form geschrieben sind "Gibt einen [Name des Eigenschaftentyps] zurück, der ... repräsentiert", aber dies ist nicht die empfohlene Form.
Auch können einige WebIDL-Erweiterungsattribute mit spezifischen Bedeutungen mit dem Typ assoziiert werden. Es gibt standardisierte Arten, diese zu dokumentieren; konsultieren Sie [Informationen in einer WebIDL-Datei enthalten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für mehr Informationen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel, "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unser Leitfaden an, wie man [Code-Beispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und noch mehr Beispiele auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
