---
title: Vorlage für eine Seite zu einer statischen JavaScript-Accessor-Eigenschaft
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_accessor_property_page_template
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
> Das Front Matter am Anfang der Seite dient dazu, „Seitenmetadaten“ festzulegen. Die Werte sollten für die jeweilige Eigenschaft entsprechend angepasst werden.
>
> ```md
> ---
> title: Constructor.nameOfTheProperty
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> page-type: javascript-static-accessor-property
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
>   - : Die Überschrift, die oben auf der Seite angezeigt wird. Verwenden Sie das Format `Constructor.nameOfTheProperty`.
> - **short-title**
>   - : Ein Kurztitel, der in Breadcrumbs und Seitenleisten verwendet wird. Verwenden Sie das Format `nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`RegExp.input`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) den _short-title_ `input ($_)`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Es hat ein Format wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty`.
> - **page-type**
>   - : Der `page-type`-Schlüssel für Seiten zu statischen JavaScript-Accessor-Eigenschaften lautet `javascript-static-accessor-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das einen oder mehrere der folgenden Werte enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature festgelegt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und zu den Spezifikationen zu füllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen oder aktualisieren müssen. Der Eintrag für die API muss außerdem Informationen zur Spezifikation enthalten.
>     Lesen Sie unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu statischen JavaScript-Accessor-Eigenschaften lautet der Wert `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsbereichs (direkt unter dem Front Matter der Seite) stehen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (Sie müssen sie nicht hinzufügen oder entfernen):
>
> - `\{{SeeCompatTable}}` — erzeugt einen Hinweis **Dies ist eine experimentelle Technologie**, der anzeigt, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und in Firefox durch eine Einstellung verborgen wird, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ergänzen.
> - `\{{Non-standard_Header}}` — erzeugt einen Hinweis **Nicht standardisiert**, der anzeigt, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Makros für Statushinweise nicht manuell hinzu. Wie Sie diese Status zur Seite hinzufügen, erfahren Sie im Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Hinweise **Experimentell** und **Nicht standardisiert** finden Sie direkt nach diesem Hinweisblock.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an den wichtigsten Grundsatz für das Verfassen einheitlicher JavaScript-Referenzseiten: **Sehen Sie sich um!** Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus einheitliche Strukturen. Das gilt beispielsweise für alle Proxy-Handler und die meisten Array-Methoden. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Accessor-Eigenschaft **`Constructor.nameOfTheProperty`** gibt etwas zurück. Diese Beschreibung sollte idealerweise aus einem oder zwei kurzen Sätzen bestehen. Stimmen Sie sie mit der Übersichtsseite der Klasse oder des Namensraums ab – die Übersichtsseite sollte beispielsweise Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.nameOfTheProperty")}}
  - : Returns something.
```

## Wert

Beschreiben Sie den Wert der Eigenschaft, einschließlich seines Datentyps und seiner Bedeutung.

Fügen Sie bei einer Eigenschaft, die nur einen Getter hat, den folgenden Absatz hinzu:

> Für `nameOfTheProperty` gibt es keinen Setter. Daher können Sie den Wert dieser Eigenschaft nicht durch eine Zuweisung ändern.

Beschreiben Sie bei einer Eigenschaft mit einem Setter, welche Werte sie akzeptiert und welche Auswirkung die Zuweisung eines Werts hat.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Beschreiben Sie sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung enthalten, erwägen Sie, der Übersichtsseite der Klasse oder des Namensraums einen neuen Abschnitt hinzuzufügen und von hier aus darauf zu verlinken.

Lesende sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Abschnitt mit Beispielen lesen zu müssen. Falls Beispiele in diesem Abschnitt nötig sind, sollten sie knapp sein und keinen Bezug zu einem realen Anwendungsfall haben müssen.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel zeigt. „Ein einfaches Beispiel“ sagt beispielsweise nichts über das Beispiel aus und ist daher keine geeignete Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Constructor.nameOfTheProperty verwenden“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) des _Leitfadens zum Schreibstil_.

- [Polyfill für `Constructor.nameOfTheProperty` in `core-js`](https://core-js.io/docs/)
- [es-shims-Polyfill für `Constructor.nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
