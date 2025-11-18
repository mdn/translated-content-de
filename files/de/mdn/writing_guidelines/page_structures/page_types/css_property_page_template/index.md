---
title: CSS-Eigenschaft-Page-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> [!NOTE]
> _Entfernen Sie diesen Notizblock vor der Veröffentlichung._
>
> ---
>
> **Seitentitel:**
>
> Der Seitentitel oben auf der Seite wird verwendet, um "Metadaten der Seite" zu definieren.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: name-of-the-property
> slug: Web/CSS/Reference/Properties/name-of-the-property
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-of-the-property
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Format des Titels ist _name-of-the-property_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) Eigenschaft einen Titel von _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert als `Web/CSS/Reference/Properties/name-of-the-property`.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) Eigenschaft `Web/CSS/Reference/Properties/background-color`. Für eine mehrwortige Komponente wie `Getting_started` in einem Slug sollte der Slug ein Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine kürzel CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation) Eigenschaft `css-shorthand-property`, da es sich um eine Kurzformen-Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay) Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell eingestellt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> mit der Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den _Other macros in the page_ Abschnitt dieses Notizblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die _Spezifikationen_ und _Browser-Kompatibilität_ -Abschnitte zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenz-Seiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros auf der oberen Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unter den Seitentitel).
> Diese Makros werden automatisch von der Werkzeugkette hinzugefügt (es ist nicht erforderlich, hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltetes**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiertes**-Banner, das anzeigt, dass die Funktion nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Beratung aktualisieren oder löschen:

> Fügen Sie Header-Makros für den Status nicht manuell hinzu. Sehen Sie sich den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) an, um diese Status der Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-standardisiert**-Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Absatz zur formellen Syntax: Der Inhalt für den _Formelle Syntax_-Abschnitt wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab.
> - Absatz zur formellen Definition: Der Inhalt für den _Formelle Definition_-Abschnitt wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datei im `mdn/data`-Repository ausgefüllt wurde. Siehe die Seite [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md) für weitere Informationen.
> - Spezifikationen und Browser-Kompatibilitätsabschnitte: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus dem Seitentitel, um Daten in den Abschnitten _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (anstelle der `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Notizblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz, der die Eigenschaft benennt und erklärt, was sie tut. Dieser sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Abschnittstitel "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Zusammensetzende Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzformeneigenschaften wie [animation](/de/docs/Web/CSS/Reference/Properties/animation) hinzu, um alle zugehörigen Langformen-Eigenschaften aufzuzählen.

## Syntax

Fügen Sie die häufigen Anwendungsfälle als Codeblock hinzu und beschreiben Sie die Komponentenunterwerte, die einen vollständigen Wert bilden.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Unterwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Unterwerts, seinen Datentyp und das, was er darstellt, ein.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Unterwerts, seinen Datentyp und das, was er darstellt, ein.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft und ihrer Funktionsweise aufzunehmen. Verwenden Sie diesen Abschnitt, um relevante Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formelle Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formelle Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken hinzu, derer sich Entwickler beim Verwenden dieser Eigenschaft bewusst sein sollten. Sie können auch Lösungen oder Workarounds, sofern zutreffend, hinzufügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) mit dem Namen des Beispiels haben. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel "Ein einfaches Beispiel" sagt nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie in unserem Leitfaden nach, wie Sie [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügen können, um weitere Informationen zu erhalten.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft in Beziehung stehen. Für weitere Richtlinien sehen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externe_link (Jahr)
