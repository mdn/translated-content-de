---
title: Andere Makros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 41a27d6c0f8e44f1b9a3dabddd9315655b367b77
---

{{MDNSidebar}}

Im Gegensatz zu den in [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) aufgeführten Makros werden die in diesem Artikel dokumentierten Makros selten oder nur in bestimmten Kontexten verwendet oder sind veraltet.

## Besondere Kontexte

Dieses Makro wird nur in bestimmten Kontexten verwendet, wie z.B. einer speziellen API-Referenz.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) erstellt einen Link zu dem angegebenen RFC, gegeben durch seine Nummer. Die Syntax ist `\{{RFC(number)}}`. Zum Beispiel wird `\{{RFC(2616)}}` zu {{ RFC(2616) }}.

### Startseiten-Komponenten

Wir haben eine Reihe von Makros, die zum automatischen Generieren von Inhalten für Startseiten verwendet werden können. Hier sind sie.

#### Listen von Unterseiten

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) generiert eine ungeordnete Liste von Links zu allen direkten Unterseiten der aktuellen Seite; nützlich für das automatische Erstellen von Inhaltsverzeichnissen für Dokumentationssätze.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) gibt eine zweispaltige Definitionsliste aller direkten Unterseiten der aktuellen Seite aus, mit ihren Titeln als {{HTMLElement("dt")}} und ihrer SEO-Zusammenfassung als {{HTMLElement("dd")}}. Dies erleichtert es, automatisch optisch ansprechende Startseiten zu erstellen.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) erstellt eine Liste der Unterseiten der aktuellen Seite, formatiert als Liste von API-Begriffen, getrennt nach dem Anfangsbuchstaben. Es gibt drei Parameter. Der erste ist 0, wenn Sie alle oberen Unterseiten einbeziehen möchten, oder 1, um Unterseiten mit "." in ihren Namen wegzulassen. Der zweite und dritte Parameter erlauben es, Text hinzuzufügen, der als Teil des Namens in jedem Link angezeigt wird. Dies kann verwendet werden, um "<" und ">" für Element-Links hinzuzufügen oder "()" am Ende von Listen von Methodennamen anzuhängen.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) erstellt eine Definitionsliste aller direkten Kinder der aktuellen Seite. Es erfolgt keine weitere Formatierung. Sie können eine zweispaltige Liste erhalten, die bereit für die Verwendung als mehrspaltige Startseite ist, indem Sie [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) verwenden.

### Link-Listen

Wir haben ein Makro, das speziell für die Erstellung von [Link-Listen](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars) innerhalb von Inhalten ausgelegt ist:

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) erstellt eine Liste von Links, die aus den Seiten unterhalb der aktuellen Seite (oder einer angegebenen Seite, falls angegeben) bestehen. Es werden bis zu zwei Gesamttiefenebenen generiert.
