---
title: API Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

> **Note:** _Entfernen Sie diese gesamte Erklärung, bevor Sie sie veröffentlichen._
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten oben auf der Seite definieren "Seitenmetadaten".
> Die Werte sollten für die jeweilige Schnittstelle entsprechend aktualisiert werden.
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
>     Dies ist der Name der API, gefolgt vom Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat die [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert wie `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Einstiegsseiten ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter den Seitenmetadaten).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Diese Technologie ist experimentell** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls es experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einfügen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Obsolet** Banner, das darauf hinweist, dass die Nutzung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-standard** Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dieses Banner zeigt an, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt eine **Verfügbar in Arbeitern** Notiz, die darauf hinweist, dass die Technologie im [Arbeiter-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Arbeiter-Kontext oder nur dort verfügbar ist, müssen Sie möglicherweise ein Parameter übergeben, abhängig von ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makro-Codequelle](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Möglicherweise müssen Sie auch einen Eintrag in der [Web-APIs verfügbar in Arbeitern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) Seite hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linksseitige Referenz-Sidebar mit Schnellverweis-Links, die mit der aktuellen Seite verbunden sind.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten der API verweist.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie dies zu tun ist.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Siehe den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Obsolet** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Einstiegsseiten haben optional einen Browser-Kompatibilitätsabschnitt, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API anzeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, ist oft nur eine Kompatibilitätstabelle erforderlich. Wenn die Kompatibilität in der API kompliziert/unmöglich in wenigen Tabellen darzustellen ist, sollte dieser Abschnitt weggelassen werden.
>
> Um den Browser-Kompatibilitätsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}`-Makro, um die Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Landingpages haben optional einen Spezifikationsabschnitt, der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}`-Makro, um die Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese ganze Erklärung zu entfernen, bevor Sie sie veröffentlichen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Verwendung

Beschreiben Sie in diesem Abschnitt den Zweck der API und die Anwendungsfälle im Detail — warum wurde ein Bedarf dafür erkannt? Welche Probleme löst sie? Welche Konzepte sind involviert? Wie verwenden Sie sie, aus einer übergeordneten Perspektive?

Gehen Sie in diesem Abschnitt nicht ins Detail, und fügen Sie keine Codebeispiele hinzu. Wenn es viele Konzepte gibt, die um diese API erklärt werden müssen, sollten Sie sie in einem separaten Artikel "Grundlagen" oder "Konzepte" erklären (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)). Für eine praktische Gebrauchsanleitung mit Codebeispielen sollten Sie einen "Verwendung…" Artikel in Ihren API-Dokumenten aufnehmen (z.B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und {{Glossary("SEO", "SEO")}} zu verbessern, beachten Sie die folgenden Tipps:

## Schnittstellen

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktionen ein.
    Fügen Sie für jede Schnittstelle oder jedes Wörterbuch einen Begriff und eine Definition ein.

### Erweiterungen zu anderen Schnittstellen

Der _Name der Schnittstelle_ erweitert die folgenden APIs, indem es die aufgelisteten Funktionen hinzufügt.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#1, die durch die von Ihnen derzeit dokumentierte API zu dieser API hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#2, die durch die von Ihnen derzeit dokumentierte API zu dieser API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schriftschema-Leitfaden_.

- link1
- link2
- external_link (Jahr)
