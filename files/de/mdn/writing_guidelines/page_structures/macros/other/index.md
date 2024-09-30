---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 137a960f52b744eabd33a2b56e54450653b06f45
---

{{MDNSidebar}}

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet oder sind veraltet.

## Spezielle Kontexte

Dieses Makro wird nur in besonderen Kontexten verwendet, beispielsweise in einem bestimmten API-Referenz.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC unter Angabe seiner Nummer. Die Syntax lautet: `\{\{RFC(number)\}\}`. Zum Beispiel wird `\{\{RFC(2616)\}\}` zu {{ RFC(2616) }}.

### Komponenten von Startseiten

Wir verfügen über eine Vielzahl von Makros, die verwendet werden können, um den Inhalt von Startseiten automatisch zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) erzeugt eine ungeordnete Liste von Links zu allen direkten Unterseiten der aktuellen Seite; nützlich für das automatische Generieren von Inhaltsverzeichnissen für Dokumentationssätze.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) gibt eine zweispaltige Definitionsliste aller direkten Unterseiten der aktuellen Seite aus, mit ihren Titeln als {{HTMLElement("dt")}} und ihrem SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dadurch wird es einfach, ansprechend aussehende Startseiten automatisch zu generieren.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, nach Anfangsbuchstabe unterteilt. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle obersten Unterseiten einbeziehen möchten, oder 1, um Unterseiten mit "." im Namen auszuschließen. Mit dem zweiten und dritten Parameter können Sie Text hinzufügen, der als Teil des Namens in jedem Link angezeigt werden soll. Dies kann verwendet werden, um "<" und ">" für Element-Links hinzuzufügen oder "()" am Ende von Listen von Methodennamen hinzuzufügen.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller direkten Unterseiten der aktuellen Seite. Es erfolgt keine weitere Formatierung. Sie können eine zweispaltige Liste erhalten, die für die Verwendung als mehrspaltige Startseite bereit ist, indem Sie [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) verwenden.

### Listen von Links

Wir haben ein Makro speziell entwickelt, um [Linklisten](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten zu erstellen:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls eine angegeben ist) bestehen. Es werden bis zu zwei gesamte Ebenen an Tiefe generiert.
