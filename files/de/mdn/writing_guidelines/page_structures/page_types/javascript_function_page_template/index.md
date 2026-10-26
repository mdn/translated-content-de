---
title: Vorlage für eine JavaScript-Funktionsseite
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite dient dazu, die „Seitenmetadaten“ festzulegen. Die Werte sollten für die jeweilige Funktion entsprechend angepasst werden.
>
> ```md
> ---
> title: nameOfFunction()
> slug: Web/JavaScript/Reference/Global_Objects/nameOfFunction
> page-type: javascript-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.nameOfFunction
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Verwenden Sie das Format `nameOfFunction()`. Beispielsweise hat die Funktion [`parseFloat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) den _Titel_ `parseFloat()`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es sollte das Format `Web/JavaScript/Reference/Global_Objects/nameOfFunction` haben.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Funktionen lautet `javascript-function`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.nameOfFunction` durch den Abfrageschlüssel für die Funktion im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zur Spezifikation zu befüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Funktion in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss außerdem Informationen zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu JavaScript-Funktionen lautet dieser Wert `jssidebar`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einen Eintrag dafür ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Wie Sie diese Statusangaben zur Seite hinzufügen, erfahren Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz beim Schreiben einheitlicher JavaScript-Referenzseiten: **Sehen Sie sich um!** Viele verwandte Seiten haben einheitliche Strukturen, die über die Vorgaben dieser Vorlage hinausgehen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation zu ähnlichen APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Funktion **`nameOfFunction()`** tut etwas. Dies sollte idealerweise in ein oder zwei kurzen Sätzen beschrieben werden. Schreiben Sie hier im Allgemeinen nicht mehr als einen kurzen Absatz mit wenigen Sätzen: Ausführliche Informationen gehören in den Abschnitt „Beschreibung“.

Erstellen Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Funktion veranschaulicht.

{{InteractiveExample("JavaScript Demo: nameOfFunction()")}}

```js interactive-example
const result = nameOfFunction(1);
console.log(result);
// Expected output: 42
```

## Syntax

Ergänzen Sie einen Syntaxblock gemäß den Hinweisen in unserem Artikel zu [Syntaxabschnitten](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```js-nolint
nameOfFunction(parameter1)
nameOfFunction(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Geben Sie für jeden Parameter einen Begriff mit zugehöriger Definition an. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : usw.

> [!NOTE]
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie statt der Definitionsliste „Keine.“.

### Rückgabewert

Beschreiben Sie den Rückgabewert der Funktion, einschließlich seines Datentyps und dessen, was er darstellt. Zum Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Funktion nichts zurückgibt, schreiben Sie einfach „Keiner ({{jsxref('undefined')}}).“.

Wenn die Funktion ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einem {{jsxref("Number")}} erfüllt wird, der etwas darstellt“. Zurückgewiesene Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - usw.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Beschreiben Sie die Ausnahmen so umfassend wie möglich. Listen Sie im Allgemeinen keine Ausnahmen auf, die durch die Ausführung von Benutzercode entstehen können, etwa beim Aufruf von Gettern oder bei Typumwandlungen. Listen Sie auch keine Ausnahmen aufgrund nicht übereinstimmender Typen auf, etwa wenn ein Symbol an einen Parameter übergeben wird, der einen String erwartet, oder wenn statt einer Funktion ein anderer Wert als Callback übergeben wird.

## Beschreibung

Der Großteil der Beschreibung der Funktion sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich. Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls sie nötig sind, kurz sein und müssen keinen realen Anwendungsfall zeigen.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „`nameOfFunction()` verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Funktion zusammenhängen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `nameOfFunction` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `nameOfFunction`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
