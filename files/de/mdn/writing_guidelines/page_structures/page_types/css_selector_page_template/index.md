---
title: Vorlage für eine CSS-Selektorseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte für den jeweiligen Selektor an.
>
> ```md
> ---
> title: :name-of-the-selector
> slug: Web/CSS/Reference/Selectors/:name-of-the-selector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.name-of-the-selector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der Titel, der oben auf der Seite angezeigt wird. Verwenden Sie das Format _:NameOfTheSelector_.
>     Der Selektor {{cssxref(":hover")}} hat beispielsweise den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es hat die Form `Web/CSS/Reference/Selectors/:name-of-the-selector`.
>     Der Slug des Selektors {{cssxref(":hover")}} lautet beispielsweise `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : Der Schlüssel `page-type` für CSS-Selektoren ist `css-selector`, `css-pseudo-class`, `css-pseudo-element` oder `css-combinator`, je nachdem, ob es sich bei dem Selektor um eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einen [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) oder einen [einfachen Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) handelt.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Legen Sie diesen Schlüssel nicht manuell fest: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„So werden Feature-Status hinzugefügt oder aktualisiert“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> durch den Abfrageschlüssel für den Selektor im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Werkzeuge verwenden diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu befüllen (indem sie dort die Makros `\{{Compat}}` beziehungsweise `\{{Specifications}}` ersetzen).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Repository für Browser-Kompatibilitätsdaten</a> erstellen oder aktualisieren müssen.
>     Lesen Sie dazu unseren [Leitfaden zur Vorgehensweise](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für alle CSS-Leitfaden- und Referenzseiten lautet der Wert `cssref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Unmittelbar nach dem Frontmatter der Seite stehen am Anfang des Inhaltsbereichs mehrere Makros.
> Diese Makros werden automatisch von den Werkzeugen eingefügt. Fügen Sie sie daher nicht selbst hinzu und entfernen Sie sie nicht:
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Aktualisieren oder entfernen Sie die folgenden Makros gemäß den nachstehenden Hinweisen:
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Informationen dazu, wie Sie der Seite diese Status hinzufügen, finden Sie im Abschnitt [„So werden Feature-Status hinzugefügt oder aktualisiert“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell**, **Veraltet** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> ---
>
> **Abschnitt „Syntax“ (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Abschnitts „Syntax“ wird mit dem Makro `\{{CSSSyntax}}` erzeugt.
> Damit der Abschnitt befüllt werden kann, müssen Sie sicherstellen, dass für den Selektor ein passender Eintrag in unserer Datendatei [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) vorhanden ist.
> Weitere Informationen finden Sie unter [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md).
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Einleitender Absatz — nennen Sie zu Beginn den Selektor und beschreiben Sie, was er bewirkt. Idealerweise umfasst dieser Absatz ein oder zwei kurze Sätze.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Quelldokument die Backticks und den Backslash._

## Barrierefreiheit

Dieser Abschnitt ist optional. Beschreiben Sie Richtlinien zur Barrierefreiheit, bewährte Vorgehensweisen und mögliche Probleme, die Entwickler bei der Verwendung dieses Selektors beachten sollten. Sie können gegebenenfalls auch Alternativen oder Lösungen angeben.

## Beispiele

Beachten Sie, dass wir die Mehrzahl „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Halten Sie die Überschrift kurz. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und anschließend eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern setzen Sie die Links direkt unter die H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Quelldokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Quelldokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den jeweiligen Selektor beziehen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- Link 1
- Link 2
