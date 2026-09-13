---
title: Vorlage für JavaScript-Eigenschaften mit statischem Accessor
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_accessor_property_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diesen gesamten erläuternden Hinweis vor der Veröffentlichung_
>
> ---
>
> **Frontmatter der Seite:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten für die jeweilige Eigenschaft entsprechend aktualisiert werden.
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
>   - : Überschrift, die oben auf der Seite angezeigt wird. Format: `Constructor.nameOfTheProperty`.
> - **short-title**
>   - : Ein kurzer Titel, der in Navigationspfaden und Seitenleisten verwendet wird. Format: `nameOfTheProperty`. Beispielsweise hat die Eigenschaft [`RegExp.input`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) den _short-title_ `input ($_)`.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies wird wie `Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty` formatiert.
> - **page-type**
>   - : Der Schlüssel `page-type` für Seiten zu JavaScript-Eigenschaften mit statischem Accessor ist `javascript-static-accessor-property`.
> - **status**
>   - : Kennzeichnungen, die den Status dieser Funktion beschreiben. Ein Array, das eine oder mehrere der folgenden Angaben enthalten kann: `experimental`, `deprecated`, `non-standard`. Dieser Schlüssel sollte nicht manuell gesetzt werden: Er wird automatisch auf Grundlage der Werte in den Browser-Kompatibilitätsdaten für die Funktion gesetzt. Siehe [„Wie Funktionsstatus hinzugefügt oder aktualisiert werden“](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Ersetzen Sie den Platzhalterwert `javascript.builtins.Constructor.nameOfTheProperty` durch die Abfragezeichenfolge für die Eigenschaft im [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data).
>     Die Toolchain verwendet den Schlüssel automatisch, um die Abschnitte zur Kompatibilität und Spezifikation auszufüllen (und ersetzt die Makros `\{{Compat}}` und `\{{Specifications}}`).
>
>     Beachten Sie, dass Sie möglicherweise zuerst einen Eintrag für die Eigenschaft in unserem [Browser-Compat-Data-Repository](https://github.com/mdn/browser-compat-data) erstellen bzw. aktualisieren müssen und dass der Eintrag für die API Spezifikationsinformationen enthalten muss.
>     Siehe unseren [Leitfaden dazu](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Für Seiten zu JavaScript-Eigenschaften mit statischem Accessor lautet dies `jsref`.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> ---
>
> **Makros am Seitenanfang**
>
> Am Anfang des Inhaltsabschnitts (direkt unter dem Frontmatter der Seite) erscheinen mehrere Makroaufrufe.
>
> Diese Makros werden automatisch von der Toolchain hinzugefügt (es ist nicht notwendig, sie hinzuzufügen oder zu entfernen):
>
> - `\{{SeeCompatTable}}` — dies erzeugt ein Banner **Dies ist eine experimentelle Technologie**, das darauf hinweist, dass die Technologie [experimentell](/de/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental) ist.
>   Wenn sie experimentell ist und die Technologie in Firefox hinter einer Präferenz verborgen ist, sollten Sie außerdem einen Eintrag dafür auf der Seite [Experimentelle Funktionen in Firefox](/de/docs/Mozilla/Firefox/Experimental_features) ausfüllen.
> - `\{{Non-standard_Header}}` — dies erzeugt ein Banner **Nicht standardisiert**, das darauf hinweist, dass die Funktion nicht Teil einer Spezifikation ist.
>
> Geben Sie Status-Header-Makros nicht manuell an. Informationen dazu, wie diese Status zur Seite hinzugefügt werden, finden Sie im Abschnitt [Wie Funktionsstatus hinzugefügt oder aktualisiert werden](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> Beispiele für die Banner **Experimentell** und **Nicht standardisiert** werden direkt nach diesem Hinweisblock angezeigt.
>
> _Denken Sie daran, diesen gesamten erläuternden Hinweis vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip zum Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben über die Anforderungen dieser Vorlage hinaus konsistente Strukturen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Suchen Sie zunächst nach vorhandener Dokumentation für ähnliche APIs und übernehmen Sie deren Struktur.

{{SeeCompatTable}}{{Non-standard_Header}}

Die statische Accessor-Eigenschaft **`Constructor.nameOfTheProperty`** gibt etwas zurück. Dies sollten idealerweise 1 oder 2 kurze Sätze sein. Halten Sie dies mit der Landingpage der Klasse oder des Namespace synchron — beispielsweise sollte die Landingpage entsprechende Zeilen wie diese enthalten:

```md
- \{{jsxref("Constructor.nameOfTheProperty")}}
  - : Returns something.
```

## Wert

Fügen Sie eine Beschreibung des Werts der Eigenschaft ein, einschließlich seines Datentyps und dessen, was er darstellt.

Fügen Sie für eine reine Getter-Eigenschaft den folgenden Absatz hinzu:

> Es gibt keinen Setter für `nameOfTheProperty`, daher können Sie den Wert dieser Eigenschaft nicht durch Zuweisung ändern.

Beschreiben Sie für eine Eigenschaft mit einem Setter die Werte, die sie akzeptiert, und die Auswirkung der Zuweisung eines Werts.

## Beschreibung

Der größte Teil der Beschreibung der Eigenschaft sollte hier stehen. Seien Sie so umfassend wie möglich. Wenn viele Seiten dieselbe Beschreibung verwenden, sollten Sie erwägen, einen neuen Abschnitt zur Landingpage der Klasse oder des Namespace hinzuzufügen und von hier aus darauf zu verlinken.

Leser sollten die API anhand dieses Abschnitts vollständig verstehen können, ohne den folgenden Beispielabschnitt lesen zu müssen. Falls Beispiele in diesem Abschnitt erforderlich sind, sollten sie knapp sein und müssen nicht für reale Anwendungsfälle relevant sein.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine aussagekräftige Überschrift

Jedes Beispiel muss eine H3-Überschrift haben, die das Beispiel benennt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte knapp sein. Verwenden Sie für eine längere Beschreibung den Absatz nach der Überschrift. Das erste Beispiel kann „Verwendung von Constructor.nameOfTheProperty“ heißen.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Browser-Kompatibilität

`\{{Compat}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf die aktuelle Eigenschaft beziehen. Weitere Richtlinien finden Sie im Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- [Polyfill von `Constructor.nameOfTheProperty` in `core-js`](https://github.com/zloirock/core-js#anchor)
- [es-shims-Polyfill von `Constructor.nameOfTheProperty`](https://www.npmjs.com/package/es-aggregate-error)
- link1
- link2
- external_link (Jahr)
