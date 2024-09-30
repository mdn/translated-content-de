---
title: CSS function page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter oben auf der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten für die jeweilige Funktion entsprechend aktualisiert werden. Beachten Sie das Vorhandensein (oder Nichtvorhandensein) von Klammern.
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
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameOfTheFunction</code> mit dem Abfrage-String für die Funktion im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Andere Makros in der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter dem Seiten-Frontmatter).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es besteht keine Notwendigkeit, hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-Standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Lesen Sie den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet**, und **Nicht-Standard**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros in der Seite**
>
> - Formale Syntax-Sektion: Der Inhalt für die _Formale Syntax_-Sektion wird unter Verwendung des `\{{CSSSyntax}}`-Makros erzeugt. Dieses Makro ruft Daten aus den Spezifikationen ab, indem es das [@webref/css npm package](https://www.npmjs.com/package/@webref/css) verwendet.
> - Abschnitte Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus dem Seiten-Frontmatter, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (dabei ersetzt es die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und erklärt, was sie tut.
Idealerweise sollte dies ein oder zwei kurze Sätze umfassen.

## Ausprobieren

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die mit dem `\{{EmbedInteractiveExample}}`-Makro hinzugefügt werden. Sie erstellen diese Beispiele im [mdn/interactive-examples repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispielen von Parametern, die die Funktion annehmen kann. Beziehen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie vorkommt. Verwenden Sie z.B. `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies soll betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie allen solchen Fällen vorausgehend einen Kommentar hinzu, um den Anwendungsfall zu beschreiben und einen weiteren Kommentar, um die Parameter zu benennen und die Syntax-Zeichen und Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten mit den im Abschnitt "Parameter" aufgeführten Parametern übereinstimmen.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte genau von einer Leerzeile gefolgt werden.

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

Listen Sie die Parameter auf, die die Funktion als {{htmlelement("dl")}} akzeptieren kann. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Badge verwenden.
Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.

- `<custom-property-name>`
  - : Geben Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts, falls vorhanden, an.
- `<declaration-value>` {{optional_inline}}
  - : Geben Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts, falls vorhanden, an.

### Rückgabewert

Beschreiben Sie den Wert, der von der Funktion zurückgegeben wird. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; zum Beispiel: "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erläutern und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Lösungen oder Workarounds einfügen, wenn anwendbar.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unser Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Funktion polygon()
>
> Beispiel der polygon() Funktion
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
> Für Beispiele für diese Funktion siehe [die Seite über basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Funktion beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Writer's Guide_.

- link1
- link2
- external_link (Jahr)
