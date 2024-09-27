---
title: API-Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese ganze erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Page front matter:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Schnittstelle aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheAPI API
> slug: Web/API/NameOfTheAPI_API
> page-type: web-api-overview
> status:
>   - experimental
>   - deprecated
>   - non-standard
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Dies ist der Name der API, gefolgt von dem Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert wie `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Landingpages ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> ---
>
> **Top-of-page macros**
>
> Am Anfang des Inhaltsbereichs (unmittelbar unter der Page-Frontmatter) erscheinen eine Reihe von Makroaufrufen.
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, diese hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie hinter einer Präferenz in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht standardisiert**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte eingeschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ergänzen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linksseitige Referenz-Sidebar, die schnelle Referenzlinks im Zusammenhang mit der aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Weitere Informationen hierzu finden Sie in unserem [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie die Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Statusse zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden gleich nach diesem Notizblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Landingpages haben optional einen Browser-Kompatibilitätsabschnitt, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität in der gesamten API schwierig/unmöglich einzufangen ist in wenigen Tabellen, sollten diese Abschnitte weggelassen werden.
>
> Um den Abschnitt zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise erst Einträge für die API-Schnittstellen in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Fügen Sie das `\{{Compat("path.to.feature.Interface")}}`-Makro für jede Schnittstelle hinzu, für die Kompatibilitätsinformationen erforderlich sind, und ersetzen Sie das Argument "path.to.feature.Interface" durch den Pfad zur gewünschten Schnittstelle in den Browser-Kompatibilitätsdaten.
>
> ---
>
> **Spezifikationen**
>
> API-Landingpages haben optional einen Spezifikationsabschnitt, der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst die Einträge für Schnittstellen im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{specifications("path.to.feature.Interface")}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese ganze erklärende Notiz vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie mit der Nennung der API und beschreiben Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck der API und Anwendungsfälle etwas detaillierter — warum wurde ein Bedarf dafür erkannt? Welche Probleme löst es? Welche Konzepte sind involviert? Wie benutzt man es aus einer höheren Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Code-Beispiele ein. Wenn es viele Konzepte gibt, die zu dieser API erklärt werden müssen, sollten Sie diese in einem separaten Artikel über "Grundlagen" oder "Konzepte" erklären (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)). Für einen praktischen Nutzungs-Leitfaden mit Code-Beispielen sollten Sie einen "Verwendung..."-Artikel in Ihre API-Dokumentation aufnehmen (z.B. [Verwenden der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und [SEO](/de/docs/Glossary/SEO) zu verbessern, beachten Sie bitte die folgenden Tipps:

## Schnittstellen

_Zum Verwenden des [domxref-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references), entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch hinzu.

### Erweiterungen zu anderen Schnittstellen

Die _name of interface_ erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle #1, die zu dieser API durch die API, die Sie gerade dokumentieren, hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können diese Abschnitte gelöscht werden.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle #2, die zu dieser API durch die API, die Sie gerade dokumentieren, hinzugefügt wird, etc.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Lesen Sie unseren Leitfaden zur Hinzufügung von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch API
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

`\{{Specifications("path.to.feature.Interface_1")}}`

`\{{Specifications("path.to.feature.Interface_2")}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat("path.to.feature.Interface_1")}}`

`\{{Compat("path.to.feature.Interface_2")}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden im Zusammenhang mit der aktuellen API hinzu. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
