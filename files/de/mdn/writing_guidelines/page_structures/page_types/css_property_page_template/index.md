---
title: CSS-Eigenschafts-Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._

> **Seiten-Metadaten:**

> Die Metadaten am Anfang der Seite werden zur Definition der "Seiten-Metadaten" verwendet.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.

> ```md
> ---
> title: name-der-eigenschaft
> slug: Web/CSS/Reference/Properties/name-der-eigenschaft
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-der-eigenschaft
> sidebar: cssref
> ---
> ```

> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _name-der-eigenschaft_.
>     Zum Beispiel hat die {{cssxref("background-color")}}-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads hinter `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/Reference/Properties/name-der-eigenschaft` formatiert.
>     Zum Beispiel ist der Slug für die {{cssxref("background-color")}}-Eigenschaft `Web/CSS/Reference/Properties/background-color`. Für ein mehrteiliges Element wie `Getting_started` in einem Slug sollte der Slug ein Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzform-CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation)-Eigenschaft `css-shorthand-property`, weil sie eine Kurzform-Eigenschaft ist, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Daten zur Browser-Kompatibilität für die Funktion gesetzt. Siehe ["Wie Feature-Statusse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch den Abfragestring für die Eigenschaft im [Browser compatibility data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros in der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.

> **Makros am Seitenanfang**

> Eine Reihe von Makroaufrufen erscheinen am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht erforderlich, diese hinzuzufügen oder zu entfernen):

> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dieses generiert ein **Nicht-Standard**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.

> Sie sollten die folgenden Makros entsprechend den unten gegebenen Ratschlägen aktualisieren oder löschen:

> Fügen Sie keine Status-Header-Makros manuell hinzu. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Statusse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Statusse zur Seite hinzuzufügen.

> Beispiele der **Experimentell**, **Veraltet** und **Nicht-Standard**-Banner werden direkt nach diesem Hinweisblock angezeigt.

> **Andere Makros auf der Seite**

> - Abschnitte zum formalen Syntax: Der Inhalt für den Abschnitt _Formaler Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mittels des [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte zur formalen Definition: Der Inhalt für den Abschnitt _Formale Definition_ wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten hat, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die jeweilige Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data` Repository ausgefüllt wurde. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md) Seite für mehr Informationen.
> - Spezifikations- und Browser-Kompatibilitätsabschnitte: Das Build-Tool verwendet das `browser-compat`-Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte einzufügen (ersetzt die `\{{Specifications}}` und `\{{Compat}}`-Makros in diesen Abschnitten).

> Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
> Siehe unsere [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.

> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der die Eigenschaft benennt und erklärt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies beinhaltet den Abschnittstitel "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Komponenten-Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzform-Eigenschaften hinzu, wie [animation](/de/docs/Web/CSS/Reference/Properties/animation), um alle zugehörigen Langform-Eigenschaften aufzulisten.

## Syntax

Fügen Sie die allgemeinen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert bilden.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps, und wofür er steht, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps, und wofür er steht, hinzu.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft hinzuzufügen und zu erklären, wie sie funktioniert. Nutzen Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Barrierefreiheitshinweise, Best Practices und potenzielle Bedenken hinzu, die Entwickler beachten sollten, während sie diese Eigenschaft verwenden. Sie können auch Workarounds oder Lösungen einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir das Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der fetch API
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
> Für Beispiele dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit der aktuellen Eigenschaft in Zusammenhang stehen. Für weitere Richtlinien, siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
