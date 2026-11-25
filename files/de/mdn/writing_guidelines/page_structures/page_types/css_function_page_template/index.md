---
title: Vorlage für Seiten zu CSS-Funktionen
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 8e660776b8b6557d4166f97bc1a8f26e056e7362
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte an die jeweilige Funktion an. Achten Sie darauf, ob Klammern vorhanden sind oder nicht.
>
> ```md
> ---
> title: nameOfTheFunction()
> slug: Web/CSS/Reference/Values/nameOfTheFunction
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.nameOfTheFunction
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der Wert von `title` wird oben auf der Seite angezeigt. Das Format des Titels ist _NameOfTheFunction()_.
>     Beispielsweise hat die Funktion [`pow()`](/de/docs/Web/CSS/Reference/Values/pow) den Titel _pow()_.
> - **slug**
>   - : Der Wert von `slug` ist der letzte Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat das Format `Web/CSS/Reference/Values/nameOfTheFunction`. Beachten Sie, dass der Slug keine Klammern enthält.
>     Beispielsweise lautet der Slug für die Funktion [`pow()`](/de/docs/Web/CSS/Reference/Values/pow) `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : Der Wert von `page-type` für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Kennzeichnungen für den Status dieses Features. Das Array kann einen oder mehrere der folgenden Werte enthalten: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Weitere Informationen finden Sie unter [„Hinzufügen oder Aktualisieren von Feature-Status“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` durch den Abfragestring für die Funktion im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/tree/main/css/types). Im Abschnitt _Weitere Makros auf der Seite_ dieses Hinweisblocks erfahren Sie, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu erzeugen.
> - **sidebar**
>   - : Für alle CSS-Leitfaden- und Referenzseiten lautet dieser Wert `cssref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Frontmatter der Seite) stehen mehrere Makroaufrufe.
> Diese Makros werden automatisch von der Toolchain hinzugefügt (Sie müssen sie weder hinzufügen noch entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt einen Hinweis **Experimentell**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — dieses Makro erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [„Hinzufügen oder Aktualisieren von Feature-Status“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell**, **Veraltet** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Abschnitt „Formale Syntax“: Der Inhalt des Abschnitts _Formale Syntax_ wird mit dem Makro `\{{CSSSyntax}}` erzeugt. Dieses Makro ruft Daten aus den Spezifikationen mithilfe des [npm-Pakets @webref/css](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte „Spezifikationen“ und „Browser-Kompatibilität“: Das Build-Tool verwendet automatisch das Schlüssel-Wert-Paar `browser-compat` aus dem Frontmatter der Seite, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (und ersetzt dabei die Makros `\{{Specifications}}` beziehungsweise `\{{Compat}}` in diesen Abschnitten).
>
>   Möglicherweise müssen Sie zunächst im <a href="https://github.com/mdn/browser-compat-data">Repository für Browser-Kompatibilitätsdaten</a> einen Eintrag für die Funktion und ihre Spezifikation erstellen oder aktualisieren.
>   Informationen zum Hinzufügen oder Bearbeiten von Einträgen finden Sie in unserem [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der die Funktion nennt und beschreibt, was sie tut.
Idealerweise besteht er aus einem oder zwei kurzen Sätzen.

## Ausprobieren

Dieser Abschnitt wird vom Makro `InteractiveExample` erzeugt.
Es fügt die Abschnittsüberschrift „Ausprobieren“ und den Code-Editor ein.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) unserer _Schreibrichtlinien_.

## Zugehörige Eigenschaften und Funktionen

Führen Sie die CSS-Eigenschaften und -Funktionen auf, die diese Funktion in ihren Wertdefinitionen (oder als Parameter) akzeptieren.

Zum Beispiel:

```md
This function is accepted in values for the following CSS properties:

- {{cssxref("filter")}}
- {{cssxref("background-filter")}}
```

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, der die wichtigsten Anwendungsfälle der Syntax zeigt, einschließlich Beispielen für Parameter, die die Funktion akzeptieren kann. Zeigen Sie nur die Funktion selbst, nicht eine vollständige Deklaration, in der sie vorkommt. Verwenden Sie beispielsweise `minmax(200px, 1fr)` statt `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: So wird deutlich, dass hier kein vollständiger, gültiger CSS-Code gezeigt wird, sondern nur die Verwendung der Syntax.

Zeigen Sie alle Aufrufmuster, die die Funktion unterstützt. Stellen Sie jedem Aufrufmuster einen Kommentar voran, der den Anwendungsfall beschreibt, und einen weiteren Kommentar, der die Parameter benennt sowie die Syntaxzeichen und die Reihenfolge der Parameter hervorhebt. Die Parameternamen im Kommentar sollten mit den Parametern im Abschnitt „Parameter“ übereinstimmen.

Auf den Kommentar zu jedem Aufrufmuster sollte genau eine Leerzeile folgen.

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

Führen Sie die Parameter, die die Funktion akzeptiert, als {{htmlelement("dl")}} auf. Ordnen Sie sie in der Reihenfolge an, in der sie im Abschnitt _Formale Syntax_ erscheinen. Kennzeichnen Sie optionale Parameter mit dem Badge `optional_inline`.
Geben Sie für jeden Parameter einen Begriff und eine Definition an.

- `<custom-property-name>`
  - : Beschreiben Sie den Parameter, seinen Datentyp und gegebenenfalls seinen Standardwert.
- `<declaration-value>` {{optional_inline}}
  - : Beschreiben Sie den Parameter, seinen Datentyp und gegebenenfalls seinen Standardwert.

> [!WARNING]
> Fügen Sie auf CSS-Seiten keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) hinzu.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit „Gibt zurück“; beispielsweise: „Gibt einen `<number>`- oder `<dimension>`-Wert zurück.“

## Beschreibung

Dieser Abschnitt ist optional, wird aber empfohlen. Er beschreibt die Funktion und erklärt ihre Funktionsweise. Erläutern Sie hier verwandte Begriffe und nennen Sie Anwendungsfälle für die Funktion.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax. Falls eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Barrierefreiheit

Dieser Abschnitt ist optional. Beschreiben Sie Richtlinien zur Barrierefreiheit, Best Practices und mögliche Probleme, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Gegebenenfalls können Sie auch Umgehungslösungen oder andere Lösungen nennen.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift hinzufügen

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Halten Sie die Überschrift kurz. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Wenn diese Seite einige Beispiele enthält und weitere Beispiele auf einer anderen Seite stehen:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu. Ergänzen Sie am Ende eine weitere H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the polygon() function
>
> Example of polygon()
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern platzieren Sie die Links direkt unter der H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this function, see [the page on basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion zusammenhängen. Weitere Hinweise finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Schreibstilleitfadens_.

- Link 1
- Link 2
- Externer Link (Jahr)
