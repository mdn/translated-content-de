---
title: Vorlage für CSS-Funktionsseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiteneigenschaften (Front matter):**
>
> Die Seiteneigenschaften am Anfang der Seite werden zur Definition der "Seitenmetadaten" verwendet.
> Die Werte sollten entsprechend der spezifischen Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
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
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/Reference/Values/pow)-Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird formatiert als `Web/CSS/Reference/Values/nameOfTheFunction`. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/Reference/Values/pow)-Funktion `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` durch den Abfragestring für die Funktion im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweises, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Specifications_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitendesigns: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros an der Spitze der Seite**
>
> Eine Reihe von Makro-Aufrufen erscheint am oberen Rand des Inhaltsbereichs (direkt unter den Seiteneigenschaften).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell und in Firefox durch eine Präferenz versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht standardmäßig**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie keine Status-Header-Makros manuell hinzu. Sehen Sie im Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) nach, um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht standardmäßig**-Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Abschnitt "Formal syntax": Der Inhalt für den Abschnitt _Formal syntax_ wird mit dem Makro `\{{CSSSyntax}}` generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte "Specifications" und "Browser-Kompatibilität": Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiteneigenschaften, um Daten in die Abschnitte _Specifications_ und _Browser-Kompatibilität_ einzufügen (wobei die Makros `\{{Specifications}}` und `\{{Compat}}` in diesen Abschnitten ersetzt werden).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repository</a> erstellen oder aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und sagt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Ausprobieren

Dieser Abschnitt wird durch das `InteractiveExample`-Makro erzeugt.
Dies schließt den Titel des Abschnitts "Ausprobieren" und den Code-Editor ein.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock ein, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele für Parameter, die die Funktion akzeptieren kann. Fügen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie auftritt. Zum Beispiel verwenden Sie `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies soll betonen, dass hier kein vollständiger gültiger CSS-Code gezeigt wird, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Vor allen solchen Fällen fügen Sie einen Kommentar hinzu, um den Anwendungsfall zu beschreiben und einen weiteren Kommentar, um die Parameter zu benennen und die Syntax-Zeichensetzung und die Reihenfolge der Parameter hervorzuheben. Die Namen der Parameter im Kommentar sollten mit den im Abschnitt "Parameters" aufgeführten Parametern übereinstimmen.

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
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parameter

Listen Sie die Parameter auf, die die Funktion als ein {{htmlelement("dl")}} akzeptieren kann. Listen Sie sie in der Reihenfolge auf, in der sie im _Formal syntax_-Abschnitt erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Badge verwenden.
Schließen Sie für jeden Parameter einen Begriff und eine Definition ein.

- `<custom-property-name>`
  - : Enthalten Sie eine Beschreibung des Parameters, seinen Datentyp und ggf. seinen Standardwert.
- `<declaration-value>` {{optional_inline}}
  - : Enthalten Sie eine Beschreibung des Parameters, seinen Datentyp und ggf. seinen Standardwert.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den Wert, der von der Funktion zurückgegeben wird. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; zum Beispiel, "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen ganzen Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Barrierefreiheitsrichtlinien, bewährte Verfahren und potenzielle Bedenken hinzu, die Entwickler beachten sollten, während sie diese Eigenschaft verwenden. Sie können auch Umgehungen oder Lösungen einfügen, wo anwendbar.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Einen beschreibenden Titel hinzufügen

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Links zu den Beispielen auf anderen Seiten einfügen können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der polygon() Funktion
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
> Für Beispiele zu dieser Funktion, siehe [die Seite zu basic-shape](https://example.org/).
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
- external_link (Jahr)
