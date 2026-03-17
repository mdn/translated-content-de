---
title: CSS-Modulseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

> [!NOTE]
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiteninformationen:**
>
> Die Metadaten am Anfang der Seite definieren die "Seitenmetadaten".
> Die Werte sollten für das jeweilige Modul entsprechend aktualisiert werden.
>
> ```md
> ---
> title: CSS NameOfTheModule
> slug: Web/CSS/Guides/NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt.
>     Dies ist der Text "CSS" gefolgt vom Namen des Moduls.
>     Zum Beispiel ist der Titel für die Modulseite [grid layout](/de/docs/Web/CSS/Guides/Grid_layout) _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/Guides/NameOfTheModule` formatiert.
>     Zum Beispiel ist der Slug für die Modulseite [grid layout](/de/docs/Web/CSS/Guides/Grid_layout) `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Modulseiten ist immer `css-module`.
> - **spec-urls**
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation oder eine Aufzählungsliste der URLs von mehreren Stufen derselben Spezifikation in Fällen, in denen es mehrere Versionen einer Spezifikation gibt, wie zum Beispiel Stufen 1, 2 und 3. Nehmen Sie nur die Module auf, die Überarbeitungen einer einzigen Spezifikation sind, in absteigender Reihenfolge. Zum Beispiel ist der `spec-urls`-Schlüssel für die Modulseite [filter effects](/de/docs/Web/CSS/Guides/Filter_effects) wie folgt:
>
> ```plain
> spec-urls:
>     - https://drafts.csswg.org/filter-effects-2/
>     - https://drafts.csswg.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfäden und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der das Modul benennt und erklärt, was es macht. Geben Sie kurz einen Überblick über die in der Spezifikation definierten Funktionen und beschreiben Sie, falls relevant, wie sie mit Funktionen aus verwandten Spezifikationen interagieren. Diese Beschreibung ist ein schneller Überblick, KEINE Anleitung oder ein Leitfaden, also halten Sie sie kurz.

## NameOfTheModule in Aktion

In diesem Abschnitt sollten Sie ein Beispiel mit `\{{EmbedLiveSample}}` einfügen (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für mehr Informationen), das hilft, die Nützlichkeit und Stärke der verschiedenen vom Modul bereitgestellten Eigenschaften zu demonstrieren. Der Zweck dieses Abschnitts ist es, Anwendungsfälle zu demonstrieren und Interesse und Neugier bei den Lesern zu wecken, die mehr über dieses Modul lernen möchten. Halten Sie den Code verborgen, es sei denn, er ist für das Verständnis der Anwendungsfälle essentiell (beispielsweise bei Namensvergabe oder Verschachtelung).

Falls relevant, geben Sie eine kurze Beschreibung, wie Leser mit dem Beispiel interagieren können.

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die verwandten Eigenschaften, Funktionen, Datentypen usw. aufzulisten. Der Referenzabschnitt sollte nur die in der einzelnen Spezifikation eingeführten Funktionen umfassen. Wenn eine Funktion in der Spezifikation enthalten, aber nicht unterstützt wird, erwähnen Sie dies in einem Absatz unter der entsprechenden Überschrift. Verwandte Funktionen, die in anderen Spezifikationen definiert sind, gehören unter "verwandte Konzepte", und NICHT in diesen Abschnitt.

### Eigenschaften

Eine Liste aller von dem Modul bereitgestellten Kurz- und Längeneigenschaften, die in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Eigenschaften beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Eigenschaften definiert.

### At-Rules

Eine Liste der von dem Modul bereitgestellten CSS-At-Rules, die in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die At-Rules beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine At-Rules definiert.

### Funktionen

Eine Liste der von dem Modul bereitgestellten CSS-Funktionen, die in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Funktionen beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine CSS-Funktionen definiert.

### Datentypen

Eine Liste der von dem Modul bereitgestellten CSS-Datentypen, die in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Datentypen beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Datentypen definiert.

### Ereignisse

Eine Liste der von dem Modul bereitgestellten API-Ereignisse, die in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Ereignisse beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Ereignisse definiert.

### Schnittstellen

Eine Liste der verwandten API-Schnittstellen, die von dem Modul bereitgestellt werden und in mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Schnittstellen beschreibt, die von dem Modul eingeführt wurden, aber noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine API-Schnittstellen definiert.

### Glossarbegriffe und Definitionen

Listen Sie die relevanten Glossarbegriffe und andere Begriffe auf, die innerhalb der oben aufgeführten Referenzseiten definiert sind. Lassen Sie diesen Abschnitt weg, wenn nichts Relevantes einzuschließen ist.

## Leitfäden

Eine Definitionsliste der verwandten Leitfäden innerhalb der Modulstruktur, in aufsteigender Komplexitätsreihenfolge, gefolgt von verwandten Leitfäden aus anderen Modulen. Schließen Sie nur MDN-Leitfäden ein.

- LinkToGuide1
  - : Eine Satzbeschreibung des Leitfadens.
- LinkToGuide2
  - : Eine Satzbeschreibung des Leitfadens.

## Verwandte Konzepte

Listen Sie alle anderen Eigenschaften, Datentypen, Glossarbegriffe usw. auf, die mit diesem Modul in Zusammenhang stehen.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu anderen Referenzseiten und Inhalten hinzu, die relevant sind, aber nicht in die anderen Abschnitte passen. Wenn es relevante externe Leitfäden gibt, die einen Link wert sind, platzieren Sie sie am Ende der Liste (nicht unter dem Abschnitt "Leitfäden", der auf MDN-Leitfäden beschränkt ist). Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Richtlinien.

- link1
- link2
- external_link (Jahr)
