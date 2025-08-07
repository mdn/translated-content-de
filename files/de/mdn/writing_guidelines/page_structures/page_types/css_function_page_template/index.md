---
title: CSS-Funktionsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten angemessen für die jeweilige Funktion aktualisiert werden. Beachten Sie die Anwesenheit (oder das Fehlen) von Klammern.
>
> ```md
> ---
> title: NameOfTheFunction()
> slug: Web/CSS/NameOfTheFunction
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.NameOfTheFunction
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titelformat ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow)-Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen der Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow)-Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Daten zur Browser-Kompatibilität für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` mit dem Abfrage-String für die Funktion im [Browser-Compat-Daten-Repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den _Other macros in the page_ Abschnitt dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden und Referenzseiten.
>     Siehe [Page structures: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Einzelheiten.
>
> ---
>
> **Top-of-the-page macros**
>
> Eine Reihe von Makroaufrufen erscheinen im oberen Bereich des Inhaltsteils (direkt unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies generiert ein **Nicht-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie keine Statusheader-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-standard**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Formaler Syntax-Abschnitt: Der Inhalt für den Abschnitt _Formal syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen unter Verwendung des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Spezifikationen und Browser-Kompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus dem Seiten-Frontmatter, um Daten in die Abschnitte _Specifications_ und _Browser-Kompatibilität_ einzufügen (ersetzt die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten jeweils).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und sagt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies beinhaltet den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Inkludieren Sie einen CSS-Codeblock, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispielen von Parametern, die die Funktion akzeptieren kann. Schließen Sie nur die Funktion selbst ein, nicht eine vollständige Erklärung, in der sie vorkommt. Zum Beispiel verwenden Sie `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies sollte betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Nutzung der Syntax.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie vor all diesen Fällen einen Kommentar hinzu, um den Anwendungsfall zu beschreiben und einen weiteren Kommentar, um die Parameter zu benennen und die Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten mit den Parametern übereinstimmen, die im Abschnitt "Parameters" aufgeführt sind.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte von genau einer leeren Zeile gefolgt sein.

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
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parameter

Listen Sie die Parameter, die die Funktion akzeptieren kann, als {{htmlelement("dl")}} auf. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formal syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, unter Verwendung des `optional_inline`-Abzeichens.
Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden, hinzu.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden, hinzu.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den Wert, der von der Funktion zurückgegeben wird. Beginnen Sie die Beschreibung mit dem Wort "Returns"; beispielsweise "Returns a `<number>` or `<dimension>`."

## Beschreibung

Dieser Abschnitt ist optional, wird aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen ganzen Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Verfahren und potenzielle Bedenken hinzu, derer sich Entwickler beim Verwenden dieser Eigenschaft bewusst sein sollten. Wo anwendbar, können Sie auch Lösungen oder Umgehungen einfügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der polygon()-Funktion
>
> Beispiel von polygon()
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
> Für Beispiele dieser Funktion, siehe [die Seite über basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Funktion beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibrichtlinien-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
