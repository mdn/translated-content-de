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
> **Page front matter:**
>
> Der Frontmatter oben auf der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
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
>     Zum Beispiel ist der Titel für die Modul-Landingpage des [grid layout](/de/docs/Web/CSS/CSS_grid_layout) _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert als `Web/CSS/CSS_NameDesModuls`.
>     Zum Beispiel ist der Slug für die Modul-Landingpage des [grid layout](/de/docs/Web/CSS/CSS_grid_layout) `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS Modul-Landingpages ist `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Wenn es mehr als eine Version der relevanten Spezifikation gibt, führen Sie diese in einer Aufzählungsliste auf. Zum Beispiel ist der Wert für den `spec-urls`-Schlüssel für die Modul-Landingpage der [filter effects](/de/docs/Web/CSS/CSS_filter_effects):
>
>     ```plain
>     - `https://drafts.fxtf.org/filter-effects-2/`
>     - `https://drafts.fxtf.org/filter-effects-1/`
>     ```
>
> ---
>
> **Top-of-page macros**
>
> Der Aufruf des `\{{CSSRef}}`-Makros erscheint oben im Inhaltsbereich (sofort unterhalb des Frontmatters der Seite).
> Dieses Makro muss auf jeder CSS Modul-Landingpage vorhanden sein. Es erzeugt eine geeignete CSS-Seitenleiste, je nach den auf der Seite enthaltenen Tags.
> Entfernen Sie das `\{{MDNSidebar}}`-Makro, wenn Sie diese Vorlage verwenden.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der das Modul nennt und beschreibt, was es macht. Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## NameOfTheModule in Aktion

Fügen Sie in diesem Abschnitt ein interaktives Beispiel des Moduls ein, das hilft, die Nützlichkeit oder die Leistungsfähigkeit der verschiedenen vom Modul bereitgestellten Eigenschaften zu demonstrieren. Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu zeigen und Interesse und Neugier bei den Lesern zu wecken, die etwas über dieses Modul lernen.

Geben Sie eine kurze Beschreibung, wie die Leser mit dem Beispiel interagieren können. Gehen Sie nicht zu sehr ins Detail, um das Beispiel zu erklären, und fügen Sie keine Codebeispiele ein. Fügen Sie einen Link zum Quellcode des Beispiels im [`css-examples`](https://github.com/mdn/css-examples/tree/main/modules) Repository hinzu. Zum Beispiel würden Sie für das interaktive Beispiel des filter effects Moduls sagen: "Um den Code für dieses Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/filters.html)."

## Referenz

Erstellen Sie die entsprechenden Unterabschnitte, um die zugehörigen Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langform-Eigenschaften, die das Modul bereitstellt.

### At-Regeln

Liste der vom Modul bereitgestellten CSS At-Regeln. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS At-Regeln für dieses Modul gibt.

### Funktionen

Liste der vom Modul bereitgestellten CSS-Funktionen. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der vom Modul bereitgestellten CSS-Datentypen. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der vom Modul bereitgestellten API-Ereignisse. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der zugehörigen API und Schnittstellen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkZuLeitfaden1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkZuLeitfaden2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossarbegriffe, die für dieses Modul relevant oder verwandt sein können.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Anleitungen hinzu, die mit dem aktuellen Modul zusammenhängen. Überprüfen Sie den [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) Abschnitt in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
