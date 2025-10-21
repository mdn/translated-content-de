---
title: SVG-Element-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: 39d45a2e71cee2c107a026a59ba0d9229a511592
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem spezifischen Element aktualisiert werden.
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
>   - : Titel, der am Anfang der Seite angezeigt wird.
>     Formatieren Sie als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das Element "[g](/de/docs/Web/SVG/Reference/Element/g)" einen _title_ von `<g>`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dieses wird formatiert wie `Web/SVG/Reference/Element/NameOfTheElement`.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` durch den Abfragestring für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (und ersetzt die `{{Compat}}` und `{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie Sie dies tun können](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `svgref` für alle SVG-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheinen am Anfang des Inhaltsabschnitts unmittelbar nach den Seiten-Metadaten.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, daher sollten Sie diese nicht hinzufügen oder entfernen:
>
> - `{{SeeCompatTable}}` — Dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einem Pref versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) eintragen.
> - `{{Deprecated_Header}}` — Dies erzeugt ein **Veraltet**-Banner, das angibt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `{{Non-standard_Header}}` — Dies erzeugt ein **Nicht-Standard**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden nach diesem Hinweis-Block gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz — beginnen Sie mit der Nennung des Elements und was es macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Nutzungskontext

`{{svginfo}}`

Damit hier die korrekten Informationen erscheinen, füllen Sie einen Eintrag für das Element im `{{svginfo}}`-Makro aus, falls es dort noch nicht enthalten ist.

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Kernattribute](/de/docs/Web/SVG/Reference/Attribute#core_attributes)
- [Ereignisattribute](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Fügen Sie eine Aufzählung
- aller SVG-Attribute ein,
- die es akzeptieren kann

## DOM-Schnittstelle

Dieses Element implementiert die `{{domxref("NameOfSVGElement")}}`-Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel, "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unsere Anleitung, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie zu Beispielen auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element zusammenhängen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
