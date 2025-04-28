---
title: CSS-Modul-Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

> **Note:** _Bitte denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Metadaten:**
>
> Der Abschnitt am Anfang der Seite wird verwendet, um "Seitenmetadaten" zu definieren.
> Die Werte sollten entsprechend dem jeweiligen Modul aktualisiert werden.
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
>     Es handelt sich um den Text "CSS" gefolgt vom Namen des Moduls.
>     Zum Beispiel lautet der Titel für die Landingpage des Moduls [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`.
>     Dieser wird im Format `Web/CSS/CSS_NameOfTheModule` formatiert.
>     Zum Beispiel ist der Slug für die Landingpage des Moduls [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Modul-Landingpages ist immer `css-module`.
> - **spec-urls**
>
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation. Falls es mehr als eine Version der relevanten Spezifikation gibt, geben Sie diese in einer Aufzählungsliste an. Zum Beispiel ist der Wert für den `spec-urls`-Schlüssel für die Landingpage des Moduls [Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects):
>
>     ```plain
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
>     ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Details.
>
> ---
>
> _Bitte denken Sie daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Inhalt auf der Seite mit einem einführenden Absatz, der das Modul benennt und sagt, was es tut.
Dies sollte idealerweise ein oder zwei kurze Sätze sein.

## NameOfTheModule in Aktion

In diesem Abschnitt sollte ein Beispiel enthalten sein, das die Nützlichkeit oder die Leistungsfähigkeit der verschiedenen von diesem Modul bereitgestellten Eigenschaften demonstriert.
Der Zweck dieses Abschnitts ist es, einige Anwendungsfälle zu zeigen und Interesse und Neugier bei den Lesern zu wecken, die über dieses Modul lernen.

Geben Sie eine kurze Beschreibung, wie Leser mit dem Beispiel interagieren können.
Gehen Sie nicht detailliert darauf ein, das Beispiel zu erklären, und fügen Sie keine Codeausschnitte hinzu.

Fügen Sie ein Live-Beispiel hinzu, das das Feature mithilfe von `\{{EmbedLiveSample}}` demonstriert (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) Dokumentation für weitere Informationen).

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die zugehörigen Eigenschaften, Funktionen, Datentypen usw. aufzulisten.

### Eigenschaften

Liste aller Kurz- und Langform-Eigenschaften, die vom Modul bereitgestellt werden.

### At-Regeln

Liste der CSS-At-Regeln, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-At-Regeln für dieses Modul gibt.

### Funktionen

Liste der CSS-Funktionen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Funktionen für dieses Modul gibt.

### Datentypen

Liste der CSS-Datentypen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten CSS-Datentypen für dieses Modul gibt.

### Ereignisse

Liste der API-Ereignisse, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten Ereignisse für dieses Modul gibt.

### Schnittstellen

Liste der zugehörigen APIs und Schnittstellen, die vom Modul bereitgestellt werden. Lassen Sie diesen Abschnitt weg, wenn es keine relevanten API-Schnittstellen für dieses Modul gibt.

## Leitfäden

- LinkZuLeitfaden1
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.
- LinkZuLeitfaden2
  - : Beschreibung des Leitfadens in ein oder zwei Sätzen.

## Verwandte Konzepte

Liste aller anderen Eigenschaften, Datentypen oder Glossarbegriffe, die möglicherweise relevant oder mit diesem Modul verwandt sind.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die mit dem aktuellen Modul verwandt sind. Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
