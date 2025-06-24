---
title: CSS Modul-Vorlagen-Seite
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE] > _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Meta-Daten der Seite:**
>
> Die Meta-Daten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
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
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Der Wert `title` wird oben auf der Seite angezeigt.
>     Dies ist der Text "CSS" gefolgt vom Namen des Moduls.
>     Zum Beispiel, der Titel für die Modul-Landing-Seite des [Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) ist _CSS grid layout_.
> - **slug**
>   - : Der Wert `slug` ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert als `Web/CSS/CSS_NameOfTheModule`.
>     Zum Beispiel, der Slug für die Modul-Landing-Seite des [Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) ist `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der Wert `page-type` für CSS-Modul-Landing-Seiten ist immer `css-module`.
> - **spec-urls**
>
>   - : Der Wert `spec-urls` ist eine URL der Spezifikation. Wenn es mehr als eine relevante Version der Spezifikation gibt, präsentieren Sie diese in einer Aufzählungsliste. Zum Beispiel, der Wert für den Schlüssel `spec-urls` für die Modul-Landing-Seite der [Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) ist:
>
>     ```plain
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
>     ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfäden und Referenzseiten.
>     Siehe [Seitenstrukturen: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der das Modul benennt und beschreibt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## NameOfTheModule in Aktion

In diesem Abschnitt ein Beispiel einfügen, das hilft, die Nützlichkeit oder die Stärke der verschiedenen von diesem Modul bereitgestellten Eigenschaften zu demonstrieren.
Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu demonstrieren und Interesse und Neugierde bei den Lesern zu wecken, die dieses Modul kennenlernen.

Geben Sie eine kurze Beschreibung, wie Leser mit dem Beispiel interagieren können.
Gehen Sie nicht zu sehr ins Detail, um das Beispiel zu erklären, und fügen Sie keine Code-Snippets ein.

Fügen Sie ein Live-Beispiel hinzu, das das Feature mit `\{{EmbedLiveSample}}` demonstriert (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Dokumentation für weitere Informationen).

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die verwandten Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langform-Eigenschaften, die das Modul bereitstellt.

### At-Regeln

Liste der CSS At-Regeln, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS At-Regeln für dieses Modul gibt.

### Funktionen

Liste der CSS-Funktionen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der CSS-Datentypen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der API-Ereignisse, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der verwandten APIs und Schnittstellen, die das Modul bereitstellt. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkToGuide1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkToGuide2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossarbegriffe, die für dieses Modul relevant oder mit ihm verbunden sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Modul in Zusammenhang stehen. Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
