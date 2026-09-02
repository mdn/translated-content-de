---
title: CSS-Funktionsseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seitendaten:**
>
> Die Metadaten oben auf der Seite definieren "Seitenmetadaten".
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
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titelformat ist _NameOfTheFunction()_.
>     Zum Beispiel hat die Funktion [`pow()`](/de/docs/Web/CSS/Reference/Values/pow) einen Titel von _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/Reference/Values/nameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die Funktion [`pow()`](/de/docs/Web/CSS/Reference/Values/pow) `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Kennzeichen zur Beschreibung des Status dieses Features. Ein Array, das eine oder mehrere der folgenden Optionen enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `css.types.NameOfTheFunction` durch den Abfragestring für die Funktion im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ in diesem Hinweisblock, um zu sehen, wie dieses Schlüssel-Wert-Paar für die Generierung von Inhalten für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ verwendet wird.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitendaten: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheinen am Anfang des Inhaltsbereichs (unmittelbar unter den Seitendaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentelles** Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — Dies generiert ein **Nicht-standardisiertes** Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Status-Header-Makros nicht manuell bereitstellen. Beziehen Sie sich auf den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimentell**, **Veraltet** und **Nicht-standardisiert** Banner werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitt Formale Syntax: Der Inhalt für den Abschnitt _Formale Syntax_ wird mit dem `\{{CSSSyntax}}` Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mithilfe des [@webref/css npm Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seitendaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (Ersetzen der `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten, beziehungsweise).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Vergessen Sie nicht, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz, der die Funktion benennt und beschreibt, was sie tut.
Dies sollte idealerweise ein bis zwei kurze Sätze umfassen.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample` Makro generiert.
Dieses enthält den Abschnittstitel "Probieren Sie es aus" und den Code-Editor.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispielen der Parameter, die die Funktion akzeptieren kann. Schließen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie vorkommt. Zum Beispiel verwenden Sie `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies soll betonen, dass wir hier keinen vollständigen, gültigen CSS-Code zeigen, sondern nur die Syntax-Verwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Vor allen solchen Fällen fügen Sie einen Kommentar hinzu, um den Anwendungsfall zu beschreiben, und einen weiteren Kommentar, um die Parameter zu benennen und die Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die im Kommentar angegebenen Parameternamen sollten mit den im Abschnitt "Parameter" aufgeführten Parametern übereinstimmen.

Der Kommentar zu jedem Aufrufmuster sollte genau von einer leeren Zeile gefolgt werden.

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

Listen Sie die Parameter auf, die die Funktion als {{htmlelement("dl")}} akzeptieren kann. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, wenn ein Parameter optional ist, indem Sie das `optional_inline` Badge verwenden.
Fügen Sie für jeden Parameter einen Begriff und eine Definition hinzu.

- `<custom-property-name>`
  - : Geben Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden.
- `<declaration-value>` {{optional_inline}}
  - : Geben Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden.

> [!WARNING]
> Fügen Sie keine [Status-Makros inline](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit dem Wort "Rückgabe"; zum Beispiel, "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Nutzen Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen ganzen Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Geben Sie Barrierefreiheitshinweise, Best Practices und potenzielle Bedenken an, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Workarounds oder Lösungen angeben, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der polygon() Funktion
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
> Für Beispiele zu dieser Funktion, siehe [die Seite über basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion verbunden sind. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in den _Schreibrichtlinien_.

- link1
- link2
- external_link (Jahr)
