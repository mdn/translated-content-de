---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 137a960f52b744eabd33a2b56e54450653b06f45
---

{{MDNSidebar}}

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros, werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet oder sind veraltet.

## Spezielle Kontexte

Dieses Makro wird nur in bestimmten Kontexten verwendet, wie z.B. in einer bestimmten API-Referenz.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC, basierend auf seiner Nummer. Die Syntax lautet: `\{\{RFC(number)\}\}`. Zum Beispiel, `\{\{RFC(2616)\}\}` wird zu {{ RFC(2616) }}.

### Komponenten der Einstiegsseite

Wir haben eine Reihe von Makros, die verwendet werden können, um automatisch den Inhalt von Einstiegsseiten zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) erzeugt eine ungeordnete Liste von Links zu allen unmittelbaren Unterseiten der aktuellen Seite; nützlich zum automatischen Erstellen von Inhaltsverzeichnissen für Dokumentationssätze.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) gibt eine zweispaltige Definitionsliste aller unmittelbaren Unterseiten der aktuellen Seite aus, mit ihren Titeln als {{HTMLElement("dt")}} und ihrer SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dies erleichtert es, automatisch ansprechend gestaltete Einstiegsseiten zu erstellen.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, aufgeteilt nach den Anfangsbuchstaben. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle obersten Unterseiten einbeziehen möchten, oder 1, um Unterseiten mit "." im Namen auszuschließen. Der zweite und dritte ermöglichen es, Text hinzuzufügen, der als Teil des Namens in jedem Link angezeigt wird. Dies kann verwendet werden, um "<" und ">" für Element-Links hinzuzufügen oder um "()" am Ende von Listen von Methodennamen hinzuzufügen.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller unmittelbaren Kinder der aktuellen Seite. Es wird keine weitere Formatierung vorgenommen. Sie können eine zweispaltige Liste für eine mehrspaltige Einstiegsseite mit [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) erstellen.

### Listen von Links

Wir haben ein Makro, das speziell zur Erstellung von [Linklisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten entwickelt wurde:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls diese angegeben ist) bestehen. Es werden bis zu zwei Tiefenebenen generiert.
