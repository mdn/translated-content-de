---
title: CSS Modulvorlagen für Landingpages
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: da5c245a58ef530e508d86e6c7c98ad39f1a20b0
---

{{MDNSidebar}}

> **Note:** _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Modul aktualisiert werden.
>
> ```md
> ---
> title: CSS NameOfTheModule
> slug: Web/CSS/CSS_NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> ---
> ```
>
> - **title**
>   - : Der `title`-Wert wird oben auf der Seite angezeigt.
>     Dies ist der Text "CSS" gefolgt vom Namen des Moduls.
>     Beispielsweise ist der Titel für die [grid layout](/de/docs/Web/CSS/CSS_grid_layout) Modul-Landingpage _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/CSS_NameOfTheModule` formatiert.
>     Beispielsweise ist der Slug für die [grid layout](/de/docs/Web/CSS/CSS_grid_layout) Modul-Landingpage `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS Modul-Landingpages ist `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine relevante Version der Spezifikation gibt, stellen Sie diese in einer Aufzählungsliste dar. Beispielsweise ist der Wert für den `spec-urls` Schlüssel für die [filter effects](/de/docs/Web/CSS/CSS_filter_effects) Modul-Landingpage:
>
>     ```plain
>     - `https://drafts.fxtf.org/filter-effects-2/`
>     - `https://drafts.fxtf.org/filter-effects-1/`
>     ```
>
> ---
>
> **Makros am Seitenanfang**
>
> Der Makroaufruf `\{{CSSRef}}` erscheint oben im Inhaltsbereich (direkt unter dem Seiten-Frontmatter).
> Dieses Makro muss auf jeder CSS Modul-Landingpage vorhanden sein. Es erzeugt je nach den auf der Seite enthaltenen Tags eine geeignete CSS-Seitenleiste.
> Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Vorlage verwenden.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt der Seite mit einem einleitenden Absatz, der das Modul benennt und sagt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## NameOfTheModule in Aktion

In diesem Abschnitt fügen Sie ein interaktives Beispiel des Moduls ein, das die Nützlichkeit oder die Leistungsfähigkeit der verschiedenen Eigenschaften dieses Moduls verdeutlicht. Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu demonstrieren und das Interesse und die Neugier der Leser zu wecken, die mehr über dieses Modul lernen wollen.

Geben Sie eine kurze Beschreibung, wie die Leser mit dem Beispiel interagieren können. Gehen Sie nicht zu sehr ins Detail, um das Beispiel zu erklären, und fügen Sie keine Codebeispiele hinzu. Fügen Sie einen Link zum Quellcode für das Beispiel im [`css-examples`](https://github.com/mdn/css-examples/tree/main/modules) Repository hinzu. Zum Beispiel, für das interaktive Beispiel des filter effects Moduls, würden Sie sagen:
"Um den Code für dieses Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/filters.html)."

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die verwandten Eigenschaften, Funktionen, Datentypen und dergleichen aufzulisten.

### Eigenschaften

Liste aller abgekürzten und ausführlichen Eigenschaften, die das Modul bereitstellt.

### At-Regeln

Liste der CSS At-Regeln, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS At-Regeln für dieses Modul gibt.

### Funktionen

Liste der CSS Funktionen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS Funktionen für dieses Modul gibt.

### Datentypen

Liste der CSS Datentypen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS Datentypen für dieses Modul gibt.

### Ereignisse

Liste der API-Ereignisse, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der verwandten API und Schnittstellen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkZuLeitfaden1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkZuLeitfaden2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossarbegriffe, die für dieses Modul relevant oder damit verwandt sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen Modul zusammenhängen. Schauen Sie sich den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anleitungen an.

- link1
- link2
- external_link (Jahr)
