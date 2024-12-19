---
title: CSS-Eigenschafts-Template
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

> **Hinweis:** _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiteneigenschaften:**
>
> Die Seiteneigenschaften am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
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
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color) Eigenschaft `Web/CSS/background-color`. Bei einer mehrwortigen Komponente wie `Getting_started` in einem Slug sollte der Slug ein Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine verkürzte CSS-Eigenschaft ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation) Eigenschaft `css-shorthand-property`, da es sich um eine Kurzschreibweise handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay) Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichnet den Status dieses Features. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameDerEigenschaft</code> mit dem Abfragestring für die Eigenschaft im [Browser-kompatibilität Data Repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar zum Generieren von Inhalten für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ verwendet wird.
>
> ---
>
> **Makros am Anfang der Seite**
>
> Eine Reihe von Makroaufrufen erscheint am Anfang des Inhaltsbereichs (unmittelbar unter den Seiteneigenschaften).
> Diese Makros werden automatisch vom Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell und in Firefox hinter einer Präferenz versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) ist.
> - `\{{Non-standard_Header}}` — dieses generiert ein **Nicht-standard**-Banner, das anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den unten angegebenen Ratschlägen aktualisieren oder löschen:
>
> - `\{{CSSRef}}`: Dieses Makro muss auf jeder CSS-Eigenschafts-Seite vorhanden sein. Es generiert eine geeignete CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
>   Denken Sie daran, das `\{{MDNSidebar}}`-Makro zu entfernen, wenn Sie diese Vorlage verwenden.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt ["Anleitung zum Hinzufügen oder Aktualisieren von Feature-Status"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses), um diese Status auf der Seite hinzuzufügen.
>
> Beispiele für die **Experimental**, **Veraltet**, und **Nicht-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formale Syntax-Sektion: Der Inhalt für die _Formale Syntax_-Sektion wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen ab, wobei das [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) verwendet wird.
> - Formale Definition-Sektion: Der Inhalt für die _Formale Definition_-Sektion wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit diese Sektion Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die betreffende Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datenbankdatei im `mdn/data`-Repository ausgefüllt ist. Siehe die [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md) Seite für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilität Sektionen: Das Build-Tool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiteneigenschaften, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Sektionen einzufügen (die in diesen Sektionen die `\{{Specifications}}` und `\{{Compat}}` Makros ersetzen).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser kompatibilität Data Repo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{CSSRef}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft nennt und beschreibt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## Probieren Sie es aus

_Dieser Titel wird automatisch vom Makro `\{{EmbedInteractiveExample}}` generiert._

Dieser Abschnitt ist für interaktive Beispiele, die mit dem `\{{EmbedInteractiveExample}}`-Makro hinzugefügt werden. Sie erstellen diese Beispiele im [mdn/interactive-examples Repository](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreib-Leitlinien_ für weitere Informationen.

## Einzelbestandteile

Fügen Sie diesen Abschnitt nur für Kurzschreibweise-Eigenschaften hinzu, wie zum Beispiel [animation](/de/docs/Web/CSS/animation), um alle zugehörigen Langschreibweise-Eigenschaften aufzulisten.

## Syntax

Fügen Sie die gängigen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Teilwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie für jeden Teilwert einen Begriff und die Definition ein.

- `teilwert1`
  - : Fügen Sie eine Beschreibung des Teilwertes, seines Datentyps und dessen Bedeutung ein.
- `teilwert2`
  - : Fügen Sie eine Beschreibung des Teilwertes, seines Datentyps und dessen Bedeutung ein.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft einzufügen und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Zugänglichkeit

Dies ist ein optionaler Abschnitt. Fügen Sie Zugänglichkeitsrichtlinien, bewährte Verfahren und potenzielle Bedenken hinzu, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Sie können auch, wo zutreffend, Lösungen oder Workarounds einfügen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend dafür sein, was das Beispiel macht. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verweisen, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie auf die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung des fetch API
>
> Beispiel von Fetch
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
> Für Beispiele zu dieser API, siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks in der Markdown-Datei._

## Siehe auch

Schließen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Eigenschaft beziehen. Für weitere Leitlinien siehe den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- externer_link (Jahr)
