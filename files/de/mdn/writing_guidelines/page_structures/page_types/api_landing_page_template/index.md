---
title: API-Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Note:** _Entfernen Sie diese gesamte Erklärung, bevor Sie die Seite veröffentlichen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren. Die Werte sollten entsprechend für die jeweilige Schnittstelle aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Dies ist der Name der API gefolgt von dem Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat die [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird im Format `Web/API/NameOfTheAPI_API` formatiert.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der Wert `page-type` für Web/API-Landingpages ist immer `web-api-overview`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zur Aktualisierung von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen wird im Inhaltsbereich direkt unter den Metadaten automatisch hinzugefügt (keine Notwendigkeit sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert einen **Dies ist eine experimentelle Technologie**-Banner, der angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn Sie experimentell ist und die Technologie in Firefox hinter einer Präferenz verborgen ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert einen **Veraltet**-Banner, der angibt, dass die Nutzung dieser Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert einen **Nicht-Standard**-Banner, der angibt, dass die Funktionalität kein Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den unten stehenden Hinweisen aktualisieren oder entfernen:
>
> - `\{{SecureContext_Header}}` — generiert einen **Sicherer Kontext**-Banner, der anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — generiert einen **Verfügbar in Workern**-Hinweis, der darauf hinweist, dass die Technologie im [Arbeitskontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie ebenfalls oder nur im Arbeitskontext verfügbar ist, benötigen Sie möglicherweise auch eine Parameterübergabe für den Makroaufruf (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Eventuell müssen Sie auch einen Eintrag in den [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#supported_web_apis) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — generiert die linke Referenzseitenleiste, die Schnellzugriffslinks im Zusammenhang mit der aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten innerhalb der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unser GitHub-Repository hinzufügen und den entsprechenden Namen im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Sehen Sie sich den [Leitfaden zu API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für weitere Informationen an.
> - Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Seite kopieren.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Siehe den Abschnitt ["Anleitung zur Aktualisierung von Funktionsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um die Status zu einer Seite hinzuzufügen.
>
> Beispiele für die Banner **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht-Standard** finden Sie direkt nach diesem Erklärungsblock.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Landingpages haben optional einen Bereich zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen der API ähnlich ist, reicht oft nur eine Tabelle. Wenn die Kompatibilität innerhalb der API komplex/schwierig in wenigen Tabellen darstellbar ist, sollte dieser Abschnitt weggelassen werden.
>
> Um den Bereich zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zunächst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — lesen Sie unseren [Leitfaden dazu, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}` Makro, um Tabellen mit den Informationen zur Browser-Kompatibilität hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Landingpages haben optional einen Abschnitt zu den Spezifikationen, der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen der API abdeckt.
>
> Um den Spezifikationsbereich auszufüllen, müssen Sie möglicherweise zunächst Einträge für Schnittstellen in der [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten hinzuzufügen — lesen Sie unseren [Leitfaden dazu, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}` Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte Erklärungsnotiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem Einleitungsabsatz — starten Sie mit der Nennung der API und beschreiben Sie, was sie tut. Dies sollte idealerweise ein bis zwei kurze Sätze umfassen.

## Konzepte und Nutzung

Beschreiben Sie in diesem Abschnitt den Zweck der API und die Nutzungsszenarien etwas detaillierter — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst die API? Welche Konzepte beinhaltet sie? Wie verwendet man sie aus einer übergeordneten Perspektive?

Gehen Sie in diesem Abschnitt nicht in große Details und fügt keine Codebeispiele ein.
Wenn es viele Konzepte zu erklären gibt, die mit dieser API zusammenhängen, sollten Sie sie in einem separaten Artikel "Grundlagen" oder "Konzepte" erläutern (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für eine praktische Anleitung mit Codebeispielen sollten Sie einen "Verwendung…" Artikel in Ihre API-Dokumentation aufnehmen (z.B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und {{Glossary("SEO", "SEO")}} zu verbessern, beachten Sie die folgenden Tipps:

## Schnittstellen

_Zum Verwenden des [domxref Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references), entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie eine kurze Beschreibung der Schnittstelle und ihrer Funktionalität hier ein.
    Geben Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch an.

### Erweiterungen anderer Schnittstellen

Die _Name of interface_ erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion der Schnittstelle#1, die durch die API, die Sie dokumentieren, zu dieser API hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion der Schnittstelle#2, die durch die API, die Sie dokumentieren, zu dieser API hinzugefügt wird, etc.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift mit dem Namen des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung nutzen Sie den Absatz unter der Überschrift.

Sehen Sie unseren Leitfaden, wie [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzugefügt werden können, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Sie haben einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter denen Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel zur Nutzung von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie nur die Links direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Browser-Kompatibilität

`\{{Compat}}`

_Zum Verwenden dieses Makros, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die in Bezug zur aktuellen API stehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im Schreibstil-Leitfaden.

- Link1
- Link2
- Externer_Link (Jahr)
