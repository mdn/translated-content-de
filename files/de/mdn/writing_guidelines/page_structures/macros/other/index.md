---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{MDNSidebar}}

Im Gegensatz zu den Makros, die in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführt sind, werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet oder sind veraltet.

## Spezielle Kontexte

Dieses Makro wird nur in besonderen Kontexten verwendet, wie zum Beispiel einer spezifischen API-Referenz.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC unter Angabe seiner Nummer. Die Syntax ist `\{{RFC(number)}}`. Zum Beispiel wird `\{{RFC(2616)}}` zu {{ RFC(2616) }}.

### Komponenten von Einstiegsseiten

Wir haben eine Auswahl an Makros, die verwendet werden können, um den Inhalt von Einstiegsseiten automatisch zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) erzeugt eine ungeordnete Liste von Links zu allen direkten Unterseiten der aktuellen Seite; nützlich für die automatische Erstellung von Inhaltsverzeichnissen für Dokumentationssätze.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller direkten Unterseiten der aktuellen Seite, mit ihren Titeln als {{HTMLElement("dt")}} und ihrem SEO-Zusammenfassungstext als {{HTMLElement("dd")}}. Dies erleichtert das automatische Erstellen von ansprechend gestalteten Einstiegsseiten.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als eine alphabetische Liste von API-Begriffen, die nach Anfangsbuchstaben aufgeteilt ist. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle Top-Level-Unterseiten einbeziehen möchten, oder 1, um Unterseiten mit "." in ihren Namen auszuschließen. Mit dem zweiten und dritten Parameter können Sie Text hinzufügen, der als Teil des Namens in jedem Link angezeigt werden soll. Dies kann verwendet werden, um "<" und ">" für Elementlinks oder "()" am Ende von Listen von Methodennamen hinzuzufügen.

### Listen von Links

Wir haben ein Makro, das speziell dafür entwickelt wurde, [Listen von Links](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten zu erstellen:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls eine angegeben wird) besteht. Bis zu zwei Gesamtebenen der Tiefe werden generiert.
