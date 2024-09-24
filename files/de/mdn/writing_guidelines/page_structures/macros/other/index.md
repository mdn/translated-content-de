---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 137a960f52b744eabd33a2b56e54450653b06f45
---

{{MDNSidebar}}

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros, werden die in diesem Artikel dokumentierten Makros selten oder nur in spezifischen Kontexten verwendet oder sind veraltet.

## Spezielle Kontexte

Dieses Makro wird nur in bestimmten Kontexten verwendet, wie zum Beispiel bei einer spezifischen API-Referenz.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC, basierend auf seiner Nummer. Die Syntax ist: `\{\{RFC(number)\}\}`. Zum Beispiel wird `\{\{RFC(2616)\}\}` zu {{ RFC(2616) }}.

### Komponenten für Übersichtsseiten

Wir haben eine Auswahl von Makros, die verwendet werden können, um automatisch die Inhalte von Übersichtsseiten zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) generiert eine ungeordnete Liste von Links zu allen direkten Unterseiten der aktuellen Seite; nützlich für die automatische Erstellung von Inhaltsverzeichnissen für Dokumentationssätze.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) gibt eine zweispaltige Definitionsliste aller direkten Unterseiten der aktuellen Seite aus, mit ihren Titeln als {{HTMLElement("dt")}} und ihrer SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dies erleichtert das automatische Erstellen von ansprechend gestalteten Übersichtsseiten.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, unterteilt nach dem Anfangsbuchstaben. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle Unterseiten der obersten Ebene einbeziehen möchten, oder 1, um Unterseiten mit "." in ihren Namen auszulassen. Der zweite und dritte Parameter erlauben es, Text hinzuzufügen, der als Teil des Namens in jedem Link angezeigt wird. Dies kann verwendet werden, um "<" und ">" für Element-Links hinzuzufügen oder "()" am Ende von Methodennamen-Listen einzufügen.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller direkten Kinder der aktuellen Seite. Es wird keine weitere Formatierung vorgenommen. Sie können eine zweispaltige Liste für die Verwendung als mehrspaltige Übersichtsseite mit [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) erhalten.

### Listen von Links

Wir haben ein Makro, das speziell dafür entwickelt wurde, [Listen von Links](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten zu erstellen:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls angegeben) besteht. Es werden bis zu zwei Gesamttiefenebenen erzeugt.
