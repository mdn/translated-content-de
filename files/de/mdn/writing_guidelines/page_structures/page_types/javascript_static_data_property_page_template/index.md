---
title: Vorlage für eine Seite zu einer statischen JavaScript-Dateneigenschaft
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_data_property_page_template
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
> Das Front Matter am Anfang der Seite definiert die „Seitenmetadaten“. Die Werte sollten für die jeweilige Eigenschaft entsprechend angepasst werden.
>
> ```md
> ---
> title: Constructor.nameOfTheProperty
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-static-data-property
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
>   - : Die Titelüberschrift, die am Anfang der Seite angezeigt wird. Verwenden Sie das Format `Constructor.nameOfTheProperty`.
> - **short-title**
>   - : Ein kurzer Titel für die Breadcrumb-Navigation und Seitenleisten. Verwenden Sie das Format `nameOfTheProperty`. Die Eigenschaft [`Math.PI`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) hat beispielsweise den _short-title_ `PI`.
> - **slug**
>   - : Der Teil des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Er hat ein Format wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty`.
> - **page-type**
>   - : Der Wert für `page-type` auf Seiten zu statischen JavaScript-Dateneigenschaften ist `javascript-static-data-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature automatisch gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch den Abfrageschlüssel für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu befüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss Angaben zur Spezifikation enthalten.
>     Lesen Sie unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu statischen JavaScript-Dateneigenschaften lautet der Wert `jsref`.
>     Weitere Informationen finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (Sie müssen sie weder hinzufügen noch entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt ein Banner mit dem Hinweis **Dies ist eine experimentelle Technologie**, das kennzeichnet, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox nur nach Aktivierung einer Voreinstellung verfügbar ist, sollten Sie sie auch auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) eintragen.
> - `\{{Non-standard_Header}}` — erzeugt ein Banner mit dem Hinweis **Nicht standardisiert**, das kennzeichnet, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell ein. Wie Sie diese Statusangaben zur Seite hinzufügen, erfahren Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für das Verfassen einheitlicher JavaScript-Referenzseiten: **Sehen Sie sich um**! Viele verwandte Seiten haben übereinstimmende Strukturen, die über die Vorgaben dieser Vorlage hinausgehen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Dateneigenschaft **`Constructor.nameOfTheProperty`** enthält etwas. Dieser Abschnitt sollte idealerweise aus ein oder zwei kurzen Sätzen bestehen. Halten Sie ihn mit der Übersichtsseite der Klasse oder des Namespace synchron — die Übersichtsseite sollte beispielsweise Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.nameOfTheProperty")}}
  - : Contains something.
```

## Wert

Beschreiben Sie den Wert der Eigenschaft, einschließlich seines Datentyps und dessen, was er darstellt.

\\{{js_property_attributes(1, 0, 0)}}

Die drei an `js_property_attributes` übergebenen Zahlen stehen in dieser Reihenfolge für die Attribute `configurable`, `enumerable` und `writable`. Lesen Sie die Spezifikation oder führen Sie eigene Tests durch. Falls je nach Erstellung des Objekts mehrere Kombinationen von Attributwerten möglich sind oder die Eigenschaft nur unter bestimmten Bedingungen vorhanden ist, fügen Sie einen Hinweis hinzu.

## Beschreibung

Der größte Teil der Beschreibung der Eigenschaft sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung enthalten, sollten Sie erwägen, einen neuen Abschnitt auf der Übersichtsseite der Klasse oder des Namespace hinzuzufügen und von hier aus darauf zu verlinken.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Abschnitt mit Beispielen lesen zu müssen. Falls Beispiele in diesem Abschnitt notwendig sind, sollten sie kurz sein und müssen keinen Bezug zu einem praktischen Anwendungsfall haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel benötigt eine H3-Überschrift, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine gute Überschrift. Halten Sie die Überschrift kurz. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von Constructor.nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `Constructor.nameOfTheProperty` in `core-js`](https://core-js.io/docs/)
- [Polyfill für `Constructor.nameOfTheProperty` von es-shims](https://www.npmjs.com/package/es-aggregate-error)
- Link 1
- Link 2
- Externer Link (Jahr)
