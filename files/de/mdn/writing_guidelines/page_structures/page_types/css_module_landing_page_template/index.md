---
title: CSS Modul-Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

> [!NOTE] _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Der Metadaten-Abschnitt am Anfang der Seite wird zur Definition von "Seitenmetadaten" verwendet.
> Die Werte sollten für das jeweilige Modul entsprechend aktualisiert werden.
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
>     Zum Beispiel lautet der Titel für die Modul-Landingpage [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) _CSS Grid Layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/CSS_NameDesModuls` formatiert.
>     Zum Beispiel lautet der Slug für die Modul-Landingpage [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS Modul-Landingpages ist immer `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine relevante Version der Spezifikation gibt, präsentieren Sie sie in einer Aufzählungsliste. Zum Beispiel lautet der Wert für den `spec-urls`-Schlüssel für die Modul-Landingpage [Filter Effects](/de/docs/Web/CSS/CSS_filter_effects):
>
>     ```plain
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
>     ```
>
> ---
>
> **Makros am Seitenanfang**
>
> Der `\{{CSSRef}}` Macro-Aufruf erscheint am Anfang des Inhaltsbereichs (direkt nach den Seitenmetadaten).
> Dieses Makro muss auf jeder CSS Modul-Landingpage vorhanden sein. Es generiert eine passende CSS-Seitenleiste, abhängig von den auf der Seite enthaltenen Tags.
> Entfernen Sie das `\{{MDNSidebar}}` Makro, wenn Sie diese Vorlage verwenden.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt der Seite mit einem einführenden Absatz, der das Modul benennt und erklärt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## NameDesModuls in Aktion

In diesem Abschnitt soll ein Beispiel eingefügt werden, das den Nutzen oder die Leistungsfähigkeit der verschiedenen vom Modul bereitgestellten Eigenschaften veranschaulicht.
Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle darzustellen und Interesse und Neugier bei den Lesern zu wecken, die etwas über dieses Modul lernen.

Geben Sie eine kurze Beschreibung, wie die Leser mit dem Beispiel interagieren können.
Gehen Sie nicht ausführlich auf das Beispiel ein und fügen Sie keine Code-Snippets ein.

Fügen Sie ein Live-Beispiel ein, das das Merkmal mit `\{{EmbedLiveSample}}` demonstriert (siehe Dokumentation zu [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für weitere Informationen).

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die zugehörigen Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langformen der vom Modul bereitgestellten Eigenschaften.

### At-Rules

Liste der vom Modul bereitgestellten CSS-At-Regeln. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-At-Regeln für dieses Modul gibt.

### Funktionen

Liste der vom Modul bereitgestellten CSS-Funktionen. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der vom Modul bereitgestellten CSS-Datentypen. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der vom Modul bereitgestellten API-Ereignisse. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der zugehörigen APIs und Schnittstellen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkZuLeitfaden1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkZuLeitfaden2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Listen Sie alle anderen Eigenschaften, Datentypen oder Glossarbegriffe auf, die für dieses Modul relevant oder damit verwandt sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden ein, die mit dem aktuellen Modul in Zusammenhang stehen. Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anleitungen.

- link1
- link2
- externer_link (Jahr)
