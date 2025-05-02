---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

Alle MDN-Seiten sollten Seitenleisten haben.
Die meisten von ihnen werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten über Frontmatter oder ein Makro auf Seiten einbindet.

In diesem Leitfaden lernen Sie, wie diese Seitenleisten funktionieren, damit Sie bestehende Seitenleisten bearbeiten und neue erstellen können, wenn nötig.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool` Befehle zum Formatieren und Synchronisieren mit Weiterleitungen verwenden.
> Siehe die Dokumentation zu [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für Informationen.

## Wie Seitenleisten funktionieren

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im `content` Repository von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) befindet. Diese definiert die hierarchische Struktur der Seitenleisten-Links, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierten Überschriften-/Linktext, der bei Bedarf in verschiedene Sprachen lokalisiert werden kann.

Die Seite, die Sie gerade lesen, hat eine in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definierte Seitenleiste.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im selben Dokumentbaum) gerendert, indem ein `sidebar`-Eintrag in das [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) Frontmatter eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Das Frontmatter ist der Inhalt zwischen den Strichen. Das Einfügen von `sidebar: mdnsidebar` im Frontmatter führt dazu, dass das System nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars` sucht. Wenn es eine findet, kümmert es sich automatisch um das Rendern der Seitenleiste und das Platzieren auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, sich in der Seitenleiste zu bewegen, bevor Sie auf diese Seite zurückkehren. Sie werden feststellen, dass beim Navigieren zu einer Seite die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt sind, und die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Erklärung der Sidebar YAML-Syntax

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die verwendet wird, um jede zu erzeugen. Während Sie diese Dokumentation durchgehen, vergleichen Sie die Funktionen mit der [bestehenden Seitenleisten-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Eine Seitenleiste definieren

Der Beginn jeder YAML-Daten-Definition einer Seitenleiste ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Daten der Seitenleiste definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Seitenleiste zu erstellen, fügen Sie einen YAML-Listenpunkt ein, der eine relative URL enthält:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

Die URL ist relativ zum Verzeichnis `docs` in der MDN-URL-Struktur, so dass zum Beispiel `/MDN/Writing_guidelines/Page_structures/Sidebars` einen Link zur aktuellen Seite erzeugen würde. Das System verwendet automatisch den Dokumententitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title`-Schlüssel im Frontmatter hat, wird dieser stattdessen für den Seitenleistentext verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der weder der `title` noch der `short-title` eines Dokuments ist, müssen Sie zwei Schlüssel innerhalb des Listenpunkts einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der wie zuvor die relative URL enthält. Das folgende Beispiel würde einen Link zur aktuellen Seite erstellen, jedoch mit dem benutzerdefinierten Linktext "Writing sidebars":

```yaml
sidebar:
  - title: Writing sidebars
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Abschnittstitel

Ein Abschnittstitel ist ein Element der Seitenleiste, das in einer größeren Schriftgröße als normale Seitenleistentitel gerendert wird. Dies wird häufig als Titel oben in einer Seitenleiste verwendet, der zur Hauptseite des jeweiligen Abschnitts der Dokumente verlinkt, oder als Abschnittstrenner im Falle besonders großer Seitenleisten (wie im [Abschnitt zur Webentwicklung lernen](/de/docs/Learn_web_development).)

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` in den Listenpunkt eingefügt wird. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann auch benutzerdefinierten Linktext enthalten:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link`-Schlüssel weglassen, um einfach einen Textlistenpunkt zu rendern, der keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von ein- und ausklappbaren Linklisten

Um eine ein- und ausklappbare Liste von Links zu erstellen, erstellen Sie einen Listenpunkt wie zuvor, fügen jedoch einen `children`-Schlüssel hinzu, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listenpunkte unter dem übergeordneten Element anzeigen möchten. Jeder untergeordnete Listenpunkt hat dieselbe Syntax wie der übergeordnete. Ein untergeordneter Listenpunkt kann sogar seine eigenen `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der untergeordneten Elemente eines Listenelements beim ersten Laden der Seite geschlossen oder geöffnet angezeigt wird. Mögliche Werte sind wie folgt:

- `closed`: Die untergeordneten Elemente werden geschlossen angezeigt, es sei denn, die aktuelle Seite wird von einem der untergeordneten Elemente verlinkt, in diesem Fall werden sie geöffnet angezeigt.
- `open`: Die untergeordneten Elemente werden immer geöffnet angezeigt.

Wenn ein Listenelement `children` und `details` spezifiziert hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur innerhalb desselben gerendert, die die untergeordnete Liste enthält, die dann durch Klicken auf das Offenlegungspfeil-Widget oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/eingeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste erstellen möchten, die Links zu den Unterseiten einer bestimmten Seite enthält, können Sie dies erzeugen, indem Sie einen Listenpunkt mit einem `type`-Schlüssel im Wert `listSubPages` und einem `path`-Schlüssel spezifizieren, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie mit Links versehen möchten. Zum Beispiel sieht die gesamte Definition der [Glossar](/de/docs/Glossary) Seitenleiste (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Hauptseite des Glossars verlinkt, und einer Liste von Links zu allen Glossarunterseiten auf oberster Ebene.

Wenn Sie dies als übergeordnetes Listenobjekt darstellen möchten, wobei die Unterseiten als ein- und ausklappbare untergeordnete Liste erscheinen, müssen Sie zusätzlich einen `title`-Schlüssel einfügen, der den anzuzeigenden Text für das übergeordnete Element angibt, sowie einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur spezifiziert.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Listenunterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies bewirkt, dass alle Unterseiten mit Titeln, die mit demselben Substring gefolgt von einem Bindestrich (zum Beispiel `element-`) beginnen, in einer untergeordneten Liste unter einem Listenelement des Substrings, zuzüglich eines Bindestrichs und eines Sterns (zum Beispiel `element-*`), enthalten sind.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Definition der Glossarseitenleiste wie folgt aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten so in einer untergeordneten Listenstruktur gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der Definition der [CSS](/de/docs/Web/CSS) Seitenleiste (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurz- und Langform-Eigenschaften zu gruppieren. Das Listenobjekt, das das Eigenschaftenseitenleistenmenü erzeugt, sieht so aus:

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

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type`-Schlüssel im Frontmatter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listenelemente nach Seitentypen filtern. Um dies zu tun, fügen Sie einen `tags`-Schlüssel innerhalb des Listenelements ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen einschließen möchten. Die CSS-Seitenleiste enthält mehrere solcher Beispiele:

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
# etc.
```

### Textstrings lokalisieren

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel im `title`-Schlüssel zu bestimmen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie ein Platzhalter im `title`-Schlüssel einfügen und dann die Definitionen dessen, was dieser Platzhalter in verschiedenen Sprachen sein sollte, in einem `l10n`-Wörterbuch am Ende der YAML-Datei einfügen.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typ-Referenzseiten erzeugt. Der übergeordnete Listenelementtext wird im `title`-Schlüssel als ein Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel innerhalb von `l10n` repräsentiert eine andere Locale — `en-US`, `fr`, `ja`, usw. Der Wert jedes dieser Schlüssel ist ein Unter-Wörterbuch, dessen Schlüssel die Platzhalter sind, die in den Listenelementdefinitionen definiert wurden. Jeder Schlüsselwert ist der Wert dieses Platzhalters in der jeweiligen Locale.

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

Wir haben nur die `Input_types`-Werte in jeder Locale aus Gründen der Kürze aufgenommen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in welcher Locale-Version der Website auch immer aufgerufen wird. Vergleichen Sie zum Beispiel Folgendes:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf eine MDN-Locale zugegriffen wird, die keinen definierten Wert für einen bestimmten Platzhalter hat, wird die `en-US`-Version als Standard verwendet. Wenn keine `en-US`-Version definiert ist, wird der wörtliche Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Nicht-standardmäßige Seitenleisten

Es gibt einige Seitenleisten auf MDN, die nicht das standardmäßige System verwenden, das oben beschrieben ist. Dies sind komplexe, vollautomatisierte Makros, die nicht sehr häufig geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jedes Interface generiert das Makro automatisch Links zu den auf dem Interface definierten Mitgliedern — Eigenschaften, Methoden, Ereignisse usw. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verwandten Seiten zu bearbeiten, die am unteren Rand der Seitenleiste angezeigt werden, bearbeiten Sie diesen API-Eintrag in der GroupData.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Seitenleiste einer bestimmten API verlinkt sind, bearbeiten Sie den API-Eintrag in der GroupData.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzige Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie denken, dass eine dieser Seitenleisten aktualisiert werden sollte, nehmen Sie über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns auf.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektions-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
