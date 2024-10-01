---
title: API-Einstiegsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung, bevor Sie veröffentlichen_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
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
>     Dies ist der Name der API gefolgt von dem Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) einen Titel von _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat einen Titel von _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird wie `Web/API/NameOfTheAPI_API` formatiert.
>     Zum Beispiel ist der Slug der [WebXR Device API](/de/docs/Web/API/WebVR_API) `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Einstiegsseiten ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> ---
>
> **Top-of-page macros**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-Standard**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag für das Feature auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linke Referenz-Seitenleiste, die schnelle Referenzlinks zu den aktuellen Inhalten bietet.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Weitere Informationen finden Sie in unserem [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Status-Header-Makros manuell an. Um zu erfahren, wie Sie diese Status zur Seite hinzufügen, schauen Sie in den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> Beispiele der **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Hinweis-Block angezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Einstiegsseiten haben optional einen Abschnitt zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API anzeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität innerhalb der API kompliziert/unmöglich in wenigen Tabellen wiedergegeben werden kann, sollte dieser Abschnitt weggelassen werden.
>
> Um den Abschnitt zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Fügen Sie das `\{{Compat("path.to.feature.Interface")}}` Makro für jede Schnittstelle hinzu, für die Kompatibilitätsinformationen erforderlich sind, und ersetzen Sie das „path.to.feature.Interface“-Argument durch den Pfad zur gewünschten Schnittstelle in den Browser-Kompatibilitätsdaten.
>
> ---
>
> **Spezifikationen**
>
> API-Einstiegsseiten haben optional einen Abschnitt zu den Spezifikationen, in dem die relevanten Spezifikationen für jede Schnittstelle aufgeführt sind. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{specifications("path.to.feature.Interface")}}` Makro, um Tabellen für die wichtigsten Spezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung zu entfernen, bevor Sie veröffentlichen_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung der API und deren Funktion. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Verwendung

In diesem Abschnitt beschreiben Sie den Zweck und die Verwendungsmöglichkeiten der API etwas ausführlicher — warum wurde ein Bedürfnis dafür erkannt?
Welche Probleme löst sie? Welche Konzepte sind beinhaltet? Wie benutzt man sie aus einer übergeordneten Perspektive?

Gehen Sie in diesem Abschnitt nicht ins Detail und fügen Sie keine Code-Beispiele hinzu.
Wenn es viele Konzepte gibt, die rund um diese API zu erklären sind, sollten Sie diese in einem separaten Artikel "Grundlagen" oder "Konzepte" (z. B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)) erklären.
Für einen praktischen Leitfaden zur Verwendung mit Code-Beispielen sollten Sie einen „Verwendung…“-Artikel in Ihrer API-Dokumentation einschließen (z. B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit der Inhalte und {{Glossary("SEO", "SEO")}} zu verbessern, beachten Sie die folgenden Tipps:

## Schnittstellen

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Geben Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion an.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch ein.

### Erweiterungen zu anderen Schnittstellen

Die _Name der Schnittstelle_ erweitert die folgenden APIs, indem sie die aufgeführten Funktionen hinzufügt.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#1, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#2, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen an.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine letzte H3-Überschrift (`###`) mit dem Text „Mehr Beispiele“, unter der Sie die Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel für Fetch
>
> ### Mehr Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift „Beispiele“ hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications("path.to.feature.Interface_1")}}`

`\{{Specifications("path.to.feature.Interface_2")}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat("path.to.feature.Interface_1")}}`

`\{{Compat("path.to.feature.Interface_2")}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
