---
title: CSS Modul-Landingpage-Vorlage
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
> Das Frontmatter am oberen Rand der Seite wird verwendet, um "Seiten-Metadaten" zu definieren.
> Die Werte sollten entsprechend für das jeweilige Modul aktualisiert werden.
>
> ```md
> ---
> title: CSS NameDesModuls
> slug: Web/CSS/CSS_NameDesModuls
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
>     Zum Beispiel ist der Titel für die [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul-Landingpage _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/CSS_NameDesModuls` formatiert.
>     Zum Beispiel ist der Slug für die [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul-Landingpage `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS Modul-Landingpages ist `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine relevante Version der Spezifikation gibt, präsentieren Sie diese in einer Aufzählungsliste. Zum Beispiel ist der Wert für den `spec-urls` Schlüssel für die [Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects) Modul-Landingpage:
>
>     ```plain
>     - `https://drafts.fxtf.org/filter-effects-2/`
>     - `https://drafts.fxtf.org/filter-effects-1/`
>     ```
>
> ---
>
> **Oben auf der Seite Makros**
>
> Der `\{{CSSRef}}` Makroaufruf erscheint oben im Inhaltsbereich (unmittelbar unter dem Seiten-Frontmatter).
> Dieses Makro muss auf jeder CSS Modul-Landingpage vorhanden sein. Es erzeugt eine passende CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
> Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Vorlage verwenden.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der das Modul nennt und erklärt, was es tut. Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## NameDesModuls in Aktion

Fügen Sie in diesem Abschnitt ein interaktives Beispiel des Moduls ein, das dazu beiträgt, die Nützlichkeit oder die Leistungsfähigkeit verschiedener durch dieses Modul bereitgestellter Eigenschaften zu demonstrieren. Der Zweck dieses Abschnitts besteht darin, einige Anwendungsfälle zu demonstrieren und bei den Lesern, die das Modul kennenlernen, Interesse und Neugier zu wecken.

Geben Sie eine kurze Beschreibung, wie die Leser mit dem Beispiel interagieren können. Gehen Sie nicht zu sehr ins Detail, um das Beispiel zu erklären, und fügen Sie keine Codebeispiele ein. Fügen Sie einen Link zum Quellcode für das Beispiel im [`css-examples`](https://github.com/mdn/css-examples/tree/main/modules) Repository hinzu. Zum Beispiel für das interaktive Beispiel des Filter-Effekte-Moduls würden Sie sagen: "Um den Code für dieses Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/filters.html)."

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die verwandten Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langform-Eigenschaften, die das Modul bereitstellt.

### At-Regeln

Liste der CSS At-Regeln, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS At-Regeln für dieses Modul gibt.

### Funktionen

Liste der CSS Funktionen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS Funktionen für dieses Modul gibt.

### Datentypen

Liste der CSS Datentypen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS Datentypen für dieses Modul gibt.

### Ereignisse

Liste der API-Ereignisse, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der verwandten API und Schnittstellen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkZuLeitfaden1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkZuLeitfaden2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossarbegriffe, die relevant oder mit diesem Modul verwandt sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Modul in Verbindung stehen. Überprüfen Sie den [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) Abschnitt in unserem _Writing Style Guide_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
