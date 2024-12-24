---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{MDNSidebar}}

MDN-Seiten beinhalten alle Sidebars. Die meisten von ihnen werden mit einem standardisierten System erstellt, das Datenstrukturen in YAML-Dateien definiert und Sidebars auf Seiten mithilfe von Makroaufrufen einbindet.

In diesem Leitfaden erfahren Sie, wie diese Sidebars funktionieren, sodass Sie bestehende Sidebars bearbeiten und neue erstellen können, wenn es erforderlich ist. Wir werden auch die Sidebars detailliert beschreiben, die das Standard-System noch nicht nutzen.

> [!NOTE]
> Wenn Sie Sidebars bearbeiten, können Sie `yarn tool` Befehle zum Formatieren und Synchronisieren mit Weiterleitungen nutzen. Sehen Sie in der [Dokumentation zu Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) nach für weitere Informationen.

## Wie Sidebars funktionieren

Jede Sidebar hat eine entsprechende YAML-Datei, die sich im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) des MDN `content` Repos befindet. Diese definiert die hierarchische Struktur der Sidebar-Links, die URLs, auf die jeder Link verweisen sollte, und optional benutzerdefinierte Überschriften/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Wenn wir beispielsweise die Seite nehmen, die Sie sich gerade ansehen, ist die Struktur der Sidebar in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert.

Die Sidebar wird auf der aktuellen Seite (und allen anderen in demselben Dokumentenbaum) durch das Einfügen eines entsprechenden Makroaufrufs — `\{{MDNSidebar}}` — direkt unter dem Frontmatter im [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) gerendert:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Einfügen des `\{{MDNSidebar}}` Makroaufrufs in die Quelle veranlasst das System, nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars` zu suchen. Wenn es eine findet, kümmert es sich automatisch um das Rendern der Sidebar und platziert sie als eine oder mehrere geordnete Listen (<ol> Elemente) auf der Seite.

Versuchen Sie, durch die Sidebar zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass im Allgemeinen, wenn Sie zu einer Seite navigieren, die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt sind, und dass die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Standard-Sidebar-Beispiele

Einige der anderen Standard-Sidebars, denen Sie häufig begegnen werden, sind die folgenden:

- `\{{CSSRef}}`

  - : Auf jeder [CSS](/de/docs/Web/CSS) Seite vorhanden.

- `\{{GlossarySidebar}}`

  - : Auf jeder [Glossar](/de/docs/Glossary) Seite vorhanden.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite im [Abschnitt Webentwicklung lernen](/de/docs/Learn_web_development).

- `\{{HTMLSidebar}}`

  - : Generiert die Sidebar für die [HTML](/de/docs/Web/HTML) Dokumentation.

- `\{{HTTPSidebar}}`

  - : Generiert die Sidebar für die [HTTP-Dokumentation](/de/docs/Web/HTTP).

- `\{{PWASidebar}}`

  - : Generiert die Sidebar für die [progressive Web-App- (PWA)](/de/docs/Web/Progressive_web_apps) Dokumentation.

> [!NOTE]
> Das passende Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp beinhaltet das entsprechende Makro für diesen Seitentyp.

## Erklärte Sidebar YAML-Syntax

In diesem Abschnitt werden die verschiedenen Funktionen erläutert, die in MDN-Sidebars enthalten sein können, und die YAML-Syntax, die zur Generierung jeder davon verwendet wird. Während Sie diese Dokumentation durcharbeiten, sollten Sie die Funktionen mit der [bestehenden Sidebar YAML](https://github.com/mdn/content/tree/main/files/sidebars) vergleichen.

### Beginn einer Sidebar-Definition

Der Beginn jeder YAML-Sidebar-Datendefinition ist ein `sidebar` Schlüssel, dessen Wert eine Liste ist, die die Sidebar-Daten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einfache Einzel-Links

Um einen einfachen Einzel-Link in einer Sidebar zu erstellen, fügen Sie einen YAML-Listeneintrag mit einer relativen URL hinzu:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs` Verzeichnis in der MDN-URL-Struktur, daher würde beispielsweise `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog generieren. Das System verwendet automatisch den Dokumenttitel der verlinkten Seite als Linktext.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, müssen Sie zwei Schlüssel im Listeneintrag einschließen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der die relative URL wie zuvor enthält. Das folgende Beispiel würde einen Link zur MDN Web Docs-Änderungsliste wie zuvor erstellen, aber mit benutzerdefiniertem Linktext "Unser Änderungsprotokoll":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Sidebar-Element, das in einer größeren Schriftgröße als normale Sidebar-Elemente gerendert wird. Dies wird häufig als Titel oben in einer Sidebar verwendet, die auf die Startseite für diesen Abschnitt der Dokumentation verlinkt, oder als Abschnittstrenner im Fall von besonders großen Sidebars (wie im [Abschnitt Webentwicklung lernen](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type` Schlüssel mit einem Wert von `section` im Listeneintrag enthalten ist. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann einen benutzerdefinierten Linktext haben:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link` Schlüssel weglassen, um einfach einen Textlisteneintrag darzustellen, der keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von expandierenden/zusammenklappbaren Linklisten

Um eine expandierende/zusammenklappbare Liste von Links zu erstellen, erstellen Sie wie zuvor einen Listeneintrag, fügen jedoch einen `children` Schlüssel hinzu, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat dieselbe Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar seine eigenen `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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

Beachten Sie auch den `details` Schlüssel — dieser steuert, ob die Liste der Kinder eines Listenelements geschlossen oder geöffnet gerendert wird, wenn die Seite zum ersten Mal geladen wird. Mögliche Werte sind:

- `closed`: Die Kinder werden geschlossen gerendert, es sei denn, die aktuelle Seite ist mit einem der Kinder verlinkt, in diesem Fall werden sie geöffnet gerendert.
- `open`: Die Kinder werden immer geöffnet gerendert.

Wenn ein Listenelement sowohl `children` als auch `details` angegeben hat, wird es mit einer <details>/<summary> Elementstruktur innerhalb gerendert, die die Kinderliste enthält, die dann durch Klicken auf das Offenlegungsdreiecksymbol oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> ein-/ausgeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste mit Links zu den Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies erzeugen, indem Sie einen Listeneintrag mit einem `type` Schlüssel von Wert `listSubPages` und einem `path` Schlüssel angeben, dessen Wert der Pfad zur Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte [Glossar](/de/docs/Glossary) Sidebar-Definition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Sidebar mit einem Abschnittstitel, der zur Startseite des Glossars verlinkt, und einer obersten Liste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als übergeordnetes Listenelement rendern möchten, bei dem die Unterseiten als eine expandierende/zusammenklappbare Kinderliste erscheinen, müssen Sie zusätzlich einen `title` Schlüssel hinzufügen, der den anzuzeigenden Text für das übergeordnete Element angibt, und einen `details` Schlüssel hinzufügen, der das Öffnungs-/Schließverhalten der <details>/<summary> Struktur spezifiziert.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Listen-Unterseiten

Es gibt auch einen `type` Wert von `listSubPagesGrouped`. Dies führt dazu, dass alle Unterseiten mit Titeln, die mit demselben Präfix gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in eine Kinderliste unter einem Listenelement des Präfixes plus Bindestrich und Sternchen (zum Beispiel `item-*`) aufgenommen werden.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossar-Sidebar-Definition auf das folgende aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten in einer Kinderlistenstruktur wie folgt gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der [CSS](/de/docs/Web/CSS) Sidebar-Definition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurz- und Langhand-Eigenschaften zusammenzufassen. Das Listenelement, das das Eigenschafts-Sidebar-Menü generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelement-Definition enthält auch `tags`, das ist das Thema des nächsten Abschnitts.

#### Filtern von Listen-Unterseiten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type` Schlüssel im Frontmatter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listeneinträge nach Seitentyp filtern. Dazu schließen Sie einen `tags` Schlüssel in den Listeneintrag ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in die generierten Listeneinträge aufnehmen möchten. Die CSS-Sidebar enthält mehrere solche Beispiele:

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

### Lokalisieren von Textzeichenfolgen

Wie wir oben erklärt haben, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title` Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title` Schlüssel einfügen und dann die Definitionen dessen, was dieser Platzhalter in verschiedenen Sprachen sein soll, in einem `l10n` Wörterbuch am Ende der YAML-Datei einschließen.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Sidebar (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}} Typ-Referenzseiten erzeugt. Der übergeordnete Listenelementtext ist im `title` Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Unten am Ende der Datei definieren wir das `l10n` Wörterbuch. Jeder Schlüssel in `l10n` repräsentiert eine andere Locale — `en-US`, `fr`, `ja`, usw. Der Wert jedes dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die in den Listenelementdefinitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert des Platzhalters in der jeweiligen Locale.

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

Wir haben nur die `Input_types` Werte in jeder Locale aus Gründen der Kürze einbezogen.

Wenn die Sidebar gerendert wird, ersetzt das System den Text `Input_types` durch seinen definierten Wert in der jeweiligen Locale-Version der Seite, die aufgerufen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn ein MDN-Locale aufgerufen wird, das keinen definierten Wert für einen bestimmten Platzhalter hat, wird standardmäßig die `en-US` Version verwendet. Wenn keine `en-US` Version definiert ist, wird der wörtliche Platzhaltertext angezeigt (der in diesem Fall `Input_types` wäre).

## Nicht-standardisierte Sidebars

Es gibt einige Sidebars auf MDN, die das oben beschriebene Standard-System nicht nutzen. Dies sind komplexe, vollautomatische Makros, die nicht sehr oft geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Sidebar, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu den auf der Schnittstelle definierten Mitgliedern — Eigenschaften, Methoden, Ereignisse, usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Datei definiert ist. Um die unten in der Sidebar angezeigten verwandten Seiten zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Sidebar, die auf [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Datei definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Sidebar einer bestimmten API verlinkt sind, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Sidebar auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzelne Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie denken, dass eine dieser aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Content-Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenbereichs-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
