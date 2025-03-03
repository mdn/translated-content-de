---
title: API-Startseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Hinweis:** _Entfernen Sie diese ganze erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Seitendaten:**
>
> Die Seitendaten am Anfang der Seite definieren "Metadaten der Seite".
> Die Werte sollten entsprechend der jeweiligen Schnittstelle aktualisiert werden.
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
>     Dies ist der Name der API gefolgt von dem Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert als `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel ist der Slug der [WebXR Device API](/de/docs/Web/API/WebVR_API) `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Optionen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seitendaten).
>
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [unerwünscht](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Falls nicht, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Verfügbar in Workern**-Notiz, die angibt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise ein Parameter übergeben, je nach Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), möglicherweise müssen Sie auch einen Eintrag auf der Seite [Web APIs in Workern verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die Referenz-Sidebar links mit schnellen Referenzlinks, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Sidebar, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu, wie dies gemacht wird.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Keine Status-Header-Makros manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner sind direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Startseiten haben optional einen Abschnitt zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität über die API hinweg kompliziert/unmöglich ist, in wenigen Tabellen erfasst zu werden, sollte dieser Abschnitt weggelassen werden.
>
> Um den Abschnitt zur Browser-Kompatibilität auszufüllen, müssen Sie zuerst Einträge für die API-Schnittstellen in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}` Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Startseiten haben optional einen Spezifikationsabschnitt, der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}` Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Vergessen Sie nicht, diese ganze erklärende Notiz vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck und die Nutzungsszenarien der API etwas detaillierter — warum wurde ein Bedarf dafür erkannt? Welche Probleme löst sie? Welche Konzepte sind involviert? Wie verwendet man sie aus einer höheren Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein. Wenn es viele Konzepte gibt, die rund um diese API erklärt werden müssen, sollten Sie diese in einem separaten "Grundlagen" oder "Konzepte"-Artikel erklären (z. B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)). Für einen praktischen Nutzungsleitfaden mit Codebeispielen sollten Sie einen "Nutzung…" Artikel in Ihre API-Dokumentation aufnehmen (z. B. [Die WebVR API nutzen](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und {{Glossary("SEO", "SEO")}} zu verbessern, beachten Sie die folgenden Tipps:

## Schnittstellen

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch hinzu.

### Erweiterungen zu anderen Schnittstellen

Die _name der Schnittstelle_ erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion der Schnittstelle#1, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion der Schnittstelle#2, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird, etc.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispielsweise:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API sehen Sie [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle API beziehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
