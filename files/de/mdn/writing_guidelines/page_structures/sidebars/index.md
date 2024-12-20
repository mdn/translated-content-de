---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{MDNSidebar}}

MDN-Seiten enthalten alle Seitenleisten. Die meisten von ihnen werden mit einem standardisierten System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten auf Seiten mittels Makroaufrufen einfügt.

In diesem Leitfaden erfahren Sie, wie diese Seitenleisten funktionieren, damit Sie bestehende bearbeiten und neue bei Bedarf erstellen können. Wir gehen auch auf diejenigen ein, die das standardisierte System noch nicht nutzen.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool`-Befehle zur Formatierung und zum Synchronisieren mit Umleitungen verwenden.
> Siehe die Dokumentation zum [Yari CLI-Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für weitere Informationen.

## Funktionsweise von Seitenleisten

Jede Seitenleiste hat eine entsprechende YAML-Datei im `content`-Repo von MDN im [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars)-Verzeichnis. Diese definiert die hierarchische Struktur der Links in der Seitenleiste, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierte Überschriften-/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Wenn wir als Beispiel die Seite nehmen, die Sie sich gerade ansehen, ist die Struktur der Seitenleiste in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im gleichen Dokumentbaum) gerendert, indem ein entsprechender Makroaufruf — `\{{MDNSidebar}}` — direkt unterhalb des Frontmatters in der [Dokumentquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Wenn Sie den `\{{MDNSidebar}}`-Makroaufruf in der Quelle einfügen, sucht das System nach einer YAML-Datei mit demselben Namen im `files/sidebars`-Verzeichnis. Falls eine solche Datei gefunden wird, sorgt das System automatisch dafür, dass die Seitenleiste gerendert und auf der Seite als eine oder mehrere geordnete Listen (<ol> Elemente) platziert wird.

Versuchen Sie, in der Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass im Allgemeinen beim Navigieren zu einer Seite die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt bleiben und die Seite, auf der Sie sich befinden, hervorgehoben wird.

## Beispiele für standardisierte Seitenleisten

Einige der anderen standardisierten Seitenleisten, die Sie häufig antreffen werden, sind:

- `\{{CSSRef}}`

  - : Auf jeder [CSS](/de/docs/Web/CSS) Seite vorhanden.

- `\{{GlossarySidebar}}`

  - : Auf jeder [Glossary](/de/docs/Glossary) Seite vorhanden.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite innerhalb des Abschnitts [Learn web development](/de/docs/Learn_web_development) vorhanden.

- `\{{HTMLSidebar}}`

  - : Generiert die Seitenleiste für die [HTML](/de/docs/Web/HTML)-Dokumentation.

- `\{{HTTPSidebar}}`

  - : Generiert die Seitenleiste für die [HTTP-Dokumentation](/de/docs/Web/HTTP).

- `\{{PWASidebar}}`

  - : Generiert die Seitenleiste für die [progressive web app (PWA)](/de/docs/Web/Progressive_web_apps)-Dokumentation.

> [!NOTE]
> Das geeignete Makro richtet sich nach dem [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das passende Makro für diesen Seitentyp.

## Erklärung der Seitenleisten-YAML-Syntax

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die zur Erstellung jeder Funktion verwendet wird. Während Sie diese Dokumentation durchgehen, sollten Sie die Funktionen mit der [bestehenden Seitenleisten-YAML](https://github.com/mdn/content/tree/main/files/sidebars) vergleichen.

### Starten einer Seitenleisten-Definition

Der Anfang jeder YAML-Seitenleiste-Datenstruktur ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleisten-Daten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links erstellen

Um einen einfachen Link in einer Seitenleiste zu erstellen, fügen Sie einen YAML-Listeneintrag mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur. Beispielsweise würde `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog generieren. Das System verwendet automatisch den Dokumenttitel der verlinkten Seite als Linktext.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, müssen Sie zwei Schlüssel im Listeneintrag einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der wie zuvor die relative URL enthält. Das folgende Beispiel würde einen Link zum MDN Web Docs Changelog wie zuvor erstellen, jedoch mit dem benutzerdefinierten Linktext "Unser Changelog":

```yaml
sidebar:
  - title: Our changlog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenleiste-Element, das in einer größeren Schriftgröße als normale Seitenleiste-Elemente gerendert wird. Dies wird häufig als Titel oben in einer Seitenleiste verwendet, der zur Einstiegsseite für diesen Dokumentationsabschnitt verlinkt, oder als Abschnittstrenner im Falle besonderer großer Seitenleisten (wie im [Learn web development section](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` im Listeneintrag enthalten ist. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann mit benutzerdefiniertem Linktext spezifiziert werden:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link`-Schlüssel weglassen, um einfach einen Textelement in der Liste zu rendern, der keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von expandierenden/einklappbaren Linklisten

Um eine expandierende/einklappbare Linkliste zu erstellen, erstellen Sie zunächst den Listenpunkt und fügen einen `children`-Schlüssel hinzu, dessen Wert eine Liste mit den Links ist, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat die gleiche Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar eigene `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob eine Liste von Kindelementen eines Listenelements beim ersten Laden der Seite geschlossen oder geöffnet gerendert wird. Mögliche Werte sind:

- `closed`: Die Kindelemente werden geschlossen gerendert, es sei denn, die aktuelle Seite wird von einem der Kindelemente verlinkt, in diesem Fall werden sie geöffnet gerendert.
- `open`: Die Kindelemente werden immer geöffnet gerendert.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einem `<details>`/<summary>` Elementaufbau im Inneren gerendert, das die Kindliste enthält. Diese kann dann durch Klicken auf das Dreieckssymbol erweitert/eingeklappt oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/eingeklappt werden.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste von Links zu den Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies durch Angabe eines Listenelements mit einem `type`-Schlüssel mit dem Wert `listSubPages` und einem `path`-Schlüssel, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie verlinken möchten, erreichen. Zum Beispiel sieht die gesamte [Glossary](/de/docs/Glossary) Seitenleistendefinition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Glossar-Startseite verlinkt, und einer Top-Level-Liste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als übergeordnetes Listenelement rendern möchten, wobei die Unterseiten als expandierende/einklappbare Kindliste angezeigt werden, müssen Sie zusätzlich einen `title`-Schlüssel hinzufügen, der den Text zur Anzeige des übergeordneten Listenelements angibt, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur spezifiziert.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Unterseiten-Listen

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dieser bewirkt, dass alle Unterseiten mit Titeln, die mit demselben Präfix gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in eine Kindliste unter einem Listenelement des Präfixes plus einem Bindestrich und einem Sternchen (zum Beispiel `item-*`) einbezogen werden.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossarleisten-Definition auf Folgendes aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten in eine Kindlistenstruktur wie diese gruppiert werden:

- CORS-*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden sich in der [CSS](/de/docs/Web/CSS) Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), bei der `listSubPagesGrouped` verwendet wird, um Links von verwandten Kurzschrift- und Langschrift-Eigenschaften zu gruppieren. Das Listenelement, das das Eigenschaften-Seitenleisten-Menü generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelementdefinition enthält auch `tags`, welches das Thema des nächsten Abschnitts ist.

#### Filtern von Unterseiten-Listen

Wenn Sie mehrere unterschiedliche Seitentypen innerhalb desselben Verzeichnisses haben (wie durch den `page-type`-Schlüssel im Front-matter der Seite angegeben), können Sie die Listenelemente filternd durch `listSubPages` und `listSubPagesGrouped` nach Seitentyp generieren lassen. Dazu fügen Sie einen `tags`-Schlüssel im Listenelement ein, dessen Wert ein einzelner Seitentyp oder eine Liste der einzuschließenden Seitentypen ist. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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

### Lokalisieren von Textstrings

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu definieren. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title`-Schlüssel einfügen und dann die Definitionen dessen, was dieser Platzhalter in verschiedenen Sprachen bedeuten soll, in einem `l10n`-Datenstruktur am Ende der YAML-Datei einfügen.

Sehen wir uns ein Beispiel an, um zu zeigen, wie dies aussieht. In der [HTML](/de/docs/Web/HTML) Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typen-Referenzseiten generiert. Der übergeordnete Listenelementtext ist im `title`-Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Unten im Datei definieren wir die `l10n`-Datenstruktur. Jeder Schlüssel innerhalb von `l10n` repräsentiert eine andere Lokalisierung — `en-US`, `fr`, `ja`, usw. Der Wert eines jeden dieser Schlüssel ist eine Unter-Datenstruktur, deren Schlüssel die in den Listenelementdefinitionen definierten Platzhalter sind. Jeder Tastwert ist der Platzhalterwert in dieser jeweiligen Lokalisierung.

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

Wir haben nur die `Input_types`-Werte in jeder Lokalisierung aus Platzgründen aufgenommen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in welcher auch immer Lokalisierungsversion der Seite zugegriffen wird. Vergleichen Sie beispielsweise die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn eine MDN-Lokalisierung aufgerufen wird, die keinen definierten Wert für einen bestimmten Platzhalter hat, wird standardmäßig die `en-US`-Version verwendet. Wenn keine `en-US`-Version definiert ist, wird der wörtliche Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Nicht-standardisierte Seitenleisten

Es gibt einige Seitenleisten auf MDN, die das oben beschriebene Standard-System nicht nutzen. Diese sind komplexe, vollautomatische Makros, die nicht häufig geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jedes Interface generiert das Makro automatisch Links zu den auf dem Interface definierten Mitgliedern — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die im unteren Abschnitt der Seitenleiste angezeigten verwandten Seiten zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in einer bestimmten API-Seitenleiste verlinkt sind, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzelne Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie der Meinung sind, dass einer dieser aktualisiert werden sollte, setzen Sie sich über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung.

## Siehe auch

- [Makros verwenden](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenabschnitts-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
