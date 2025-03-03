---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Note:** _Entfernen Sie diese gesamte erklärende Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" festzulegen. Die Werte sollten entsprechend dem jeweiligen Selektor aktualisiert werden.
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
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als _:NameOfTheSelector_.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover)-Selektor den Titel _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel hat der [`:hover`](/de/docs/Web/CSS/:hover)-Selektor den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für CSS-Eigenschaften ist einer von `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, je nachdem, ob der Selektor eine [pseudo-class](/de/docs/Web/CSS/Pseudo-classes), ein [pseudo-element](/de/docs/Web/CSS/Pseudo-elements), ein [combinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), oder ein [simple selector](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**

> - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> durch den Abfrage-String für den Selektor im [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>   Der Toolchain verwendet diesen Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte zu füllen (die die `\{{Compat}}`- und `\{{Specifications}}`-Makros in diesen Abschnitten ersetzen).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Leitfaden dazu, wie Sie dies tun](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie**-Banner, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet**-Banner, das angibt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht-standard**-Banner, das angibt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Hinweise aktualisieren oder löschen:
>
> - `\{{CSSRef}}` — muss auf jeder CSS-Selektor-Seite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig davon, welche Tags auf der Seite enthalten sind.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Seite kopieren.
>
> Status-Header-Makros sollten nicht manuell bereitgestellt werden. Konsultieren Sie den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standard**-Banner werden direkt nach diesem Anmerkungsblock gezeigt.
>
> ---
>
> **Syntax-Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntax-Abschnitts wird mit dem `\{{CSSSyntax}}`-Makro generiert. Damit diese angezeigt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Daten-Datei ausgefüllt ist.
> Weitere Informationen finden Sie in [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md).
>
> _Denken Sie daran, diese gesamte erklärende Anmerkung vor der Veröffentlichung zu entfernen_

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Benennung des Selektors und der Erklärung, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Zugänglichkeit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Verfahren und mögliche Bedenken hinzu, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Sie können auch Lösungen oder Workarounds dort einfügen, wo es zutrifft.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nicht viel über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und noch mehr Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
>
> Beispiel von Fetch
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Selektor beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
