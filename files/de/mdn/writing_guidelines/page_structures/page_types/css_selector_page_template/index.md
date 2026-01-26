---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiteneinleitung:**
>
> Die Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten für den jeweiligen Selektor entsprechend aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Format als _:NameOfTheSelector_.
>     Zum Beispiel hat der {{cssxref(":hover")}} Selektor einen Titel von _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dieser wird wie folgt formatiert: `Web/CSS/Reference/Selectors/:name-of-the-selector`.
>     Zum Beispiel hat der {{cssxref(":hover")}} Selektor den Slug `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : Der `page-type` Schlüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class`, oder `css-pseudo-element`, abhängig davon, ob der Selektor eine [pseudo-class](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [pseudo-element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [combinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators), oder ein [simple selector](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Statuses hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser-compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet automatisch den Schlüssel, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten, entsprechend).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-compat-Daten-Repo</a> erstellen/aktualisieren müssen.
>     Siehe unseren [Leitfaden, wie Sie dies tun können](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Macros am Anfang der Seite**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs unmittelbar nach der Seiteneinleitung.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, vermeiden Sie das Hinzufügen oder Entfernen dieser:
>
> - `\{{SeeCompatTable}}` — dies generiert ein **Diese Technologie ist experimentell** Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies generiert ein **Veraltet** Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard** Banner, das darauf hinweist, dass das Merkmal nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Hinweise aktualisieren oder löschen:
>
> Stellen Sie keine Statuskopfzeilen-Makros manuell bereit. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Statuses hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Syntax Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mittels des `\{{CSSSyntax}}` Makros erzeugt.
> Damit diese populiert werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für weitere Informationen.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Nennung des Selektors und was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Zugangsrichtlinien, bewährte Verfahren und potenzielle Bedenken ein, die Entwicklern bewusst sein sollten, wenn sie diese Eigenschaft verwenden. Sie können auch Lösungen oder Workarounds dort einbeziehen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit der Benennung des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unsere Anleitung zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch-API
>
> Beispiel des Fetch
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien siehe den [Siehe-auch-Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in der _Schreibstil-Leitfaden_.

- link1
- link2
