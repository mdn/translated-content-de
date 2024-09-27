---
title: CSS Eigenschaftsseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{MDNSidebar}}

> **Note:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seitenmetadaten:**
>
> Die Metadaten am Anfang der Seite werden zur Definition der "Seiten-Metadaten" verwendet.
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: NameDerEigenschaft
> slug: Web/CSS/NameDerEigenschaft
> page-type: css-property OR css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NameDerEigenschaft
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameDerEigenschaft_.
>     Zum Beispiel hat die [`background-color`](/de/docs/Web/CSS/background-color) Eigenschaft einen Titel von _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird als `Web/CSS/NameDerEigenschaft` formatiert.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color) Eigenschaft `Web/CSS/background-color`. Für eine mehrteilige Komponente wie `Getting_started` in einem Slug sollte der Slug ein Unterstrich verwenden, wie in `/de/docs/Learn/HTML/Getting_started`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Bei einer Kurzschreibweise für CSS-Eigenschaften ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation) Eigenschaft `css-shorthand-property`, weil es sich um eine Kurzschreibweise handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay) Eigenschaft `css-property` ist.
> - **status**
>   - : Flaggen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalter <code>css.properties.NameDerEigenschaft</code> durch den Abfrage-String für die Eigenschaft im [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Other macros in the page_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Anzahl von Makro-Aufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Metadaten der Seite).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es gibt keine Notwendigkeit, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein **Experimental**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro erzeugt ein **Deprecated**-Banner, das darauf hinweist, dass die Nutzung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dies erzeugt ein **Non-standard**-Banner, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß der Ratschläge unten aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschaftsseite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}` Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Stellen Sie keine Status-Header-Makros manuell bereit. Beziehen Sie sich auf den Abschnitt ["Wie man Feature-Status hinzufügt oder aktualisiert"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status der Seite hinzuzufügen.
>
> Beispiele für die **Experimental**, **Deprecated**, und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros in der Seite**
>
> - Formelle Syntaxsektion: Der Inhalt für die _Formelle Syntax_-Sektion wird mittels des `\{{CSSSyntax}}` Makros generiert. Dieses Makro ruft Daten aus den Spezifikationen ab, indem es das [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) verwendet.
> - Formelle Definitionssektion: Der Inhalt für die _Formelle Definition_-Sektion wird mit dem `\{{CSSInfo}}` Makro generiert. Damit diese Sektion Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die jeweilige Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data` Repository ausgefüllt wurde. Siehe die [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md) Seite für weitere Informationen.
> - Spezifikationen und Browser-Kompatibilitätssektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte einzufügen (ersetzen der `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten, jeweils).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a> erstellen/aktualisieren müssen.
>   Siehe unser [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz, der die Eigenschaft benennt und sagt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

_Dieser Titel wird automatisch durch das Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die mit dem `\{{EmbedInteractiveExample}}` Makro hinzugefügt wurden. Sie erstellen diese Beispiele im [mdn/interactive-examples Repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Siehe die [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) Sektion in unseren _Schreibleitfäden_ für weitere Informationen.

## Zusammengesetzte Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschreibweise-Eigenschaften hinzu, wie z.B. [animation](/de/docs/Web/CSS/animation), um alle zugehörigen Langschreibweise-Eigenschaften aufzulisten.

## Syntax

Schließen Sie die üblichen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und was er repräsentiert, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und was er repräsentiert, hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft und ihre Funktionsweise zu geben. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formelle Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formelle Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Einschließen von Barrierefreiheitsrichtlinien, Best Practices und potenziellen Bedenken, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch, wo zutreffend, Lösungen oder Workarounds einbeziehen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie einen beschreibenden Titel hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Sehen Sie in unserem Leitfaden nach, wie Sie [Codebeispiele hinzufügen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) können, um weitere Informationen zu erhalten.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch API
>
> Beispiel des Fetch
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
> Für Beispiele dieser API siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Für weitere Richtlinien siehe die [Siehe auch Sektion](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
