---
title: API-Eigenschaftsseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
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
>     Formatieren Sie es als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **short-title**
>   - : Der Name der Eigenschaft (wird in der Seitenleiste verwendet).
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug den Suffix `_static` haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies ermöglicht uns die Unterstützung von Instanz- und statischen Eigenschaften, die denselben Namen haben.
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Eigenschaften ist entweder `web-api-instance-property` (für Instanz-Eigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` mit dem Abfragestring für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Werkzeugkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standard** Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros basierend auf dem unten stehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicheres Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar ist.
>   Wenn sie es nicht ist, können Sie den Makroaufruf entfernen.
>   Wenn sie es ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — erzeugt eine **Verfügbar in Arbeitern** Notiz, die anzeigt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch im Arbeitserkontext oder nur im Arbeitserkontext verfügbar ist, müssen Sie möglicherweise einen Parameter hinzufügen, abhängig von seiner Verfügbarkeit (siehe [\\{{AvailableInWorkers}} Makro Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), außerdem müssen Sie möglicherweise einen Eintrag dafür auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — erzeugt die Referenz-Seitenleiste auf der linken Seite, die Schnellreferenz-Links enthält, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite im [WebVR-API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die richtige Seitenleiste für Ihre API zu erstellen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unser [API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen darüber, wie dies gemacht wird.
>
> Statusbanner-Makros sollten nicht manuell hinzugefügt werden. Lesen Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`NameOfTheProperty`** [schreibgeschützte] Eigenschaft der \{{domxref("NameOfTheParentInterface")}} Schnittstelle _\<liefern Sie eine kurze Zusammenfassung des Verhaltens\>_.

_Beginnen Sie mit dem Benennen der Eigenschaft (geben Sie an, ob sie schreibgeschützt ist oder nicht) und der Schnittstelle, zu der sie gehört, und beschreiben Sie dann, was sie tut._

_Dies sollte idealerweise ein oder zwei kurze Sätze umfassen._
_Falls Sie mehr als ein paar Absätze benötigen, sollte dies in einem "Beschreibung"-Abschnitt hinzugefügt werden, der vor dem "Beispiele"-Abschnitt platziert wird._

## Wert

Ein \{{domxref("SomeDataType")}}.

_Normalerweise nur der Datentyp und die erlaubten Werte für diesen Datentyp, falls relevant._
_Wenn die Eigenschaft unterschiedliches Setter- und Getter-Verhalten hat, sollten diese normalerweise in separaten Sätzen behandelt werden._

_In einigen Fällen möchten Sie vielleicht mehr darüber sagen, was der Datentyp darstellt._
_Das ist akzeptabel, aber es sollten keine Informationen aus dem "Beschreibung"-Abschnitt dupliziert werden (Informationen darüber, was der Wert bedeutet, sollten dort enthalten sein)._

_Beachten Sie, dass einige Eigenschaftsseiten in der Form "Gibt ein [Name of the property type] zurück, das..." geschrieben sind, aber dies ist nicht die empfohlene Form._
_Auch können einige WebIDL-Erweiterungsattribute mit spezifischen Bedeutungen mit dem Typ assoziiert werden. Es gibt standardisierte Methoden, sie zu dokumentieren; konsultieren Sie [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für mehr Informationen._

<!--
## Beschreibung

Zusätzliche Beschreibung, falls nötig.
-->

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Zum Beispiel, "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung nutzen Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der Fetch-API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu mehr Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (Jahr)
