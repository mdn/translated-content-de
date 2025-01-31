---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet oder sind veraltet.

## Spezielle Kontexte

Dieses Makro wird nur in bestimmten Kontexten wie einer speziellen API-Referenz verwendet.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC, basierend auf seiner Nummer. Die Syntax ist `\{{RFC(number)}}`. Beispiel: `\{{RFC(2616)}}` wird zu {{ RFC(2616) }}.

### Komponenten der Startseite

Wir haben eine Reihe von Makros, die verwendet werden können, um den Inhalt von Startseiten automatisch zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) generiert eine ungeordnete Liste von Links zu allen unmittelbaren Unterseiten der aktuellen Seite; nützlich zur automatischen Erstellung von Inhaltsverzeichnissen für Dokumentationssätze.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller unmittelbaren Unterseiten der aktuellen Seite, mit ihren Titeln als {{HTMLElement("dt")}} und ihrer SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dies erleichtert die automatische Erstellung optisch ansprechender Startseiten.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, die nach Anfangsbuchstaben aufgeteilt ist. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle obersten Unterseiten einbeziehen möchten, oder 1, um Unterseiten mit "." in ihren Namen auszuschließen. Der zweite und dritte Parameter ermöglichen das Hinzufügen von Text, der als Teil des Namens in jedem Link angezeigt werden soll. Dies kann verwendet werden, um "<" und ">" für Elementlinks hinzuzufügen oder "()" am Ende von Listen von Methodennamen zu ergänzen.

### Listen von Links

Wir haben ein Makro speziell zur Erstellung von [Listen von Links](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls vorhanden) besteht. Es werden bis zu zwei Ebenen in der Tiefe erzeugt.
