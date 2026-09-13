---
title: HTML-Attribut-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

HTML-Attribute fallen in zwei Kategorien: **Element-spezifische Attribute**, die nur für bestimmte Elemente gelten (z.B. das `accept` Attribut auf `<input type="file">`), und **globale Attribute**, die für jedes HTML-Element verwendet werden können (z.B. `class`, `id`). Erstere sollten unter `HTML/Reference/Attributes` eingeordnet werden, während letztere unter `HTML/Reference/Global_attributes` platziert werden sollten.

Beachten Sie, dass die meisten element-spezifischen Attribute keine eigenen Artikel benötigen, wenn die Attributliste in der Elementreferenz ausreicht, um ihr Verhalten zu beschreiben. Fügen Sie einen Artikel nur hinzu, wenn das Attribut genügend Nuancen aufweist, um eigene Beispiele zu verdienen, oder wenn es sich um ein globales Attribut handelt.

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren. Die Werte sollten entsprechend für das jeweilige Attribut aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie als `name-of-the-attribute` (nur der Attributname selbst). Zum Beispiel hat das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut einen _Titel_ von `class`.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert wie `Web/HTML/Reference/Global_attributes/name-of-the-attribute` oder `Web/HTML/Reference/Attributes/name-of-the-attribute`, wobei der Attributname in _Kleinschreibung_ ist. Zum Beispiel hat das [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut einen _Slug_ von `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Immer `html-attribute`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `html.global_attributes.name-of-the-attribute` mit der Abfragezeichenfolge für das globale Attribut im [Browser compat data repo](https://github.com/mdn/browser-compat-data). Für element-spezifische Attribute verwenden Sie das Format `html.elements.name-of-the-element.name-of-the-attribute`, wobei jede Abfragezeichenfolge in einer eigenen Zeile steht, vorangestellt von einem Bindestrich. Zum Beispiel:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros). Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Attribut in unserem [Browser compat data repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten. Siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Behalten Sie `htmlsidebar` (alle Seiten unter `/web/html/` verwenden diese Seitenleiste). Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Metadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn sie experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-Standard** Banner, das darauf hinweist, dass die Funktion nicht Teil irgendeiner Spezifikation ist.
>
> Geben Sie keine Statusheader-Makros manuell ein. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-Standard** Banner werden direkt nach diesem Anmerkungsblock angezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_
>
> {{SeeCompatTable}}{{Non-standard_Header}}
>
> Beginnen Sie damit, den Leser mit dem Attribut und seiner Verwendung bekannt zu machen. Zum Beispiel: Das **`name-of-the-attribute`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) beschreibt oder manipuliert [Beschreibung der Verwendung einfügen].

## Ausprobieren

Dieser Abschnitt wird durch das `InteractiveExample` Makro generiert. Dies umfasst den Titel "Ausprobieren" und den Code-Editor. Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen. Wenn enthalten, folgen Sie ihm mit 1-2 kurzen Absätzen, die das implementierte Verhalten erklären und optional auf eine Interaktion mit JavaScript, CSS oder anderen Attributen hinweisen. Halten Sie es prägnant und vermeiden Sie die Duplizierung vollständiger Dokumentationen — verlinken Sie nach Bedarf aus. Sehen Sie sich erneut die Seite des `class` Attributs an.

## Werte

Stellen Sie eine Liste möglicher Werte für das Attribut bereit, falls vorhanden (entfernen Sie diese, wenn sie nicht zutrifft). Geben Sie den Standardwert an, sofern vorhanden, und eine kurze Beschreibung für jeden Wert.

- `"value1"`
  - : Beschreibung von Wert 1. Dies ist der Standardwert.
- `"value2"`
  - : Beschreibung von Wert 2.
- `"value3"`
  - : Beschreibung von Wert 3.

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsproblemen, die bei der Verwendung dieses Attributs auftreten können, und wie Sie sie umgehen können. Entfernen Sie diesen Abschnitt, wenn es keine gibt, die aufzuführen sind.

## Beispiele

Zeigen Sie relevante Beispiele für dieses Attribut und wie Sie dieses Attribut in praktischen HTML-Kontexten verwenden. Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel hervorhebt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift. Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Fall 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung des `for` Attributs
>
> Beispiel des `for` Attributs
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Fall 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieses Attributs siehe [die Seite über `for` Attribut](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Attribut beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinien-Leitfaden_.

- link1
- link2
- external_link (Jahr)
