---
title: CSS-Eigenschaftsseite Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.NameOfTheProperty
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheProperty_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) Eigenschaft einen Titel von _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert als `Web/CSS/NameOfTheProperty`.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) Eigenschaft `Web/CSS/background-color`. Bei einem mehrfachen Komponentennamen wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der Wert `page-type` für CSS-Eigenschaften ist `css-property`. Für eine verkürzte CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation) Eigenschaft `css-shorthand-property`, da es sich um eine verkürzte Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay) Eigenschaft `css-property` ist.
> - **status**
>   - : Markierungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Begriffe enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch den Abfrage-String für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden und Referenzseiten.
>     Siehe [Seitenelemente: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makro-Aufrufen erscheinen am Anfang des Inhaltsbereichs (unmittelbar unter den Seitenmetadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentelles** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox hinter einer Präferenz versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltetes** Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-standardisiertes** Banner, das darauf hinweist, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Anweisungen aktualisieren oder löschen:
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formale Syntaxsektion: Der Inhalt für die _Formale Syntax_ Sektion wird mit dem `\{{CSSSyntax}}` Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab.
> - Formale Definitionssektion: Der Inhalt für die _Formale Definitions_ Sektion wird mit dem `\{{CSSInfo}}` Makro generiert. Damit diese Sektion Daten hat, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datei im `mdn/data` Repository ausgefüllt wurde. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md) Seite für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seitenmetadaten, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Sektionen einzufügen (wobei die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Sektionen ersetzt werden).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und deren Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft benennt und beschreibt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Ausprobieren

Dieser Abschnitt wird durch das `InteractiveExample` Makro generiert.
Dies beinhaltet den "Ausprobieren" Abschnittstitel und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Bestandteileigenschaften

Fügen Sie diesen Abschnitt nur für verkürzte Eigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/Reference/Properties/animation), um alle zugehörigen ausführlichen Eigenschaften aufzulisten.

## Syntax

Beinhalten Sie die üblichen Anwendungsfälle als Codeblock und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert ein.

- `subvalue1`
  - : Eine Beschreibung des Subwerts, dessen Datentyp und was er repräsentiert.
- `subvalue2`
  - : Eine Beschreibung des Subwerts, dessen Datentyp und was er repräsentiert.

> [!WARNING]
> Fügen Sie auf CSS-Seiten keine [inline Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft einzuschließen und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erläutern und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Zugänglichkeit

Dies ist ein optionaler Abschnitt. Fügen Sie Zugänglichkeitsrichtlinien, Best Practices und potenzielle Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch, wo zutreffend, Workarounds oder Lösungen einschließen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Beispielsweise:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Beispielsweise:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
