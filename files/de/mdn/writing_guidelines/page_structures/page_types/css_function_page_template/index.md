---
title: CSS-Funktionsvorlagenseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **Hinweis:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Page Front Matter:**
>
> Die Front Matter am Anfang der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
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
>   - : Der Wert von `title` wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheFunction()_.
>     Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow)-Funktion den Titel _pow()_.
> - **slug**
>   - : Der Wert von `slug` ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser wird im Format `Web/CSS/NameOfTheFunction` angegeben. Beachten Sie, dass die Klammern im `slug` weggelassen werden.
>     Zum Beispiel ist der `slug` für die [`pow()`](/de/docs/Web/CSS/pow)-Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Beschreibt den Status dieses Features. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird anhand der Daten zur Browser-Kompatibilität für das Feature automatisch gesetzt. Siehe ["Anleitung zur Hinzufügung oder Aktualisierung des Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameOfTheFunction</code> mit der Abfragezeichenkette für die Funktion im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/types). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ in diesem Hinweisblock, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte in den Abschnitten _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsabschnitts (direkt unterhalb der Front Matter der Seite).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimentell**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Voreinstellung in Firefox verborgen wird, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das anzeigt, dass die Nutzung dieser Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}`: Dieses Makro erzeugt ein **Nicht standardisiert**-Banner, das anzeigt, dass das Feature nicht Teil einer offiziellen Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Hinweisen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Entfernen Sie das `\{{MDNSidebar}}`-Makro, wenn Sie diese Vorlage verwenden.
>
> Status-Header-Makros nicht manuell bereitstellen. Verweisen Sie auf den Abschnitt ["Anleitung zur Hinzufügung oder Aktualisierung des Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht standardisiert**-Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitt zur formalen Syntax: Der Inhalt für den Abschnitt _Formale Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen vom [@webref/css npm package](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitte zu Spezifikationen und Browser-Kompatibilität: Das Build-Tool nutzt automatisch das Schlüssel-Wert-Paar `browser-compat` aus der Front Matter, um Daten in den Abschnitten _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (ersetzt dabei die `\{{Specifications}}` und `\{{Compat}}`-Makros in diesen Abschnitten).
>
>   Beachten Sie, dass möglicherweise zuerst ein Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repository</a> erstellt/aktualisiert werden muss. Siehe unseren [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zur Hinzufügung oder Bearbeitung von Einträgen.
>
> _Vergessen Sie nicht, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz, in dem die Funktion benannt und beschrieben wird, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Probieren Sie es aus

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die mithilfe des `\{{EmbedInteractiveExample}}`-Makros hinzugefügt werden. Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele für Parameter, die von der Funktion akzeptiert werden können.
Nur die Funktion selbst einbeziehen, keine vollständige Deklaration, in der sie vorkommt. Zum Beispiel verwenden Sie `minmax(200px, 1fr)` und nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntax-Zeilen nicht mit Semikolons: Dies soll betonen, dass hier keine vollständigen gültigen CSS-Codes gezeigt werden, sondern nur die Syntax-Verwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion haben kann. Vor jedem dieser Fälle sollte ein Kommentar den Verwendungszweck beschreiben und ein weiterer Kommentar die Parameter benennen und Syntaxzeichen sowie die Reihenfolge der Parameter hervorheben. Die Namen der Parameter im Kommentar sollten mit denen übereinstimmen, die im Abschnitt „Parameter“ aufgelistet sind.

Der Kommentar, der jedes Aufrufmuster zeigt, sollte von genau einer leeren Zeile gefolgt werden.

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

Listen Sie die Parameter, die die Funktion akzeptieren kann, als {{htmlelement("dl")}} auf. Folgen Sie der Reihenfolge, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Badge verwenden.
Für jeden Parameter sollte ein Begriff und eine Definition enthalten sein.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts (falls vorhanden) ein.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seines Datentyps und seines Standardwerts (falls vorhanden) ein.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert.
Beginnen Sie die Beschreibung mit dem Wort "Rückgabe", zum Beispiel: "Rückgabe eines `<number>` oder `<dimension>`."

## Beschreibung

Dieser Abschnitt ist optional, aber empfehlenswert. Er enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erläutern und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen ganzen Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Leitlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken ein, die Entwickler beim Verwenden dieser Eigenschaft berücksichtigen sollten. Sie können auch Umgehungslösungen oder Lösungen, wo zutreffend, hinzufügen.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) enthalten, die das Beispiel benennt.
Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt „Ein einfaches Beispiel“ nichts über das tatsächliche Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Code-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“, unter der Sie auf die Beispiele auf anderen Seiten verlinken. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Verwendung der polygon()-Funktion
>
> Beispiel für polygon()
>
> ### Weitere Beispiele
>
> Links zu weiteren Beispielen auf anderen Seiten
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite und keine auf dieser Seite haben:
>
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie nur die Links direkt unter der H2-Überschrift „Beispiele“ hinzu. Zum Beispiel:
>
> ```md
> ## Examples
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

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit der aktuellen Funktion zusammenhängen. Für weitere Leitlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in der _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
