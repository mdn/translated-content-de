---
title: HTML-Attributseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

HTML-Attribute fallen in zwei Kategorien: **element-spezifische Attribute**, die nur für bestimmte Elemente gelten (z. B. das `accept`-Attribut bei `<input type="file">`), und **globale Attribute**, die für jedes HTML-Element verwendet werden können (z. B. `class`, `id`). Erstere sollten unter `HTML/Reference/Attributes` abgelegt werden, während letztere unter `HTML/Reference/Global_attributes` abgelegt werden sollten.

Beachten Sie, dass die meisten element-spezifischen Attribute keine eigenständigen Artikel benötigen, wenn die Attributliste in der Elementreferenz ausreicht, um ihr Verhalten zu beschreiben. Fügen Sie nur dann einen Artikel hinzu, wenn das Attribut genügend Nuancen hat, um eigene Beispiele zu verdienen, oder wenn es sich um ein globales Attribut handelt.

> [!NOTE] > _Löschen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Vordergrundinformationen:**
>
> Die Vordergrundinformationen oben auf der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten passend zum jeweiligen Attribut aktualisiert werden.
>
> ```md
> ---
> title: name-of-the-attribute
> slug: Web/HTML/Reference/Global_attributes/name-of-the-attribute
> page-type: html-attribute
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.global_attributes.name-of-the-attribute
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird.
>     Formatieren Sie als `name-of-the-attribute` (nur der Attributname selbst).
>     Zum Beispiel hat das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut einen _title_ von `class`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird wie `Web/HTML/Reference/Global_attributes/name-of-the-attribute` oder `Web/HTML/Reference/Attributes/name-of-the-attribute` formatiert, wobei der Attributname in _Kleinbuchstaben_ steht.
>     Zum Beispiel hat das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut einen _slug_ von `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Immer `html-attribute`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.global_attributes.name-of-the-attribute` durch den Abfragestring für das globale Attribut im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Für element-spezifische Attribute verwenden Sie das Format `html.elements.name-of-the-element.name-of-the-attribute`, wobei jede Abfragezeichenfolge in einer eigenen Zeile steht, der ein Bindestrich vorangestellt ist. Zum Beispiel:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (Ersetzung der `\{{Compat}}` und `\{{Specifications}}` Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Attribut in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unseren [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Behalten Sie es als `htmlsidebar` (alle Seiten unter `/web/html/` verwenden diese Seitenleiste).
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Vordergrundinformationen).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard**-Banner, das anzeigt, dass das Merkmal nicht Teil irgendeiner Spezifikation ist.
>
> Statuskopf-Makros nicht manuell bereitstellen. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Experimentelle**, **Veraltet** und **Nicht-standard** Banner werden unmittelbar nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> Beginnen Sie, indem Sie den Leser in das Attribut und dessen Verwendung einführen.
> Zum Beispiel: Das **`name-of-the-attribute`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) beschreibt oder manipuliert [fügen Sie eine Verwendungsbeschreibung ein].

## Ausprobieren

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dieser enthält den Abschnittstitel "Ausprobieren" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.
Wenn enthalten, folgen Sie ihm mit 1-2 kurzen Absätzen, die das implementierte Verhalten erklären und optional hervorheben, wie es mit JavaScript, CSS oder anderen Attributen interagiert. Halten Sie es kurz und vermeiden Sie die vollständige Dokumentation zu verdoppeln — verlinken Sie stattdessen, was nötig ist. Siehe die Seite des `class`-Attributs.

## Werte

Geben Sie eine Liste der möglichen Werte für das Attribut an, falls vorhanden (entfernen Sie, falls nicht zutreffend). Geben Sie den Standardwert an, falls es einen gibt, und eine kurze Beschreibung für jeden Wert.

- `"value1"`
  - : Beschreibung von Wert 1. Dies ist der Standardwert.
- `"value2"`
  - : Beschreibung von Wert 2.
- `"value3"`
  - : Beschreibung von Wert 3.

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsthemen, die bei der Verwendung dieses Attributs bestehen könnten, und wie man diesen begegnen kann. Entfernen Sie diesen Abschnitt, wenn es keine gibt.

## Beispiele

Zeigen Sie relevante Beispiele für dieses Attribut und wie man dieses Attribut in praktischen HTML-Kontexten verwendet.
Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel hervorhebt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.
Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Fall 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung des `for`-Attributs
>
> Beispiel des `for`-Attributs
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Fall 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter die H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieses Attributs, siehe [die Seite über das `for`-Attribut](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Attribut beziehen. Für weitere Richtlinien siehe die [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in den _Schreibstilrichtlinien_.

- link1
- link2
- external_link (Jahr)
