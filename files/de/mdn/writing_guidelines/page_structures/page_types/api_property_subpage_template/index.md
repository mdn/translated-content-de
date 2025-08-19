---
title: API Property Unterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung._
>
> ---
>
> **Seiteneinstellungen:**
>
> Die Meta-Daten am Seitenanfang werden verwendet, um "Seitenmetadaten" zu definieren.
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
>     Formatieren als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **short-title**
>   - : Der Name der Eigenschaft (wird in der Seitenleiste verwendet).
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies ermöglicht es uns, Instanz- und statische Eigenschaften zu unterstützen, die denselben Namen haben.
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API Eigenschaften ist entweder `web-api-instance-property` (für Instanzeigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionsstatuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` durch den Abfragestring für die Eigenschaft im [Browser-Compat-Datenrepo](https://github.com/mdn/browser-compat-data).
>     Die Toolkette verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser-Compat-Datenrepo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsabschnitt (unmittelbar unter den Seiten-Metadaten).
>
> Diese Makros werden automatisch von der Toolkette hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Schalter in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht Standard** Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Beratung aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es nicht so ist, können Sie den Makroaufruf entfernen.
>   Wenn es der Fall ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — Dies erzeugt einen **Verfügbar in Arbeitern** Hinweis, der angibt, dass die Technologie im [Arbeiterkontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn es nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn es auch im oder nur im Arbeiterkontext verfügbar ist, müssen Sie möglicherweise einen Parameter aufgrund seiner Verfügbarkeit übergeben (siehe [\\{{AvailableInWorkers}} Makroquellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und möglicherweise müssen Sie auch einen Eintrag dafür auf der Seite [Web-APIs, die in Arbeitern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linke Referenzseitenleiste, die schnelle Referenzlinks zeigt, die sich auf die aktuelle Seite beziehen.
>   Zum Beispiel hat jede Seite in der [WebVR-API](/de/docs/Web/API/WebVR_API) die gleiche Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die richtige Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden für Informationen, wie Sie dies machen.
>
> Stellen Sie Makroüberschriften für den Status nicht manuell bereit. Lesen Sie den Abschnitt ["Wie Funktionsstatuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Arbeitern**, **Experimentell**, **Veraltet** und **Nicht Standard** Banner sind direkt nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`NameOfTheProperty`** [schreibgeschützte] Eigenschaft der \{{domxref("NameOfTheParentInterface")}} Schnittstelle _\<bieten Sie eine prägnante Zusammenfassung des Verhaltens\>_.

_Beginnen Sie mit dem Benennen der Eigenschaft (angeben, ob schreibgeschützt oder nicht) und der Schnittstelle, zu der sie gehört, und beschreiben Sie dann, was sie tut._

_Dies sollte idealerweise ein oder zwei kurze Sätze sein._
_Wenn Sie mehr als ein paar Absätze benötigen, sollte dies in einem "Beschreibung"-Abschnitt vor dem "Beispiele"-Abschnitt hinzugefügt werden._

## Wert

Ein \{{domxref("SomeDataType" }}.

_Normalerweise nur der Datentyp und die zulässigen Werte für diesen Datentyp, falls relevant._
_Wenn die Eigenschaft unterschiedliches Setter- und Getter-Verhalten hat, sollten diese normalerweise in getrennten Sätzen behandelt werden._

_In einigen Fällen möchten Sie möglicherweise mehr darüber sagen, was der Datentyp darstellt._
_Dies ist akzeptabel, sollte aber keine Informationen aus dem "Beschreibung"-Abschnitt duplizieren (Sie sollten Informationen darüber, was der Wert bedeutet, dort einfügen)._

_Beachten Sie, dass einige Eigenschaftsseiten in der Form "Gibt ein [Name des Eigenschaftstyps] zurück, das ..." geschrieben sind, dies ist aber nicht die empfohlene Form.
Außerdem können einigen WebIDL-Erweiterten Attributen mit spezifischen Bedeutungen dem Typ zugeordnet werden. Es gibt standardisierte Möglichkeiten, sie zu dokumentieren; konsultieren Sie [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für weitere Informationen._

<!--
## Beschreibung

Zusätzliche Beschreibung, falls nötig.
-->

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend für das sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
