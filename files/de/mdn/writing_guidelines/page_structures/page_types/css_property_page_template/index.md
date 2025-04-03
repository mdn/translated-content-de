---
title: CSS-Eigenschafts-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 6d54d3150f745b8c10cf739b24cb3d48ef6a53c4
---

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameDerEigenschaft
> slug: Web/CSS/NameDerEigenschaft
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.NameDerEigenschaft
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Title-Format ist _NameDerEigenschaft_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameDerEigenschaft` formatiert.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft `Web/CSS/background-color`. Für eine mehrwortige Komponente wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine abgekürzte CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine abgekürzte Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameDerEigenschaft</code> mit dem Abfragezeichenfolgenwert für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Specifications_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Macros am Anfang der Seite**
>
> Eine Reihe von Macro-Aufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimental**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Deprecated**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Non-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß dem untenstehenden Ratschlag aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschaftsseite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Fügen Sie keine Statusheader-Makros manuell hinzu. Beziehen Sie sich auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimental**-, **Deprecated**- und **Non-standard**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formalsyntax-Abschnitt: Der Inhalt für den Abschnitt _Formalsyntax_ wird mit dem Makro `\{{CSSSyntax}}` generiert. Dieses Makro ruft Daten von den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Formaldefinition-Abschnitt: Der Inhalt für den Abschnitt _Formaldefinition_ wird mit dem Makro `\{{CSSInfo}}` generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein geeigneter Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data` Repository ausgefüllt ist. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md) Seite für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilitätsabschnitte: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus dem Seiten-Frontmatter, um Daten in die _Specifications_ und _Browser-Kompatibilität_-Abschnitte einzufügen (dabei werden die Makros `\{{Specifications}}` und `\{{Compat}}` in diesen Abschnitten ersetzt).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [compatibility tables guide](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie die Inhalte auf der Seite mit einem einführenden Absatz, der die Eigenschaft nennt und erklärt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies beinhaltet den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Zuordnende Eigenschaften

Fügen Sie diesen Abschnitt nur für abgekürzte Eigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/animation), um alle zugehörigen ausgeschriebenen Eigenschaften aufzulisten.

## Syntax

Fügen Sie die gängigen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Teilwerte, die einen vollständigen Wert bilden.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie für jeden Teilwert einen Begriff und eine Definition hinzu.

- `subvalue1`
  - : Geben Sie eine Beschreibung des Teilwerts, seines Datentyps und was er repräsentiert, an.
- `subvalue2`
  - : Geben Sie eine Beschreibung des Teilwerts, seines Datentyps und was er repräsentiert, an.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft zu enthalten und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Barrierefreiheitshinweise, bewährte Verfahren und mögliche Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Wo zutreffend, können Sie auch Workarounds oder Lösungen einfügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
