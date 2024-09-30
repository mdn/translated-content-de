---
title: SVG-Element-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem jeweiligen Element aktualisiert werden.
>
> ```md
> ---
> title: <NameOfTheElement>
> slug: Web/SVG/Element/NameOfTheElement
> page-type: svg-element
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: svg.elements.NameOfTheElement
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren als **<**_NameOfTheElement_**>**.
>     Zum Beispiel hat das "[g](/de/docs/Web/SVG/Element/g)"-Element einen _title_ von `<g>`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/SVG/Element/NameOfTheElement`.
> - **page-type**
>   - : Immer `svg-element`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `svg.elements.NameOfTheElement` mit dem Abfragezeichenfolgenwert für das Element im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Werkzeugkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Element in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies tut](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Diese ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie in Firefox hinter einem Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltetes** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardisiertes** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten angegebenen Ratschlägen aktualisieren oder löschen:
>
> - `\{{SecureContext_Header}}` — erzeugt ein **Sicherer Kontext** Banner, das angibt, dass die Technologie nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar ist.
>   Wenn nicht, können Sie den Makroaufruf entfernen.
>   Wenn ja, sollten Sie auch einen Eintrag dafür auf der Seite [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) ausfüllen.
> - `\{{SVGRef}}` — erzeugt die linke Referenz-Seitenleiste für das Element.
>   Der Inhalt der Seitenleiste hängt von den Tags in den Seiten-Metadaten ab.
> - Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie Statusheader-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentelle**, **Veraltete** und **Nicht-standardisierte** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SVGRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einführenden Absatz — beginnen Sie, indem Sie das Element benennen und sagen, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Verwendungskontext

`\{{svginfo}}`

Um hier die richtigen Informationen anzuzeigen, füllen Sie einen Eintrag für das Element in das `\{{svginfo}}` Makro ein, falls es noch nicht dort ist.

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Attribute

### Globale Attribute

- [Generische Attribute](/de/docs/Web/SVG/Attribute#generic_attributes)
- [Ereignisattribute](/de/docs/Web/SVG/Attribute#event_attributes)
- [Präsentationsattribute](/de/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Spezifische Attribute

- Enthalten Sie eine Aufzählungsliste
- aller SVG-Attribute, die
- es annehmen kann

## DOM-Schnittstelle

Dieses Element implementiert die `\{{domxref("NameOfSVGDOMElement")}}` Schnittstelle.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Hinzufügung von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter die H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Element zusammenhängen. Für weitere Richtlinien siehe den [Siehe auch-Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinien-Leitfaden_.

- link1
- link2
- external_link (Jahr)
