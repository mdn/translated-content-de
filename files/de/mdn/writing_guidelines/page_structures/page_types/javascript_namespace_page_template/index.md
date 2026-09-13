---
title: JavaScript-Namespace-Seitenvorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für den jeweiligen Namespace entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie diese als `Namespace`. Beispielsweise hat der [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Namespace einen _title_ von `Math`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dieser sollte wie `Web/JavaScript/Reference/Global_Objects/Namespace` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Namespaces lautet `javascript-namespace`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Namespace` durch die Abfragezeichenfolge für den Namespace im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für den Namespace in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen und der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für JavaScript-Namespace-Seiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (sie müssen nicht hinzugefügt oder entfernt werden):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Diese Technologie ist experimentell**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie dafür auch einen Eintrag auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus konsistente Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach bestehender Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Das Namespace-Objekt **`Namespace`** enthält statische Eigenschaften und Methoden, um etwas zu tun. Dies sollte idealerweise aus 1 oder 2 kurzen Sätzen bestehen. Schreiben Sie im Allgemeinen nicht mehr als einen einzelnen Absatz mit mehr als wenigen Sätzen: Wesentliche Details gehören in die Beschreibung.

Schreiben Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte des Namespace demonstriert. Dies sollte selten sein: Üblicherweise hätten Sie interaktive Beispiele für jede einzelne Methode und Eigenschaft. Schreiben Sie nur dann ein interaktives Beispiel für den Namespace, wenn es den Namespace als Ganzes demonstriert, etwa einen vollständigen Parse-Serialize-Durchlauf mit {{jsxref("JSON")}}.

{{InteractiveExample("JavaScript Demo: Namespace")}}

```js interactive-example
const data = Namespace.doSomething(1);
const result = Namespace.doSomethingElse(data);
console.log(result);
// Expected output: 42
```

## Beschreibung

Beginnen Sie immer mit dem folgenden Absatz:

Anders als die meisten globalen Objekte ist `Namespace` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das Objekt `Namespace` als Funktion aufrufen. Alle Eigenschaften und Methoden von `Namespace` sind statisch (genau wie das Objekt {{jsxref("Math")}}).

Die Beschreibung für einen Namespace sollte Folgendes enthalten:

- Hintergrundinformationen dazu, warum die API nützlich ist
- Kernkonzepte, auf die Unterseiten möglicherweise verlinken können
- Überblick über Möglichkeiten zur Interaktion mit dieser API
- Einschränkungen

Verwenden Sie bei Bedarf H3-Überschriften.

## Statische Eigenschaften

- \\{{jsxref("Namespace.nameOfTheProperty")}}
  - : Enthält etwas.
- `Namespace[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenkette `"Namespace"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- \\{{jsxref("Namespace.nameOfTheMethod()")}}
  - : Führt etwas aus.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von Namespace“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die sich auf den aktuellen Namespace beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Namespace` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Namespace`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
