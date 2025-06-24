---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diese ganze erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Selektor aktualisiert werden.
>
> ```md
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.NameOfTheSelector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor einen Titel von _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type` Schlüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class`, oder `css-pseudo-element`, je nachdem, ob der Selektor eine [pseudo-class](/de/docs/Web/CSS/Pseudo-classes), ein [pseudo-element](/de/docs/Web/CSS/Pseudo-elements), ein [combinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), oder ein [simple selector](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt dabei die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>     Siehe unser [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs unmittelbar nach dem Seiten-Frontmatter.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, daher vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dieses erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses erzeugt ein **Veraltetes** Banner, das darauf hinweist, dass die Verwendung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses erzeugt ein **Nicht-standardisiertes** Banner, das darauf hinweist, dass das Feature Teil keiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> Geben Sie die Statuskopfzeilen-Makros nicht manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Muster der **Experimentelle**, **Veraltete**, und **Nicht-standardisierte** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Syntax-Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntax-Abschnitts wird mit dem `\{{CSSSyntax}}`-Makro erzeugt.
> Um diese zu füllen, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datei vorhanden ist.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für mehr Informationen.
>
> _Denken Sie daran, diese ganze erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit dem Benennen des Selektors und sagen Sie, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken hinzu, die Entwicklern bewusst sein sollten, wenn sie diese Eigenschaft verwenden. Sie können auch Umgehungslösungen oder Lösungen einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Die Verwendung des Fetch-APIs
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
