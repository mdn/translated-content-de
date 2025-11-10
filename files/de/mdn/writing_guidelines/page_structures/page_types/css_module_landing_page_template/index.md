---
title: CSS Modul-Startseitentemplate
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

> [!NOTE] > _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Die Metadaten am Anfang der Seite werden verwendet, um "Seiten-Metadaten" zu definieren.
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
>   - : Der `title`-Wert wird oben auf der Seite angezeigt.
>     Dies ist der Text "CSS" gefolgt vom Namen des Moduls.
>     Zum Beispiel lautet der Titel für die [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul-Startseite _CSS Grid-Layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird als `Web/CSS/CSS_NameOfTheModule` formatiert.
>     Zum Beispiel lautet der Slug für die [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul-Startseite `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS Modul-Startseiten ist immer `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine relevante Version der Spezifikation gibt, sollten diese in einer Liste dargestellt werden. Zum Beispiel der Wert für den Schlüssel `spec-urls` für die [Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul-Startseite ist:
>
>     ```plain
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
>     ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Struktur von Seiten: Seitenleisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einleitenden Absatz, der das Modul benennt und sagt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze umfassen.

## NameOfTheModule in Aktion

In diesem Abschnitt fügen Sie ein Beispiel ein, das die Nützlichkeit oder die Leistungsfähigkeit verschiedener von diesem Modul bereitgestellter Eigenschaften demonstriert.
Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu zeigen und Interesse sowie Neugier bei den Lesern zu wecken, die mehr über dieses Modul lernen möchten.

Geben Sie eine kurze Beschreibung, wie Leser mit dem Beispiel interagieren können.
Gehen Sie nicht zu sehr ins Detail, um das Beispiel zu erklären, und fügen Sie keine Code-Snippets ein.

Fügen Sie ein Live-Beispiel ein, das das Feature mit `\{{EmbedLiveSample}}` demonstriert (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Dokumentation für weitere Informationen).

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die verwandten Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Längeneigenschaften, die vom Modul bereitgestellt werden.

### At-Rules

Liste der vom Modul bereitgestellten CSS-At-Rules. Lassen Sie diesen Abschnitt aus, wenn es keine relevanten CSS-At-Rules für dieses Modul gibt.

### Funktionen

Liste der vom Modul bereitgestellten CSS-Funktionen. Lassen Sie diesen Abschnitt aus, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der vom Modul bereitgestellten CSS-Datentypen. Lassen Sie diesen Abschnitt aus, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der vom Modul bereitgestellten API-Ereignisse. Lassen Sie diesen Abschnitt aus, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der verwandten API und Schnittstellen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt aus, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkToGuide1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkToGuide2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Listen Sie alle anderen Eigenschaften, Datentypen oder Glossarbegriffe, die für dieses Modul relevant oder damit verwandt sein könnten.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Schrägstrich in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf das aktuelle Modul beziehen. Überprüfen Sie den [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) Abschnitt in unserem _Stil-Leitfaden_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
