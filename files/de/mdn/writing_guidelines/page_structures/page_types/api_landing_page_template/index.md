---
title: API-Vorlagenseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Front-Matter der Seite:**
>
> Das Front-Matter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren. Die Werte sollten entsprechend für die jeweilige Schnittstelle aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Dies ist der Name der API, gefolgt von dem Text "API": z.B. _NameOfTheAPI_ **API**. Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird im Format `Web/API/NameOfTheAPI_API` sein. Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Front-Matter der Seite).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardisiert** Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem folgenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist. Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen. Wenn dies der Fall ist, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Workern** Notiz, die angibt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist. Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen. Wenn es auch im Arbeiterkontext oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, da dies seine Verfügbarkeit betrifft (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und Sie müssen möglicherweise auch einen Eintrag auf der Seite [Web APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenz-Seitenleiste mit schnellen Referenzlinks zur aktuellen Seite. Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist. Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag in unser GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ verwenden. Siehe unseren [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen dazu.
>
> Fügen Sie keine Statusheader-Makros manuell hinzu. Um diese Status zur Seite hinzuzufügen, beziehen Sie sich auf den Abschnitt ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden gleich nach diesem Notizblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Startseiten haben optional einen Bereich für die Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität über die API hinweg kompliziert/unerfassbar in wenigen Tabellen ist, sollte dieser Bereich weggelassen werden.
>
> Um den Bereich für die Browser-Kompatibilität auszufüllen, müssen Sie zunächst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}` Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Startseiten haben optional einen Bereich für Spezifikationen, der die relevanten Spezifikation(en) für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Bereich für die Spezifikationen auszufüllen, müssen Sie zunächst Einträge im [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}` Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Namen der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

Beschreiben Sie in diesem Abschnitt den Zweck und die Anwendungsfälle der API etwas ausführlicher — warum wurde ein Bedarf dafür erkannt? Welche Probleme löst sie? Welche Konzepte beinhaltet sie? Wie wird sie verwendet, aus einer hochrangigen Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein. Wenn es viele Konzepte zu dieser API zu erklären gibt, sollten Sie diese in einem separaten "Grundlagen" oder "Konzepte" Artikel (z.B., [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)) erklären. Für einen praktischen Nutzungsleitfaden mit Codebeispielen sollten Sie einen "Verwendung…" Artikel in Ihrer API-Dokumentation einschließen (z.B., [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Fügen Sie eine Liste von Leitfaden-Seiten unter dieser Startseite ein. Jedes DT sollte auf die Leitfaden-Seite verlinken. Dieser Abschnitt ist optional; wenn es nur einen einzigen "Verwendung"-Leitfaden gibt, zusammen mit ein paar anderen konzeptionellen Leitfäden, können Sie es bequemer finden, sie als Abschnitt am Ende des Abschnitts "Konzepte und Nutzung" zu verlinken. Dieser Abschnitt könnte hilfreicher sein, wenn es so viele Leitfäden gibt, dass der Text schwer zu überfliegen ist.

- Verwendung der ... API
  - : Einleitungsabsatz dieser Leitfaden-Seite
- Leitfaden 2
  - : Einleitungsabsatz dieser Leitfaden-Seite

## Schnittstellen

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) zu verwenden, entfernen Sie die Backticks und den Rückstrich in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie eine kurze Beschreibung der Schnittstelle und ihrer Funktion hier ein. Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch ein.

### Erweiterungen zu anderen Schnittstellen

Der _Name der Schnittstelle_ erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle#1, das von der von Ihnen aktuell dokumentierten API zu dieser API hinzugefügt wurde. Ein \*Begriff und eine Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle#2, das von der von Ihnen aktuell dokumentierten API zu dieser API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und noch mehr Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel für Fetch
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Stil-Leitfaden_.

- link1
- link2
- external_link (year)
