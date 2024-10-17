---
title: API Landing Page Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: ad385725ed5713e9d384e505424bba227577e62d
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diese gesamte erklärende Notiz, bevor Sie veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am oberen Rand der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Interface aktualisiert werden.
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
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) einen Titel von _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat einen Titel von _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Es wird in der Form `Web/API/NameOfTheAPI_API` formatiert.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der Schlüssel `page-type` für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Einträge enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten des Features gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen am Anfang des Inhaltsbereichs (direkt unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einfügen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert** Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Hinweise aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) einfügen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Workern** Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund seiner Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API#supported_web_apis) einfügen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenz-Seitenleiste, die schnelle Referenzlinks enthält, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags in den Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars), um Informationen zu diesem Thema zu erhalten.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner sind direkt nach diesem Hinweisblock zu sehen.
>
> ---
>
> **Browser-Kompatibilität**
>
> API Startseiten haben optional einen Abschnitt zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Interfaces in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität in der API kompliziert/unmöglich ist, in wenigen Tabellen zu erfassen, sollte dieser Abschnitt weggelassen werden.
>
> Um den Browser-Kompatibilitätsabschnitt zu füllen, müssen Sie möglicherweise zunächst Einträge für die API-Interfaces in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}` Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API Startseiten haben optional einen Spezifikationsabschnitt, der die relevante(n) Spezifikation(en) für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt zu füllen, müssen Sie möglicherweise zunächst Einträge für Interfaces im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}` Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese ganze erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung der API und beschreiben Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck der API und Anwendungsfälle im Detail — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte sind damit verbunden? Wie nutzt man sie aus einer höheren Perspektive?

Geben Sie in diesem Abschnitt nicht viele Details an und schließen Sie keine Codebeispiele ein.
Wenn es viele Konzepte gibt, die bei dieser API erklärt werden müssen, sollten Sie diese in einem separaten "Grundlagen" oder "Konzepte" Artikel erläutern (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für einen praktischen Nutzungsleitfaden mit Codebeispielen sollten Sie einen Artikel "Nutzung…" in Ihre API-Dokumentation einfügen (z.B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Entdeckbarkeit von Inhalten zu verbessern und {{Glossary("SEO", "SEO")}} zu optimieren, beachten Sie die folgenden Tipps:

## Schnittstellen

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder ein Wörterbuch hinzu.

### Erweiterungen zu anderen Schnittstellen

Der _Name der Schnittstelle_ erweitert die folgenden APIs, indem die aufgelisteten Features hinzugefügt werden.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle #1, das zu dieser API hinzugefügt wird, die Sie gerade dokumentieren.
    Ein \*Begriff und Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle #2, das zu dieser API hinzugefügt wird, die Sie gerade dokumentieren, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
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
> ## Examples
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Stil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
