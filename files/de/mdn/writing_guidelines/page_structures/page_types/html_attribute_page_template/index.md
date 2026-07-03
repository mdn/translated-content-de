---
title: HTML Attributseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

HTML-Attribute fallen in zwei Kategorien: **Element-spezifische Attribute**, die nur auf bestimmte Elemente angewendet werden (z. B. das `accept` Attribut auf `<input type="file">`), und **globale Attribute**, die für jedes HTML-Element verwendet werden können (z. B. `class`, `id`). Erstere sollten unter `HTML/Reference/Attributes` platziert werden, während letztere unter `HTML/Reference/Global_attributes` abgelegt werden sollten.

Beachten Sie, dass die meisten element-spezifischen Attribute keine eigenständigen Artikel benötigen, wenn die Attributliste im Elementreferenz ausreicht, um deren Verhalten zu beschreiben. Fügen Sie nur dann einen Artikel hinzu, wenn das Attribut genug Nuancen hat, um eigene Beispiele zu verdienen, oder es sich um ein globales Attribut handelt.

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für das jeweilige Attribut entsprechend aktualisiert werden.
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
>     Zum Beispiel hat das Attribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) einen _Titel_ von `class`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird im Format `Web/HTML/Reference/Global_attributes/name-of-the-attribute` oder `Web/HTML/Reference/Attributes/name-of-the-attribute` formatiert, wobei der Attributname in _Kleinbuchstaben_ ist.
>     Zum Beispiel hat das Attribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) einen _Slug_ von `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Immer `html-attribute`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `html.global_attributes.name-of-the-attribute` durch die Abfragezeichenfolge für das globale Attribut im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Für element-spezifische Attribute verwenden Sie das Format `html.elements.name-of-the-element.name-of-the-attribute`, wobei jede Abfragezeichenfolge in einer eigenen Zeile, vorangestellt von einem Bindestrich, steht. Zum Beispiel:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     Die Werkzeugkette verwendet den Schlüssel automatisch, um die Abschnitte Kompatibilität und Spezifikationen zu füllen (er ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Attribut in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen, und der Eintrag muss Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Bleiben Sie bei `htmlsidebar` (alle Seiten unter `/web/html/` verwenden diese Sidebar).
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Anzahl von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unterhalb der Seiten-Metadaten).
> Diese Makros werden automatisch durch die Werkzeugkette hinzugefügt (es ist nicht erforderlich, sie manuell hinzuzufügen/entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standardgemäß**-Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-standardgemäß** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> Beginnen Sie damit, den Leser in das Attribut und seine Verwendung einzuführen.
> Zum Beispiel: Das **`name-of-the-attribute`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) beschreibt oder manipuliert [fügen Sie hier die Verwendungsbeschreibung ein].

## Probieren Sie es

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Titel des Abschnitts "Probieren Sie es" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.
Falls enthalten, folgen Sie ihm mit 1-2 kurzen Absätzen, die das implementierte Verhalten erklären und gegebenenfalls auf eine Interaktion mit JavaScript, CSS oder anderen Attributen hinweisen. Halten Sie es prägnant und vermeiden Sie es, vollständige Dokumentationen zu duplizieren — verlinken Sie bei Bedarf. Siehe erneut die Seite des `class` Attributs.

## Werte

Geben Sie eine Liste möglicher Werte für das Attribut an, falls vorhanden (entfernen Sie dies, wenn nicht zutreffend). Fügen Sie den Standardwert hinzu, falls es einen gibt, und eine kurze Beschreibung für jeden Wert.

- `"value1"`
  - : Beschreibung von Wert 1. Dies ist der Standardwert.
- `"value2"`
  - : Beschreibung von Wert 2.
- `"value3"`
  - : Beschreibung von Wert 3.

## Barrierefreiheit

Warnen Sie vor potenziellen Barrierefreiheitsproblemen, die bei der Verwendung dieses Attributs auftreten können, und wie man sie umgehen kann. Entfernen Sie diesen Abschnitt, falls keine aufgelistet werden müssen.

## Beispiele

Zeigen Sie relevante Beispiele für dieses Attribut und wie man dieses Attribut in praktischen HTML-Kontexten verwendet.
Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel hervorhebt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.
Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Fall 1:** Wenn Sie einige Beispiele auf dieser Seite und noch mehr Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieses Attributs, siehe [die Seite über das `for` Attribut](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Attribut zusammenhängen. Für weitere Richtlinien siehe den [Abschnitt "Siehe auch"](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
