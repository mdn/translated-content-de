---
title: Vorlage für die Startseite der API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Schnittstelle aktualisiert werden.
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
>   - : Der Überschriftstitel wird oben auf der Seite angezeigt.
>     Dies ist der Name der API, gefolgt vom Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat die [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert wie `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel der [WebXR Device API](/de/docs/Web/API/WebVR_API)'s slug ist `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es sich um eine experimentelle Technologie handelt und sie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) hinzufügen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt das linke Referenzseitenleiste, das schnelle Referenzlinks zum aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Seitenleiste für Ihre API zu erstellen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags in den Makroaufruf an Stelle von _GroupDataName_ einfügen.
>   Siehe unser [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)-Leitfaden für Informationen dazu, wie Sie dies tun können.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statusheader-Makros manuell ein. Beziehen Sie sich auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zu der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht-standardisiert**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Startseiten haben optional einen Bereich zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität über die API hinweg kompliziert/unmöglich ist, in wenigen Tabellen zusammenzufassen, sollte dieser Abschnitt weggelassen werden.
>
> Um den Bereich zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Fügen Sie das `\{{Compat("path.to.feature.Interface")}}`-Makro für jede Schnittstelle hinzu, für die Kompatibilitätsinformationen erforderlich sind, und ersetzen Sie das "path.to.feature.Interface"-Argument durch den Pfad zur gewünschten Schnittstelle in den Browser-Kompatibilitätsdaten.
>
> ---
>
> **Spezifikationen**
>
> API-Startseiten haben optional einen Spezifikationsabschnitt, der die relevanten Spezifikationen für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Spezifikationsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten aufzunehmen — siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{specifications("path.to.feature.Interface")}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck und die Anwendungsfälle der API etwas detaillierter — warum wurde ein Bedarf dafür erkannt? Welche Probleme löst sie? Welche Konzepte beinhaltet sie? Wie verwenden Sie sie aus einer hohen Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein. Wenn es viele Konzepte gibt, die zu dieser API erklärt werden müssen, sollten Sie sie in einem separaten Artikel "Grundlagen" oder "Konzepte" erläutern (z. B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)). Für eine praktische Anleitung mit Codebeispielen sollten Sie einen Artikel "Verwendung von…" in Ihre API-Dokumentation aufnehmen (z. B. [Verwendung der WebVR-API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

Um die Auffindbarkeit von Inhalten und die {{Glossary("SEO")}} zu verbessern, beachten Sie bitte die folgenden Tipps:

## Schnittstellen

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu. Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Verzeichnis hinzu.

### Erweiterungen zu anderen Schnittstellen

Das _name of interface_ erweitert die folgenden APIs und fügt die aufgeführten Features hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle#1, das von der API, die Sie aktuell dokumentieren, zu dieser API hinzugefügt wird. Ein \*Begriff und eine Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle#2, das von der API, die Sie aktuell dokumentieren, zu dieser API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie [Codebeispiele hinzugefügt werden](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
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

Einschließlich Links zu Referenzseiten und Anleitungen, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch-Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
