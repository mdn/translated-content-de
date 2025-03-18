---
title: SVG-Elementseitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

> **Note:** _Entfernen Sie diesen gesamten erläuternden Hinweis, bevor Sie die Veröffentlichung vornehmen_
>
> ---
>
> **Seitenfrontmatter:**
>
> Das Frontmatter oben auf der Seite definiert "Seitenmetadaten".
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: <NameOfTheElement>
> slug: Web/SVG/Element/NameOfTheElement
> page-type: svg-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: svg.elements.NameOfTheElement
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird.
>     Formatieren Sie es als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das "[g](/de/docs/Web/SVG/Reference/Element/g)"-Element einen _title_ von `<g>`.
> - **slug**
>   - : Der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dieser wird formatiert wie `Web/SVG/Element/NameOfTheElement`.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Statuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` durch die Abfragezeichenfolge für das Element im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für das Element in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden dazu, wie dies gemacht wird](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macronutzung oben auf der Seite**
>
> Eine Anzahl von Makroaufrufen erscheint oben im Inhaltsabschnitt (unmittelbar unterhalb der Seitenfrontmatter).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls es experimentell ist und die Technologie hinter einem Preference in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [entmutigt](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-standardisierte**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem unten stehenden Rat aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Falls nicht, können Sie den Makroaufruf entfernen.
>   Falls doch, sollten Sie auch einen Eintrag dafür auf der Seite [Features beschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{SVGRef}}` — Dies erzeugt die referenzierte Seitenleiste auf der linken Seite für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seitenmetadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie keine Statuskopfzeilen-Makros manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Statuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Statuse zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentelle**, **Veraltete** und **Nicht-standardisierte** Banner werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen_

{{SVGRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz - beginnen Sie mit der Benennung des Elements und erläutern Sie, was es macht.
Dies sollte idealerweise ein bis zwei kurze Sätze sein.

## Verwendungskontext

`\{{svginfo}}`

Damit die richtigen Informationen hier erscheinen, fügen Sie einen Eintrag für das Element im `\{{svginfo}}` Makro ein, falls dieser dort noch nicht vorhanden ist.

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Generische Attribute](/de/docs/Web/SVG/Reference/Attribute#generic_attributes)
- [Ereignisattribute](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Darstellungsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Einschließen von Aufzählungspunkten
- Liste aller
- SVG-Attribute, die es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGDOMElement")}}` Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), finden Sie hier.

> [!NOTE]
> Manchmal möchte man auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; setzen Sie die Links einfach direkt unter der H2-Überschrift "Beispiele". Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Element beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (Jahr)
