---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Alle Seiten, die von Mitgliedern der MDN-Community bearbeitet werden können, enthalten eine Seitenleiste. Diese Seitenleisten werden mit Makros erstellt. Dieser Artikel beschreibt die verschiedenen MDN-Seitenleisten-Makros und zeigt, wie man Seitenleisten auf MDN-Seiten einfügt.

In diesem Leitfaden erfahren Sie, wie Sie eine Seitenleiste mit Links erstellen, indem Sie einfach ein Makro einfügen, und wie Sie Seitenleisten mit zusätzlichem Inhalt erstellen können.

## Seitenleisten erstellen

Jede Seite hat eine Seitenleiste. Diese Seitenleisten erscheinen, weil ein Seitenleisten-Makro auf den Seiten eingefügt wurde, das eine potenziell hierarchische Liste von Links zu anderen Seiten auf dieser Website erstellt.

Wenn ein Seitenleisten-Makro eingefügt wird, erstellt der Server einen Inhaltsabschnitt, der eine ungeordnete Liste von Links enthält. Die erstellten Links, wo sie angezeigt werden und wie sie angezeigt werden, hängen vom verwendeten Makro und den im Markdown-Makroaufruf enthaltenen Parametern ab. Einige Seitenleisten beinhalten Links basierend auf der Struktur eines Verzeichnisses oder dem Seitentyp. Andere enthalten eine Liste vordefinierter Seiten, die in Yari fest codiert sind.

### Einfügen von Ein-Makro-Seitenleisten

Um nur den vom Seitenleisten-Makro generierten Inhalt einzufügen, wird das Makro sofort nach dem Frontmatter und vor dem Inhalt auf jeder Seite hinzugefügt. Im Frontmatter legen wir die Metadaten und Optionen für jede Seite fest. Das Frontmatter auf MDN enthält den Seitentitel, den Slug und den Seitentyp sowie weitere Informationen basierend auf dem Seitentyp, wie z.B. Spezifikations-URL, Browser-Kompatibilitätsobjekt usw.

Zum Beispiel lauten die ersten Zeilen dieses Dokuments:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Seitenleisten-Makro wird direkt nach dem Frontmatter eingefügt. Das `\{{MDNSidebar}}` ist ein Seitenleisten-Makro, das die MDN-Seitenleiste zur Seite hinzufügt. Wenn die Seitenleiste ein einfacher Makroaufruf ist, wird das Makro direkt nach dem Frontmatter platziert.

Hier sind einige andere Seitenleisten-Makros und ihre Funktionen:

- `\{{CSSRef}}`

  - : Auf jeder CSS-Seite vorhanden, generiert es eine CSS-Seitenleiste, die Links zu Modulen, Eigenschaften, Selektoren, Kombinatoren, Pseudo-Klassen, Pseudo-Elementen, @-Regeln, Funktionen und Typen enthält, wobei alle Link-Listen eingeklappt sind, außer der Link-Liste für den aktuellen Seitentyp.

- `\{{DefaultAPISidebar("<API_Title>")}}`

  - : Die API-Seitenleiste, die für Übersichtsseiten angezeigt wird; der einzelne Parameter ist der Name der API-Gruppe in GroupData.

- `\{{GlossarySidebar}}`

  - : Auf jeder Glossarseite vorhanden, generiert es die Glossarseitenleiste, die die Liste der obersten Glossarbegriffe (nicht die disambiguierten Begriffe) enthält, gefolgt von einem Bereichsfilter.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite im Lernabschnitt außer für allgemeine Fragen und Anleitung-Seiten vorhanden (die das `QuickLinksWithSubpages`-Makro verwenden), generiert es eine Seitenleiste basierend auf den [fest codierten Links](https://github.com/mdn/yari/blob/main/kumascript/macros/LearnSidebar.ejs), die in der Yari-Makrodatei vorhanden sind. Dieses Makro basiert nicht auf der Dateistruktur.

- `\{{HTMLSidebar}}`

  - : Generiert die Seitenleiste für HTML-Dokumentationen, einschließlich Tutorials, Referenzen und Leitfaden. Das Makro enthält Aufrufe des `\{{ ListSubpagesForSidebar}}`-Makros für die Element- und Attribut-Referenzsektionen, während die Tutorial- und Leitfaden-Links [fest codiert](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) sind.

- `\{{HTTPSidebar}}`

  - : Generiert die Seitenleiste für [HTTP-Dokumentation](/de/docs/Web/HTTP), einschließlich Leitfäden und Referenzunterlagen.

- `\{{PWASidebar}}`

  - : Generiert die Seitenleiste für Progressive Web App (PWA)-Dokumentation. Das Makro listet alle Seiten auf (es basiert nicht auf der Dateistruktur).

Das geeignete Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das entsprechende Makro für diesen Seitentyp.

### Neue Seitenleisten erstellen

Sie sollten vorhandene Seitenleisten-Makros verwenden, ohne zusätzlichen Inhalt hinzuzufügen. Wenn Sie einen völlig neuen Abschnitt von Inhalten erstellen, erstellen Sie ein [Makro für Ihre Seitenleiste](https://github.com/mdn/yari/tree/main/kumascript/macros) in Yari.

Im unwahrscheinlichen Fall, dass Sie eine temporäre Seitenleiste erstellen müssen, wird in diesem Abschnitt erklärt, wie das gemacht werden kann. Reichen Sie Ihre temporäre Seitenleiste nicht zur PR-Überprüfung ein, da sie nicht genehmigt wird.

Wenn Sie ein neues Seitenleisten-Makro erstellen müssen, können Sie dies in Ihrer Entwicklungsumgebung tun, indem Sie die folgenden Schritte ausführen:

1. Entfernen Sie das Seitenleisten-Makro, das sofort nach dem Frontmatter und vor dem Inhalt erscheint, da jedes Dokument nur eine Seitenleiste haben kann.
2. Fügen Sie am Ende der Markdown-Datei ein HTML {{htmlelement("section")}}-Element hinzu, das die `id` des Elements auf `Quick_links` festlegt.
3. Fügen Sie ein `\{{ListSubpagesForSidebar()}}`-Makro mit dem Slug des Verzeichnisses für jeden Inhaltsabschnitt hinzu, den Sie in die Seitenleiste aufnehmen möchten, zusammen mit zusätzlichem Markdown zwischen den öffnenden und schließenden `<section>`-Tags.

Zum Beispiel, wenn wir die Barrierefreiheits-Seitenleiste entwickeln, könnten wir vorübergehend das Folgende am Ende einer Markdown-Datei einfügen (und jedes Seitenleisten-Makro unter dem Frontmatter entfernen), wird eine Seitenleiste erstellt, die die Links zu allen ARIA-Rollen-Seiten enthält, denen ein Link zur ARIA-Rollen-Übersichtsseite vorausgeht:

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

Wenn dies als letzter Inhalt auf der Seite aufgeführt wird, erkennt Yari, die Engine, die MDN rendert, die `Quick_links`-ID im öffnenden Tag und wandelt den Inhalt des identifizierten `<section>` in eine Seitenleiste um.

Das `\{{ListSubpagesForSidebar(<parameters>)}}`-Makro fügt den Baum der Unterseiten für die Seite ein, deren Slug als erster Parameter angegeben ist. Das oben Gezeigte erstellt eine Seitenleiste, die einen Link zu allen Barrierefreiheits-Dokumenten, gefolgt von den ARIA-Rollen und Attributen, enthält.

Sobald Sie die Links bestimmt haben, die in Ihrer Seitenleiste enthalten sein sollen, reichen Sie einen Pull Request an [Yari mit Ihrem vorgeschlagenen Seitenleisten-Makro](https://github.com/mdn/yari/tree/main/kumascript/macros) ein.

> [!NOTE]
> Dieses `<section>` muss an das Ende des Dokuments angehängt werden, anstatt zwischen dem Frontmatter und dem Seiteninhalt. Auf jeder Seite wird nur eine Seitenleiste erstellt, daher muss jedes Makro, das nach dem Frontmatter aufgeführt wird, entfernt werden.

Der [Makro-Quellcode](https://github.com/mdn/yari/tree/main/kumascript/macros) befindet sich auf GitHub. Jedes Makro enthält die Dokumentation für sich selbst, einschließlich der Parameter, falls vorhanden.

## Siehe auch

- [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektionsmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
