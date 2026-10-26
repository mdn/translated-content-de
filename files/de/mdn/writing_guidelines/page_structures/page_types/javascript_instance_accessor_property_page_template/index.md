---
title: Vorlage für eine Seite zu einer JavaScript-Accessor-Property einer Instanz
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_accessor_property_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung._
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite definiert die „Seitenmetadaten“. Passen Sie die Werte an die jeweilige Property an.
>
> ```md
> ---
> title: Constructor.prototype.nameOfTheProperty
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-instance-accessor-property
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
>   - : Der Titel, der oben auf der Seite angezeigt wird. Verwenden Sie das Format `Constructor.prototype.nameOfTheProperty`. Die Property [`byteLength`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) der Klasse [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) hat beispielsweise den _title_ `ArrayBuffer.prototype.byteLength`.
>
>     Accessor-Properties werden fast immer auf `Constructor.prototype` definiert. Falls die Property stattdessen auf jeder einzelnen Instanz definiert wird, verwenden Sie `Constructor: nameOfTheProperty`. Prüfen Sie die Spezifikation, um die korrekte Form zu bestimmen.
> - **short-title**
>   - : Ein kurzer Titel für Breadcrumbs und Seitenleisten. Verwenden Sie das Format `nameOfTheProperty`. Die Property [`byteLength`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) hat beispielsweise den _short-title_ `byteLength`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es hat die Form `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty`.
> - **page-type**
>   - : Der Wert des Schlüssels `page-type` für JavaScript-Accessor-Properties von Instanzen ist `javascript-instance-accessor-property`.
> - **status**
>   - : Kennzeichnungen für den Status dieses Features. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Setzen Sie diesen Schlüssel nicht manuell: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch den Abfrageschlüssel für die Property im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zur Spezifikation auszufüllen. Dabei ersetzt sie die Makros `\{{Compat}}` und `\{{Specifications}}`.
>
>     Möglicherweise müssen Sie zunächst einen Eintrag für die Property im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren. Der Eintrag für die API muss auch Informationen zur Spezifikation enthalten.
>     Lesen Sie dazu unseren [Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu JavaScript-Accessor-Properties von Instanzen lautet der Wert `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs, unmittelbar unter dem Frontmatter, erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt. Sie müssen sie nicht selbst hinzufügen oder entfernen:
>
> - `\{{SeeCompatTable}}` — erzeugt einen Banner mit dem Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn die Technologie experimentell ist und in Firefox durch eine Voreinstellung deaktiviert ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Banner mit dem Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Wie Sie diese Status zur Seite hinzufügen, erfahren Sie unter [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** stehen direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für das Verfassen einheitlicher JavaScript-Referenzseiten: **Sehen Sie sich um!** Viele verwandte Seiten haben über die Vorgaben dieser Vorlage hinaus einheitliche Strukturen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach bestehender Dokumentation zu ähnlichen APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Accessor-Property **`nameOfTheProperty`** von \\{{jsxref("Constructor")}}-Instanzen gibt etwas zurück. Dieser Abschnitt sollte idealerweise aus ein oder zwei kurzen Sätzen bestehen. Halten Sie ihn mit der Übersichtsseite des Konstruktors auf dem gleichen Stand. Die Übersichtsseite sollte beispielsweise Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.prototype.nameOfTheProperty")}}
  - : Returns something.
```

## Wert

Beschreiben Sie den Wert der Property, einschließlich seines Datentyps und dessen, was er darstellt.

Fügen Sie für eine Property, die nur einen Getter hat, den folgenden Absatz hinzu:

> Für `nameOfTheProperty` gibt es keinen Setter. Daher können Sie den Wert dieser Property nicht durch Zuweisung ändern.

Beschreiben Sie für eine Property mit Setter, welche Werte sie akzeptiert und welche Auswirkung die Zuweisung eines Werts hat.

## Beschreibung

Der Großteil der Beschreibung der Property sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich. Wenn mehrere Seiten dieselbe Beschreibung benötigen, können Sie der Übersichtsseite der Klasse einen neuen Abschnitt hinzufügen und von hier aus darauf verlinken. Beispielsweise wird [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu einer Array-Methode aus verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Abschnitt mit Beispielen lesen zu müssen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie knapp sein und müssen keinen Bezug zu realen Anwendungsfällen haben.

## Beispiele

Verwenden Sie die Pluralform „Beispiele“, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die es benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Halten Sie die Überschrift kurz. Für eine längere Beschreibung verwenden Sie den Absatz nach der Überschrift. Das erste Beispiel kann „`nameOfTheProperty` verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie im Markdown-Dokument die Backticks und den Backslash._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit der aktuellen Property zusammenhängen. Weitere Hinweise finden Sie im Abschnitt [„Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Schreibstil-Leitfadens_.

- [Polyfill für `Constructor.prototype.nameOfTheProperty` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `Constructor.prototype.nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
