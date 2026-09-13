---
title: JavaScript-Anweisungsseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_statement_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diese gesamte erläuternde Notiz vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Anweisung entsprechend aktualisiert werden.
>
> ```md
> ---
> title: statement
> slug: Web/JavaScript/Reference/Statements/statement
> page-type: javascript-statement
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.statements.statement
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `statement`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieses wird wie `Web/JavaScript/Reference/Statements/statement` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Anweisungen lautet `javascript-statement`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell festgelegt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.statements.statement` durch die Abfragezeichenfolge für die Anweisung im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (wobei die Makros `\{{Compat}}` und `\{{Specifications}}` ersetzt werden).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Anweisung in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jssidebar` für JavaScript-Anweisungsseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht nötig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dieses erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dieses erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele der Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieses Templates hinaus einheitliche Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und kopieren Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die **`statement`**-Anweisung führt eine Aktion aus. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit mehr als einigen wenigen Sätzen: Wesentliche Details gehören in die Beschreibung.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Anweisung demonstriert.

{{InteractiveExample("JavaScript Demo: statement")}}

```js interactive-example
let result = "negative";
if (3 > 0) {
  result = "positive";
}
console.log(result);
// Expected output: "positive"
```

## Syntax

Füllen Sie einen Syntaxkasten gemäß den Richtlinien in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) aus. Zeigen Sie jede Form der Anweisung und beschreiben Sie ihre Syntaxkomponenten direkt unter dem Codeblock. Eine `if`-Anweisung hat beispielsweise die folgende Syntax:

```js-nolint
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : Beschreiben Sie den Ausdruck und wie sein Wert verwendet wird.
- `statement1`
  - : Beschreiben Sie die Anweisung oder den Block und wann sie bzw. er ausgeführt wird.
- `statement2`
  - : Beschreiben Sie die Anweisung oder den Block und wann sie bzw. er ausgeführt wird.

## Beschreibung

Der Großteil der Beschreibung der Anweisung sollte hier stehen. Erläutern Sie gegebenenfalls ihren Kontrollfluss, Gültigkeitsbereich, Syntaxeinschränkungen und Interaktionen mit anderen Anweisungen. Seien Sie so umfassend wie möglich. Lesende sollten die Anweisung anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Beispielabschnitt lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls erforderlich, kurz sein und müssen nicht für die Praxis relevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel macht. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwenden der [Anweisungsname]-Anweisung“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf die aktuelle Anweisung beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- external_link (Jahr)
