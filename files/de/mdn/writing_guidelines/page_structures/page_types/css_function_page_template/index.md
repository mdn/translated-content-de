---
title: Vorlagenseite für CSS-Funktionen
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
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
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow) Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameOfTheFunction` formatiert. Beachten Sie das Fehlen von Klammern im Slug.
>     Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow) Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Markierungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameOfTheFunction</code> durch den Abfragezeichenfolgenwert für die Funktion im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalt für die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte zu generieren.
>
> ---
>
> **Makros oben auf der Seite**
>
> Eine Reihe von Makroaufrufen erscheint oben im Inhaltsbereich (unmittelbar unterhalb der Seiten-Metadaten).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimental**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Einstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag für sie auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Deprecated**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dies erzeugt ein **Non-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der untenstehenden Ratschläge aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Stellen Sie Header-Makros für Statustitel nicht manuell bereit. Verweisen Sie auf den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die **Experimental**, **Deprecated** und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitte zur formalen Syntax: Der Inhalt des Abschnitts _Formale Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten von den Spezifikationen mithilfe des [@webref/css npm-Pakets](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte zu Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (dabei werden die `\{{Specifications}}`- und `\{{Compat}}` Makros in diesen Abschnitten ersetzt).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und beschreibt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

_Dieser Titel wird automatisch vom Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele vorgesehen, die mit dem Makro `\{{EmbedInteractiveExample}}` hinzugefügt werden. Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibleitlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele der Parameter, die die Funktion akzeptieren kann. Nur die Funktion selbst einfügen, nicht eine vollständige Deklaration, in der sie auftritt. Verwenden Sie zum Beispiel `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: Dies sollte betonen, dass hier kein vollständiger gültiger CSS-Code gezeigt wird, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Fügen Sie vor allen solchen Fällen einen Kommentar hinzu, um den Anwendungsfall zu beschreiben und einen weiteren Kommentar, um die Parameter zu benennen und Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten mit den im Abschnitt "Parameter" aufgeführten Parametern übereinstimmen.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte von genau einer Leerzeile gefolgt werden.

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

Listen Sie die Parameter auf, die die Funktion als {{htmlelement("dl")}} akzeptieren kann. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, mit dem `optional_inline`-Abzeichen.
Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden, hinzu.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert, falls vorhanden, hinzu.

> [!WARNING]
> Fügen Sie auf CSS-Seiten keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) hinzu.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit dem Wort "Retournieren"; zum Beispiel, "Retournieren Sie ein `<number>` oder `<dimension>`."

## Beschreibung

Dieser Abschnitt ist optional, aber empfehlenswert. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsbeispiele für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Enthalten Sie Richtlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken, die Entwickler beachten sollten, wenn Sie diese Eigenschaft verwenden. Sie können auch Lösungen oder Workarounds hinzufügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte präzise sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden dazu, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und einige weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
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
> Für Beispiele dieser Funktion siehe [die Seite über basic-shape](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Referenzlinks und Leitfäden zu der aktuellen Funktion hinzu. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in der _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
