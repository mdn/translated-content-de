---
title: CSS-Eigenschaftsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Stammdaten:**
>
> Die Stammdaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: name-der-eigenschaft
> slug: Web/CSS/Reference/Properties/name-der-eigenschaft
> page-type: css-property ODER css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-der-eigenschaft
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _name-der-eigenschaft_.
>     Zum Beispiel hat die {{cssxref("background-color")}}-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist der Endteil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Das Format lautet `Web/CSS/Reference/Properties/name-der-eigenschaft`.
>     Zum Beispiel ist der Slug für die {{cssxref("background-color")}}-Eigenschaft `Web/CSS/Reference/Properties/background-color`. Bei einer Komponente mit mehreren Wörtern, wie `Getting_started` in einem Slug, sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Bei einer abgekürzten CSS-Eigenschaft lautet der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine abgekürzte Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Punkte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Daten zur Browser-Kompatibilität für das Feature gesetzt. Siehe ["Wie Feature-Statuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch den Abfrage-String für die Eigenschaft im [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieser Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Specifications_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Oben-in-der-Seite-Makros**
>
> Eine Reihe von Makroaufrufen erscheint am Beginn des Inhaltsabschnitts (direkt unter den Seiten-Stammdaten).
> Diese Makros werden vom Toolchain automatisch hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Non-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:

> Fügen Sie keine Status-Kopfzeilen-Makros manuell hinzu. Verweisen Sie auf den Abschnitt ["Wie Feature-Statuse hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Statuse zur Seite hinzuzufügen.
>
> Beispiele der **Experimental**, **Deprecated**, und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formaler Syntaxabschnitt: Der Inhalt für den _Formal syntax_-Abschnitt wird mithilfe des `\{{CSSSyntax}}`-Makros generiert. Dieses Makro ruft Daten aus den Spezifikationen mithilfe des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Formaler Definitionsabschnitt: Der Inhalt für den _Formal definition_-Abschnitt wird mithilfe des `\{{CSSInfo}}`-Makros generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data`-Repository ausgefüllt wird. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md) Seite für weitere Informationen.
> - Spezifikationen und Browser-Kompatibilitätsabschnitte: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiten-Stammdaten, um Daten in die _Specifications_ und _Browser-Kompatibilität_ Abschnitte einzufügen (anstatt die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten zu ersetzen).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-compat-data-Repository</a> erstellen/aktualisieren müssen.
>   Weitere Informationen zum Hinzufügen oder Bearbeiten von Einträgen finden Sie in unserem [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft nennt und sagt, was sie tut.
Dieser sollte idealerweise ein oder zwei kurze Sätze umfassen. Alle anderen Erklärungen, falls vorhanden, sollten im Abschnitt "Beschreibung" enthalten sein.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dazu gehören der Titel des Abschnitts "Probieren Sie es aus" und der Code-Editor.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreib-Richtlinien_.

## Bestandteile der Eigenschaften

Fügen Sie diesen Abschnitt nur für abgekürzte Eigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/Reference/Properties/animation), um alle dazugehörigen Langform-Eigenschaften aufzulisten.

Führen Sie die Werte mit einem der folgenden Sätze ein, wie es angebracht ist:

```md
This property is a shorthand for the following CSS properties:

This property is a shorthand for the following logical properties:

This property is a shorthand for the following physical properties:
```

## Syntax

Schließen Sie die häufigen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Satz ein, wie einen der folgenden, um zu vermitteln, wie der Wert der Eigenschaft aufgebaut ist:

```md
This property is specified as one of the following keyword values:

This property is specified as a single value from the following list:

This property is specified as a space-separated list of the following values:
```

Fügen Sie dem Satz eine Definitionsliste hinzu, die einen Begriff und eine Definition für jeden Subwert enthält. Wenn eine MDN-Referenzseite für einen Werttyp existiert, fügen Sie diesen Link auf dem Begriff hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er repräsentiert, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er repräsentiert, hinzu.

> [!WARNING]
> Fügen Sie keine [Status-Makros inline](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Fügen Sie eine Beschreibung der Eigenschaft hinzu und erklären Sie, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

Wenn die Eigenschaft Teil einer Abkürzung ist, schließen Sie alternative Deklarationsmöglichkeiten des Wertes ein:

```md
The `property-name` property, along with the \{{cssxref("sibling-property")}} property, can also be set by using the \{{cssxref("shorthand-property")}} shorthand.
```

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Leitlinien für die Barrierefreiheit, bewährte Praktiken und mögliche Bedenken hinzu, die Entwickler berücksichtigen sollten, während sie diese Eigenschaft verwenden. Sie können auch Workarounds oder Lösungen hinzufügen, wo anwendbar.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Jedoch ist "Grundlegende Nutzung" für die erste Beispielüberschrift akzeptabel, wenn es nur die Wertzuweisung demonstriert und komplexere Beispiele folgen. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie zu den Beispielen auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft zusammenhängen. Fügen Sie auch einen Link zum CSS-Modul hinzu, zu dem die Eigenschaft gehört. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- module_link
- external_link (Jahr)
