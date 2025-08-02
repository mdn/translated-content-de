---
title: API Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: a6336fbe2473462c607cbb759dd8655cc5f78553
---

> [!NOTE]
> _Entfernen Sie diese ganze erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Vordergrund:**
>
> Der Vordergrund am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Schnittstelle aktualisiert werden.
>
> ```md
> ---
> title: NameDerAPI API
> slug: Web/API/NameDerAPI_API
> page-type: web-api-overview
> status:
>   - deprecated
>   - experimental
>   - non-standard
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die am oberen Rand der Seite angezeigt wird.
>     Dies ist der Name der API, gefolgt von dem Text "API": _NameDerAPI_ **API**.
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert wie `Web/API/NameDerAPI_API`.
>     Zum Beispiel ist der Slug der [WebXR Device API](/de/docs/Web/API/WebVR_API) `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Landingpages ist immer `web-api-overview`.
> - **status**
>   - : Flaggen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Punkte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seitenvordergrund).
>
> Diese Makros werden automatisch durch die Werkzeugkette hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie einen Eintrag dafür in der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardmäßig**-Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn dies der Fall ist, sollten Sie auch dafür einen Eintrag in der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies erzeugt eine **Verfügbar in Arbeitern**-Notiz, die darauf hinweist, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise ein Parameter dafür übergeben, je nach Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Sie müssen möglicherweise auch einen Eintrag dafür in der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linke Referenz-Seitenleiste, die Schnellreferenz-Links anzeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags in den Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen darüber, wie man dies tut.
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht standardmäßig**-Banner sind direkt nach diesem Notizblock dargestellt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Landingpages haben optional einen Bereich der Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen in der API anzeigt. Wenn die Kompatibilität für die meisten Schnittstellen in der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität in der API kompliziert/unmöglich ist, in wenigen Tabellen zu erfassen, sollte dieser Abschnitt weggelassen werden.
>
> Um den Bereich der Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden, wie Sie dies tun können](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}`-Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Landingpages haben optional einen Bereich mit Spezifikationen, der die relevanten Spezifikation(en) für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen in der API abdeckt.
>
> Um den Bereich der Spezifikationen auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen in dem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden, wie Sie dies tun können](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diese ganze erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Benennung der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck der API und Nutzungsszenarien im Detail — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte sind damit verbunden? Wie benutzt man sie aus einer übergeordneten Perspektive?

Gehen Sie in diesem Abschnitt nicht ins Detail und fügen Sie keine Codebeispiele ein.
Wenn es viele Konzepte zu erklären gibt, sollten Sie diese in einem separaten "Grundlagen"- oder "Konzepte"-Artikel erklären (z.B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für eine praktische Anleitung zur Nutzung mit Codebeispielen sollten Sie einen "Nutzung..." Artikel in Ihre API-Dokumentation einfügen (z.B. [Die WebVR API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Fügen Sie eine Liste der Leitfadenseiten unter dieser Landingpage hinzu. Jeder DT sollte auf die Leitfadenseite verlinken. Dieser Abschnitt ist optional; wenn es nur einen einzigen "Verwendung"-Leitfaden zusammen mit ein paar anderen konzeptionellen Leitfäden gibt, finden Sie es vielleicht bequemer, am Ende des Abschnitts "Konzepte und Nutzung" in einem Absatz auf sie zu verweisen. Dieser Abschnitt kann hilfreicher sein, wenn es so viele Leitfäden gibt, dass der Prosa schwierig zu überblicken wird.

- Die ... API verwenden
  - : Einleitungsabsatz zu dieser Leitfadenseite
- Leitfaden 2
  - : Einleitungsabsatz zu dieser Leitfadenseite

## Schnittstellen

_Um das [domxref Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameDerSchnittstelle")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion hinzu.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch hinzu.

### Erweiterungen zu anderen Schnittstellen

Der _Name der Schnittstelle_ erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#1, die durch die API, die Sie gerade dokumentieren, zu jener API hinzugefügt wird.
    Ein \*Begriff und Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Schnittstelle#2, die durch die API, die Sie gerade dokumentieren, zu jener API hinzugefügt wird, usw.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte präzise sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Beispiele für Code](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Stilhandbuch für das Schreiben_.

- link1
- link2
- externer_link (Jahr)
