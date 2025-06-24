---
title: CSS-Funktions-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
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
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Format des Titels ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow) Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow) Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten der Browser-Kompatibilitätsdaten für die Funktion festgelegt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` durch den Abfrage-String für die Funktion im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Weitere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüsselwertpaar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheinen am Anfang des Inhaltsabschnitts (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Deprecated**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — erzeugt ein **Non-standard**-Banner, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Fügen Sie keine Status-Header-Makros manuell hinzu. Lesen Sie den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimental**, **Deprecated** und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Formale Syntax-Sektion: Der Inhalt für die _Formale Syntax_-Sektion wird mit dem `\{{CSSSyntax}}`-Makro erzeugt. Dieses Makro ruft Daten aus den Spezifikationen ab, indem es das [@webref/css npm package](https://www.npmjs.com/package/@webref/css) verwendet.
> - Spezifikations- und Browser-Kompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüsselwertpaar der Seiten-Metadaten, um Daten in die _Spezifikations_- und _Browser-Kompatibilitäts_-Sektionen einzufügen (anstelle der `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Sektionen).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz, der die Funktion benennt und beschreibt, was sie tut. Idealerweise sollte dies ein oder zwei kurze Sätze umfassen.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Abschnittstitel "Probieren Sie es aus" und den Code-Editor.
Siehe die Sektion [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispielen von Parametern, die die Funktion akzeptieren kann. Beziehen Sie nur die Funktion selbst ein, nicht eine komplette Deklaration, in der sie vorkommt. Beispielsweise verwenden Sie `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies sollte betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie allen solchen Fällen einen Kommentar hinzu, um den Anwendungsfall zu beschreiben, und einen weiteren Kommentar, um die Parameter zu benennen und die Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten den Parametern im Abschnitt "Parameter" entsprechen.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte genau von einer Leerzeile gefolgt werden.

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

Listen Sie die Parameter, die die Funktion annehmen kann, als einen {{htmlelement("dl")}} auf. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Abzeichen verwenden.
Beziehen Sie einen Begriff und eine Definition für jeden Parameter ein.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, sofern vorhanden, ein.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, sofern vorhanden, ein.

> [!WARNING]
> Fügen Sie keine [Inline-Statusmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den Wert, der von der Funktion zurückgegeben wird. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; zum Beispiel, "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie arbeitet. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Lösungen oder Umgehungen einfügen, wo dies zutrifft.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben werden.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie die Links zu den Beispielen auf anderen Seiten einfügen. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der polygon() Funktion
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele zu dieser Funktion siehe [die Seite über basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion verwandt sind. Für weitere Richtlinien, siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
