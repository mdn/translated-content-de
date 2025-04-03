---
title: CSS Funktions-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 6d54d3150f745b8c10cf739b24cb3d48ef6a53c4
---

> **Note:** _Entfernen Sie diesen Hinweisblock, bevor die Veröffentlichung erfolgt._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend der speziellen Funktion aktualisiert werden. Beachten Sie das Vorhandensein (oder Fehlen) von Klammern.
>
> ```md
> ---
> title: NameDerFunktion()
> slug: Web/CSS/NameDerFunktion
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.NameDerFunktion
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameDerFunktion()_. Zum Beispiel hat die [`pow()`](/de/docs/Web/CSS/pow) Funktion den Titel _pow()_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameDerFunktion` formatiert. Beachten Sie das Fehlen von Klammern im Slug. Zum Beispiel ist der Slug für die [`pow()`](/de/docs/Web/CSS/pow) Funktion `Web/CSS/pow`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Funktionen ist `css-function`.
> - **status**
>   - : Flags, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.types.NameDerFunktion</code> mit der Abfragezeichenfolge für die Funktion im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Prüfen Sie den Abschnitt _Andere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhalts der Seite (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist. Wenn die Technologie experimentell ist und sich in Firefox hinter einer Präferenz verbirgt, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Nicht-Standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Anweisungen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Seite vorhanden sein. Es generiert eine passende CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags. Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Stellen Sie keine Status-Header-Makros manuell bereit. Siehe den Abschnitt ["Wie Funktionsstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der **Experimentell**, **Veraltet** und **Nicht-Standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitt zur formalen Syntax: Der Inhalt für den Abschnitt _Formale Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (wodurch die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten ersetzt werden).
>
>   Beachten Sie, dass Sie möglicherweise zuerst ein Eintrag für die Funktion und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitätsdaten-Repo</a> erstellen/aktualisieren müssen. Siehe unseren [Leitfaden zu Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Funktion benennt und erklärt, was sie tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert. Dies beinhaltet den Abschnittstitel "Probieren Sie es aus" und den Code-Editor. Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Syntax

Fügen Sie einen CSS-Codeblock hinzu, um die Hauptanwendungsfälle der Syntax zu zeigen, einschließlich Beispiele für Parameter, die die Funktion akzeptieren kann. Schließen Sie nur die Funktion selbst ein, nicht eine vollständige Deklaration, in der sie vorkommt. Verwenden Sie zum Beispiel `minmax(200px, 1fr)`, nicht `grid-template-columns: minmax(min-content, 300px)`.

Beenden Sie die Syntaxzeilen nicht mit Semikolons: dies soll betonen, dass wir hier keinen vollständigen gültigen CSS-Code zeigen, sondern nur die Syntaxverwendung.

Zeigen Sie alle Aufrufmuster, die die Funktion annehmen kann. Stellen Sie vor alle diese Fälle einen Kommentar, um den Anwendungsfall zu beschreiben, und einen weiteren Kommentar, um die Parameter zu benennen und die Syntaxzeichen und die Reihenfolge der Parameter hervorzuheben. Die Parameternamen im Kommentar sollten den Parametern in der "Parameter"-Sektion entsprechen.

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

Listen Sie die Parameter auf, die die Funktion als {{htmlelement("dl")}} akzeptieren kann. Listen Sie sie in der Reihenfolge auf, in der sie im Abschnitt _Formale Syntax_ erscheinen. Geben Sie an, ob ein Parameter optional ist, indem Sie das `optional_inline`-Abzeichen verwenden. Fügen Sie einen Begriff und eine Definition für jeden Parameter hinzu.

- `<custom-property-name>`
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert ein, falls vorhanden.
- `<declaration-value>` {{optional_inline}}
  - : Fügen Sie eine Beschreibung des Parameters, seinen Datentyp und seinen Standardwert ein, falls vorhanden.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

### Rückgabewert

Beschreiben Sie den von der Funktion zurückgegebenen Wert. Beginnen Sie die Beschreibung mit dem Wort "Gibt zurück"; zum Beispiel, "Gibt ein `<number>` oder `<dimension>` zurück."

## Beschreibung

Dieser Abschnitt ist optional, aber empfohlen. Es enthält eine Beschreibung der Funktion und erklärt, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Funktion hinzuzufügen.

## Formale Syntax

Nicht alle Funktionen haben eine formale Syntax: Wenn eine Funktion keine hat, lassen Sie diesen gesamten Abschnitt weg.

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Schließen Sie Richtlinien zur Barrierefreiheit, bewährte Verfahren und potenzielle Bedenken ein, auf die Entwickler beim Verwenden dieser Eigenschaft achten sollten. Sie können auch Umgehungen oder Lösungen einfügen, wo zutreffend.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite ein und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwenden der polygon() Funktion
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links einfach direkt unter der H2-Überschrift "Beispiele" ein. Zum Beispiel:
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

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion zusammenhängen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
