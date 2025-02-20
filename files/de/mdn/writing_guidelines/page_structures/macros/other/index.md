---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros, werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet, oder sie sind veraltet.

## Besondere Kontexte

Dieses Makro wird nur in speziellen Kontexten verwendet, wie z. B. in einem spezifischen API-Referenzabschnitt.

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) erstellt einen Link zu der angegebenen RFC, basierend auf ihrer Nummer. Die Syntax lautet `\{{RFC(number)}}`. Zum Beispiel wird `\{{RFC(2616)}}` zu {{ RFC(2616) }}.

### Komponenten für Landingpages

Wir haben eine Reihe von Makros, die verwendet werden können, um den Inhalt von Landingpages automatisch zu generieren. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) erzeugt eine ungeordnete Liste von Links zu allen direkten Unterseiten der aktuellen Seite; nützlich für die automatische Erstellung von Inhaltsverzeichnissen für Dokumentationssätze.
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) erstellt eine Definition List aller direkten Unterseiten der aktuellen Seite, mit ihren Titeln als {{HTMLElement("dt")}} und ihrer SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dies erleichtert die automatische Erstellung attraktiv gestalteter Landingpages.
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, unterteilt nach Anfangsbuchstaben. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle Unterseiten auf oberster Ebene einbeziehen möchten, oder 1, um Unterseiten mit "." im Namen auszuschließen. Der zweite und dritte Parameter ermöglichen es Ihnen, Text hinzuzufügen, der als Teil des Namens in jedem Link angezeigt wird. Dies kann verwendet werden, um "<" und ">" für Element-Links hinzuzufügen oder "()" am Ende einer Liste von Methodennamen.

### Listen von Links

Wir haben ein Makro, das speziell dafür entwickelt wurde, [Listen von Links](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten zu erstellen:

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder der angegebenen Seite, wenn eine angegeben ist) besteht. Es werden bis zu zwei Ebenen in der Tiefe generiert.
