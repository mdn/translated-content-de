---
title: SVG-Element-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

> [!NOTE]
> _Entfernen Sie diese ganze erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seitendaten:**
>
> Der Vordergrund der Seite definiert die "Seiten-Metadaten".
> Die Werte sollten für das jeweilige Element entsprechend aktualisiert werden.
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
>   - : Die Hauptüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das Element "[g](/de/docs/Web/SVG/Reference/Element/g)" einen _title_ von `<g>`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/SVG/Reference/Element/NameOfTheElement`.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` mit dem Abfragestring für das Element im [Daten-Repo zur Browser-Kompatibilität](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Daten-Repo zur Browser-Kompatibilität](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und dass der Eintrag Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `svgref` für alle SVG-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenbeginn**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs direkt nach dem Seitenvordergrund.
> Diese Makros werden automatisch von der Toolchain hinzugefügt. Vermeiden Sie daher, diese hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltetes**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-Standard**-Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) für Informationen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-Standard** Banner werden nach diesem Notizblock gezeigt.
>
> _Denken Sie daran, diese ganze erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz – nennen Sie zuerst das Element und sagen Sie, was es macht. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Verwendungskontext

`\{{svginfo}}`

Damit die richtigen Informationen hier erscheinen, füllen Sie einen Eintrag für das Element im `\{{svginfo}}`-Makro aus, falls es dort noch nicht vorhanden ist.

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Kernattribute](/de/docs/Web/SVG/Reference/Attribute#core_attributes)
- [Ereignis-Attribute](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Fügen Sie eine Aufzählung
- aller spezifischen
- SVG-Attribute hinzu, die es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGElement")}}` Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element zusammenhängen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
