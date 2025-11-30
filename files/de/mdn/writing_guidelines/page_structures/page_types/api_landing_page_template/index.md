---
title: API Landing Page Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

> [!NOTE]
> _Entfernen Sie diesen erklärenden Hinweis vollständig, bevor Sie die Seite veröffentlichen_
>
> ---
>
> **Seitendaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
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
>     Zum Beispiel hat [WebXR Device](/de/docs/Web/API/WebXR_Device_API) den Titel _WebXR Device API_, [Fetch](/de/docs/Web/API/Fetch_API) hat den Titel _Fetch API_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`).
>     Dies wird formatiert wie `Web/API/NameOfTheAPI_API`.
>     Zum Beispiel hat die [WebXR Device API](/de/docs/Web/API/WebVR_API) den Slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Übersichtsseiten ist immer `web-api-overview`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint ganz oben im Inhaltsbereich (direkt unter den Seitendaten).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **This is an experimental technology**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Deprecated**-Banner, das angibt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Non-standard**-Banner, das angibt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem unten angegebenen Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Secure context**-Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Wenn dies nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features beschränkt auf sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Available In Workers**-Notiz, die angibt, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, um anzugeben, wie sie verfügbar ist (siehe [\\{{AvailableInWorkers}} Makros Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs verfügbar in Workern](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenz-Seitenleiste, die Schnellzugriffslinks im Zusammenhang mit der aktuellen Seite anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repository hinzufügen und den Namen des Eintrags innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen dazu, wie dies getan wird.
>
> Geben Sie Status-Header-Makros nicht manuell an. Beachten Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Secure context**, **Available in workers**, **Experimental**, **Deprecated**, und **Non-standard**-Banner werden direkt nach diesem Hinweiskasten gezeigt.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Übersichtsseiten haben optional einen Abschnitt zur Browser-Kompatibilität, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen der API zeigt. Wenn die Kompatibilität für die meisten Schnittstellen der API ähnlich ist, wird oft nur eine Kompatibilitätstabelle benötigt. Wenn die Kompatibilität der API kompliziert/unmöglich in wenigen Tabellen darzustellen ist, sollte dieser Abschnitt weggelassen werden.
>
> Um den Browser-Kompatibilitätsabschnitt auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren — siehe unseren [Leitfaden dazu, wie das gemacht wird](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Compat}}`-Makro, um Tabellen für die Browser-Kompatibilitätsinformationen hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Übersichtsseiten haben optional einen Abschnitt zu den Spezifikationen, der die relevanten Spezifikation(en) für jede Schnittstelle auflistet. Oft gibt es nur eine Spezifikation, die alle Schnittstellen der API abdeckt.
>
> Um den Abschnitt zu den Spezifikationen auszufüllen, müssen Sie möglicherweise zuerst Einträge für Schnittstellen im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren, um Spezifikationsdaten einzuschließen — siehe unseren [Leitfaden dazu, wie das gemacht wird](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das `\{{Specifications}}`-Makro, um Tabellen für die Hauptspezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diesen erklärenden Hinweis vollständig vor der Veröffentlichung zu entfernen_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Starten Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung der API und sagen Sie, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Konzepte und Nutzung

In diesem Abschnitt beschreiben Sie den Zweck und die Anwendungsfälle der API etwas detaillierter — warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte umfasst sie? Wie verwendet man sie aus einer übergeordneten Perspektive?

Geben Sie in diesem Abschnitt nicht zu viele Details an und fügen Sie keine Codebeispiele ein.
Wenn es viele Konzepte gibt, die in Bezug auf diese API erklärt werden müssen, sollten Sie sie in einem separaten Artikel "Grundlagen" oder "Konzepte" erklären (z. B. [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für eine praktische Nutzungsanleitung mit Codebeispielen sollten Sie einen Artikel "Verwendung von…" in Ihrer API-Dokumentation einfügen (z. B. [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Fügen Sie eine Liste der Leitfaden-Seiten unter dieser Übersichtsseite ein. Jeder DT sollte auf die Leitfaden-Seite verlinken. Dieser Abschnitt ist optional; wenn es nur einen einzelnen Leitfaden zum "Verwenden" gibt, zusammen mit ein paar anderen konzeptionellen Leitfäden, kann es bequemer sein, sie als Absatz am Ende des Abschnitts "Konzepte und Nutzung" zu verlinken. Dieser Abschnitt könnte hilfreicher sein, wenn es so viele Leitfäden gibt, dass der Text schwer zu überfliegen ist.

- Verwenden der ... API
  - : Einleitender Absatz dieser Leitfaden-Seite
- Leitfaden 2
  - : Einleitender Absatz dieser Leitfaden-Seite

## Schnittstellen

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktionen ein.
    Fügen Sie einen Begriff und eine Definition für jede Schnittstelle oder jedes Wörterbuch hinzu.

### Erweiterungen zu anderen Schnittstellen

Die _Name der Schnittstelle_ erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Interface#1, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird.
    Ein \*Begriff und eine Definition für jede Funktion. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung der Funktion von Interface#2, die durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird, etc.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden dazu, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Beispiele für diese API finden Sie auf der Seite über [fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API in Zusammenhang stehen. Für weitere Richtlinien siehe den [Abschnitt "Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden für den Schreibstil_.

- link1
- link2
- external_link (year)
