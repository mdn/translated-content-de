---
title: JavaScript-Operatorseitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diese gesamte Erläuterungsnotiz vor der Veröffentlichung_
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für den jeweiligen Operator entsprechend aktualisiert werden.
>
> ```md
> ---
> title: Operator (symbol)
> slug: Web/JavaScript/Reference/Operators/Operator
> page-type: javascript-operator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.operators.operator
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `Operator (symbol)`. Beispielsweise hat der Operator [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition) den _title_ `Addition (+)`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser sollte wie `Web/JavaScript/Reference/Operators/Operator` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Operatoren ist `javascript-operator`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.operators.operator` durch die Abfragezeichenfolge für den Operator im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Operator in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jssidebar` für JavaScript-Operatorseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Seiten-Frontmatter) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Falls sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardmäßig**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der Banner **Experimentell** und **Nicht standardmäßig** werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte Erläuterungsnotiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **schauen Sie sich um**! Viele verwandte Seiten haben konsistente Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Der Operator **operator (`symbol`)** führt eine Aktion aus. Dies sollten idealerweise ein oder zwei kurze Sätze sein. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit wenigen Sätzen: Wesentliche Details gehören in die Beschreibung.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte des Operators demonstriert.

{{InteractiveExample("JavaScript Demo: Operator (symbol) operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4
```

## Syntax

Füllen Sie einen Syntaxkasten gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus.

```js-nolint
x operator y
```

- `x`
  - : Beschreiben Sie den linken Operanden als Ausdruck, einschließlich der Typen, zu denen er ausgewertet werden kann.
- `y`
  - : Beschreiben Sie den rechten Operanden als Ausdruck, einschließlich der Typen, zu denen er ausgewertet werden kann.

## Beschreibung

Der Großteil der Beschreibung des Operators sollte hier stehen. Beschreiben Sie, zu was der Ausdruck ausgewertet wird, jegliche Typumwandlung und die Bedingungen, unter denen er eine Ausnahme auslöst. Seien Sie so umfassend wie möglich. Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Beispielabschnitt zu lesen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie prägnant sein und müssen nicht für reale Anwendungsfälle relevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwenden des Operators [Operatorname]“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Operator beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- external_link (year)
