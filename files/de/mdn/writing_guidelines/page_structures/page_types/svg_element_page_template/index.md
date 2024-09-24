---
title: SVG-Element-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten für das jeweilige Element entsprechend aktualisiert werden.
>
> ```md
> ---
> title: <NameDesElements>
> slug: Web/SVG/Element/NameDesElements
> page-type: svg-element
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: svg.elements.NameDesElements
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren als **<**_NameDesElements_**>**.
>     Zum Beispiel hat das Element "[g](/de/docs/Web/SVG/Element/g)" einen _Titel_ von `<g>`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert als `Web/SVG/Element/NameDesElements`.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Bezeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Status für Features hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameDesElements` mit dem Abfrage-String für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikation auszufüllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter den Seitenmetadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie** Banner, das zeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-standardisiert** Banner, das anzeigt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Anleitung aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — generiert ein **Sicherer Kontext** Banner, das anzeigt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Falls es nicht der Fall ist, können Sie den Makroaufruf entfernen.
>   Falls es der Fall ist, sollten Sie auch einen Eintrag auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{SVGRef}}` — generiert die linke Seitenleiste für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seitenmetadaten ab.
> - Denken Sie daran, das Makro `\{{MDNSidebar}}` beim Kopieren dieser Seite zu entfernen.
>
> Geben Sie Statusheader-Makros nicht manuell ein. Verweisen Sie auf den Abschnitt ["Wie man Status für Features hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese ganze erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SVGRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz – beginnen Sie damit, das Element zu benennen und zu sagen, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Verwendungskontext

`\{{svginfo}}`

Damit hier die korrekten Informationen erscheinen, füllen Sie einen Eintrag für das Element in das `\{{svginfo}}` Makro, falls es dort noch nicht vorhanden ist.

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Generische Attribute](/de/docs/Web/SVG/Attribute#generic_attributes)
- [Ereignisattribute](/de/docs/Web/SVG/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Einschließen von Aufzählungspunkten
- Liste aller spezifischen
- SVG-Attribute, die es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGDOMElement")}}` Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung nutzen Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, um mehr Informationen zu erhalten.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel der Fetch-Nutzung
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu nutzen, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element in Verbindung stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externen_link (Jahr)
