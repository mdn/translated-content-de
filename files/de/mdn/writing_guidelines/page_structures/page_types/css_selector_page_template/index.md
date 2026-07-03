---
title: CSS Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für den jeweiligen Selektor aktualisiert werden.
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _:NameOfTheSelector_.
>     Zum Beispiel hat der {{cssxref(":hover")}} Selektor einen Titel von _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird wie `Web/CSS/Reference/Selectors/:name-of-the-selector` formatiert.
>     Zum Beispiel hat der {{cssxref(":hover")}} Selektor den Slug `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : Der `page-type` Schlüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class`, oder `css-pseudo-element`, je nachdem, ob der Selektor eine [pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [pseudo-element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators), oder ein [einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand von Werten in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte Browser-Kompatibilität und Spezifikationen auszufüllen (indem die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten entsprechend ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>     Sehen Sie sich unseren [Leitfaden an, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makros erscheint oben im Inhaltsbereich unmittelbar nach dem Seitenmetadaten.
> Diese Makros werden automatisch durch Tools hinzugefügt, also vermeiden Sie es, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — dies erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [unerwünscht](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> Geben Sie nicht manuell Statusheader-Makros an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht standardisierten** Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Syntax Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mit dem `\{{CSSSyntax}}`-Makro generiert.
> Damit diese ausgefüllt werden, müssen Sie sicherstellen, dass ein geeigneter Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Weitere Informationen finden Sie in [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md).
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie damit, den Selektor zu benennen und zu sagen, was er macht. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Beinhaltet Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken, die Entwickler beachten sollten, wenn sie diese Eigenschaft verwenden. Sie können auch Umgehungen oder Lösungen dort einfügen, wo es zutreffend ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit dem Namen des Beispiels haben. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie sich unseren Leitfaden an, wie man [Code-Beispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
