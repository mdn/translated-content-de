---
title: API-Startseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten oben auf der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Interface aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheAPI API
> slug: Web/API/NameOfTheAPI_API
> page-type: web-api-overview
> status:
>   - deprecated
>   - experimental
>   - non-standard
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Dies ist der Name der API gefolgt vom Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat die [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_ und die [Fetch](/de/docs/Web/API/Fetch_API) den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird wie `Web/API/NameOfTheAPI_API` formatiert.
>     Zum Beispiel ist der Slug der [WebXR Device API](/de/docs/Web/API/WebVR_API) `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der Schlüsselwert `page-type` für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Optionen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Oben auf der Seite Macros**
>
> Eine Reihe von Macro-Befehlen erscheinen am Anfang des Inhaltsbereichs (direkt unter den Seiten-Metadaten).
>
> Diese Macros werden automatisch vom Toolchain hinzugefügt (es ist nicht erforderlich, diese hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Macros entsprechend dem nachstehenden Hinweis aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Falls nicht, können Sie den Macro-Aufruf entfernen.
>   Falls ja, sollten Sie auch einen Eintrag dafür auf der Seite [Features eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Workers**-Anmerkung, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fenster-Kontext verfügbar ist, können Sie den Macro-Aufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund ihrer Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Macro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag auf der Seite [Web-APIs verfügbar in Workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenzseitenleiste mit Quick-Reference-Links, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Macro-Aufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu tun ist.
>
> Geben Sie keine Status-Banner-Macros manuell an. Lesen Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Secure context**, **Available in workers**, **Experimental**, **Deprecated**, und **Non-standard** Banner werden unmittelbar nach diesem Anmerkungsblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Startseiten haben optional einen Bereich "Browser-Kompatibilität", der Kompatibilitätstabellen für eines oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität über die API hinweg kompliziert/unmöglich in einigen Tabellen zu erfassen ist, sollte dieser Bereich weggelassen werden.
>
> Um den Bereich "Browser-Kompatibilität" auszufüllen, müssen Sie möglicherweise zunächst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden dazu, wie das geht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}` Macro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Startseiten haben optional einen Bereich "Spezifikationen", der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Bereich "Spezifikationen" auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten aufzunehmen — siehe unseren [Leitfaden dazu, wie das geht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}` Macro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie mit der Benennung der API und erklären Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Verwendung

In diesem Abschnitt beschreiben Sie den Zweck der API und die Verwendungsmöglichkeiten etwas ausführlicher — warum wurde sie benötigt?
Welche Probleme löst sie? Welche Konzepte sind damit verbunden? Wie verwendet man sie aus einer hohen Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein.
Wenn es viele Konzepte gibt, die um diese API erklärt werden müssen, sollten Sie diese in einem separaten "Grundlagen" oder "Konzepte"-Artikel erklären (z. B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für einen praktischen Gebrauch mit Codebeispielen sollten Sie einen "Verwendung..."-Artikel in Ihren API-Dokumentationen einschließen (z. B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und {{Glossary("SEO", "SEO")}} zu verbessern, beachten Sie bitte die folgenden Tipps:

## Schnittstellen

_Um den [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch hinzu.

### Erweiterungen für andere Schnittstellen

Der _Name der Schnittstelle_ erweitert die folgenden APIs, indem er die aufgelisteten Funktionen hinzufügt.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features der Schnittstelle #1, das durch die von Ihnen dokumentierte API zu dieser API hinzugefügt wird.
    Ein \*Begriff und Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features der Schnittstelle #2, das durch die von Ihnen dokumentierte API zu dieser API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine ausführlichere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Mehr Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel für Fetch
>
> ### Mehr Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links einfach direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Schließen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
