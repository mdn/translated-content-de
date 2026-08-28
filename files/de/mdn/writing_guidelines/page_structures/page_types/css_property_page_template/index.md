---
title: CSS-Eigenschafts-Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
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
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _name-der-eigenschaft_.
>     Zum Beispiel hat die {{cssxref("background-color")}}-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dieser wird formatiert als `Web/CSS/Reference/Properties/name-der-eigenschaft`.
>     Zum Beispiel lautet der Slug für die {{cssxref("background-color")}}-Eigenschaft `Web/CSS/Reference/Properties/background-color`. Bei einem mehrteiligen Komponenten-Slug wie `Getting_started` sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzschrift-CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation)-Eigenschaft `css-shorthand-property`, weil es sich um eine Kurzschrifteigenschaft handelt. Während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch den Abfrage-String für die Eigenschaft im [Browser-compat-Daten-Repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Macros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht nötig, etwas hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) eintragen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Deprecated**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standard**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:

> Fügen Sie keine Status-Header-Makros manuell hinzu. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimental**, **Deprecated** und **Nicht-standard**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formale Syntax-Sektion: Der Inhalt für den _Formale Syntax_-Abschnitt wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mithilfe des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Formale Definitions-Sektion: Der Inhalt für den _Formale Definitions_-Abschnitt wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data`-Repository ausgefüllt wurde. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md)-Seite für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilitäts-Sektionen: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte einzufügen (Ersetzung der `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft benennt und deren Funktion beschreibt.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen. Alle weiteren Erklärungen, falls vorhanden, sollten in den Abschnitt "Beschreibung" aufgenommen werden.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Zusammengesetzte Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschrifteigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/Reference/Properties/animation), um alle zugehörigen ausführlichen Eigenschaften aufzulisten.

Führen Sie die Werte mit einem der folgenden Sätze ein, je nachdem, was zutrifft:

```md
This property is a shorthand for the following CSS properties:

This property is a shorthand for the following logical properties:

This property is a shorthand for the following physical properties:
```

## Syntax

Fügen Sie die üblichen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Teilwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Satz wie einen der folgenden ein, um zu erläutern, wie der Eigenschaftswert aufgebaut ist:

```md
This property is specified as one of the following keyword values:

This property is specified as a single value from the following list:

This property is specified as a space-separated list of the following values:
```

Folgen Sie dem Satz mit einer Definitionsliste, die einen Begriff und eine Definition für jeden Teilwert enthält. Wenn eine MDN-Referenzseite für einen Werttyp existiert, fügen Sie diesen Link dem Begriff hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Teilwerts, seines Datentyps und das, was er darstellt, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Teilwerts, seines Datentyps und das, was er darstellt, hinzu.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Fügen Sie eine Beschreibung der Eigenschaft ein und erklären Sie, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

Wenn die Eigenschaft Teil einer Kurzschrift ist, fügen Sie alternative Wege zur Deklaration des Wertes hinzu:

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

Dies ist ein optionaler Abschnitt. Fügen Sie Leitlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Lösungen oder Workarounds einschließen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benannt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. "Grundlegende Verwendung" ist jedoch für die erste Beispielüberschrift akzeptabel, wenn es nur die Wertzuweisung demonstriert und komplexere Beispiele folgen. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zur Hinzufügung von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch-API
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Fügen Sie auch einen Link zu dem CSS-Modul hinzu, zu dem die Eigenschaft gehört. Für weitere Richtlinien siehe den [Siehe auch]-Abschnitt (/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- module_link
- external_link (Jahr)
