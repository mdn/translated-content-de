---
title: Vorlage für JavaScript-Klassenseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template
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
> Das Front Matter am Anfang der Seite definiert die Metadaten der Seite. Die Werte sollten für die jeweilige Klasse entsprechend angepasst werden.
>
> ```md
> ---
> title: Constructor
> slug: Web/JavaScript/Reference/Global_Objects/Constructor
> page-type: javascript-class
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Titel, der oben auf der Seite angezeigt wird. Verwenden Sie das Format `Constructor`. Die Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) hat beispielsweise den _Titel_ `Array`.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er sollte wie `Web/JavaScript/Reference/Global_Objects/Constructor` formatiert sein.
> - **page-type**
>   - : Der Schlüssel `page-type` hat für JavaScript-Klassen den Wert `javascript-class`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor` durch den Abfrageschlüssel für die Klasse im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Klasse in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss auch Angaben zur Spezifikation enthalten.
>     Lesen Sie dazu unseren [Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für JavaScript-Klassenseiten lautet der Wert `jsref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden von der Toolchain automatisch hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie auch auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einen Eintrag dafür ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) erfahren Sie, wie Sie diese Status zur Seite hinzufügen.
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** finden Sie direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für einheitliche JavaScript-Referenzseiten: **Sehen Sie sich um**! Viele verwandte Seiten haben einheitliche Strukturen, die über die Vorgaben dieser Vorlage hinausgehen. Das gilt beispielsweise für alle Proxy-Handler, die meisten Array-Methoden usw. Sehen Sie sich zunächst die vorhandene Dokumentation ähnlicher APIs an und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Das Objekt **`Constructor`** stellt etwas dar. Diese Beschreibung sollte idealerweise aus ein oder zwei kurzen Sätzen bestehen. Schreiben Sie hier im Allgemeinen nicht mehr als einen kurzen Absatz: Ausführlichere Informationen gehören in die Beschreibung.

(Falls zutreffend) `Constructor` ist eine Unterklasse von \\{{jsxref("BaseConstructor")}}.

Erstellen Sie ein [interaktives Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples), das wichtige Aspekte der Klasse veranschaulicht. Das sollte selten nötig sein: In der Regel gibt es interaktive Beispiele für den Konstruktor und jede einzelne Methode. Erstellen Sie nur dann ein interaktives Beispiel für die Klasse, wenn es die Klasse als Ganzes veranschaulicht, etwa den vollständigen CRUD-Ablauf mit einer {{jsxref("Map")}}.

{{InteractiveExample("JavaScript Demo: Constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// Expected output: 42
```

## Beschreibung

Die Beschreibung einer Klasse sollte Folgendes enthalten:

- Hintergrundinformationen dazu, warum die API nützlich ist
- Grundlegende Konzepte, auf die Unterseiten gegebenenfalls verweisen können
- Einen Überblick über die Möglichkeiten, mit dieser API zu arbeiten
- Einschränkungen und Besonderheiten

Verwenden Sie bei Bedarf H3-Überschriften.

## Konstruktor

- \\{{jsxref("Constructor/Constructor", "Constructor()")}}
  - : Erstellt ein neues `Constructor`-Objekt.

## Statische Eigenschaften

- \\{{jsxref("Constructor.nameOfTheProperty")}}
  - : Enthält etwas.

## Statische Methoden

- \\{{jsxref("Constructor.nameOfTheMethod()")}}
  - : Führt eine Aktion aus.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Constructor.prototype` definiert und werden von allen `Constructor`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Constructor.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Constructor`-Instanzen ist der Anfangswert der Konstruktor \\{{jsxref("Constructor/Constructor", "Constructor")}}.
- \\{{jsxref("Constructor.prototype.nameOfTheProperty")}}
  - : Gibt etwas zurück.
- `Constructor.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`Symbol.toStringTag`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Constructor"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Die folgenden Eigenschaften sind eigene Eigenschaften jeder `Constructor`-Instanz.

- \\{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : Enthält etwas.

## Instanzmethoden

- \\{{jsxref("Constructor.prototype.nameOfTheMethod()")}}
  - : Gibt etwas zurück.

## Beispiele

Beachten Sie, dass wir auch dann die Pluralform „Beispiele“ verwenden, wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über den Inhalt aus und ist daher keine geeignete Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine ausführlichere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Constructor verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Klasse beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Schreibstil-Leitfadens_.

- [Polyfill für `Constructor` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `Constructor`](https://www.npmjs.com/package/es-aggregate-error)
- Link1
- Link2
- Externer_Link (Jahr)
