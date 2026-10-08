---
title: Vorlage für eine Unterseite zu einer API-Eigenschaft
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte an die jeweilige Eigenschaft an.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty property"
> short-title: NameOfTheProperty
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Überschrift, die am Anfang der Seite angezeigt wird.
>     Verwenden Sie das Format „NameOfTheParentInterface: NameOfTheProperty property“.
>     Beispielsweise hat die Eigenschaft [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) des Interfaces [`VRDisplay`](/de/docs/Web/API/VRDisplay) den `title` `VRDisplay: capabilities property`.
> - **short-title**
>   - : Der Name der Eigenschaft (wird in der Seitenleiste verwendet).
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Er hat die Form `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug das Suffix `_static` erhalten, zum Beispiel: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. So können Instanz- und statische Eigenschaften mit demselben Namen unterstützt werden.
> - **page-type**
>   - : Der Schlüssel `page-type` für Web/API-Eigenschaften ist entweder `web-api-instance-property` (für Instanzeigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` durch den Abfrageschlüssel für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu Spezifikationen zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Möglicherweise müssen Sie zunächst einen Eintrag für die API-Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Der Eintrag für die API muss auch Informationen zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht selbst hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner mit dem Hinweis **Dies ist eine experimentelle Technologie**, das kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner mit dem Hinweis **Nicht standardisiert**, das kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Aktualisieren oder entfernen Sie die folgenden Makros entsprechend den nachstehenden Hinweisen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein Banner mit dem Hinweis **Sicherer Kontext**, das kennzeichnet, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Ist dies nicht der Fall, können Sie den Makroaufruf entfernen.
>   Ist dies der Fall, sollten Sie außerdem einen Eintrag auf der Seite [Auf sichere Kontexte beschränkte Features](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ergänzen.
> - `\{{AvailableInWorkers}}` — erzeugt einen Hinweis **In Workern verfügbar**, der angibt, dass die Technologie in einem [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Window-Kontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch oder ausschließlich im Worker-Kontext verfügbar ist, müssen Sie dem Makro je nach Verfügbarkeit möglicherweise einen Parameter übergeben (alle möglichen Werte finden Sie im [Quellcode des Makros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)). Möglicherweise müssen Sie außerdem einen Eintrag auf der Seite [In Workern verfügbare Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ergänzen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste mit Links zu verwandten Referenzseiten.
>   Beispielsweise haben alle Seiten zur [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie unserem GitHub-Repository einen `GroupData`-Eintrag hinzufügen und dessen Namen im Makroaufruf anstelle von _GroupDataName_ einsetzen.
>   Wie das geht, erfahren Sie in unserem Leitfaden zu [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> Fügen Sie Makros für Statusüberschriften nicht manuell hinzu. Informationen dazu, wie Sie diese Status zur Seite hinzufügen, finden Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Sicherer Kontext**, **In Workern verfügbar**, **Experimentell**, **Veraltet** und **Nicht standardisiert** finden Sie direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Die [schreibgeschützte] Eigenschaft **`NameOfTheProperty`** des Interfaces \{{domxref("NameOfTheParentInterface")}} _\<beschreiben Sie das Verhalten kurz und prägnant\>_.

_Nennen Sie zunächst die Eigenschaft (und geben Sie an, ob sie schreibgeschützt ist) sowie das Interface, zu dem sie gehört. Beschreiben Sie anschließend, was sie tut._

_Dies sollte idealerweise in ein oder zwei kurzen Sätzen geschehen._
_Wenn Sie mehr als ein paar Absätze benötigen, fügen Sie vor dem Abschnitt „Beispiele“ einen Abschnitt „Beschreibung“ hinzu._

## Wert

Ein \{{domxref("SomeDataType")}}.

_Üblicherweise genügt die Angabe des Datentyps und gegebenenfalls der zulässigen Werte für diesen Datentyp._
_Wenn sich das Verhalten von Setter und Getter unterscheidet, sollte dies normalerweise in getrennten Sätzen beschrieben werden._

_In manchen Fällen möchten Sie möglicherweise genauer erläutern, wofür der Datentyp steht._
_Das ist zulässig, sollte aber keine Informationen aus dem Abschnitt „Beschreibung“ wiederholen (erläutern Sie dort, was der Wert bedeutet)._

_Beachten Sie, dass manche Seiten zu Eigenschaften mit „Gibt einen [Namen des Eigenschaftstyps] zurück, der … darstellt“ beginnen; diese Formulierung wird jedoch nicht empfohlen.
Außerdem können bestimmte erweiterte WebIDL-Attribute mit festgelegter Bedeutung dem Typ zugeordnet sein. Für ihre Dokumentation gibt es standardisierte Vorgehensweisen; weitere Informationen finden Sie unter [In einer WebIDL-Datei enthaltene Informationen](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property)._

<!--
## Beschreibung

Zusätzliche Beschreibung, falls erforderlich.
-->

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Halten Sie die Überschrift kurz. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn diese Seite einige Beispiele enthält und weitere Beispiele auf einer anderen Seite stehen:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und anschließend eine letzte H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern setzen Sie die Links direkt unter die H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen API zusammenhängen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- link1
- link2
- external_link (Jahr)
