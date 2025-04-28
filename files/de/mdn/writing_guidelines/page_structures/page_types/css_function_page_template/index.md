---
title: CSS-Funktionsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

> **Note:** _Entfernen Sie diesen Notizblock vor der Veröffentlichung._
>
> ---
>
> **Seitenthemen:**
>
> Die Seitenthemen am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend der jeweiligen Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
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
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow)-Funktion einen Titel von _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow)-Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` durch den Abfragestring für die Funktion im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Prüfen Sie den Abschnitt _Other macros in the page_ dieses Notizblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makro-Aufrufen erscheinen oben im Inhaltsbereich (direkt unter den Seitenthemen).
> Diese Makros werden automatisch vom Werkzeugkette hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox hinter einer Voreinstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Abgekündigt**-Banner, das anzeigt, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dieses Makro generiert ein **Nicht-standardisiertes**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie keine Status-Header-Makros manuell an. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf die Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Abgekündigt** und **Nicht-standardisiert** Banner werden direkt nach diesem Notizblock angezeigt.
>
> ---
>
> **Andere Makros in der Seite**
>
> - Abschnitt über formale Syntax: Der Inhalt für den _Formalen Syntax_-Abschnitt wird mit dem `\{{CSSSyntax}}`-Makro erzeugt. Dieses Makro ruft Daten aus den Spezifikationen ab, indem das [@webref/css npm-package](https://www.npmjs.com/package/@webref/css) verwendet wird.
> - Abschnitte über Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seitenthemen, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (wodurch die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten ersetzt werden).
>
>   Beachten Sie bitte, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Notizblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem Einführungssatz, der die Funktion benennt und beschreibt, was sie macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Ausprobieren

Dieser Abschnitt wird vom `InteractiveExample`-Makro generiert.
Dies umfasst den Titel des Abschnitts "Ausprobieren" und den Code-Editor.
Siehe den [Abschnitt über interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Richtlinien zum Schreiben_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock ein, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele der Parameter, die die Funktion akzeptieren kann. Fügen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie auftritt. Verwenden Sie zum Beispiel `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: dies sollte betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Syntaxnutzung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie jedem solchen Fall einen Kommentar voran, um den Anwendungsfall zu beschreiben, und einen weiteren Kommentar, um die Parameter zu benennen und die Syntaxzeichen sowie die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten den Parametern entsprechen, die im Abschnitt "Parameter" aufgeführt sind.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte von genau einer leeren Zeile gefolgt werden.

Beispielsweise:

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

Listen Sie die Parameter, die die Funktion akzeptieren kann, als {{htmlelement("dl")}} auf. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Abzeichen verwenden.
Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts hinzu, falls vorhanden.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts hinzu, falls vorhanden.

> [!WARNING]
> Fügen Sie keine [Status-Makros innerhalb von Definitionen](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den Wert, der von der Funktion zurückgegeben wird. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; zum Beispiel, "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: wenn eine Funktion dies nicht tut, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und mögliche Bedenken hinzu, die Entwickler bei der Nutzung dieser Eigenschaft beachten sollten. Sie können auch Workarounds oder Lösungen einfügen, wo anwendbar.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift hinzufügen

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie [Code-Beispiele hinzugefügt werden](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
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

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Funktion beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
