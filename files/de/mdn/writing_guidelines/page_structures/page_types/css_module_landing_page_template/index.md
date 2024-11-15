---
title: CSS-Modul-Landing-Page-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{MDNSidebar}}

> **Hinweis:** _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiteninformationen:**
>
> Die Informationen am Anfang der Seite werden verwendet, um "Seitenmetadaten" zu definieren.
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
>     Dies ist der Text "CSS", gefolgt vom Namen des Moduls.
>     Zum Beispiel ist der Titel für die [grid layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul-Landing-Page _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/CSS_NameOfTheModule` formatiert.
>     Zum Beispiel ist der Slug für die [grid layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul-Landing-Page `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Modul-Landing-Pages ist immer `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine Version der relevanten Spezifikation gibt, listen Sie sie in einer Aufzählungsliste auf. Zum Beispiel lautet der Wert für den `spec-urls`-Schlüssel für die [filter effects](/de/docs/Web/CSS/CSS_filter_effects)-Modul-Landing-Page:
>
>     ```plain
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
>     ```
>
> ---
>
> **Macros am Anfang der Seite**
>
> Der `\{{CSSRef}}`-Makroaufruf erscheint am Anfang des Inhaltsabschnitts (unmittelbar nach den Seiteninformationen).
> Dieser Makro muss auf jeder CSS-Modul-Landing-Page vorhanden sein. Er erstellt eine geeignete CSS-Seitenleiste in Abhängigkeit von den auf der Seite enthaltenen Tags.
> Entfernen Sie den `\{{MDNSidebar}}`-Makro, wenn Sie diese Vorlage verwenden.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der das Modul benennt und beschreibt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## NameOfTheModule in Aktion

In diesem Abschnitt fügen Sie ein Beispiel ein, das die Nützlichkeit oder die Stärke der verschiedenen Eigenschaften dieses Moduls demonstriert.
Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu demonstrieren und Interesse und Neugier bei den Lesern zu wecken, die mehr über dieses Modul erfahren möchten.

Geben Sie eine kurze Beschreibung, wie die Leser mit dem Beispiel interagieren können.
Erläutern Sie das Beispiel nicht im Detail und fügen Sie keine Codeausschnitte ein.

Fügen Sie ein Live-Beispiel hinzu, das die Funktion mit `\{{EmbedLiveSample}}` demonstriert (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Dokumentation für weitere Informationen).

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die zugehörigen Eigenschaften, Funktionen, Datentypen und so weiter aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langschreibweisen von Eigenschaften, die das Modul bereitstellt.

### At-Regeln

Liste der CSS-At-Regeln, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-At-Regeln für dieses Modul gibt.

### Funktionen

Liste der CSS-Funktionen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der CSS-Datentypen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der API-Ereignisse, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der zugehörigen API und Schnittstellen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkToGuide1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkToGuide2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossareinträge, die für dieses Modul relevant oder verwandt sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um diesen Makro zu verwenden, entfernen Sie die Backticks und den Rückwärtsschrägstrich im Markdown-Dokument._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Modul beziehen. Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Anhaltspunkte und Anweisungen.

- link1
- link2
- external_link (Jahr)
