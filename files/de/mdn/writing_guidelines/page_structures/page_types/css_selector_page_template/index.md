---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für den jeweiligen Selektor entsprechend aktualisiert werden.
>
> ```md
> ---
> title: :name-des-selektors
> slug: Web/CSS/Reference/Selectors/:name-des-selektors
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.name-des-selektors
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie wie _:NameDesSelektors_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) Selektor den Titel _:hover_.
> - **slug**
>   - : Der Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/Reference/Selectors/:name-des-selektors`.
>     Zum Beispiel ist der Slug des [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) Selektors `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für CSS-Eigenschaften ist entweder `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, je nachdem, ob der Selektor eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) oder ein [einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameDesSelektors</code> durch den Abfrage-String für den Selektor im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (wobei die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten entsprechend ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>     Siehe unseren [Leitfaden, wie man das macht](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich unmittelbar nach dem Seiten-Frontmatter.
> Diese Makros werden automatisch durch Tools hinzugefügt, daher vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dieses erzeugt ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es sich um eine experimentelle Technologie handelt und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dieses erzeugt ein **Veraltet** Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dieses erzeugt ein **Nicht standardisiert** Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Hinweisen aktualisieren oder löschen:
>
> Stellen Sie Statusheader-Makros nicht manuell bereit. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardisiert** Banner werden direkt nach diesem Notizblock angezeigt.
>
> ---
>
> **Syntax-Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntax-Abschnitts wird mit dem `\{{CSSSyntax}}` Makro generiert.
> Damit diese angezeigt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für mehr Informationen.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit dem Benennen des Selektors und beschreiben Sie, was er macht. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Beinhaltet Richtlinien zur Barrierefreiheit, bewährte Verfahren und potenzielle Bedenken, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Lösungen oder Workarounds einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der Fetch-API
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
> Fügen Sie keine H3-Überschriften hinzu, sondern platzieren Sie die Links direkt unter der H2-Überschrift "Beispiele". Zum Beispiel:
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

Beinhaltet Links zu Referenzseiten und Leitfäden, die mit dem aktuellen Selektor zusammenhängen. Für weitere Richtlinien sehen Sie den [See als Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing Style Guide_.

- link1
- link2
