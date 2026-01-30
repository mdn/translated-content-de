---
title: CSS-Modul-Seitenschablone
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template
l10n:
  sourceCommit: e0a2b683c4ddaeecdc4ddebf16e4a72c2dda17ac
---

> [!NOTE]
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite definieren "Seiten-Metadaten".
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
>   - : Der Wert `title` wird oben auf der Seite angezeigt.
>     Dies ist der Text "CSS", gefolgt vom Namen des Moduls.
>     Zum Beispiel ist der Titel für die Modul-Seite zum [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) _CSS grid layout_.
> - **slug**
>   - : Der Wert `slug` ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Diese wird als `Web/CSS/Guides/NameOfTheModule` formatiert.
>     Zum Beispiel ist der Slug für die [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul-Seite `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : Der Wert `page-type` für CSS-Modul-Seiten ist immer `css-module`.
> - **spec-urls**
>   - : Der Wert `spec-urls` ist eine URL der Spezifikation oder eine Liste der URLs mehrerer Level derselben Spezifikation in den Fällen, in denen es mehrere Versionen einer Spezifikation gibt, z.B. Level 1, 2 und 3. Nur die Module einbeziehen, die Überarbeitungen einer einzigen Spezifikation sind, in absteigender Reihenfolge. Zum Beispiel ist der Schlüssel `spec-urls` für die Modul-Seite zu den [Filter-Effekten](/de/docs/Web/CSS/Guides/Filter_effects) wie folgt:
>
> ```plain
> spec-urls:
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der das Modul benennt und erklärt, was es tut. Geben Sie einen kurzen Überblick über die in der Spezifikation definierten Funktionen und, falls relevant, beschreiben Sie, wie sie mit Funktionen aus verwandten Spezifikationen interagieren. Diese Beschreibung ist ein kurzer Überblick, KEINE Anleitung oder ein Leitfaden, also halten Sie sie knapp.

## NameOfTheModule in Aktion

In diesem Abschnitt fügen Sie ein Beispiel mit `\{{EmbedLiveSample}}` ein (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für weitere Informationen), das dabei hilft, die Nützlichkeit und die Leistungsfähigkeit der verschiedenen von diesem Modul bereitgestellten Eigenschaften zu demonstrieren. Der Zweck dieses Abschnitts ist es, Anwendungsfälle zu zeigen und Interesse und Neugierde bei den Lesern zu wecken, die mehr über dieses Modul erfahren. Halten Sie den Code verborgen, es sei denn, er ist zum Verständnis der Anwendungsfälle unerlässlich (z.B. bei Namespacing oder Verschachtelung).

Geben Sie, falls relevant, eine kurze Beschreibung dazu, wie die Leser mit dem Beispiel interagieren können.

## Referenz

Erstellen Sie die entsprechenden Unterabschnitte zur Auflistung der verwandten Eigenschaften, Funktionen, Datentypen usw. Der Referenzabschnitt sollte nur die in der Einzelspezifikation eingeführten Funktionen enthalten. Wenn eine Funktion in der Spezifikation existiert, aber nicht unterstützt wird, erwähnen Sie dies in einem Absatz unter der entsprechenden Überschrift. Verwandte Funktionen, die in anderen Spezifikationen definiert sind, gehören unter "verwandte Konzepte" und NICHT in diesen Abschnitt.

### Eigenschaften

Eine Liste aller Kurz- und Langform-Eigenschaften, die von dem Modul bereitgestellt werden und die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die vom Modul eingeführten Eigenschaften beschreibt, die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Eigenschaften definiert.

### At-Regeln

Eine Liste von CSS-At-Regeln, die von dem Modul bereitgestellt werden und die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die At-Regeln beschreibt, die vom Modul eingeführt wurden und die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine At-Regeln definiert.

### Funktionen

Eine Liste von CSS-Funktionen, die von dem Modul bereitgestellt werden und die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die vom Modul eingeführten Funktionen beschreibt, die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine CSS-Funktionen definiert.

### Datentypen

Eine Liste der von dem Modul bereitgestellten CSS-Datentypen, die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die vom Modul eingeführten Datentypen beschreibt, die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Datentypen definiert.

### Ereignisse

Eine Liste der von dem Modul bereitgestellten API-Ereignisse, die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die vom Modul eingeführten Ereignisse beschreibt, die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine Ereignisse definiert.

### Schnittstellen

Eine Liste der von dem Modul bereitgestellten verwandten API-Schnittstellen, die von mindestens einem großen Browser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die vom Modul eingeführten Schnittstellen beschreibt, die von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt weg, wenn das Modul keine API-Schnittstellen definiert.

### Glossarbegriffe und Definitionen

Listen Sie die verwandten Glossarbegriffe und andere Begriffe auf, die innerhalb der oben aufgeführten Referenzseiten definiert sind. Lassen Sie diesen Abschnitt weg, wenn es nichts Relevantes gibt, das enthalten werden könnte.

## Leitfäden

Eine Definitionsliste der verwandten Leitfäden innerhalb der Modulstruktur, in aufsteigender Komplexität, gefolgt von verwandten Leitfäden aus anderen Modulen. Nur MDN-Leitfäden einschließen.

- LinkToGuide1
  - : Eine einzeilige Beschreibung des Leitfadens.
- LinkToGuide2
  - : Eine einzeilige Beschreibung des Leitfadens.

## Verwandte Konzepte

Listen Sie alle anderen Eigenschaften, Datentypen, Glossarbegriffe usw. auf, die mit diesem Modul in Verbindung stehen.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu allen anderen Referenzseiten und anderen Inhalten hinzu, die relevant sind, aber nicht in die anderen Abschnitte passen. Wenn es relevante externe Leitfäden gibt, die einer Verlinkung wert sind, platzieren Sie sie am Ende der Liste (nicht unter dem Abschnitt "Leitfäden", der auf MDN-Leitfäden beschränkt ist). Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Leitfaden zum Schreibstil_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
