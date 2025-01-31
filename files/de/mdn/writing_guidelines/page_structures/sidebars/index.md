---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN-Seiten umfassen alle Seitenleisten. Die meisten von ihnen werden durch ein standardisiertes System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten auf Seiten mithilfe von Makroaufrufen einfügt.

In diesem Leitfaden erfahren Sie, wie diese Seitenleisten funktionieren, sodass Sie vorhandene Seitenleisten bearbeiten und bei Bedarf neue erstellen können. Wir gehen auch auf diejenigen ein, die noch nicht das standardisierte System verwenden.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool`-Befehle zum Formatieren und Synchronisieren mit Umleitungen verwenden.
> Siehe die Dokumentation von [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für weitere Informationen.

## Wie Seitenleisten funktionieren

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im MDN-`content`-Repository im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) befindet. Diese definiert die hierarchische Struktur der Seitenleisten-Links, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierte Überschriften-/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Wenn wir als Beispiel die Seite nehmen, die Sie gerade betrachten, wird die Struktur der Seitenleiste in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im gleichen Dokumentbaum) angezeigt, indem ein entsprechender Makroaufruf — `\{{MDNSidebar}}` — direkt unterhalb des Frontmatters in der [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Einfügen des `\{{MDNSidebar}}`-Makroaufrufs in die Quelle veranlasst das System dazu, nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars` zu suchen. Wenn es eine findet, kümmert es sich automatisch um das Rendern der Seitenleiste und das Platzieren auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, durch die Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass beim Navigieren zu einer Seite in der Regel die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen reduziert werden und die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Beispiele für standardisierte Seitenleisten

Einige der anderen standardisierten Seitenleisten, denen Sie häufig begegnen werden, sind wie folgt:

- `\{{CSSRef}}`

  - : Auf jeder [CSS](/de/docs/Web/CSS) Seite vorhanden.

- `\{{GlossarySidebar}}`

  - : Auf jeder [Glossar](/de/docs/Glossary) Seite vorhanden.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite im Abschnitt [Lernen von Webentwicklung](/de/docs/Learn_web_development) vorhanden.

- `\{{HTMLSidebar}}`

  - : Generiert die Seitenleiste für die [HTML](/de/docs/Web/HTML) Dokumentation.

- `\{{HTTPSidebar}}`

  - : Generiert die Seitenleiste für die [HTTP-Dokumentation](/de/docs/Web/HTTP).

- `\{{PWASidebar}}`

  - : Generiert die Seitenleiste für die [Progressive Web App (PWA)](/de/docs/Web/Progressive_web_apps) Dokumentation.

> [!NOTE]
> Das entsprechende Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das entsprechende Makro für diesen Seitentyp.

## Erläuterung der Sidebar-YAML-Syntax

Dieser Abschnitt erläutert die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die verwendet wird, um jede davon zu generieren. Während Sie diese Dokumentation durcharbeiten, vergleichen Sie die Funktionen mit der [vorhandenen Sidebar-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Starten einer Sidebar-Definition

Der Beginn jeder YAML-Seitenleiste-Datendefinition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleisten-Daten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einfache Einzel-Links

Um einen einfachen Einzel-Link in einer Seitenleiste zu erstellen, fügen Sie einen YAML-Listeneintrag mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur. Zum Beispiel würde `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog generieren. Das System verwendet automatisch den Dokumenttitel der verknüpften Seite als Linktext.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, müssen Sie zwei Schlüssel im Listenelement einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der wie zuvor die relative URL enthält. Das folgende Beispiel würde wie zuvor einen Link zum MDN-Webdokumenten-Änderungsprotokoll erstellen, jedoch mit benutzerdefiniertem Linktext "Unser Änderungsprotokoll":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenleistentext, der in einer größeren Schriftgröße als normale Seitenleistenartikel gerendert wird. Dies wird häufig als Titel oben in einer Seitenleiste verwendet, der auf die Einstiegsseite für diesen Abschnitt der Dokumentation verweist, oder als Abschnittstrennzeichen im Fall besonders großer Seitenleisten (wie im Abschnitt [Lernen von Webentwicklung](/de/docs/Learn_web_development)).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit dem Wert `section` im Listenelement enthalten ist. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann benutzerdefinierten Linktext enthalten:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link`-Schlüssel weglassen, um einfach ein Textelement zu erstellen, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von erweiterbaren/reduzierbaren Listen von Links

Um eine erweiterbare/reduzierbare Liste von Links zu erstellen, erstellen Sie ein Listenelement wie zuvor, aber fügen einen `children`-Schlüssel hinzu, dessen Wert eine Liste ist, die die Links enthält, die als untergeordnete Listenelemente unter dem übergeordneten Element angezeigt werden sollen. Jedes untergeordnete Listenelement hat die gleiche Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar eigene `children` enthalten, wodurch Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
          - /MDN/Community/Our_repositories
          - /MDN/Community/Translated_content
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
      - /MDN/Community/Learn_forum
      - /MDN/Community/Issues
      - /MDN/Community/Pull_requests
      - /MDN/Community/Roles_teams
```

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der Kinder eines Listenelements geschlossen oder offen gerendert wird, wenn die Seite zum ersten Mal geladen wird. Mögliche Werte sind wie folgt:

- `closed`: Die Kinder werden geschlossen gerendert, es sei denn, die aktuelle Seite wird von einem der Kinder verlinkt, in diesem Fall werden sie offen gerendert.
- `open`: Die Kinder werden immer offen gerendert.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur innerhalb davon gerendert, die die Kinderliste enthält, die dann durch Klicken auf das Offenlegungspfeildreieck oder Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/reduziert werden kann.

### Automatische Rendering einer Unterseitenliste

Wenn Sie eine Liste mit Links zu den Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies generieren, indem Sie ein Listenelement mit einem `type`-Schlüssel mit dem Wert `listSubPages` und einem `path`-Schlüssel angeben, dessen Wert der Pfad zur Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte [Glossar](/de/docs/Glossary) Seitenleiste-Definition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Einstiegsseite des Glossars verlinkt, und einer obersten Liste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als übergeordnetes Listenelement mit den Unterseiten, die als erweiterbare/reduzierbare Kinderliste erscheinen, rendern möchten, müssen Sie zusätzlich einen `title`-Schlüssel angeben, der den anzuzeigenden Text für das übergeordnete Element angibt, und einen `details`-Schlüssel, der das Offen-/Schließverhalten der `<details>`/`<summary>`-Struktur angibt.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Listen-Unterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies führt dazu, dass alle Unterseiten mit Titeln, die mit derselben Zeichenfolge gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in einer Kinderliste unter einem Listenelement der Zeichenfolge sowie einem Bindestrich und einem Sternchen (zum Beispiel `item-*`) enthalten sind.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Definition der Glossar-Seitenleiste auf diese aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Die Links zu diesen Seiten würden in einer Kinderlistenstruktur wie dieser gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der [CSS](/de/docs/Web/CSS)-Seitenleiste-Definition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links von verwandten Kurz- und Langformeigenschaften zu gruppieren. Das Listenelement, das das Eigenschaften-Seitenleistenmenü generiert, sieht wie folgt aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelement-Definition enthält auch `tags`, was das Thema des nächsten Abschnitts ist.

#### Filtern von Listen-Unterseiten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch die Angabe des `page-type`-Schlüssels im Frontmatter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listenelemente nach Seitentyp filtern. Um dies zu tun, schließen Sie einen `tags`-Schlüssel innerhalb des Listenelements ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen einschließen möchten. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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

Wie wir oben erklärt haben, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie in der `title`-Taste einen Platzhalter einfügen und dann die Definitionen dessen, was dieser Platzhalter sein sollte, in verschiedenen Sprachen in einem `l10n`-Wörterbuch am Ende der YAML-Datei aufnehmen.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML)-Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typreferenzseiten generiert. Der übergeordnete Listenelement-Text wird im `title`-Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel in `l10n` stellt eine andere Locale dar — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unter-Wörterbuch, dessen Schlüssel die in den Listenelement-Definitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in der jeweiligen Locale.

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

Wir haben nur die `Input_types`-Werte in jedem Locale zur Kürze aufgenommen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in welcher Locale auch immer die Version der Site aufgerufen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf eine MDN-Locales zugegriffen wird, die keinen definierten Wert für einen bestimmten Platzhalter hat, wird standardmäßig die `en-US`-Version angezeigt. Wenn keine `en-US`-Version definiert ist, wird der buchstäbliche Platzhaltertext angezeigt (was im obigen Fall `Input_types` wäre).

## Nicht standardisierte Seitenleisten

Es gibt einige Seitenleisten auf MDN, die nicht das oben beschriebene standardisierte System verwenden. Dies sind komplexe, vollautomatische Makros, die nicht sehr oft geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu Mitgliedern, die in der Schnittstelle definiert sind — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Datei definiert ist. Um die verwandten Seiten zu bearbeiten, die am unteren Rand der Seitenleiste angezeigt werden, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Einstiegsseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)-Datei definiert ist. Um die in einer bestimmten API-Seitenleiste verknüpften Leitfäden, Schnittstellen usw. zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzelne Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie glauben, dass eine dieser aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwenden von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltsverlinkungs-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenteil-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner und Hinweise Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
- [Alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
