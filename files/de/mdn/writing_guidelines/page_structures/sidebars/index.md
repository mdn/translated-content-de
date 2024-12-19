---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 3f9d46e65bb53fa5a241603976189ee95cd650d6
---

{{MDNSidebar}}

MDN-Seiten enthalten alle Sidebars. Die meisten von ihnen werden mit einem Standardsystem erstellt, das Datenstrukturen in YAML-Dateien definiert und Sidebars auf Seiten mithilfe von Makroaufrufen einbindet.

In diesem Leitfaden erfahren Sie, wie diese Sidebars funktionieren, damit Sie bestehende Sidebars bearbeiten und bei Bedarf neue erstellen können. Wir werden auch auf diejenigen eingehen, die das Standardsystem noch nicht verwenden.

> [!NOTE]
> Wenn Sie Sidebars bearbeiten, können Sie `yarn tool`-Befehle zum Formatieren und Synchronisieren mit Weiterleitungen verwenden.
> Siehe die Dokumentation des [Yari's CLI Tools](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für weitere Informationen.

## Funktionsweise von Sidebars

Jede Sidebar hat eine entsprechende YAML-Datei im `content`-Repo von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars). Diese definiert die hierarchische Struktur der Sidebar-Links, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierte Überschriften-/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Nehmen wir als Beispiel die Seite, die Sie gerade betrachten, deren Sidebar-Struktur in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert ist.

Die Sidebar wird auf der aktuellen Seite (und allen anderen im gleichen Dokumentbaum) angezeigt, indem ein entsprechender Makroaufruf — `\{{MDNSidebar}}` — direkt unterhalb des Frontmatters [im Dokumentenquellcode](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Die Einbindung des `\{{MDNSidebar}}`-Makroaufrufs im Quellcode veranlasst das System, nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars` zu suchen. Wenn es eine findet, wird die Sidebar automatisch gerendert und als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente) auf der Seite platziert.

Versuchen Sie, in der Sidebar zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden bemerken, dass in der Regel beim Navigieren zu einer Seite die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen minimiert sind und die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Beispiele für Standardsidebars

Einige der anderen Standardsidebars, die Sie häufig antreffen werden, sind wie folgt:

- `\{{CSSRef}}`

  - : Auf jeder [CSS](/de/docs/Web/CSS)-Seite vorhanden.

- `\{{GlossarySidebar}}`

  - : Auf jeder [Glossar](/de/docs/Glossary)-Seite vorhanden.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite im [Abschnitt zur Webentwicklung lernen](/de/docs/Learn) vorhanden.

- `\{{HTMLSidebar}}`

  - : Generiert die Sidebar für die [HTML](/de/docs/Web/HTML)-Dokumentation.

- `\{{HTTPSidebar}}`

  - : Generiert die Sidebar für die [HTTP-Dokumentation](/de/docs/Web/HTTP).

- `\{{PWASidebar}}`

  - : Generiert die Sidebar für die [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps)-Dokumentation.

> [!NOTE]
> Das geeignete Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das entsprechende Makro für diesen Seitentyp.

## Erklärung der YAML-Syntax für Sidebars

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Sidebars enthalten sein können, und die YAML-Syntax, die zur Erstellung jeder Funktion verwendet wird. Während Sie diese Dokumentation durchgehen, vergleichen Sie die Funktionen mit dem [bestehenden Sidebar-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Beginn einer Sidebar-Definition

Der Beginn jeder YAML-Sidebar-Daten-Definition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Sidebar-Daten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einfache einzelne Links

Um einen einfachen Einzellink in einer Sidebar zu erstellen, fügen Sie ein YAML-Listenelement mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur, sodass z. B. `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog erzeugt. Das System verwendet automatisch den Dokumententitel der verlinkten Seite als Linktext.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, müssen Sie zwei Schlüssel innerhalb des Listenelements einfügen — `title`, das den benutzerdefinierten Linktext enthält, und `link`, das wie zuvor die relative URL enthält. Das folgende Beispiel würde einen Link zur MDN Web Docs Changelog erzeugen, jedoch mit dem benutzerdefinierten Linktext "Our changelog":

```yaml
sidebar:
  - title: Our changlog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Sidebarelement, das in einer größeren Schriftgröße als normale Sidebarelemente angezeigt wird. Dies wird häufig als Titel oben in einer Sidebar verwendet, die zur Einstiegsseite für diesen Abschnitt der Dokumentation verlinkt, oder als Abschnittstrenner im Falle besonders großer Sidebars (wie im [Abschnitt zur Webentwicklung lernen](/de/docs/Learn) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` im Listenelement eingefügt wird. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann benutzerdefinierten Linktext haben:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link`-Schlüssel weglassen, um nur ein Textelement zu rendern, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von erweiterbaren/zusammenklappbaren Linklisten

Um eine erweiterbare/zusammenklappbare Linkliste zu erstellen, erstellen Sie ein Listenelement wie zuvor, fügen jedoch einen `children`-Schlüssel hinzu, dessen Wert eine Liste ist, die die Links enthält, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat die gleiche Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar seine eigenen `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community/Contributing
          - /MDN/Community/Contributing/Getting_started
          - /MDN/Community/Contributing/Our_repositories
          - /MDN/Community/Contributing/Translated_content
          - /MDN/Community/Contributing/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
      - /MDN/Community/Learn_forum
      - /MDN/Community/Issues
      - /MDN/Community/Pull_requests
      - /MDN/Community/Roles_teams
```

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der untergeordneten Elemente eines Listenelements beim ersten Laden der Seite geschlossen oder geöffnet gerendert wird. Mögliche Werte sind wie folgt:

- `closed`: Die untergeordneten Elemente werden geschlossen gerendert, es sei denn, die aktuelle Seite ist durch eines der untergeordneten Elemente verlinkt, in diesem Fall werden sie geöffnet gerendert.
- `open`: Die untergeordneten Elemente werden immer geöffnet gerendert.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur darin gerendert, die die untergeordnete Liste enthält, die dann durch Klicken auf das Offenlegungstriangle-Widget oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/zusammengeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste mit Links zu den Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies generieren, indem Sie ein Listenelement mit einem `type`-Schlüssel mit dem Wert `listSubPages` und einem `path`-Schlüssel angeben, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte [Glossary](/de/docs/Glossary)-Sidebar-Definition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Sidebar mit einem Abschnittstitel, der zurück zur Einstiegsseite des Glossars verlinkt, und einer obersten Liste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als übergeordnetes Listenelement rendern möchten, bei dem die Unterseiten als erweiterbare/zusammenklappbare untergeordnete Liste erscheinen, müssten Sie zusätzlich einen `title`-Schlüssel hinzufügen, der den Anzeigetext für das übergeordnete Element angibt, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur angibt.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppierung von Listen-Unterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies führt dazu, dass alle Unterseiten mit Titeln, die mit demselben Substring beginnen, gefolgt von einem Bindestrich (z. B. `item-`), in einer untergeordneten Liste unter einem Listenelement des Substrings plus einem Bindestrich und einem Sternchen (z. B. `item-*`) enthalten sind.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Definition der Glossary-Sidebar auf Folgendes aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Wären die Links zu diesen Seiten in einer untergeordneten Listenstruktur wie folgt gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden sich in der [CSS](/de/docs/Web/CSS)-Sidebar-Definition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurz- und Langhand-Eigenschaften zu gruppieren. Das Listenelement, das das Property-Sidebar-Menü generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelementdefinition enthält auch `tags`, worauf im nächsten Abschnitt eingegangen wird.

#### Filtern von Listen-Unterseiten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type`-Schlüssel im Frontmatter der Seite angegeben), können Sie die Listenelemente, die von `listSubPages` und `listSubPagesGrouped` generiert werden, nach Seitentyp filtern. Dazu fügen Sie einen `tags`-Schlüssel im Listenelement hinzu, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in die generierten Listenelemente aufnehmen möchten. Die CSS-Sidebar enthält mehrere solche Beispiele:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectors
  tags: css-selector
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Combinators
  tags: css-combinator
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Pseudo-classes
  tags: css-pseudo-class
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Pseudo-elements
  tags: css-pseudo-element
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: At-rules
  tags: css-at-rule
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Functions
  tags: css-function
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Types
  tags: css-type
  details: closed
```

### Lokalisierung von Textzeichenfolgen

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title`-Schlüssel einfügen und dann die Definitionen, wie dieser Platzhalter in verschiedenen Sprachen aussehen soll, in einem `l10n`-Wörterbuch am Ende der YAML-Datei angeben.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML)-Sidebar (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typ-Referenzseiten erzeugt. Der Text des übergeordneten Listenelements ist im `title`-Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Unten am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel in `l10n` repräsentiert eine andere Lokalisation — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die in den Listenelementdefinitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in der jeweiligen Lokalisation.

Zum Beispiel:

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

Wir haben nur die `Input_types`-Werte in jeder Lokalisation der Kürze halber aufgenommen.

Wenn die Sidebar gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in der jeweiligen Lokalversion der Seite, die aufgerufen wird. Vergleichen Sie beispielsweise die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn eine MDN-Lokalisation aufgerufen wird, die keinen für einen bestimmten Platzhalter definierten Wert hat, wird standardmäßig die `en-US`-Version verwendet. Wenn keine `en-US`-Version definiert ist, wird der wortwörtliche Platzhaltertext angezeigt (was im obigen Fall `Input_types` wäre).

## Nicht-standardisierte Sidebars

Es gibt einige Sidebars auf MDN, die das oben beschriebene Standardsystem nicht verwenden. Diese sind komplexe, vollautomatisierte Makros, die nicht oft geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Sidebar, die auf den [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu den auf der Schnittstelle definierten Elementen — Eigenschaften, Methoden, Ereignisse usw. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verwandten Seiten zu bearbeiten, die unten in der Sidebar angezeigt werden, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Sidebar, die auf den [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Sidebar einer bestimmten API verlinkt sind, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Sidebar auf den [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzige Parameter ist das Verzeichnis, für das Sie die Links erstellen möchten.

Wenn Sie der Meinung sind, dass eine davon aktualisiert werden sollte, setzen Sie sich über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhalt-Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenabschnitts-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner und Hinweise Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
