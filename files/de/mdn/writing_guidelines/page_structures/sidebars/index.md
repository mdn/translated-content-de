---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Alle MDN-Seiten sollten Sidebars haben. Die meisten von ihnen werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Sidebars über Front Matter oder ein Makro auf Seiten einfügt.

In diesem Leitfaden lernen Sie, wie diese Sidebars funktionieren, damit Sie bestehende Sidebars bearbeiten und bei Bedarf neue erstellen können.

> [!NOTE]
> Wenn Sie Sidebars bearbeiten, können Sie `yarn tool`-Befehle zum Formatieren und Synchronisieren mit Weiterleitungen verwenden.
> Siehe die Dokumentation zum [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für weitere Informationen.

## Wie Sidebars funktionieren

Jede Sidebar hat eine entsprechende YAML-Datei, die sich im `content`-Repo von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) befindet. Diese definiert die hierarchische Struktur der Sidebar-Links, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierten Überschriften-/Linktext, der bei Bedarf in verschiedene Sprachen lokalisiert werden kann.

Die Seite, die Sie gerade lesen, hat eine Sidebar, die in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert ist.

Die Sidebar wird auf der aktuellen Seite (und allen anderen im selben Dokumentenbaum) gerendert, indem ein `sidebar`-Eintrag in der [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Das Front Matter ist der Inhalt zwischen den Bindestrichen. Wenn `sidebar: mdnsidebar` im Front Matter enthalten ist, sucht das System nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars`. Wenn es eine findet, kümmert es sich automatisch um das Rendern der Sidebar und das Platzieren auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, in der Sidebar zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass im Allgemeinen beim Navigieren zu einer Seite die Linkliste für den Abschnitt, in dem Sie sich befinden, erweitert wird, während die anderen eingeklappt werden und die Seite, auf der Sie sich befinden, hervorgehoben wird.

## Erklärung der Sidebar-YAML-Syntax

In diesem Abschnitt werden die verschiedenen Funktionen erklärt, die in MDN-Sidebars enthalten sein können, und die YAML-Syntax, die zur Generierung jeder dieser Funktionen verwendet wird. Während Sie diese Dokumentation durchgehen, vergleichen Sie die Funktionen mit der [bestehenden Sidebar-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Start einer Sidebar-Definition

Der Beginn jeder YAML-Sidebar-Datendefinition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Sidebar-Daten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Sidebar zu erstellen, fügen Sie ein YAML-Listenelement ein, das eine relative URL enthält:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur. Zum Beispiel würde `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog erzeugen. Das System verwendet automatisch den Dokumenttitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title`-Schlüssel im Front Matter hat, wird dieser anstelle des Dokumenttitels für die Anzeige des Sidebar-Links verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der weder der `title` noch `short-title` eines Dokuments ist, müssen Sie zwei Schlüssel im Listenelement einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der die relative URL wie zuvor enthält. Das folgende Beispiel würde wie zuvor einen Link zum MDN Web Docs-Changelog erstellen, jedoch mit dem benutzerdefinierten Linktext "Unser Changelog":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Sidebar-Element, das in einer größeren Schriftgröße als normale Sidebar-Elemente dargestellt wird. Dies wird üblicherweise als Titel oben in einer Sidebar verwendet, die zur Startseite für diesen Abschnitt der Dokumente verlinkt, oder als Abschnittsunterteiler im Fall von besonders großen Sidebars (wie im Abschnitt [Lernen Webentwicklung](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` im Listenelement eingefügt wird. Zum Beispiel:

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

Oder Sie können den `link`-Schlüssel weglassen, um einfach ein Textelement darzustellen, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von erweiterbaren/einklappbaren Linklisten

Um eine erweiterbare/einklappbare Linkliste zu erstellen, erstellen Sie ein Listenelement wie zuvor, fügen jedoch einen `children`-Schlüssel hinzu, dessen Wert eine Liste enthält, die die Links enthält, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat die gleiche Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar eigene `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der untergeordneten Elemente eines Listenelements geschlossen oder geöffnet dargestellt wird, wenn die Seite das erste Mal geladen wird. Mögliche Werte sind wie folgt:

- `closed`: Die untergeordneten Elemente werden geschlossen dargestellt, es sei denn, auf die aktuelle Seite wird von einem der untergeordneten Elemente verlinkt, in diesem Fall werden sie geöffnet dargestellt.
- `open`: Die untergeordneten Elemente werden immer geöffnet dargestellt.

Wenn ein Listenelement `children` und `details` enthält, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur gerendert, die die untergeordnete Liste enthält. Diese kann dann durch Klicken auf das Offenlegungssymbol oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/eingeklappt werden.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste mit Links zu den Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies erzeugen, indem Sie ein Listenelement mit einem `type`-Schlüssel von Wert `listSubPages` angeben, und einem `path`-Schlüssel, dessen Wert der Pfad zur Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte [Glossar](/de/docs/Glossary)-Sidebar-Definition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Sidebar mit einem Abschnittstitel, der zurück zur Glossar-Startseite verlinkt, und einer obersten Liste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als übergeordnetes Listenelement darstellen möchten, bei dem die Unterseiten als erweiterbare/einklappbare untergeordnete Liste erscheinen, müssten Sie zusätzlich einen `title`-Schlüssel hinzufügen, der den Text für das übergeordnete Element angibt, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur angibt.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppierung von Listenunterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies bewirkt, dass alle Unterseiten mit Titeln, die mit demselben Substring gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in einer untergeordneten Liste unter einem Listenelement des Substrings plus einem Bindestrich und einem Stern (zum Beispiel `item-*`) aufgenommen werden.

Zum Beispiel enthält das MDN Glossar zum Zeitpunkt dieses Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossar-Sidebar-Definition auf Folgendes aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Dann würden die Links zu diesen Seiten in einer Kinderlistenstruktur wie dieser gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realisierbare Beispiele finden Sie in der Sidebar-Definition [CSS](/de/docs/Web/CSS) (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten abgekürzten und langformigen Eigenschaften zusammenzufassen. Das Listenelement, das das Eigenschaften-Sidebarmenu generiert, sieht so aus:

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

#### Filtern von Listenunterseiten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type`-Schlüssel im Front Matter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listenelemente nach Seitentyp filtern. Dazu fügen Sie einen `tags`-Schlüssel innerhalb des Listenelements hinzu, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den erzeugten Listenelementen einbeziehen möchten. Die CSS-Sidebar enthält mehrere solche Beispiele:

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

### Lokalisieren von Textzeichenfolgen

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einen `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title`-Schlüssel einfügen und dann die Definitionen, was dieser Platzhalter in verschiedenen Sprachen sein soll, in ein `l10n`-Wörterbuch am Ende der YAML-Datei aufnehmen.

Sehen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Sidebar (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typ-Referenzseiten generiert. Der Text des übergeordneten Listenelements wird im `title`-Schlüssel als Platzhalter `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Ganz unten in der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel innerhalb von `l10n` repräsentiert ein anderes Sprachgebietsschema — `en-US`, `fr`, `ja`, etc. Der Wert eines jeden dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die in den Listenelementdefinitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in dem jeweiligen Sprachgebietsschema.

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

Wir haben nur die `Input_types`-Werte in jedem Sprachgebietsschema der Übersichtlichkeit halber eingefügt.

Wenn die Sidebar gerendert wird, ersetzt das System den `Input_types`-Text durch den definierten Wert im entsprechenden Sprachgebietsschema der Website. Vergleichen Sie beispielsweise Folgendes:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf ein MDN-Sprachgebietsschema zugegriffen wird, das keinen definierten Wert für einen bestimmten Platzhalter hat, wird standardmäßig die `en-US`-Version verwendet. Wenn keine `en-US`-Version definiert ist, wird der literal Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Nicht Standard-Sidebars

Es gibt einige Sidebars auf MDN, die nicht das oben beschriebene Standard-System verwenden. Diese sind komplexe, vollautomatisierte Makros, die nicht sehr oft geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Sidebar, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jedes Interface generiert das Makro automatisch Links zu Mitgliedern, die auf dem Interface definiert sind — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verwandten Seiten zu bearbeiten, die unten in der Sidebar angezeigt werden, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Sidebar, die auf [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Sidebar einer bestimmten API verlinkt sind, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Sidebar auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzelne Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie denken, dass eines davon aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektion-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
