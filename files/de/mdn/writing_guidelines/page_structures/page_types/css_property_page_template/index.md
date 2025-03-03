---
title: CSS-Eigenschaftsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

> **Note:** _Diesen Hinweisblock vor der Veröffentlichung entfernen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren "Seiten-Metadaten".
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameOfTheProperty
> slug: Web/CSS/NameOfTheProperty
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Der Wert `title` wird oben auf der Seite angezeigt. Das Titel-Format ist _NameOfTheProperty_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color) Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist der letzte Teil des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dieser wird als `Web/CSS/NameOfTheProperty` formatiert.
>     Beispielsweise ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color) Eigenschaft `Web/CSS/background-color`. Für eine Komponente mit mehreren Wörtern wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine verkürzte CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation) Eigenschaft `css-shorthand-property`, weil es sich um eine verkürzte Eigenschaft handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay) Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichnet den Status dieses Features. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch die Abfragezeichenfolge für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Anfang der Seite**

Einige Makroaufrufe erscheinen am Anfang des Inhaltsbereichs (unmittelbar unter den Seiten-Metadaten).
Diese Makros werden automatisch vom Toolchain hinzugefügt (Es ist nicht erforderlich, sie hinzuzufügen/zu entfernen):

> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Veraltet**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Nicht-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.

Sie sollten die folgenden Makros gemäß den untenstehenden Empfehlungen aktualisieren oder löschen:

> - `\{{CSSRef}}`: Dieses Makro muss auf jeder Seite zu CSS-Eigenschaften vorhanden sein. Es erzeugt eine geeignete CSS-Sidebar, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.

Statusheader-Makros nicht manuell bereitstellen. Verweisen Sie auf die Sektion ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.

Beispiele der **Experimentell**, **Veraltet** und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.

> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitt zur formalen Syntax: Der Inhalt für den Abschnitt _Formale Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitt zur formalen Definition: Der Inhalt für den Abschnitt _Formale Definition_ wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die entsprechende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datei im `mdn/data` Repository ausgefüllt wurde. Siehe die [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md) Seite für mehr Informationen.
> - Abschnitte Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (ersetzt dort die `\{{Specifications}}` und `\{{Compat}}` Makros).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft nennt und ihre Funktion beschreibt.
Dies sollte idealerweise aus ein oder zwei kurzen Sätzen bestehen.

## Ausprobieren

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die unter Verwendung des `\{{EmbedInteractiveExample}}` Makros hinzugefügt werden. Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für weitere Informationen.

## Einzelne Eigenschaften

Fügen Sie diesen Abschnitt nur für Abkürzungseigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/animation), um alle zugehörigen Langform-Eigenschaften aufzulisten.

## Syntax

Schließen Sie die üblichen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Subwerte, die einen kompletten Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert ein.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er repräsentiert, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er repräsentiert, hinzu.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft einzufügen und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, bewährte Verfahren und potenzielle Bedenken hinzu, auf die Entwickler beim Verwenden dieser Eigenschaft achten sollten. Sie können auch Problemlösungen oder Lösungen wo zutreffend einfügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Code-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für mehr Informationen.

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
> ### Verwenden der Fetch-API
>
> Beispiel von Fetch
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
> Für Beispiele zu dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft in Zusammenhang stehen. Für weitere Richtlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (year)
