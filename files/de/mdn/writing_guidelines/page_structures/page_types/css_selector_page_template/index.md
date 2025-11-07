---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

> [!NOTE]
> _Entfernen Sie diese gesamte Erklärungshinweis vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
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
>   - : Der Titel, der oben auf der Seite angezeigt wird. Formatieren Sie ihn als _:NameOfTheSelector_.
>     Zum Beispiel hat der Selektor [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) einen Titel von _:hover_.
> - **slug**
>   - : Das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`). Dies wird formatiert wie `Web/CSS/:NameOfTheSelector`.
>     Zum Beispiel hat der Selektor [`:hover`](/de/docs/Web/CSS/Reference/Selectors/:hover) den Slug `Web/CSS/:hover`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für CSS-Eigenschaften ist eines von `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, abhängig davon, ob der Selektor eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) oder ein [einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Flaggen, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Status von Funktionen hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenkette für den Selektor im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (ersetzt die `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten entsprechend).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>     Siehe unseren [Leitfaden, wie dies zu tun ist](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Strukturen der Seiten: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makros erscheinen oben im Inhaltsbereich unmittelbar nach den Seiten-Metadaten.
> Diese Makros werden automatisch durch Werkzeuge hinzugefügt, vermeiden Sie es daher, sie hinzuzufügen oder zu entfernen:
>
> - `\{{SeeCompatTable}}` — generiert ein **Dies ist eine experimentelle Technologie** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn es experimentell ist und die Technologie hinter einem Pref in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}` — generiert ein **Veraltet** Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — generiert ein **Nicht standardisiert** Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> Geben Sie keine Status-Header-Makros manuell an. Um diese Statuse zur Seite hinzuzufügen, lesen Sie den Abschnitt ["Wie Status von Funktionen hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele der **Experimentell**, **Veraltet**, und **Nicht standardisiert** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Syntaxabschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntaxabschnitts wird mit dem `\{{CSSSyntax}}` Makro generiert.
> Um diese auszufüllen, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Siehe [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) für mehr Informationen.
>
> _Denken Sie daran, diesen gesamten Erklärungshinweis vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Der Zusammenfassungsabsatz — beginnen Sie mit der Benennung des Selektors und erklären Sie, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Zum Verwenden dieses Makros entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Beziehen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken ein, derer sich Entwickler bewusst sein sollten, während sie diese Eigenschaft verwenden. Sie können auch Workarounds oder Lösungen anführen, sofern zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden dazu, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie zu Beispielen auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Zum Verwenden dieses Makros entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Zum Verwenden dieses Makros entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Beziehen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen Selektor zu tun haben. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
