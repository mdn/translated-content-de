---
title: API-Startseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten oben auf der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird.
>     Dies ist der Name der API gefolgt von dem Text "API": _NameOfTheAPI_ **API**.
>     Zum Beispiel hat die [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, die [Fetch](/de/docs/Web/API/Fetch_API) den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird im Format `Web/API/NameOfTheAPI_API` formatiert.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Wert für Web/API-Startseiten ist immer `web-api-overview`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am oberen Rand der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht standardisiert**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachstehenden Empfehlungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies generiert ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Wenn dem nicht so ist, können Sie den Makroaufruf entfernen.
>   Wenn doch, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies generiert eine **In Workern verfügbar**-Anmerkung, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im Worker-Kontext verfügbar oder nur dort verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund ihrer Verfügbarkeit übergeben (sehen Sie sich den [Quellcode der \\{{AvailableInWorkers}} Makros](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte an), möglicherweise müssen Sie auch einen Eintrag dafür auf der Seite [Web-APIs in Workern verfügbar](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies generiert die Referenz-Sidebar auf der linken Seite, die schnelle Referenzlinks zeigt, die mit der aktuellen Seite zusammenhängen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Sidebar, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Sidebar für Ihre API zu generieren, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Lesen Sie unseren [Leitfaden zur API-Referenz-Sidebars](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen darüber, wie Sie dies tun können.
>
> Geben Sie Status-Headers-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Startseiten haben optional einen Bereich für Browser-Kompatibilität, der Kompatibilitätstabellen für eines oder mehrere der wichtigsten Interfaces in der API zeigt. Wenn die Kompatibilität für die meisten Interfaces in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität in der gesamten API kompliziert oder unmöglich in wenigen Tabellen zu erfassen ist, sollte dieser Abschnitt weggelassen werden.
>
> Um den Bereich der Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Interfaces in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}`-Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Startseiten haben optional einen Bereich für Spezifikationen, der die relevanten Spezifikation(en) für jedes Interface auflistet. Oft gibt es nur eine Spezifikation, die alle Interfaces in der API abdeckt.
>
> Um den Bereich der Spezifikationen auszufüllen, müssen Sie möglicherweise zuerst Einträge für Interfaces im [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz - beginnen Sie mit der Benennung der API und was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

Beschreiben Sie in diesem Abschnitt den Zweck der API und Anwendungsfälle etwas detaillierter — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte beinhaltet sie? Wie verwenden Sie sie aus einer höheren Perspektive?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein.
Wenn es viele Konzepte rund um diese API zu erklären gibt, sollten Sie diese in einem separaten "Grundlagen" oder "Konzepte"-Artikel erklären (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für eine praxisnahe Anleitungsseite mit Codebeispielen sollten Sie in Ihrer API-Dokumentation einen Artikel „Nutzung von...“ einschließen (z.B. [Nutzung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Fügen Sie eine Liste mit Leitfaden-Seiten unterhalb dieser Einstiegsseite ein. Jeder DT sollte mit der Leitfaden-Seite verlinken. Dieser Abschnitt ist optional; wenn es nur einen einzigen „Nutzung von“-Leitfaden zusammen mit einigen anderen konzeptionellen Leitfäden gibt, könnten Sie es bequemer finden, stattdessen am Ende des Abschnitts "Konzepte und Nutzung" darauf als Absatz zu verweisen. Dieser Abschnitt könnte hilfreicher sein, wenn es so viele Leitfäden gibt, dass Fließtext schwer zu überblicken wird.

- Nutzung der ... API
  - : Einleitungsabsatz dieser Leitfadenseite
- Leitfaden 2
  - : Einleitungsabsatz dieser Leitfadenseite

## Interfaces

_Zum Verwenden des [domxref Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages), entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung des Interface hinzu und was es macht.
    Ein Begriff und Definition für jedes Interface oder Wörterbuch.

### Erweiterungen anderer Interfaces

Das _Name des Interface_ erweitert die folgenden APIs, indem es die aufgeführten Funktionen hinzufügt.

#### Interface 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Interface#1, die zu dieser API durch die API, die Sie gerade dokumentieren, hinzugefügt wird.
    Ein Begriff und Definition für jede Funktion. Wenn diese API keine anderen Interface erweitert, können Sie diese Abschnitte löschen.

#### Interface 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Interface#2, die zu dieser API durch die API, die Sie gerade dokumentieren, hinzugefügt wird etc.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn sich einige Beispiele auf dieser Seite befinden und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele" hinzu, unter der Sie auf die Beispiele auf anderen Seiten verlinken. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (Jahr)
