---
title: SVG-Element-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Note:** _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
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
>     Format als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das "[g](/de/docs/Web/SVG/Element/g)"-Element einen _title_ von `<g>`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/SVG/Element/NameOfTheElement` formatiert.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` durch die Abfragezeichenfolge für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter dem Seite-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — Dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, welches darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-Standard**-Banner, welches darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — Dies erzeugt ein **Sicherer Kontext**-Banner, das darauf hinweist, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn es das nicht ist, können Sie den Makroaufruf entfernen.
>   Wenn es das ist, sollten Sie auch einen Eintrag dafür auf der Seite [Features restricted to secure contexts](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{SVGRef}}` — Dies erzeugt die linke Seitenleiste mit Referenzen für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seiten-Metadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["How feature statuses are added or updated"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-Standard**-Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen_

{{SVGRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz — beginnen Sie damit, das Element zu benennen und zu sagen, was es macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Verwendungskontext

`\{{svginfo}}`

Damit hier die korrekten Informationen erscheinen, fügen Sie einen Eintrag für das Element im `\{{svginfo}}`-Makro hinzu, falls es dort noch nicht vorhanden ist.

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Attribute

### Globale Attribute

- [Generische Attribute](/de/docs/Web/SVG/Attribute#generic_attributes)
- [Ereignis-Attribute](/de/docs/Web/SVG/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Einschließen einer Aufzählung
- Liste aller
- SVG-Attribute, die es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGDOMElement")}}`-Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel macht. Beispielsweise sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie auf dieser Seite einige Beispiele und auf einer anderen Seite noch mehr Beispiele haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
