---
title: CSS-Eigenschafts-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite dienen dazu, "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für die spezielle Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: NameDerEigenschaft
> slug: Web/CSS/NameDerEigenschaft
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.NameDerEigenschaft
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _NameDerEigenschaft_.
>     Beispielsweise hat die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`. Dieser wird als `Web/CSS/NameDerEigenschaft` formatiert.
>     Zum Beispiel ist der Slug für die [`background-color`](/de/docs/Web/CSS/background-color)-Eigenschaft `Web/CSS/background-color`. Für eine mehrteilige Komponente wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzschreibweise von CSS-Eigenschaften ist der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine Kurzschreibweise handelt, während der `page-type`-Wert für die [animation-delay](/de/docs/Web/CSS/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Flags, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf Werten in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe ["Wie Funktionstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameDerEigenschaft</code> durch den Abfragestring für die Eigenschaft im [Browser-Kompatibilitätsdaten-Repo](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ dieses Hinweisblocks, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Top-of-the-page-Makros**
>
> Einige Makroaufrufe erscheinen oben im Inhaltsbereich (unmittelbar unter den Seiten-Metadaten).
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen/zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimental**-Banner, das anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und hinter einer Präferenz in Firefox versteckt ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Deprecated**-Banner, das anzeigt, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — dies generiert ein **Non-standard**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> Bieten Sie keine Status-Header-Makros manuell an. Beziehen Sie sich auf den Abschnitt ["Wie Funktionstatus hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status der Seite hinzuzufügen.
>
> Proben der **Experimental**, **Deprecated**, und **Non-standard** Banner werden direkt nach diesem Hinweisblock gezeigt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Formal Syntax Abschnitt: Der Inhalt für den Abschnitt _Formal Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Formal Definition Abschnitt: Der Inhalt für den Abschnitt _Formal Definition_ wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die zugehörige Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json)-Datendatei im `mdn/data`-Repository ausgefüllt ist. Siehe die [Properties](https://github.com/mdn/data/blob/main/css/properties.md)-Seite für mehr Informationen.
> - Spezifikationen und Browser-Kompatibilität Abschnitte: Das Erstellungstool verwendet automatisch das `browser-compat` Schlüssel-Wert-Paar aus den Seiten-Metadaten, um Daten in die _Spezifikationen_ und _Browser-Kompatibilität_ Abschnitte einzufügen (ersetzt die `\{{Specifications}}` und `\{{Compat}}` Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Kompatibilitäts-Datenrepo</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft benennt und beschreibt, was sie tut.
Diese sollte idealerweise ein oder zwei kurze Sätze umfassen.

## Ausprobieren

Dieser Abschnitt wird durch das `InteractiveExample`-Makro generiert.
Dies umfasst den Abschnittstitel "Ausprobieren" und den Code-Editor.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibrichtlinien_ für mehr Informationen.

## Beteiligte Eigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschreibweise-Eigenschaften hinzu, wie [animation](/de/docs/Web/CSS/animation), um alle zugehörigen Langschreibweise-Eigenschaften aufzulisten.

## Syntax

Schließen Sie die häufigen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Subwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Begriff und eine Definition für jeden Subwert hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er darstellt, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Subwerts, seines Datentyps und dessen, was er darstellt, hinzu.

> [!WARNING]
> Fügen Sie keine [Inline-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Dies ist ein optionaler Abschnitt, um eine Beschreibung der Eigenschaft hinzuzufügen und zu erklären, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, Best Practices und potenzielle Bedenken hinzu, die Entwickler beim Verwenden dieser Eigenschaft beachten sollten. Sie können auch Alternativen oder Lösungen dort aufführen, wo es anwendbar ist.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreibend sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele hinzufügt](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples), für mehr Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite gegeben sind.
>
> **Szenario 1:** Wenn Sie auf dieser Seite einige Beispiele haben und weitere Beispiele auf einer anderen Seite:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite hinzu und dann eine letzte H3-Überschrift (`###`) mit dem Text "Weitere Beispiele", unter dem Sie die Beispiele auf anderen Seiten verlinken können. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Nutzung der fetch API
>
> Beispiel für Fetch
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
> Für Beispiele dieser API, siehe [die Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Für weitere Leitlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in der _Schreibstil-Leitfaden_.

- link1
- link2
- external_link (Jahr)
