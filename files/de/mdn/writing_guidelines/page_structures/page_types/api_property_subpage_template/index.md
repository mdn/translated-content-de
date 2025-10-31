---
title: API-Property-Unterseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

> [!NOTE]
> _Entfernen Sie diese ganze erklärende Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiteneinstellungen:**
>
> Die Metadaten zu Beginn der Seite dienen zur Definition der "Seitenmetadaten".
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities)-Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **short-title**
>   - : Der Name der Eigenschaft (wird in der Seitenleiste verwendet).
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug ein `_static`-Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dadurch können wir Instanz- und statische Eigenschaften mit demselben Namen unterstützen.
>
> - **page-type**
>   - : Der `page-type`-Schlüssel für Web/API-Eigenschaften ist entweder `web-api-instance-property` (für Instanz-Eigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eine oder mehrere der folgenden Optionen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` durch den Abfrage-String für die Eigenschaft im [Browser-Compatibilität-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Abschnitte für Kompatibilität und Spezifikation auszufüllen (Ersatz der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API Spezifikationsinformationen enthalten muss. Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen oben im Inhaltsbereich (direkt unter den Seiteneinstellungen).
>
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag für sie auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [veraltet](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Empfehlungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn das nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt einen **Verfügbar in Workern**-Hinweis, der darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie auch im oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise einen Parameter übergeben, da sie verfügbar ist (siehe [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte). Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die linke Referenzseitenleiste mit schnellen Referenzlinks, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR-API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData`-Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags anstelle von _GroupDataName_ im Makroaufruf einfügen.
>   Siehe unseren [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)-Leitfaden für Informationen, wie dies gemacht wird.
>
> Status-Makro-Kopfzeilen sollten nicht manuell bereitgestellt werden. Die Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) bietet eine Anleitung dazu, wie Sie diese Status zur Seite hinzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese ganze erklärende Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`NameOfTheProperty`** [schreibgeschützte] Eigenschaft der \{{domxref("NameOfTheParentInterface")}}-Schnittstelle _\<geben Sie eine kurze Zusammenfassung des Verhaltens\>_.

_Beginnen Sie mit der Benennung der Eigenschaft (unter Angabe, ob sie schreibgeschützt ist) und der Schnittstelle, zu der sie gehört, und sagen Sie dann, was sie tut._

_Dies sollte idealerweise ein oder zwei kurze Sätze sein._
_Wenn Sie mehr als ein paar Absätze benötigen, sollten diese in einem "Beschreibung"-Abschnitt vor dem Abschnitt "Beispiele" hinzugefügt werden._

## Wert

Ein \{{domxref("SomeDataType")}}.

_Normalerweise nur der Datentyp und zulässige Werte für diesen Datentyp, falls relevant._
_Wenn die Eigenschaft unterschiedliches Setzer- und Getter-Verhalten aufweist, sollten diese normalerweise in separaten Sätzen behandelt werden._

_In einigen Fällen möchten Sie vielleicht mehr darüber sagen, was der Datentyp darstellt._
_Dies ist akzeptabel, sollte aber keine Informationen aus dem Abschnitt "Beschreibung" duplizieren (Sie sollten Informationen darüber, was der Wert bedeutet, dort einfügen)._

_Beachten Sie, dass einige Property-Seiten in der Form "Returns a [name of the property type] representing..." geschrieben sind, dies jedoch nicht die empfohlene Form ist. Außerdem können einige WebIDL-Erweiterungsattribute mit spezifischen Bedeutungen mit dem Typ verknüpft sein. Es gibt standardisierte Möglichkeiten, sie zu dokumentieren; konsultieren Sie [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für weitere Informationen._

<!--
## Beschreibung

Zusätzliche Beschreibung, falls erforderlich.
-->

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele zu dieser API siehe [die Seite zur fetch() Funktion](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Einschließen von Links zu Referenzseiten und Leitfäden, die mit der aktuellen API zusammenhängen. Für weitere Richtlinien siehe den [See also Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (year)
