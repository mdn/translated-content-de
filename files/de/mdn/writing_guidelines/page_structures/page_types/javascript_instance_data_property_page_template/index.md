---
title: Vorlage für eine Seite zu einer JavaScript-Instanzdateneigenschaft
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template
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
> Das Front Matter am Anfang der Seite dient zum Festlegen der „Seitenmetadaten“. Passen Sie die Werte für die jeweilige Eigenschaft an.
>
> ```md
> ---
> title: "Constructor: nameOfTheProperty"
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-instance-data-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: javascript.builtins.Constructor.nameOfTheProperty
> sidebar: jsref
> ---
> ```
>
> - **title**
>   - : Die Überschrift, die oben auf der Seite angezeigt wird. Instanzdateneigenschaften werden entweder auf jeder Instanz oder auf `Constructor.prototype` angelegt. Formatieren Sie den ersten Fall als `Constructor: nameOfTheProperty` und den zweiten als `Constructor.prototype.nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length) der Klasse [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) den _title_ `Array: length`, während die Eigenschaft [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) der Klasse [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) den _title_ `Error.prototype.name` hat. Prüfen Sie die Spezifikation, um die genaue Form zu bestimmen.
> - **short-title**
>   - : Ein kurzer Titel für Brotkrumennavigationen und Seitenleisten. Formatieren Sie ihn als `nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length) den _short-title_ `length`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es hat die Form `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty`.
> - **page-type**
>   - : Der Schlüssel `page-type` hat für Seiten zu JavaScript-Instanzdateneigenschaften den Wert `javascript-instance-data-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [„So werden Feature-Status hinzugefügt oder aktualisiert“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch den Abfrageschlüssel für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet diesen Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation zu befüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss auch Informationen zur Spezifikation enthalten.
>     Weitere Informationen finden Sie in unserem [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu JavaScript-Instanzdateneigenschaften lautet der Wert `jsref`.
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
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox hinter einer Einstellung verborgen ist, sollten Sie außerdem auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) einen Eintrag dafür ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell ein. Informationen zum Hinzufügen dieser Status zur Seite finden Sie im Abschnitt [So werden Feature-Status hinzugefügt oder aktualisiert](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** folgen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für konsistente JavaScript-Referenzseiten: **Sehen Sie sich ähnliche Seiten an!** Viele verwandte Seiten haben über die Vorgaben dieser Vorlage hinaus einheitliche Strukturen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Dateneigenschaft **`nameOfTheProperty`** einer \\{{jsxref("Constructor")}}-Instanz enthält etwas. Wenn die Eigenschaft auf `Constructor.prototype` angelegt ist, schreiben Sie: „Die Dateneigenschaft **`nameOfTheProperty`** von `Constructor.prototype` wird von allen \\{{jsxref("Constructor")}}-Instanzen gemeinsam genutzt. Sie enthält etwas.“ Idealerweise sollte dies aus einem oder zwei kurzen Sätzen bestehen. Stimmen Sie den Text mit der Übersichtsseite des Konstruktors ab – diese sollte beispielsweise entsprechende Zeilen enthalten:

```md
- \{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : Contains something.
```

## Wert

Ein [Typ], der …

Beispielsweise: „eine nicht negative Ganzzahl kleiner als …, die die Anzahl der Elemente im Array angibt“.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen stehen der Reihe nach für die Attribute `configurable`, `enumerable` und `writable`. Lesen Sie die Spezifikation oder führen Sie Tests durch. Wenn je nach Erstellung des Objekts mehrere Kombinationen von Attributwerten möglich sind oder die Eigenschaft nur unter bestimmten Bedingungen vorhanden ist, fügen Sie einen Hinweis hinzu.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich. Wenn sich viele Seiten dieselbe Beschreibung teilen, sollten Sie erwägen, der Übersichtsseite der Klasse einen neuen Abschnitt hinzuzufügen und von hier aus darauf zu verlinken. Beispielsweise wird von jeder Seite zu einer Array-Methode auf [Array-Methoden und leere Plätze](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den nachfolgenden Beispielabschnitt lesen zu müssen. Beispiele in diesem Abschnitt sollten, falls nötig, kurz sein und müssen keinen Bezug zu einem realen Anwendungsfall haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel benötigt eine H3-Überschrift, die benennt, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über den Inhalt aus und ist daher keine geeignete Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Quelltext die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Quelltext die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Eigenschaft zusammenhängen. Weitere Hinweise finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `nameOfTheProperty` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
