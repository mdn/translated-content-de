---
title: CSS-Selektor-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Anmerkung vor der Veröffentlichung_
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren die "Seiten-Metadaten".
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
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Formatieren als _:NameOfTheSelector_.
>     Beispielsweise hat der {{cssxref(":hover")}}-Selektor den Titel _:hover_.
> - **slug**
>   - : Der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`). Dies wird wie folgt formatiert: `Web/CSS/Reference/Selectors/:name-of-the-selector`.
>     Zum Beispiel hat der {{cssxref(":hover")}}-Selektor den Slug `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für CSS-Selektoren ist eines von `css-selector`, `css-pseudo-class` oder `css-pseudo-element`, abhängig davon, ob der Selektor eine [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), ein [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) oder ein [einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) ist.
> - **status**
>   - : Anzeiger zur Beschreibung des Status dieser Funktion. Ein Array, das einen oder mehrere der folgenden enthält: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.selectors.NameOfTheSelector</code> mit der Abfragezeichenfolge für den Selektor im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch zur Befüllung der Abschnitte zur Kompatibilität und Spezifikation (Ersetzen der `\{{Compat}}` und `\{{Specifications}}` Makros in diesen Abschnitten).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Selektor und seine Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repo</a> erstellen/aktualisieren müssen.
>     Siehe unser [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makros erscheinen am Anfang des Inhaltsabschnitts direkt nach den Seiten-Metadaten.
> Diese Makros werden automatisch durch das Tooling hinzugefügt, fügen Sie sie also nicht hinzu oder entfernen Sie sie nicht:
>
> - `\{{SeeCompatTable}}` — Dies generiert ein **Dies ist eine experimentelle Technologie**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und hinter einer Voreinstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — Dies generiert ein **Nicht-Standard**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten stehenden Hinweisen aktualisieren oder löschen:
>
> Status-Header-Makros nicht manuell bereitstellen. Siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Syntax-Abschnitt (`\{{CSSSyntax}}`)**
>
> Der Inhalt des Syntax-Abschnitts wird mit dem `\{{CSSSyntax}}`-Makro erzeugt.
> Damit diese befüllt werden, müssen Sie sicherstellen, dass ein entsprechender Eintrag für den Selektor in unserer [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) Datendatei ausgefüllt wurde.
> Weitere Informationen finden Sie in [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md).
>
> _Denken Sie daran, diese gesamte erläuternde Anmerkung vor der Veröffentlichung zu entfernen_

{{SeeCompatTable}}{{Non-standard_Header}}

Der zusammenfassende Absatz — beginnen Sie mit der Benennung des Selektors und der Beschreibung, was er tut. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

```css
/* Insert code block showing common use cases */
```

## Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Zugänglichkeit

Dies ist ein optionaler Abschnitt. Fügen Sie Zugänglichkeitsrichtlinien, bewährte Praktiken und potenzielle Bedenken hinzu, die Entwickler beachten sollten, wenn sie diese Eigenschaft verwenden. Sie können auch, wenn zutreffend, Lösungen oder Umgehungsmöglichkeiten einbeziehen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

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
> Beispiel von Fetch
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
> Für Beispiele zu dieser API siehe [die Seite zu fetch()](https://example.org/).
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
