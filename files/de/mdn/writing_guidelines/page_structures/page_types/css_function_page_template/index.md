---
title: CSS-Funktionsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen Notizblock vor der Veröffentlichung._
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der spezifischen Funktion aktualisiert werden. Beachten Sie die Anwesenheit (oder Abwesenheit) der Klammern.
>
> ```md
> ---
> title: NameOfTheFunction()
> slug: Web/CSS/NameOfTheFunction
> page-type: css-function
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.types.NameOfTheFunction
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow)-Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow)-Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zur Aktualisierung von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameOfTheFunction</code> mit dem Abfragezeichenstring für die Funktion im [Browser-kompat-Daten-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Other macros in the page_ in diesem Notizblock, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unter den Seitenmetadaten).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht notwendig, etwas hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [abgeraten](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standardisiertes**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der unten stehenden Richtlinien aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es erzeugt eine passende CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Geben Sie nicht manuell Statusheader-Makros an. Lesen Sie den Abschnitt ["Anleitung zur Aktualisierung von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten** und **Nicht-standardisierten** Banner werden direkt nach diesem Notizblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formale Syntax-Sektion: Der Inhalt für die _Formale Syntax_-Sektion wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Spezifikationen und Browser-Kompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seitenmetadaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (wodurch die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten ersetzt werden).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-kompat-Daten-Repository</a> erstellen oder aktualisieren müssen.
>   Siehe unser [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Notizblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und erklärt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Ausprobieren

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele vorgesehen, die mit dem `\{{EmbedInteractiveExample}}`-Makro hinzugefügt werden. Sie erstellen diese Beispiele im [mdn/interactive-examples repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock ein, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispielen der Parameter, die die Funktion akzeptieren kann. Fügen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie vorkommt. Zum Beispiel verwenden Sie `minmax(200px, 1fr)` und nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies sollte betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Syntaxnutzung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Vor allen solchen Fällen fügen Sie einen Kommentar hinzu, um den Anwendungsfall zu beschreiben, und einen weiteren Kommentar, um die Parameter zu benennen und die Syntax-Zeichensetzung und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten mit den im Abschnitt "Parameter" aufgeführten Parametern übereinstimmen.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte genau durch eine leere Zeile gefolgt werden.

Zum Beispiel:

```css
/* Without a fallback */
/* var( <custom-property-name> ) */
var(--custom-prop)

/* With an empty fallback */
/* var( <custom-property-name> , ) */
var(--custom-prop,)

/* With a fallback value */
/* var( <custom-property-name> , <declaration-value> ) */
var(--custom-prop, initial)
var(--custom-prop, #FF0000)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parameter

Listen Sie die Parameter, die die Funktion akzeptieren kann, als {{htmlelement("dl")}} auf. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Badge verwenden.
Fügen Sie einen Begriff und eine Definition für jeden Parameter ein.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts, falls vorhanden, ein.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts, falls vorhanden, ein.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; beispielsweise "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält die Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, weglassen Sie diesen gesamten Abschnitt.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Barrierefreiheitshinweise, Best Practices und potenzielle Probleme hinzu, derer Entwickler sich bei der Verwendung dieser Eigenschaft bewusst sein sollten. Sie können bei Bedarf auch Workarounds oder Lösungen einfügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden für das Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der polygon()-Funktion
>
> Beispiel für polygon()
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
> Für Beispiele dieser Funktion siehe [die Seite zu basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Funktion beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
