---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um die "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend dem jeweiligen Selektor aktualisiert werden.
>
> ```md
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.selectors.NameOfTheSelector
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird wie `Web/CSS/:NameOfTheSelector` formatiert.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover) Selektor den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, je nachdem, ob der Selektor eine [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) oder ein [einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichen zur Beschreibung des Status dieser Funktion. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     Die Werkzeugkette verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>     Siehe unser [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheinen am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es muss nichts hinzugefügt/entfernt werden):
>
> - `\{{SeeCompatTable}}` — erzeugt ein **Dies ist eine experimentelle Technologie**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimental features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — erzeugt ein **Veraltetes**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Nicht-standard**-Banner, das darauf hinweist, dass das Feature nicht Bestandteil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Rat aktualisieren oder löschen:
>
> - `\{{CSSRef}}` — dies muss auf jeder CSS-Selektor-Seite vorhanden sein. Es erzeugt einen geeigneten CSS-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informieren Sie sich im Abschnitt ["How to add or update feature statuses"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) darüber, wie Sie diese Status auf die Seite hinzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Syntax-Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntax-Abschnitts wird mit dem `\{{CSSSyntax}}` Makro erzeugt.
> Damit diese sich füllen, müssen Sie sicherstellen, dass ein geeigneter Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für weitere Informationen.
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Benennung des Selektors und was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Beziehen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken ein, die Entwickler berücksichtigen sollten, während sie diese Eigenschaft verwenden. Sie können auch Workarounds oder Lösungen einfügen, wo diese anwendbar sind.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) mit der Namensgebung des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) können, um weitere Informationen zu erhalten.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Links zu den Beispielen auf anderen Seiten hinzufügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Die Fetch-API verwenden
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Beziehen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf den aktuellen Selektor beziehen. Für weitere Leitlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writing style guide_.

- link1
- link2
