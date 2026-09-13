---
title: Vorlage für JavaScript-Instanz-Accessor-Eigenschaftsseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_accessor_property_page_template
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
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Format: `Constructor.prototype.nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`byteLength`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) der Klasse [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) den _title_ `ArrayBuffer.prototype.byteLength`.
>
>     In fast allen Fällen werden Accessor-Eigenschaften auf `Constructor.prototype` installiert. Wenn sie stattdessen auf jeder Instanz installiert wird, verwenden Sie `Constructor: nameOfTheProperty`. Prüfen Sie zur Genauigkeit unbedingt die Spezifikation.
> - **short-title**
>   - : Ein Kurztitel, der in Breadcrumbs und Sidebars verwendet wird. Format: `nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`byteLength`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength) den _short-title_ `byteLength`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Instanz-Accessor-Eigenschaften ist `javascript-instance-accessor-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieses Features beschreiben. Ein Array, das eines oder mehrere der folgenden Elemente enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch anhand der Werte in den Browser-Kompatibilitätsdaten für das Feature gesetzt. Siehe [„Wie Feature-Status hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Kompatibilitäts- und Spezifikationsabschnitte auszufüllen (und ersetzt dabei die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zunächst einen Eintrag für die Eigenschaft in unserem [Repository für Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data) erstellen bzw. aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Dies ist `jsref` für Seiten zu JavaScript-Instanz-Accessor-Eigenschaften.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (unmittelbar unter dem Front Matter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es besteht keine Notwendigkeit, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Diese Technologie ist experimentell**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Pref verborgen ist, sollten Sie auch einen Eintrag dafür auf der Seite [Experimentelle Features in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass das Feature nicht Teil einer Spezifikation ist.
>
> Fügen Sie Status-Header-Makros nicht manuell hinzu. Lesen Sie den Abschnitt [Wie Feature-Status hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated), um diese Status zur Seite hinzuzufügen.
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Notizblock angezeigt.
>
> _Denken Sie daran, diese gesamte erläuternde Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **schauen Sie sich um**! Viele verwandte Seiten haben konsistente Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die Accessor-Eigenschaft **`nameOfTheProperty`** von Instanzen von \\{{jsxref("Constructor")}} gibt etwas zurück. Dies sollte idealerweise aus ein oder zwei kurzen Sätzen bestehen. Halten Sie dies mit der Einstiegsseite des Konstruktors synchron — beispielsweise sollte die Einstiegsseite Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.prototype.nameOfTheProperty")}}
  - : Returns something.
```

## Wert

Fügen Sie eine Beschreibung des Werts der Eigenschaft hinzu, einschließlich ihres Datentyps und dessen, was er darstellt.

Fügen Sie für eine reine Getter-Eigenschaft den folgenden Absatz hinzu:

> Für `nameOfTheProperty` gibt es keinen Setter. Daher können Sie den Wert dieser Eigenschaft nicht durch Zuweisung ändern.

Beschreiben Sie für eine Eigenschaft mit einem Setter die Werte, die sie akzeptiert, und die Auswirkung der Zuweisung eines Werts.

## Beschreibung

Der Großteil der Beschreibung der Eigenschaft sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn es viele Seiten gibt, die dieselbe Beschreibung teilen, erwägen Sie, einen neuen Abschnitt auf der Einstiegsseite der Klasse hinzuzufügen und von hier darauf zu verlinken. Beispielsweise wird auf [Array-Methoden und leere Slots](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots) von jeder Seite zu Array-Methoden verlinkt.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den untenstehenden Beispielabschnitt lesen zu müssen. Beispiele, die in diesem Abschnitt präsentiert werden, sollten, falls erforderlich, kurz sein und müssen keinen Bezug zur Praxis haben.

## Beispiele

Beachten Sie, dass wir die Pluralform „Beispiele“ verwenden, auch wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte kurz sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor.prototype.nameOfTheProperty` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.prototype.nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
