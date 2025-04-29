---
title: HTML Attribut-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

HTML-Attribute fallen in zwei Kategorien: **Element-spezifische Attribute**, die nur auf bestimmte Elemente anwendbar sind (z.B. das `accept` Attribut auf `<input type="file">`), und **globale Attribute**, die für jedes HTML-Element verwendet werden können (z.B. `class`, `id`). Erstere sollten unter `HTML/Reference/Attributes` abgelegt werden, während letztere unter `HTML/Reference/Global_attributes` abgelegt werden sollten.

Beachten Sie, dass die meisten element-spezifischen Attribute keine eigenständigen Artikel benötigen, wenn die Attributliste in der Elementreferenz ausreicht, um ihr Verhalten zu beschreiben. Fügen Sie nur dann einen Artikel hinzu, wenn das Attribut genug Nuancen aufweist, um eigene Beispiele zu verdienen, oder wenn es ein globales Attribut ist.

> **Hinweis:** _Entfernen Sie diese gesamte Erklärung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Attribut aktualisiert werden.
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
>   - : Überschriftstitel, der oben auf der Seite angezeigt wird.
>     Formatieren Sie es als `name-of-the-attribute` (nur der Attributname selbst).
>     Zum Beispiel hat das `class` Attribut eine _title_ von `class`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert wie `Web/HTML/Reference/Global_attributes/name-of-the-attribute` oder `Web/HTML/Reference/Attributes/name-of-the-attribute`, wobei der Attributname in _Kleinschreibung_ ist.
>     Zum Beispiel hat das `class` Attribut einen _slug_ von `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Immer `html-attribute`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionenstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert `html.global_attributes.name-of-the-attribute` mit dem Abfragezeichenfolgewert für das globale Attribut im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Für element-spezifische Attribute verwenden Sie das Format `html.elements.name-of-the-element.name-of-the-attribute`, mit jeder Abfragezeichenfolge in einer eigenen Zeile, vorangestellt von einem Bindestrich. Zum Beispiel:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     Das Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros).
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für das Attribut in unserem [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data) erstellen/aktualisieren müssen und der Eintrag sollte Spezifikationsinformationen enthalten.
>     Siehe unser [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Belassen Sie es als `htmlsidebar` (alle Seiten unter `/web/html/` verwenden diese Seitenleiste).
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie sich hinter einem Pref in Firefox verbirgt, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einfügen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-Standard** Banner, das anzeigt, dass die Funktion nicht Teil irgendeiner Spezifikation ist.
>
> Bereitstellen Sie keine Status-Header-Makros manuell. Lesen Sie den Abschnitt ["Wie Funktionenstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Muster der **Experimentell**, **Veraltet**, und **Nicht-Standard** Banner sind direkt nach diesem Hinweisblock gezeigt.
>
> _Denken Sie daran, diesen gesamten Erklärungshinweis vor der Veröffentlichung zu entfernen_
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> Beginnen Sie damit, den Leser in das Attribut und dessen Verwendung einzuführen.
> Zum Beispiel: Das **`name-of-the-attribute`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) beschreibt oder manipuliert [fügen Sie eine Verwendungsbeschreibung ein].

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample` Makro generiert.
Dies umfasst den Abschnittstitel "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.
Falls eingeschlossen, folgen Sie dem mit 1-2 kurzen Absätzen, die das implementierte Verhalten erklären und optional eine Interaktion mit JavaScript, CSS oder anderen Attributen hervorheben. Halten Sie es prägnant und vermeiden Sie das Duplizieren vollständiger Dokumentationen — verlinken Sie, wo nötig. Sehen Sie sich die Seite des `class` Attributs an.

## Werte

Geben Sie eine Liste der möglichen Werte für das Attribut an, falls vorhanden (entfernen Sie ihn, falls nicht zutreffend). Schließen Sie den Standardwert ein, falls vorhanden, sowie eine kurze Beschreibung für jeden Wert.

- `"value1"`
  - : Beschreibung von Wert 1. Dies ist der Standardwert.
- `"value2"`
  - : Beschreibung von Wert 2.
- `"value3"`
  - : Beschreibung von Wert 3.

## Barrierefreiheit

Warnen Sie vor möglichen Barrierefreiheitsproblemen, die bei der Verwendung dieses Attributs auftreten können, und wie man sie umgeht. Entfernen Sie diesen Abschnitt, wenn keine aufgelistet werden müssen.

## Beispiele

Zeigen Sie relevante Beispiele für dieses Attribut und wie man dieses Attribut in praktischen HTML-Kontexten verwendet.
Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel hervorhebt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.
Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele einer anderen Seite verweisen.
>
> **Fall 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Fall 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu diesem Attribut siehe [die Seite zum `for` Attribut](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`
_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen Attribut in Zusammenhang stehen. Für weitere Richtlinien lesen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
