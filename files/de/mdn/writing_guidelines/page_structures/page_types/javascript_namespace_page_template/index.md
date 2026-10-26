---
title: Vorlage für JavaScript-Namespace-Seiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template
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
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“. Die Werte sollten für den jeweiligen Namespace entsprechend angepasst werden.
>
> ```md
> ---
> title: Namespace
> slug: Web/JavaScript/Reference/Global_Objects/Namespace
> page-type: javascript-namespace
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Namespace
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Titelüberschrift, die am Anfang der Seite angezeigt wird. Formatieren Sie sie als `Namespace`. Beispielsweise hat der Namespace [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) den _Titel_ `Math`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es sollte das Format `Web/JavaScript/Reference/Global_Objects/Namespace` haben.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Namespaces ist `javascript-namespace`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Namespace` durch den Abfragestring für den Namespace im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu befüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für den Namespace in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss auch Informationen zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für JavaScript-Namespace-Seiten ist dies `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie weder hinzufügen noch entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Informationen dazu, wie Sie diese Statusangaben zur Seite hinzufügen, finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** sind direkt nach diesem Hinweisblock zu sehen.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Beachten Sie den wichtigsten Grundsatz für einheitliche JavaScript-Referenzseiten: **Sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Das Namespace-Objekt **`Namespace`** enthält statische Eigenschaften und Methoden für eine bestimmte Aufgabe. Dieser Abschnitt sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Schreiben Sie im Allgemeinen nicht mehr als einen einzigen Absatz mit wenigen Sätzen: Ausführliche Informationen gehören in die Beschreibung.

Erstellen Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte des Namespace zeigt. Das sollte selten nötig sein: Normalerweise gibt es interaktive Beispiele für die einzelnen Methoden und Eigenschaften. Erstellen Sie nur dann ein interaktives Beispiel für den Namespace, wenn es den Namespace als Ganzes zeigt, etwa einen vollständigen Parse-Serialize-Durchlauf mit {{jsxref("JSON")}}.

{{InteractiveExample("JavaScript Demo: Namespace")}}

```js interactive-example
const data = Namespace.doSomething(1);
const result = Namespace.doSomethingElse(data);
console.log(result);
// Expected output: 42
```

## Beschreibung

Beginnen Sie immer mit dem folgenden Absatz:

Anders als die meisten globalen Objekte ist `Namespace` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das Objekt `Namespace` als Funktion aufrufen. Alle Eigenschaften und Methoden von `Namespace` sind statisch (genau wie beim Objekt {{jsxref("Math")}}).

Die Beschreibung eines Namespace sollte Folgendes enthalten:

- Hintergrundinformationen dazu, warum die API nützlich ist
- Grundlegende Konzepte, auf die Unterseiten gegebenenfalls verlinken können
- Einen Überblick über die Möglichkeiten, mit dieser API zu arbeiten
- Wichtige Einschränkungen und Besonderheiten

Verwenden Sie H3-Überschriften, wo es sinnvoll ist.

## Statische Eigenschaften

- \\{{jsxref("Namespace.nameOfTheProperty")}}
  - : Enthält etwas.
- `Namespace[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Namespace"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- \\{{jsxref("Namespace.nameOfTheMethod()")}}
  - : Führt eine Aktion aus.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über den Inhalt aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine ausführlichere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Namespace verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Namespace zusammenhängen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Schreibstil-Leitfadens_.

- [Polyfill für `Namespace` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `Namespace`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
