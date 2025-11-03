---
title: CSS-Selektoren-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erklärenden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten für den entsprechenden Selektor entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) Selektor den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel ist der Slug des [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) Selektors `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type` Schüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class`, oder `css-pseudo-element`, abhängig davon, ob der Selektor eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) oder ein [einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden."](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit den Abfragezeichenfolgen für den Selektor im [Browser-Kompatibilitäts-Daten-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (wobei die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitäts-Daten-Repository</a> erstellen/aktualisieren müssen.
>     Siehe unseren [Leitfaden dazu, wie man dies macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Details finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint am Anfang des Inhaltsbereichs direkt nach dem Frontmatter der Seite. Diese Makros werden automatisch durch die Werkzeuge hinzugefügt, also vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dieses erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Ist sie experimentell und die Technologie in Firefox hinter einer Einstellung versteckt, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses erzeugt ein **Nicht standardmäßig**-Banner, das anzeigt, dass das Feature nicht Bestandteil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten genannten Empfehlungen aktualisieren oder löschen:
>
> Status-Header-Makros nicht manuell bereitstellen. Um diese Status zur Seite hinzuzufügen, lesen Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell**, **Veraltet** und **Nicht standardmäßig** werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Syntaxabschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mithilfe des `\{{CSSSyntax}}` Makros generiert.
> Um diese zu füllen, müssen Sie sicherstellen, dass ein geeigneter Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei eingetragen wurde.
> Weitere Informationen finden Sie unter [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md).
>
> _Denken Sie daran, diesen gesamten erklärenden Hinweis vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabschnitt — beginnen Sie damit, den Selektor zu benennen und zu sagen, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Einschließen von Richtlinien zur Barrierefreiheit, bewährte Verfahren und potenzielle Bedenken, derer sich Entwickler beim Verwenden dieser Eigenschaft bewusst sein sollten. Sie können auch Workarounds oder Lösungen einfügen, wo anwendbar.

## Beispiele

Beachten Sie, dass wir die Mehrzahl "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zu [Code-Beispielen hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
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
> Beispiel für Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter dem H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen Selektor zusammenhängen. Weitere Richtlinien finden Sie in der [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
