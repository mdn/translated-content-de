---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Alle Seiten, die von Mitgliedern der MDN-Community bearbeitet werden können, beinhalten eine Sidebar. Diese Sidebars werden mithilfe von Makros erstellt. Dieser Artikel beschreibt die verschiedenen MDN-Sidebar-Makros und zeigt, wie Sidebars auf MDN-Seiten eingefügt werden können.

In diesem Leitfaden lernen Sie, wie Sie eine Link-Sidebar erstellen, indem Sie einfach ein Makro einfügen, und wie Sie Sidebars mit zusätzlichem Inhalt erstellen.

## Erstellung von Sidebars

Jede Seite hat eine Sidebar. Diese Sidebars erscheinen, weil ein Sidebar-Makro auf den Seiten enthalten ist, das eine potenziell hierarchische Liste von Links zu anderen Seiten auf dieser Website erstellt.

Wenn ein Sidebar-Makro eingefügt wird, erstellt der Server einen Inhaltsabschnitt, der eine ungeordnete Liste von Links enthält. Die erstellten Links, ihr Anzeigestandort und ihre Darstellungsweise hängen vom verwendeten Makro und den in der Markdown-Makro-Aufruf enthaltenen Parametern ab. Einige Sidebars beinhalten Links basierend auf der Verzeichnisstruktur oder dem Seitentyp. Andere beinhalten eine Liste vordefinierter Seiten, die in Yari festcodiert sind.

### Einfügen von Single-Macro-Sidebars

Um nur den Inhalt zu inkludieren, der durch ein Sidebar-Makro generiert wird, wird das Makro unmittelbar nach dem Frontmatter und vor dem Inhalt auf jeder Seite eingefügt. Frontmatter ist der Bereich, in dem wir die Metadaten und Optionen für jede Seite festlegen. Das Frontmatter auf MDN umfasst den Seitentitel, den Slug und den Seitentyp, zusammen mit anderen Informationen basierend auf dem Seitentyp, wie der URL der Spezifikation, dem Browser-Kompatibilitätsobjekt usw.

Zum Beispiel sind die ersten Zeilen dieses Dokuments wie folgt geschrieben:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Sidebar-Makro wird unmittelbar nach dem Frontmatter eingefügt. Das `\{{MDNSidebar}}` ist ein Sidebar-Makro, das die MDN-Sidebar zur Seite hinzufügt. Wenn die Sidebar ein einzelner Makroaufruf ist, wird das Makro unmittelbar nach dem Frontmatter platziert.

Hier sind einige andere Sidebar-Makros und was sie machen:

- `\{{CSSRef}}`

  - : Auf jeder CSS-Seite vorhanden, generiert es eine CSS-Sidebar, die Links zu Modulen, Eigenschaften, Selektoren, Kombinatoren, Pseudo-Klassen, Pseudo-Elementen, At-Regeln, Funktionen und Typen enthält, wobei alle Linklisten mit Ausnahme der Linkliste für den aktuellen Seitentyp eingeklappt sind.

- `\{{DefaultAPISidebar("<API_Title>")}}`

  - : Die API-Sidebar, die für Übersichtsseiten angezeigt wird; der einzelne Parameter ist der Name der API-Gruppe in GroupData.

- `\{{GlossarySidebar}}`

  - : Auf jeder Glossarseite vorhanden, generiert es die Glossar-Sidebar, die die Liste der obersten Glossarbegriffe (nicht die begriffserklärten Begriffe) enthält, vorangestellt durch einen Abschnittsfilter.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite innerhalb des Lernbereichs vorhanden, außer bei allgemeinen Fragen und Anleitungsseiten (die das `QuickLinksWithSubpages`-Makro verwenden), generiert es eine Sidebar basierend auf den [festcodierten Links](https://github.com/mdn/yari/blob/main/kumascript/macros/LearnSidebar.ejs) im Yari-Makrofile. Dieses Makro basiert nicht auf der Dateistruktur.

- `\{{HTMLSidebar}}`

  - : Generiert die Sidebar für HTML-Dokumentation, einschließlich Tutorials, Referenzen und Leitfäden. Das Makro beinhaltet Aufrufe des `\{{ ListSubpagesForSidebar}}`-Makros für die Element- und Attributreferenzabschnitte, während die Tutorial- und Leitfaden- [Links festcodiert sind](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs).

- `\{{HTTPSidebar}}`

  - : Generiert die Sidebar für [HTTP-Dokumentation](/de/docs/Web/HTTP), einschließlich Leitfäden und Referenzdokumenten.

- `\{{PWASidebar}}`

  - : Generiert die Sidebar für die Dokumentation zu Progressive-Web-Apps (PWA). Das Makro listet alle Seiten auf (es basiert nicht auf der Dateistruktur).

Das geeignete zu verwendende Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp beinhaltet das passende Makro für diesen Seitentyp.

### Neue Sidebars erstellen

Sie sollten vorhandene Sidebar-Makros verwenden, ohne sie mit Inhalt zu befüllen. Wenn Sie einen vollkommen neuen Inhaltsbereich erstellen, erstellen Sie ein [Makro für Ihre Sidebar](https://github.com/mdn/yari/tree/main/kumascript/macros) in Yari.

Falls Sie in dem unwahrscheinlichen Fall eine temporäre Sidebar erstellen müssen, erklärt dieser Abschnitt, wie das gemacht werden kann. Reichen Sie Ihre temporäre Sidebar nicht zur PR-Bewertung ein, da sie nicht genehmigt wird.

Falls Sie ein neues Sidebar-Makro erstellen müssen, können Sie dies in Ihrer Entwicklungsumgebung entwickeln, indem Sie folgende Schritte befolgen:

1. Entfernen Sie das Sidebar-Makro, das unmittelbar nach dem Frontmatter und vor dem Inhalt erscheint, da jedes Dokument nur eine Sidebar haben kann.
2. Am Ende der Markdown-Datei fügen Sie ein HTML {{htmlelement("section")}}-Element hinzu und setzen die `id` des Elements auf `Quick_links`.
3. Fügen Sie ein `\{{ListSubpagesForSidebar()}}`-Makro mit dem Slug des Verzeichnisses für jeden Abschnitt des Inhalts, den Sie in die Sidebar aufnehmen möchten, zusammen mit zusätzlichem Markdown, zwischen den öffnenden und schließenden `<section>`-Tags hinzu.

Zum Beispiel, wenn wir die Accessibility-Sidebar entwickeln, könnten wir vorübergehend das Folgende am Ende einer Markdown-Datei einfügen (und jedes Sidebar-Makro unter dem Frontmatter entfernen), um eine Sidebar zu erstellen, die die Links zu allen ARIA-Rollen-Seiten enthält, vorangestellt durch einen Link zur ARIA-Rollen-Übersichtsseite:

```md
<section id="Quick_links">

1. [**Accessibility**](/en-US/docs/Web/Accessibility)

   \{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility")}}

2. [**ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   \{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles", "true")}}

3. [**ARIA attributes**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

   \{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes", "true")}}

</section>
```

Wenn sie als letzter Inhalt auf der Seite gelistet ist, erkennt Yari, die Engine, die MDN rendert, die `Quick_links`-ID im öffnenden Tag und wandelt den Inhalt des identifizierten `<section>` in eine Sidebar um.

Das `\{{ListSubpagesForSidebar(<parameters>)}}`-Makro fügt den Baum der Unterseiten für die Seite ein, deren Slug als erster Parameter angegeben ist. Das obige erstellt eine Sidebar, die einen Link zu allen Accessibility-Dokumenten enthält, gefolgt von den ARIA-Rollen und -Attributen.

Sobald Sie die Links bestimmt haben, die Sie in Ihrer Sidebar aufnehmen möchten, reichen Sie eine Pull-Anfrage an [Yari mit Ihrem vorgeschlagenen Sidebar-Makro](https://github.com/mdn/yari/tree/main/kumascript/macros) ein.

> [!NOTE]
> Dieses `<section>` muss dem Ende des Dokuments angehängt werden, statt zwischen dem Frontmatter und dem Seiteninhalt. Pro Seite wird nur eine Sidebar erstellt, daher muss jedes Makro, das nach dem Frontmatter aufgeführt ist, entfernt werden.

Der [Makro-Quellcode](https://github.com/mdn/yari/tree/main/kumascript/macros) befindet sich auf GitHub. Jedes Makro enthält die Dokumentation für sich selbst, einschließlich, falls vorhanden, der Parameter.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektions-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
