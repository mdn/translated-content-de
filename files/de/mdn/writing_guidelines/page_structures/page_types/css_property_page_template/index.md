---
title: Vorlage für CSS-Eigenschaftsseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 5c739c00c318740ed42a431b64867048c4fe449d
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren.
> Die Werte sollten entsprechend für die jeweilige Eigenschaft aktualisiert werden.
>
> ```md
> ---
> title: name-of-the-property
> slug: Web/CSS/Reference/Properties/name-of-the-property
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-of-the-property
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der Wert `title` wird oben auf der Seite angezeigt. Das Titelformat ist _name-of-the-property_.
>     Beispielsweise hat die Eigenschaft {{cssxref("background-color")}} den Titel _background-color_.
> - **slug**
>   - : Der Wert `slug` ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er wird als `Web/CSS/Reference/Properties/name-of-the-property` formatiert.
>     Beispielsweise lautet der Slug für die Eigenschaft {{cssxref("background-color")}} `Web/CSS/Reference/Properties/background-color`. Für eine mehrteilige Komponente wie `Getting_started` in einem Slug sollte der Slug einen Unterstrich verwenden, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der Wert `page-type` für CSS-Eigenschaften ist `css-property`. Für eine CSS-Kurzformeigenschaft lautet der Wert `css-shorthand-property`. Beispielsweise lautet der Wert `page-type` für die Eigenschaft [animation](/de/docs/Web/CSS/Reference/Properties/animation) `css-shorthand-property`, da sie eine Kurzformeigenschaft ist, während der Wert `page-type` für die Eigenschaft [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay) `css-property` lautet.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch die Abfragezeichenfolge für die Eigenschaft im [Browser-compat-data-Repository](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Im Abschnitt _Weitere Makros auf der Seite_ dieses Hinweisblocks erfahren Sie, wie dieses Schlüssel-Wert-Paar verwendet wird, um Inhalte für die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ zu erzeugen.
> - **sidebar**
>   - : Für alle CSS-Leitfaden- und Referenzseiten ist dies `cssref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Anfang der Seite**
>
> Am Anfang des Inhaltsbereichs (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
> Diese Makros werden automatisch durch die Toolchain hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt ein Banner **Experimentell**, das angibt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das angibt, dass das Feature nicht Teil irgendeiner Spezifikation ist.
>
> Sie sollten die folgenden Makros gemäß den nachstehenden Hinweisen aktualisieren oder löschen:

> Stellen Sie Status-Header-Makros nicht manuell bereit. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell**, **Veraltet** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Abschnitt „Formale Syntax“: Der Inhalt für den Abschnitt _Formale Syntax_ wird mithilfe des Makros `\{{CSSSyntax}}` generiert. Dieses Makro ruft Daten aus den Spezifikationen über das [@webref/css-npm-Paket](https://www.npmjs.com/package/@webref/css) ab.
> - Abschnitt „Formale Definition“: Der Inhalt für den Abschnitt _Formale Definition_ wird mithilfe des Makros `\{{CSSInfo}}` generiert. Damit dieser Abschnitt Daten enthält, müssen Sie sicherstellen, dass ein passender Eintrag für die entsprechende Eigenschaft in der Datendatei [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) im Repository `mdn/data` ausgefüllt wurde. Weitere Informationen finden Sie auf der Seite [Properties](https://github.com/mdn/data/blob/main/css/properties.md).
> - Abschnitte „Spezifikationen“ und „Browser-Kompatibilität“: Das Build-Tool verwendet automatisch das Schlüssel-Wert-Paar `browser-compat` aus dem Front Matter der Seite, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen (und ersetzt dabei die Makros `\{{Specifications}}` beziehungsweise `\{{Compat}}` in diesen Abschnitten).
>
>   Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Eigenschaft und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Browser-compat-data-Repository</a> erstellen oder aktualisieren müssen.
>   Informationen zum Hinzufügen oder Bearbeiten von Einträgen finden Sie in unserem [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der die Eigenschaft benennt und beschreibt, was sie tut.
Dieser sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Alle weiteren Erklärungen sollten, falls vorhanden, im Abschnitt „Beschreibung“ enthalten sein.

## Ausprobieren

Dieser Abschnitt wird durch das Makro `InteractiveExample` generiert.
Dazu gehören der Abschnittstitel „Ausprobieren“ und der Code-Editor.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) unserer _Schreibrichtlinien_.

## Bestandteileigenschaften

Fügen Sie diesen Abschnitt nur für Kurzformeigenschaften wie [animation](/de/docs/Web/CSS/Reference/Properties/animation) hinzu, um alle zugehörigen Langformeigenschaften aufzulisten.

Leiten Sie die Werte je nach Bedarf mit einem der folgenden Sätze ein:

```md
This property is a shorthand for the following CSS properties:

This property is a shorthand for the following logical properties:

This property is a shorthand for the following physical properties:
```

### Untereigenschaften nur zum Zurücksetzen

Fügen Sie diesen Abschnitt nur für Kurzformeigenschaften wie [animation](/de/docs/Web/CSS/Reference/Properties/animation) hinzu, um alle Langformeigenschaften aufzulisten, die nur zum Zurücksetzen dienen (von der Kurzform zurückgesetzt werden, aber nicht durch sie gesetzt werden können).

Leiten Sie die Eigenschaften mit der folgenden Einleitung ein:

```md
This property resets the following CSS properties to their initial values:
```

## Syntax

Fügen Sie die häufigsten Anwendungsfälle als Codeblock ein und beschreiben Sie die Komponentenunterwerte, aus denen ein vollständiger Wert besteht.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Fügen Sie einen Satz wie einen der folgenden hinzu, um zu erläutern, wie der Wert der Eigenschaft aufgebaut ist:

```md
This property is specified as one of the following keyword values:

This property is specified as a single value from the following list:

This property is specified as a space-separated list of the following values:
```

Lassen Sie auf den Satz eine Definitionsliste folgen, die für jeden Unterwert einen Begriff und eine Definition enthält. Falls eine MDN-Referenzseite für einen Werttyp existiert, fügen Sie diesen Link beim Begriff hinzu.

- `subvalue1`
  - : Fügen Sie eine Beschreibung des Unterwerts, seines Datentyps und dessen, was er darstellt, hinzu.
- `subvalue2`
  - : Fügen Sie eine Beschreibung des Unterwerts, seines Datentyps und dessen, was er darstellt, hinzu.

> [!WARNING]
> Fügen Sie auf CSS-Seiten keine [Inline-Statusmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) hinzu.

## Beschreibung

Fügen Sie eine Beschreibung der Eigenschaft hinzu und erläutern Sie ihre Funktionsweise. Verwenden Sie diesen Abschnitt, um verwandte Begriffe zu erklären und Anwendungsfälle für die Eigenschaft hinzuzufügen.

Falls die Eigenschaft Teil einer Kurzform ist, fügen Sie alternative Möglichkeiten zur Deklaration des Werts hinzu:

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

Dies ist ein optionaler Abschnitt. Fügen Sie Richtlinien zur Barrierefreiheit, Best Practices und mögliche Bedenken hinzu, die Entwickler bei der Verwendung dieser Eigenschaft beachten sollten. Sie können gegebenenfalls auch Umgehungslösungen oder Lösungen einbeziehen.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Fügen Sie eine beschreibende Überschrift hinzu

Jedes Beispiel muss eine H3-Überschrift (`###`) haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. „Grundlegende Verwendung“ ist jedoch als Überschrift für das erste Beispiel akzeptabel, wenn es nur die Wertzuweisung demonstriert und komplexere Beispiele folgen. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie auf Beispiele verlinken, die auf einer anderen Seite angegeben sind.
>
> **Szenario 1:** Wenn Sie einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite haben:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) und anschließend eine letzte H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“ hinzu, unter der Sie auf die Beispiele auf anderen Seiten verlinken können. Beispiel:
>
> ```md
> ## Beispiele
>
> ### Verwendung der Fetch API
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
> Fügen Sie keine H3-Überschriften hinzu; fügen Sie die Links direkt unter der H2-Überschrift „Beispiele“ ein. Beispiel:
>
> ```md
> ## Beispiele
>
> Beispiele für diese API finden Sie auf [der Seite zu fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft zusammenhängen. Fügen Sie außerdem einen Link zum CSS-Modul hinzu, zu dem die Eigenschaft gehört. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- module_link
- external_link (Jahr)
