---
title: Vorlage für eine API-Übersichtsseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte an die jeweilige API an.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Er besteht aus dem Namen der API, gefolgt von „API“: _NameOfTheAPI_ **API**.
>     Beispielsweise lautet der Titel von [WebXR Device](/de/docs/Web/API/WebXR_Device_API) _WebXR Device API_ und der von [Fetch](/de/docs/Web/API/Fetch_API) _Fetch API_.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Er hat das Format `Web/API/NameOfTheAPI_API`.
>     Beispielsweise lautet der Slug der [WebXR Device API](/de/docs/Web/API/WebVR_API) `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : Der Schlüssel `page-type` hat für Web/API-Übersichtsseiten immer den Wert `web-api-overview`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird automatisch anhand der Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Makros am Seitenanfang**
>
> Direkt unter dem Front Matter stehen am Anfang des Inhaltsbereichs mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain eingefügt. Sie müssen sie weder hinzufügen noch entfernen:
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox nur über eine Einstellung aktiviert werden kann, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Aktualisieren oder entfernen Sie die folgenden Makros gemäß den nachstehenden Hinweisen:
>
> - `\{{SecureContext_Header}}` — erzeugt einen Hinweis **Sicherer Kontext**, der kennzeichnet, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Ist das nicht der Fall, können Sie den Makroaufruf entfernen.
>   Ist es der Fall, sollten Sie außerdem einen Eintrag dafür auf der Seite [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ergänzen.
> - `\{{AvailableInWorkers}}` — erzeugt einen Hinweis **In Workern verfügbar**, der kennzeichnet, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur in einem Window-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder ausschließlich in einem Worker-Kontext verfügbar ist, müssen Sie je nach Verfügbarkeit möglicherweise einen Parameter übergeben (alle verfügbaren Werte finden Sie im [Quellcode des Makros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)). Möglicherweise müssen Sie außerdem einen Eintrag dafür auf der Seite [In Workern verfügbare Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ergänzen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste mit Schnelllinks zu Inhalten, die mit der aktuellen Seite zusammenhängen.
>   Beispielsweise haben alle Seiten zur [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten zur API verweist.
>   Um die passende Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repository hinzufügen und dessen Namen im Makroaufruf anstelle von _GroupDataName_ einsetzen.
>   Weitere Informationen finden Sie in unserem [Leitfaden zu Seitenleisten für API-Referenzen](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> Fügen Sie Makros für Statushinweise nicht manuell ein. Wie Sie diese Statusangaben zur Seite hinzufügen, erfahren Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Sicherer Kontext**, **In Workern verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> ---
>
> **Browser-Kompatibilität**
>
> API-Übersichtsseiten können optional einen Abschnitt zur Browser-Kompatibilität enthalten, der Kompatibilitätstabellen für eine oder mehrere der wichtigsten Schnittstellen der API zeigt. Wenn die Kompatibilität bei den meisten Schnittstellen der API ähnlich ist, genügt oft eine Tabelle. Lässt sich die Kompatibilität innerhalb der API nur schwer oder gar nicht in wenigen Tabellen darstellen, lassen Sie diesen Abschnitt weg.
>
> Um den Abschnitt zur Browser-Kompatibilität auszufüllen, müssen Sie möglicherweise zuerst Einträge für die API-Schnittstellen in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Lesen Sie dazu unseren [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das Makro `\{{Compat}}`, um Tabellen mit Informationen zur Browser-Kompatibilität hinzuzufügen.
>
> ---
>
> **Spezifikationen**
>
> API-Übersichtsseiten können optional einen Abschnitt mit den relevanten Spezifikationen für die einzelnen Schnittstellen enthalten. Häufig gibt es nur eine Spezifikation, die alle Schnittstellen der API abdeckt.
>
> Um den Abschnitt mit den Spezifikationen auszufüllen, müssen Sie möglicherweise zuerst Einträge für die Schnittstellen im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren und Spezifikationsdaten ergänzen. Lesen Sie dazu unseren [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Verwenden Sie das Makro `\{{Specifications}}`, um Tabellen mit den wichtigsten Spezifikationen hinzuzufügen.
>
> ---
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz: Nennen Sie zuerst die API und beschreiben Sie, was sie tut. Im Idealfall genügen dafür ein oder zwei kurze Sätze.

## Konzepte und Verwendung

Beschreiben Sie in diesem Abschnitt den Zweck und die Anwendungsfälle der API etwas genauer: Warum wurde ein Bedarf dafür erkannt?
Welche Probleme löst sie? Welche Konzepte spielen dabei eine Rolle? Wie wird sie grundsätzlich verwendet?

Gehen Sie in diesem Abschnitt nicht zu sehr ins Detail und fügen Sie keine Codebeispiele ein.
Wenn zur API viele Konzepte erklärt werden müssen, behandeln Sie diese in einem separaten Artikel zu „Grundlagen“ oder „Konzepten“ (zum Beispiel [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)).
Für einen praxisorientierten Leitfaden mit Codebeispielen sollten Sie einen Artikel zur Verwendung in Ihre API-Dokumentation aufnehmen (zum Beispiel [Die WebVR API verwenden](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Leitfäden

Führen Sie die Leitfadenseiten auf, die dieser Übersichtsseite untergeordnet sind. Jeder Begriffseintrag sollte auf die jeweilige Leitfadenseite verlinken. Dieser Abschnitt ist optional. Wenn es nur einen Leitfaden zur Verwendung und einige weitere konzeptionelle Leitfäden gibt, kann es praktischer sein, sie am Ende des Abschnitts „Konzepte und Verwendung“ in einem Absatz zu verlinken. Bei vielen Leitfäden kann eine Liste dagegen übersichtlicher sein als Fließtext.

- Die … API verwenden
  - : Einleitender Absatz dieser Leitfadenseite
- Leitfaden 2
  - : Einleitender Absatz dieser Leitfadenseite

## Schnittstellen

_Um das [domxref-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) zu verwenden, entfernen Sie im Markdown die Backticks und den Backslash._

- `\{{domxref("NameOfTheInterface")}}`
  - : Fügen Sie hier eine kurze Beschreibung der Schnittstelle und ihrer Funktion ein.
    Fügen Sie für jede Schnittstelle oder jedes Dictionary einen Begriffseintrag mit Definition hinzu.

### Erweiterungen anderer Schnittstellen

Die Schnittstelle _name of interface_ erweitert die folgenden APIs um die aufgeführten Features.

#### Schnittstelle 1

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle 1, das durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird.
    Ein Begriffseintrag mit Definition für jedes Feature. Wenn diese API keine anderen Schnittstellen erweitert, können Sie diese Abschnitte löschen.

#### Schnittstelle 2

- `\{{domxref("addition1")}}`
  - : Beschreibung des Features von Schnittstelle 2, das durch die API, die Sie gerade dokumentieren, zu dieser API hinzugefügt wird usw.

## Beispiele

Beachten Sie, dass wir „Beispiele“ im Plural verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel benötigt eine H3-Überschrift, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Halten Sie die Überschrift kurz. Für eine längere Beschreibung nutzen Sie den Absatz darunter.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Sie haben einige Beispiele auf dieser Seite und weitere auf einer anderen Seite:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu. Ergänzen Sie anschließend eine letzte H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Sie haben _nur_ auf einer anderen Seite Beispiele und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern platzieren Sie die Links direkt unter der H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- link1
- link2
- external_link (Jahr)
