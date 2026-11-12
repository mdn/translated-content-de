---
title: Vorlage für CSS-Property-Seiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: 3809980a1bb9fb83d0442dd4bf1600c4f0aa184b
---

> [!NOTE]
> _Entfernen Sie diesen Hinweisblock vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“.
> Passen Sie die Werte für die jeweilige Property an.
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
>   - : Der Wert von `title` wird oben auf der Seite angezeigt. Das Titelformat lautet _name-of-the-property_.
>     Beispielsweise hat die Property {{cssxref("background-color")}} den Titel _background-color_.
> - **slug**
>   - : Der Wert von `slug` ist der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat das Format `Web/CSS/Reference/Properties/name-of-the-property`.
>     Beispielsweise lautet der Slug für die Property {{cssxref("background-color")}} `Web/CSS/Reference/Properties/background-color`. Bei einem mehrteiligen Pfadbestandteil wie `Getting_started` wird ein Unterstrich verwendet, wie in `/de/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : Der Wert von `page-type` für CSS-Properties ist `css-property`. Für eine CSS-Shorthand-Property lautet er `css-shorthand-property`. Beispielsweise ist der Wert von `page-type` für die Property [animation](/de/docs/Web/CSS/Reference/Properties/animation) `css-shorthand-property`, da sie eine Shorthand-Property ist. Für die Property [animation-delay](/de/docs/Web/CSS/Reference/Properties/animation-delay) lautet er dagegen `css-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Das Array kann einen oder mehrere der folgenden Werte enthalten: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert <code>css.properties.NameOfTheProperty</code> durch den Abfragestring für die Property im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Im Abschnitt _Weitere Makros auf der Seite_ dieses Hinweisblocks erfahren Sie, wie dieses Schlüssel-Wert-Paar zur Erstellung der Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ verwendet wird.
> - **sidebar**
>   - : Für alle CSS-Leitfaden- und Referenzseiten lautet dieser Wert `cssref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
> Diese Makros werden automatisch von der Toolchain hinzugefügt (Sie müssen sie weder hinzufügen noch entfernen):
>
> - `\{{SeeCompatTable}}`: Dieses Makro erzeugt einen Hinweis **Experimentell**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox durch eine Einstellung verborgen wird, sollten Sie auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — dieses Makro erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Aktualisieren oder entfernen Sie die folgenden Makros gemäß den nachstehenden Hinweisen:

> Fügen Sie Status-Header-Makros nicht manuell hinzu. Informationen dazu, wie Sie diese Status zur Seite hinzufügen, finden Sie im Abschnitt [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell**, **Veraltet** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> ---
>
> **Weitere Makros auf der Seite**
>
> - Abschnitt „Formale Syntax“: Der Inhalt des Abschnitts _Formale Syntax_ wird mit dem Makro `\{{CSSSyntax}}` erzeugt. Dieses Makro ruft Daten aus den Spezifikationen ab und verwendet dazu das [npm-Paket @webref/css](https://www.npmjs.com/package/@webref/css).
> - Abschnitt „Formale Definition“: Der Inhalt des Abschnitts _Formale Definition_ wird mit dem Makro `\{{CSSInfo}}` erzeugt. Damit dieser Abschnitt Daten enthält, muss für die entsprechende Property ein geeigneter Eintrag in der Datendatei [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) im Repository `mdn/data` vorhanden sein. Weitere Informationen finden Sie auf der Seite [Properties](https://github.com/mdn/data/blob/main/css/properties.md).
> - Abschnitte „Spezifikationen“ und „Browser-Kompatibilität“: Das Build-Tool verwendet automatisch das Schlüssel-Wert-Paar `browser-compat` aus dem Front Matter der Seite, um Daten in die Abschnitte _Spezifikationen_ und _Browser-Kompatibilität_ einzufügen. Dabei ersetzt es die Makros `\{{Specifications}}` beziehungsweise `\{{Compat}}` in diesen Abschnitten.
>
>   Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Property und ihre Spezifikation in unserem <a href="https://github.com/mdn/browser-compat-data">Repository für Browser-Kompatibilitätsdaten</a> erstellen oder aktualisieren müssen.
>   Informationen zum Hinzufügen und Bearbeiten von Einträgen finden Sie in unserem [Leitfaden für Kompatibilitätstabellen](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

{{SeeCompatTable}}{{Non-standard_Header}}

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der die Property nennt und beschreibt, was sie bewirkt.
Idealerweise umfasst dieser Absatz ein oder zwei kurze Sätze. Alle weiteren Erläuterungen gehören gegebenenfalls in den Abschnitt „Beschreibung“.

## Ausprobieren

Dieser Abschnitt wird vom Makro `InteractiveExample` erzeugt.
Dazu gehören die Überschrift „Ausprobieren“ und der Code-Editor.
Weitere Informationen finden Sie im Abschnitt [Interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) unserer _Schreibrichtlinien_.

## Bestandteile

Fügen Sie diesen Abschnitt nur für Shorthand-Properties wie [animation](/de/docs/Web/CSS/Reference/Properties/animation) hinzu, um alle zugehörigen Longhand-Properties aufzulisten.

Leiten Sie die Werte mit einem der folgenden Sätze ein, je nachdem, welcher zutrifft:

```md
This property is a shorthand for the following CSS properties:

This property is a shorthand for the following logical properties:

This property is a shorthand for the following physical properties:
```

### Nur zurückgesetzte Teil-Properties

Fügen Sie diesen Abschnitt nur für Shorthand-Properties wie [animation](/de/docs/Web/CSS/Reference/Properties/animation) hinzu, um alle Longhand-Properties aufzulisten, die nur zurückgesetzt werden (die Shorthand-Property setzt sie zurück, kann ihre Werte aber nicht festlegen).

Leiten Sie die Properties mit folgender Einleitung ein:

```md
This property resets the following CSS properties to their initial values:
```

## Syntax

Zeigen Sie häufige Anwendungsfälle in einem Codeblock und beschreiben Sie die einzelnen Teilwerte, aus denen sich ein vollständiger Wert zusammensetzt.

```css
/* Insert code block showing common use cases */
/* or categories of values */
```

### Werte

Erläutern Sie mit einem Satz wie einem der folgenden, wie sich der Wert der Property zusammensetzt:

```md
This property is specified as one of the following keyword values:

This property is specified as a single value from the following list:

This property is specified as a space-separated list of the following values:
```

Lassen Sie darauf eine Definitionsliste folgen, die für jeden Teilwert einen Begriff und eine Definition enthält. Falls für einen Werttyp eine MDN-Referenzseite existiert, verlinken Sie diese beim Begriff.

- `subvalue1`
  - : Beschreiben Sie den Teilwert, seinen Datentyp und das, was er darstellt.
- `subvalue2`
  - : Beschreiben Sie den Teilwert, seinen Datentyp und das, was er darstellt.

> [!WARNING]
> Fügen Sie auf CSS-Seiten keine [Inline-Statusmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) hinzu.

## Beschreibung

Beschreiben Sie die Property und erklären Sie, wie sie funktioniert. Nutzen Sie diesen Abschnitt, um verwandte Begriffe zu erläutern und Anwendungsfälle für die Property aufzuzeigen.

Wenn die Property Teil einer Shorthand-Property ist, zeigen Sie alternative Möglichkeiten, den Wert zu deklarieren:

```md
The `property-name` property, along with the \{{cssxref("sibling-property")}} property, can also be set by using the \{{cssxref("shorthand-property")}} shorthand.
```

## Barrierefreiheit

Dieser Abschnitt ist optional. Nehmen Sie Richtlinien zur Barrierefreiheit, bewährte Vorgehensweisen und mögliche Probleme auf, die Entwickler bei der Verwendung dieser Property berücksichtigen sollten. Gegebenenfalls können Sie auch Umgehungsmöglichkeiten oder Lösungen angeben.

## Formale Definition

`\{{CSSInfo}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Formale Syntax

`\{{CSSSyntax}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift hinzufügen

Jedes Beispiel benötigt eine H3-Überschrift (`###`), die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. „Grundlegende Verwendung“ ist dagegen als Überschrift für das erste Beispiel geeignet, wenn es nur die Zuweisung eines Werts zeigt und danach komplexere Beispiele folgen. Halten Sie die Überschrift kurz. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

> [!NOTE]
> Manchmal möchten Sie Beispiele verlinken, die auf einer anderen Seite stehen.
>
> **Szenario 1:** Wenn sich einige Beispiele auf dieser Seite und weitere Beispiele auf einer anderen Seite befinden:
>
> Fügen Sie für jedes Beispiel auf dieser Seite eine H3-Überschrift (`###`) hinzu. Fügen Sie anschließend eine letzte H3-Überschrift (`###`) mit dem Text „Weitere Beispiele“ hinzu, unter der Sie die Beispiele auf anderen Seiten verlinken. Zum Beispiel:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Szenario 2:** Wenn Sie _nur_ Beispiele auf einer anderen Seite haben und keine auf dieser Seite:
>
> Fügen Sie keine H3-Überschriften hinzu, sondern platzieren Sie die Links direkt unter der H2-Überschrift „Beispiele“. Zum Beispiel:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie in der Markdown-Datei die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Property zusammenhängen. Verlinken Sie auch das CSS-Modul, zu dem die Property gehört. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Schreibleitfadens_.

- link1
- link2
- module_link
- external_link (Jahr)
