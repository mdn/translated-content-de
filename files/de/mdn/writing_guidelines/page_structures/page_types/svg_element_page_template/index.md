---
title: SVG-Element-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um die "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Element aktualisiert werden.
>
> ```md
> ---
> title: <NameOfTheElement>
> slug: Web/SVG/Reference/Element/NameOfTheElement
> page-type: svg-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: svg.elements.NameOfTheElement
> sidebar: svgref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie es als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das "[g](/de/docs/Web/SVG/Reference/Element/g)" Element einen _title_ von `<g>`.
> - **slug**
>   - : Der Endteil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dieser wird wie `Web/SVG/Reference/Element/NameOfTheElement` formatiert.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` mit dem Abfragestring für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag wird Spezifikationsinformationen enthalten müssen.
>     Siehe unseren [Leitfaden, wie Sie dies tun](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `svgref` für alle SVG-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich unmittelbar nach den Seitenmetadaten.
> Diese Makros werden automatisch von Werkzeugen hinzugefügt, vermeiden Sie also das Hinzufügen oder Entfernen:
>
> - `\{{SeeCompatTable}}` — dies erzeugt einen **Dies ist eine experimentelle Technologie**-Banner, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Voreinstellungen in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt einen **Veraltet**-Banner, der anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt einen **Nicht-Standard**-Banner, der anzeigt, dass das Feature kein Teil irgendeiner Spezifikation ist.
>
> Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz — beginnen Sie damit, das Element zu benennen und zu sagen, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Nutzungskontext

`\{{svginfo}}`

Damit hier die korrekten Informationen erscheinen, fügen Sie einen Eintrag für das Element im `\{{svginfo}}` Makro ein, wenn es dort noch nicht enthalten ist.

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Allgemeine Attribute](/de/docs/Web/SVG/Reference/Attribute#generic_attributes)
- [Ereignis-Attribute](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Fügen Sie eine Auflistung ein
- von allen SVG-Attributen,
- die es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGElement")}}` Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf das aktuelle Element beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
- external_link (year)
