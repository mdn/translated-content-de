---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Alle Seiten, die von Mitgliedern der MDN-Community bearbeitet werden können, enthalten eine Seitenleiste. Diese Seitenleisten werden mit Hilfe von Makros erstellt. Dieser Artikel beschreibt die verschiedenen MDN-Seitenleisten-Makros und zeigt, wie man Seitenleisten auf MDN-Seiten einfügt.

In diesem Leitfaden lernen Sie, wie Sie eine Seitenleiste mit Links lediglich durch Einfügen eines Makros erstellen und wie Sie Seitenleisten mit zusätzlichen Inhalten erstellen können.

## Erstellung von Seitenleisten

Jede Seite hat eine Seitenleiste. Diese Seitenleisten erscheinen, weil ein Seitenleisten-Makro auf den Seiten eingefügt wurde, das eine potenziell hierarchische Liste von Links zu anderen Seiten auf dieser Website erstellt.

Wenn ein Seitenleisten-Makro eingefügt wird, erstellt der Server einen Inhaltsbereich, der eine ungeordnete Liste von Links enthält. Die erstellten Links, wo sie angezeigt werden und wie sie angezeigt werden, hängen von dem verwendeten Makro und den in dem Markdown-Makroaufruf enthaltenen Parametern ab. Einige Seitenleisten enthalten Links basierend auf der Struktur eines Verzeichnisses oder Seitentyps. Andere enthalten eine Liste von vordefinierten Seiten, die in Yari fest kodiert sind.

### Einfügen von Einzel-Makro-Seitenleisten

Um nur den von einem Seitenleisten-Makro generierten Inhalt einzuschließen, wird das Makro direkt nach dem Frontmatter und vor dem Inhalt auf jeder Seite hinzugefügt. Frontmatter ist der Bereich, in dem wir die Metadaten und Optionen für jede Seite angeben. Das Frontmatter auf MDN enthält den Seitentitel, Slug und den Seitentyp sowie andere Informationen basierend auf dem Seitentyp, wie die URL der Spezifikation, Objekt der Browser-Kompatibilität usw.

Zum Beispiel sind die ersten Zeilen dieses Dokuments wie folgt geschrieben:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Seitenleisten-Makro wird direkt nach dem Frontmatter eingefügt. Das `\{{MDNSidebar}}` ist ein Seitenleisten-Makro, das die MDN-Seitenleiste zur Seite hinzufügt. Wenn die Seitenleiste ein einzelner Makroaufruf ist, wird das Makro direkt nach dem Frontmatter platziert.

Hier sind einige andere Seitenleisten-Makros mit ihren Funktionen:

- `\{{CSSRef}}`

  - : Auf jeder CSS-Seite vorhanden, generiert es eine CSS-Seitenleiste, die Links zu Modulen, Eigenschaften, Selektoren, Kombinatoren, Pseudoklassen, Pseudoelementen, At-Regeln, Funktionen und Typen enthält, wobei alle Linklisten bis auf die Linkliste für den aktuellen Seitentyp eingeklappt sind.

- `\{{DefaultAPISidebar("<API_Title>")}}`

  - : Die API-Seitenleiste, die für Überblicksseiten angezeigt wird; der einzelne Parameter ist der Name der API-Gruppe in GroupData.

- `\{{GlossarySidebar}}`

  - : Auf jeder Glossarseite vorhanden, generiert es die Glossar-Seitenleiste, die die Liste der obersten Glossarbegriffe (nicht die mehrdeutigen Begriffe) enthält, die von einem Bereichsfilter vorausgegangen sind.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite innerhalb des Lernbereichs vorhanden, außer für häufig gestellte Fragen und Anleitungen (die das `QuickLinksWithSubpages`-Makro verwenden), generiert es eine Seitenleiste basierend auf den [fest kodierten Links](https://github.com/mdn/yari/blob/main/kumascript/macros/LearnSidebar.ejs) im Yari-Makro. Dieses Makro basiert nicht auf Dateistruktur.

- `\{{HTMLSidebar}}`

  - : Generiert die Seitenleiste für HTML-Dokumentation, einschließlich Tutorials, Referenzen und Leitfäden. Das Makro enthält Aufrufe an das `\{{ListSubpagesForSidebar}}`-Makro für die Referenzabschnitte von Elementen und Attributen, während die Tutorial- und Leitfäden [hart kodierte Links sind](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs).

- `\{{HTTPSidebar}}`

  - : Generiert die Seitenleiste für [HTTP-Dokumentation](/de/docs/Web/HTTP), einschließlich Anleitungen und Referenzdokumentationen.

- `\{{PWASidebar}}`

  - : Generiert die Seitenleiste für die Dokumentation von Progressive Web Apps (PWA). Das Makro listet alle Seiten auf (es basiert nicht auf Dateistruktur).

Das angemessene Makro, das verwendet werden soll, hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Das [Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das passende Makro für diesen Seitentyp.

### Erstellung neuer Seitenleisten

Sie sollten vorhandene Seitenleisten-Makros verwenden, ohne zusätzlichen Inhalt hinzuzufügen. Wenn Sie einen völlig neuen Inhaltsbereich erstellen, erstellen Sie ein [Makro für Ihre Seitenleiste](https://github.com/mdn/yari/tree/main/kumascript/macros) in Yari.

Falls Sie in seltenen Fällen eine temporäre Seitenleiste erstellen müssen, wird in diesem Abschnitt erklärt, wie das geschehen kann. Reichen Sie Ihre temporäre Seitenleiste nicht für eine PR-Überprüfung ein, da sie nicht genehmigt wird.

Falls Sie ein neues Seitenleisten-Makro erstellen müssen, können Sie dies in Ihrer Entwicklungsumgebung tun, indem Sie folgende Schritte befolgen:

1. Entfernen Sie das Seitenleisten-Makro, das direkt nach dem Frontmatter und vor dem Inhalt erscheint, da jedes Dokument nur eine Seitenleiste haben kann.
2. Fügen Sie am Ende der Markdown-Datei ein HTML-{{htmlelement("section")}}-Element hinzu, wobei die `id` des Elements auf `Quick_links` gesetzt wird.
3. Fügen Sie ein `\{{ListSubpagesForSidebar()}}`-Makro mit dem Slug des Verzeichnisses für jeden Inhaltsbereich, den Sie in die Seitenleiste einschließen möchten, zusammen mit zusätzlichem Markdown zwischen den öffnenden und schließenden `<section>`-Tags hinzu.

Zum Beispiel, wenn die Zugänglichkeits-Seitenleiste entwickelt wird, könnten wir vorübergehend das Folgende am Ende einer Markdown-Datei einschließen (und jedes Seitenleisten-Makro unterhalb des Frontmatter entfernen), um eine Seitenleiste zu erstellen, die die Links zu allen ARIA-Rollen-Seiten enthält, vorausgegangen von einem Link zur ARIA-Rollen-Übersichtsseite:

```md
<section id="Quick_links">

1. [**Zugänglichkeit**](/de/docs/Web/Accessibility)

   \{{ListSubpagesForSidebar("/de/docs/Web/Accessibility")}}

2. [**ARIA-Rollen**](/de/docs/Web/Accessibility/ARIA/Roles)

   \{{ListSubpagesForSidebar("/de/docs/Web/Accessibility/ARIA/Roles", "true")}}

3. [**ARIA-Attribute**](/de/docs/Web/Accessibility/ARIA/Attributes)

   \{{ListSubpagesForSidebar("/de/docs/Web/Accessibility/ARIA/Attributes", "true")}}

</section>
```

Wenn das als der letzte Inhalt auf der Seite aufgeführt ist, erkennt Yari, die Engine, die MDN rendert, die `Quick_links`-ID im öffnenden Tag und konvertiert den Inhalt des identifizierten `<section>` in eine Seitenleiste.

Das `\{{ListSubpagesForSidebar(<parameters>)}}`-Makro fügt den Baum von Unterseiten für die Seite ein, deren Slug als erster Parameter angegeben ist. Das obige Beispiel erstellt eine Seitenleiste, die einen Link zu allen Zugänglichkeitsdokumenten enthält, gefolgt von den ARIA-Rollen und Attributen.

Sobald Sie die Links bestimmt haben, die in Ihrer Seitenleiste enthalten werden sollen, reichen Sie einen Pull-Request mit Ihrem vorgeschlagenen Seitenleisten-Makro bei [Yari ein](https://github.com/mdn/yari/tree/main/kumascript/macros).

> [!NOTE]
> Dieses `<section>` muss am Ende des Dokuments angehängt werden, anstatt zwischen dem Frontmatter und dem Seiteninhalt. Pro Seite wird nur eine Seitenleiste erstellt, also muss jedes nach dem Frontmatter aufgeführte Makro entfernt werden.

Der [Quellcode der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) befindet sich auf GitHub. Jedes Makro enthält die Dokumentation für sich selbst, einschließlich der Parameter, falls vorhanden.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektion-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
