---
title: Vorlage für eine Seite zu einer JavaScript-Instanzmethode
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template
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
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“. Die Werte sollten für die jeweilige Methode entsprechend angepasst werden.
>
> ```md
> ---
> title: Constructor.prototype.nameOfTheMethod()
> short-title: nameOfTheMethod()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod
> page-type: javascript-instance-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.nameOfTheMethod
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die oben auf der Seite angezeigt wird. Verwenden Sie das Format `Constructor.prototype.nameOfTheMethod()`. Beispielsweise hat die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array.prototype.at()`.
> - **short-title**
>   - : Ein kurzer Titel, der in Breadcrumbs und Seitenleisten verwendet wird. Verwenden Sie das Format `nameOfTheMethod()`. Beispielsweise hat die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) den _short-title_ `at()`.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat ein Format wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod`. Beachten Sie, dass der Methodenname im Slug keine Klammern enthält (er endet auf `nameOfTheMethod`, nicht auf `nameOfTheMethod()`).
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Instanzmethoden hat den Wert `javascript-instance-method`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheMethod` durch den Abfrageschlüssel für die Methode im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zur Spezifikation zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Methode in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss außerdem Angaben zur Spezifikation enthalten.
>     Lesen Sie dazu unseren [Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu JavaScript-Instanzmethoden lautet der Wert `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der kennzeichnet, dass das Feature nicht Bestandteil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell ein. Informationen dazu, wie Sie diese Statusangaben zur Seite hinzufügen, finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für das Verfassen einheitlicher JavaScript-Referenzseiten: **Schauen Sie sich um**! Viele verwandte Seiten weisen über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen auf. Das gilt beispielsweise für alle Proxy-Handler, die meisten Array-Methoden und weitere Seiten. Suchen Sie zunächst nach vorhandener Dokumentation zu ähnlichen APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Methode **`nameOfTheMethod()`** von \\{{jsxref("Constructor")}}-Instanzen führt eine Aktion aus. Dies sollte idealerweise in ein oder zwei kurzen Sätzen beschrieben werden. Halten Sie diesen Text mit der Übersichtsseite des Konstruktors synchron – diese sollte beispielsweise Zeilen wie die folgende enthalten:

```md
- \{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Does something.
```

## Syntax

Fügen Sie einen Syntaxblock gemäß den Hinweisen in unserem Artikel über [Syntaxabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) ein.

```js-nolint
nameOfTheMethod(parameter1)
nameOfTheMethod(parameter1, parameter2)
```

### Parameter

- `parameter1`
  - : Fügen Sie hier eine kurze Beschreibung des Parameters und seiner Funktion ein. Verwenden Sie für jeden Parameter einen Begriff und eine Definition. Wenn der Parameter nicht optional ist, entfernen Sie den Makroaufruf \\{{optional_inline}}.
- `parameter2` {{optional_inline}}
  - : Und so weiter.

> [!NOTE]
> Dieser Abschnitt ist verpflichtend. Wenn es keine Parameter gibt, schreiben Sie „Keine.“ anstelle der Definitionsliste.

### Rückgabewert

Beschreiben Sie den Rückgabewert der Methode, einschließlich seines Datentyps und dessen, was er darstellt. Zum Beispiel: „Ein {{jsxref("Number")}}, der etwas darstellt.“

Wenn die Methode nichts zurückgibt, schreiben Sie einfach „Keiner ({{jsxref('undefined')}}).“.

Wenn die Methode ein Promise zurückgibt, verwenden Sie das Format „Ein {{jsxref("Promise")}}, das asynchron mit einem {{jsxref("Number")}} erfüllt wird, der etwas darstellt“. Abgelehnte Promises gehören in den Abschnitt „Ausnahmen“.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Bedingung 1.
    - Bedingung 2.
    - Und so weiter.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn …

Seien Sie so umfassend wie möglich. Führen Sie im Allgemeinen keine Ausnahmen auf, die beim Aufruf von Benutzercode auftreten können, etwa beim Ausführen von Gettern oder bei der Typumwandlung. Führen Sie auch keine Ausnahmen aufgrund nicht übereinstimmender Typen auf, etwa wenn einer Zeichenfolgen-Parameter ein Symbol erhält oder statt einer Callback-Funktion ein Wert übergeben wird, der keine Funktion ist.

## Beschreibung

Der Großteil der Methodenbeschreibung sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn sich viele Seiten dieselbe Beschreibung teilen, erwägen Sie, der Übersichtsseite der Klasse einen neuen Abschnitt hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird von jeder Seite zu einer Array-Methode auf [Array-Methoden und leere Plätze](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) verlinkt.

Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Abschnitt mit Beispielen lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls sie erforderlich sind, knapp sein und müssen keinen Bezug zu einem realen Anwendungsfall haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Für eine ausführlichere Beschreibung verwenden Sie den Absatz nach der Überschrift. Das erste Beispiel kann „nameOfTheMethod() verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Methode zusammenhängen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill für `Constructor.prototype.nameOfTheMethod` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `Constructor.prototype.nameOfTheMethod`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
