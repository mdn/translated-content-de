---
title: API-Eigenschaftsunterseite-Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Seiteneinleitung:**
>
> Die Einleitung am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty property"
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
>   - : Der Titelkopf, der oben auf der Seite angezeigt wird.
>     Formatieren Sie ihn als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay) Interfaces einen `title` von `VRDisplay: capabilities property`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies ermöglicht uns, Instanz- und statische Eigenschaften mit demselben Namen zu unterstützen.
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Eigenschaften ist entweder `web-api-instance-property` (für Instanz-Eigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` mit der Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am oberen Rand des Inhaltsabschnitts (unmittelbar unter der Seiteneinleitung).
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Anweisungen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn dem nicht so ist, können Sie den Makroaufruf entfernen.
>   Wenn dem so ist, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{AvailableInWorkers}}` — dies erzeugt eine **Verfügbar in Workern**-Notiz, die darauf hinweist, dass die Technologie im [Worker-Kontext](/de/docs/Web/API/Web_Workers_API) verfügbar ist.
>   Wenn sie nur im Fensterkontext verfügbar ist, können Sie den Makroaufruf entfernen.
>   Wenn sie aber auch oder nur im Worker-Kontext verfügbar ist, müssen Sie möglicherweise ein Parameter übergeben, der ihre Verfügbarkeit betrifft (siehe den [\\{{AvailableInWorkers}} Makro-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) für alle verfügbaren Werte), und Sie müssen möglicherweise auch einen Eintrag dafür auf der Seite [Web-APIs, die in Workern verfügbar sind](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — dies erzeugt die linke Referenzseitenleiste, die schnelle Referenzlinks zu der aktuellen Seite zeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API zeigt.
>   Um die korrekte Seitenleiste für Ihre API zu erzeugen, müssen Sie einen `GroupData` Eintrag in unserem GitHub-Repo hinzufügen und den Namen des Eintrags im Makroaufruf anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [API-Referenz-Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) Leitfaden, um zu erfahren, wie das geht.
>
> Geben Sie Status-Header-Makros nicht manuell ein. Weisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) hin, um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Sicherer Kontext**, **Verfügbar in Workern**, **Experimentelle**, **Veraltete** und **Nicht standardisierte** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit dem Benennen der Eigenschaft, dem Interface, zu dem sie gehört, und beschreiben Sie, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie können den größten Teil davon aus der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren. Geben Sie an, ob sie schreibgeschützt ist oder nicht.

## Wert

Fügen Sie eine Beschreibung des Werts der Eigenschaft hinzu, einschließlich des Datentyps und was er darstellt. Dies sollte in der Form sein: "A [name of the property type] representing ...". Beispielsweise:

> A string representing...

Beachten Sie, dass einige Eigenschaftsseiten in der Form "Returns a [name of the property type] representing..." geschrieben sind, was jedoch nicht die empfohlene Form ist.
Außerdem können einige WebIDL-erweiterte Attribute mit bestimmten Bedeutungen mit dem Typ assoziiert sein. Es gibt standardisierte Methoden, sie zu dokumentieren; konsultieren Sie [Informationen, die eine WebIDL-Datei enthält](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für mehr Informationen.

## Beispiele

Beachten Sie, dass wir die Mehrzahl "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur [Hinzufügung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Beispielsweise:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispielsweise:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle API beziehen. Für weitere Richtlinien, siehe den [Siehe auch-Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
