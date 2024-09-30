---
title: API-Eigenschaftsunterseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty property"
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren als "NameOfTheParentInterface: NameOfTheProperty property".
>     Zum Beispiel hat die [`capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle einen `title` von `VRDisplay: capabilities property`.
> - **slug**
>
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Wenn die Eigenschaft statisch ist, muss der Slug ein `_static` Suffix haben, wie: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Dies ermöglicht es uns, Instanz- und statische Eigenschaften mit demselben Namen zu unterstützen.
>
> - **page-type**
>   - : Der `page-type` Schlüssel für Web/API-Eigenschaften ist entweder `web-api-instance-property` (für Instanzeigenschaften) oder `web-api-static-property` (für statische Eigenschaften).
> - **status**
>   - : Kennzeichen, die den Status dieses Merkmals beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Merkmal gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Merkmalsstatus"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `path.to.feature.NameOfTheProperty` mit der Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um den Abschnitt "Kompatibilität" und "Spezifikation" auszufüllen (Ersatz der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die API-Eigenschaft in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag für die API muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen oben im Inhaltsbereich (sofort unter dem Frontmatter der Seite).
> Diese Makros werden vom Toolchain automatisch hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [abgelehnt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-Standard** Banner, das anzeigt, dass das Merkmal nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext** Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Falls ja, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{APIRef("GroupDataName")}}` — Dies erzeugt die linke Referenzseitenleiste, die Schnellzugriff-Links im Zusammenhang mit der aktuellen Seite anzeigt.
>   Zum Beispiel hat jede Seite in der [WebVR API](/de/docs/Web/API/WebVR_API) dieselbe Seitenleiste, die auf die anderen Seiten in der API verweist.
>   Um die richtige Seitenleiste für Ihre API zu generieren, müssen Sie einen `GroupData` Eintrag zu unserem GitHub-Repo hinzufügen und den Eintragsnamen innerhalb des Makroaufrufs anstelle von _GroupDataName_ einfügen.
>   Siehe unseren [Leitfaden für API-Referenzseitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) für Informationen dazu. Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie man Merkmalsstatus hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Statuse der Seite hinzuzufügen.
>
> Beispiele für die **Sicherer Kontext**, **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz – beginnen Sie mit dem Nennen der Eigenschaft, sagen Sie, zu welchem Interface sie gehört, und was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.
Sie könnten den Großteil davon aus der Zusammenfassung der Eigenschaft auf der entsprechenden API-Referenzseite kopieren. Einschließlich, ob sie schreibgeschützt ist oder nicht.

## Wert

Geben Sie eine Beschreibung des Wertes der Eigenschaft an, einschließlich des Datentyps und was sie darstellt. Dies sollte in der Form sein: "Ein [Name des Eigenschaftstyps], der ... darstellt". Zum Beispiel:

> Ein String, der ...

Beachten Sie, dass einige Eigenschaftsseiten in der Form "Gibt ein [Name des Eigenschaftstyps] zurück, der ..." geschrieben sind, dies ist jedoch nicht die empfohlene Form.
Auch können einige WebIDL-Erweiterungsattribute mit spezifischen Bedeutungen mit dem Typ verknüpft sein. Es gibt standardmäßige Möglichkeiten, sie zu dokumentieren; konsultieren Sie [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) für weitere Informationen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie das Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie das Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden im Zusammenhang mit der aktuellen API hinzu. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
