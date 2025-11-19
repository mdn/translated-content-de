---
title: CSS-Modul-Landingpage-Vorlage
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: 826b3d3f2200c60e6a39648081283a8c93bcb07f
---

> [!NOTE]
> _Erinnern Sie sich daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._
>
> ---
>
> **Seiten-Frontmatter:**
>
> Das Frontmatter am Anfang der Seite definiert die "Seitenmetadaten".
> Die Werte sollten entsprechend für das jeweilige Modul aktualisiert werden.
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
>     Zum Beispiel ist der Titel für die Modul-Landingpage des [grid layouts](/de/docs/Web/CSS/Guides/Grid_layout) _CSS grid layout_.
> - **slug**
>   - : Der `slug`-Wert ist das Ende des URL-Pfades nach `https://developer.mozilla.org/de/docs/`.
>     Dies wird formatiert als `Web/CSS/Guides/NameOfTheModule`.
>     Zum Beispiel ist der Slug für die Modul-Landingpage des [grid layouts](/de/docs/Web/CSS/Guides/Grid_layout) `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : Der `page-type`-Wert für CSS-Modul-Landingpages ist immer `css-module`.
> - **spec-urls**
>   - : Der `spec-urls`-Wert ist eine URL der Spezifikation oder eine Aufzählungsliste der URLs mehrerer Ebenen derselben Spezifikation in Fällen, in denen es mehrere Versionen einer Spezifikation gibt, wie z. B. Ebenen 1, 2 und 3. Fügen Sie nur die Module hinzu, die Überarbeitungen einer einzigen Spezifikation sind, in absteigender Reihenfolge. Zum Beispiel ist der `spec-urls`-Schlüssel für die Modul-Landingpage der [filter effects](/de/docs/Web/CSS/Guides/Filter_effects) wie folgt:
>
> ```plain
> spec-urls:
>     - https://drafts.fxtf.org/filter-effects-2/
>     - https://drafts.fxtf.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : Dies ist `cssref` für alle CSS-Leitfaden- und Referenzseiten.
>     Siehe [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) für Einzelheiten.
>
> ---
>
> _Erinnern Sie sich daran, diesen Hinweisblock vor der Veröffentlichung zu entfernen._

Beginnen Sie den Seiteninhalt mit einem einleitenden Absatz, der das Modul benennt und erklärt, was es tut. Geben Sie kurz eine Übersicht über die in der Spezifikation definierten Funktionen und, falls relevant, beschreiben Sie, wie sie mit Funktionen aus verwandten Spezifikationen interagieren. Diese Beschreibung ist eine kurze Übersicht, KEIN Tutorial oder Leitfaden, also halten Sie es knapp.

## NameOfTheModule in Aktion

In diesem Abschnitt fügen Sie ein Beispiel unter Verwendung von `\{{EmbedLiveSample}}` ein (siehe [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für weitere Informationen), das hilft, den Nutzen und die Leistungsfähigkeit der verschiedenen von diesem Modul bereitgestellten Eigenschaften zu demonstrieren. Ziel dieses Abschnitts ist es, Anwendungsfälle zu demonstrieren und Interesse und Neugier bei den Lesern zu wecken, die mehr über dieses Modul lernen möchten. Halten Sie den Code versteckt, es sei denn, es ist wesentlich, um die Anwendungsfälle zu verstehen (z. B. Namespacing oder Verschachtelung).

Falls relevant, geben Sie eine kurze Beschreibung, wie Leser mit dem Beispiel interagieren können.

## Referenz

Erstellen Sie die relevanten Unterabschnitte, um die zugehörigen Eigenschaften, Funktionen, Datentypen usw. aufzulisten. Der Referenzabschnitt sollte nur die Funktionen enthalten, die in der einzelnen Spezifikation eingeführt werden. Wenn eine Funktion in der Spezifikation enthalten, aber nicht unterstützt wird, erwähnen Sie es in einem Absatz unter der entsprechenden Überschrift. Verwandte Funktionen, die in anderen Spezifikationen definiert sind, gehören unter "Verwandte Konzepte" und NICHT in diesen Abschnitt.

### Eigenschaften

Eine Liste aller Kurz- und Langform-Eigenschaften, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Eigenschaften aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine Eigenschaften definiert.

### At-Regeln

Eine Liste der CSS-At-Regeln, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die At-Regeln aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine At-Regeln definiert.

### Funktionen

Eine Liste der CSS-Funktionen, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Funktionen aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine CSS-Funktionen definiert.

### Datentypen

Eine Liste der CSS-Datentypen, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Datentypen aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine Datentypen definiert.

### Ereignisse

Eine Liste der API-Ereignisse, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Ereignisse aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine Ereignisse definiert.

### Schnittstellen

Eine Liste der zugehörigen API-Schnittstellen, die vom Modul bereitgestellt werden und in mindestens einem Hauptbrowser unterstützt werden.

Fügen Sie einen Absatz hinzu, der die Schnittstellen aufführt, die vom Modul eingeführt wurden und noch von keinem Browser unterstützt werden, falls vorhanden.

Lassen Sie diesen Abschnitt aus, wenn das Modul keine API-Schnittstellen definiert.

### Glossarbegriffe und Definitionen

Listen Sie die verwandten Glossarbegriffe und andere Begriffe auf, die in den oben aufgeführten Referenzseiten definiert sind. Lassen Sie diesen Abschnitt aus, wenn es nichts Relevantes einzuschließen gibt.

## Leitfäden

Eine Definitionsliste der verwandten Leitfäden innerhalb der Modulstruktur, in aufsteigender Komplexität, gefolgt von verwandten Leitfäden aus anderen Modulen. Nur MDN-Leitfäden einbeziehen.

- LinkToGuide1
  - : Ein-Satz-Beschreibung des Leitfadens.
- LinkToGuide2
  - : Ein-Satz-Beschreibung des Leitfadens.

## Verwandte Konzepte

Listen Sie alle anderen Eigenschaften, Datentypen, Glossarbegriffe usw. auf, die mit diesem Modul in Verbindung stehen.

## Spezifikationen

`\{{Specifications}}`

_Um dieses Makro zu verwenden, entfernen Sie die Backticks und den Backslash in der Markdown-Datei._

## Siehe auch

Fügen Sie Links zu allen anderen Referenzseiten und anderen Inhalten hinzu, die relevant sind, aber nicht in die anderen Abschnitte passen. Wenn es relevante externe Leitfäden gibt, die sich lohnen zu verlinken, platzieren Sie diese am Ende der Liste (nicht unter dem Abschnitt "Leitfäden", der auf MDN-Leitfäden beschränkt ist). Überprüfen Sie den Abschnitt [Siehe auch](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in unserem _Schreibstil-Leitfaden_ für weitere Hinweise und Anweisungen.

- link1
- link2
- external_link (Jahr)
