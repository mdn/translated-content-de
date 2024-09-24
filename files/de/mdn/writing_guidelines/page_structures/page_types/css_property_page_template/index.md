---
title: CSS-Eigenschaftsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Page front matter:**
>
> Der Frontmatter-Teil am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die spezielle Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> page-type: css-property OR css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Format des Titels ist _NameOfTheProperty_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft einen Titel von _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird formatiert als `Web/CSS/NameOfTheProperty`.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft `Web/CSS/background-color`. Für eine Komponente mit mehreren Wörtern wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn/HTML/Getting_started`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzschreibweise der CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation)-Eigenschaft `css-shorthand-property`, weil es sich um eine Kurzschrift handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Daten zur Browserkompatibilität für das Feature gesetzt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> mit dem Abfrage-String für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieser Schlüssel-Wert zur Generierung von Inhalten für die _Specifications_ und _Browser compatibility_-Abschnitte verwendet wird.
>
> ---
>
> **Top-of-the-page macros**
>
> Eine Anzahl von Makroaufrufen erscheint oben im Inhaltsabschnitt (direkt unter dem Frontmatter der Seite).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keinen Bedarf, zu entfernen oder hinzufügen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und sich in Firefox hinter einer Voreinstellung verbirgt, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Deprecated**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Non-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend dem Rat unten aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschaftsseite vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimental**-, **Deprecated**- und **Non-standard**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Other macros in the page**
>
> - Formale Syntax-Sektion: Der Inhalt der _Formal syntax_-Sektion wird unter Verwendung des `\{{CSSSyntax}}`-Makros generiert. Dieses Makro ruft Daten aus den Spezifikationen unter Verwendung des [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab.
> - Formale Definition-Sektion: Der Inhalt der _Formal definition_-Sektion wird über das `\{{CSSInfo}}`-Makro generiert. Um Daten für diesen Abschnitt zu haben, müssen Sie sicherstellen, dass ein geeigneter Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datendatei im `mdn/data`-Repository ausgefüllt wurde. Weitere Informationen finden Sie auf der Seite [Properties](https://github.com/mdn/data/blob/main/css/properties.md).
> - Spezifikationen und Browserkompatibilitätsabschnitte: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus dem Frontmatter der Seite, um Daten in die _Specifications_ und _Browser compatibility_-Abschnitte einzufügen (ersetzt dabei die `\{{Specifications}}` und `\{{Compat}}` Makros in den jeweiligen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz, der die Eigenschaft benennt und beschreibt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Testen Sie es

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die mit dem `\{{EmbedInteractiveExample}}`-Makro hinzugefügt wurden. Sie erstellen diese Beispiele im [mdn/interactive-examples repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) unserer _Schreibrichtlinien_.

## Einzelne Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschreibweisen von Eigenschaften hinzu, wie [animation](/de/docs/Web/CSS/animation), um alle zugehörigen Langform-Eigenschaften aufzulisten.

## Syntax

Fügen Sie die gängigen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Teilwerte, die zusammen einen vollständigen Wert bilden.

```css
/* Fügen Sie einen Codeblock ein, der gängige Anwendungsfälle zeigt */
/* oder Kategorien von Werten */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Teilwert ein.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Teilwertes, seines Datentyps und was er darstellt ein.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Teilwertes, seines Datentyps und was er darstellt ein.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft einzufügen und zu erläutern, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und mögliche Bedenken hinzu, die Entwickler beachten sollten, während sie diese Eigenschaft verwenden. Sie können auch Umgehungslösungen oder Lösungen einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Examples" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele zu dieser API siehe [die Seite zur fetch()-Funktion](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browserkompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
