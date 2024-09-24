---
title: CSS-Funktionsseitentemplate
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
> Die Frontmatter am oberen Rand der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend der jeweiligen Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
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
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titelformat ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow) Funktion einen Titel von _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow) Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browserkompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert."](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameOfTheFunction</code> durch die Abfragezeichenfolge für die Funktion im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den _Andere Makros auf der Seite_-Abschnitt dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browserkompatibilität_ zu generieren.
>
> ---
>
> **Oben auf der Seite Makros**
>
> In der Inhaltssektion (unmittelbar unter dem Seiten-Frontmatter) erscheinen einige Makroaufrufe.
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (Sie müssen sie nicht hinzufügen/entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) hinzufügen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — Dieses generiert ein **Nicht-standardmäßig**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros entsprechend der unten stehenden Hinweise aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Geben Sie die Statusheader-Makros nicht manuell an. Beachten Sie den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert."](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentellen**, **Veralteten**, und **Nicht-standardmäßigen** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formale Syntaxsektion: Der Inhalt für die _Formale Syntax_ Sektion wird mit dem `\{{CSSSyntax}}` Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Spezifikationen und Browserkompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus der Seiten-Frontmatter, um Daten in die _Spezifikationen_- und _Browserkompatibilitäts_-Sektionen einzufügen (dabei werden die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Sektionen entsprechend ersetzt).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen, wie Sie Einträge hinzufügen oder bearbeiten.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und beschreibt, was sie macht.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele vorgesehen, die mit dem `\{{EmbedInteractiveExample}}` Makro hinzugefügt werden. Sie erstellen diese Beispiele im [mdn/interactive-examples Repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele von Parametern, die die Funktion akzeptieren kann. Beziehen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie vorkommt. Verwenden Sie zum Beispiel `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies sollte betonen, dass wir hier keinen vollständigen validen CSS-Code zeigen, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie allen solchen Fällen einen Kommentar voran, um den Anwendungsfall zu beschreiben und einen weiteren Kommentar, um die Parameter zu benennen sowie Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten mit den in der "Parameter"-Sektion gelisteten Parametern übereinstimmen.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte genau von einer leeren Zeile gefolgt werden.

Zum Beispiel:

```css
/* Ohne Rückfallwert */
/* var( <custom-property-name> ) */
var(--custom-prop)

/* Mit einem leeren Rückfallwert */
/* var( <custom-property-name> , ) */
var(--custom-prop,)

/* Mit einem Rückfallwert */
/* var( <custom-property-name> , <declaration-value> ) */
var(--custom-prop, initial)
var(--custom-prop, #FF0000)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parameter

Listen Sie die Parameter, die die Funktion akzeptieren kann, als {{htmlelement("dl")}} auf. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline` Badge verwenden.
Fügen Sie für jeden Parameter einen Begriff und eine Definition ein.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts (falls vorhanden) hinzu.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts (falls vorhanden) hinzu.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit dem Wort "Liefert"; zum Beispiel "Liefert eine `<number>` oder `<dimension>`."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsbeispiele für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Methoden und mögliche Bedenken hinzu, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Sie können auch Umgehungen oder Lösungen einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie Sie [Code-Beispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie einfach die Links direkt unter der H2-Überschrift "Beispiele" hinzu. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> Für Beispiele dieser Funktion, siehe [die Seite zu basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Browserkompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Funktion beziehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
