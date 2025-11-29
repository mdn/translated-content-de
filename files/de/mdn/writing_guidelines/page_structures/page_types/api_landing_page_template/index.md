---
title: API-Landing-Page-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

> [!NOTE]
> _Entfernen Sie diese gesamte Erklärung, bevor Sie veröffentlichen_
>
> ---
>
> **Seiteninformationen:**
>
> Die Kopfzeilen am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Schnittstelle aktualisiert werden.
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
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type` Wert für Web/API-Übersichtsseiten ist immer `web-api-overview`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten aus den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Obere-Seite-Makros**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiteninformationen).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (kein Hinzufügen/Entfernen erforderlich):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **This is an experimental technology**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem `pref` in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Deprecated**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Non-standard**-Banner, das darauf hinweist, dass dieses Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Hinweise aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Secure context**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Ist dies nicht der Fall, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **Available In Workers**-Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Ist sie nur im Fensterkontext verfügbar, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter dafür an den Makroaufruf übergeben, abhängig von ihrer Verfügbarkeit (siehe [\\{{AvailableInWorkers}} macros source code](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web APIs available in workers](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die linke Referenz-Seitenleiste, die Schnellzugrifflinks zu verwandten Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf andere Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API reference sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie man das macht.
>
> Stellen Sie keine Status-Header-Makros manuell bereit. Beziehen Sie sich auf den Abschnitt ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Secure context**, **Available in workers**, **Experimental**, **Deprecated**, und **Non-standard**-Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Landing-Pages haben optional einen Abschnitt zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität bei den meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität der API kompliziert oder unmöglich in wenigen Tabellen darzustellen ist, sollte dieser Abschnitt weggelassen werden.
>
> Um den Abschnitt zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}`-Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Landing-Pages haben optional einen Abschnitt zu Spezifikationen, der die relevanten Spezifikation(en) für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte Erklärung vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Namen der API und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

Beschreiben Sie in diesem Abschnitt den Zweck und die Anwendungsfälle der API etwas detaillierter — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte beinhaltet sie? Wie benutzt man sie aus einer hochrangigen Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele hinzu.
Wenn es viele Konzepte zu der API zu erklären gibt, sollten Sie diese in einem separaten Artikel "Grundlagen" oder "Konzepte" erklären (z. B. [Fundamentals of WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für einen praktischen Leitfaden zur Nutzung mit Codebeispielen sollten Sie einen Artikel "Nutzung..." in Ihrer API-Dokumentation einfügen (z. B. [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Fügen Sie eine Liste von Leitfaden-Seiten unter dieser Landing-Page hinzu. Jeder Titel sollte zur Leitfaden-Seite verlinken. Dieser Abschnitt ist optional; wenn es nur einen einzigen "Using" Leitfaden gibt, zusammen mit einigen anderen konzeptionellen Leitfäden, könnte es hilfreicher sein, diese als Absatz am Ende des Abschnitts "Konzepte und Nutzung" zu verlinken. Dieser Abschnitt ist nützlicher, wenn es so viele Leitfäden gibt, dass der Prosa-Text schwierig zu überfliegen wird.

- Using the ... API
  - : Einleitungsabsatz dieser Leitfaden-Seite
- Leitfaden 2
  - : Einleitungsabsatz dieser Leitfaden-Seite

## Schnittstellen

_Zum Verwenden des [domxref Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references), entfernen Sie die Backticks und Backslash im Markdown-Dokument._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie für jede Schnittstelle oder jedes Wörterbuch einen Begriff und eine Definition hinzu.

### Erweiterungen zu anderen Schnittstellen

Die _Name der Schnittstelle_ erweitert die folgenden APIs und fügt die aufgelisteten Features hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features der Schnittstelle #1, das durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wurde.
    Ein \*Begriff und Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features der Schnittstelle #2, das durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wurde, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend sein für das, was das Beispiel tut. Zum Beispiel, "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel der Fetch API
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
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und Backslash im Markdown-Dokument._

## Browser-Kompatibilität

`\{{Compat}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und Backslash im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die zur aktuellen API gehören. Für zusätzliche Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (year)
