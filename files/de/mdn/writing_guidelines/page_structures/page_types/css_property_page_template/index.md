---
title: Vorlage für CSS-Eigenschaftsseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: e99e4f05057841b04c00142900d6aae1b61d77ba
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Seitendaten:**
>
> Der Seitendatenblock am Anfang der Seite definiert die "Metadaten der Seite".
> Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
>
> ```md
> ---
> title: name-der-eigenschaft
> slug: Web/CSS/Reference/Properties/name-der-eigenschaft
> page-type: css-property ODER css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-der-eigenschaft
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt. Das Titel-Format ist _name-der-eigenschaft_.
>     Zum Beispiel hat die {{cssxref("background-color")}}-Eigenschaft den Titel _background-color_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er wird im Format `Web/CSS/Reference/Properties/name-der-eigenschaft` formatiert.
>     Zum Beispiel ist der Slug für die {{cssxref("background-color")}}-Eigenschaft `Web/CSS/Reference/Properties/background-color`. Für ein mehrteiliges Komponenten wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Eigenschaften ist `css-property`. Für eine Kurzschreibweise in CSS-Eigenschaften lautet der Wert `css-shorthand-property`. Zum Beispiel ist der `page-type`-Wert für die [animation](/de/docs/Web/CSS/Reference/Properties/animation)-Eigenschaft `css-shorthand-property`, da es sich um eine Kurzschreibweise handelt, während es für die [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay)-Eigenschaft `css-property` ist.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch basierend auf den Werten in den Browser-Kompatibilitätsdaten für die Funktion festgelegt. Siehe ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> mit der Abfragestring für die Eigenschaft im [Browser-Compat-Daten-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Überprüfen Sie den Abschnitt _Andere Makros auf der Seite_ in diesem Hinweisblock, um zu sehen, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu generieren.
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitentstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> **Makros am Seitenanfang**
>
> Eine Reihe von Makroaufrufen erscheint direkt unterhalb des Seitendatenblocks im Inhaltsbereich.
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (es ist nicht erforderlich, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro generiert ein **Experimentell**-Banner, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell und hinter einer Voreinstellung in Firefox versteckt ist, sollten Sie dafür auch einen Eintrag auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Deprecated_Header}}`: Dieses Makro generiert ein **Veraltet**-Banner, das darauf hinweist, dass die Verwendung der Technologie [nicht empfohlen](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) wird.
> - `\{{Non-standard_Header}}` — Dieses generiert ein **Nicht-standardisiertes**-Banner, das anzeigt, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den untenstehenden Ratschlägen aktualisieren oder löschen:
>
> Fügen Sie keine Status-Header-Makros manuell hinzu. Siehe den Abschnitt ["Wie Feature-Status hinzugefügt oder aktualisiert werden"](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status auf der Seite hinzuzufügen.
>
> Muster der **Experimentell**, **Veraltet** und **Nicht-standardisiert** Hörer sind direkt nach diesem Hinweisblock dargestellt.
>
> ---
>
> **Andere Makros auf der Seite**
>
> - Abschnitt Formale Syntax: Der Inhalt für den Abschnitt _Formale Syntax_ wird mit dem `\{{CSSSyntax}}`-Makro generiert. Dieses Makro ruft Daten aus den Spezifikationen mit dem [@webref/css npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Formale Definition Abschnitt: Der Inhalt für den Abschnitt _Formale Definition_ wird mit dem `\{{CSSInfo}}`-Makro generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein entsprechender Eintrag für die zugehörige Eigenschaft in der [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) Datendatei im `mdn/data`-Repository ausgefüllt wurde. Siehe die [Eigenschaften](https://github.com/mdn/data/blob/main/css/properties.md)-Seite für weitere Informationen.
> - Abschnitte Spezifikationen und Browser-Kompatibilität: Das Build-Tool verwendet automatisch das `browser-compat`-Schlüssel-Wert-Paar aus dem Seitendatenblock, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (entfernt die folgenden `\{{Specifications}}` und `\{{Compat}}`-Makros in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-Compat-Daten-Repository</a> erstellen/aktualisieren müssen.
>   Siehe unseren [Kompatibilitätstabellen-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für Informationen zum Hinzufügen oder Bearbeiten von Einträgen.
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der die Eigenschaft benennt und beschreibt, was sie tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein. Alle anderen Erklärungen, falls vorhanden, sollten im Abschnitt "Beschreibung" enthalten sein.

## Probieren Sie es aus

Dieser Abschnitt wird vom `InteractiveExample`-Makro generiert.
Dies schließt den Titel des Abschnitts "Probieren Sie es aus" und den Code-Editor ein.
Siehe den Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) in unseren _Schreibleitlinien_ für weitere Informationen.

## Bestandteileigenschaften

Fügen Sie diesen Abschnitt nur für Kurzschreibweise-Eigenschaften hinzu, wie [animation](/de/docs/Web/CSS/Reference/Properties/animation), um alle zugehörigen Langform-Eigenschaften aufzulisten.

## Syntax

Fügen Sie die üblichen Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponenten-Teilwerte, die einen vollständigen Wert ausmachen.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Satz ein, wie einen der folgenden, um zu verdeutlichen, wie der Wert der Eigenschaft konstruiert ist:

```md
This property is specified as one of the following keyword values:

This property is specified as a single value from the following list:

This property is specified as a space-separated list of the following values:
```

Folgen Sie dem Satz mit einer Definitionsliste, die einen Begriff und eine Definition für jeden Teilwert enthält. Wenn eine MDN-Referenzseite für einen Werttyp existiert, fügen Sie diesen Link zum Begriff hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Teilwerts ein, sein Datentyp und was er repräsentiert.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Teilwerts ein, sein Datentyp und was er repräsentiert.

> [!WARNING]
> Fügen Sie keine [inline Statusmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) auf CSS-Seiten hinzu.

## Beschreibung

Fügen Sie eine Beschreibung der Eigenschaft bei und erklären Sie, wie sie funktioniert. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

Wenn die Eigenschaft Teil einer Kurzschreibweise ist, fügen Sie alternative Möglichkeiten hinzu, den Wert zu deklarieren:

```md
The `property-name` property, along with the \{{cssxref("sibling-property")}} property, can also be set by using the \{{cssxref("shorthand-property")}} shorthand.
```

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Barrierefreiheit

Dies ist ein optionaler Abschnitt. Fügen Sie Leitlinien zur Barrierefreiheit, bewährte Praktiken und potenzielle Bedenken ein, derer sich Entwickler beim Verwenden dieser Eigenschaft bewusst sein sollten. Gegebenenfalls können Sie auch Workarounds oder Lösungen einbeziehen.

## Beispiele

Beachten Sie, dass wir den Plural "Beispiele" verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) mit einem Namen des Beispiels haben. Die Überschrift sollte beschreibend dafür sein, was das Beispiel tut. Zum Beispiel sagt "Ein einfaches Beispiel" nichts über das Beispiel aus und ist daher keine gute Überschrift. Das gesagt, "Grundlegende Verwendung" ist akzeptabel für die erste Überschrift eines Beispiels, wenn es nur die Zuweisung von Werten zeigt und komplexere Beispiele folgen. Die Überschrift sollte prägnant sein. Bei einer längeren Beschreibung verwenden Sie den Absatz nach der Überschrift.

Siehe unseren Leitfaden, wie man [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) hinzufügt, für weitere Informationen.

> [!NOTE]
> Manchmal möchten Sie auf Beispiele auf einer anderen Seite verlinken.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und einige weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie eine H3-Überschrift (`###`) für jedes Beispiel auf dieser Seite und dann eine abschließende H3-Überschrift (`###`) mit dem Text "Weitere Beispiele" ein, unter der Sie auf die Beispiele auf anderen Seiten verlinken. Zum Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der fetch-API
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
> Für Beispiele dieser API siehe [die Seite über fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Eigenschaft beziehen. Fügen Sie auch einen Link zu dem CSS-Modul hinzu, zu dem die Eigenschaft gehört. Für weitere Richtlinien siehe den [Siehe auch Abschnitt](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Schreibstil-Leitfaden_.

- link1
- link2
- module_link
- externer_link (Jahr)
